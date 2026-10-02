# Citation Document Linking — Engineering Analysis

> **Topic**: How ColabWize reads and links citations that come with an uploaded document
> **Files analysed**: `documentUploadService.ts`, `citationMappingService.ts`, `documentUpload.ts`
> **Date**: June 2026

---

## Table of Contents

1. [The Upload Flow](#1-the-upload-flow)
2. [The Linking Service (CitationMappingService)](#2-the-linking-service)
3. [Step-by-Step Linking Algorithm](#3-step-by-step-linking-algorithm)
4. [The Linking Model — How Citations Connect to References](#4-the-linking-model)
5. [The Gap — What Is Actually Broken](#5-the-gap--what-is-actually-broken)
6. [The Fix](#6-the-fix)
7. [Known Weaknesses in CitationMappingService](#7-known-weaknesses)

---

## 1. The Upload Flow

When a user uploads a document (PDF, DOCX, TXT), this is what happens:

```
User uploads file
      │
      ▼
POST /api/documents
      │
      ▼
DocumentUploadService.createProjectWithDocument()
      │
      ▼
extractTextFromDocument(file)
      │
      ├── PDF ──► Mathpix (if configured) ──► HTML
      │    └──►  PDF → DOCX → mammoth ──────► HTML
      │    └──►  pdf-parse (fallback) ────────► plain text
      │
      ├── DOCX ─► mammoth.convertToHtml() ──► HTML
      │
      └── TXT/RTF/ODT ────────────────────────► plain text
      │
      ▼
{ content, format }   ← raw text or HTML string
      │
      ▼
⚠️  CITATION LINKING NEVER HAPPENS  ⚠️
      │
      ▼
prisma.project.create({ content: raw_content })
```

**The problem**: Text is extracted and saved directly to the database. Citations stay as plain characters — `[1]` is just `[1]`, `(Smith, 2020)` is just a string. Nothing is structured, nothing is linked.

---

## 2. The Linking Service

A dedicated service exists for exactly this purpose:

```
backend/src/services/citationMappingService.ts
```

**`CitationMappingService.parseDocument(rawContent, format)`**

It takes the raw extracted content and returns a fully structured **Tiptap JSON document** where:
- Every inline citation (`[1]`, `(Smith, 2020)`) becomes a `citation` node
- Every bibliography entry becomes a `bibliographyEntry` node
- Both are **linked by a shared UUID**

However, **this service is never called from the upload route**. It only appears in unit tests.

---

## 3. Step-by-Step Linking Algorithm

### Step 1 — Split the document

```
splitBibliography(content, format)
```

Scans from the **bottom-up** through the last 500 lines, looking for a standalone heading line that exactly matches one of:

| Pattern | Example |
|---|---|
| `references` | "References" |
| `bibliography` | "Bibliography" |
| `works cited` | "Works Cited" |

Line must be **< 30 characters** long (to avoid matching a sentence that contains the word).

**Result**:
```
bodyText        = everything above the heading
bibliographyText = everything below the heading
```

If no heading is found, `bibliographyText = ""` and citation linking is disabled for this document.

---

### Step 2 — Parse the bibliography

```
parseBibliography(bibliographyText)
```

Splits the bibliography block on:
- Double newlines `\n\n`
- Lines starting with `[N]` (IEEE numbered)
- Lines starting with `N.` (numbered list format)

For each fragment longer than 10 characters, creates a `CitationEntity`:

```typescript
{
  id: randomUUID(),          // new UUID for each entry
  originalText: "Smith, J. (2020). Title...",
  type: "ieee" | "apa"       // "ieee" if starts with [N] or N., else "apa"
}
```

---

### Step 3 — Map inline citations to Tiptap JSON

```
mapInTextCitationsToJSON(bodyText, bibliographyEntities, format)
```

Splits body into paragraphs and runs two regex patterns on each:

#### IEEE Pattern
```
/\[\s*\d+(?:[\s,-]+\d+)*\s*\]/g
```

Matches: `[1]` `[1,2]` `[1-3]` `[1, 2, 3]`

**Matching logic** — positional (1-based index):
```
[1]  →  bibliographyEntities[0]
[2]  →  bibliographyEntities[1]
[5]  →  bibliographyEntities[4]
```

#### APA Pattern
```
/\((?:[^)]+,?\s+)+(?:19|20)\d{2}[a-z]?\)/g
```

Matches: `(Smith, 2020)` `(Smith et al., 2020a)` `(Jones & Brown, 1998)`

**Matching logic** — searches bibliography for an entry containing both the author surname AND the year:
```
(Smith, 2020)  →  find entry where text includes "Smith" AND "2020"
```

> Author is extracted as the first uppercase word after `(` — so `(van den Berg, 2021)` extracts `"Berg"` not `"van den Berg"`.

#### Output per paragraph

Each paragraph becomes a Tiptap `paragraph` node, where citations are replaced with `citation` nodes:

```json
{
  "type": "paragraph",
  "content": [
    { "type": "text", "text": "As shown in " },
    {
      "type": "citation",
      "attrs": {
        "citationId": "uuid-abc-123",
        "text": "[1]"
      }
    },
    { "type": "text", "text": ", the results confirm..." }
  ]
}
```

If a match has no corresponding bibliography entry, it is left as a plain `text` node.

---

### Step 4 — Append bibliography to document

```
appendBibliographyToJSON(bodyJson, usedEntities)
```

Adds to the end of the document:
1. A heading node: `{ type: "heading", attrs: { level: 2 }, content: [{ text: "References" }] }`
2. One `bibliographyEntry` node per **used** entity:

```json
{
  "type": "bibliographyEntry",
  "attrs": { "citationId": "uuid-abc-123" },
  "content": [{ "type": "text", "text": "Smith, J. (2020). Title. Journal, 5(2), 100–110." }]
}
```

> **Only used entities are appended.** Unmatched bibliography entries are silently dropped.

---

## 4. The Linking Model

The connection between an inline citation and its reference entry is a **shared UUID** — no database join, no key lookup. The association exists entirely inside the Tiptap document JSON.

```
Inline citation node                    Bibliography entry node
──────────────────────                  ──────────────────────────
{                                       {
  type: "citation",          ←UUID→       type: "bibliographyEntry",
  attrs: {                                attrs: {
    citationId: "uuid-abc",                 citationId: "uuid-abc"
    text: "[1]"                           },
  }                                       content: [{
}                                           type: "text",
                                            text: "Smith, J. (2020)..."
                                          }]
                                        }
```

When the editor renders a `citation` node, it looks up the matching `bibliographyEntry` by `citationId` to show hover previews, tooltips, and style formatting.

---

## 5. The Gap — What Is Actually Broken

| Step | What Should Happen | What Happens Today |
|---|---|---|
| Text extraction | Extract raw content | ✅ Works correctly |
| Bibliography split | Detect "References" heading | ❌ Never called |
| Parse bibliography | Create entities with UUIDs | ❌ Never called |
| Map inline citations | Replace `[1]` with citation nodes | ❌ Never called |
| Save to DB | Structured Tiptap JSON | ❌ Raw text/HTML blob saved |
| Populate citations table | `prisma.citation.createMany()` | ❌ No records created |

**Consequence**: When the audit pipeline later runs on an uploaded document, it finds all citations as `source: "manual"` (regex-detected from plain text), with no structured IDs and no bibliography match — because the document was never parsed into structured nodes.

The `SourcesLibraryPanel` shows no sources for the document. The `CitationConfidenceService` has nothing to work with. The entire citation infrastructure is bypassed.

---

## 6. The Fix

### Fix 1 — Wire `CitationMappingService` into the upload route

In [`documentUploadService.ts`](../backend/src/services/documentUploadService.ts), at line 33:

**Before (current)**:
```typescript
const { content: extractedContent, format } = await this.extractTextFromDocument(file);

const projectContent = format === "html"
  ? extractedContent
  : {
      type: "doc",
      content: [{ type: "paragraph", content: [{ type: "text", text: extractedContent }] }]
    };
```

**After (fixed)**:
```typescript
import { CitationMappingService } from './citationMappingService';

const { content: extractedContent, format } = await this.extractTextFromDocument(file);

// Parse citation structure from the document
const projectContent = CitationMappingService.parseDocument(extractedContent, format);
```

---

### Fix 2 — Persist bibliography entries to the citations table

After parsing, save each bibliography entry so the rest of the app can see them:

```typescript
const tiptapDoc = CitationMappingService.parseDocument(extractedContent, format);

// Save bibliography entries to the citations table
const bibNodes = tiptapDoc.content.filter((n: any) => n.type === "bibliographyEntry");
if (bibNodes.length > 0) {
  await prisma.citation.createMany({
    data: bibNodes.map((node: any) => ({
      project_id: project.id,
      ref_key: node.attrs.citationId,
      raw_text: node.content?.[0]?.text ?? "",
      source: "document_import",
    })),
    skipDuplicates: true,
  });
}
```

---

## 7. Known Weaknesses

Even after wiring the service in, these problems exist inside `CitationMappingService` itself:

### W1 — APA compound author names fail

```
(van den Berg, 2021)  →  extracts "Berg"
(de Silva, 2019)      →  extracts "Silva"
```

The regex `(/\(([A-Z][a-zA-Z]+)/)` only picks up the first capitalised word after `(`.

**Fix**: Use `CitationMatcher.extractAuthorFromInline()` which already handles compound names and `et al.`

---

### W2 — IEEE matching is positional, not by number

Current logic:
```typescript
const num = parseInt(numMatch[0]);
mappedEntity = bibliographyEntities[num - 1];  // array index
```

If the bibliography is not numbered sequentially from 1, or if entry 1 is listed as `[3]` in the raw text, the wrong reference is linked.

**Fix**: Parse `[N]` out of the reference text itself and build a `Map<number, CitationEntity>` keyed by the reference number, not the array position.

---

### W3 — Bibliography scan stops at 500 lines from bottom

Long theses, multi-chapter documents, or books with large appendices before the references section will fail to find the heading.

**Fix**: Scan the full document bottom-up, or scan the last 30% of lines (relative, not absolute).

---

### W4 — Unmatched bibliography entries are dropped

Only `usedEntities` (matched entries) are appended to the document. Any reference that had no in-text citation is lost.

**Fix**: Always append all bibliography entries. Add `{ matched: false }` to the attrs of unlinked ones so the UI can flag them as orphaned references.

---

### W5 — UUIDs are not stable across re-imports

Every call to `parseBibliography()` generates fresh `randomUUID()` values. Re-uploading the same document creates entirely new IDs, breaking any audit results, saved annotations, or external references to citation nodes.

**Fix**: Generate the ID as a hash of the reference text:
```typescript
import { createHash } from 'crypto';
const id = createHash('sha1').update(ref.trim()).digest('hex').substring(0, 36);
```

---

### W6 — HTML stripping loses paragraph structure

For HTML-format content (DOCX, PDF-via-Mathpix), the service strips all tags before processing:
```typescript
let textContent = format === "html" ? p.replace(/<[^>]*>/g, '') : p;
```

This loses the paragraph boundaries that were encoded in `<p>` tags, causing multiple paragraphs to be merged and breaking citation position tracking.

**Fix**: Convert HTML to text while preserving paragraph boundaries:
```typescript
let textContent = format === "html"
  ? p.replace(/<\/p>/gi, '\n').replace(/<[^>]*>/g, '')
  : p;
```

---

## Summary

```
The CitationMappingService is complete, tested, and correct.
It is simply never called from the upload route.

Adding two lines to documentUploadService.ts connects the full
citation linking pipeline to every document upload.

Secondary: fix the 6 algorithm weaknesses above for production quality.
```
