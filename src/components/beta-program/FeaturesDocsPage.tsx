import { Link } from "react-router-dom";
import {
  FileSearch,
  Bot,
  BookOpen,
  Award,
  BarChart3,
  Download,
  Lightbulb,
  Shield,
  Clock,
  CheckCircle,
  Zap,
  Users,
  Search,
  Brain,
  Layers,
  GitCompare,
  Target,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

// Feature Detail Component
interface FeatureDetailProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  plans: string[];
  color: string;
  reverse?: boolean;
}

function FeatureDetail({
  icon: Icon,
  title,
  description,
  benefits,
  plans,
  color,
  reverse = false,
}: FeatureDetailProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:grid-flow-col-dense" : ""
      } mb-24`}>
      {/* Content */}
      <div className={reverse ? "lg:col-start-2" : ""}>
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mb-6`}>
          <Icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Available Plans */}
        <div className="flex flex-wrap gap-2 mb-6">
          {plans.map((plan) => (
            <span
              key={plan}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            {plan}
          </span>
          ))}

          {/* Premium exclusive badge */}
          {plans.includes("Premium") && plans.length === 1 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Premium Exclusive
            </span>
          )}
        </div>

        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Placeholder - Feature Screenshot Area */}
      <div className={reverse ? "lg:col-start-1" : ""}>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <Icon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">{title} Screenshot</p>
              <p className="text-gray-400 text-sm mt-1">Feature interface preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Features Presentation Flow
function FeaturesPresentationFlow() {
  const features = [
    {
      icon: FileSearch,
      title: "Citation Audit & Confidence Scoring",
      description:
        "Comprehensive citation analysis that checks formatting, verifiability, and source quality. Get confidence scores (0-100%) for each citation, recency analysis for publications older than 3 years, and discover missing relevant papers with our AI-powered Missing Link feature.",
      benefits: [
        "Confidence scoring (0-100%) for each citation with detailed breakdown",
        "Recency analysis flags publications older than 3 years",
        "Missing Link Finder suggests relevant papers you may have missed",
        "Field-specific recommendations and citation improvements",
        "Broken reference detection and duplicate citation identification",
        "Auto-fixer applies common citation corrections",
      ],
      plans: ["Free (3/mo)", "Plus (25/mo)", "Premium (100/mo)"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "AI Detection (GPTZero Integration)",
      description:
        "Industry-leading AI content detection powered by GPTZero. Analyze documents to identify AI-generated text from ChatGPT, Claude, and other language models. Get Human, Mixed, or AI-Generated classification with pattern analysis and perplexity scoring.",
      benefits: [
        "GPTZero integration with pattern analysis and perplexity scoring",
        "Human, Mixed, or AI-Generated classification with confidence levels",
        "Low false-positive rates optimized for academic writing",
        "Integrated into citation audit workflow",
        "Available on all plans within citation audits",
      ],
      plans: ["Free", "Plus", "Premium"],
      color: "from-purple-500 to-pink-500",
      reverse: true,
    },
    {
      icon: BookOpen,
      title: "Originality Scanning & Plagiarism Detection",
      description:
        "Full document originality scanning against billions of web pages and academic sources. Get detailed originality reports with sentence-level similarity detection, color-coded originality maps, and AI-powered rephrase suggestions for flagged content.",
      benefits: [
        "Full document scanning (Free: first 30 sentences; Plus: 10 scans/mo; Premium: 100 scans/mo)",
        "Originality Map visualization with color-coded matches",
        "AI-powered rephrase suggestions for flagged content",
        "Scans against web pages and academic databases (CrossRef, OpenAlex, PubMed, etc.)",
        "Side-by-side comparison with matched sources",
      ],
      plans: ["Free (30 sent.)", "Plus (10/mo)", "Premium (100/mo)"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Authorship Certificates",
      description:
        "Generate cryptographically-secure authorship certificates to prove you created a document at a specific time. Perfect for protecting intellectual property, establishing priority, and demonstrating academic integrity to institutions and publishers.",
      benefits: [
        "Unique verification codes and timestamps with QR code verification",
        "Online certificate verification system (public lookup)",
        "Professional certificates without watermarks (Plus: 30-day, Premium: 90-day retention)",
        "6-dimension confidence scoring: Writing Process, Source Integration, Citation Timing, Revision Patterns, AI Detection, Consistency",
        "Evidence categories: Reading Time, Highlights & Notes, Citation Insertion Timeline, Draft Evolution",
      ],
      plans: ["Free (7-day)", "Plus (30-day)", "Premium (90-day)"],
      color: "from-orange-500 to-red-500",
      reverse: true,
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description:
        "Exclusive to Premium plan subscribers. Track your writing productivity, identify your most active days, monitor citation fix rates, and visualize your verification times with comprehensive analytics derived from your actual usage data.",
      benefits: [
        "Most Active Day detection with percentage contribution",
        "Weekly Upload Velocity tracking (8-week rolling bar chart)",
        "Monthly project growth trends (6-month view)",
        "Yearly overview (all-time document creation)",
        "Citation Fix Rate analysis and Time to Verification metrics",
        "Citation audit statistics: avg compliance, integrity index, verified sources",
        "Billing trends and feature usage counters",
      ],
      plans: ["Premium Only"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: GitCompare,
      title: "Draft Comparison",
      description:
        "Exclusive to Premium plan. Compare two document versions side-by-side with AI-powered diff analysis. Highlights added/removed citations, structural changes, argument shifts, and provides a similarity score.",
      benefits: [
        "Side-by-side visual diff with color-coded changes",
        "Citation-level comparison: added, removed, modified references",
        "Structural analysis: section reordering, paragraph moves",
        "Argument shift detection with AI summarization",
        "Similarity score and change classification",
      ],
      plans: ["Premium Only"],
      color: "from-teal-500 to-cyan-500",
      reverse: true,
    },
    {
      icon: Layers,
      title: "Literature Review Matrix",
      description:
        "Batch AI analysis of papers in your library. Extract and organize themes across multiple papers: Research Gaps, Methodology patterns, Result synthesis. Generate Research Gaps panel identifying temporal, topical, and methodological gaps in your field.",
      benefits: [
        "Batch process up to 50 papers per run (credit-gated)",
        "Theme extraction: Gap, Methodology, Result categories",
        "Research Gaps Panel: temporal, topical, methodological gaps",
        "Cross-paper synthesis and comparison tables",
        "Export matrix as CSV for further analysis",
      ],
      plans: ["Premium + Credits"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Research Gaps Panel",
      description:
        "AI-powered identification of research gaps in your field. Analyzes your paper library and search history to find: temporal gaps (underexplored time periods), topical gaps (missing subtopics), and methodological gaps (underused methods).",
      benefits: [
        "Temporal gaps: years with sparse publication activity",
        "Topical gaps: subtopics with few papers in your library",
        "Methodological gaps: methods rarely used in your field",
        "Interactive gap visualization with suggested search queries",
        "Export gap report with actionable research directions",
      ],
      plans: ["Premium Only"],
      color: "from-amber-500 to-orange-500",
      reverse: true,
    },
    {
      icon: Brain,
      title: "AI Research Assistant (Explain-Only Mode)",
      description:
        "Chat with your papers — ask questions, get explanations, find connections. Guardrails prevent text generation; only explains existing content. Integrates with 7 academic databases + Semantic Scholar author profiles for grounded responses.",
      benefits: [
        "Explain-only mode: no text generation, only grounded explanations",
        "7 database search: CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ",
        "Semantic Scholar author profiles for expertise verification",
        "Citation guidance: suggests relevant papers for your claims",
        "Source-grounded responses with inline citations",
        "Per-query credit usage (25/mo Plus, 100/mo Premium)",
      ],
      plans: ["Plus (25/mo)", "Premium (100/mo)"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Team Workspaces (Real-time Collaboration)",
      description:
        "Yjs/Hocuspocus CRDT-based real-time co-editing with presence, cursors, and comments. Workspace Owner/Editor/Viewer roles with granular permissions. Integrated Kanban task management and shared citation library.",
      benefits: [
        "Real-time collaborative editing with conflict-free CRDTs",
        "Live presence indicators, cursor positions, selection highlights",
        "Inline comments and threaded discussions",
        "Workspace roles: Owner, Editor, Viewer with permissions",
        "Shared citation library and document templates",
        "Kanban task boards per project",
        "Available on Plus, Premium, and Institutional plans",
      ],
      plans: ["Plus", "Premium", "Institutional"],
      color: "from-sky-500 to-blue-500",
      reverse: true,
    },
    {
      icon: Download,
      title: "Flexible Export Options",
      description:
        "Export your work in multiple formats for submission or sharing. Pandoc-powered conversion preserves formatting, citations, and structure across formats. Journal submission packages include pre-flight citation audit and self-plagiarism guard.",
      benefits: [
        "PDF, DOCX, LaTeX, RTF, TXT formats",
        "Journal submission packages (Premium)",
        "Self-plagiarism guard checks against your own library",
        "Pre-flight citation audit before export",
        "Maintain formatting, citations, and figures across formats",
        "Free: PDF only; Plus/Premium: all formats",
      ],
      plans: ["Free (PDF)", "Plus (All)", "Premium (All + Packages)"],
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Search,
      title: "Paper Search & Discovery (7 Databases)",
      description:
        "Parallel search across 7 academic databases with unified results. Credibility badges (Peer-reviewed, Preprint, High-impact), auto-search from citations, library sync, and DOI/URL import for instant paper lookup.",
      benefits: [
        "7 databases: CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ",
        "Credibility badges: Peer-reviewed, Preprint, High-impact, Open Access",
        "Auto-search from your citations while writing",
        "One-click library sync to your citation manager",
        "DOI/URL import for instant metadata retrieval",
        "Deep search with AI ranking (credit-gated)",
      ],
      plans: ["Free (25/mo)", "Plus (100/mo)", "Premium (200/mo)"],
      color: "from-indigo-500 to-purple-500",
      reverse: true,
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureDetail key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Closing Mini-CTA
function ClosingCTA() {
  return (
    <>
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-none overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center bg-gradient-to-br from-blue-600 to-purple-600">
              <Lightbulb className="h-16 w-16 text-yellow-300 mx-auto mb-6" />

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ensure Academic Integrity & Protect Your Work
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're a student, researcher, or academic professional, ColabWize helps you
                maintain originality, detect AI content, verify citations, and prove authorship
                with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-6">
                  <Link to="/plans" className="flex items-center">
                    View Plans & Pricing
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6"
                  asChild>
                  <Link to="/quickstart">Get Started Free</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Start scanning immediately</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure & confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

// Main Component
const FeaturesDocsPage: React.FC = () => {
  return (
    <div className="w-full">
      <FeaturesPresentationFlow />
      <ClosingCTA />
    </div>
  );
};

export default FeaturesDocsPage;