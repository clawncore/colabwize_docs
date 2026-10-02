# Database Proposal: Remote Management

## Purpose
Enable platform administrators to remotely manage user sessions, impersonate users for support, and push system-wide announcements. Series A investment readiness.

## Proposed Tables

### 1. `impersonation_logs`

| Column        | Type       | Constraints         | Description                                  |
|---------------|------------|---------------------|----------------------------------------------|
| id            | String(cuid) | Primary Key       | Unique log ID                                |
| adminId       | String     | FK → users.id     | Admin who initiated impersonation            |
| adminEmail    | String     | Not Null          | Admin email (denormalized)                   |
| targetUserId  | String     | FK → users.id     | User being impersonated                      |
| targetEmail   | String     | Not Null          | Target user email (denormalized)             |
| action        | String     | Not Null          | "STARTED" or "ENDED"                         |
| ipAddress     | String     | Nullable          | Request IP                                   |
| createdAt     | DateTime   | Default now()     | When the action occurred                     |

### 2. `system_announcements`

| Column       | Type            | Constraints              | Description                              |
|--------------|-----------------|--------------------------|------------------------------------------|
| id           | String(cuid)    | Primary Key              | Unique announcement ID                   |
| title        | String          | Not Null                 | Announcement title                       |
| message      | String          | Not Null                 | Announcement body                        |
| targetAll    | Boolean         | Default true             | Send to all users                        |
| targetPlan   | String?         | Nullable                 | Target specific plan ("free"/"paid")     |
| isActive     | Boolean         | Default true             | Whether announcement is currently active |
| createdBy    | String          | FK → users.id            | Admin who created the announcement       |
| createdAt    | DateTime?       | Default now()            |                                          |

### 3. `active_sessions` (derived from Hocuspocus + Yjs connections)

This is derived from Hocuspocus server state rather than a DB table. A health-check route will expose real-time session counts.

## Migration
```bash
npx prisma migrate dev --name create-remote-management-tables
```

## Notes
- Impersonation logs are immutable and serve as compliance evidence
- Announcements are fire-and-forget pushed via existing email broadcast infrastructure
- Active sessions use Hocuspocus WebSocket connections, not DB storage
