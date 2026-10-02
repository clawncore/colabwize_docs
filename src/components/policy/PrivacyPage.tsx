import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Mail,
  CheckCircle,
  AlertCircle,
  Database,
  Lock,
  Eye,
  Download,
  Trash2,
  User,
  Link2,
  CreditCard,
} from "lucide-react";

const PrivacyPage = () => {
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
            <Shield className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Key Principles */}
        <div className="mb-12 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Our Commitment</h3>
              <p className="text-sm text-blue-800">
                ColabWize is built for academic integrity. Your documents, citations, and research data are yours —
                we process them only to provide the features you request (citation audits, originality scans, AI detection,
                certificates, exports). We do not sell your data, use it for advertising, or train models on your content.
              </p>
            </div>
          </div>
        </div>

        {/* What We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect only what's necessary to provide our academic writing and integrity services:
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Account Information</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Name and email address (from registration or OAuth)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Institution, academic level, field of study (optional profile fields)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Profile picture (optional, uploaded by you)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> OAuth tokens for Google/Microsoft sign-in (encrypted at rest)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Documents & Content</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Documents you upload, create, or import (Tiptap JSON format)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Citations and reference library (CSL-JSON metadata)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Source integration data (reading time, highlights, notes — for authorship verification)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Exported files generated on your behalf (PDF, DOCX, LaTeX, etc.)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Usage & Analytics Data</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Feature usage: citation audits, originality scans, AI detection, paper searches, AI chat, certificates</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Subscription plan, credit balance, billing cycle dates</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Project count, document count, storage usage</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Device/browser info (for security: MFA, session management)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold">Payment Information</h3>
              </div>
              <p className="text-sm text-gray-700">
                Processed securely by <strong>Stripe</strong> (credit cards) and <strong>Lemon Squeezy</strong> (subscriptions).
                ColabWize never stores full card numbers — only last 4 digits, card brand, and expiry for display.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Link2 className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold">Integration Data (Opt-in)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Google Drive / OneDrive: OAuth tokens (scoped <code>drive.readonly</code> / <code>Files.Read</code>), file lists you choose to import</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Zotero / Mendeley: API keys + User IDs (encrypted), library items you import/export</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> You control connections in Settings → Integrations; disconnect anytime</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Core Services (Contract Performance)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Process documents for citation audits, originality scans, AI detection, rephrase suggestions</li>
                <li>• Generate Certificates of Authorship with QR verification</li>
                <li>• Run paper searches across 7 databases (CrossRef, OpenAlex, arXiv, PubMed, Semantic Scholar, IEEE, DOAJ)</li>
                <li>• Provide AI Research Assistant (explain-only mode) and AI Chat</li>
                <li>• Enable real-time collaboration via Yjs/Hocuspocus (Team Workspaces)</li>
                <li>• Export documents in multiple formats (Pandoc-based)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Account & Security (Legitimate Interest)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Authentication, session management, MFA enforcement</li>
                <li>• Abuse prevention, rate limiting, fraud detection</li>
                <li>• Service reliability monitoring and error tracking</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600" />
                Communications (Consent / Legitimate Interest)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Transactional emails: verification, password reset, billing receipts, certificate ready, limit warnings (Resend)</li>
                <li>• Marketing/newsletter emails: only with explicit opt-in (EmailOctopus), unsubscribe anytime</li>
                <li>• In-app notifications: collaboration invites, comment mentions, scan completions</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Legal & Compliance (Legal Obligation)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Respond to lawful requests (subpoenas, court orders)</li>
                <li>• FERPA compliance for educational institution users</li>
                <li>• GDPR/CCPA rights fulfillment (access, deletion, portability)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start"><Lock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Encryption in transit:</strong> TLS 1.3 for all API and web traffic</li>
              <li className="flex items-start"><Lock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Encryption at rest:</strong> AES-256 for database (PostgreSQL/Supabase) and file storage (Supabase Storage)</li>
              <li className="flex items-start"><Lock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Secrets management:</strong> OAuth tokens, API keys, webhook secrets encrypted in DB; never logged</li>
              <li className="flex items-start"><User className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Authentication:</strong> JWT access tokens (short-lived), refresh tokens (rotated), bcrypt password hashing</li>
              <li className="flex items-start"><Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>MFA:</strong> TOTP (Google Authenticator, Authy) supported, enforced for admin routes</li>
              <li className="flex items-start"><Database className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Access control:</strong> Role-based (User, Workspace Owner/Editor/Viewer, Platform Admin), row-level security in DB</li>
              <li className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <strong>Monitoring:</strong> Structured logging (Pino), error tracking (Sentry), audit logs for sensitive actions</li>
            </ul>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Data Type</th>
                  <th className="px-6 py-3 text-left font-semibold">Retention Period</th>
                  <th className="px-6 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-6 py-4">Documents & Projects</td><td className="px-6 py-4">Until you delete them</td><td className="px-6 py-4 text-sm text-gray-600">Soft-deleted → recycle bin (30 days) → permanent</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Citation Library</td><td className="px-6 py-4">Until you delete them</td><td className="px-6 py-4 text-sm text-gray-600">Per-project or global library</td></tr>
                <tr><td className="px-6 py-4">Certificates (PDF)</td><td className="px-6 py-4">Per plan: Free 7d, Plus 30d, Premium 90d, Credits: instant only</td><td className="px-6 py-4 text-sm text-gray-600">Auto-deleted after retention period; downloadable anytime before</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Source Integration Data</td><td className="px-6 py-4">Project lifetime</td><td className="px-6 py-4 text-sm text-gray-600">Reading time, highlights, notes for authorship verification</td></tr>
                <tr><td className="px-6 py-4">Usage Logs / Analytics</td><td className="px-6 py-4">13 months</td><td className="px-6 py-4 text-sm text-gray-600">Aggregated for product analytics</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Audit Logs (admin actions)</td><td className="px-6 py-4">7 years</td><td className="px-6 py-4 text-sm text-gray-600">Compliance requirement</td></tr>
                <tr><td className="px-6 py-4">Account Data (after deletion)</td><td className="px-6 py-4">30 days (recovery window)</td><td className="px-6 py-4 text-sm text-gray-600">Then permanently purged</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Payment Records (Stripe/Lemon Squeezy)</td><td className="px-6 py-4">Per processor policy (typically 7+ years)</td><td className="px-6 py-4 text-sm text-gray-600">Required for tax/compliance</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Access & Portability
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>View your data:</strong> Settings → Billing shows plan, usage, credits, cycle dates</li>
                <li>• <strong>Download Your Data:</strong> Settings → Danger Zone → "Download Your Data" exports documents, citations, profile, integrations (JSON + files)</li>
                <li>• <strong>API:</strong> <code>GET /api/user/data-export</code> initiates export; poll for completion</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-600" />
                Rectification & Deletion
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Update profile:</strong> Settings → Profile (name, institution, preferences)</li>
                <li>• <strong>Delete specific data:</strong> Delete documents, citations, projects individually</li>
                <li>• <strong>Delete account:</strong> Settings → Danger Zone → "Delete Account" (irreversible, 30-day recovery window)</li>
                <li>• <strong>Revoke integrations:</strong> Settings → Integrations → Disconnect (revokes tokens immediately)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600" />
                Marketing Opt-Out
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Unsubscribe link in every marketing email (EmailOctopus)</li>
                <li>• Settings → Notifications → toggle "Marketing emails"</li>
                <li>• Transactional emails (billing, security) cannot be disabled</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Restrict / Object to Processing
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Disable AI features individually in Settings → AI Preferences</li>
                <li>• Disable source integration tracking (authorship verification) per project</li>
                <li>• Contact <a href="mailto:privacy@colabwize.com" className="text-blue-600 underline">privacy@colabwize.com</a> for formal GDPR/CCPA requests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Subprocessors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Subprocessors (Third-Party Services)</h2>
          <p className="text-gray-600 mb-4">We use trusted subprocessors for specific functions. All have DPAs in place.</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Subprocessor</th>
                  <th className="px-6 py-3 text-left font-semibold">Purpose</th>
                  <th className="px-6 py-3 text-left font-semibold">Location</th>
                  <th className="px-6 py-3 text-left font-semibold">Data Categories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-6 py-4">Supabase (PostgreSQL, Storage, Auth)</td><td className="px-6 py-4">Primary database, file storage, authentication</td><td className="px-6 py-4">US / EU (configurable)</td><td className="px-6 py-4 text-sm">Account, documents, citations, files</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Stripe</td><td className="px-6 py-4">Payment processing (credit cards)</td><td className="px-6 py-4">US</td><td className="px-6 py-4 text-sm">Payment details (tokenized), billing email</td></tr>
                <tr><td className="px-6 py-4">Lemon Squeezy</td><td className="px-6 py-4">Subscription billing, invoicing</td><td className="px-6 py-4">US / EU</td><td className="px-6 py-4 text-sm">Subscription data, invoice history</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Resend</td><td className="px-6 py-4">Transactional email delivery</td><td className="px-6 py-4">US / EU</td><td className="px-6 py-4 text-sm">Email address, transactional content</td></tr>
                <tr><td className="px-6 py-4">EmailOctopus</td><td className="px-6 py-4">Marketing/newsletter emails (opt-in only)</td><td className="px-6 py-4">US / EU</td><td className="px-6 py-4 text-sm">Email address (consented), preferences</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Sentry</td><td className="px-6 py-4">Error tracking & performance monitoring</td><td className="px-6 py-4">US / EU</td><td className="px-6 py-4 text-sm">Error context (no PII), performance metrics</td></tr>
                <tr><td className="px-6 py-4">Vercel (Frontend) / Render (Backend)</td><td className="px-6 py-4">Hosting & CDN</td><td className="px-6 py-4">US / EU</td><td className="px-6 py-4 text-sm">Request logs, static assets</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">OpenAI / Google (Gemini) / Anthropic</td><td className="px-6 py-4">AI features (citation fix, rephrase, research assistant, detection)</td><td className="px-6 py-4">US</td><td className="px-6 py-4 text-sm">Document snippets sent for processing (not stored by providers)</td></tr>
                <tr><td className="px-6 py-4">GPTZero</td><td className="px-6 py-4">AI detection (originality scans)</td><td className="px-6 py-4">US</td><td className="px-6 py-4 text-sm">Document text for detection analysis</td></tr>
                <tr><td className="px-6 py-4">CrossRef / OpenAlex / Semantic Scholar / etc.</td><td className="px-6 py-4">Paper search & citation verification</td><td className="px-6 py-4">Global</td><td className="px-6 py-4 text-sm">Query terms (DOI, title, author)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* International Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <strong>Your data may be processed in the United States.</strong> ColabWize's primary infrastructure is hosted in the US (Vercel, Render, Supabase US regions).
                For EU/UK users: we rely on <strong>Standard Contractual Clauses (SCCs)</strong> and the <strong>EU-US Data Privacy Framework</strong> where applicable.
                You can request EU-only hosting for institutional plans — contact sales.
              </div>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600">
            ColabWize is not directed at children under 13 (or 16 in the EU/UK). We do not knowingly collect personal
            information from children. If you believe a child has provided us data, contact <a href="mailto:privacy@colabwize.com" className="text-blue-600 underline">privacy@colabwize.com</a>.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy. Material changes will be notified via:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
            <li>Email to your registered address (transactional, via Resend)</li>
            <li>In-app banner on next login</li>
            <li>Updated "Last updated" date above</li>
          </ul>
          <p className="text-gray-600 mt-4">Continued use after changes constitutes acceptance.</p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">For privacy questions, rights requests, or concerns:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:privacy@colabwize.com" className="text-blue-600 hover:underline">privacy@colabwize.com</a></div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:dpo@colabwize.com" className="text-blue-600 hover:underline">dpo@colabwize.com</a> (Data Protection Officer)</div>
              <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-blue-600" /> <a href="mailto:security@colabwize.com" className="text-blue-600 hover:underline">security@colabwize.com</a> (Security issues)</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Privacy Questions?</h3>
          <p className="opacity-90 mb-4">We're transparent about our practices. Reach out anytime.</p>
          <a href="mailto:privacy@colabwize.com" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Email Privacy Team</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;