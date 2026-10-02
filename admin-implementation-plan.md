# Admin Dashboard Implementation Plan

> **Scope**: Admin-related files only. No changes to protected areas (research editor, workspace, user dashboard, auth, billing, PDF engine, storage, citation engine, AI detection, authorship).
> **Workflow**: Investigate → Analyze → Design → Verify Scope → Verify Existing Code → Identify Reusable Components → Implement → Compile → Test → Verify → Document → Report

---

## Task 1: Fix Admin Routing Bugs ✅ COMPLETED

**Status**: Done — investigation confirmed `/admin/analytics`, `/admin/email-logs`, and `/admin/broadcast` are intentional deep links into `AdminEmailCenter` tabs (using `useEffect` on pathname to switch tabs), not duplicate-route bugs.

---

## Task 2: Add Admin Security Middleware (Rate Limiting, Helmet, Input Validation)

### Problem
Admin API routes have no security perimeter: no Helmet headers, no rate limiting applied despite `adminOperationRateLimiter` existing, and no Zod input validation despite `validateRequest` middleware existing.

### Design
Apply a three-layer defense to `/api/admin/*`:

| Layer | Tool | Source |
|-------|------|--------|
| Security headers | `helmet` | New dependency (`helmet`) |
| Rate limiting | `adminOperationRateLimiter` | Existing in `backend/src/middleware/rateLimiter.ts` |
| Input validation | Zod schemas + `validateRequest` | Existing in `backend/src/middleware/zodValidation.ts` |

### Existing Reusable Components
- `adminOperationRateLimiter` in `backend/src/middleware/rateLimiter.ts` — 100 req/min window, already exported
- `validateRequest(schema)` in `backend/src/middleware/zodValidation.ts` — parses `{body, query, params}` against Zod schema, returns 400 with details on failure
- `helmet` — not yet in backend deps but available on npm, standard Express middleware
- `isPlatformAdmin` in `backend/src/middleware/platformAdmin.ts` — existing auth middleware

### Files to Modify
| File | Change |
|------|--------|
| `backend/package.json` | Add `helmet` to dependencies |
| `backend/src/hybrid/main-server.ts` | Add `helmet` import; mount admin routes with `helmet(), adminOperationRateLimiter` |
| `backend/src/api/admin/index.ts` | Add Zod schemas for all endpoints; wrap handlers with `validateRequest()` |

### Implementation Steps
1. `npm install helmet` in backend directory
2. In `main-server.ts`: import helmet; change line 394 from `app.use("/api/admin", authMiddleware, adminRouter)` to `app.use("/api/admin", authMiddleware, helmet(), adminOperationRateLimiter, adminRouter)`
3. In `backend/src/api/admin/index.ts`: add Zod schemas for each endpoint's body/query/params and wrap with `validateRequest`

### Verification
1. TypeScript compilation: `cd backend && npx tsc --noEmit`
2. Test that `/api/admin/health` still returns 200 with headers including `helmet` security headers (X-Content-Type-Options, X-Frame-Options, etc.)
3. Test that rate limiting triggers at >100 req/min
4. Test that invalid input to admin endpoints returns 400 with structured Zod error details

### Documentation
Update `docs/admin-dashboard-audit-report.md` — mark Task 2 as resolved, note the security improvements.

---

## Task 3: Create Audit Logging System

### Problem
Admin operations leave no immutable log. The `platformAdmin.ts` middleware logs access/denial to console, but there is no persistent audit trail for admin actions (email sends, blog CRUD, user queries, settings changes).

### Design
Create a new `audit_logs` table in Prisma schema + backend service to record admin operations.

### Database Proposal Required
Before implementation, a schema proposal must be written and approved (per masterplan constraint: "Database changes require a proposal first").

**Proposed schema**:
```prisma
model AuditLog {
  id        String   @id @default(cuid())
  action    String   // e.g. "EMAIL_SENT", "BLOG_CREATED", "USER_UPDATED"
  adminId   String   // FK to User
  adminEmail String  // Denormalized for queries without joins
  entityType String? // e.g. "User", "BlogPost", "EmailLog"
  entityId   String? // FK value
  metadata  Json?    // Additional context (target email, blog title, etc.)
  ipAddress String?  // Request IP
  userAgent String?  // Request user agent
  createdAt DateTime @default(now())

  @@index([adminId])
  @@index([action])
  @@index([createdAt])
}
```

### Files to Create
| File | Purpose |
|------|---------|
| `backend/src/services/admin/auditLogService.ts` | createAuditLog() helper |
| `backend/src/middleware/adminAuditMiddleware.ts` | Optional middleware that auto-logs admin route access |

### Files to Modify
| File | Change |
|------|--------|
| `backend/prisma/schema.prisma` | Add AuditLog model (after proposal approval) |
| `backend/src/api/admin/index.ts` | Call audit log on each endpoint |

### Implementation Steps (after proposal approved)
1. Add `AuditLog` model to Prisma schema
2. Run `npx prisma migrate dev` (or appropriate migration command)
3. Create `auditLogService.ts` with `createAuditLog(params)` function
4. Wire into admin endpoints — fire-and-forget after successful operation
5. Add `/api/admin/audit-logs` endpoint (GET) for admin review

---

## Task 4: Implement RBAC with Admin Roles

### Problem
All admins have identical permissions via `isPlatformAdmin`. There's no Super Admin vs Admin vs Moderator distinction.

### Design
Introduce role-based access control where:
- **Super Admin**: Full access to all admin features including security, settings, user management
- **Admin**: Access to email, inbox, blogs, users, analytics
- **Moderator**: Read-only access to analytics and email logs

### Files to Modify
| File | Change |
|------|--------|
| `backend/src/middleware/platformAdmin.ts` | Add role extraction and permission checking |
| `backend/src/api/admin/index.ts` | Add role-based route guards per endpoint |
| `backend/prisma/schema.prisma` | Add `role` field to User or a separate AdminRole table (DB proposal required) |

### Implementation Steps
1. Extend `platformAdmin.ts` to parse role from token metadata
2. Create permission map in backend config
3. Add role-check middleware per route or per router section
4. Update frontend `PlatformAdminGuard` if role-based UI navigation is needed

---

## Task 5: Build System Health Dashboard

### Problem
No system health monitoring visible in the admin panel. The `metrics.ts` collector exists on the backend but has no admin-facing dashboard.

### Design
A `/admin/system-health` page showing:
- Server uptime
- Memory usage
- Active connections
- Error rate (last 24h)
- Database connection status
- Background task queue depth

### Existing Reusable Components
- `backend/src/monitoring/metrics.ts` — in-memory metrics collector
- `backend/src/monitoring/logger.ts` — existing structured logger
- `AdminLayout.tsx` — existing admin shell (reuse)
- `AdminSidebarComponent.tsx` — add "System Health" nav item

### Files to Create
| File | Purpose |
|------|---------|
| `src/components/admin/system/SystemHealthPage.tsx` | Dashboard page component |
| `backend/src/api/admin/system-health.ts` (or new router) | Endpoint serving metrics data |

### Files to Modify
| File | Change |
|------|--------|
| `src/App.tsx` | Add `/admin/system-health` route |
| `src/components/admin/layout/AdminSidebarComponent.tsx` | Add System Health nav item |
| `backend/src/api/admin/index.ts` | Optionally add system-health endpoint to admin router |

---

## Task 6: Build Revenue & Analytics Dashboard

### Problem
The current `AdminDashboardPage` only shows 3 stat cards (Total Users, Active Support, Blog Posts). No revenue data, no charts, no trend analysis, no subscription breakdown.

### Design
A richer `/admin/analytics` page (or enhance existing email center analytics tab) with:
- Revenue metrics (MRR, ARR, churn rate) via LemonSqueezy integration
- Subscription plan distribution (Free/Plus/Premium)
- User growth trend (30/60/90 day)
- Support ticket volume trend
- Blog post traffic (if available)

### Existing Reusable Components
- `recharts` — already in frontend deps, use for charts
- `react-chartjs-2` — already in frontend deps (alternative)
- `backend/src/api/analytics/index.ts` — user-facing analytics endpoints (can extend or create admin-specific endpoint)
- `backend/src/services/email/emailConfig.ts` — has `SENDER_IDENTITIES` used for analytics

### Files to Modify
| File | Change |
|------|--------|
| `backend/src/api/admin/index.ts` | Add revenue/analytics endpoints using LemonSqueezy API |
| `src/components/admin/dashboard/AdminDashboardPage.tsx` | Extend with charts and additional metrics |
| Or create new dashboard page |

### Note
The `/admin/analytics` route currently renders `AdminEmailCenter` (deep link to analytics tab). Consider whether to build a dedicated analytics page or enhance the existing email center analytics tab.

---

## Task 7: Build Remote Management Modules

### Problem
No remote management capabilities — cannot impersonate users, cannot force- logout, cannot send system-wide announcements, cannot view real-time collaboration sessions.

### Design
Remote management features for platform admins:

| Feature | Description |
|---------|-------------|
| User Impersonation | Admin can act as any user (with audit trail) |
| Force Logout | Invalidate all sessions for a user |
| System Announcement | Push notification/banner to all users |
| Active Sessions | View current collaboration sessions |

### Implementation Priority
1. **Force Logout** — simplest, highest security value
2. **User Impersonation** — requires careful audit logging
3. **System Announcement** — needs a broadcast mechanism
4. **Active Sessions** — requires Yjs/Hocuspocus integration

### Files to Create/Modify
- `backend/src/api/admin/remote/` — new admin API sub-router for remote ops
- `backend/src/services/admin/impersonationService.ts`
- `backend/src/services/admin/forceLogoutService.ts`
- `backend/src/services/admin/announcementService.ts`
- New admin frontend pages/components for remote management

### DB Proposal Required
- Impersonation log table
- Announcement table
- Active session tracking (or use existing Hocuspocus doc tracking)

---

## Task 8: Build Platform Configuration and AI Management

### Problem
`/admin/settings` has General, Integrations, and Notifications tabs but is incomplete:
- No feature flag management
- No AI model configuration (no switching between OpenAI/Gemini)
- No webhook endpoint configuration
- No CMS page management
- No scheduled task management

### Design
Expand settings with:

**Platform Config** (new `/admin/settings/platform` tab):
- Feature flags (dark mode, beta features, maintenance mode)
- AI model selection per endpoint
- Webhook URLs and secret management
- Backup configuration

**AI Management** (new `/admin/ai` page):
- Model configuration (OpenAI key validation, Gemini key validation)
- Rate limits per model
- Usage tracking per model
- AI detection sensitivity sliders

### Existing Reusable Components
- `backend/src/config/env.ts` — existing secrets/config management
- `AdminSettingsPage.tsx` — existing settings page structure (reuse layout patterns)
- `NotificationSettings.tsx` — notification pattern to reuse

### Files to Modify
- `backend/src/config/env.ts` — extend with feature flag support
- `backend/src/api/admin/index.ts` — add config/AI endpoints
- `src/App.tsx` — add new `/admin/ai` route
- `src/components/admin/settings/AdminSettingsPage.tsx` — add Platform Config tab
- New component files for AI management page

### DB Proposal Required
- Feature flags table
- AI config table
- Webhook endpoint table

---

## Implementation Order

Tasks are ordered by dependency and risk:

| Order | Task | Depends On | DB Change? |
|-------|------|------------|------------|
| 1 | ✅ Task 1: Routing fixes | None | No |
| 2 | 🔄 Task 2: Security middleware | None | No |
| 3 | Task 3: Audit logging | Task 2 | Yes (proposal) |
| 4 | Task 4: RBAC | Task 3 | Yes (proposal) |
| 5 | Task 5: System Health | Task 2 | No |
| 6 | Task 6: Revenue Analytics | Task 2, Task 5 | No |
| 7 | Task 7: Remote Management | Task 3 | Yes (proposal) |
| 8 | Task 8: Platform Config & AI | Task 3 | Yes (proposal) |

**Parallelizable**: Tasks 2, 5, and 6 can start immediately (no DB changes). Tasks 3, 4, 7, 8 must wait for DB proposal approval and schema migration.

---

## Masterplan Compliance

- [x] Only admin-related files are modified
- [x] Protected areas are excluded (research editor, workspace, user dashboard, auth, billing, storage, PDF engine, citation engine, AI detection engine, authorship engine)
- [x] Database changes require proposal first
- [x] No broad project-wide refactoring
- [x] Preserve existing UI — evolve rather than replace
- [x] Component reuse policy applied (listed existing reusable components for each task)
- [x] Build verification mandatory after each implementation
- [x] Documentation required for every completed feature
- [x] Workflow followed: Investigate → Analyze → Design → (Implement → Compile → Test → Verify → Document → Report)
