import { Link } from "react-router-dom";
import { ArrowLeft, Shield, User, Lock, FileText, CheckCircle, Database, Mail, Download, Trash2, Eye, Settings, AlertCircle } from "lucide-react";

const GDPRPage = () => {
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
            <h1 className="text-3xl font-bold mb-2">GDPR Compliance</h1>
            <p className="text-lg text-gray-600">
              How we comply with the General Data Protection Regulation
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">GDPR Commitment</h3>
              <p className="text-sm text-blue-800">
                ColabWize is fully committed to GDPR compliance. We process personal data lawfully, transparently, and only for the purposes
                you expect: providing academic writing and integrity tools. This page details our compliance measures, your rights, and how to exercise them.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Basis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Lawful Basis for Processing</h2>
          <p className="text-gray-600 mb-6">We process personal data under the following GDPR Article 6 lawful bases:</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Lawful Basis (Art. 6)</th>
                  <th className="px-6 py-3 text-left font-semibold">Purpose</th>
                  <th className="px-6 py-3 text-left font-semibold">Data Categories</th>
                  <th className="px-6 py-3 text-left font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4"><strong>Contract (Art. 6(1)(b))</strong></td>
                  <td className="px-6 py-4">Provide Service: citation audits, originality scans, AI detection, paper search, AI chat, certificates, export, collaboration</td>
                  <td className="px-6 py-4 text-sm">Account info, documents, citations, usage data, source integration data</td>
                  <td className="px-6 py-4 text-sm">Until account deletion + 30 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>Legitimate Interest (Art. 6(1)(f))</strong></td>
                  <td className="px-6 py-4">Security, fraud prevention, service reliability, abuse detection, product analytics (aggregated)</td>
                  <td className="px-6 py-4 text-sm">Device/browser info, IP (hashed), audit logs, error traces (PII scrubbed)</td>
                  <td className="px-6 py-4 text-sm">13 months (analytics), 7 years (audit)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>Legal Obligation (Art. 6(1)(c))</strong></td>
                  <td className="px-6 py-4">Tax/compliance records, law enforcement requests, FERPA for educational users</td>
                  <td className="px-6 py-4 text-sm">Payment records, invoice data, access logs</td>
                  <td className="px-6 py-4 text-sm">Per legal requirement (typically 7+ years)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>Consent (Art. 6(1)(a))</strong></td>
                  <td className="px-6 py-4">Marketing/newsletter emails (EmailOctopus), optional analytics cookies, third-party integrations</td>
                  <td className="px-6 py-4 text-sm">Email address, cookie preferences, OAuth tokens for integrations</td>
                  <td className="px-6 py-4 text-sm">Until withdrawal (unsubscribe, disconnect)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>Vital Interest (Art. 6(1)(d))</strong></td>
                  <td className="px-6 py-4">Account recovery, security incident response</td>
                  <td className="px-6 py-4 text-sm">Account email, MFA backup codes (encrypted)</td>
                  <td className="px-6 py-4 text-sm">Duration of incident/recovery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Your Rights Under GDPR */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Rights (Articles 15-22)</h2>
          <p className="text-gray-600 mb-6">You have the following rights. We provide self-service tools where possible; email <a href="mailto:privacy@colabwize.com" className="text-blue-600 underline">privacy@colabwize.com</a> for formal requests.</p>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <FileText className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right of Access (Art. 15)</h3>
                  <p className="text-gray-600 text-sm">Confirm if we process your data; access it and receive a copy.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Self-service:</strong> Settings → Billing shows plan, usage, credits, cycle dates</p>
                <p>• <strong>Full export:</strong> Settings → Danger Zone → "Download Your Data" (documents, citations, profile, integrations)</p>
                <p>• <strong>API:</strong> <code>GET /api/user/data-export</code> initiates export; poll for completion</p>
                <p>• <strong>Response time:</strong> Within 30 days (typically <24h for self-service)</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Lock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Rectification (Art. 16)</h3>
                  <p className="text-gray-600 text-sm">Correct inaccurate or incomplete personal data.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Self-service:</strong> Settings → Profile (name, institution, academic level, field, graduation year, preferences)</p>
                <p>• <strong>Email change:</strong> Settings → Account → "Change Email" (requires verification)</p>
                <p>• <strong>Integration data:</strong> Disconnect/reconnect in Settings → Integrations to refresh</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Trash2 className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Erasure / "Right to Be Forgotten" (Art. 17)</h3>
                  <p className="text-gray-600 text-sm">Request deletion of your personal data.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Self-service:</strong> Settings → Danger Zone → "Delete Account" (irreversible, 30-day recovery window)</p>
                <p>• <strong>Selective deletion:</strong> Delete individual documents, projects, citations, workspaces anytime</p>
                <p>• <strong>Exceptions:</strong> We may retain data required for legal obligations (tax, audit logs) or legal claims</p>
                <p>• <strong>Processed within:</strong> 30 days of verified request</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Settings className="h-6 w-6 text-purple-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Restrict Processing (Art. 18)</h3>
                  <p className="text-gray-600 text-sm">Limit how we process your data in certain circumstances.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• Disable AI features individually: Settings → AI Preferences</p>
                <p>• Disable source integration tracking (authorship verification) per project</p>
                <p>• Opt out of marketing emails: Settings → Notifications or unsubscribe link</p>
                <p>• Contact privacy@ for formal restriction requests (e.g., accuracy contested)</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Download className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Data Portability (Art. 20)</h3>
                  <p className="text-gray-600 text-sm">Receive your data in a structured, commonly used, machine-readable format.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Download Your Data</strong> exports: JSON (documents, citations, profile, settings) + original files</p>
                <p>• <strong>Export formats:</strong> Documents also exportable as DOCX, PDF, LaTeX, RTF, TXT via Export feature</p>
                <p>• <strong>Citation library:</strong> CSL-JSON export available in Sources panel</p>
                <p>• <strong>Format:</strong> Machine-readable JSON + human-readable files</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Object (Art. 21)</h3>
                  <p className="text-gray-600 text-sm">Object to processing based on legitimate interest or direct marketing.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Marketing:</strong> Unsubscribe link in every email / Settings → Notifications (absolute right)</p>
                <p>• <strong>Analytics:</strong> Disable "Usage Analytics" in Settings → Privacy</p>
                <p>• <strong>Legitimate interest:</strong> Contact privacy@ to object; we'll assess overriding grounds</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Rights Related to Automated Decision-Making (Art. 22)</h3>
                  <p className="text-gray-600 text-sm">Right not to be subject to solely automated decisions with legal/similar effect.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• ColabWize does <strong>not</strong> make solely automated decisions with legal/similar significant effect</p>
                <p>• AI features (rephrase, detection, citation fix) provide <em>suggestions</em> — you decide whether to accept</p>
                <p>• Originality/AI detection scores are <em>indicators</em>, not verdicts (see Terms §8)</p>
                <p>• Certificates reflect <em>your documented process</em>, not automated judgment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection by Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Protection by Design & Default (Art. 25)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Shield className="h-5 w-5 text-blue-600" /> By Design</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Minimal data collection: only what's needed for requested features</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Encryption by default: TLS 1.3, AES-256 at rest, secrets encrypted in DB</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Pseudonymization: IP hashing in analytics, user IDs not exposed in logs</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> No AI training on user content (contractual with OpenAI/Google/Anthropic)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Privacy impact assessments for new features</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Settings className="h-5 w-5 text-purple-600" /> By Default</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Marketing emails: opt-in only (double opt-in via EmailOctopus)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Analytics cookies: opt-in via cookie banner</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Source integration tracking: off by default per project</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Profile visibility: private by default</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Certificate retention: plan-limited, auto-delete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">International Data Transfers (Chapter V)</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <strong>Primary infrastructure is in the United States.</strong> ColabWize uses Vercel (US), Render (US), Supabase (US region by default).
                For EU/UK users, we rely on appropriate safeguards:
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Shield className="h-5 w-5 text-blue-600" /> Standard Contractual Clauses (SCCs)</h3>
              <p className="text-gray-700 text-sm mb-2">We have executed the EU Commission's 2021 SCCs (Module 2: Controller-to-Processor) with all subprocessors processing EU personal data.</p>
              <p className="text-gray-700 text-sm">UK: UK International Data Transfer Agreement (IDTA) addendum in place.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Database className="h-5 w-5 text-green-600" /> EU-US Data Privacy Framework</h3>
              <p className="text-gray-700 text-sm">Where subprocessors are certified under the EU-US DPF (e.g., certain Stripe, Vercel entities), we rely on the adequacy decision.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Lock className="h-5 w-5 text-indigo-600" /> Supplementary Measures</h3>
              <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
                <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Secrets never leave encrypted storage; no access by US authorities without legal process</li>
                <li>Minimal data transferred: only what's needed for feature delivery</li>
                <li>Organizational: DPO oversight, employee training, incident response</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Building className="h-5 w-5 text-purple-600" /> EU Hosting Option</h3>
              <p className="text-gray-700 text-sm">
                Institutional plans can request EU-only hosting (Supabase EU, Render EU, Vercel EU edge).
                Contact <a href="mailto:sales@colabwize.com" className="text-blue-600 underline">sales@colabwize.com</a> for details.
              </p>
            </div>
          </div>
        </section>

        {/* Subprocessors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Subprocessors (Art. 28)</h2>
          <p className="text-gray-600 mb-4">All subprocessors have Data Processing Agreements (DPAs) incorporating SCCs. List as of January 2025:</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Subprocessor</th>
                  <th className="px-6 py-3 text-left font-semibold">Service</th>
                  <th className="px-6 py-3 text-left font-semibold">Location</th>
                  <th className="px-6 py-3 text-left font-semibold">Data Categories</th>
                  <th className="px-6 py-3 text-left font-semibold">Safeguard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr><td className="px-6 py-4">Supabase</td><td className="px-6 py-4">PostgreSQL, Storage, Auth</td><td className="px-6 py-4">US (EU available)</td><td className="px-6 py-4">Account, documents, citations, files</td><td className="px-6 py-4">SCCs, DPF, encryption</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Stripe</td><td className="px-6 py-4">Payment processing</td><td className="px-6 py-4">US</td><td className="px-6 py-4">Payment tokens, billing email</td><td className="px-6 py-4">SCCs, DPF, PCI DSS</td></tr>
                <tr><td className="px-6 py-4">Lemon Squeezy</td><td className="px-6 py-4">Subscription billing</td><td className="px-6 py-4">US/EU</td><td className="px-6 py-4">Subscription, invoice data</td><td className="px-6 py-4">SCCs, DPF</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Resend</td><td className="px-6 py-4">Transactional email</td><td className="px-6 py-4">US/EU</td><td className="px-6 py-4">Email, transactional content</td><td className="px-6 py-4">SCCs, DPF</td></tr>
                <tr><td className="px-6 py-4">EmailOctopus</td><td className="px-6 py-4">Marketing email (opt-in)</td><td className="px-6 py-4">US/EU</td><td className="px-6 py-4">Email (consented), preferences</td><td className="px-6 py-4">SCCs, DPF</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Sentry</td><td className="px-6 py-4">Error tracking</td><td className="px-6 py-4">US/EU</td><td className="px-6 py-4">Error context (PII scrubbed)</td><td className="px-6 py-4">SCCs, DPF</td></tr>
                <tr><td className="px-6 py-4">Vercel</td><td className="px-6 py-4">Frontend hosting/CDN</td><td className="px-6 py-4">US (EU edge)</td><td className="px-6 py-4">Request logs, static assets</td><td className="px-6 py-4">SCCs, DPF</td></tr>
                <tr><td className="px-6 py-4">Render</td><td className="px-6 py-4">Backend hosting</td><td className="px-6 py-4">US</td><td className="px-6 py-4">Request logs, runtime data</td><td className="px-6 py-4">SCCs</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">OpenAI / Google / Anthropic</td><td className="px-6 py-4">AI features</td><td className="px-6 py-4">US</td><td className="px-6 py-4">Document snippets (not stored)</td><td className="px-6 py-4">SCCs, no-train contracts</td></tr>
                <tr><td className="px-6 py-4">GPTZero</td><td className="px-6 py-4">AI detection</td><td className="px-6 py-4">US</td><td className="px-6 py-4">Document text for analysis</td><td className="px-6 py-4">SCCs</td></tr>
                <tr><td className="px-6 py-4">CrossRef / OpenAlex / etc.</td><td className="px-6 py-4">Paper search APIs</td><td className="px-6 py-4">Global</td><td className="px-6 py-4">Query terms (DOI, title)</td><td className="px-6 py-4">Public APIs</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Protection Officer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Protection Officer (Art. 37)</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">We have appointed a Data Protection Officer responsible for GDPR compliance oversight:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:dpo@colabwize.com" className="text-blue-600 hover:underline font-medium">dpo@colabwize.com</a></div>
              <p className="text-gray-600 text-sm">Contact for: rights requests, DPIA questions, breach notifications, compliance inquiries.</p>
            </div>
          </div>
        </section>

        {/* Breach Notification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Breach Notification (Art. 33-34)</h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Detection:</strong> Automated monitoring (Sentry, logs) + internal reporting</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Assessment:</strong> Within 4 hours — severity, data categories affected, likely risk</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Authority Notification (Art. 33):</strong> Within 72 hours to relevant supervisory authority if risk to rights/freedoms</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Individual Notification (Art. 34):</strong> Without undue delay if high risk (direct email via Resend)</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Documentation:</strong> Breach register maintained for 7 years</li>
            </ul>
          </div>
        </section>

        {/* Records of Processing Activities (ROPA) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Records of Processing Activities (Art. 30)</h2>
          <p className="text-gray-600 mb-4">We maintain internal ROPA documenting all processing activities. Summary available on request to <a href="mailto:dpo@colabwize.com" className="text-blue-600 underline">dpo@colabwize.com</a>.</p>
        </section>

        {/* Complaints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Right to Lodge a Complaint (Art. 77)</h2>
          <p className="text-gray-600 mb-4">If you believe we have not complied with GDPR, you may lodge a complaint with a supervisory authority:</p>
          <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
            <li>Your country of residence, place of work, or where the alleged infringement occurred</li>
            <li>EU: <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">EDPB list of authorities</a></li>
            <li>UK: <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ICO (Information Commissioner's Office)</a></li>
          </ul>
          <p className="text-gray-600 mt-4">We encourage you to contact our DPO first at <a href="mailto:dpo@colabwize.com" className="text-blue-600 underline">dpo@colabwize.com</a> — we aim to resolve concerns directly.</p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:privacy@colabwize.com" className="text-blue-600 hover:underline">privacy@colabwize.com</a> (General privacy questions)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:dpo@colabwize.com" className="text-blue-600 hover:underline">dpo@colabwize.com</a> (Data Protection Officer)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:security@colabwize.com" className="text-blue-600 hover:underline">security@colabwize.com</a> (Security incidents)</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">GDPR Questions or Rights Requests?</h3>
          <p className="opacity-90 mb-4">Contact our Data Protection Officer — we respond within 30 days (typically <24h).</p>
          <a href="mailto:dpo@colabwize.com" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Contact DPO</a>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;