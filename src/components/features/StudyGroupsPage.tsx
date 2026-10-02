import { Link } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle, Shield, Kanban, LayoutDashboard, FolderOpen, BarChart3, Network, Clock, Lock, PieChart, Zap, MessageSquare, FileText, Search, Eye, Cpu, Globe, ArrowRight, Plus, Activity, HelpCircle } from "lucide-react";
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

const StudyGroupsPage = () => {
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
            <Users className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Team Workspaces & Real-Time Collaboration</h1>
            <p className="text-lg text-gray-600">
              ColabWize provides collaborative academic writing through Team Workspaces with
              real-time co-editing (Yjs/Hocuspocus CRDTs), role-based access control, shared
              resource vaults, contribution analytics, and agile research workflows — all
              integrated into the editor workspace.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl mx-auto">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Team Workspaces</strong> are ColabWize's collaboration foundation. Rather than
            a separate "Study Groups" feature, collaboration is built directly into the editor
            workspace: multiple users can edit the same document simultaneously with live cursor
            tracking, conflict-free sync via Yjs CRDTs, and individual contributor attribution
            logs. Workspaces provide the organizational container for projects, members, and
            shared resources.
          </p>
          <InfoBox>
            <strong>Note:</strong> The product does not have a standalone "Study Groups" feature.
            Collaborative writing, shared resources, and team management are delivered through
            <strong>Team Workspaces</strong> (accessible at <code>/solutions/team-workspace</code>
            marketing page and via the editor at <code>/editor/:projectId</code> with workspace
            membership). This page documents the actual implemented collaboration capabilities.
          </InfoBox>
        </section>

        {/* Feature highlights */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Real-Time Co-Editing (Yjs/CRDTs)
              </h3>
              <p className="text-sm text-gray-600">
                Multiple users edit simultaneously with live cursors, selections, and presence.
                Hocuspocus server manages document state; changes propagate in ~50ms. No locking
                or merge conflicts.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Role-Based Access Control (RBAC)
              </h3>
              <p className="text-sm text-gray-600">
                Workspace roles: Admin, Editor, Viewer. Granular permissions per project.
                <code>useWorkspacePermissions</code> hook gates edit actions in editor.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <FolderOpen className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Centralized Resource Vault
              </h3>
              <p className="text-sm text-gray-600">
                Shared citation libraries, PDFs, datasets within workspace. Encrypted at rest.
                Accessible only to verified workspace members. Zotero/Mendeley sync supported.
              </p>
            </div>
          </div>
        </section>

        {/* Additional capabilities */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Contribution Analytics
              </h3>
              <p className="text-sm text-gray-600">
                Tracks editing velocity, contribution signals, research distribution. Feeds
                Authorship Certificate for fair co-authorship attribution. Powered by
                authorshipEvidence service.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Kanban className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Agile Research Workflows
              </h3>
              <p className="text-sm text-gray-600">
                Kanban boards, task management adapted for research. Bridge experimental work
                and manuscript drafting. Task assignment and progress tracking per workspace.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Comments & Discussions
              </h3>
              <p className="text-sm text-gray-600">
                Threaded comments on document selections. CommentSystem panel in editor.
                Real-time updates via Hocuspocus awareness protocol.
              </p>
            </div>
          </div>
        </section>

        {/* Additional collaboration features */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Collaboration History
              </h3>
              <p className="text-sm text-gray-600">
                CollaborationHistoryPanel shows session timeline, contributor activity,
                edit trails. Integrates with authorship evidence for audit trail.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Live Presence & Awareness
              </h3>
              <p className="text-sm text-gray-600">
                See who's online, their cursor position, current selection. Awareness
                protocol broadcasts user state without blocking edits.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Shared Citation Discovery
              </h3>
              <p className="text-sm text-gray-600">
                Team members add papers to workspace Sources panel. Papers sync to research
                library for reuse. "Find Missing Link" auto-populates from citation gaps.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            Real-time collaboration, workspace management, and team features in action.
          </p>
          <VideoPlaceholder title="Team Workspace walkthrough" length="~3 minutes" />
        </section>

        {/* Step 1 — Creating/Joining a Workspace */}
        <NumberedSection n={1} title="Create or join a Team Workspace">
          <p className="text-gray-700 leading-relaxed mb-4">
            Workspaces are created from the dashboard or during project creation. Navigate to
            <code>/solutions/team-workspace</code> for the marketing overview, or use the
            "New Project" modal which includes a workspace selector.
          </p>
          <Figure
            src="/images/team-workspace-1.png"
            alt="Workspace creation dialog and team workspace dashboard"
            caption="Team Workspace 1: Creating a workspace and inviting members."
          />
          <Step n={1} title="Create a workspace">
            From the dashboard, click "New Workspace" or during project creation, select
            "Create new workspace". Enter workspace name, description, and choose plan tier.
          </Step>
          <Step n={2} title="Invite team members">
            Add collaborators by email or shareable invite link. Assign roles: Admin (full
            control), Editor (edit projects), Viewer (read-only). Members receive email
            invitation with magic link.
          </Step>
          <Step n={3} title="Add projects to workspace">
            Create new projects within the workspace or move existing projects in. All
            workspace members with Editor+ role can access and collaborate on workspace projects.
          </Step>
          <Tip>
            Workspace membership is checked via <code>workspace_id</code> on projects. The
            <code>useWorkspacePermissions</code> hook resolves <code>canEdit</code> based on
            user's role in that workspace.
          </Tip>
        </NumberedSection>

        {/* Step 2 — Real-Time Collaborative Editing */}
        <NumberedSection n={2} title="Collaborate in real-time on documents">
          <p className="text-gray-700 leading-relaxed mb-4">
            Open a workspace project in the editor (<code>/editor/:projectId</code>). The
            DocumentEditor component connects to Hocuspocus WebSocket for real-time sync.
          </p>
          <Figure
            src="/images/team-workspace-2.png"
            alt="Editor with multiple live cursors, presence avatars, and collaboration indicators"
            caption="Team Workspace 2: Real-time co-editing with live cursors and presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-blue-600" />
                Yjs CRDT Engine
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Conflict-free replicated data type</li>
                <li>• Automatic merge of concurrent edits</li>
                <li>• Offline-first, syncs on reconnect</li>
                <li>• ~50ms propagation latency</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Live Presence
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Colored cursors with user names</li>
                <li>• Selection highlights per user</li>
                <li>• Avatar stack in toolbar</li>
                <li>• "User X is editing" indicators</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Comments & Threads
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Highlight text → add comment</li>
                <li>• Threaded replies</li>
                <li>• Resolve/reopen status</li>
                <li>• @mentions notify via email</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Permission Gating
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Viewer: read-only, can comment</li>
                <li>• Editor: full edit, add citations</li>
                <li>• Admin: manage members, delete</li>
                <li>• Enforced client + server side</li>
              </ul>
            </div>
          </div>
          <InfoBox>
            The editor connects to Hocuspocus at <code>wss://api.colabwize.com/hocuspocus</code>
            (or configured endpoint). Document state persists in PostgreSQL via y-socket.io
            provider. Authorship evidence (server-observed edits) recorded automatically for
            certificates.
          </InfoBox>
        </NumberedSection>

        {/* Step 3 — Workspace Resource Management */}
        <NumberedSection n={3} title="Manage shared resources and workflows">
          <p className="text-gray-700 leading-relaxed mb-4">
            Team Workspaces include shared resource vaults and agile workflow tools accessible
            from the workspace dashboard.
          </p>
          <Figure
            src="/images/team-workspace-3.png"
            alt="Workspace dashboard showing resource vault, Kanban board, contribution analytics"
            caption="Team Workspace 3: Workspace dashboard with resource vault, Kanban, and analytics."
          />
          <div className="space-y-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FolderOpen className="h-5 w-5 text-blue-600" />
                Resource Vault
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Shared PDF library with annotations</li>
                <li>• Collective citation library (Zotero/Mendeley sync)</li>
                <li>• Dataset storage with versioning</li>
                <li>• Encrypted at rest, access-logged</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Kanban className="h-5 w-5 text-blue-600" />
                Kanban & Task Management
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Research-ready columns: Backlog → Literature → Drafting → Review → Submitted</li>
                <li>• Task assignment to workspace members</li>
                <li>• Due dates, labels, checklists</li>
                <li>• Links to editor documents</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Contribution Analytics
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Per-member editing velocity</li>
                <li>• Research distribution heatmap</li>
                <li>• Co-authorship readiness score</li>
                <li>• Exports to Authorship Certificate</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-blue-600" />
                Strategic Project Mapping
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Portfolio timeline view</li>
                <li>• Milestone tracking per project</li>
                <li>• Bottleneck identification</li>
                <li>• Health indicators (activity, citations, collaboration)</li>
              </ul>
            </div>
          </div>
        </NumberedSection>

        {/* Step 4 — Institutional/Enterprise Features */}
        <NumberedSection n={4} title="Institutional deployment and global architecture">
          <p className="text-gray-700 leading-relaxed mb-4">
            For universities and research institutions, Team Workspaces support multi-node
            deployments with data sovereignty controls.
          </p>
          <Figure
            src="/images/team-workspace-4.png"
            alt="Global architecture diagram showing multi-node registry, real-time sync, sovereign storage"
            caption="Team Workspace 4: Institutional architecture with multi-node registry and sovereign storage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Network className="h-5 w-5 text-purple-600" />
                Multi-Node Registry
              </h4>
              <p className="text-sm text-gray-700">
                Manage multiple satellite labs/departments from a single administrative parent
                node. Each node inherits policies but can have local overrides.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Real-Time Global Sync
              </h4>
              <p className="text-sm text-gray-700">
                Document updates propagate across global network in ≤50ms. Hocuspocus cluster
                with regional edges for low-latency collaboration across continents.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-600" />
                Sovereign Storage
              </h4>
              <p className="text-sm text-gray-700">
                Choose data jurisdiction: EU (GDPR), US, or on-premise. Data never leaves
                chosen region. Compatible with institutional IRB/ethics requirements.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                Executive Reports
              </h4>
              <p className="text-sm text-gray-700">
                Institutional analytics: research output, IP generation, collaboration
                networks, funding alignment. Scheduled delivery to leadership.
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
                <Cpu className="h-5 w-5 text-indigo-600" />
                Real-Time Sync Stack
              </h3>
              <p className="text-gray-700 text-sm">
                <strong>Yjs</strong> CRDT library (client) + <strong>Hocuspocus</strong> server
                (WebSocket + y-socket.io provider) + <strong>PostgreSQL</strong> persistence
                (y-prosemirror for Tiptap). Awareness protocol for presence. Authorship evidence
                captured server-side via <code>authorshipEvidenceService.recordServerObservedEdit</code>.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Workspace Permissions Model
              </h3>
              <p className="text-gray-700 text-sm">
                Prisma models: <code>Workspace</code>, <code>WorkspaceMember</code> (role enum:
                ADMIN, EDITOR, VIEWER), <code>Project.workspace_id</code> FK.
                <code>useWorkspacePermissions(workspaceId)</code> hook fetches membership and
                computes <code>canEdit</code>, <code>canManageMembers</code>, <code>canDelete</code>.
                Checked in DocumentEditor, API routes (<code>/api/workspaces/*</code>).
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                Comments System
              </h3>
              <p className="text-gray-700 text-sm">
                <code>CommentSystem</code> panel in right sidebar. Comments anchored to
                <code>blockId</code> in Tiptap document. Real-time via Hocuspocus awareness
                (not Yjs doc) for low latency. Threads stored in <code>Comment</code> table with
                <code>thread_id</code> for replies. Email notifications via Resend transactional.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-indigo-600" />
                Authorship Evidence Integration
              </h3>
              <p className="text-gray-700 text-sm">
                Every server-observed edit (Hocuspocus commit) creates <code>authorshipEvidence</code>
                with strength="strong". Client telemetry (keystrokes, sessions) creates
                strength="weak" evidence. Rebuilt into <code>authorshipContribution</code>
                per-user per-block. Feeds Certificate of Authorship and Contribution Analytics.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5 text-indigo-600" />
                Multi-Region Deployment
              </h3>
              <p className="text-gray-700 text-sm">
                Hocuspocus can run as clustered deployment with Redis pub/sub for cross-node
                awareness. Render/Cloud Run for regional edges. PostgreSQL read replicas for
                local reads. Workspace data partitioned by <code>workspace_id</code> for
                data sovereignty compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Plan Availability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Collaboration Features by Plan</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 font-semibold text-gray-900">Feature</th>
                  <th className="p-3 font-semibold text-gray-900">Free</th>
                  <th className="p-3 font-semibold text-gray-900">Plus</th>
                  <th className="p-3 font-semibold text-gray-900">Researcher</th>
                  <th className="p-3 font-semibold text-gray-900">Institutional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 text-gray-700">Real-time co-editing (Yjs)</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">Workspace creation</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">RBAC roles (Admin/Editor/Viewer)</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">Shared resource vault</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Kanban & task management</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-yellow-600">Limited</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">Contribution analytics</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Multi-node / sovereign storage</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Free users can <strong>join</strong> workspaces as Viewer/Editor if invited by a Plus+
            member, but cannot create their own workspaces.
          </p>
        </section>

        <DocFooter
          nextTo="/templates"
          nextLabel="Next: Document Templates"
          helpText="Questions about team workspaces, real-time collaboration, or institutional deployment? We can help."
        />
      </div>
    </div>
  );
};

export default StudyGroupsPage;