import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Cloud,
  BookOpen,
  Library,
  ShieldCheck,
  Search,
  FileText,
  ChevronRight,
  Link2,
  Download,
  Database,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";

const IntegrationsPage = () => {
  const integrations = [
    {
      name: "Google Drive",
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      description:
        "Connect your Google Drive to browse, search, and import your documents and PDFs directly into ColabWize.",
      features: [
        "Scoped OAuth connection (<code>drive.readonly</code>) — ColabWize can read files but never modify your Drive",
        "List and search your Drive files (documents, PDFs, spreadsheets)",
        "Import a file into a new project for editing, citation checks, and export",
        "Import a file into an existing project's file library",
        "Browse folders, filter by document type, paginated results",
        "Download files directly from Drive via proxy",
        "Connection status check with auto-reconnect guidance",
      ],
      setup: [
        "Settings → Integrations → Google Drive → Connect",
        "Authorize with Google (scopes: <code>drive.readonly</code>, <code>drive.metadata.readonly</code>)",
        "Once connected, use Import tab in Create Project modal or Sources panel",
      ],
    },
    {
      name: "OneDrive",
      icon: <Cloud className="h-8 w-8 text-sky-600" />,
      description:
        "Connect Microsoft OneDrive to bring your files into ColabWize alongside Google Drive.",
      features: [
        "Separate OAuth connection (Microsoft Graph API) — isolated from Google Drive",
        "Browse and search your OneDrive documents and PDFs",
        "Import a file into a new project for editing, citation checks, and export",
        "Import a file into an existing project's file library",
        "Folder navigation, paginated results, file type filtering",
        "Download files directly from OneDrive via proxy",
        "Connection status check with auto-reconnect guidance",
      ],
      setup: [
        "Settings → Integrations → OneDrive → Connect",
        "Authorize with Microsoft (scopes: <code>Files.Read</code>, <code>Files.Read.All</code>)",
        "Once connected, use Import tab in Create Project modal or Sources panel",
      ],
    },
    {
      name: "Zotero",
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      description:
        "Full Zotero integration: sync collections, search library, import references, export citations back to Zotero, and proxy PDF downloads.",
      features: [
        "OAuth-style connection via Zotero API Key + User ID (stored securely in DB)",
        "Fetch entire library with pagination (50 items per request)",
        "Browse and search by collection/folder",
        "Search by DOI, ISBN, or title",
        "Import up to 500 items per batch into a project's Sources library",
        "Export citations from ColabWize back to Zotero (round-trip sync)",
        "Fetch formatted citations in any CSL style (APA, MLA, Chicago, etc.)",
        "View and download PDF attachments via proxy",
        "Browse collections and fetch items by collection",
        "Create new items and notes in Zotero from ColabWize",
        "Connection status check with credential validation",
      ],
      setup: [
        "Settings → Integrations → Zotero → Connect",
        "Enter your Zotero User ID (from zotero.org/settings/keys) and API Key",
        "Test connection — validates credentials against Zotero API",
        "Once connected, use Sources panel → Zotero tab to browse and import",
      ],
    },
    {
      name: "Mendeley",
      icon: <Library className="h-8 w-8 text-emerald-600" />,
      description:
        "Import your Mendeley reference library into ColabWize. Export citations back to Mendeley for round-trip sync.",
      features: [
        "OAuth connection via Mendeley API (stored securely in DB)",
        "Fetch entire library with pagination (50 items per request)",
        "Search library by title/author",
        "Import up to 500 items per batch into a project's Sources library",
        "Export citations from ColabWize back to Mendeley (round-trip sync)",
        "Connection status check with credential validation",
      ],
      setup: [
        "Settings → Integrations → Mendeley → Connect",
        "Authorize with Mendeley (redirects to mendeley.com/oauth)",
        "Once connected, use Sources panel → Mendeley tab to browse and import",
      ],
    },
  ];

  const otherImportMethods = [
    {
      name: ".bib / .ris / .csl.json Files",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      description:
        "Drag-and-drop or select citation files to import references directly into your project's Sources library.",
      features: [
        "Supports BibTeX (.bib), RIS (.ris), CSL-JSON (.csl.json), EndNote (.enw)",
        "Parsed citations added to Sources library and available for insertion",
        "Available in Create Project → Import tab and Add Citation modal",
      ],
    },
    {
      name: "DOI / URL Import",
      icon: <Link2 className="h-8 w-8 text-indigo-600" />,
      description:
        "Paste a DOI or URL to automatically fetch metadata from CrossRef/OpenAlex and create a citation.",
      features: [
        "Real-time metadata lookup via CrossRef and OpenAlex",
        "Auto-populates citation fields (title, authors, journal, year, DOI, URL)",
        "Available in Add Citation modal and Create Project → Import tab",
      ],
    },
    {
      name: "Overleaf (.zip)",
      icon: <Database className="h-8 w-8 text-gray-600" />,
      description:
        "Import Overleaf project archives (.zip containing main.tex + assets + bibliography).",
      features: [
        "Parses main.tex, extracts bibliography (.bib), converts to Tiptap JSON",
        "Citations converted to internal format with CSL-JSON metadata",
        "Available in Create Project → Import tab → Local PC",
      ],
    },
  ];

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
            <Cloud className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Integrations</h1>
            <p className="text-lg text-gray-600">
              Connect ColabWize to the cloud storage and reference managers you
              already use. All integrations use secure OAuth or API key
              authentication — tokens stored encrypted.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Main Integrations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Cloud Storage & Reference Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3">{integration.icon}</div>
                  <h3 className="text-xl font-bold">{integration.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                <ul className="space-y-2 mb-4">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FileText className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    Setup
                  </h4>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    {integration.setup.map((step, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Import Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Other Import Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherImportMethods.map((method) => (
              <div
                key={method.name}
                className="border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3">{method.icon}</div>
                  <h3 className="text-xl font-bold">{method.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FileText className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Security & Privacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2 text-blue-900">
                Secure by Design
              </h3>
              <p className="text-blue-800 text-sm">
                Cloud connections use scoped OAuth. Google Drive uses{" "}
                <code>drive.readonly</code>, OneDrive uses{" "}
                <code>Files.Read</code> — ColabWize can read your files but
                never modify them. Zotero/Mendeley tokens stored encrypted in
                database. Tokens per connection, isolated.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <Search className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2 text-purple-900">
                Search & Import
              </h3>
              <p className="text-purple-800 text-sm">
                Browse and search connected drives, then import a document or
                PDF into a new ColabWize project for editing, citation checks,
                and export. Reference managers sync collections to your Sources
                library for in-editor citation suggestions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <ArrowUpRight className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2 text-green-900">
                Round-Trip Sync
              </h3>
              <p className="text-green-800 text-sm">
                Zotero and Mendeley support bidirectional sync: import
                references into ColabWize, then export new citations or updated
                metadata back to your reference manager. Formatted citations in
                any CSL style.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Mendeley Rate Limits
            </h3>
            <p className="text-amber-800 text-sm">
              Mendeley API has strict rate limits. Large libraries (&gt;5,000
              items) may sync incrementally over several minutes. If sync
              pauses, wait and retry — progress is preserved.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Connect an Integration</h3>
          <p className="opacity-90 mb-4">
            Open the app and connect Google Drive, OneDrive, Zotero, or Mendeley
            from your account settings.
          </p>
          <a
            href="https://app.colabwize.com/settings/integrations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Go to Settings → Integrations
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
