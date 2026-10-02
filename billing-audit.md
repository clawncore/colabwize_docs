# COLABWIZE BILLING AUDIT & IMPLEMENTATION PLAN

> Derived from `docs/billing.md` and a full read of the current billing source code
> in `backend/src`. This is an internal engineering review, **not** a pricing or
> payment-provider review.

---

## 0. Executive summary

The billing system has grown organically into **three overlapping enforcement
APIs** (`assertCanUse`, `consumeAction`, `checkActionEligibility`) spread across
two services (`EntitlementService`, `SubscriptionService`), plus a third
`UsageService` that re-consumes entitlements. The result is exactly the failure
mode `billing.md` warns about: **there are alternative execution paths**, and
several of them double-count, under-count, or bypass enforcement entirely.

The one genuinely good sign: `EntitlementService` is clearly intended to be the
single source of truth, and the newer routes already use it. The problem is the
legacy surface that still coexists with it.

### Bottom line

| Property | Status |
|---|---|
| Single enforcement lifecycle | ❌ Violated — 3 competing APIs |
| No alternative paths | ❌ Violated — legacy routes bypass `EntitlementService` |
| Atomic permission → execute → record | ❌ Violated — consume happens before execution in some paths, after in others, and twice in one path |
| Zero double counting | ❌ Violated — `/audit` consumes twice |
| Zero missed usage | ❌ Violated — `incrementFeatureUsage` middleware is a latent double-consume |
| Consistent credit accounting | ⚠️ Partial — word count is hardcoded to 1000 in two routes |

---

## 1. The three competing enforcement APIs

### 1A. `EntitlementService.assertCanUse(userId, feature, metadata)` — `EntitlementService.ts:304`
**Intended** single source of Truth. Behavior:
- Self-heals entitlement plan mismatches.
- **Consumes the entitlement optimistically inside the check** (lines 454-462):
  when `remaining > 0` it increments `used`/`remaining` in the `userEntitlement`
  row immediately and returns `true`.
- On exhausted quota, falls back to credits (free tier) or credit-overflow
  (paid tier), deducting within the same call.
- Throws typed errors (`PLAN_LIMIT_REACHED`, `INSUFFICIENT_CREDITS`,
  `ENTITLEMENT_ERROR`).

**Verdict:** This is the correct primitive — **check-and-consume is atomic at
the entitlement layer**. But it has a real bug: it consumes **before** the
feature runs (see §5).

### 1B. `SubscriptionService.consumeAction(userId, feature, metadata)` — `subscriptionService.ts:583`
Legacy two-phase primitive:
1. Checks plan usage via `checkMonthlyUsage`.
2. If available, calls `incrementUsage` (which upserts `usageTracking` **and**
   calls `EntitlementService.consumeEntitlement`).
3. If exhausted, deducts credits.

**Verdict:** Duplicates entitlement logic that `EntitlementService` already
owns. Still actively used by the citation routes and `paper_search`.

### 1C. `SubscriptionService.checkActionEligibility(userId, feature, metadata)` — `subscriptionService.ts:343`
A **dry-run** eligibility check (marked `@deprecated` in source). Returns a
`ConsumptionResult`. Does **not** consume anything itself.

**Verdict:** Deprecated but still called as the pre-flight check in the citation
routes, immediately followed by `consumeAction` — which is what actually
consumes. This is the double-consume bug.

---

## 2. Route-by-route enforcement audit

### `POST /api/citations/audit` — `api/citations/audit.ts:21` ⚠️ **DOUBLE-CONSUME BUG**
1. Line 53: `checkActionEligibility(...)` — dry run, no consumption. ✅
2. Line 72: runs the audit. ✅
3. Line 83: `consumeAction(...)` — this calls `incrementUsage`, which upserts
   `usageTracking` **and** calls `EntitlementService.consumeEntitlement`. ✅
4. **But** `consumeAction` also independently deducts credits as a fallback
   when the plan is exhausted (line 681), while the pre-flight already asked
   `checkActionEligibility` about credits. Net effect: **two separate plan/credit
   evaluations** for one request, and the `usageTracking` +
   `userEntitlement` counters can both be incremented.

**Severity: Critical.** One user request can burn a plan entitlement **and**
credits, or increment usage twice.

### `POST /api/citations/audit/unified` — `api/citations/audit.ts:183` ⚠️ **DOUBLE-CONSUME + HARDCODED WORD COUNT**
1. Line 220: `checkActionEligibility` with **hardcoded `wordCount: 1000`**.
2. Line 246: `consumeAction` with **hardcoded `wordCount: 1000`**.
3. The real document size is never passed, so credit cost is always the 1000-word
   floor regardless of actual length.

**Severity: Critical** (double-consume) + **High** (credit under-charge on long docs).

### `POST /api/originality/scan` — `api/originality/index.ts:48` ✅ **Correct pattern**
- Line 95: `EntitlementService.assertCanUse(userId, "originality_scan", { wordCount })`
  — real word count passed, single consume.
- Comment on line 116 confirms the team already removed the redundant
  `incrementFeatureUsage`.

### `POST /api/originality/rephrase` — `api/originality/index.ts:261` ✅
- Line 307: `assertCanUse(userId, "rephrase", { inputWords: wordCount })`.

### `POST /api/originality/humanize` / `rewrite-selection` — ✅
- Both use `assertCanUse(userId, "rephrase", { inputWords: wordCount })`.

### `POST /api/originality/section-check` — `api/originality/index.ts:578` ⚠️ **NO ENFORCEMENT**
- No entitlement check at all. Any authenticated user can run unlimited section
  checks. The method is lightweight but still hits the analysis pipeline.

**Severity: Medium.** Unmetered compute endpoint.

### `POST /api/originality/explain-risk` — line 650 ⚠️ **NO ENFORCEMENT**
- Comment says "No credit usage — value add for the scan." That's a product
  decision, but it's an AI call with no gate. If the intent is "included with
  scan," it should verify the user has scan entitlement, not skip billing
  entirely.

**Severity: Low–Medium** (depends on AI cost per call).

### `POST /api/citations/search` (& `search-external`) — `api/citations/search.ts:21` ⚠️ **LEGACY PATH**
- Line 55: `SubscriptionService.consumeAction(userId, "paper_search")` — uses the
  legacy two-phase path, not `assertCanUse`. No metadata passed, so credit
  fallback uses the default cost of 1.

**Severity: High** (inconsistent enforcement; on a legacy path that won't
self-heal).

### `POST /api/authorship/generate` (certificate) — `api/authorship/generate.ts:11` ✅
- Line 76: `assertCanUse(user.id, "certificate")`. Comment at line 209 confirms
  the old `consumeAction` call was removed.

### `POST /api/behavioral-tracking/analyze/:projectId` — `behavioral-tracking/index.ts:81` ✅
- Line 93: `assertCanUse(userId, "certificate")`.

### `POST /api/behavioral-tracking/` (raw ingest) — `behavioral-tracking/index.ts:9` ⚠️ **NO ENFORCEMENT**
- Pure analytics ingest, no billing gate. Reasonable (it's telemetry), but it
  writes `analyticsEvent` rows keyed by `userId` with no abuse guard beyond the
  FK. Worth a rate limit at least.

**Severity: Low.**

---

## 3. Usage accounting audit — two ledgers that can disagree

The system maintains **two** counters that are supposed to agree:

| Ledger | Table | Written by |
|---|---|---|
| Plan usage | `usageTracking` | `consumeAction` → `incrementUsage`; `UsageService.trackUsage` |
| Entitlement cache | `userEntitlement.features[*].used/remaining` | `assertCanUse`, `consumeEntitlement`, `rebuildEntitlements` |

### How they disagree

1. **`rebuildEntitlements` recomputes `used` from `usageTracking`**
   (`EntitlementService.ts:113-121`), but it reads `usageTracking` with the
   **subscription's** `current_period_start`, whereas `UsageService.trackUsage`
   and `incrementUsage` use **calendar-month** periods for free-tier users. If
   the subscription period and calendar month diverge, the rebuilt entitlement
   reads a different `usageTracking` row than the one that was incremented.

2. **`assertCanUse` mutates `userEntitlement.features` in place and writes the
   whole blob back** (lines 459-462). Two concurrent requests that both read the
   same entitlement row will **both succeed and both write**, one overwriting
   the other's increment — a classic lost update. `version` exists on the table
   but is not used for optimistic concurrency here.

3. **`UsageService.trackUsage` (`usageService.ts:27`) calls
   `EntitlementService.consumeEntitlement` after upserting `usageTracking`.**
   Meanwhile `assertCanUse` already consumed. So any caller that uses
   `assertCanUse` + `UsageService.trackUsage` double-decrements the entitlement.

### Stress-test outcomes

| Scenario | Current behavior | Correct? |
|---|---|---|
| Successful request | Consumed once (good path) or twice (citation routes) | ❌ inconsistent |
| Failed request after consume | Entitlement already decremented; no refund | ❌ revenue loss to user, but also no retry credit |
| Server crash after execution, before record | Not applicable — record happens *before* execution in `assertCanUse` | ❌ user charged for work that never ran |
| Server crash before recording | N/A for `assertCanUse`; for `consumeAction` the upsert and entitlement consume are not one transaction | ⚠️ can half-apply |
| Concurrent requests | Lost update on `userEntitlement.features`; `usageTracking.upsert` is safe (atomic increment) | ❌ entitlement cache corrupts |
| Double-click | Two requests, two consumes | ❌ no idempotency key |

---

## 4. Credit accounting audit

`CreditService` itself is **well implemented**:
- `addCredits` and `deductCredits` are wrapped in `prisma.$transaction`.
- `deductCredits` checks balance inside the transaction before decrementing.
- `addCredits` has reference-id idempotency for purchases (line 82-94).

**The bugs are in the callers, not the service:**

| Issue | Location | Impact |
|---|---|---|
| Hardcoded `wordCount: 1000` | `audit.ts:220`, `audit.ts:246` | A 50 000-word doc is charged as 1 000 words. **Under-charge.** |
| `consumeAction` passes no metadata for `paper_search` | `search.ts:55` | Falls back to default cost 1. |
| `calculateCost` returns `Math.ceil(words/1000)` — **no minimum of 1** for `citation_audit`/`scan` | `CreditService.ts:31` | A 1-word doc costs 0 credits. |
| `originality_scan` enforces `Math.max(1.5, rawCost)` minimum | `CreditService.ts:52` | Correct — but inconsistent with other features that have no floor. |
| Rounding | `Math.ceil` everywhere | Acceptable, but partial-word docs round up — fine. |

**Credit accounting verdict:** The ledger (`creditTransaction` + `creditBalance`)
is internally consistent. The **cost calculation is not** — it relies on callers
to pass real word counts, and two callers lie.

---

## 5. Execution safety — the "consume before execute" problem

`assertCanUse` decrements the entitlement **before** the feature runs. This is
the opposite of the lifecycle `billing.md` mandates:

```
billing.md:    Check → Execute → Record
assertCanUse:  Check+Record → Execute     ← WRONG ORDER
```

Consequences:
- A user whose entitlement is at 1 gets **charged** even if the audit times out
  or throws (see `authorship/generate.ts` — the consume at line 76 happens before
  PDF generation at line 133).
- There is **no refund path**. Once consumed, a failed execution never returns
  the unit.

The correct model is a **hold/confirm** lifecycle:
1. **Hold** — atomically decrement `remaining` and write a pending `UsageEvent`.
2. **Execute** — run the feature.
3. **Confirm** — mark the event consumed on success, or **release** the hold on
   failure.

---

## 6. Background job audit

- `EntitlementService.rebuildEntitlements` is fired **fire-and-forget** from
  `upsertSubscription` (line 734) and `cancelSubscription` (line 785). If it
  fails, the user keeps their old (possibly wrong) entitlements and there is no
  retry.
- `subscriptionJobs.ts` runs `resetMonthlyUsage`, which deletes old
  `usageTracking` rows. It does **not** rebuild entitlements, so the
  `userEntitlement.features[*].used` cache is never reset to match the new
  period — it only gets corrected on the next `getEntitlements` self-repair.
- Webhook processing (`lemonsqueezy.ts`) calls `upsertSubscription` → async
  rebuild. A webhook could be processed, the subscription row updated, but the
  entitlement rebuild still pending/in-flight when the next request arrives.

**Risk:** A paid user whose entitlement rebuild is racing with their request
hits the "safe-allow" path (`EntitlementService.ts:327-337`) and is let through
with **no consumption at all** if their subscription is active. That is a real
revenue leak during the rebuild window.

---

## 7. Concurrency audit

- `userEntitlement` row updates are **read-modify-write without optimistic
  locking**. The `version` column exists but `assertCanUse` and
  `consumeEntitlement` never check it. Concurrent requests → lost updates.
- `usageTracking.upsert` with `count: { increment: 1 }` is atomic and safe.
- `CreditService.deductCredits` is transactional and safe against overdraft.
- No idempotency key exists for feature execution, so retries/double-clicks
  double-consume.

---

## 8. Revenue leak summary

| # | Leak | Severity | Likelihood |
|---|---|---|---|
| 1 | Citation routes consume twice (`checkActionEligibility` + `consumeAction`) | Critical | High — every citation audit |
| 2 | Citation routes charge flat 1000-word cost regardless of doc size | High | High |
| 3 | `assertCanUse` consumes before execution; failures are never refunded | High | Medium |
| 4 | Safe-allow path lets paid users through with no consumption during rebuild | High | Low–Medium (race window) |
| 5 | Concurrent `assertCanUse` calls lose entitlement updates | High | Medium |
| 6 | `section-check` has no enforcement | Medium | Low |
| 7 | `explain-risk` AI call has no gate | Medium | Low |
| 8 | `paper_search` uses legacy `consumeAction` path | High | Medium |
| 9 | `calculateCost` can return 0 for tiny docs | Low | Low |
| 10 | `incrementFeatureUsage` middleware is a latent double-consume if chained with `checkUsageLimit` | Critical (latent) | Low (currently only emails) |

---

## 9. Implementation plan — a single centralized billing pipeline

### 9.1 Target architecture

```
                        ┌─────────────────────────────┐
                        │   BillingGateway (single)    │
                        │  backend/src/billing/        │
                        │    BillingGateway.ts         │
                        └──────────────┬──────────────┘
                                       │
                 ┌─────────────────────┼─────────────────────┐
                 ▼                     ▼                     ▼
          hold (decrement       execute feature        confirm /
          + write UsageEvent)                          release hold
```

**One primitive, one ledger, one lifecycle.**

#### New file: `backend/src/billing/BillingGateway.ts`

A single class that every billable route must call. No feature is executable
unless it passes through this gateway.

```ts
type BillingResult = {
  eventId: string;          // UsageEvent row id — the immutable receipt
  source: "PLAN" | "CREDIT";
  cost?: number;
  remaining?: number;
};

class BillingGateway {
  // 1. HOLD: atomically decrement remaining + insert pending UsageEvent
  static hold(userId, feature, metadata): Promise<BillingResult>;

  // 2. CONFIRM: mark UsageEvent consumed (after successful execution)
  static confirm(eventId, metadata?): Promise<void>;

  // 3. RELEASE: refund the hold (on failure / timeout)
  static release(eventId, reason?): Promise<void>;

  // Convenience: hold → execute → confirm/release, with automatic refund on throw
  static withFeature(userId, feature, metadata, execute: () => Promise<T>): Promise<T>;
}
```

#### New table: `UsageEvent` (immutable ledger)

Replaces the mutable `userEntitlement.features` counter as the **immutable**
audit trail. `userEntitlement` becomes a read-model cache rebuilt from events,
not the write path.

```prisma
model UsageEvent {
  id            String   @id @default(cuid())
  userId        String
  feature       String
  source        String   // PLAN | CREDIT
  cost          Int      // credits charged (0 for plan)
  status        String   // HELD | CONSUMED | RELEASED | REFUNDED
  heldAt        DateTime
  confirmedAt   DateTime?
  releasedAt    DateTime?
  referenceId   String?  // idempotency key
  metadata      Json

  @@index([userId, feature, heldAt])
  @@index([referenceId])
}
```

#### Hold implementation — atomic, optimistic-concurrency safe

The hold is a **single conditional UPDATE** that decrements remaining only if
sufficient quota exists, then inserts the `UsageEvent` in the same
transaction:

```sql
UPDATE "userEntitlement"
SET "features" = jsonb_set(...),
    "version" = "version" + 1
WHERE "user_id" = $1
  AND "features"->:feature->>'remaining' > 0   -- atomic guard
RETURNING *;
```

If no row is returned → fall back to credit deduction inside the same
transaction. If both fail → throw `PLAN_LIMIT_REACHED` / `INSUFFICIENT_CREDITS`.
The `version` column now actually guards concurrent holds — a lost update
returns 0 rows and the gateway retries/rejects.

### 9.2 Migration strategy (progressive, no big-bang rewrite)

**Phase 1 — Stop the bleeding (1–2 days)**
- Delete the double-consume in `api/citations/audit.ts`: remove the
  `consumeAction` call at line 83; the pre-flight `checkActionEligibility`
  becomes the only check, **or** better, replace both calls with
  `BillingGateway.withFeature`.
- Pass real `wordCount` into the unified audit route (line 220, 246).
- Add a minimum cost of 1 in `calculateCost` for `scan`/`citation_audit`.

**Phase 2 — Introduce the gateway + UsageEvent ledger (1 week)**
- Add the `UsageEvent` table + Prisma migration.
- Implement `BillingGateway.hold/confirm/release/withFeature`.
- Add `version`-based optimistic concurrency to the hold.
- Keep `EntitlementService` and `usageTracking` running as read-models; the
  gateway writes `UsageEvent` and updates `userEntitlement` in the same
  transaction.

**Phase 3 — Migrate every route to the gateway (1 week)**
Order by severity:
1. Citation routes (`/audit`, `/audit/unified`) — fixes the critical double-consume.
2. `paper_search` — off the legacy `consumeAction` path.
3. `originality/scan`, `rephrase`, `humanize`, `rewrite-selection`,
   `certificate`, `behavioral/analyze` — swap `assertCanUse` → `withFeature`.
4. Add enforcement to `section-check` and `explain-risk`.

For each route, the diff is:

```ts
// before
await EntitlementService.assertCanUse(userId, feature, metadata);
const result = await runFeature(...);

// after
return BillingGateway.withFeature(userId, feature, metadata, async () => {
  return await runFeature(...);
});
```

`withFeature` guarantees: hold → execute → confirm on success, release on any
throw. No manual refund handling in route code.

**Phase 4 — Deprecate and delete legacy APIs (1 week)**
- Delete `SubscriptionService.consumeAction`,
  `SubscriptionService.checkActionEligibility`,
  `SubscriptionService.incrementUsage`.
- Delete `UsageService.trackUsage` (the entitlement-consuming variant).
- Remove `EntitlementService.consumeEntitlement` and `assertCanUse` once no
  callers remain.
- `EntitlementService` is left with only `rebuildEntitlements` and
  `getEntitlements` (read model).
- `checkUsageLimit` and `incrementFeatureUsage` middleware deleted.

**Phase 5 — Reconciliation job (ongoing)**
- A nightly job recomputes `userEntitlement` from the `UsageEvent` ledger and
  flags any `creditBalance` that doesn't match the sum of `USAGE` events. This
  makes the immutable ledger the source of truth and the cache self-healing.

### 9.3 Idempotency & double-click protection

`BillingGateway.hold` accepts an optional `referenceId` (idempotency key). If a
hold with the same `referenceId` already exists, the gateway returns the
existing `eventId` instead of creating a new hold. The frontend generates a
per-request `referenceId` (uuid) and retries with the same key on network
failures. This eliminates double-click double-charging.

### 9.4 Concurrency fix

The conditional `UPDATE ... WHERE version = $expectedVersion` (or `remaining >
0`) makes the hold atomic at the DB level. Two concurrent holds: one wins, the
other gets 0 rows back and either falls to credits or is rejected. No lost
updates. The `usageTracking` table already uses atomic `increment`; the
`UsageEvent` insert is a plain `create` (no read-modify-write), so it's safe.

### 9.5 Execution-safety fix

Because the gateway uses **hold → execute → confirm/release**, a failed
execution always runs the `release` path in a `finally` block, returning the
held unit to the entitlement. The user is only ever charged for work that
actually completed. This directly satisfies the `billing.md` lifecycle.

---

## 10. What "done" looks like

After this plan:

- **One** billing primitive (`BillingGateway.withFeature`) that every route uses.
- **One** immutable ledger (`UsageEvent`) as the source of truth.
- **No** alternative execution paths — `grep` for `consumeAction`,
  `checkActionEligibility`, `assertCanUse`, `incrementUsage` returns only
  dead-code references.
- Atomic, optimistic-concurrency-safe holds with no lost updates.
- Real word counts flow through to credit calculation on every route.
- Failed executions auto-refund; double-clicks are idempotent.
- A nightly reconciliation job proves the books balance.

That is the architecture `billing.md`'s final question asks for: a single,
centralized billing enforcement pipeline with zero revenue leakage, zero
double-counting, zero missed usage, and zero inconsistent enforcement.
