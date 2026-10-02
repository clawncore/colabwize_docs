import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Activity, FileCheck, Award, QrCode, FileText, Clock, Edit3, Brain, Search, Zap, Eye, Sparkles, Download, RotateCcw, Hash } from "lucide-react";
import {
  VideoPlaceholder,
  InfoBox,
  Tip,
  NumberedSection,
  DocFooter,
} from "../docs/DocBlocks";

const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure className="my-6">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-gray-200"
    />
    <figcaption className="text-center text-xs text-gray-500 mt-2">
      {caption}
    </figcaption>
  </figure>
);

const CertificatesPage = () => {
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
            <ShieldCheck className="h-16 w-16 mx-auto mb-4 text-indigo-600" />
            <h1 className="text-3xl font-bold mb-2">Certificate of Authorship and Academic Integrity</h1>
            <p className="text-lg text-gray-600">
              Generate a professional, evidence-backed PDF certificate summarizing your documented
              contribution: hours invested, manual revisions, AI-assisted transparency, and a
              multi-dimensional confidence report — all in an elegant landscape design with
              cryptographic verification.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Certificate of Authorship and Academic Integrity</strong> is a downloadable
            PDF document that summarizes platform-observed contribution evidence for a project.
            ColabWize continuously records server-observed edits (via Yjs/Hocuspocus), client-side
            writing session telemetry, copy-paste events, and AI-assisted edit markers. When you
            generate a certificate, this evidence is compiled into a formal report with a
            multi-dimensional confidence assessment.
          </p>
          <InfoBox>
            <strong>Important:</strong> The certificate is an evidence-backed confidence report. It
            does <strong>not</strong> prove human authorship or determine academic intent.
            Server-observed Yjs updates and certificate report snapshots are the strongest evidence
            category; browser telemetry and keystroke signals are treated as weak secondary evidence
            only. The report explicitly states its limitations.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Elegant Landscape PDF
              </h3>
              <p className="text-sm text-gray-600">
                Professional design with Cormorant Garamond typography, gold accent borders,
                ornamental corners, rosette seal, QR code for verification, and subtle watermark.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Multi-Dimensional Confidence
              </h3>
              <p className="text-sm text-gray-600">
                Six confidence dimensions: Attribution, Contribution, Collaboration, Evidence
                Completeness, AI Transparency, Anomaly Risk — combined into Overall Reliability.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <QrCode className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Cryptographic Verification
              </h3>
              <p className="text-sm text-gray-600">
                Unique Certificate ID (COLABWIZE-{projectId}), QR code linking to online
                verification, tamper-evident design.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Authorship Statistics
              </h3>
              <p className="text-sm text-gray-600">
                Total time invested, manual edit count, active days, session frequency, peak
                editing hours, and AI-assisted percentage (capped at 30%, conservative 20
                words/request estimate).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Evidence Breakdown
              </h3>
              <p className="text-sm text-gray-600">
                Strong/medium/weak evidence counts, server-observed edits, AI-assisted evidence,
                collaboration sessions, anomalies — all with confidence intervals.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Download className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Downloadable & Verifiable
              </h3>
              <p className="text-sm text-gray-600">
                Generates PDF via Puppeteer (landscape Letter). Includes verification URL and
                issue date. Preview available as PNG before download.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From launching the certificate in the editor to the full evidence report and PDF download.
          </p>
          <VideoPlaceholder
            title="Authorship Certificate walkthrough"
            length="~3 minutes"
          />
        </section>

        {/* Certificate 1 — Launch from editor */}
        <NumberedSection n={1} title="Launch the certificate from the editor">
          <p className="text-gray-700 leading-relaxed mb-4">
            With your project open in the editor, locate the <strong>Certificate</strong> button
            in the editor toolbar. This is the entry point to the Authorship workflow.
          </p>
          <Figure
            src="/images/Authorship 1.png"
            alt="Editor toolbar with the Certificate button and the Authorship Certificate dialog it opens"
            caption="Certificate 1: The Certificate button in the editor toolbar, the entry point to the Authorship workflow."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callout in the image points to the launch control:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Certificate Button</span> — the Certificate button
                in the document editor. Clicking it opens the Authorship Certificate dialog and
                begins the evidence review process.
              </span>
            </li>
          </ul>
          <Tip>
            The Certificate button is the single entry point to the Authorship workflow. Everything
            else in this documentation builds from it.
          </Tip>
        </NumberedSection>

        {/* Certificate 2 — Certificate preview dialog */}
        <NumberedSection n={2} title="Review the certificate preview">
          <p className="text-gray-700 leading-relaxed mb-4">
            The certificate dialog shows the evidence-backed certificate preview, a summary of the
            collected evidence, and the actions to download the certificate or open the full report.
            This is where you see the document's overall readiness before issuing.
          </p>
          <Figure
            src="/images/Authorship 2.png"
            alt="Certificate dialog showing the preview card, evidence summary, and download or full report actions"
            caption="Certificate 2: The certificate preview with evidence summary and issue actions."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts identify the key areas:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Certificate Preview</span> — displays the
                evidence-backed certificate preview generated for the current document. Shows the
                overall readiness of the document before issuing the certificate.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Evidence Summary</span> — displays the high-level
                authorship evidence collected for the document, including production status and
                confidence information.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Download / Full Report Actions</span> — allows the
                user to either download the certificate PDF directly or open the complete evidence
                report for detailed analysis.
              </span>
            </li>
          </ul>
          <Tip>
            Watch the dialog's readiness state. It shows a "Preparing..." state and switches to
            "Ready to Issue" once the evidence package is built and the confidence report is
            generated.
          </Tip>
        </NumberedSection>

        {/* Certificate 3 — Full evidence report overview */}
        <NumberedSection n={3} title="Read the full evidence report">
          <p className="text-gray-700 leading-relaxed mb-4">
            Clicking <span className="font-medium">Full Report</span> opens the Evidence Report.
            This is the analytical core: the report header, the six confidence dimensions, the
            overall reliability assessment, and the weighted evidence metrics behind them.
          </p>
          <Figure
            src="/images/Authorship 3.png"
            alt="Evidence Report showing the report header, six confidence dimensions, overall reliability, and evidence metrics"
            caption="Certificate 3: The evidence report overview with confidence dimensions and metrics."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts identify the major areas:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Report Header</span> — introduces the complete
                Evidence-backed Authorship Report with primary actions: Download Certificate, Back
                to Preview.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Six Confidence Dimensions</span> — each scored
                0-100 with label (High/Medium/Low/Insufficient), confidence interval, evidence
                count, and rationale:
                <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
                  <li><strong>Attribution Confidence:</strong> Server-observed edits + strong evidence ratio + collaboration sessions</li>
                  <li><strong>Contribution Confidence:</strong> Evidence coverage + strong signal + contributor summaries</li>
                  <li><strong>Collaboration Clarity:</strong> Authenticated sessions + collaboration updates</li>
                  <li><strong>Evidence Completeness:</strong> Strong+medium ratio + volume + document snapshots</li>
                  <li><strong>AI Transparency:</strong> Whether AI usage was explicitly observed (not whether AI was used)</li>
                  <li><strong>Anomaly Risk:</strong> Max severity score + high/critical anomaly count (reduces reliability)</li>
                </ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Overall Reliability</span> — combined score
                (mean of 5 confidence dims + inverted anomaly risk, capped by weakest core
                dimension). Label: High (80+), Medium (60-79), Low (35-59), Insufficient (<35).
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                4
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Evidence Summary</span> — counts: total evidence,
                strong/medium/weak, server-observed, AI-assisted, collaboration sessions, anomalies.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                5
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Limitations</span> — explicit statements: does not
                prove human authorship, client telemetry is weak evidence, missing server evidence
                or sessions noted, anomalies flagged for review.
              </span>
            </li>
          </ul>
          <InfoBox>
            Confidence intervals (±7-10 points) reflect estimation uncertainty. "This is a
            confidence estimate, not proof of human authorship" is stated in the report rationale.
          </InfoBox>
        </NumberedSection>

        {/* Certificate 4 — Authorship statistics */}
        <NumberedSection n={4} title="Authorship activity statistics">
          <p className="text-gray-700 leading-relaxed mb-4">
            The report includes comprehensive authorship statistics derived from the
            <code>authorshipActivity</code> table (server-tracked editing sessions):
          </p>
          <Figure
            src="/images/Authorship 4.png"
            alt="Activity analytics including time invested, edit metrics, AI transparency, session breakdown"
            caption="Certificate 4: Authorship statistics panel with time, edits, AI metrics, and session analytics."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                Time Metrics
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Total time invested (minutes/hours)</li>
                <li>• First edit date & last edit date</li>
                <li>• Active days (unique dates with activity)</li>
                <li>• Session frequency (Daily/Weekly/etc.)</li>
                <li>• Peak editing hours (top 3 hours of day)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-indigo-600" />
                Edit Metrics
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Total sessions</li>
                <li>• Manual edits count</li>
                <li>• Total character changes (approx. 5 chars/word)</li>
                <li>• Average edit size</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                AI Transparency
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• AI-assisted percentage (capped at 30%)</li>
                <li>• AI request count (from authorshipActivity.ai_assisted_edits)</li>
                <li>• Conservative: 20 words/request estimate</li>
                <li>• Edge cases handled (empty docs, unrealistic word counts)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Session Analytics
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Writing sessions breakdown</li>
                <li>• Activity mix: Writing/Editing/Reviewing/AI-assisted</li>
                <li>• Time vs keystrokes relationship</li>
                <li>• Edit operation profile (size/frequency distribution)</li>
              </ul>
            </div>
          </div>
        </NumberedSection>

        {/* Certificate 5 — Evidence playback & copy-paste */}
        <NumberedSection n={5} title="Replay and scope the edit trail">
          <p className="text-gray-700 leading-relaxed mb-4">
            The evidence report lets you scope and replay the edit trail. The selected time range
            drives the keystroke playback and the copy-paste analysis.
          </p>
          <Figure
            src="/images/Authorship 5.png"
            alt="Range-scoped edit evidence, keystroke playback, replay timeline, copy-paste evidence, and collaboration breakdown"
            caption="Certificate 5: The range-scoped edit evidence and keystroke playback area."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts identify the playback areas:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Range-Scoped Edit Evidence</span> — shows the
                currently selected evidence range. The remainder of the report filters according to
                this time window.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Keystroke Playback</span> — reconstructs the writing
                process from recorded editing events. Filter by time ranges, replay step-by-step.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Playback Timeline</span> — complete replay interface
                for chronological document reconstruction.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                4
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Copy-Paste Evidence</span> — analyzes pasted content
                detected within the document (large single events or rapid insertion bursts).
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                5
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Collaboration & Session Breakdown</span> —
                authenticated collaboration sessions and writing sessions contributing to production
                history.
              </span>
            </li>
          </ul>
        </NumberedSection>

        {/* Certificate 6 — Copy-paste evidence window */}
        <NumberedSection n={6} title="Inspect copy-paste evidence">
          <p className="text-gray-700 leading-relaxed mb-4">
            The Copy-Paste Evidence Window detects large or rapid paste insertions and highlights
            them in red directly in the document. This makes externally sourced or AI-assisted text
            transparent and auditable.
          </p>
          <Figure
            src="/images/Authorship 6.png"
            alt="Copy-Paste Evidence Window showing the overview, detected insertions panel, and the document evidence viewer with highlights"
            caption="Certificate 6: The copy-paste evidence window with detected insertions and document highlights."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts identify the window's parts:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Copy-Paste Evidence Overview</span> — introduces the
                detailed analysis interface and summarizes detected insertion statistics.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Detected Insertions Panel</span> — lists every
                detected large insertion with metadata: insertion identifier, timestamp, insertion
                size, preview snippet. Selecting a card navigates to the document location.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Document Evidence Viewer</span> — displays the
                document with detected pasted passages highlighted in-text. Reviewers visually
                inspect where pasted content occurs and compare with insertion records.
              </span>
            </li>
          </ul>
          <Tip>
            If no large or rapid pastes are detected, the window confirms a clean range. This is
            useful evidence when demonstrating content was drafted in-app rather than copied in.
          </Tip>
        </NumberedSection>

        {/* Certificate 7 — PDF Certificate Design */}
        <NumberedSection n={7} title="Download the PDF certificate">
          <p className="text-gray-700 leading-relaxed mb-4">
            Clicking <span className="font-medium">Download Certificate</span> generates a
            professional landscape PDF (11" × 8.5") via Puppeteer with the following design:
          </p>
          <Figure
            src="/images/Authorship 7.png"
            alt="Generated PDF certificate showing landscape design with header, recipient name, stats row, confidence grid, seal, signature, QR code, and legal footer"
            caption="Certificate 7: The generated PDF certificate with elegant landscape design."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Hash className="h-5 w-5 text-indigo-600" />
                Certificate ID & Header
              </h4>
              <p className="text-sm text-gray-700">
                Format: <code>COLABWIZE-{projectId[:8].toUpperCase()}</code>. Header: ColabWize
                Platform logo (inline SVG) + "Certificate of Authorship and Academic Integrity".
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-600" />
                Recipient & Description
              </h4>
              <p className="text-sm text-gray-700">
                Recipient name (large, Cormorant Garamond 34pt). Description summarizes: hours
                tracked, manual revisions count, AI-assisted percentage. States: "expresses
                confidence in platform-observed evidence and does not claim proof of human
                authorship."
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-indigo-600" />
                Stats Row
              </h4>
              <p className="text-sm text-gray-700">
                Three columns: "Over X Hours Logged Time", "X Total Revisions", "X% Automated
                Content" (or "0%" if none).
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Confidence Grid (if available)
              </h4>
              <p className="text-sm text-gray-700">
                Three cards: Overall Reliability (label + score), Attribution Confidence (label +
                score + server-observed count), AI Transparency (label + score + AI-assisted
                count).
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                Rosette Seal & Signature
              </h4>
              <p className="text-sm text-gray-700">
                Gold radial-gradient seal with "Official Semblance / Verified Integrity" text,
                dotted border, ribbon accents. Signature block: "ColabWize Logic" (Brush Script),
                Certificate ID, Verify URL.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <QrCode className="h-5 w-5 text-indigo-600" />
                QR Code & Date
              </h4>
              <p className="text-sm text-gray-700">
                QR code (70×70px, error correction H) linking to verification URL. "Scan to Verify
                Online" caption. Issue date in "Month Day, Year" format.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-indigo-600" />
                Legal Footer
              </h4>
              <p className="text-sm text-gray-700">
                "This certificate summarizes platform-observed contribution evidence and confidence.
                It does not prove human authorship or determine academic intent. ColabWize
                Platform — colabwize.com"
              </p>
            </div>
          </div>
        </NumberedSection>

        {/* Evidence categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Evidence categories and strength indicators
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The certificate and its report combine several evidence categories. Each is shown with
            a strength indicator so reviewers can see how defensible the report is:
          </p>
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 space-y-1">
            <div className="p-4 flex items-start bg-emerald-50">
              <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Strong — Server-observed evidence</p>
                <p className="text-sm text-gray-600">
                  Yjs updates and certificate report snapshots recorded on the server via
                  Hocuspocus. These are the strongest category (strength: "strong", weight: 1.0 in
                  contribution score).
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-amber-50">
              <ShieldCheck className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Medium — Strong & medium evidence items</p>
                <p className="text-sm text-gray-600">
                  Verified manual edits, tracked sessions, document snapshots with high/medium
                  confidence. Contribution score weight: strong=1.0, medium=0.7.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-gray-50">
              <ShieldCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Weak — Client telemetry & anomalies</p>
                <p className="text-sm text-gray-600">
                  Browser keystroke telemetry, writing session snapshots, copy-paste findings.
                  Treated as weak secondary evidence only (strength: "weak", weight: 0.3).
                  Anomalies flagged for review rather than presented as proof.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-red-50">
              <Flag className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Anomalies — Risk flags</p>
                <p className="text-sm text-gray-600">
                  Detected anomalies (copy-paste bursts, unusual patterns, gaps) with severity
                  (low/medium/high/critical) and score. High/critical anomalies increase Anomaly
                  Risk dimension and reduce Overall Reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                PDF Generation (Puppeteer)
              </h3>
              <p className="text-gray-700 text-sm">
                HTML template rendered server-side with inline SVG logo, Google Fonts (Cormorant
                Garamond), CSS @page landscape. Puppeteer launched with --no-sandbox,
                --disable-setuid-sandbox, --disable-dev-shm-usage. Multiple Chrome executable
                fallback paths (system, Puppeteer cache, auto-detect).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-indigo-600" />
                Confidence Report Generation
              </h3>
              <p className="text-gray-700 text-sm">
                Triggered on certificate request. Rebuilds contributions from authorshipEvidence,
                calculates 6 dimensions + anomaly risk, stores in authorshipConfidenceReport
                table. Volume multiplier: <5 items=0.55, <20=0.75, >=20=1.0. Overall reliability
                = min(mean, floor+15) where floor = min(attribution, contribution, evidence).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <QrCode className="h-5 w-5 text-indigo-600" />
                QR Code & Verification
              </h3>
              <p className="text-gray-700 text-sm">
                QRCode.toDataURL with errorCorrectionLevel="H", margin=1, width=200. Verification
                URL format: {frontendUrl}/verify/{certificateId}. Certificate includes "Verify at:
                colabwize.com/verify" text.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                AI-Assisted Percentage Calculation
              </h3>
              <p className="text-gray-700 text-sm">
                Conservative estimate: 20 words per AI request (not 100, because AI assists with
                edits/suggestions, not full generation). Capped at 30%. If word_count > 500k and
                AI% > 15%, caps at 15%. If no word count but AI used, shows 5% minimum.
              </p>
            </div>
          </div>
        </section>

        <DocFooter
          nextTo="/integrations"
          nextLabel="Next: Zotero & Mendeley Integration"
          helpText="Trouble generating a certificate, or not sure what the evidence means? Reach out."
        />
      </div>
    </div>
  );
};

export default CertificatesPage;