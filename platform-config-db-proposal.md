# Database Proposal: Platform Configuration and AI Management

## Purpose
Enable platform administrators to manage feature flags, AI model configuration, system settings, CMS pages, and webhook endpoints from the admin dashboard. Series A investment readiness.

## Proposed Tables

### 1. `FeatureFlag`

| Column        | Type            | Constraints         | Description                          |
|---------------|-----------------|---------------------|--------------------------------------|
| id            | String(cuid)    | Primary Key         | Unique flag ID                       |
| key           | String          | Unique, Not Null    | Machine-readable flag identifier     |
| name          | String          | Not Null            | Human-readable flag name             |
| description   | String?         | Nullable            | What this flag controls              |
| enabled       | Boolean         | Default false       | Whether the flag is on               |
| rollout       | Float           | Default 0           | 0-100 percentage rollout             |
| variant       | Json?           | Nullable            | A/B test variants                    |
| targeting     | Json?           | Nullable            | Segment targeting config             |
| environment   | String          | Default "production"| dev/staging/production               |
| created_at    | DateTime        | Default now()       |                                      |
| updated_at    | DateTime        | Updated At          |                                      |

### 2. `SystemConfig`

| Column        | Type            | Constraints         | Description                          |
|---------------|-----------------|---------------------|--------------------------------------|
| id            | String(cuid)    | Primary Key         | Unique config ID                     |
| key           | String          | Unique, Not Null    | Config key (e.g. "maintenance_mode")  |
| value         | Json            | Not Null            | Config value                         |
| description   | String?         | Nullable            | What this config controls            |
| updatedBy     | String?         | Nullable, FK → users.id | Admin who last updated         |
| created_at    | DateTime        | Default now()       |                                      |
| updated_at    | DateTime        | Updated At          |                                      |

### 3. `AiModelConfig`

| Column        | Type            | Constraints         | Description                          |
|---------------|-----------------|---------------------|--------------------------------------|
| id            | String(cuid)    | Primary Key         | Unique config ID                     |
| provider      | String          | Not Null            | "openai", "google", "anthropic"     |
| model         | String          | Not Null            | Model name (e.g. "gpt-4", "gemini") |
| apiKeyRef     | String?         | Nullable            | Reference to API key (not stored)   |
| enabled       | Boolean         | Default true        | Whether this model is active         |
| maxTokens     | Int?            | Nullable            | Max response tokens                  |
| temperature   | Float?          | Nullable            | Sampling temperature                 |
| priority      | Int             | Default 0           | Priority for model selection         |
| created_at    | DateTime        | Default now()       |                                      |
| updated_at    | DateTime        | Updated At          |                                      |

### 4. `CmsPage`

| Column           | Type            | Constraints         | Description                          |
|------------------|-----------------|---------------------|--------------------------------------|
| id               | String(cuid)    | Primary Key         | Unique page ID                       |
| slug             | String          | Unique, Not Null    | URL-friendly identifier              |
| title            | String          | Not Null            | Page title                           |
| content          | String          | Text, Not Null      | HTML content                         |
| metaTitle        | String?         | Nullable            | SEO meta title                       |
| metaDescription  | String?         | Nullable            | SEO meta description                 |
| status           | String          | Default "draft"     | draft / published                    |
| authorId         | String?         | Nullable, FK → users.id | Admin who authored            |
| created_at       | DateTime        | Default now()       |                                      |
| updated_at       | DateTime        | Updated At          |                                      |

### 5. `WebhookEndpoint`

| Column        | Type            | Constraints         | Description                          |
|---------------|-----------------|---------------------|--------------------------------------|
| id            | String(cuid)    | Primary Key         | Unique endpoint ID                   |
| name          | String          | Not Null            | Human-readable name                  |
| url           | String          | Not Null            | Target URL                           |
| secret        | String?         | Nullable            | HMAC signing secret                  |
| events       | String[]        | Not Null            | Subscribed event types               |
| active        | Boolean         | Default true        | Whether endpoint is active           |
| retryCount    | Int             | Default 3           | Max delivery retries                 |
| timeout       | Int             | Default 30          | Timeout in seconds                   |
| created_at    | DateTime        | Default now()       |                                      |
| updated_at    | DateTime        | Updated At          |                                      |

## Migration
```bash
npx prisma migrate dev --name create-platform-config-tables
```

## Notes
- Feature flags enable gradual rollouts and A/B testing without redeployment
- System config provides a key-value store for global platform settings
- AI model config allows switching models and adjusting parameters per provider
- CMS pages support managed marketing and help content
- Webhook endpoints replace hardcoded Discord webhooks with configurable, auditable integrations
