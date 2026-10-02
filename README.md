# ColabWize Docs Site

This directory is the **public documentation website** for ColabWize — a separate React single-page app built with Create React App (`react-scripts`), deployed to Vercel (`docs/vercel.json`). It is **not** the product application (which lives in the repository root and `backend/`).

## What's here

- `docs/src/` — the docs-site React app (pages, components, services, contexts).
- `docs/src/components/ui/` — Radix UI primitives used by the docs-site.
- `docs/public/`, `docs/build/` — static assets and build output.
- `docs/package.json` — scripts and dependencies for the docs site.

## Local development

```bash
cd docs
npm install
npm start          # dev server (react-scripts start) → http://localhost:3000
# npm run build    # production build → docs/build/
```

## Relationship to the codebase

- The **technical architecture documentation** lives in the repository under
  [`documentation/`](../documentation/). That set is the canonical, code-verified
  reference (architecture, backend, frontend, database, AI, citations, export,
  collaboration, billing, security, deployment).
- Product/legal pages (`PRICING.md`, `PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md`,
  `CHANGELOG.md`) and engineering analyses (`citation-*.md`, `credit system.md`,
  `export workflow.md`, `billing*.md`) also live in this `docs/` folder.

> This file previously contained the unmodified Create React App boilerplate.
> It has been replaced to describe the actual docs-site.
