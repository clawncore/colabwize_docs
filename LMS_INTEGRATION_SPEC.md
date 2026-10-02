# LMS Integration Spec – LTI 1.3 Advantage

## Goal
Enable institutions to provision assignments from Canvas/Blackboard into ColabWize, sync rosters, enforce per-assignment integrity rules, and pass back integrity scores.

## Components
1. LTI Platform registration
   - Issuer: https://colabwize.com
   - Client ID per institution
   - Public JWKS endpoint

2. Assignment creation flow
   - Instructor launches ColabWize tool from LMS assignment
   - ColabWize receives context: course_id, assignment_id, roles
   - Auto-create Workspace + Assignment with integrity rules mapped from LMS outcomes

3. Roster sync
   - Deep Linking for enrollment
   - Webhook for membership changes

4. Grade passback
   - Send authorship confidence score + attestation status back to LMS gradebook

## Endpoints
POST /api/lti/launch – validate JWT
POST /api/lti/assignments/sync – create/update assignment
POST /api/lti/grades – passback

## Next steps
Implement LTI launch validation, create lti_installations table.
