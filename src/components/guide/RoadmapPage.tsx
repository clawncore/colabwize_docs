import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Trophy,
  Target,
  GitBranch,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

const RoadmapPage = () => {
  const roadmapCategories = [
    {
      id: "now",
      title: "Now — Recently Shipped",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      items: [
        {
          title: "AI Research Assistant & Integrity Co-Pilot",
          description: "Explain-only AI mode with GPTZero detection, 7-database search integration, citation guidance, and methodology help. No content generation — assists your thinking.",
          status: "Shipped",
          details: [
            "Explain-only guardrails (no ghostwriting)",
            "GPTZero AI detection integration",
            "Parallel search across CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ",
            "Citation style guidance (APA/MLA/Chicago/IEEE/Harvard)",
            "Methodology and structure suggestions",
          ],
        },
        {
          title: "Certificate of Authorship & Academic Integrity",
          description: "Tamper-evident PDF certificate with 6 confidence dimensions, QR verification, and cryptographic provenance.",
          status: "Shipped",
          details: [
            "6 dimensions: Originality, Citation Integrity, Authorship Evidence, Collaboration Transparency, Version History, AI Detection",
            "QR code for public verification",
            "Puppeteer-generated PDF with institutional branding",
            "Evidence categories: server-observed edits (strong), client telemetry (weak), citation verification",
            "Downloadable + shareable verification link",
          ],
        },
        {
          title: "Literature Review Matrix & Research Gaps Panel",
          description: "Batch AI analysis of 50+ papers with theme extraction (Gap/Methodology/Result) and automated research gap identification.",
          status: "Shipped",
          details: [
            "Literature Matrix: upload 50+ PDFs → batch AI analysis → theme extraction",
            "Research Gaps Panel: temporal gaps, topical gaps, methodological gaps",
            "Plan-gated: Researcher+ plans",
            "Export gap analysis to CSV/JSON",
            "Integration with Find Papers for gap-filling searches",
          ],
        },
        {
          title: "Multi-Format Export with Pandoc",
          description: "DOCX, PDF, LaTeX, RTF, TXT export with citation handling, self-plagiarism guard, and journal submission packages.",
          status: "Shipped",
          details: [
            "Pandoc-powered conversion with CSL citation styles",
            "Self-plagiarism guard checks against your previous exports",
            "Journal submission package: manuscript + cover letter + supplementary files",
            "Pre-flight citation audit before export",
            "Custom LaTeX templates for target journals",
          ],
        },
        {
          title: "Team Workspaces with RBAC",
          description: "Real-time collaborative editing (Yjs/Hocuspocus), role-based access (Admin/Editor/Viewer), shared resource vault, Kanban, contribution analytics.",
          status: "Shipped",
          details: [
            "Yjs CRDT + Hocuspocus: live cursors, presence, ~50ms sync",
            "Roles: Admin (manage members), Editor (full edit), Viewer (read + comment)",
            "Shared vault: PDFs, citation libraries, datasets (encrypted)",
            "Kanban boards with custom fields, labels, task templates",
            "Contribution analytics → feeds Authorship Certificate",
          ],
        },
        {
          title: "Document & Task Templates",
          description: "Tiptap JSON document templates + Kanban task templates, three visibility scopes (public/user/workspace), full CRUD in Template Gallery.",
          status: "Shipped",
          details: [
            "Built-in: Research Paper (APA), Essay (MLA), Lab Report (Chicago), Grant (IEEE), Thesis (Harvard)",
            "Task templates: Research Project, Lab Protocol, Peer Review workflows",
            "Create from current document (Copy as JSON → Template Gallery)",
            "Workspace-scoped templates for team standards",
            "Use Template → creates project with content pre-loaded",
          ],
        },
      ],
    },
    {
      id: "next",
      title: "Next — In Development",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      items: [
        {
          title: "Advanced Analytics Dashboard",
          description: "Writing velocity trends, authorship contribution heatmaps, citation quality over time, collaboration network graphs.",
          status: "In Progress",
          details: [
            "Per-user writing velocity (words/hour, sessions/week)",
            "Authorship contribution heatmap by document section",
            "Citation quality trends (confidence scores over time)",
            "Collaboration network: who edits what, when",
            "Export analytics to CSV for institutional reporting",
          ],
        },
        {
          title: "Institutional SSO & Multi-Node Deployment",
          description: "SAML/OIDC SSO, multi-node registry for satellite labs, sovereign storage (EU/US/on-prem), executive reports.",
          status: "In Progress",
          details: [
            "SAML 2.0 / OIDC integration (Azure AD, Okta, Google Workspace)",
            "Multi-node: parent institution + satellite lab nodes",
            "Data sovereignty: choose region (EU GDPR, US, on-prem)",
            "Executive reports: research output, IP generation, funding alignment",
            "Admin dashboard: audit logs, member management, usage analytics",
          ],
        },
        {
          title: "Enhanced Find Papers: Citation Network Graph",
          description: "Visual citation graph (forward/backward citations), co-citation clustering, author collaboration networks.",
          status: "In Progress",
          details: [
            "Citation graph: nodes=papers, edges=citations",
            "Co-citation clustering for literature mapping",
            "Author collaboration network visualization",
            "Integration with Literature Matrix for gap analysis",
            "Export graph as GraphML/JSON for Gephi",
          ],
        },
        {
          title: "Zotero/Mendeley Bidirectional Sync v2",
          description: "Full two-way sync: changes in ColabWize push to Zotero/Mendeley, conflict resolution, collection mapping.",
          status: "In Progress",
          details: [
            "Push: new citations, annotations, tags → Zotero/Mendeley",
            "Pull: library changes → ColabWize Sources panel",
            "Conflict resolution UI for concurrent edits",
            "Collection ↔ workspace folder mapping",
            "Rate-limit handling for large libraries",
          ],
        },
      ],
    },
    {
      id: "later",
      title: "Later — Planned / Under Consideration",
      icon: Sparkles,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      items: [
        {
          title: "AI-Assisted Peer Review Workflow",
          description: "Structured review templates, AI-assisted checklist (reporting guidelines: CONSORT, PRISMA, STROBE), reviewer assignment, decision tracking.",
          status: "Planned",
          details: [
            "Review templates per journal / reporting guideline",
            "AI checks: statistics reporting, methodology completeness, citation accuracy",
            "Reviewer invitation → assignment → review → decision workflow",
            "Integration with journal submission systems (future)",
            "Anonymous/pseudonymous review modes",
          ],
        },
        {
          title: "Grant Writing Assistant",
          description: "Funder-specific templates (NIH, NSF, ERC, Horizon Europe), budget justification builder, biosketch management, compliance checking.",
          status: "Planned",
          details: [
            "Templates: NIH R01, NSF GRFP, ERC Starting Grant, Horizon Europe",
            "Budget builder with categories, justification templates",
            "Biosketch management (SciENcv compatible)",
            "Compliance checker: page limits, formatting, required sections",
            "Collaborative editing with co-PIs and admin staff",
          ],
        },
        {
          title: "Data & Code Repository Integration",
          description: "Zenodo, Figshare, Dryad, GitHub/GitLab integration for data/code deposition, DOIs, citation linking.",
          status: "Consideration",
          details: [
            "Deposit datasets/code directly from ColabWize",
            "Auto-generate data availability statements",
            "Link manuscript citations to deposited DOIs",
            "Versioned deposits with manuscript versions",
            "FAIR compliance checking",
          ],
        },
        {
          title: "Advanced LaTeX Authoring",
          description: "Overleaf-style LaTeX editing within ColabWize, live preview, biblatex/biber, journal-specific class files.",
          status: "Consideration",
          details: [
            "Split-pane: LaTeX source + PDF preview (via WASM TeX)",
            "Journal class files (Elsevier, Springer, IEEE, Nature, etc.)",
            "Biblatex/biber + CSL citation style parity",
            "Sync with Overleaf projects (import/export)",
            "Collaborative LaTeX editing via Yjs",
          ],
        },
      ],
    },
    {
      id: "not-planned",
      title: "Not Planned (Clarifications)",
      icon: GitBranch,
      color: "text-gray-600",
      bg: "bg-gray-50",
      border: "border-gray-200",
      items: [
        {
          title: "Templates Marketplace",
          clarification: "We have a built-in template system (document + task templates) with workspace scoping. Community marketplace is not planned — teams create/share templates within workspaces.",
        },
        {
          title: "Study Groups",
          clarification: "Collaboration is via Team Workspaces (RBAC, real-time editing, shared vault, analytics). No separate 'Study Groups' feature.",
        },
        {
          title: "Native iOS/Android Apps",
          clarification: "Web app is installable as PWA on all platforms. Native apps not planned — PWA provides offline caching, home-screen icon, standalone window, push notifications.",
        },
        {
          title: "AI Content Generation",
          clarification: "AI Research Assistant is explain-only (no ghostwriting). Content generation conflicts with academic integrity mission. Certificate of Authorship proves human authorship.",
        },
        {
          title: "Traditional Plagiarism Checker",
          clarification: "We provide Citation Audit (verify your citations), Certificate of Authorship (prove provenance), and AI Detection (GPTZero). We help you prove originality, not detect copied text.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-8">
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Product Roadmap</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent view of what&apos;s shipped, in development, planned, and explicitly not planned.
              Based on actual engineering work — no fictional features or made-up metrics.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {roadmapCategories.map((category) => (
          <section key={category.id} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-lg ${category.bg} flex items-center justify-center ${category.color}`}>
                <category.icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <div className="space-y-6">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border ${category.border} bg-white transition-shadow hover:shadow-md`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        {item.status && (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === "Shipped" ? "bg-green-100 text-green-700" :
                            item.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                            item.status === "Planned" ? "bg-purple-100 text-purple-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {item.status}
                          </span>
                        )}
                        {item.clarification && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                            Clarification
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">{item.description || item.clarification}</p>
                    </div>
                  </div>

                  {item.details && (
                    <div className="ml-4 space-y-2">
                      {item.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Beta Program */}
        <section className="rounded-xl p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Beta Program</h3>
                <p className="text-gray-600 mt-1">
                  Get early access to features in development (Advanced Analytics, Institutional SSO, Citation Graph).
                  Beta testers provide direct feedback to engineering and get priority support.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to="/beta-program"
                className="inline-flex items-center px-4 py-2 border border-yellow-300 rounded-lg text-yellow-800 bg-yellow-50 hover:bg-yellow-100 font-medium">
                Join Beta Program
              </Link>
              <Link
                to="/feature-request"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 font-medium">
                Request a Feature
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have thoughts on the roadmap? We read every message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="https://discord.gg/2MMSdX3Uee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#5865F2] rounded-lg text-[#5865F2] hover:bg-[#5865F2] hover:text-white font-medium">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discuss on Discord
            </Link>
            <Link
              to="/contact-support"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Email Product Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadmapPage;