# COLABWIZE BILLING, ENTITLEMENTS & CREDIT PLATFORM

# V3 ARCHITECTURE REVIEW, REBUILD & IMPLEMENTATION SPECIFICATION

**Version:** V3 Engineering Review
**Priority:** P0 – Revenue Critical
**Status:** Complete Architectural Refactor Required

---

# PURPOSE

This review is **NOT** intended to fix isolated bugs.

This review is intended to redesign the **entire monetization platform** that powers ColabWize.

The current system contains:

* Subscription Plans
* Entitlements
* Monthly Usage Limits
* Credit Wallet
* Citation Audit Billing
* AI Billing
* Originality Billing
* Feature Gating
* LemonSqueezy Integration

These systems currently function independently in several places.

The objective of this review is to determine how these systems should operate as **one unified monetization platform**.

---

# BUSINESS OBJECTIVE

ColabWize is evolving into a SaaS platform.

Every premium feature depends on the billing system.

This includes:

* AI Chat
* AI Writing
* Citation Audit
* Originality Detection
* PDF Export
* Cloud Storage
* Premium Templates
* Collaboration
* Future AI Agents
* Future Research Intelligence Features

The billing platform must guarantee:

* Zero revenue leakage
* Zero double charging
* Zero missed usage
* Zero inconsistent feature access
* Complete financial auditability
* Excellent customer experience

Billing must become one of the most reliable systems in the platform.

---

# CURRENT ARCHITECTURE

Current Components

```
LemonSqueezy

        │

        ▼

SubscriptionService

        │

usageTracking

        │

EntitlementService

        │

userEntitlement

        │

CreditService

        │

Feature Access
```

Current observations:

* Legacy SubscriptionService still performs usage tracking.
* EntitlementService is becoming the canonical authority.
* CreditService operates independently.
* Some routes still bypass the new entitlement architecture.
* Usage accounting exists in multiple locations.
* Credits are deducted separately from subscription usage.

Review the entire architecture.

Determine every place where business logic is duplicated.

---

# CORE ARCHITECTURAL PRINCIPLE

Every billable feature must follow ONE pipeline.

No exceptions.

Target Architecture

```
User Request
      │
      ▼
Billing Gateway
      │
      ▼
Entitlement Engine
      │
      ▼
Monthly Usage Available?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
Consume    Check Credit Wallet
Usage          │
               ▼
       Enough Credits?
         │         │
        Yes       No
         │         │
         ▼         ▼
 Reserve Credits  Reject
         │
         ▼
 Execute Feature
         │
         ▼
 Successful?
   │           │
 Yes          No
   │           │
   ▼           ▼
Commit Usage  Rollback Reservation
```

Every billable feature should use this exact lifecycle.

---

# CURRENT BILLING COMPONENTS

Review:

SubscriptionService

EntitlementService

CreditService

Webhook Processor

Usage Tracking

userEntitlement

Current concerns:

* Multiple sources of truth
* Duplicate business logic
* Legacy compatibility code
* Route inconsistencies

Determine whether these services should be merged or simplified.

---

# ENTITLEMENT ENGINE REVIEW

The Entitlement Engine must become the ONLY authority.

Every feature request should ask exactly one question:

```
assertCanUse(
    userId,
    feature,
    metadata
)
```

No route should:

* calculate limits manually
* check plans manually
* check credits manually
* decrement usage manually

Everything must flow through one service.

Review repository compliance.

---

# CREDIT SYSTEM REVIEW

Credits should become a natural extension of entitlements.

Current Flow

```
Plan Limit
      │
      ▼
Credits
```

Review:

Current deduction logic

Current pricing logic

Current balance logic

Current transaction logic

Determine whether:

Balance-based accounting

or

Ledger-based accounting

is the better long-term architecture.

---

# CREDIT LEDGER REVIEW

Current balance mutations should be challenged.

Evaluate replacing balance mutations with an immutable ledger.

Possible events:

Credit Purchased

Credit Granted

Credit Reserved

Credit Consumed

Credit Refunded

Credit Expired

Credit Adjusted

Credit Restored

Current balance becomes:

SUM(all transactions)

Benefits:

* Complete auditability
* Easier debugging
* Financial correctness
* Refund support
* Rollback support
* Fraud detection

Estimate migration complexity.

---

# MONTHLY USAGE + CREDIT FALLBACK

This is the most important workflow.

Review the transition between included plan usage and purchased credits.

Required behavior:

Free Plan

Citation Audits Remaining

3

↓

Audit #1

Remaining = 2

↓

Audit #2

Remaining = 1

↓

Audit #3

Remaining = 0

↓

Audit #4

Automatically uses credits

↓

Credits deducted

↓

Audit executes

The user should experience no interruption.

No separate workflow.

No additional confirmation unless configured.

Determine whether this behavior is correctly implemented.

---

# BILLABLE FEATURE PIPELINE

Review every premium feature.

Examples:

AI Chat

AI Writing

Citation Audit

Originality Scan

PDF Export

Future AI Agents

For each feature determine:

How access is checked

How usage is recorded

How credits are consumed

How failures are handled

Identify inconsistencies.

---

# USAGE ACCOUNTING REVIEW

Review current usage recording.

Determine whether:

Usage recorded

↓

Execution succeeds

or

Execution succeeds

↓

Usage recorded

Review failure cases:

Server crash

Timeout

Retry

Partial execution

Cancellation

Duplicate requests

Determine correct ordering.

---

# CREDIT RESERVATION REVIEW

Current implementation appears to deduct immediately.

Review whether reservation would be safer.

Recommended flow:

Reserve Credits

↓

Execute Feature

↓

Success

↓

Commit Deduction

OR

Failure

↓

Release Reservation

Review implementation effort.

---

# CONCURRENCY REVIEW

Stress test:

User has:

5 credits.

User opens:

10 browser tabs.

All execute AI simultaneously.

Determine:

Current behavior.

Recommended behavior.

Review:

Atomic database updates

Transactions

Row locking

Optimistic concurrency

Idempotency

---

# IDEMPOTENCY REVIEW

Every billable action should have:

operationId

Example:

```
AI Chat

UUID

↓

Credit Transaction

↓

Duplicate?

↓

Ignore
```

Review current implementation.

Determine whether every deduction is idempotent.

---

# PRICING ENGINE REVIEW

Current pricing:

Credits

↓

Feature

↓

Word Count

Review:

Dynamic pricing

Minimum pricing

Maximum pricing

Metadata validation

Fallback behavior

Determine whether:

Missing metadata

should:

Reject request

Estimate upper bound

Or

Fallback to cheapest price.

Justify recommendation.

---

# WEBHOOK REVIEW

Review:

Subscription Created

Subscription Renewed

Subscription Cancelled

Subscription Refunded

Subscription Expired

Review:

Grace periods

Retries

Ordering

Replay protection

Idempotency

Delayed delivery

Determine resilience.

---

# DATABASE REVIEW

Review current schema.

Recommend final schema.

Possible entities:

Subscription

SubscriptionEvent

Entitlement

UsageEvent

CreditWallet

CreditTransaction

CreditReservation

Invoice

Payment

Refund

Promotion

Coupon

Determine relationships.

---

# UI / UX REVIEW

Review the complete billing experience.

Current UI should be redesigned.

Users should always understand:

Current Plan

Monthly Included Usage

Remaining Usage

Credit Wallet

Credit Value

Upcoming Reset

Billing Cycle

Transaction History

Usage History

Recent Charges

Current Feature Cost

Upgrade Benefits

Purchase Credits

Institutional Discounts

Academic Pricing

Organization Plans

Review every billing-related screen.

---

# BILLING DASHBOARD REDESIGN

Design a modern billing dashboard.

Suggested sections:

Overview

Current Plan

Monthly Usage

Credits

Invoices

Transactions

Payment Methods

Subscription Timeline

Usage Analytics

Feature Costs

Upgrade Recommendations

Recent Activity

Support

Determine the optimal information architecture.

---

# NOTIFICATION SYSTEM

Review notifications.

Examples:

Monthly usage almost exhausted

Credits low

Credits exhausted

Subscription renewing

Payment failed

Trial ending

Grace period active

Determine notification strategy.

---

# STRESS TESTS

Review the architecture against:

1 concurrent request

10 concurrent requests

100 concurrent requests

1,000 concurrent requests

Server restart

Webhook retry

Network timeout

Database failover

Feature execution failure

Billing rollback

Credit refund

Subscription downgrade

Subscription upgrade

Trial conversion

Refund after feature usage

Determine system behavior.

---

# ENTERPRISE READINESS

Evaluate support for:

Academic Institutions

Universities

Enterprise Teams

Departments

Research Groups

Shared Credit Pools

Organization Billing

Department Budgets

Principal Investigator Funding

Grant Credits

Future scalability.

---

# REQUIRED DELIVERABLES

Produce:

1. Billing Architecture Audit

2. Entitlement Architecture Audit

3. Credit System Audit

4. Usage Accounting Audit

5. Billing Gateway Design

6. Pricing Engine Audit

7. Concurrency Audit

8. Idempotency Audit

9. Database Audit

10. Webhook Audit

11. UI / UX Audit

12. Billing Dashboard Redesign

13. Enterprise Billing Review

14. Revenue Leakage Analysis

15. Complete Refactor Proposal

---

# IMPLEMENTATION ROADMAP

Provide:

Phase 1

Critical fixes

Phase 2

Architecture migration

Phase 3

Ledger implementation

Phase 4

UI redesign

Phase 5

Enterprise features

Estimate:

Development effort

Migration risks

Breaking changesS

Rollback strategy
hie
Testing strategy

---

# FINAL ARCHITECTURE QUESTION

Assume ColabWize reaches:

* 1 million users
* Millions of billing events every month
* Tens of millions of AI requests
* Universities purchasing institutional licenses
* Enterprise organizations with shared credit pools
* Multiple premium AI features using both monthly entitlements and pay-as-you-go credits

Design the complete billing architecture you would build today.

The design must satisfy:

* Single source of truth
* Atomic usage accounting
* Automatic transition from monthly limits to credits
* Immutable financial audit trail
* Zero revenue leakage
* Zero double charging
* Zero negative balances
* Idempotent billing operations
* High concurrency safety
* Excellent user experience
* Long-term maintainability

Do not optimize for the smallest code change.

Optimize for a billing platform that can support ColabWize for the next decade.

Every recommendation must include:

* Technical reasoning
* Business impact
* Migration strategy
* Risk assessment
* Alternative approaches considered
* Why the chosen approach is superior.

---

# AS-BUILT NOTES (V3 — Phase 1 implementation, 2026-06-29)

The spec above is the design intent. This section records where the shipped
implementation diverges from the literal spec, and why, so the doc stays an
honest reference rather than drifting from the code.

## What was already in place (reused, not rebuilt)

The hardest architectural work already existed in the codebase and was kept:

- **BillingGateway** (`backend/src/billing/BillingGateway.ts`) — the single
  `hold → execute → confirm/release` pipeline, with idempotency via
  `referenceId`, optimistic-concurrency `version` guards on the entitlement
  row, and a bounded retry loop for lost version races. This is the spec's
  "Billing Gateway" + "Entitlement Engine" combined.
- **UsageEvent ledger** (Prisma model) — immutable rows with
  `HELD/CONSUMED/RELEASED/REFUNDED` status and a `PLAN|CREDIT` source. This is
  the spec's immutable usage ledger and the single source of truth.
- **EntitlementService** — read-model cache (`userEntitlements.features`)
  rebuilt from the live subscription + the UsageEvent ledger.
- **LemonSqueezy integration** — checkout creation, subscription management,
  webhook handling, customer portal. Untouched.

## What this phase changed

1. **CreditService rewritten** (`backend/src/services/CreditService.ts`) for
   ledger-based accounting. `credit_transactions` is now the immutable ledger
   and source of truth; `credit_balances` is a materialized cache kept in sync
   on every mutation and self-repairing on read. Methods: `grantCredits`,
   `reserveCredits`, `refundCredits`, `getBalance`, `hasEnoughCredits`, and the
   `calculateCost` pricing engine.

2. **Credit overflow path added to BillingGateway.hold()** — when a user's
   monthly plan quota is exhausted, the gateway now falls back to the credit
   wallet (respecting `user.auto_use_credits`) instead of hard-blocking. This is
   the spec's "Monthly Usage + Credit Fallback" workflow.

3. **Webhooks rewired** (`backend/src/api/webhooks/lemonsqueezy.ts`) to call
   the new ledger methods.

4. **API + frontend** updated to expose the ledger-derived balance and the new
   transaction types.

## Intentional divergences from the spec

- **Reservation model: Option A (ledger row, no new table).** The spec asks for
  a `CreditReservation` entity and `Credit Reserved/Consumed/Expired/Adjusted/
  Restored` events. We implement reservation as a negative `credit_transactions`
  row (`type = USAGE`), with release writing a positive `REFUND` row. This
  reuses the existing ledger table and the gateway's existing `release()` refund
  path — no new table, no new failure mode. Reserved credits count as spent the
  moment the hold is taken, which is conservative and prevents concurrent holds
  from overspending. A dedicated `CreditReservation` table can be added later
  if we need richer reservation semantics (e.g. TTL-based expiry).

- **`credit_balances` kept as a cache.** The spec implies balance is purely
  `SUM(transactions)`. We keep the materialized `credit_balances` row for fast
  reads on hot paths (`/subscription/current`) and recompute/repair it from the
  ledger whenever it drifts. `getBalance()` always returns the correct value.

- **Pricing: existing per-feature tiers retained.** The spec's headline rule is
  "1 credit = 1000 words." The shipped `calculateCost` keeps the existing more
  granular tiers (scan/citation = words/1000; rephrase = (input+output)/1000;
  ai_chat = (input+output)/2000; originality = chunks×0.5 min 1.5) which are
  consistent with the headline and were already live behavior.

## Out of scope for this phase (future work)

- Credit expiry / TTL-based reservation cleanup.
- Enterprise shared credit pools, department budgets, grant credits.
- `CreditReservation` table (see divergence above).
- Full billing dashboard redesign and notification system (spec sections
  "Billing Dashboard Redesign" and "Notification System").
- Revenue leakage analysis and the remaining spec deliverables not tied to the
  core pipeline.
