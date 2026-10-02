# COLABWIZE BILLING ENFORCEMENT & USAGE ACCOUNTING

# IMPLEMENTATION REVIEW

## PURPOSE

This review is focused on one question:

**Can a user ever consume a billable feature without the billing system recording it correctly?**

Do not review pricing.

Do not review payment providers.

Review only:

* Feature gating
* Usage recording
* Entitlement enforcement
* Credit consumption
* Revenue protection

Assume any path that allows unpaid feature usage is a critical production defect.

---

# CURRENT BILLING COMPONENTS

Current services:

SubscriptionService

EntitlementService

CreditService

Webhook Processor

UsageTracking

userEntitlement

Review how these interact.

Determine which service is authoritative.

---

# BILLING PRINCIPLE

Every billable feature must follow exactly one lifecycle.

Required flow:

User Request
↓
Entitlement Check
↓
Allowed?
↓
Execute Feature
↓
Record Usage
↓
Return Result

There must be no alternative execution paths.

Review the repository and verify whether this invariant holds.

---

# CITATION AUDIT ENFORCEMENT

Current routes include:

POST /api/citations/audit

POST /api/citations/audit/unified

POST /api/audit/start

Review every entry point.

Questions:

Does every route:

* check entitlement?
* record usage?
* consume credits?
* update usage history?

If not:

Document every bypass.

---

# ROUTE CONSISTENCY

Current observation:

Different routes appear to use different billing flows.

Examples:

checkActionEligibility()

consumeAction()

assertCanUse()

Determine:

Which API should become the single supported billing interface.

Identify deprecated paths.

Recommend complete removal of duplicate logic.

---

# BILLING ENFORCEMENT REVIEW

Review every feature protected by billing.

Examples:

Citation Audit

Originality Scan

AI Writing

Reference Import

Exports

Storage

Collaboration

For each feature answer:

Where is access checked?

Where is usage recorded?

Where are credits consumed?

Where is failure handled?

Identify inconsistencies.

---

# USAGE ACCOUNTING REVIEW

Current concern:

Usage appears to be updated in:

usageTracking

and

userEntitlement

Review:

Can these ever disagree?

Stress test:

Successful request

Failed request

Cancelled request

Server crash after execution

Server crash before recording

Network timeout

Retry

Double-click

Concurrent requests

Determine whether usage accounting remains correct.

---

# EXECUTION SAFETY

Review the order of operations.

Current execution should guarantee:

1. Permission verified.
2. Feature executed.
3. Usage committed atomically.

Determine whether:

Feature execution can succeed while usage recording fails.

Or

Usage can be recorded even when execution fails.

Recommend transactional guarantees.

---

# CREDIT ACCOUNTING

Current review:

Credits appear to depend on word count.

Validate implementation.

Stress test:

500 words

1,000 words

10,000 words

50,000 words

Determine whether actual document size is always used.

Identify hardcoded values.

Review:

Rounding

Minimum charge

Maximum charge

Partial failures

---

# BACKGROUND JOB REVIEW

Review asynchronous execution.

Question:

Can background jobs start before billing succeeds?

Can billing succeed but job never execute?

Can retries duplicate usage?

Determine correct ordering.

---

# EVENT CONSISTENCY

Every billable request should generate one immutable usage event.

Review whether usage is event-based or state-based.

Recommend introducing a UsageEvent ledger if necessary.

Example:

UsageAuthorized

UsageConsumed

UsageFailed

UsageRefunded

UsageAdjusted

Review feasibility.

---

# REVENUE LEAK STRESS TEST

Attempt to identify every possible way a user could obtain free usage.

Examples:

Alternative API routes

Background endpoints

Internal service calls

Retries

Race conditions

Concurrent requests

Missing middleware

Legacy endpoints

Document every bypass.

Severity:

Critical

High

Medium

Low

---

# REQUIRED DELIVERABLES

Produce:

1. Billing Enforcement Audit
2. Route Consistency Audit
3. Usage Accounting Audit
4. Credit Accounting Audit
5. Background Job Audit
6. Revenue Leak Audit
7. Concurrency Audit
8. Refactor Proposal

For every issue provide:

* Root cause
* Business impact
* Likelihood
* Severity
* Recommended fix
* Migration strategy

---

# FINAL QUESTION

If every billable feature in ColabWize were required to guarantee:
SSS
* zero revenue leakage,
* zero double-counting,
* zero missed usage,
* zero inconsistent enforcement,

what architecture would you implement?

Design a single, centralized billing enforcement pipeline that every feature must use.

No feature should be executable unless it passes through this pipeline.
                 
Support every recommendation with technical reasoning and a practical migration ss