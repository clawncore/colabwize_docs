import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  Bell,
  FileText,
  Brain,
  Search,
  AlertTriangle,
  ChevronDown,
  Maximize2,
  Minimize2,
  Save,
  TrendingUp,
  Beaker,
  BookOpen,
  ExternalLink,
  Loader2,
} from "lucide-react";
import {
  Step,
  InfoBox,
  Tip,
  NumberedSection,
  VideoPlaceholder,
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

const LiteratureReviewPage = () => {
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
            <Zap className="h-16 w-16 mx-auto mb-4 text-purple-600" />
            <h1 className="text-3xl font-bold mb-2">
              Literature Review Assistant
            </h1>
            <p className="text-lg text-gray-600">
              AI-powered synthesis of your bibliography: batch analyze citations
              for themes (Gap, Methodology, Result), generate matrix notes,
              detect research gaps (temporal, topical, methodological), and
              explore suggested papers — all in an interactive matrix view.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Literature Review Assistant</strong> helps you
            synthesize your research bibliography by automatically analyzing
            each citation's abstract to identify recurring patterns across your
            sources. It runs on the <strong>Premium/Researcher plan</strong>
            and powers two integrated features: the{" "}
            <strong>Literature Matrix</strong> (tabular synthesis view) and the{" "}
            <strong>Research Gaps Panel</strong> (AI-detected opportunities for
            deeper exploration).
          </p>
          <InfoBox>
            <strong>Plan requirement:</strong> Literature Matrix synthesis
            (batch analysis) is available on Premium and Researcher plans.
            Research Gaps detection is available on Researcher and Institutional
            plans. Free and Plus plans see read-only views.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Batch AI Analysis
              </h3>
              <p className="text-sm text-gray-600">
                One-click "Synthesize Matrix" analyzes all citations with
                abstracts. AI extracts themes (Gap, Methodology, Result) and
                generates concise matrix notes (max 30 words). Runs sequentially
                to respect rate limits.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Interactive Literature Matrix
              </h3>
              <p className="text-sm text-gray-600">
                Two view modes: Compact (cards) and Full (table). Rows =
                sources, Columns = themes. Click empty cells to tag, view matrix
                notes. Sticky source column, color-coded theme badges
                (Gap=orange, Methodology=blue, Result=emerald).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Research Gaps Detection
              </h3>
              <p className="text-sm text-gray-600">
                AI analyzes full bibliography + project context to find 3-5
                gaps: Temporal (recent aspects missing), Topical (underexplored
                sub-topics), Methodological (missing approaches). Each gap
                includes suggested keywords and "Explore Papers" action.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Save className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Auto-Synthesis from Bibliography
              </h3>
              <p className="text-sm text-gray-600">
                Themes and matrix notes auto-saved to citation records (
                <code>themes</code> JSON array, <code>matrix_notes</code>{" "}
                string). Used in export, Literature Matrix, and Citation Graph.
                Force re-analysis option available.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <ExternalLink className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Explore Papers from Gaps
              </h3>
              <p className="text-sm text-gray-600">
                Each gap has "Explore Papers" button that passes suggested
                keywords to Find Papers panel (<code>onSearchGap</code>{" "}
                callback). Opens Sources panel with auto-populated search.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Maximize2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Full-Screen & Split Views
              </h3>
              <p className="text-sm text-gray-600">
                Toggle between split panel (side-by-side with editor) and
                full-screen matrix view. Escape key exits full-screen. Table
                view has sticky left column, sortable columns, hover
                highlighting.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From batch analysis to interactive matrix and gap exploration.
          </p>
          <VideoPlaceholder
            title="Literature Review walkthrough"
            length="~3 minutes"
          />
        </section>

        {/* Step 1 — Batch Analysis */}
        <NumberedSection
          n={1}
          title="Run batch AI analysis on your bibliography"
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            Open the <strong>Literature Matrix</strong> panel from the editor
            (Citations sidebar or dedicated button). The header shows source
            count and a <span className="font-medium">Synthesize Matrix</span>{" "}
            button (Premium/Researcher plans only).
          </p>
          <Figure
            src="/images/literature-review-1.png"
            alt="Literature Matrix panel showing source count and Synthesize Matrix button"
            caption="Literature Review 1: The Literature Matrix panel with Synthesize Matrix button."
          />
          <Step n={1} title="Click Synthesize Matrix">
            <p className="text-gray-700 leading-relaxed mb-4">
              The button triggers{" "}
              <code>
                CitationService.batchAnalyzeCitations(projectId, force)
              </code>
              → <code>POST /api/citations/:projectId/batch-analyze</code>.
              Backend fetches all citations with abstracts (skips
              already-analyzed unless <code>force=true</code>).
            </p>
          </Step>
          <Step n={2} title="AI analyzes each abstract">
            <p className="text-gray-700 leading-relaxed mb-4">
              For each citation, AI receives the abstract (truncated to 3000
              chars) and returns:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="border border-orange-200 rounded-lg p-3 bg-orange-50">
                <h4 className="font-semibold text-orange-900 mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Gap
                </h4>
                <p className="text-sm text-orange-800">
                  Abstract defines a problem or lack of previous research. "Gap"
                  added to themes array.
                </p>
              </div>
              <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
                <h4 className="font-semibold text-blue-900 mb-1 flex items-center gap-2">
                  <Beaker className="h-4 w-4" />
                  Methodology
                </h4>
                <p className="text-sm text-blue-800">
                  Abstract describes study design (survey, experiment, RCT, case
                  study, etc.). "Methodology" added to themes.
                </p>
              </div>
              <div className="border border-emerald-200 rounded-lg p-3 bg-emerald-50">
                <h4 className="font-semibold text-emerald-900 mb-1 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Result
                </h4>
                <p className="text-sm text-emerald-800">
                  Specific findings mentioned. "Result" added to themes.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Also generates <strong>matrix_notes</strong>: a concise 1-2
              sentence (max 30 words) qualitative synthesis of the key
              contribution.
            </p>
          </Step>
          <Step n={3} title="Results saved to citations">
            <p className="text-gray-700 leading-relaxed mb-4">
              Each citation updated with{" "}
              <code>themes: ["Gap", "Methodology", ...]</code> and
              <code>matrix_notes: "..."</code>. Toast shows "Analyzed X
              citations". Matrix view refreshes automatically.
            </p>
          </Step>
          <Tip>
            Use <code>force=true</code> to re-analyze all citations (useful
            after adding new sources or if AI model improved). Without force,
            only citations missing
            <code>themes</code> or <code>matrix_notes</code> are processed.
          </Tip>
        </NumberedSection>

        {/* Step 2 — Literature Matrix Views */}
        <NumberedSection n={2} title="Explore the Literature Matrix">
          <p className="text-gray-700 leading-relaxed mb-4">
            The matrix displays sources as rows and three theme columns (Gap,
            Methodology, Result) plus a Qualitative Synthesis column for matrix
            notes.
          </p>
          <Figure
            src="/images/literature-review-2.png"
            alt="Literature Matrix full view showing table with sources, theme columns, and synthesis notes"
            caption="Literature Review 2: Full-screen Literature Matrix table view."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Compact View (Split Panel)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Card layout: one source per card</li>
                <li>• Theme tags as colored badges with checkmarks</li>
                <li>• Matrix notes in italic below tags</li>
                <li>• Hover to highlight, click tag to toggle (if editable)</li>
                <li>• Optimized for side-by-side with editor</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Maximize2 className="h-5 w-5 text-purple-600" />
                Full View (Table)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Grid: sources × themes + synthesis column</li>
                <li>• Sticky source column (title + author/year)</li>
                <li>
                  • Theme cells: green check (tagged) or dashed border
                  (untagged)
                </li>
                <li>• Synthesis column: matrix notes with line clamp</li>
                <li>• Zebra striping, hover highlight, horizontal scroll</li>
              </ul>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Theme Color Coding
            </h4>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                <CheckCircle className="h-4 w-4" /> Gap — Orange
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                <CheckCircle className="h-4 w-4" /> Methodology — Blue
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                <CheckCircle className="h-4 w-4" /> Result — Emerald
              </span>
            </div>
          </div>
        </NumberedSection>

        {/* Step 3 — Research Gaps Panel */}
        <NumberedSection n={3} title="Detect and explore research gaps">
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Research Gaps Panel</strong> (accessible from Citations
            sidebar or standalone) runs AI analysis on your full bibliography +
            project context to identify underexplored areas.
          </p>
          <Figure
            src="/images/literature-review-3.png"
            alt="Research Gaps Panel showing temporal, topical, and methodological gaps with severity badges and Explore Papers buttons"
            caption="Literature Review 3: Research Gaps Panel with filter tabs and gap cards."
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            The panel calls <code>GET /api/citations/:projectId/gaps</code> →
            <code>ResearchGapService.analyzeGaps(projectId)</code> → AI prompt
            with project title/description + bibliography (abstracts truncated
            to 500 chars). Returns 3-5 gaps in JSON.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Temporal Gaps
              </h4>
              <p className="text-sm text-purple-800">
                Recently emerged aspects not covered by older citations. E.g.,
                "Post-2020 pandemic impact on X not addressed in pre-2020
                sources."
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Topical Gaps
              </h4>
              <p className="text-sm text-emerald-800">
                Specific sub-topics or variables mentioned but not deeply
                explored. E.g., "Gender differences in X mentioned but not
                analyzed across studies."
              </p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Beaker className="h-5 w-5" />
                Methodological Gaps
              </h4>
              <p className="text-sm text-blue-800">
                Missing research approaches. E.g., "All sources are
                meta-analyses; primary case studies or RCTs missing."
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Gap Card Details
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                • <strong>Type icon + color badge</strong>: Temporal (purple),
                Topical (emerald), Methodological (blue)
              </li>
              <li>
                • <strong>Severity badge</strong>: High (red), Medium (amber),
                Low (blue)
              </li>
              <li>
                • <strong>Description</strong>: 1-2 sentence explanation
              </li>
              <li>
                • <strong>Suggested keywords</strong>: Up to 3 chips (clickable
                for search)
              </li>
              <li>
                • <strong>Explore Papers button</strong>: Opens Find Papers
                panel with keywords auto-populated
              </li>
            </ul>
          </div>
          <InfoBox>
            If no gaps detected, panel shows "Comprehensive Coverage" with green
            checkmark. This means your citations provide well-rounded coverage
            across time, topics, and methodologies.
          </InfoBox>
        </NumberedSection>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Batch Analysis Pipeline
              </h3>
              <p className="text-gray-700 text-sm">
                <code>POST /api/citations/:projectId/batch-analyze</code> →
                fetches citations with abstracts (
                <code>abstract: &#123; not: null &#125;</code>). If not{" "}
                <code>force</code>, filters:{" "}
                <code>
                  themes IS NULL OR themes = [] OR matrix_notes IS NULL OR
                  matrix_notes = ""
                </code>
                . Sequential loop (rate limit friendly), each calls{" "}
                <code>OpenAIService.generateCompletion</code> with temp=0.3,
                maxTokens=500. JSON parsed, citation updated with{" "}
                <code>themes</code> (string[]) and <code>matrix_notes</code>{" "}
                (string). Returns updated citations array.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Research Gaps AI Prompt
              </h3>
              <p className="text-gray-700 text-sm">
                Prompt includes project title/description + bibliography (title,
                author, year, abstract[:500]). Asks for 3-5 gaps in 3 categories
                (temporal, topical, methodological). Returns strict JSON array
                with: type, title, description, severity, suggestedKeywords[],
                relatedCitations[]. Related titles mapped back to citation IDs.
                Temperature 0.4, maxTokens 1500.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Citation Schema Extensions
              </h3>
              <p className="text-gray-700 text-sm">
                Prisma <code>Citation</code> model extended with:{" "}
                <code>themes Json?</code>
                (string array: "Gap" | "Methodology" | "Result"),{" "}
                <code>matrix_notes String?</code>. Used by Literature Matrix,
                Citation Graph (node coloring), Export (metadata), and
                Literature Matrix synthesis.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Save className="h-5 w-5 text-purple-600" />
                Plan Gating
              </h3>
              <p className="text-gray-700 text-sm">
                <code>subscriptionService.ts</code> entitlements:
                Free/Plus/Student:
                <code>research_gaps: false</code>. Researcher/Institutional:
                <code>research_gaps: true</code>. Literature Matrix synthesis
                button disabled on non-premium plans with "Available on Premium
                Plan" tooltip. Research Gaps panel shows read-only on Free/Plus.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-purple-600" />
                Integration with Find Papers
              </h3>
              <p className="text-gray-700 text-sm">
                ResearchGapsPanel accepts{" "}
                <code>onSearchGap?: (keywords: string[]) =&gt; void</code>
                prop. When "Explore Papers" clicked, passes{" "}
                <code>gap.suggestedKeywords</code>
                to parent (typically EditorWorkspacePage) which opens Sources
                panel and calls
                <code>performSearch(keywords.join(" "))</code>. ContextKeywords
                auto-triggers search in PaperSuggestionsPanel.
              </p>
            </div>
          </div>
        </section>

        <DocFooter
          nextTo="/study-groups"
          nextLabel="Next: Study Groups"
          helpText="Questions about literature synthesis or gap detection? We can help."
        />
      </div>
    </div>
  );
};

export default LiteratureReviewPage;
