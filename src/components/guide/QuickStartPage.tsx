import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  ChevronDown,
  ChevronRight,
  UserPlus,
  User,
  FolderPlus,
  ExternalLink,
  Link2,
  BookOpen,
  Search,
  LayoutDashboard,
  Wrench,
  Shield,
} from "lucide-react";

const QuickStartPage = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Sign up with email/password or Google/GitHub OAuth",
      icon: <UserPlus className="h-6 w-6" />,
      time: "2 minutes",
      link: "/account-setup",
      details: [
        "Click 'Sign Up' on the homepage or go to /signup",
        "Enter your email, full name, and create a password",
        "Or click 'Continue with Google' / 'Continue with GitHub' for OAuth",
        "Verify your email address via the link sent to your inbox",
        "Optional: Select a plan during signup (Free, Plus, Researcher, Institutional)",
      ],
      tip: "Use your .edu or .ac.uk email to qualify for academic discounts",
    },
    {
      id: 2,
      title: "Complete the Onboarding Survey",
      description: "Tell us about yourself so we can tailor your experience",
      icon: <User className="h-6 w-6" />,
      time: "2 minutes",
      link: "/account-setup",
      details: [
        "After first login, you'll see the onboarding survey (required for new users)",
        "Select how you heard about ColabWize (Search, Referral, Social, University, etc.)",
        "Describe your main goal with the platform (write papers, manage citations, collaborate, etc.)",
        "Choose your role: Student, Researcher, Professor/Faculty, Academic Administrator, or Other",
        "Enter your institution/university name (optional)",
        "Describe the main 'job' you're hiring ColabWize to do for you",
        "Click 'Complete Setup' to finish",
      ],
      tip: "Your answers help us recommend templates, citation styles, and features relevant to your work",
    },
    {
      id: 3,
      title: "Create Your First Project",
      description: "Start a new academic document from scratch or a template",
      icon: <FolderPlus className="h-6 w-6" />,
      time: "3 minutes",
      link: "/create-project",
      details: [
        "From the dashboard, click 'New Project' or the '+' button",
        "Select a workspace (personal or team workspace if invited)",
        "Choose project type: Research Paper, Essay, Lab Report, Grant Proposal, Thesis, or Custom",
        "Select a template: Built-in (APA/MLA/Chicago/IEEE/Harvard) or your workspace templates",
        "Pick a citation style default (APA, MLA, Chicago, IEEE, Harvard)",
        "Enter project title and optional description",
        "Click 'Create Project' — opens directly in the editor",
      ],
      tip: "Templates include full IMRaD structure with proper heading hierarchy. You can also start from a blank document.",
    },
    {
      id: 4,
      title: "Write in the Collaborative Editor",
      description: "Real-time Tiptap editor with AI assistance and citation tools",
      icon: <LayoutDashboard className="h-6 w-6" />,
      time: "Ongoing",
      link: "/editor",
      details: [
        "Left sidebar: Document list, Citation Audit, Sources Library, Outline, Research Gaps, Search Alerts, AI Research Assistant, Zotero/Mendeley",
        "Center: Rich-text editor with slash commands (/heading, /citation, /figure, /table)",
        "Right sidebar: AI Chat, Rephrase, Reality Check, Draft Comparison, Citation Confidence, Comments, Add Citation, Collaboration History",
        "Real-time co-editing via Yjs/Hocuspocus: live cursors, presence, comments",
        "Auto-save every few seconds; version history available",
        "Focus mode hides sidebars for distraction-free writing",
      ],
      tip: "Press '/' in the editor for quick-insert menu. Use Cmd/Ctrl+K for command palette.",
    },
    {
      id: 5,
      title: "Connect Reference Managers (Optional)",
      description: "Link Zotero or Mendeley to import your library",
      icon: <Link2 className="h-6 w-6" />,
      time: "2 minutes",
      link: "/integrations",
      details: [
        "In editor left sidebar, open 'Sources' panel → click 'Connect Zotero' or 'Connect Mendeley'",
        "Authorize via OAuth — your collections sync automatically",
        "Import papers directly into your workspace Sources Library",
        "Drag-and-drop citations from library into the editor",
        "Sync is bidirectional: changes in ColabWize can push back to Zotero/Mendeley",
      ],
      tip: "You can also import .bib files, RIS files, or paste DOI/URL directly in the Add Citation modal",
    },
    {
      id: 6,
      title: "Run a Citation Audit",
      description: "Verify citations, find missing references, fix formatting",
      icon: <BookOpen className="h-6 w-6" />,
      time: "3 minutes",
      link: "/citations",
      details: [
        "Open left sidebar → 'Citation Audit' panel",
        "Click 'Run Audit' — scans document for citations and references",
        "Review results: compliance score (0-100), missing citations, duplicate citations, formatting issues, unverified references",
        "Click 'Auto-Fix' for common issues or 'Find Missing Link' to search databases for unverified citations",
        "Each citation shows confidence score (High/Medium/Low) with verification status",
        "Export audit report as PDF for co-authors or reviewers",
      ],
      tip: "Aim for compliance score >70 before exporting. Auto-fix handles most style inconsistencies.",
    },
    {
      id: 7,
      title: "Invite Collaborators via Workspaces",
      description: "Share projects with your team in real-time",
      icon: <Users className="h-6 w-6" />,
      time: "2 minutes",
      link: "/team-workspace",
      details: [
        "From dashboard: 'New Workspace' → name it → invite members by email",
        "Assign roles: Admin (manage members, delete), Editor (full edit), Viewer (read + comment)",
        "Members receive magic-link invitation email",
        "Add projects to workspace or create new ones within it",
        "All workspace Editors can co-edit in real-time with live cursors and presence",
        "Comments system: highlight text → add threaded comments → @mention notifies via email",
        "Authorship evidence captured automatically for Certificate of Authorship",
      ],
      tip: "Free users can join workspaces as Editor/Viewer but cannot create their own workspaces (requires Plus+).",
    },
  ];

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleComplete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Quick Start Guide</h1>
            <p className="text-lg text-gray-600">
              Get from zero to collaborative academic writing in ~15 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Before You Begin</h2>
          <p className="text-gray-700 mb-5">
            This guide walks you through the actual ColabWize workflow — from account
            creation through your first collaborative project with citation audit. The
            product runs entirely in your browser; no installation required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                What you'll need
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Modern browser (Chrome, Edge, Firefox, Safari)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Email address, or Google/GitHub account for OAuth
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Internet connection (autosave, real-time sync, AI features)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Optional: Zotero/Mendeley account for reference import
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                What you'll accomplish
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Create and verify your account
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Complete the onboarding survey (role, institution, goals)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Create your first project from a template
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Write with AI assistance and citation tools
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Run a citation audit and invite collaborators
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
              Estimated time: 15 minutes
            </span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
              Beginner friendly
            </span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
              Runs in browser — no install
            </span>
            <Link
              to="/signup"
              className="inline-flex items-center text-gray-700 font-medium hover:text-gray-900 hover:underline">
              Create your free account
              <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Progress: {completedSteps.length} of {steps.length} steps
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((completedSteps.length / steps.length) * 100)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${(completedSteps.length / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Getting Started Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Step-by-Step Walkthrough</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    completedSteps.includes(index)
                      ? "border-green-300 bg-green-50"
                      : expandedStep === index
                      ? "border-blue-300 shadow-md"
                      : "border-gray-200"
                  }`}>
                  {/* Step Header */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full flex items-center p-4 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 mr-4">
                      {completedSteps.includes(index) ? (
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-blue-600">
                          {step.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className={`text-lg font-semibold ${
                            completedSteps.includes(index)
                              ? "text-green-700 line-through"
                              : ""
                          }`}>
                          {step.title}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <button
                        onClick={(e) => toggleComplete(index, e)}
                        className={`p-2 rounded-lg transition-colors ${
                          completedSteps.includes(index)
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                        }`}
                        title={
                          completedSteps.includes(index)
                            ? "Mark incomplete"
                            : "Mark complete"
                        }>
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      {expandedStep === index ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedStep === index && (
                    <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                      <div className="ml-14">
                        <h4 className="font-medium text-gray-700 mb-3">
                          How to do this:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start text-sm">
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        {step.tip && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                            <p className="text-sm text-yellow-800">
                              <strong>Tip:</strong> {step.tip}
                            </p>
                          </div>
                        )}
                        <Link
                          to={step.link}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-gray-700 font-medium">
                          Learn more
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core & Advanced Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Core Features to Explore</h2>
            <div className="space-y-3">
              <Link
                to="/ai-integrity"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-900">AI Research Assistant & Integrity Co-Pilot</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Explain-only AI mode, GPTZero detection, 7-database search, citation guidance.
                  </p>
                </div>
              </Link>
              <Link
                to="/citations"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Citation Audit & Confidence Scoring</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Compliance score, auto-fixer, find missing link, verification against CrossRef/OpenAlex.
                  </p>
                </div>
              </Link>
              <Link
                to="/find-papers"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Find Papers (7 Databases)</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ with credibility badges.
                  </p>
                </div>
              </Link>
              <Link
                to="/certificates"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Certificate of Authorship & Academic Integrity
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    PDF certificate with 6 confidence dimensions, QR verification, evidence categories.
                  </p>
                </div>
              </Link>
              <Link
                to="/integrations"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  5
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Zotero, Mendeley, Google Drive, OneDrive
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    OAuth sync, bidirectional, import collections, drag-drop citations.
                  </p>
                </div>
              </Link>
              <Link
                to="/export"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  6
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Multi-Format Export</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Pandoc-powered: DOCX, PDF, LaTeX, RTF, TXT. Citation handling, self-plagiarism guard.
                  </p>
                </div>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-10">Advanced & Team Features</h2>
            <div className="space-y-3">
              <Link
                to="/team-workspace"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Team Workspaces</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    RBAC (Admin/Editor/Viewer), shared resource vault, Kanban, contribution analytics.
                  </p>
                </div>
              </Link>
              <Link
                to="/analytics"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Advanced Analytics</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Writing velocity, originality trends, authorship contribution heatmaps.
                  </p>
                </div>
              </Link>
              <Link
                to="/literature-review"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Literature Review Matrix</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Batch AI analysis of 50+ papers, theme extraction (Gap/Methodology/Result), research gaps.
                  </p>
                </div>
              </Link>
              <Link
                to="/templates"
                className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Document & Task Templates</p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Tiptap JSON templates + Kanban board templates, workspace-scoped, CRUD management.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="mb-4 opacity-90">
                Our support team and community are here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact-support"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors justify-center">
                  Contact Support
                </Link>
                <a
                  href="https://discord.gg/2MMSdX3Uee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors justify-center border border-white/20">
                  <Users className="h-4 w-4 mr-2" />
                  Join Discord Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                Do I need to install anything?
              </h3>
              <p className="text-sm text-gray-600">
                No. ColabWize runs entirely in your browser. Your work autosaves as you type
                and syncs in real-time with collaborators. Access from any device.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                Is ColabWize free to start?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Free plan includes: editor, citation audit (limited scans/month), 7-database
                search, AI Research Assistant (explain mode), certificates, export. Upgrades unlock
                higher limits, team workspaces, advanced analytics, and Institutional features.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                Can I work with a class or research group?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Create a Team Workspace (Plus+ plan), invite members by email, assign roles.
                All Editors can co-edit in real-time with live cursors, presence, and threaded
                comments. Authorship evidence is captured automatically for certificates.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                What's the difference between Workspaces and Study Groups?
              </h3>
              <p className="text-sm text-gray-600">
                ColabWize uses <strong>Team Workspaces</strong> — there's no separate "Study Groups"
                feature. Workspaces provide: RBAC, shared citation vault, Kanban boards,
                contribution analytics, and real-time co-editing. This is the collaboration model.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                Where do I go after my first project?
              </h3>
              <p className="text-sm text-gray-600">
                Connect your reference manager (Zotero/Mendeley), run a Citation Audit to verify
                references, then invite collaborators to your workspace. Explore AI Research
                Assistant for literature review help and the Literature Matrix for systematic reviews.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickStartPage;