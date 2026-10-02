# TASK: Complete Documentation Audit & Version Upgrade for ColabWize

## Mission

Treat the CURRENT CODEBASE as the ONLY source of truth.

Assume the existing documentation is outdated.

Your objective is to completely audit the entire ColabWize codebase, compare it against the existing documentation, determine the architectural evolution, assign the next appropriate platform version, and regenerate the complete documentation suite.

Do NOT preserve outdated documentation simply because it already exists.

---

# Phase 1 — Full Repository Analysis

Perform a complete repository audit.

Analyse:

- Frontend architecture
- Backend architecture
- Database schema
- APIs
- Authentication
- AI pipeline
- Export engine
- Citation system
- Document processing
- Collaboration system
- Storage
- Security
- Billing
- Integrations
- Background jobs
- Workers
- Shared packages
- Utilities
- Folder structure
- Build pipeline
- Deployment

Generate a complete architecture map.

For every module determine:

- Purpose
- Responsibilities
- Dependencies
- Public interfaces
- Internal flow
- Current maturity
- Whether it is Production Ready, Experimental or Deprecated

---

# Phase 2 — Compare Against Existing Documentation

Read every documentation file inside

/docs
/documentation
/docs-site
/wiki
README
architecture docs
design docs

Compare documentation against the actual implementation.

Create a report containing:

## Accurate

Things still correctly documented.

## Changed

Features that evolved.

## Missing

Implemented features that are undocumented.

## Deprecated

Documentation describing code that no longer exists.

## Incorrect

Architecture that no longer matches reality.

Never assume documentation is correct.

The codebase always wins.

---

# Phase 3 — Detect Major Platform Evolution

Determine how much the platform has evolved.

Evaluate changes including:

Architecture

Folder structure

Database

Export pipeline

Citation engine

AI capabilities

Authentication

Research workflow

Integrations

API surface

UI architecture

Performance

Developer experience

Infrastructure

Scalability

Based on semantic versioning principles, recommend the most appropriate next version.

Possible examples

2.0.1
2.1
2.2
2.3
2.5
2.7
3.0

Justify the recommendation.

Explain:

- why this version fits
- what changed
- why it is or isn't a major release

---

# Phase 4 — Generate a Documentation Upgrade Plan

Produce a prioritized roadmap for documentation updates.

Group documentation into:

Critical

Important

Nice to have

For every document estimate:

- effort
- dependencies
- completion status

---

# Phase 5 — Rewrite Documentation

Rewrite documentation so it reflects the CURRENT implementation.

Never copy old documentation blindly.

Each document should explain the actual system.

Use clear Markdown.

Generate diagrams where useful using Mermaid.

Include:

Architecture diagrams

Sequence diagrams

Flow charts

ER diagrams

Component diagrams

Export pipeline diagrams

Citation lifecycle

AI workflow

Authentication flow

API flow

State transitions

Document lifecycle

---

# Phase 6 — Documentation Categories

Generate or update documentation for every major subsystem.

Examples include (adapt based on actual implementation):

# Platform

Overview

Vision

Version History

Roadmap

Architecture Overview

Repository Structure

Technology Stack

Development Workflow

Deployment

Environment Variables

Configuration

Security

Performance

Observability

Logging

Testing Strategy

Release Process

Contributing Guide

Coding Standards

---

# AI System

Prompt Pipeline

Model Routing

Streaming

Reasoning

Tools

Citation Validation

Context Management

AI Writing

Research Workflow

Memory

---

# Citation Engine

Citation Architecture

Metadata

Validation

Verification

DOI Resolution

Reference Parsing

Reference Quality

Bibliography Generation

Export Support

---

# Export System

Export Architecture

DOCX Export

PDF Export

Markdown Export

HTML Export

Future LaTeX Support

Asset Handling

Image Separation

Table Separation

Placeholder System

Packaging

ZIP Export

Publisher Mode

Journal Mode

Asset Manifest

Citation Preservation

Hyperlink Preservation

Cross References

Metadata

Accessibility

Failure Recovery

---

# Collaboration

Document Sync

Version History

Conflict Resolution

Presence

Permissions

Comments

Review Workflow

---

# API

Endpoints

Authentication

Schemas

Examples

Errors

Rate Limits

---

# Database

Schema

Relationships

Indexes

Storage

Migration History

---

# Frontend

Component Architecture

Routing

State Management

Editor

UI System

---

# Backend

Services

Controllers

Workers

Queues

Pipelines

Middleware

---

# Phase 7 — Version History

Produce a changelog describing how the platform evolved.

Example:

2.0

Initial Research Platform

2.1

Citation Improvements

2.2

Export Engine Rewrite

2.3

AI Architecture Upgrade

2.5

Publisher Export Workflow

...

Only include versions supported by actual repository history.

Do not invent features.

---

# Phase 8 — Documentation Quality Audit

Score every documentation file.

Metrics:

Accuracy

Completeness

Maintainability

Developer Friendliness

Architecture Coverage

Examples

Consistency

Overall Quality

Assign grades.

Example:

A+

A

B+

B

C

Needs Rewrite

---

# Phase 9 — Missing Documentation

Identify documentation that should exist but currently doesn't.

Explain why each document is valuable.

Estimate implementation priority.

---

# Phase 10 — Deliverables

Produce:

1. Repository architecture report

2. Version recommendation with justification

3. Documentation audit report

4. Documentation roadmap

5. Complete rewritten documentation

6. Updated diagrams

7. Changelog

8. Documentation quality report

9. Missing documentation report

10. Executive summary

---

# Rules

- Never trust outdated documentation over implementation.
- The codebase is the source of truth.
- If implementation and documentation disagree, document the implementation.
- Be exhaustive.
- Prefer precision over brevity.
- Explain architectural decisions.
- Use professional technical writing suitable for open-source and enterprise documentation.
- Preserve backwards compatibility notes where relevant.
- Clearly mark deprecated features.
- Identify technical debt where discovered.
- Recommend documentation improvements beyond simple rewrites.