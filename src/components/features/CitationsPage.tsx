import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  Target,
  Award,
  Search,
  Zap,
  Database,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info,
  RotateCcw,
  Sparkles,
  Brain,
  Wrench,
  Flag,
  ExternalLink,
} from "lucide-react";
import {
  VideoPlaceholder,
  Step,
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

const CitationsPage = () => {
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
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-indigo-600" />
            <h1 className="text-3xl font-bold mb-2">
              Citation Integrity Audit
            </h1>
            <p className="text-lg text-gray-600">
              Run a full forensic audit on every citation in your document.
              ColabWize verifies sources against 7 academic databases, matches
              in-text citations to bibliography entries, detects hallucinated
              references, checks for retracted papers, and calculates a tiered
              compliance score that gates export.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            The Citation Integrity Audit is a multi-stage pipeline that
            processes your document end-to-end. It extracts every in-text
            citation and bibliography entry, links them together, then verifies
            each source against academic databases using a tiered similarity
            scoring system.
          </p>
          <InfoBox>
            <strong>Metered feature:</strong> Each audit run consumes your
            plan's citation-audit allowance or credits. Cost scales with
            document length. Incremental audits only re-verify changed citations
            (content-hash caching), saving quota and time.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                7 Academic Databases
              </h3>
              <p className="text-sm text-gray-600">
                CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE
                Xplore, DOAJ — searched in parallel with Zotero gold-standard
                check.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Semantic Support Check (AI)
              </h3>
              <p className="text-sm text-gray-600">
                Optional AI verification that the cited paper actually supports
                your claim — catches hallucinated or misrepresented citations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Retracted Paper Detection
              </h3>
              <p className="text-sm text-gray-600">
                Automatically flags any source that has been retracted,
                preventing accidental citation of withdrawn research.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Incremental Audits
              </h3>
              <p className="text-sm text-gray-600">
                Content-hash caching skips unchanged citations. Only new or
                modified citations are re-verified — faster and cheaper on
                re-runs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <RotateCcw className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Citation Auto-Fixer
              </h3>
              <p className="text-sm text-gray-600">
                Type a fuzzy title; ColabWize searches CrossRef and OpenAlex to
                suggest complete, verified citation metadata (author, year,
                DOI).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Integrity Linter (Real-time)
              </h3>
              <p className="text-sm text-gray-600">
                Fast feedback loop: verify a single citation against all
                databases while you type, before running the full audit.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From opening the panel to reading the full integrity report.
          </p>
          <VideoPlaceholder
            title="Citation Integrity Audit walkthrough"
            length="~2 minutes"
          />
        </section>

        {/* Screenshot 1 — Citation Audit sidebar */}
        <NumberedSection n={1} title="Open the Citation Audit panel">
          <p className="text-gray-700 leading-relaxed mb-4">
            In the editor, click the{" "}
            <span className="font-medium">Citation Audit</span> button to open
            the audit panel. The audit runs through your document and, when it
            finishes, the panel shows a quick overview of your citation quality
            with a compliance score out of 100.
          </p>
          <Figure
            src="/images/citation-audit-1.png"
            alt="Citation Audit sidebar showing compliance score, citation overview, and Read Full Report button"
            caption="Citation Audit 1: The Citation Audit panel after the audit completes."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts in the panel identify three areas:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Compliance Score</span> — the
                overall citation compliance score for the current document,
                shown out of 100 with a colored badge indicating whether your
                document is ready to export.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Citation Overview</span> — a quick
                summary of detected citations, bibliography entries, broken
                references, duplicate references, uncited references, and
                invalid URLs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Read Full Report</span> — opens
                the complete Citation Integrity Report with detailed
                verification results, tiered confidence scores, and forensic
                analysis.
              </span>
            </li>
          </ul>
          <Tip>
            Use this overview for a fast read on citation quality. When you want
            the full picture, click{" "}
            <span className="font-medium">Read Full Report</span> to move on to
            the next screen.
          </Tip>
        </NumberedSection>

        {/* Screenshot 2 — Full Citation Integrity Report */}
        <NumberedSection n={2} title="Read the full Citation Integrity Report">
          <p className="text-gray-700 leading-relaxed mb-4">
            After you click{" "}
            <span className="font-medium">Read Full Report</span>, ColabWize
            opens the complete{" "}
            <span className="font-medium">Citation Integrity Report</span>. This
            is where you review verification results, the integrity score,
            detailed citation metrics, and forensic flags before exporting or
            submitting your work.
          </p>
          <Figure
            src="/images/citation-audit-2.png"
            alt="Citation Integrity Report showing integrity score, detailed metrics, verification confidence, and integrity summary"
            caption="Citation Audit 2: The full Citation Integrity Report opened from Read Full Report."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbered callouts identify the major sections of the report:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Compliance Score</span> — the
                overall citation quality score carried over from the audit
                panel.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Citation Summary</span> — a
                summary of citations, bibliography entries, broken references,
                duplicates, uncited references, and invalid URLs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Overall Integrity Score</span> —
                the document's overall citation integrity score with a short
                summary of issues detected.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                4
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Detailed Citation Metrics</span> —
                statistics including total citations, verified references,
                detected issues, and audit processing time.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                5
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Verification Confidence</span> —
                tiered confidence indicators for citation coverage, source
                verification rate, and reference utilization, shown as progress
                bars with percentage breakdown.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                6
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Integrity Summary</span> — the
                final citation health of the document, including verified
                sources, failed verifications, unverified references, and the
                overall integrity rating.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                7
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Forensic Flags</span> —
                per-citation statuses: VERIFIED, SUSPICIOUS, UNVERIFIED,
                UNSUPPORTED, MISMATCH, with expandable evidence details.
              </span>
            </li>
          </ul>
          <InfoBox>
            Read the two screens as one workflow: the audit panel gives you the
            quick overview, and Read Full Report expands it into the detailed
            forensic report you use to fix issues and confirm your citations
            before export.
          </InfoBox>
        </NumberedSection>

        {/* How the audit works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How the audit works</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you run an audit, ColabWize processes your document through a
            sequence of stages. You can watch each stage complete on the
            progress bar while the audit runs:
          </p>
          <ol className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  Extracting citations & references
                </span>{" "}
                — finds every in-text citation (numeric [1] or author-year
                Smith, 2020) and bibliography entry in your document using
                pattern extraction.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  Matching citations to references
                </span>{" "}
                — CitationMatcher links each in-text citation to its
                bibliography entry using numeric-index matching (IEEE) or
                author-year matching (APA/MLA), with auto-style detection.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  External verification (7 databases + Zotero)
                </span>{" "}
                — each matched pair is verified against CrossRef, OpenAlex,
                arXiv, PubMed, Semantic Scholar, IEEE Xplore, DOAJ, and your
                Zotero library. DOI lookups are tried first for precision.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                4
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Tiered similarity scoring</span> —
                results are scored by text similarity: &lt;50% =
                VERIFICATION_FAILED, 50-70% = Fair Match (Verified), &gt;70% =
                Good Match (Verified). Retracted papers trigger
                POTENTIAL_FABRICATION.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                5
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Semantic support check (AI)</span>{" "}
                — for matches with ≥50% similarity and available abstracts, an
                AI check verifies the cited paper actually supports your claim.
                Statuses: SUPPORTED, DISPUTED, UNRELATED.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                6
              </span>
              <span className="text-gray-700">
                <span className="font-medium">Forensic status assignment</span>{" "}
                — each citation receives a forensic status: VERIFIED,
                SUSPICIOUS, UNVERIFIED, UNSUPPORTED, MISMATCH,
                POTENTIAL_FABRICATION, with detailed evidence and suggested
                alternatives.
              </span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                7
              </span>
              <span className="text-gray-700">
                <span className="font-medium">
                  Calculating compliance score
                </span>{" "}
                — combines every finding into your final compliance score
                (0-100). Scores below 70 block export until issues are resolved.
              </span>
            </li>
          </ol>

          <h3 className="text-xl font-semibold mb-3">
            How the compliance score is calculated
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every document starts at 100 and loses points for each problem the
            audit finds. The penalty is tiered by severity and the forensic
            status assigned:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="border border-red-200 rounded-xl p-4 bg-red-50">
              <XCircle className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                POTENTIAL_FABRICATION / VERIFICATION_FAILED
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Highest penalty. Source not found in any database, or paper has
                been retracted. Score impact: ~25-30 points per citation.
              </p>
            </div>
            <div className="border border-orange-200 rounded-xl p-4 bg-orange-50">
              <AlertTriangle className="h-6 w-6 text-orange-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                MISMATCH / UNSUPPORTED
              </p>
              <p className="mt-1 text-sm text-gray-600">
                High penalty. Author mismatch, low similarity match, or AI
                semantic check disputes the claim. Score impact: ~15-20 points
                per citation.
              </p>
            </div>
            <div className="border border-yellow-200 rounded-xl p-4 bg-yellow-50">
              <HelpCircle className="h-6 w-6 text-yellow-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                UNVERIFIED / SUSPICIOUS / Fair Match (50-70%)
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Medium penalty. Source found but similarity is fair (50-70%) or
                insufficient info to fully confirm. Score impact: ~8-12 points
                per citation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
              <Info className="h-6 w-6 text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                UNMATCHED_REFERENCE / Broken reference
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Medium penalty. In-text citation with no matching bibliography
                entry. Score impact: ~10-15 points per citation.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <Flag className="h-6 w-6 text-gray-500 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                Duplicate references
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Smallest penalty. The same reference listed more than once.
                Score impact: ~3-5 points per duplicate.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <ExternalLink className="h-6 w-6 text-gray-500 mb-2" />
              <p className="text-sm font-semibold text-gray-900">
                Invalid URLs / DOIs
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Small penalty. Hyperlinks in bibliography that return 404 or
                malformed DOIs. Score impact: ~2-4 points per invalid link.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The final score is clamped between 0 and 100. If it falls below 70,
            export is blocked until you resolve enough issues to bring your
            citations up to a safe standard.
            <strong>Incremental audits</strong> only re-score changed citations,
            preserving cached scores for unchanged pairs.
          </p>
        </section>

        {/* Understanding scores */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Understanding the compliance score
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-24 h-2 bg-green-500 rounded mr-3"></div>
                <strong>Strong (80 to 100):</strong>
              </div>
              <p className="text-gray-600 text-sm ml-6">
                Sources are verified with good-to-excellent similarity matches.
                Citations line up cleanly, no forensic flags. Your document is
                ready to export.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-24 h-2 bg-yellow-500 rounded mr-3"></div>
                <strong>Fair (60 to 79):</strong>
              </div>
              <p className="text-gray-600 text-sm ml-6">
                Some issues were found. Review the report and fix broken,
                duplicate, or unverified references. Export allowed but not
                recommended for formal submission.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-24 h-2 bg-red-500 rounded mr-3"></div>
                <strong>Needs work (0 to 59):</strong>
              </div>
              <p className="text-gray-600 text-sm ml-6">
                Multiple issues detected. Address the flagged citations before
                submitting. Scores below 70 block export — you must resolve
                issues to proceed.
              </p>
            </div>
          </div>
        </section>

        {/* Verification statuses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Forensic verification statuses
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the Verification Results and Integrity Summary sections, each
            source is given a forensic status with confidence and evidence:
          </p>
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 space-y-1">
            <div className="p-4 flex items-start bg-green-50">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">VERIFIED</p>
                <p className="text-sm text-gray-600">
                  Source found in academic database with good similarity match
                  (≥50%). Citation accurately represents the source.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-yellow-50">
              <HelpCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">SUSPICIOUS</p>
                <p className="text-sm text-gray-600">
                  Insufficient information to verify, or similarity is
                  borderline. Not necessarily wrong, but needs manual review.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-gray-100">
              <XCircle className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">UNVERIFIED</p>
                <p className="text-sm text-gray-600">
                  There was not enough information to verify the source. It is
                  not necessarily wrong, but it could not be confirmed in any
                  database.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">UNSUPPORTED</p>
                <p className="text-sm text-gray-600">
                  The cited paper was found, but the AI semantic check
                  determined it does not support the claim made in your text
                  (DISPUTED or UNRELATED).
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-red-50">
              <Flag className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">MISMATCH</p>
                <p className="text-sm text-gray-600">
                  Author mismatch or low-confidence match (similarity &lt;70%
                  with author discrepancy). The citation may point to the wrong
                  paper.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-red-100">
              <Sparkles className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">
                  POTENTIAL_FABRICATION
                </p>
                <p className="text-sm text-gray-600">
                  🚨 Retracted source detected. This paper has been retracted
                  and should not be cited without acknowledgement.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-blue-50">
              <ExternalLink className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">
                  UNMATCHED_REFERENCE
                </p>
                <p className="text-sm text-gray-600">
                  In-text citation has no matching bibliography entry. Add the
                  reference or fix the citation format.
                </p>
              </div>
            </div>
            <div className="p-4 flex items-start bg-purple-50">
              <Wrench className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">RETRY_REQUIRED</p>
                <p className="text-sm text-gray-600">
                  Academic database provider temporarily unavailable
                  (timeout/rate limit). Re-run the audit for this citation in a
                  few minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Confidence Score (separate from compliance) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Citation Confidence Score (separate metric)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to the audit compliance score, ColabWize calculates a{" "}
            <strong>Citation Confidence Score</strong> that evaluates the
            overall quality of your citation portfolio. This is a separate
            metric used for academic rigor assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
                <strong>Recency (40% weight)</strong>
              </div>
              <p className="text-sm text-gray-600">
                Field-aware recency scoring. CS/Tech: 3-year threshold,
                Medicine/Bio: 5-year, Humanities: 15-20 year. Scores: Recent
                (100), Acceptable (75), Dated (50), Outdated (25).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Target className="h-5 w-5 text-indigo-600 mr-2" />
                <strong>Coverage (30% weight)</strong>
              </div>
              <p className="text-sm text-gray-600">
                Citations per 1,000 words. Optimal: ~200 words/citation. Penalty
                kicks in above 500 words/citation.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-indigo-600 mr-2" />
                <strong>Quality (20% weight)</strong>
              </div>
              <p className="text-sm text-gray-600">
                Based on citation counts from CrossRef. Log-scaled: more cited
                papers = higher quality score.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <RotateCcw className="h-5 w-5 text-indigo-600 mr-2" />
                <strong>Diversity (10% weight)</strong>
              </div>
              <p className="text-sm text-gray-600">
                Unique authors / total citations ratio. Higher diversity =
                broader literature base.
              </p>
            </div>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="text-sm text-indigo-800">
              <strong>Key difference:</strong> Compliance Score = audit result
              (pass/fail gate for export). Confidence Score = portfolio quality
              metric (academic rigor indicator). Both are shown in the Citation
              Integrity Report.
            </p>
          </div>
        </section>

        {/* Technical details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                Incremental audit & caching
              </h3>
              <p className="text-gray-700 text-sm">
                Each citation pair gets a SHA-256 content hash (inline text +
                reference text + DOI). Unchanged pairs are skipped entirely on
                re-audit — 7-day cache TTL with hit-counter. Concurrency-limited
                parallel verification (10 at a time) with 60s per-pair timeout
                prevents rate-limit overwhelm.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-600" />7 Database
                parallel search
              </h3>
              <p className="text-gray-700 text-sm">
                AcademicSearchService queries CrossRef, OpenAlex, arXiv, PubMed,
                Semantic Scholar, IEEE Xplore, DOAJ in parallel. Results
                deduplicated and ranked by similarity to your reference text.
                Zotero library checked first as "gold standard" if connected.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                Semantic support check
              </h3>
              <p className="text-gray-700 text-sm">
                Only runs when similarity ≥50% AND abstract available. Uses LLM
                to classify: SUPPORTED (paper backs your claim), DISPUTED (paper
                contradicts), UNRELATED (paper is on different topic). Skipped
                for low-similarity matches to save API calls.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-indigo-600" />
                Citation Auto-Fixer
              </h3>
              <p className="text-gray-700 text-sm">
                Type a fuzzy query → searches CrossRef first, then OpenAlex →
                returns complete metadata (title, author, year, DOI, source).
                Used for quick citation insertion and the "Find Papers" feature.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-indigo-600" />
                Integrity Linter
              </h3>
              <p className="text-gray-700 text-sm">
                Real-time single-citation verification against all databases.
                Triggered on-demand while writing. Uses same pipeline as full
                audit but single-pair for fast feedback.
              </p>
            </div>
          </div>
        </section>

        <DocFooter
          nextTo="/find-papers"
          nextLabel="Next: Find Papers"
          helpText="Stuck on a citation check, or not sure why a score is low? We can help."
        />
      </div>
    </div>
  );
};

export default CitationsPage;
