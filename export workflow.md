Export Workflow Analysis Report
Overview
This report provides a comprehensive analysis of the Export Workflow system within the application. The export module handles the entire process of preparing a document for submission, including gathering metadata, formatting citations, running pre-export checks (like self-plagiarism), selecting destinations, and generating the final document structure.

Folder Structure
The core export workflow is located under the src/components/export/ directory.


src/
└── components/
    └── export/
        ├── ExportWorkflowModal.tsx  (Main 4-step export wizard)
        ├── ExportFormatModal.tsx    (Alternative/Simple format selection modal)
        └── ActionChecklistModal.tsx (Pre-submission checklist modal)
Component Breakdown
1. ExportWorkflowModal.tsx (The Core Wizard)
This is a highly comprehensive, multi-step modal wizard that guides the user through the finalization of their document.

State & Context Managed:

Audit State: Connects with pre-existing audit reports (initialAuditReport) to warn users about document integrity (e.g., Verification risks).
Metadata State: Captures properties like Author, Affiliation, Course, Instructor, Running Head, and Date.
Workflow Steps:

Details: Gathers paper details (metadata) via standard input fields.
Format: Allows selection of export format (currently supports .docx and .pdf). There are placeholders for latex, rtf, and txt. A "Journal Submission" mode is planned but disabled.
Destination: Defines where the document should go. Supported destinations:
Local Download
Google Drive (via ExportService.exportToGoogleDrive)
Zotero (Metadata export only, via ExportService.exportToZotero)
Mendeley (Metadata export only, via ExportService.exportToMendeley)
Review: The final step before export.
Uses prepareFinalHtml to flatten interactive TipTap nodes (Citations, Bibliography) into standard HTML.
Converts <a data-citation-id="KEY"> tags into properly formatted in-text citations.
Automatically injects a formatted References/Bibliography section at the bottom if it doesn't already exist in the document body.
Triggers the backend export endpoint (/api/files) to perform the document conversion and fetch the final blob.
2. ExportFormatModal.tsx
A simpler, standalone format selection modal with built-in self-plagiarism checks.

Formats Supported: .docx, .latex (.tex), .rtf, .txt.
Self-Plagiarism Guard: Calls OriginalityService.checkSelfPlagiarism before export. If the internal similarity score is high (>20%), it warns the user and asks for explicit confirmation before allowing the export.
3. ActionChecklistModal.tsx
A pre-submission checklist UI.

Displays a hardcoded list of actions (e.g., "Add citations to highlights", "Rewrite close paraphrases", "Confirm quotes are marked", "Review reused draft sections").
The user must manually toggle all checkboxes before the "Looks Good, Continue" button becomes active.
Key Technical Workflows & Data Transformations
HTML Preparation (prepareFinalHtml): Before sending the document to the backend parser, interactive TipTap components must be neutralized. The system converts React-driven citation nodes into static HTML links with anchors (<a href="#bib-KEY">), ensuring footnote or endnote mapping works properly in Word/PDF documents.
Citation Orchestrator: Uses CitationOrchestrator.runExport to ensure that citations are verified and locked in before the document blob is generated.
API Payload: The payload sent to /api/files includes the raw HTML (htmlContent), TipTap JSON (content), document title, and a metadata object populated from Step 1.

Additional Context for Continuation
# COLABWIZE DOCUMENT PUBLISHING PLATFORM
# ARCHITECTURE REVIEW, REDESIGN & IMPLEMENTATION SPECIFICATION

Version: V4 Engineering Review

Priority: P0

Status: Major Platform Redesign

---

# PURPOSE

This review is NOT an export bug review.

This review is NOT about fixing PDF generation.

This review is intended to redesign the entire Document Publishing Platform that powers every document leaving ColabWize.

The objective is to transform Export into a first-class publishing system capable of supporting:

- Academic publishing
- Research paper submission
- Institutional workflows
- Journal templates
- Conference templates
- Cloud publishing
- Office workflows
- Developer workflows
- Future AI-assisted publishing

Assume ColabWize becomes the primary research writing platform used by universities worldwide.

Design the publishing platform accordingly.

---

# CURRENT STATE

The current implementation contains multiple disconnected export systems.

Current findings include:

• Multiple export paths

• Different data sources

• Stale document exports

• Broken Overleaf integration

• Frontend/backend format mismatch

• Billing inconsistencies

• Hard Pandoc dependency

• Limited observability

These findings have already been documented.

Do NOT simply fix these issues.

Instead determine whether the current architecture should be redesigned entirely.

---

# PRODUCT OBJECTIVE

Users do not want to "Export."

Researchers want to:

Publish.

Share.

Submit.

Archive.

Collaborate.

Reuse.

Synchronize.

The platform should reflect that mindset.

The Export button should evolve into a Publishing Center.

---

# DESIGN PHILOSOPHY

Current

Editor

↓

Export

↓

PDF

Future

Editor

↓

Publishing Platform

↓

Choose Destination

↓

Configure Output

↓

Validate

↓

Generate

↓

Deliver

↓

History

↓

Revisions

↓

Re-export

The document should become portable rather than simply downloadable.

---

# CORE ARCHITECTURE REVIEW

Current export appears tightly coupled to output format.

Review whether the platform should instead introduce a Canonical Document Model.

Target architecture

TipTap

↓

Canonical Document Model

↓

Publishing Engine

↓

Output Adapters

↓

PDF

DOCX

LaTeX

Markdown

HTML

RTF

Plain Text

EPUB

Google Docs

Overleaf

OneDrive

Future Adapters

Every exporter should consume the same intermediate document.

No exporter should parse TipTap independently.

Review implementation feasibility.

---

# CANONICAL DOCUMENT MODEL

Determine whether ColabWize should introduce an internal publishing document.

Example structure

Document

Metadata

Sections

Headings

Paragraphs

Tables

Figures

Captions

References

Footnotes

Equations

Cross References

Appendices

Document Settings

Publishing Metadata

Every output format should be generated from this model.

Review migration complexity.

---

# EXPORT ADAPTER ARCHITECTURE

Review replacing format-specific logic with adapters.

Example

ExportAdapter

↓

PDFAdapter

DOCXAdapter

LatexAdapter

MarkdownAdapter

HTMLAdapter

EPUBAdapter

GoogleDocsAdapter

OverleafAdapter

Each adapter should be independently testable.

Each adapter should expose identical interfaces.

Determine architecture.

---

# PUBLISHING DESTINATIONS

Review future publishing targets.

Academic

PDF

DOCX

LaTeX

Overleaf

Nature

Elsevier

Springer

IEEE

ACM

Office

Microsoft Word

Google Docs

OneDrive

Developer

Markdown

HTML

JSON

XML

Books

EPUB

Kindle

Cloud

Google Drive

Dropbox

OneDrive

Box

Future

ResearchGate

Zenodo

GitHub

Institutional Repositories

Review architecture required.

---

# TEMPLATE SYSTEM

Current exports appear format-oriented.

Review introducing publishing templates.

Examples

APA

MLA

Chicago

IEEE

Nature

Elsevier

Springer

ACM

CVPR

NeurIPS

ICML

Each template should define

Typography

Margins

Heading styles

Reference formatting

Table styles

Figure styles

Equation formatting

Page numbering

Determine implementation strategy.

---

# PRE-PUBLISH VALIDATION

Before publishing, validate

Missing references

Broken citations

Duplicate references

Missing figures

Broken figure numbering

Missing captions

Broken tables

Equation numbering

Heading hierarchy

Citation style compliance

Determine whether publishing should fail or warn.

---

# PUBLISHING WORKFLOW

Current

Export

↓

Download

Target

Publish

↓

Choose Destination

↓

Choose Template

↓

Citation Style

↓

Figures

↓

Tables

↓

Preview

↓

Validation

↓

Generate

↓

Upload

↓

History

↓

Notification

Review user experience.

---

# EXPORT JOB SYSTEM

Do not generate documents synchronously.

Review introducing Export Jobs.

Export Request

↓

Queue

↓

Worker

↓

Generate

↓

Store

↓

Notify User

↓

Download

Every export should become an observable job.

Review

Retries

Cancellation

Failures

Progress

Notifications

---

# VERSION HISTORY

Every generated document should be recorded.

Example

Export Job

Document Version

Template

Format

Citation Style

Generated By

Timestamp

Duration

Output Size

Checksum

Download Link

Review implementation.

---

# BILLING REVIEW

Publishing should integrate with the new Billing Gateway.

No exporter should manage billing.

Publishing Engine

↓

Billing Gateway

↓

Permission

↓

Generate

↓

Commit Usage

↓

Deliver

Review architecture.

---

# CLOUD INTEGRATIONS

Review

Google Drive

OneDrive

Dropbox

Box

Overleaf

GitHub

Future integrations should require adapter implementations only.

Review abstraction.

---

# AI INTEGRATION

Future publishing should support

AI Formatting

AI Template Suggestions

Journal Recommendation

Submission Readiness

Accessibility Review

Language Improvement

Reference Health

Figure Quality Review

Table Optimization

Determine where AI belongs inside the publishing pipeline.

---

# PERFORMANCE REVIEW

Stress Test

10 pages

100 pages

500 pages

1000 pages

Large figures

Large tables

Thousands of references

Determine bottlenecks.

Review

Memory

CPU

Streaming

Temporary storage

Parallel generation

---

# OPERATIONS REVIEW

Current implementation depends on Pandoc.

Review

Dependency management

Health checks

Fallbacks

Container compatibility

Serverless compatibility

Queue workers

Scaling

Observability

Metrics

Logging

Tracing

Failure recovery

Determine production architecture.

---

# UI / UX REVIEW

Replace Export dialog with Publishing Center.

Suggested sections

Academic

Office

Cloud

Developer

Archive

History

Recent Jobs

Templates

Favorites

Saved Presets

Publishing Analytics

The user should immediately understand where they are sending their document.

---

# PUBLISHING HISTORY

Every export should appear inside

Publishing Timeline

Example

Published PDF

Uploaded to Google Drive

Exported DOCX

Generated LaTeX

Opened in Overleaf

Downloaded EPUB

Failed Export

Retry

Review implementation.

---

# SECURITY REVIEW

Review

Permission validation

Temporary file handling

Signed URLs

Download expiry

Cloud authentication

Access control

Virus scanning

Sensitive document handling

Encryption

Audit logging

---

# ENTERPRISE READINESS

Evaluate support for

Universities

Research Labs

Institutions

Departments

Shared Templates

Organization Branding

Approval Workflows

Publication Policies

Submission Pipelines

Determine architectural readiness.

---

# REQUIRED DELIVERABLES

Produce

1. Architecture Review

2. Canonical Document Model Design

3. Publishing Engine Design

4. Adapter Architecture

5. Export Job Architecture

6. Template Engine Design

7. Validation Engine Design

8. Cloud Integration Review

9. Billing Integration Review

10. Queue Architecture

11. Performance Review

12. Operations Review

13. UI / UX Redesign

14. Enterprise Readiness Review

15. Complete Refactor Proposal

---

# IMPLEMENTATION ROADMAP

Provide

Phase 1

Canonical Document Model

Phase 2

Publishing Engine

Phase 3

Output Adapters

Phase 4

Cloud Integrations

Phase 5

Publishing Center UI

Phase 6

AI Publishing Assistant

Estimate

Engineering effort

Migration risks

Breaking changes

Testing strategy

Rollback strategy

---

# FINAL QUESTION

Assume ColabWize becomes the world's leading AI-powered research writing platform.

Design the Document Publishing Platform that will support the next decade of academic publishing.

The platform must satisfy:

• Single publishing pipeline

• Canonical document model

• Adapter-based architecture

• Unified billing integration

• Background job execution

• Versioned publishing history

• Journal templates

• Cloud integrations

• Enterprise workflows

• AI-assisted publishing

• Massive scalability

• High observability

• Long-term maintainability

Do not optimize for minimal code changes.

Design the publishing platform you would build if ColabWize were expected to support millions of researchers, millions of exported documents, and every major academic publishing workflow.

Support every recommendation with:

- Technical reasoning

- Business impact

- Migration strategy

- Risk assessment

- Alternative approaches considered

- Justification for the recommended architecture.