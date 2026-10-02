import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FolderPlus,
  FileText,
  Upload,
  Link2,
  LayoutTemplate,
  Settings,
  Search,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  Step,
  Tip,
  InfoBox,
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

const CreateProjectPage = () => {
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
            <FolderPlus className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">
              Creating a Project
            </h1>
            <p className="text-lg text-gray-600">
              Every way to create a project in ColabWize — from blank, from template,
              or by importing existing documents.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Projects are created from the <strong>Dashboard</strong> via the
            <strong>Create Project modal</strong>. There are three paths:
            <strong>Start from Scratch</strong> (blank Tiptap document),
            <strong>Use a Template</strong> (pre-structured academic layouts with
            citation style defaults), or <strong>Import</strong> (DOCX, PDF, Google
            Docs, Overleaf, Markdown, .bib/.ris files, or Zotero/Mendeley libraries).
            All paths converge in the same collaborative editor with autosave.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900">Blank Document</p>
              </div>
              <p className="text-sm text-gray-600">Clean Tiptap editor, choose citation style</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <LayoutTemplate className="h-5 w-5 text-green-600" />
                <p className="text-sm font-semibold text-gray-900">From Template</p>
              </div>
              <p className="text-sm text-gray-600">IMRaD, Essay, Lab Report, Grant, Thesis + citation style</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Upload className="h-5 w-5 text-purple-600" />
                <p className="text-sm font-semibold text-gray-900">Import</p>
              </div>
              <p className="text-sm text-gray-600">DOCX, PDF, Google Docs, Overleaf, .bib, .ris, Zotero, Mendeley</p>
            </div>
          </div>
        </section>

        {/* Step 1 — Open Create Project Modal */}
        <NumberedSection n={1} title="Open the Create Project modal">
          <p className="text-gray-700 leading-relaxed mb-4">
            From the Dashboard (<code>/dashboard</code>), click the <strong>New Project</strong>
            button (top-right, <kbd>+</kbd> icon) or the <strong>Create Project</strong> card.
            This opens the <code>CreateProjectModal</code> which is the single entry point
            for all project creation methods.
          </p>
          <Figure
            src="/images/create-project-1.png"
            alt="Dashboard with New Project button highlighted"
            caption="Create Project 1: Dashboard with New Project button opening the modal."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Modal Tabs</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><strong>Blank Document:</strong> Start with empty editor, select citation style</li>
                <li><strong>Templates:</strong> Browse built-in and workspace templates by type</li>
                <li><strong>Import:</strong> Upload file, connect cloud, or import from reference manager</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Workspace Selection</h4>
              <p className="text-sm text-gray-700">
                If you belong to workspaces, a dropdown lets you choose which workspace
                the project belongs to. Personal projects (no workspace) go to your private space.
                Workspace projects are accessible to all workspace members with Editor+ role.
              </p>
            </div>
          </div>
          <InfoBox>
            Free users can create personal projects. Team workspaces require Plus+ plan.
            Workspace membership determines who can collaborate in real-time.
          </InfoBox>
        </NumberedSection>

        {/* Step 2 — Blank Document */}
        <NumberedSection n={2} title="Create a blank document">
          <p className="text-gray-700 leading-relaxed mb-4">
            Select the <strong>Blank Document</strong> tab. Fill in the required fields:
          </p>
          <Figure
            src="/images/create-project-2.png"
            alt="Create Project modal - Blank Document tab with project title, type, citation style, workspace"
            caption="Create Project 2: Blank Document tab with all configuration options."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Required Fields</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><strong>Project Title:</strong> Descriptive name (e.g., "Smith et al. 2024 - Climate Impact Study")</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Optional Configuration</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><strong>Project Type:</strong> Research Paper, Essay, Lab Report, Grant Proposal, Thesis, Custom (sets default template structure)</li>
                <li><strong>Citation Style:</strong> APA, MLA, Chicago (Author-Date), Chicago (Notes), IEEE, Harvard, Vancouver (pre-selects style for citations)</li>
                <li><strong>Description:</strong> Brief summary shown on dashboard cards</li>
                <li><strong>Due Date:</strong> Optional deadline for tracking</li>
                <li><strong>Workspace:</strong> Personal or team workspace (if member)</li>
              </ul>
            </div>
          </div>
          <Step n={1} title="Enter a descriptive title">
            Use a title that identifies the work clearly. This appears on the dashboard,
            in workspace lists, and on exported documents.
          </Step>
          <Step n={2} title="Select citation style">
            Choose the style your target venue requires. You can change it later in the
            editor, but pre-setting it applies the correct format to auto-inserted citations.
          </Step>
          <Step n={3} title="Choose workspace (if applicable)">
            <strong>Personal:</strong> Private to you. <strong>Team Workspace:</strong> Shared with
            workspace members. Requires Plus+ plan to create.
          </Step>
          <Step n={4} title="Click Create Project">
            The modal closes, a new Tiptap document is created with your settings,
            and you're redirected to <code>/editor/:projectId</code>.
          </Step>
          <Tip>
            Project type influences the default template structure offered. "Research Paper"
            gives IMRaD headings; "Essay" gives Introduction/Body/Conclusion; "Grant Proposal"
            gives Specific Aims/Background/Approach.
          </Tip>
        </NumberedSection>

        {/* Step 3 — From Template */}
        <NumberedSection n={3} title="Create from a template">
          <p className="text-gray-700 leading-relaxed mb-4">
            Select the <strong>Templates</strong> tab. Templates are full Tiptap JSON documents
            with predefined structure, headings, placeholder text, and citation style defaults.
          </p>
          <Figure
            src="/images/create-project-3.png"
            alt="Create Project modal - Templates tab showing template cards with type, citation style, Use button"
            caption="Create Project 3: Templates tab with built-in and workspace templates."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Built-in System Templates</h4>
              <p className="text-sm text-gray-700 mb-2">Seeded on deployment, available to all users:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Research Paper (APA)</strong> — IMRaD structure</li>
                <li>• <strong>Essay / Literature Review (MLA)</strong> — Thematic sections</li>
                <li>• <strong>Lab Report (Chicago)</strong> — Methods/Results/Discussion</li>
                <li>• <strong>Grant Proposal (IEEE)</strong> — Specific Aims, Approach, Budget</li>
                <li>• <strong>Thesis / Dissertation (Harvard)</strong> — Chapter structure</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Workspace Templates</h4>
              <p className="text-sm text-gray-700 mb-2">Created by workspace admins/editors, scoped to workspace:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Lab-specific protocols, department styles, journal formats</li>
                <li>• Visible only to workspace members in the Templates tab</li>
                <li>• Created via Template Gallery (Workspace Settings → Templates)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Personal Templates</h4>
              <p className="text-sm text-gray-700">
                Saved from your own documents via Template Gallery. Visible only to you.
              </p>
            </div>
          </div>
          <Step n={1} title="Browse templates">
            Filter by type (Research Paper, Essay, etc.) or search by name.
            Each card shows: name, description, type badge, citation style badge, "Public" badge if system template.
          </Step>
          <Step n={2} title="Click Use Template">
            Opens a confirmation dialog. Auto-suggests title: <code>"{Template Name} - New Project"</code>.
            You can edit title and description before creating.
          </Step>
          <Step n={3} title="Project created">
            New project opens in editor with template content pre-loaded.
            Citation style from template applied as default.
          </Step>
          <Tip>
            You can also create templates from existing documents: in the editor,
            open Template Gallery → Create Template → paste Tiptap JSON (from "Copy as JSON" in editor menu).
          </Tip>
        </NumberedSection>

        {/* Step 4 — Import Existing Document */}
        <NumberedSection n={4} title="Import an existing document">
          <p className="text-gray-700 leading-relaxed mb-4">
            Select the <strong>Import</strong> tab. Multiple import sources are supported:
          </p>
          <Figure
            src="/images/create-project-4.png"
            alt="Create Project modal - Import tab showing upload, cloud storage, reference managers, and text import options"
            caption="Create Project 4: Import tab with all supported sources."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                File Upload
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>DOCX:</strong> Full fidelity — headings, citations, tables, images, comments</li>
                <li>• <strong>PDF:</strong> Text extraction via pdf-parse; complex layouts may need cleanup</li>
                <li>• <strong>LaTeX (.tex):</strong> Parsed to Tiptap; citations converted to internal format</li>
                <li>• <strong>Markdown (.md):</strong> CommonMark + GitHub Flavored Markdown support</li>
                <li>• <strong>Overleaf (.zip):</strong> Project archive with main.tex and assets</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Link2 className="h-5 w-5 text-green-600" />
                Cloud Storage
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Google Drive:</strong> OAuth → browse Drive → select .docx/.pdf/.tex</li>
                <li>• <strong>OneDrive:</strong> OAuth → browse OneDrive → select file</li>
                <li>• Files download → convert → create project (same as upload)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
                Reference Managers
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Zotero:</strong> OAuth → sync collections → import papers as citations</li>
                <li>• <strong>Mendeley:</strong> OAuth → sync library → import papers as citations</li>
                <li>• <strong>.bib / .ris files:</strong> Drag-drop or select → parse BibTeX/RIS → create citations</li>
                <li>• <strong>DOI / URL:</strong> Paste DOI or URL → auto-fetch metadata via CrossRef/OpenAlex</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-600" />
                Text & Other
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Plain Text:</strong> Paste → auto-detect structure (headings, paragraphs)</li>
                <li>• <strong>Google Docs:</strong> Export as DOCX from Google Docs → upload</li>
                <li>• <strong>Migration Service:</strong> Contact support for bulk workspace migrations</li>
              </ul>
            </div>
          </div>
          <Step n={1} title="Choose import source">
            Click the source card. For cloud/reference managers, you'll be prompted to
            authorize OAuth if not already connected.
          </Step>
          <Step n={2} title="Select file(s) or papers">
            Browse and pick. For Zotero/Mendeley: select collections or individual papers.
            For .bib/.ris: select file. For DOI/URL: paste and click "Fetch".
          </Step>
          <Step n={3} title="Configure project">
            Enter project title, select workspace, choose citation style. For citation imports:
            choose whether to create a new project with those citations or add to existing.
          </Step>
          <Step n={4} title="Import">
            Conversion runs server-side (Pandoc for DOCX/LaTeX/Markdown, pdf-parse for PDF,
            custom parsers for .bib/.ris). Redirects to editor on completion.
          </Step>
          <InfoBox>
            <strong>Import fidelity notes:</strong> DOCX preserves most structure. PDF extracts
            text only (no layout). LaTeX citations convert to internal format but may need
            manual verification. Overleaf imports main.tex + bibliography. Zotero/Mendeley
            import papers as searchable library entries — drag into editor to cite.
          </InfoBox>
        </NumberedSection>

        {/* Step 5 — After Creation: Editor Orientation */}
        <NumberedSection n={5} title="First steps in the editor">
          <p className="text-gray-700 leading-relaxed mb-4">
            Whichever path you took, you land in the collaborative editor. Key areas to know:
          </p>
          <Figure
            src="/images/create-project-5.png"
            alt="Editor layout annotated: left sidebar (documents, citations, sources, outline, research gaps), center editor, right sidebar (AI chat, rephrase, comments, citation confidence)"
            caption="Create Project 5: Editor layout with left/center/right panels."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Left Sidebar (Panels)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Documents:</strong> Project list, switch projects</li>
                <li>• <strong>Citation Audit:</strong> Run audit, view compliance score</li>
                <li>• <strong>Sources:</strong> Library, Zotero, Mendeley, Collections</li>
                <li>• <strong>Outline:</strong> Auto-generated from headings</li>
                <li>• <strong>Research Gaps:</strong> AI-identified gaps in literature</li>
                <li>• <strong>Search Alerts:</strong> Saved database searches with notifications</li>
                <li>• <strong>AI Research Assistant:</strong> Explain-mode research help</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5 text-green-600" />
                Center: Editor
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Slash commands: <kbd>/</kbd> → heading, citation, figure, table, callout</li>
                <li>• Toolbar: formatting, lists, code blocks, math, links</li>
                <li>• Real-time: live cursors, presence avatars, comments</li>
                <li>• Autosave: every ~2 seconds, version history</li>
                <li>• Focus Mode: hides sidebars (<kbd>Ctrl+Shift+F</kbd>)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Right Sidebar (Panels)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>AI Chat:</strong> General writing assistance</li>
                <li>• <strong>Rephrase:</strong> Rewrite selected text (academic/formal/concise)</li>
                <li>• <strong>Reality Check:</strong> Anxiety vs. reality analysis</li>
                <li>• <strong>Draft Comparison:</strong> Compare versions side-by-side</li>
                <li>• <strong>Citation Confidence:</strong> Per-citation verification score</li>
                <li>• <strong>Comments:</strong> Threaded discussions on selections</li>
                <li>• <strong>Add Citation:</strong> Search/insert from library or databases</li>
                <li>• <strong>Collaboration History:</strong> Session timeline, contributor activity</li>
              </ul>
            </div>
          </div>
        </NumberedSection>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recommended Next Steps</h2>
          <p className="text-gray-600 mb-6">
            Once your project is open, follow this sequence for a complete workflow:
          </p>
          <div className="space-y-3">
            <Link
              to="/ai-integrity"
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900">AI Research Assistant</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Get explain-mode help with literature search, methodology, writing structure.
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
                <p className="font-semibold text-gray-900">Citation Audit</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Run audit → review compliance score → auto-fix → find missing links.
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
                <p className="font-semibold text-gray-900">Find Papers</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Search 7 databases (CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ).
                </p>
              </div>
            </Link>
            <Link
              to="/integrations"
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                4
              </span>
              <div>
                <p className="font-semibold text-gray-900">Connect Zotero / Mendeley</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  OAuth sync → import collections → drag citations into editor.
                </p>
              </div>
            </Link>
            <Link
              to="/certificates"
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                5
              </span>
              <div>
                <p className="font-semibold text-gray-900">Certificate of Authorship</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Generate PDF certificate with 6 confidence dimensions, QR verification.
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
                <p className="font-semibold text-gray-900">Export</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  DOCX, PDF, LaTeX, RTF, TXT via Pandoc. Citation handling, self-plagiarism guard.
                </p>
              </div>
            </Link>
            <Link
              to="/team-workspace"
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <span className="h-7 w-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                7
              </span>
              <div>
                <p className="font-semibold text-gray-900">Invite Collaborators</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Create workspace → invite by email → assign roles (Admin/Editor/Viewer).
                </p>
              </div>
            </Link>
          </div>
        </section>

        <DocFooter
          nextTo="/citations"
          nextLabel="Citation Management"
          helpText="Stuck on import, template setup, or project configuration? We can help."
        />
      </div>
    </div>
  );
};

export default CreateProjectPage;