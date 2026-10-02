import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  Palette,
  Share2,
  Settings,
  Zap,
  Brain,
  AlertTriangle,
  CheckCircle2,
  FileArchive,
  Link as LinkIcon,
  HardDrive,
  Cloud,
  Database,
  AlertCircle,
} from "lucide-react";
import {
  Step,
  InfoBox,
  Tip,
  NumberedSection,
  VideoPlaceholder,
  DocFooter,
} from "../docs/DocBlocks";

const ExportPage = () => {
  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <Download className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Export Your Document</h1>
            <p className="text-lg text-gray-600">
              Turn your finished paper into a clean, submission-ready file with
              multiple formats, citation style auto-formatting, self-plagiarism
              guard, and direct cloud integrations.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Export packages your document together with its citations,
            bibliography, and formatting so your work looks right wherever it
            lands. The export workflow is a multi-step modal that guides you
            through format selection, metadata entry, destination choice, and
            pre-flight checks — including citation audit integration and
            self-plagiarism detection.
          </p>
          <InfoBox>
            <strong>Key workflow:</strong> Export is gated by the Citation
            Audit. If your compliance score is below 70, export is blocked until
            you resolve citation issues. The workflow also runs a
            self-plagiarism check against your previous submissions before any
            download begins.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Multiple Formats
              </h3>
              <p className="text-sm text-gray-600">
                DOCX, PDF, LaTeX, RTF, TXT via Pandoc. DOCX/PDF keep citations
                and bibliography intact with style-specific formatting (APA,
                MLA, IEEE, Chicago, Harvard).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Style-Preserved Export
              </h3>
              <p className="text-sm text-gray-600">
                In-text citations resolved to clickable hyperlinks. Bibliography
                entries formatted per selected style. Citation nodes and
                bibliography nodes flattened to standard HTML for Pandoc
                conversion.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Direct Cloud Integrations
              </h3>
              <p className="text-sm text-gray-600">
                Export to Google Drive, Zotero, Mendeley, or local download.
                Google Drive uses OAuth; Zotero/Mendeley export reference
                metadata.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Self-Plagiarism Guard
              </h3>
              <p className="text-sm text-gray-600">
                Automatic check against your previous submissions before export.
                Blocks or warns on &gt;20% similarity to internal work. Manual
                re-check available in modal.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Journal Submission Package
              </h3>
              <p className="text-sm text-gray-600">
                Publication Export mode: creates Submission.zip with Main
                Manuscript (DOCX, text only + figure callouts) + Figures File
                (DOCX, one figure per page). Uses publisher profiles for
                journal-specific formatting.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Pre-Flight Citation Audit
              </h3>
              <p className="text-sm text-gray-600">
                Background pre-check runs citation audit on export. If
                violations block submission (NEEDS_REVIEW), findings are shown
                with "continue anyway" option. Integrates with existing citation
                audit report.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From editor to downloaded file with all format options.
          </p>
          <VideoPlaceholder title="Export walkthrough" length="~2 minutes" />
        </section>

        {/* Step 1 — Open Export & Choose Format */}
        <NumberedSection n={1} title="Open the Export workflow">
          <p className="text-gray-700 leading-relaxed mb-4">
            In the editor, click the <span className="font-medium">Export</span>{" "}
            button in the top toolbar. This opens the Export Workflow modal — a
            multi-step guided process.
          </p>
          <Step n={1} title="Step 1: Document Details">
            <p className="text-gray-700 leading-relaxed mb-4">
              Enter document metadata: title (pre-filled from project), author
              name, affiliation, course, instructor, running head, and date.
              Auto-filled from your user profile.
            </p>
          </Step>
          <Step n={2} title="Step 2: Choose Export Mode & Format">
            <p className="text-gray-700 leading-relaxed mb-4">
              Two export modes available:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
                <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Standard Export
                </h4>
                <ul className="space-y-1 text-sm text-indigo-800">
                  <li>• Complete document in single file</li>
                  <li>• Text, images, tables combined</li>
                  <li>• Formats: DOCX, PDF</li>
                  <li>• Ideal for general use, sharing, coursework</li>
                </ul>
              </div>
              <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Publication Export (Journal)
                </h4>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Two-file Submission.zip package</li>
                  <li>• Main Manuscript (DOCX): text only + figure callouts</li>
                  <li>• Figures File (DOCX): one figure per page</li>
                  <li>• Publisher profiles for journal-specific formatting</li>
                  <li>
                    • Configurable: figure placement, image format, DPI, column
                    layout
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For Standard Export, select format: <strong>DOCX</strong> (best
              for submission/editing) or <strong>PDF</strong> (best for
              sharing/printing). LaTeX, RTF, TXT are available via Pandoc on the
              backend but currently disabled in the UI.
            </p>
          </Step>
          <Step n={3} title="Step 3: Choose Destination">
            <p className="text-gray-700 leading-relaxed mb-4">
              Select where to send the exported file:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900 flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-gray-600" />
                  Local Download
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Downloads file to your device via signed URL
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900 flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-blue-600" />
                  Google Drive
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Export directly to Google Drive (OAuth)
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900 flex items-center gap-2">
                  <Database className="h-4 w-4 text-red-600" />
                  Zotero
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Export reference metadata to Zotero library
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900 flex items-center gap-2">
                  <Database className="h-4 w-4 text-green-600" />
                  Mendeley
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Export reference metadata to Mendeley library
                </p>
              </div>
            </div>
          </Step>
          <Step n={4} title="Step 4: Review & Export">
            <p className="text-gray-700 leading-relaxed mb-4">
              Final review screen shows format, destination, metadata, and any
              pre-check results. Click{" "}
              <span className="font-medium">Export</span> to generate and
              download.
            </p>
          </Step>
          <Tip>
            The workflow saves your format and destination preferences for next
            time.
          </Tip>
        </NumberedSection>

        {/* Citation & Bibliography Handling */}
        <NumberedSection n={2} title="Citation and bibliography handling">
          <p className="text-gray-700 leading-relaxed mb-4">
            During export, the frontend prepares the HTML by resolving
            interactive citation nodes into standard HTML that Pandoc
            understands:
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-indigo-600" />
                In-text citations → hyperlinks
              </h4>
              <p className="text-sm text-gray-700">
                Citation nodes (<code>&lt;a data-citation-id="KEY"&gt;</code>)
                are resolved to formatted in-text citations per the selected
                style (APA, MLA, IEEE, Chicago, Harvard) using{" "}
                <code>formatCitation()</code>. Output:{" "}
                <code>&lt;a href="#bib-KEY"&gt;(Smith, 2023)&lt;/a&gt;</code>{" "}
                pointing to bibliography anchor.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileArchive className="h-5 w-5 text-indigo-600" />
                Bibliography entries → formatted paragraphs
              </h4>
              <p className="text-sm text-gray-700">
                Bibliography nodes (
                <code>
                  &lt;div data-bibliography-entry="true" id="bib-KEY"&gt;
                </code>
                ) are flattened to{" "}
                <code>
                  &lt;p id="bib-KEY" class="bibliography-entry"&gt;&lt;/p&gt;
                </code>{" "}
                with hanging indent CSS. Preserves the <code>id</code> anchor so
                in-text links land correctly.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Pandoc conversion
              </h4>
              <p className="text-sm text-gray-700">
                Prepared HTML written to temp file, Pandoc invoked:{" "}
                <code>
                  pandoc input.html -f html -s -o output.&#123;docx | pdf | tex
                  | rtf | txt&#125;
                </code>
                . Citation style passed via metadata. PDF requires wkhtmltopdf
                or lualatex engine installed.
              </p>
            </div>
          </div>
          <InfoBox>
            The backend <code>ExportService</code> uses{" "}
            <code>PandocExportService</code> for HTML-to-format conversion.
            Pandoc path resolves from <code>PANDOC_PATH</code> env,
            project-relative <code>bin/bin/pandoc</code>, or system{" "}
            <code>pandoc</code>.
          </InfoBox>
        </NumberedSection>

        {/* Self-Plagiarism Guard */}
        <NumberedSection
          n={3}
          title="Self-Plagiarism Guard (Draft Comparison)"
        />
        <p className="text-gray-700 leading-relaxed mb-4">
          Before any export begins, the workflow runs a self-plagiarism check
          against your recent submissions using the{" "}
          <code>OriginalityService</code>:
        </p>
        <div className="space-y-3 mb-4">
          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
            <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Automatic Pre-Export Check
            </h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• Runs on every export attempt (Step 4)</li>
              <li>
                • Compares current content against your previous project
                versions
              </li>
              <li>
                • Flags sections with &gt;20% similarity and{" "}
                <code>isSelfPlagiarismInternal=true</code>
              </li>
              <li>
                • If risk detected: modal confirmation required before export
                proceeds
              </li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Brain className="h-5 w-5 text-indigo-600" />
              Manual Re-Check
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• "Run Self-Plagiarism Check" button in modal (Step 1)</li>
              <li>• Shows count of risky matches with descriptions</li>
              <li>• "No Self-Plagiarism Risk" confirmation if clean</li>
            </ul>
          </div>
        </div>
        <Tip>
          This guard helps prevent accidental self-plagiarism when reusing
          content across multiple papers or submissions.
        </Tip>

        {/* Journal Submission Package */}
        <NumberedSection
          n={4}
          title="Journal Submission Package (Publication Export)"
        />
        <p className="text-gray-700 leading-relaxed mb-4">
          For journal submissions, switch to <strong>Publication Export</strong>{" "}
          mode. This creates a <code>Submission.zip</code> containing two files
          as required by most academic journals:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              1. Main Manuscript (DOCX)
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Text only with figure callouts (e.g., "Figure 1")</li>
              <li>• No embedded images — journals want figures separate</li>
              <li>
                • Formatted per publisher profile (margins, fonts, spacing)
              </li>
              <li>• Citations and bibliography included</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileArchive className="h-5 w-5 text-green-600" />
              2. Figures File (DOCX)
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• All figures extracted, one per page</li>
              <li>• High-resolution (configurable DPI, default 300)</li>
              <li>• Image format: PNG (default) or JPEG</li>
              <li>• Captions preserved</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">
            Publisher Profile Settings
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Pre-configured profiles for major publishers (Elsevier, Springer,
            IEEE, etc.) and a Generic fallback. Settings include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
            <li>• Figure placement: inline / end / separate</li>
            <li>• Table placement: inline / end / separate</li>
            <li>• Target format: DOCX (primary)</li>
            <li>• Image format: PNG / JPEG</li>
            <li>• DPI: 150 / 300 / 600</li>
            <li>• Column layout: 1 / 2 column</li>
          </div>
        </div>
        <InfoBox>
          Publication Export creates a document version first (
          <code>documentService.createDocumentVersion</code>), then enqueues a{" "}
          <code>submission</code> job via the publishing pipeline. The job polls
          until the <code>Submission.zip</code> artifact is ready, then triggers
          download.
        </InfoBox>

        {/* Pre-Flight Citation Audit Integration */}
        <NumberedSection n={5} title="Pre-Flight Citation Audit Integration" />
        <p className="text-gray-700 leading-relaxed mb-4">
          The export workflow integrates with the Citation Audit system for a
          final pre-submission check:
        </p>
        <div className="space-y-3 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Background Pre-Check
            </h4>
            <p className="text-sm text-gray-700">
              On export, the backend enqueues a <code>submission</code> job with
              PPE settings. Before generating the package, a citation audit
              pre-check runs. If the audit finds blocking violations (compliance
              score &lt; 70, critical issues), the job pauses in
              <code>NEEDS_REVIEW</code> state.
            </p>
          </div>
          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              NEEDS_REVIEW Handling
            </h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li>
                • Frontend catches <code>NeedsReviewError</code> with{" "}
                <code>PrecheckReport</code>
              </li>
              <li>
                • Review dialog shows: violations, integrity index, compliance
                score
              </li>
              <li>
                • Options: "Continue Anyway" (resumes job) or "Keep Editing"
                (closes modal)
              </li>
              <li>• If continued, job completes and package downloads</li>
            </ul>
          </div>
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Clean Export
            </h4>
            <p className="text-sm text-green-800">
              If pre-check passes (score ≥ 70, no critical violations), job
              completes automatically. Submission.zip downloads without
              interruption.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Backend: Pandoc + Puppeteer
              </h3>
              <p className="text-gray-700 text-sm">
                <code>PandocExportService</code> handles
                HTML→DOCX/PDF/LaTeX/RTF/TXT.
                <code>ExportService.launchBrowser()</code> provides shared
                Puppeteer config for PDF rendering (--no-sandbox for container
                isolation). Temp dir cleanup in
                <code>finally</code> block.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Settings className="h-5 w-5 text-indigo-600" />
                Citation Style Support
              </h3>
              <p className="text-gray-700 text-sm">
                Supported styles: APA, MLA, Chicago, IEEE, Harvard (and any CSL
                style). Passed via metadata to Pandoc. Frontend{" "}
                <code>CitationStyleDialog</code> lets user change style before
                export — updates both preview and final file.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                Document Versioning
              </h3>
              <p className="text-gray-700 text-sm">
                Publication Export calls{" "}
                <code>documentService.createDocumentVersion()</code>
                with current TipTap content and estimated word count. Version ID
                passed to publishing pipeline for traceability.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileArchive className="h-5 w-5 text-indigo-600" />
                Submission.zip Artifact
              </h3>
              <p className="text-gray-700 text-sm">
                Publishing pipeline (<code>createExport</code> +{" "}
                <code>getJobArtifact</code>) produces signed download URL.
                Frontend fetches via <code>triggerDownload()</code>
                (blob fetch → object URL → click → revoke) to avoid browser
                download blocking.
              </p>
            </div>
          </div>
        </section>

        <DocFooter helpText="Trouble exporting, or a file doesn't look right? Reach out and we'll help you get a clean copy." />
      </div>
    </div>
  );
};

export default ExportPage;
