import { Link } from "react-router-dom";
import {
  ArrowLeft,
  LayoutTemplate,
  CheckCircle,
  FileText,
  FolderOpen,
  Kanban,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  BadgeCheck,
  Globe,
  Lock,
  Users,
  Zap,
  ArrowRight,
  Search,
  Download,
  Upload,
  Tag,
  Layers,
  Settings,
  Database,
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

const TemplatesPage = () => {
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
            <LayoutTemplate className="h-16 w-16 mx-auto mb-4 text-purple-600" />
            <h1 className="text-3xl font-bold mb-2">
              Document & Task Templates
            </h1>
            <p className="text-lg text-gray-600">
              Create, manage, and reuse structured templates for research
              papers, essays, lab reports, grant proposals, and Kanban task
              boards. Templates are Tiptap JSON documents with citation style
              defaults, scoped globally, per-user, or per-workspace.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            ColabWize provides a <strong>Templates System</strong> with two
            distinct template types:
            <strong>Document Templates</strong> (Tiptap JSON content for paper
            structures) and
            <strong>Task Templates</strong> (Kanban board structures with
            labels, custom fields, and predefined tasks). Templates are managed
            in the <strong>Template Gallery</strong>
            accessible from workspace settings or during project creation.
          </p>
          <InfoBox>
            <strong>No separate "Templates Marketplace" feature exists.</strong>{" "}
            The product implements a built-in template system with CRUD
            operations, workspace scoping, and integration with project
            creation. Community-contributed templates are not a standalone
            marketplace; public templates are visible to all users.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Document Templates (Tiptap JSON)
              </h3>
              <p className="text-sm text-gray-600">
                Full Tiptap editor content as JSON. Includes citation style
                default (APA, MLA, Chicago, IEEE, Harvard), tags, description.
                Types: research-paper, essay, lab-report, grant-proposal,
                thesis, custom.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Kanban className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Task Templates (Kanban Boards)
              </h3>
              <p className="text-sm text-gray-600">
                Predefined board structures: labels (name, color), custom fields
                (type, options), task lists (title, description, status). Used
                for research workflows, lab protocols, review processes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Three Visibility Scopes
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Public</strong> (system templates, visible to all),{" "}
                <strong>User</strong>
                (personal templates, user_id set), <strong>
                  Workspace
                </strong>{" "}
                (team templates, workspace_id set). API filters by scope
                automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Plus className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Create from Current Document
              </h3>
              <p className="text-sm text-gray-600">
                In editor, save current document as template (Tiptap JSON).
                Auto-extracts citation style, structure. Available in Template
                Gallery "Create Template" dialog.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Use Template → New Project
              </h3>
              <p className="text-sm text-gray-600">
                One-click "Use Template" creates new project with template
                content pre-loaded. Formats Tiptap JSON for editor. Preserves
                citation style default. Workspace-scoped.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 mb-4">
                <Edit className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Full CRUD Management
              </h3>
              <p className="text-sm text-gray-600">
                Create, read, update, delete via Template Gallery UI. Dropdown
                menu per card: Edit, Delete. Form validates Tiptap JSON content.
                Optimistic UI updates.
              </p>
            </div>
          </div>
        </section>

        {/* Template Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Template Types & Structures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Document Template Fields
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>id</code> (UUID)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>name</code> (String)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>description</code> (String?)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>type</code> (String: "research-paper", "essay",
                  "lab-report", "grant-proposal", "thesis", "custom")
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>content</code> (JSON: Tiptap document structure)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>tags</code> (String[])
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>citation_style</code> (String: "apa", "mla", "chicago",
                  "ieee", "harvard")
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>is_public</code> (Boolean)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>user_id</code> (String? — personal templates)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>workspace_id</code> (String? — team templates)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>author_name</code> (String, default "ColabWize")
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>rating</code> (Float, default 0)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>downloads</code> (Int, default 0)
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-purple-600" />
                Task Template Fields
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>id</code> (UUID)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>name</code> / <code>template_name</code>
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>labels</code> (JSON: [&#123;name, color&#125;])
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>custom_fields</code> (JSON: [&#123;name, type,
                  options?&#125;])
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>tasks</code> (JSON: [&#123;title, description,
                  status&#125;])
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>is_template</code> (Boolean, default false)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>template_category</code> (String?)
                </div>
                <div className="bg-gray-50 p-2 rounded font-mono text-xs">
                  <code>workspace_id</code> (FK to Workspace)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            From Template Gallery to creating a project from a template.
          </p>
          <VideoPlaceholder title="Templates walkthrough" length="~2 minutes" />
        </section>

        {/* Step 1 — Template Gallery */}
        <NumberedSection n={1} title="Open the Template Gallery">
          <p className="text-gray-700 leading-relaxed mb-4">
            Access templates in two ways: from the{" "}
            <strong>Workspace Settings → Templates</strong>
            tab, or during <strong>project creation</strong> (Create Project
            modal shows available templates for the workspace). The gallery is
            the <code>TemplateGallery</code> component at{" "}
            <code>/dashboard/workspace/:workspaceId/templates</code>.
          </p>
          <Figure
            src="/images/templates-1.png"
            alt="Template Gallery showing document and task templates in card grid with Create Template button"
            caption="Templates 1: Template Gallery with document and task templates, Create Template button."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Document Templates Tab
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • Card grid: name, description, type badge, "Public" badge if
                  is_public
                </li>
                <li>
                  • Dropdown menu: Edit (pre-fills form), Delete (confirmation
                  dialog)
                </li>
                <li>
                  • "Use Template" button: opens project creation dialog with
                  template pre-selected
                </li>
                <li>• Updated date displayed</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-purple-600" />
                Task Templates Tab
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • Filtered from workspace tasks where{" "}
                  <code>is_template = true</code>
                </li>
                <li>
                  • Shows <code>template_name</code>,{" "}
                  <code>template_category</code>
                </li>
                <li>• Same actions: Edit, Delete, Use</li>
                <li>• Creates Kanban board with predefined structure</li>
              </ul>
            </div>
          </div>
          <Tip>
            Template Gallery loads both document templates (via{" "}
            <code>TemplateService.getTemplates(&#123;workspaceId&#125;)</code>)
            and task templates (via{" "}
            <code>WorkspaceTaskService.getTasks(workspaceId, true)</code>{" "}
            filtered by is_template).
          </Tip>
        </NumberedSection>

        {/* Step 2 — Creating a Document Template */}
        <NumberedSection n={2} title="Create a document template">
          <p className="text-gray-700 leading-relaxed mb-4">
            Click <strong>Create Template</strong> in the gallery. The dialog
            accepts:
          </p>
          <Figure
            src="/images/templates-2.png"
            alt="Create Template dialog with name, description, type dropdown, citation style dropdown, content textarea (JSON), visibility toggle"
            caption="Templates 2: Create Template dialog with all fields."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Required Fields
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <strong>Name:</strong> Template display name
                </li>
                <li>
                  <strong>Content:</strong> Tiptap JSON (paste from editor's
                  "Copy as JSON" or type manually)
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Optional Fields
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <strong>Description:</strong> Shown in gallery card
                </li>
                <li>
                  <strong>Type:</strong> Dropdown (research-paper, essay,
                  lab-report, grant-proposal, thesis, custom)
                </li>
                <li>
                  <strong>Citation Style:</strong> APA, MLA, Chicago, IEEE,
                  Harvard (sets default for new projects)
                </li>
                <li>
                  <strong>Visibility:</strong> Public (system) or
                  Workspace-scoped (requires workspaceId)
                </li>
                <li>
                  <strong>Tags:</strong> Array of strings for filtering
                </li>
              </ul>
            </div>
          </div>
          <Step n={1} title="Get Tiptap JSON from editor">
            Open any document in editor → click "More" menu → "Copy as JSON" →
            paste into template content field. This preserves exact structure,
            headings, citations, figures.
          </Step>
          <Step n={2} title="Set citation style default">
            Choose the citation style this template should default to. When a
            user creates a project from this template, the citation style is
            pre-selected in the editor.
          </Step>
          <Step n={3} title="Choose visibility">
            <strong>Public:</strong> Available to all users (system template).{" "}
            <strong>Workspace:</strong>
            Only members of the current workspace can see/use it. Personal
            templates (user_id only) created when no workspaceId provided.
          </Step>
          <Tip>
            Content field accepts either raw Tiptap JSON object or JSON string.
            The form auto-parses: <code>JSON.parse(content)</code> with fallback
            to string.
          </Tip>
        </NumberedSection>

        {/* Step 3 — Creating a Task Template */}
        <NumberedSection n={3} title="Create a Kanban task template">
          <p className="text-gray-700 leading-relaxed mb-4">
            Task templates are created from the Kanban board view. Open a
            workspace's Kanban board, configure columns (labels), custom fields,
            and task list, then save as template.
          </p>
          <Figure
            src="/images/templates-3.png"
            alt="Kanban board with Save as Template button, showing labels, custom fields, and predefined tasks"
            caption="Templates 3: Saving a Kanban board as a task template."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Labels (Columns)
              </h4>
              <p className="text-sm text-gray-700">
                Array of <code>&#123;name: string, color: string&#125;</code>.
                Examples: "Backlog" (gray), "Literature Review" (blue),
                "Drafting" (yellow), "Review" (orange), "Submitted" (green).
                Color codes used for column headers.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Custom Fields
              </h4>
              <p className="text-sm text-gray-700">
                Array of{" "}
                <code>
                  &#123;name: string, type: "text" | "select" | "date" |
                  "number", options?: string[]&#125;
                </code>
                . Examples: "Priority" (select: Low/Medium/High), "Due Date"
                (date), "Assignee" (select: workspace members), "Word Count"
                (number).
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Predefined Tasks
              </h4>
              <p className="text-sm text-gray-700">
                Array of{" "}
                <code>
                  &#123;title: string, description?: string, status:
                  string&#125;
                </code>
                . Status matches label names. Tasks auto-populate when template
                is used.
              </p>
            </div>
          </div>
          <InfoBox>
            Task templates stored in <code>WorkspaceTask</code> table with{" "}
            <code>is_template=true</code>. Not in <code>DocumentTemplate</code>{" "}
            table. Separate API but unified in Template Gallery UI.
          </InfoBox>
        </NumberedSection>

        {/* Step 4 — Using a Template to Create a Project */}
        <NumberedSection n={4} title="Create a project from a template">
          <p className="text-gray-700 leading-relaxed mb-4">
            Click <strong>Use Template</strong> on any template card. Opens
            dialog to name the new project, then creates it with template
            content pre-loaded.
          </p>
          <Figure
            src="/images/templates-4.png"
            alt="Use Template dialog: project title, description, workspace selection, create button"
            caption="Templates 4: Use Template dialog creating a new project from template."
          />
          <Step n={1} title="Click Use Template">
            Opens <code>isUseTemplateOpen</code> dialog with template
            pre-selected. Auto-fills suggested title:{" "}
            <code>{'"{template.name} - New Project"'}</code>.
          </Step>
          <Step n={2} title="Enter project details">
            Title (required), description (optional). Workspace pre-selected
            from current context.
          </Step>
          <Step n={3} title="Project created">
            Calls{" "}
            <code>
              documentService.createProject(title, description,
              formattedContent, "", workspaceId)
            </code>
            .<code>formatContentForTiptap</code> ensures JSON is valid Tiptap
            structure. Redirects to{" "}
            <code>/dashboard/workspace/:workspaceId/documents?project=:id</code>
            .
          </Step>
          <Tip>
            Template's <code>citation_style</code> is applied as default for the
            new project. User can change it in editor via Citation Style panel.
          </Tip>
        </NumberedSection>

        {/* Step 5 — Template Gallery in Project Creation Modal */}
        <NumberedSection
          n={5}
          title="Template selection during project creation"
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            The <code>CreateProjectModal</code> (accessible from dashboard "New
            Project") shows available templates for the selected workspace
            before creating a blank project.
          </p>
          <Figure
            src="/images/templates-5.png"
            alt="Create Project modal showing template cards with type, citation style, Use button"
            caption="Templates 5: Template selection in Create Project modal."
          />
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Template Cards Show
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Name, description, type badge</li>
                <li>• Citation style badge (APA, MLA, etc.)</li>
                <li>• "Use" button → creates project from that template</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Blank Project Option
              </h4>
              <p className="text-sm text-gray-700">
                "Start from Scratch" card always available. Creates empty Tiptap
                document with default citation style (user preference or APA).
              </p>
            </div>
          </div>
        </NumberedSection>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-600" />
                Database Schema
              </h3>
              <p className="text-gray-700 text-sm">
                <code>document_templates</code> table: id (UUID), name,
                description, type, content (JSON), tags (String[]), is_public,
                user_id (nullable), workspace_id (nullable), citation_style,
                author_name, rating, downloads, created_at, updated_at. Indexes
                on type, is_public, user_id, workspace_id.
                <code>workspace_tasks</code> table has <code>is_template</code>,{" "}
                <code>template_name</code>,<code>template_category</code>,{" "}
                <code>labels</code> (JSON), <code>custom_fields</code> (JSON),
                <code>tasks</code> (JSON) for task templates.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                API Endpoints
              </h3>
              <p className="text-gray-700 text-sm">
                <code>GET /api/templates</code> (filters: type, userId,
                workspaceId, isPublic) → returns{" "}
                <code>&#123;success: true, templates: [...]&#125;</code>.{" "}
                <code>GET /api/templates/type/:type</code>→ single template.{" "}
                <code>POST /api/templates</code> → create.{" "}
                <code>PUT /api/templates</code>
                (body includes id) → update.{" "}
                <code>DELETE /api/templates?id=:id</code> → delete. All wrapped
                in Express router with Next.js API route adapter.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-600" />
                Frontend Services
              </h3>
              <p className="text-gray-700 text-sm">
                <code>TemplateService</code> (TS wrapper) →{" "}
                <code>TemplateServiceJS</code> (JS class) →{" "}
                <code>apiClient</code>. Methods:{" "}
                <code>getTemplates(filters)</code>,
                <code>getTemplateByType(type)</code>,{" "}
                <code>getTemplateById(id)</code>,
                <code>createTemplate(data)</code>,{" "}
                <code>updateTemplate(id, data)</code>,
                <code>deleteTemplate(id)</code>. Used by TemplateGallery,
                CreateProjectModal.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-600" />
                Tiptap Content Formatting
              </h3>
              <p className="text-gray-700 text-sm">
                <code>formatContentForTiptap(template.content)</code> utility
                ensures content is valid Tiptap JSON before creating project.
                Handles both raw JSON object and JSON string. Validates{" "}
                <code>type: "doc"</code> root node with <code>content</code>
                array. Strips invalid nodes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                Workspace Scoping
              </h3>
              <p className="text-gray-700 text-sm">
                Template Gallery receives <code>workspaceId</code> prop (from
                URL param or parent). All queries filtered by{" "}
                <code>workspace_id</code>. Personal templates queried with
                <code>userId</code> (no workspace). Public templates:{" "}
                <code>is_public=true</code>
                and <code>workspace_id=null</code>. System templates seeded at
                deploy.
              </p>
            </div>
          </div>
        </section>

        {/* System Templates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Built-in System Templates</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ColabWize seeds default public templates on deployment (via seed
            scripts). These appear in every user's Template Gallery and Create
            Project modal:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Research Paper (APA)
              </h4>
              <p className="text-sm text-gray-600">
                IMRaD structure: Title, Abstract, Introduction, Methods,
                Results, Discussion, References. APA 7th edition default.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Essay / Literature Review (MLA)
              </h4>
              <p className="text-sm text-gray-600">
                Introduction, Body paragraphs with thematic sections,
                Conclusion, Works Cited. MLA 9th edition default.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-600" />
                Lab Report (Chicago)
              </h4>
              <p className="text-sm text-gray-600">
                Title, Abstract, Introduction, Materials & Methods, Results,
                Discussion, References, Appendices. Chicago author-date default.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-red-600" />
                Grant Proposal (IEEE)
              </h4>
              <p className="text-sm text-gray-600">
                Specific Aims, Background, Significance, Innovation, Approach,
                Timeline, Budget Justification, References. IEEE default.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Thesis / Dissertation (Harvard)
              </h4>
              <p className="text-sm text-gray-600">
                Chapter structure: Introduction, Literature Review, Methodology,
                Results, Discussion, Conclusion, Bibliography. Harvard default.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-indigo-600" />
                Research Project Kanban
              </h4>
              <p className="text-sm text-gray-600">
                Columns: Backlog → Literature Review → Drafting → Internal
                Review → Final Polish → Submitted. Custom fields: Priority, Due
                Date, Assignee.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-teal-600" />
                Lab Protocol Board
              </h4>
              <p className="text-sm text-gray-600">
                Columns: Protocol Design → Ethics Approval → Data Collection →
                Analysis → Manuscript Prep. Custom fields: Sample ID, Reagent,
                Instrument.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-amber-600" />
                Peer Review Workflow
              </h4>
              <p className="text-sm text-gray-600">
                Columns: Received → Assigned → Under Review → Decision →
                Completed. Custom fields: Reviewer, Decision Type
                (Accept/Revise/Reject), Deadline.
              </p>
            </div>
          </div>
        </section>

        <DocFooter
          nextTo="/citations"
          nextLabel="Citation Management"
          helpText="Questions about templates, custom structures, or workspace template management? We can help."
        />
      </div>
    </div>
  );
};

export default TemplatesPage;
