# Citation Normalization — Algorithmic Analysis & Implementation Plan

> **Date**: 2026-06-26
> **Scope**: `normalization.ts`, `CitationScannerExtension.ts`, `CitationRegistryService.ts`, `CitationMappingService.ts`, `CitationLifecycleExtension.ts`, `patterns.ts`
> **Verdict**: The pipeline is **architecturally sound but algorithmically dead** — three independent subsystems exist for citation detection, but none of them talk to each other in production. The result is that citations in a live editor are decorated (highlighted) but never linked (matched to a registry entry or bibliography).

---

## 1. The Three Subsystems

| Subsystem | File | Job | State |
|---|---|---|---|
| **A. CitationScanner** | `CitationScannerExtension.ts` | ProseMirror plugin — decorates in-text citations in the editor (green/yellow/grey) | ✅ Active on every keystroke |
| **B. Normalization** | `normalization.ts` | Replaces matched plain-text citations with `citation` Tiptap nodes linked to the registry | ⚠️ Called only from `DocumentEditor` on explicit user action (mount + manual trigger) |
| **C. CitationMapping** | `backend/src/services/citationMappingService.ts` | Parses uploaded documents into structured Tiptap JSON with linked `citation` + `bibliographyEntry` nodes | ❌ **Dead** — never called from the upload route |

### Subsystem A — CitationScannerExtension

**What it does well**:
- Two-pass ProseMirror plugin: Pass 1 finds bibliography entries and builds an `ieeeMetadata` map + `referenceSet`; Pass 2 decorates in-text citations with the right status (`linked`, `orphan`, `unknown`).
- Correctly skips the bibliography region so entries aren't double-decorated.
- Handles the "no bibliography found" case — marks everything as `unknown` (grey) instead of falsely `linked`.
- Click-to-scroll to reference works for IEEE and APA.

**What's broken**:
1. **Author matching is a substring contains** (line 237–241):
   ```typescript
   const authorMatch = p.text.match(/[a-zA-ZÀ-ÿ-]+/);
   const author = authorMatch ? authorMatch[0].toLowerCase() : "";
   isLinked = Array.from(referenceSet).some(
     (r) => r.includes(author) || author.includes(r),
   );
   ```
   - `(Smith, 2020)` → `author = "smith"`. If the bibliography has `smithson` or `jonesmith`, it falsely matches.
   - `(Smith, 2020)` and `(Smithson, 2020)` both match the same reference.
   - No year check in the APA/MLA/Chicago branch — only the IEEE branch uses `ieeeMetadata`.

2. **The `referenceSet` is built from the first word of the bibliography line** (line 128–136):
   ```typescript
   const authorMatch = fullLineText.match(/^([A-Z][a-zA-ZÀ-ÿ\s\-']+?)(?:,|\.)/);
   ```
   - Fails on `"(2020). Title. Journal."` — no leading author.
   - Fails on `"[1]. Title."` — IEEE format with no author word at start.
   - Falls back to "first 1–2 significant words" which is the same naive heuristic.

3. **No registry integration** — the scanner is purely visual. It never asks `CitationRegistryService` whether a matching entry exists. So a citation to a source the user added to their library shows as "orphan" even though the registry has it.

### Subsystem B — `normalization.ts`

**What it does**:
- `detectAndNormalizeCitations` — scans the editor, extracts patterns, tries to match each pattern against `CitationRegistryService`, and replaces the plain text with a `citation` node.
- `scanAndIngestReferences` — scans the bibliography section and registers each entry with the registry.
- `synchronizeRegistryWithDocument` — heals broken `citation` nodes by re-registering missing entries.
- `detectAndNormalizeBibliography` — wraps bibliography paragraphs in `bibliographyEntry` nodes.

**What's broken**:
1. **Three full document scans per invocation** — Phase 1 (lines 138–151) collects unique citation texts, then the matching loop (159–175) hits the registry (with network calls for auto-enrichment), then Phase 3 (182–213) does another full scan to collect replacements, then a fourth scan (236–251) for de-normalization. On a 50-page thesis this is ~100k nodes traversed 4 times plus N registry lookups.

2. **Pattern extraction is duplicated** — `extractPatterns` from `patterns.ts` is called in both Phase 1 and Phase 3 for the same text nodes. The results are discarded between phases.

3. **The matching in `findRegistryMatchForInText` is greedy and ambiguous** (lines 93–124):
   - Author+year matching: `raw.includes(author) && raw.includes(year)` — same substring-contains problem as the scanner. `(Smith, 2020)` matches any entry with "smith" and "2020" anywhere in the text.
   - If two entries have the same author and year (e.g., two Smith 2020 papers), the **first** one in the registry always wins. The user has no way to disambiguate.

4. **Auto-enrichment fires on every unmatched citation** (line 165):
   ```typescript
   const entry = await CitationRegistryService.registerCitation(projectId, text);
   ```
   `registerCitation` calls OpenAlex for every citation missing `journal` and `url`. For a document with 100 citations, that's 100 sequential API calls on the main thread. No batching, no debounce, no caching of failed lookups.

5. **The de-normalization pass** (lines 236–251) uses a hardcoded blacklist (`prep`, `art`, `hiv`, `aids`, `u=u`, `table`, `figure`, `fig.`) to revert citations that were falsely created from abbreviations. This is a band-aid for bad pattern matching — the real fix is better patterns.

6. **`scanAndIngestReferences` is lossy** — it extracts `title` from the first quoted text or a regex guess (lines 304–308), and `authors` is hardcoded to `["Unknown"]`. The bibliography entry is registered with almost no metadata, so downstream export to Zotero/Mendeley produces low-quality records.

### Subsystem C — `CitationMappingService` (backend)

**What it does**:
- `parseDocument` → `splitBibliography` → `parseBibliography` → `mapInTextCitationsToJSON` → `appendBibliographyToJSON`.
- Returns a complete Tiptap JSON with `citation` and `bibliographyEntry` nodes linked by UUID.

**What's broken** (also covered in `citation-document-linking.md`):
1. **Never called from the upload route** — the original sin.
2. **APA author extraction is `/\(([A-Z][a-zA-Z]+)/`** — grabs `Berg` from `(van den Berg, 2021)` instead of `van den Berg`.
3. **IEEE matching is positional** — `[1]` → `bibliographyEntities[0]`, not by the `[N]` number parsed from the reference text. Wrong if bibliography doesn't start at 1 or has gaps.
4. **Bibliography scan limited to last 500 lines** — fails on long theses.
5. **Unmatched entries are dropped** — only `usedEntities` are appended.
6. **UUIDs are random every call** — re-uploading breaks existing references.
7. **HTML stripping loses `<p>` boundaries** — `replace(/<[^>]*>/g, '')` merges paragraphs.

---

## 2. The Integration Gap

The three subsystems were built at different times for different purposes and never wired together:

```
Upload → CitationMappingService (backend) → [DEAD: result discarded]
                ↓ (should feed)
Editor mount → CitationRegistryService.loadRegistry() → [works]
                ↓ (should be source of truth for)
CitationScannerExtension → [only uses local regex, not registry]
                ↓ (should produce)
detectAndNormalizeCitations → [produces citation nodes with ref_key from registry]
                ↓ (should be validated by)
CitationLifecycleExtension → [currently no-ops, all rules disabled]
```

**What's missing**:
- Scanner has no registry awareness → can't show "in your library" vs "orphan".
- Normalization runs on explicit trigger only → citations added by paste or collaboration stay as plain text until the user manually triggers normalization.
- Registry is populated from explicit `addCitation` or `scanAndIngestReferences` → pasted bibliography entries are never auto-registered.
- Lifecycle extension is disabled → no cleanup of orphaned entries, no sync of registry ↔ document.

---

## 3. Root-Cause Summary

| Symptom | Root Cause |
|---|---|
| Citations show as orphan in editor despite being in library | Scanner doesn't consult registry |
| Citations never become `citation` nodes unless user clicks "Normalize" | Normalization is not automatic on paste or collaborative update |
| Uploaded documents have no citation structure | `CitationMappingService` not wired into upload route |
| `(Smith, 2020)` matches wrong reference | Substring-contains matching without tokenization or year+author disambiguation |
| `(van den Berg, 2021)` matches `Berg` | APA regex only captures first capitalized word |
| Two `Smith, 2020` papers always resolve to the first | No disambiguation UI, greedy first-match |
| 100-citation document = 100 sequential OpenAlex calls | No batching, no debounce, no negative-cache |
| Re-uploading a document breaks all citation links | UUIDs are random, not content-derived |
| Bibliography entries have `authors: ["Unknown"]` | `scanAndIngestReferences` doesn't parse author fields |

---

## 4. Implementation Plan

### Phase 0 — Prep: Extract & Test the Matching Logic
**Goal**: Isolate matching into one pure, testable module that all three subsystems share.

- [ ] Create `src/services/citationMatcher.ts` (pure, no imports from ProseMirror/DB).
- [ ] Implement `matchInlineCitation(text, bibliographyEntries): MatchResult` with:
  - IEEE: parse `[N]` from the inline citation, build `Map<number, Entity>` from reference text, look up by number.
  - APA/Chicago: extract author token (handle compound surnames via `citationFormatter.parseReferenceText` or a dedicated `extractAuthors()` function), extract year, build `Map<authorKey, Entity[]>` for O(1) lookup, disambiguate multiple matches by title similarity (Jaccard on lowercased tokens).
  - MLA: same as APA but match by author + page number.
- [ ] Unit tests: IEEE with gaps, IEEE with non-sequential numbers, APA compound surnames, APA same-author-same-year disambiguation, Chicago, MLA with page numbers.
- [ ] Benchmark: 500-citation document should match in < 50ms (no I/O).

### Phase 1 — Fix CitationMappingService (backend, upload path)
**Goal**: Make upload produce structured, linked documents.

- [ ] Wire into `documentUploadService.ts` (the 2-line fix from `citation-document-linking.md`).
- [ ] Replace `randomUUID()` with `sha1(referenceText).slice(0, 36)` for stable IDs.
- [ ] Fix `splitBibliography` to scan full document (not just last 500 lines) — use last 30% of lines, capped at 1000.
- [ ] Fix `parseBibliography` to extract IEEE reference numbers from the text itself (`[N]` or `N.`) and key entities by that number, not array position.
- [ ] Fix APA author extraction — use `parseReferenceText` from `citationFormatter` (already handles compound names) instead of the inline regex.
- [ ] Always append all bibliography entries (not just used ones), with `{ matched: false }` attr on orphans.
- [ ] Preserve HTML paragraph boundaries: `replace(/<\/p>/gi, '\n')` before stripping tags.
- [ ] After parsing, call `prisma.citation.createMany(...)` to persist bibliography entries with `source: "document_import"`.

### Phase 2 — Fix `patterns.ts` & `extractPatterns`
**Goal**: Single source of truth for citation pattern detection.

- [ ] Extend `ExtractedPattern` to include `author`, `year`, `page` fields when extractable (not just `text` + `patternType`).
- [ ] Fix APA regex to capture the full author string, not just first word: `\(([^)]+),\s*(19|20)\d{2}`.
- [ ] Add `AUTHOR_YEAR_COMPOUND` pattern type for `(van den Berg, 2021)` so downstream matchers know to use the full captured author string.
- [ ] Add `extractAuthors(text): string[]` export — returns all author surnames from an APA/Chicago reference line. Reuse in scanner, normalization, and mapping service.
- [ ] Add `extractYear(text): string | null` export.
- [ ] Add `extractIEEEKey(text): number | null` export.

### Phase 3 — Rewrite `CitationScannerExtension` to Use Registry
**Goal**: Visual decoration reflects real linkage state.

- [ ] Pass `projectId` into the extension (already available in `DocumentEditor`).
- [ ] On init / document change, call `CitationRegistryService.initializeFromBackend(projectId)` once.
- [ ] In Pass 2, for APA/Chicago citations: query registry by author+year instead of substring `referenceSet` check.
- [ ] Decoration colors:
  - `linked` (green): citationId found in registry with matching bibliography entry.
  - `in-library` (blue): registry has the source but no bibliography entry in this document.
  - `orphan` (yellow): no match anywhere.
  - `unknown` (grey): no bibliography section detected.
- [ ] Remove the `referenceSet` + `ieeeMetadata` local-build — rely on registry as single source of truth.

### Phase 4 — Rewrite `normalization.ts` as a Single-Pass Operation
**Goal**: Make normalization fast enough to run on every save.

- [ ] Replace 4 full-document scans with 1 scan:
  1. Traverse document once.
  2. For each text node, call `extractPatterns`.
  3. For each match, call `matchInlineCitation` (pure, fast, no I/O).
  4. Collect replacements in a single list.
  5. Apply in reverse order in one transaction.
- [ ] Remove the `stopScanningPhase1/3` flag pattern — use a single `inBibliographyRegion` boolean.
- [ ] Replace the hardcoded blacklist with a post-match validation: if the matched pattern is inside a `table` or `figure` node, skip it.
- [ ] Remove auto-enrichment from `registerCitation` — move to a separate `enrichCitation` async job that runs after normalization, batched.
- [ ] Add `normalizeCitationsBatched(editor, projectId, citationTexts: string[])` — accepts pre-extracted texts, does matching + replacement in one transaction. Called by paste handler and collaboration update handler.

### Phase 5 — Auto-Normalize on Paste & Collaborative Update
**Goal**: Citations never sit as plain text longer than necessary.

- [ ] Add a `handlePaste` handler to the editor: on paste, extract text, run `extractPatterns`, if any matches found → schedule `normalizeCitationsBatched` after the paste transaction completes.
- [ ] Add a debounced `handleUpdate` handler (500ms debounce): scan new/changed text nodes only, batch-match, batch-replace.
- [ ] For collaborative updates (Yjs): when a remote change inserts text matching a citation pattern, queue normalization for that region only.

### Phase 6 — Fix `scanAndIngestReferences` (Bibliography Ingestion)
**Goal**: Bibliography entries registered with full metadata.

- [ ] Replace the hardcoded `authors: ["Unknown"]` with `parseReferenceText(text).authors`.
- [ ] Replace the title regex guess with `parseReferenceText(text).title`.
- [ ] Extract DOI, URL, ISSN, ISBN, PMID from the raw text using `extractIdentifiers` (already in `normalization.ts`).
- [ ] Run `extractPatterns` on the bibliography line to detect its citation style (IEEE vs APA) and set `entity.type` accordingly.

### Phase 7 — Re-enable `CitationLifecycleExtension` Safely
**Goal**: Keep registry ↔ document in sync without data loss.

- [ ] Re-enable Rule 2 (delete `citation` nodes whose `bibliographyEntry` was deleted) — but only if the citation was created by normalization, not by explicit user action. Add a `source: "normalization"` attr to distinguish.
- [ ] Keep Rule 1 (delete `bibliographyEntry` if no citations) **disabled** — too aggressive. Instead, mark as `orphaned: true` and let the UI offer cleanup.
- [ ] Add a registry cleanup pass: on editor mount, compare registry entries against document nodes. Remove registry entries that have no corresponding document node and were created > 1 hour ago (avoid deleting entries the user is about to cite).

### Phase 8 — Disambiguation UI
**Goal**: Let the user resolve ambiguous citations.

- [ ] When `matchInlineCitation` finds ≥ 2 candidates, create the `citation` node with `status: "ambiguous"` and `candidates: string[]` (list of ref_keys).
- [ ] In `CitationComponent` (the node view), render an ambiguous citation with a popover listing candidates.
- [ ] User clicks a candidate → update `citationId` to the chosen entry, set `status: "resolved"`.

---

## 5. File-by-File Change Summary

| File | Phase | Change |
|---|---|---|
| `src/services/citationMatcher.ts` | 0 | **NEW** — pure matching module |
| `src/services/citationMatcher.test.ts` | 0 | **NEW** — unit tests |
| `backend/src/services/citationMappingService.ts` | 1 | Fix UUIDs, fix split limit, fix IEEE key extraction, fix APA author, append all entries, preserve `<p>` boundaries |
| `backend/src/services/documentUploadService.ts` | 1 | Wire `CitationMappingService.parseDocument` + `prisma.citation.createMany` |
| `src/services/citationAudit/patterns.ts` | 2 | Add `author`/`year`/`page` to `ExtractedPattern`, add `extractAuthors`, `extractYear`, `extractIEEEKey` |
| `src/extensions/CitationScannerExtension.ts` | 3 | Use registry instead of local `referenceSet`/`ieeeMetadata`; new decoration colors |
| `src/components/editor/utils/normalization.ts` | 4 | Single-pass scan, remove duplicated `extractPatterns` calls, remove blacklist, batch enrichment |
| `src/components/editor/DocumentEditor.tsx` | 5 | Add paste handler + debounced update handler calling `normalizeCitationsBatched` |
| `src/extensions/CitationLifecycleExtension.ts` | 7 | Re-enable Rule 2 with `source === "normalization"` guard; add registry cleanup |
| `src/components/editor/views/CitationComponent.tsx` | 8 | Add ambiguous-citation popover |

---

## 6. Success Criteria

- [ ] Uploaded 50-citation PDF → all citations linked to bibliography entries with correct numbers.
- [ ] Pasted text with `(Smith, 2020)` → becomes a `citation` node within 500ms.
- [ ] `(van den Berg, 2021)` → matches `van den Berg`, not `Berg`.
- [ ] Two `Smith, 2020` papers → user picks the right one via disambiguation popover.
- [ ] Re-uploading the same document → same UUIDs, no broken links.
- [ ] Scanner decorations match registry state (green = in library, not just regex-guessed).
- [ ] No regression in `CitationScannerExtension` performance: < 100ms for a 100-citation document.
