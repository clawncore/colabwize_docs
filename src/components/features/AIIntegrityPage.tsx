import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  GraduationCap,
  Search,
  MessageSquare,
  Brain,
  FileText,
  Zap,
  HelpCircle,
  Eye,
  Sparkles,
  BookOpen,
  Wrench,
  Flag,
  Layers,
  Database,
  XCircle,
} from "lucide-react";
import {
  Step,
  Tip,
  InfoBox,
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

const AIIntegrityPage = () => {
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
            <h1 className="text-3xl font-bold mb-2">AI Research Assistant & Integrity Co-Pilot</h1>
            <p className="text-lg text-gray-600">
              An educational AI assistant embedded in the editor that explains academic integrity, answers
              research questions using your library and live academic search, explains originality flags,
              and guides citation decisions — without ever writing or rewriting your content.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>AI Research Assistant & Integrity Co-Pilot</strong> is a conversational AI
            embedded in the ColabWize editor sidebar. It operates under a strict <strong>Global
            System Guard</strong> that enforces educational, advisory, and research-oriented behavior.
            The AI never writes, rewrites, paraphrases, or edits your document — it only explains,
            synthesizes, and guides.
          </p>
          <InfoBox>
            <strong>Core Principle:</strong> The AI is an "Integrity Co-Pilot" — it helps you
            understand academic integrity requirements, research topics using your library and live
            academic databases, and make informed decisions about your writing. It does not generate
            content for you to submit as your own.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Research Assistant
              </h3>
              <p className="text-sm text-gray-600">
                Ask questions about your sources, get explanations of highlighted text, or analyze
                PDF annotations. Uses your project library + live search across 7 academic databases.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Integrity Explanations
              </h3>
              <p className="text-sm text-gray-600">
                On-click explanations for originality flags (red/yellow/green/blue), citation rules
                (direct quote, paraphrase, common knowledge), and academic policies.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Citation Guidance
              </h3>
              <p className="text-sm text-gray-600">
                Suggests where citations strengthen credibility, runs full-document citation audits,
                and explains style-specific requirements (APA, MLA, IEEE, Chicago).
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Context-Aware Chat
              </h3>
              <p className="text-sm text-gray-600">
                Understands your document type, academic level, citation style, discipline, selected
                text, cursor position, and originality scan results for grounded answers.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Live Web Search (Opt-in)
              </h3>
              <p className="text-sm text-gray-600">
                Toggle web search per-message to fetch current sources. Results injected into AI
                context with URLs for citation. Metered separately (ai_web_search quota).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Persistent Sessions
              </h3>
              <p className="text-sm text-gray-600">
                Chat history saved per project/file/PDF. Sessions include full message history,
                context, and tool usage for continuity across editing sessions.
              </p>
            </div>
          </div>
        </section>

        {/* What the AI CAN do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            What the AI Assistant CAN do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-green-600" />
                Explain & Synthesize
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Explain academic concepts, citation rules, research ethics</li>
                <li>• Synthesize information from your library sources</li>
                <li>• Analyze PDF annotations and highlights</li>
                <li>• Answer "What do these sources say about X?"</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Flag className="h-5 w-5 text-green-600" />
                Integrity Guard
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Explain originality flags (red/yellow/green/blue/needs_citation)</li>
                <li>• Explain citation rules for direct quotes, paraphrases, statistics</li>
                <li>• Clarify institutional policies (self-plagiarism, AI usage, collaboration)</li>
                <li>• Run full-document citation audits on demand</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Search className="h-5 w-5 text-green-600" />
                Research Tools
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Search 7 academic databases (CrossRef, OpenAlex, PubMed, arXiv, etc.)</li>
                <li>• Suggest where citations would strengthen arguments</li>
                <li>• Find papers on topics ("Find me papers on Y")</li>
                <li>• Live web search with opt-in toggle per message</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-600" />
                Context Integration
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Document content, selected text, cursor position</li>
                <li>• Originality scan results with prioritized flags</li>
                <li>• Your project source library (titles, authors, years)</li>
                <li>• PDF annotations and highlights</li>
                <li>• Citation suggestions from audit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What the AI CANNOT do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-600" />
            What the AI Assistant CANNOT do (Global System Guard)
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 space-y-3">
            <p className="font-semibold text-red-900">
              These restrictions are enforced at the system prompt level and cannot be bypassed:
            </p>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Ghostwriting:</strong> Will not write, rewrite, paraphrase, or edit
                your document content for you to copy-paste as your own submission.</span>
              </li>
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Content Generation:</strong> Does not generate new text to be
                pasted into the document as final product.</span>
              </li>
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Fabrication:</strong> Will not invent sources, references, or
                citations. All suggested sources come from real database searches.</span>
              </li>
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Direct Edits:</strong> Cannot modify document structure, insert
                citations, or change your text directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Uninvited Interruptions:</strong> Does not trigger popups or
                messages without user action.</span>
              </li>
              <li className="flex items-start gap-2">
                <Flag className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span><strong>No Override:</strong> Never overrides user intent or academic
                judgment. All suggestions are optional and educational.</span>
              </li>
            </ul>
            <InfoBox>
              If asked to write/rewrite: The AI politely refuses, explains the academic integrity
              concern, suggests self-authoring techniques, and offers educational resources about
              paraphrasing and citation.
            </InfoBox>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            See the AI Research Assistant and Integrity Co-Pilot in action.
          </p>
          <VideoPlaceholder title="AI Integrity walkthrough" length="~3 minutes" />
        </section>

        {/* Screenshot 1 — AI Integrity Assistant Chat */}
        <NumberedSection n={1} title="Open the AI Research Assistant">
          <p className="text-gray-700 leading-relaxed mb-4">
            Open the assistant from the editor using the <span className="font-medium">Integrity
            Assistant</span> button. A sidebar appears on the right side with a conversation panel
            where you ask questions, and a message input field at the bottom.
          </p>
          <Figure
            src="/images/ai-integrity-1.png"
            alt="The AI Research Assistant sidebar open in the editor"
            caption="Screenshot 1: The AI Research Assistant sidebar showing conversation panel, context indicators, and message input."
          />
          <InfoBox>
            The assistant runs in <strong>Explain Mode</strong> by default. It is educational only
            and cannot write, rewrite, or edit your document. It answers questions and explains
            principles instead of changing your text.
          </InfoBox>
          <p className="text-gray-700 leading-relaxed mb-4">
            Use the AI Research Assistant to:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Understand citation rules and style requirements</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Explain academic integrity policies</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Interpret similarity and originality reports</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Answer research questions using your library + live search</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Analyze PDF annotations and highlights</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Get guidance on self-authoring techniques</span>
            </li>
          </ul>
        </NumberedSection>

        {/* Screenshot 2 — On-click Flag Explanations */}
        <NumberedSection n={2} title="Get on-click explanations for originality flags">
          <p className="text-gray-700 leading-relaxed mb-4">
            When the Originality Scanner flags text in your document, click any flag to get an
            instant AI explanation. The assistant receives the flagged text, classification, and
            surrounding context to provide a targeted explanation.
          </p>
          <Figure
            src="/images/ai-integrity-2.png"
            alt="On-click explanation for an originality flag"
            caption="Screenshot 2: Clicking a red flag opens an AI explanation of why it was flagged and what citation is needed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h4 className="font-semibold text-red-900 mb-1">Red / Needs Citation</h4>
              <p className="text-sm text-red-800">Significant similarity to external sources.
              Requires proper citation or rewrite in your own words.</p>
            </div>
            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <h4 className="font-semibold text-yellow-900 mb-1">Yellow / Close Paraphrase</h4>
              <p className="text-sm text-yellow-800">Close paraphrase of existing content.
              Consider more original phrasing or add citation.</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h4 className="font-semibold text-green-900 mb-1">Green / Common Phrase</h4>
              <p className="text-sm text-green-800">Common knowledge or appropriately original.
              No action needed.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h4 className="font-semibold text-blue-900 mb-1">Blue / Quoted Correctly</h4>
              <p className="text-sm text-blue-800">Properly quoted and cited. Good job!</p>
            </div>
          </div>
          <Tip>
            The explanation includes: what is wrong, which citation rule applies, a corrected
            example, and keeps it concise and neutral. This is educational AI, not corrective AI.
          </Tip>
        </NumberedSection>

        {/* Screenshot 3 — Citation Suggestion & Audit */}
        <NumberedSection n={3} title="Citation suggestions and full-document audit">
          <p className="text-gray-700 leading-relaxed mb-4">
            Two additional on-demand tools help with citation decisions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-indigo-600" />
                Citation Suggestion Assistant
              </h4>
              <p className="text-sm text-gray-700">
                Click "Suggest citation" on a paragraph. The AI analyzes the claim type
                (argument, fact, theory) and suggests where a citation would strengthen credibility
                and what type of source is needed. Does not generate citations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Full Citation Audit
              </h4>
              <p className="text-sm text-gray-700">
                Click "Run Citation Audit" to analyze the entire document. The AI summarizes
                citation issues grouped by severity, highlights systemic problems (style mixing,
                missing references), and produces a report — not a fix.
              </p>
            </div>
          </div>
        </NumberedSection>

        {/* Technical Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-600" />
                System Prompt Guard (Non-negotiable)
              </h3>
              <p className="text-gray-700 text-sm">
                Every AI request includes a Global System Guard that defines allowed/forbidden
                behaviors. The guard is always active and cannot be overridden by user prompts.
                It enforces: Explain & Synthesize only, No Ghostwriting, No Generation, Educational
                Focus, Cite Reasoning.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Tools Available to the AI
              </h3>
              <p className="text-gray-700 text-sm">
                <code>searchExternalSources(query)</code> — Searches 7 academic databases in
                parallel (CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE Xplore, DOAJ).
                Returns title, authors, year, venue, abstract snippet, URL. Used proactively when
                user asks for "additional research" or document content is insufficient.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-600" />
                Context Injection Pipeline
              </h3>
              <p className="text-gray-700 text-sm">
                Document context (type, level, style, discipline), content excerpt, originality
                results (prioritized: critical flags first), project library, citation suggestions,
                PDF annotations, and optional web search results are all injected into the system
                message before each request.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                Billing & Quotas
              </h3>
              <p className="text-gray-700 text-sm">
                Two separate quotas: <code>ai_chat</code> (per message, based on input word count)
                and <code>ai_web_search</code> (per web search toggle). Both use BillingGateway
                hold/confirm/release pattern. Student plan: ai_integrity = 0 (blocked). Researcher
                plan: 100/month included.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-indigo-600" />
                AI Detection (Separate Feature)
              </h3>
              <p className="text-gray-700 text-sm">
                <strong>GPTZero integration</strong> detects AI-generated content probability.
                Returns overall score (0-100), classification (human/mixed/ai), and per-sentence
                scores with position tracking. Used for integrity reports, not for AI assistant
                responses.
              </p>
            </div>
          </div>
        </section>

        {/* Usage limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Usage Limits by Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Student</h3>
              <p className="text-3xl font-bold text-red-600 mb-1">0 / month</p>
              <p className="text-sm text-gray-600">AI Integrity blocked on Student plan</p>
            </div>
            <div className="border border-indigo-200 rounded-xl p-4 text-center bg-indigo-50">
              <h3 className="font-semibold text-gray-900 mb-2">Researcher</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-1">100 / month</p>
              <p className="text-sm text-gray-600">Includes ai_chat + ai_web_search</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Institutional</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">Custom</p>
              <p className="text-sm text-gray-600">Volume licensing, dedicated quotas</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Quotas are enforced via <code>EntitlementService.assertCanUse(userId, 'ai_integrity')</code>
            before each request. Overages return 402 with retry guidance.
          </p>
        </section>

        <DocFooter
          nextTo="/citations"
          nextLabel="Run a Citation Audit"
          helpText="Questions about the AI assistant, originality detection, or academic integrity? We can help."
        />
      </div>
    </div>
  );
};

export default AIIntegrityPage;