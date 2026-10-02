import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  Search,
  MessageCircle,
  Mail,
  BookOpen,
  Users,
  CreditCard,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Click 'Sign Up' on the homepage or go to /signup. You can register with email/password or use Google/GitHub OAuth. After registration, verify your email via the link sent to your inbox. New users complete a one-time onboarding survey (role, institution, goals) before reaching the dashboard.",
        },
        {
          question: "Is there a free plan?",
          answer:
            "Yes. The Free plan includes: full editor with real-time autosave, citation audit (limited scans/month), 7-database paper search (CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ), AI Research Assistant (explain mode), Certificate of Authorship, multi-format export (DOCX, PDF, LaTeX, RTF, TXT), and Zotero/Mendeley import. Team workspaces, higher scan limits, and advanced analytics require Plus/Researcher/Institutional plans.",
        },
        {
          question: "What are the system requirements?",
          answer:
            "Any modern browser: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+. JavaScript and cookies enabled. WebSocket support for real-time collaboration. No installation required — runs at app.colabwize.com. Optional PWA install for desktop/mobile/tablet from browser menu.",
        },
        {
          question: "Do I need to install anything?",
          answer:
            "No. ColabWize is a web application. Open app.colabwize.com in your browser and sign in. Optional: install as a Progressive Web App (PWA) from Chrome/Edge/Safari menu for standalone window, home-screen icon, and offline caching.",
        },
      ],
    },
    {
      id: "account-management",
      title: "Account & Profile",
      icon: <Users className="h-5 w-5 text-green-600" />,
      faqs: [
        {
          question: "How do I change my password?",
          answer:
            "Go to Settings → Account → Security → Change Password. Enter current password, then new password (min 8 chars, uppercase, number, special character). If you forgot your password, use 'Forgot Password' on the login page to receive a reset link via email.",
        },
        {
          question: "How do I update my profile (institution, field of study, citation style)?",
          answer:
            "Settings → Account → Profile. Edit: full name, institution, academic level, field of study, preferred citation style (APA, MLA, Chicago, IEEE, Harvard, Vancouver). These preferences pre-fill when creating new projects.",
        },
        {
          question: "Can I change my email address?",
          answer:
            "Yes. Settings → Account → Profile → Email. Enter new email, verify via link sent to new address. The old email remains active until new one is verified.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "Settings → Account → Privacy & Security → Delete Account. This is permanent and irreversible. All projects, workspaces, certificates, and data are deleted. Workspace-owned projects transfer to workspace admins before deletion.",
        },
        {
          question: "What is the onboarding survey and can I redo it?",
          answer:
            "The onboarding survey (role, institution, field, goals, how you heard about us) runs once after first login. It tailors template recommendations and feature highlights. To redo: contact support — there's no self-serve reset currently.",
        },
      ],
    },
    {
      id: "billing",
      title: "Billing & Subscriptions",
      icon: <CreditCard className="h-5 w-5 text-purple-600" />,
      faqs: [
        {
          question: "What plans are available?",
          answer:
            "Free, Plus, Researcher, Institutional. Free: core features with monthly scan limits. Plus: higher limits, team workspaces (create/manage), advanced analytics. Researcher: highest individual limits, priority support. Institutional: multi-node, sovereign storage, SSO, executive reports, dedicated support. See /pricing for current limits.",
        },
        {
          question: "How do I upgrade or change my plan?",
          answer:
            "Settings → Billing → Upgrade Plan. Select plan, choose monthly/annual billing, enter payment details. Upgrades take effect immediately; downgrades apply at next billing cycle. Annual plans include ~20% discount.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "Credit/debit cards (Visa, Mastercard, Amex, Discover) via Stripe. PayPal for annual plans. Bank transfer / invoice for Institutional plans (contact sales). All payments processed securely — we don't store card details.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "14-day money-back guarantee for new paid subscriptions. After 14 days: pro-rated refunds for unused portion of annual plans only. Monthly plans non-refundable once period starts. Contact support with order details.",
        },
        {
          question: "How do I cancel my subscription?",
          answer:
            "Settings → Billing → Subscription → Cancel. Access continues until end of current billing period. No further charges. You can re-subscribe anytime. Workspace projects remain accessible to other members.",
        },
        {
          question: "What are credits and how do they work?",
          answer:
            "Credits gate AI-heavy features (Literature Matrix batch analysis, Find Papers deep search, Certificate generation). Free plan gets monthly credit allowance. Plus/Researcher get higher monthly credits. Credits don't roll over. Purchase additional credits in Settings → Billing.",
        },
      ],
    },
    {
      id: "features",
      title: "Core Features",
      icon: <Zap className="h-5 w-5 text-orange-600" />,
      faqs: [
        {
          question: "What is the AI Research Assistant?",
          answer:
            "An explain-only AI mode (no content generation) that helps with: literature search strategy, methodology explanation, writing structure guidance, statistical concept clarification, citation style rules. Powered by GPT-4 with academic guardrails. Does not write text for you.",
        },
        {
          question: "How does Citation Audit work?",
          answer:
            "Scans your document for in-text citations and reference list entries. Checks: citation format consistency, missing references, duplicate citations, unverified citations (vs. CrossRef/OpenAlex), DOI validity. Returns compliance score (0-100), per-citation confidence (High/Medium/Low), and auto-fix suggestions. Runs on-demand from left sidebar.",
        },
        {
          question: "Is there a plagiarism checker?",
          answer:
            "No. ColabWize does not have a traditional plagiarism checker. Instead, we provide: Citation Audit (verifies your citations exist and are formatted correctly), Certificate of Authorship (cryptographically signed document provenance with authorship evidence), and AI detection (GPTZero integration flags AI-generated text). We help you prove originality, not detect copied text.",
        },
        {
          question: "What databases does Find Papers search?",
          answer:
            "7 databases in parallel: CrossRef (DOI metadata), OpenAlex (250M+ works), arXiv (preprints), PubMed (biomedical), Semantic Scholar (AI-powered), IEEE Xplore (engineering/CS), DOAJ (open access journals). Results include credibility badges (peer-reviewed, open access, preprint, retraction status).",
        },
        {
          question: "What is the Certificate of Authorship?",
          answer:
            "A PDF certificate (generated via Puppeteer) proving document provenance. Includes: 6 confidence dimensions (originality, citation integrity, authorship evidence, collaboration transparency, version history, AI detection), QR code for public verification, evidence categories (server-observed edits, client telemetry, citation verification). Tamper-evident — any document change invalidates the certificate.",
        },
        {
          question: "What export formats are supported?",
          answer:
            "DOCX, PDF, LaTeX (.tex), RTF, TXT via Pandoc. Citations convert to target format's native style (BibTeX for LaTeX, numbered for DOCX, etc.). Self-plagiarism guard checks against your previous exports. Journal submission package bundles manuscript + cover letter + supplementary files.",
        },
      ],
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: <Globe className="h-5 w-5 text-teal-600" />,
      faqs: [
        {
          question: "How do I connect Zotero?",
          answer:
            "In editor left sidebar → Sources panel → 'Connect Zotero'. Authorize via OAuth (Zotero.org). Your collections sync automatically. Drag papers from Sources panel into editor to insert citations. Bidirectional: changes in ColabWize can push back to Zotero (opt-in).",
        },
        {
          question: "How do I connect Mendeley?",
          answer:
            "Same flow as Zotero: editor → Sources → 'Connect Mendeley' → OAuth via Mendeley.com. Library syncs. Note: Mendeley API has rate limits; large libraries may sync incrementally.",
        },
        {
          question: "Can I import from Google Drive / OneDrive?",
          answer:
            "Yes. Create Project → Import tab → Google Drive or OneDrive. OAuth authorization → browse cloud storage → select .docx, .pdf, .tex files. Files download, convert via Pandoc/pdf-parse, create project. Also available in editor via 'Import' button in Documents panel.",
        },
        {
          question: "What citation file formats can I import?",
          answer:
            ".bib (BibTeX), .ris (RIS), .enw (EndNote), .csl.json (CSL-JSON). Drag-drop into Add Citation modal or Import tab. Parsed citations added to project's Sources Library and available for insertion.",
        },
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration & Workspaces",
      icon: <Shield className="h-5 w-5 text-indigo-600" />,
      faqs: [
        {
          question: "How do Team Workspaces work?",
          answer:
            "Dashboard → New Workspace → name it → invite members by email. Roles: Admin (manage members, delete workspace), Editor (full edit, create projects), Viewer (read, comment). All Editors co-edit in real-time via Yjs/Hocuspocus (live cursors, presence, comments). Requires Plus+ plan to create; Free users can join as Editor/Viewer.",
        },
        {
          question: "How many people can collaborate on a document?",
          answer:
            "No hard limit. Real-time sync via Yjs CRDTs handles concurrent edits from many users. Practical limit depends on document size and network; tested with 20+ simultaneous editors. Each user sees colored cursors, selections, and presence avatars.",
        },
        {
          question: "Can I collaborate with someone without a ColabWize account?",
          answer:
            "No — all collaborators need a ColabWize account. Invitation emails contain a magic link to sign up or sign in. Once they have an account, they're added to the workspace with the assigned role.",
        },
        {
          question: "How does real-time editing work technically?",
          answer:
            "Yjs CRDT (Conflict-free Replicated Data Type) on client + Hocuspocus WebSocket server. Changes propagate in ~50ms. Offline-first: edits queue locally, sync on reconnect. Awareness protocol broadcasts cursors/selections without blocking edits. Authorship evidence captured server-side per edit.",
        },
        {
          question: "What are the permission levels?",
          answer:
            "Workspace: Admin (manage members, delete workspace, all project permissions), Editor (create/edit projects, invite Viewers), Viewer (read projects, comment). Project-level: inherits workspace role. No separate project-level roles currently.",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <Search className="h-5 w-5 text-red-600" />,
      faqs: [
        {
          question: "Editor won't load / stuck on loading",
          answer:
            "1) Clear browser cache/cookies for colabwize.com. 2) Try incognito/private window. 3) Check browser console for errors (F12). 4) Disable extensions (especially ad blockers, privacy tools). 5) Ensure WebSocket not blocked by firewall/VPN/corporate proxy. 6) Try different browser.",
        },
        {
          question: "Real-time collaboration not syncing",
          answer:
            "Check: all editors have Editor+ role in workspace; WebSocket connection active (green dot in toolbar); no firewall blocking wss://api.colabwize.com/hocuspocus; try refreshing. If persistent, check status page or contact support.",
        },
        {
          question: "Citation audit shows '0 citations found' but I have citations",
          answer:
            "Ensure citations are inserted via the Add Citation modal (not typed manually as plain text). Citations must have internal citation IDs. Run 'Re-scan' in Citation Audit panel. If imported from DOCX/LaTeX, citations may need re-linking via 'Find Missing Link'.",
        },
        {
          question: "Export fails or output looks wrong",
          answer:
            "1) Run Citation Audit first — fix all 'High' confidence issues. 2) Check for unsupported elements (custom HTML, complex tables). 3) For LaTeX: ensure BibTeX entries valid. 4) Try simpler format (DOCX) first. 5) Large documents (>100 pages): export in chunks or contact support.",
        },
        {
          question: "Zotero/Mendeley sync not working",
          answer:
            "1) Re-authorize in Settings → Integrations. 2) Check Zotero/Mendeley API status. 3) Large libraries (>5000 items): sync may take minutes. 4) Mendeley: rate limits may pause sync temporarily. 5) Clear integration cache in Settings → Integrations → 'Reset Connection'.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.faqs.some(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <h1 className="text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about ColabWize
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Can't Find What You're Looking For?
              </h2>
              <p className="opacity-90">
                Our support team is here to help with any questions not covered
                in our FAQ
              </p>
            </div>
            <div className="flex space-x-2">
              <Link
                to="/contact-support"
                className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-medium">
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.id} className="rounded-lg">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-5 text-left">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">{category.icon}</div>
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    openCategory === category.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCategory === category.id && (
                <div className="px-5 pb-5">
                  <div className="border-t border-gray-200 pt-5 space-y-6">
                    {category.faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Schedule a Meeting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Book a 30-minute session with our support team.
              </p>
              <a
                href="https://calendly.com/colabwize/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium inline-block">
                Schedule Now
              </a>
            </div>

            <div className="p-5">
              <div className="flex items-center mb-3">
                <Mail className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Email Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Send us a detailed message and we'll respond within 24 hours.
              </p>
              <Link
                to="/contact-support"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium inline-block">
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;