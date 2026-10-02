# Database Proposal: Audit Log System

## Purpose
Record all admin operations in an immutable audit trail for compliance, security monitoring, and incident investigation. This is a Series A investment readiness requirement (Task 3 of the admin dashboard implementation plan).

## Proposed Schema

### Table: `audit_logs`

| Column       | Type                  | Constraints                    | Description                                      |
|--------------|-----------------------|--------------------------------|--------------------------------------------------|
| id           | String (cuid)         | Primary Key                    | Unique audit log identifier                      |
| action       | String                | Not Null                       | Operation type (e.g., `EMAIL_SENT`, `BLOG_CREATED`, `USER_UPDATED`) |
| adminId      | String                | FK → `users.id`, Nullable      | Admin who performed the action                  |
| adminEmail   | String                | Not Null                       | Denormalized email for efficient querying        |
| entityType   | String                | Nullable                       | Affected entity type (e.g., `User`, `BlogPost`, `EmailLog`) |
| entityId     | String                | Nullable                       | Affected entity ID                               |
| metadata     | Json                  | Nullable                       | Additional context (target email, blog title, etc.) |
| ipAddress    | String                | Nullable                       | Request IP address                               |
| userAgent    | String                | Nullable                       | Request user agent string                        |
| createdAt    | DateTime              | Default `now()`                | When the action occurred                         |

### Indexes
- `@@index([adminId])` — fast lookup of all actions by a specific admin
- `@@index([action])` — filter by action type
- `@@index([createdAt])` — time-range queries for incident investigation

## Migration Command
```bash
npx prisma migrate dev --name create-audit-logs
```

## Impact
- No changes to existing services or models (pure additive)
- No changes to user-facing features (only admin operations)
- Service writes are fire-and-forget (async, non-blocking)

## Rejection Criteria
This proposal should be rejected if:
- There is no budget for additional storage (audit logs grow unboundedly)
- Compliance team determines a different retention policy is required
- Existing logging infrastructure (winston) is sufficient for audit needs
