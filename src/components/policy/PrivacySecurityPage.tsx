import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Key,
  User,
  FileText,
  AlertTriangle,
  CheckCircle,
  Mail,
  Download,
  Trash2,
  Settings,
  Server,
  Bug,
  Clock,
  School,
  Cookie,
} from "lucide-react";

const PrivacySecurityPage = () => {
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
            <h1 className="text-3xl font-bold mb-2">
              Privacy & Security Overview
            </h1>
            <p className="text-lg text-gray-600">
              How we protect your data and respect your privacy — consolidated
              view
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Quick Summary */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Your Privacy Matters</h2>
              <p className="opacity-90">
                We're committed to protecting your academic work and personal
                information. No data selling. No advertising. Academic integrity
                tools you control.
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="bg-white/50 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="bg-white/50 p-3 rounded-lg">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-gray-100 rounded-lg w-fit mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Encryption</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• TLS 1.3 in transit</li>
                <li>• AES-256 at rest (Supabase)</li>
                <li>• Secrets encrypted in DB</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4">
                <Key className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Authentication</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• JWT (15min) + rotated refresh</li>
                <li>• bcrypt (cost 12)</li>
                <li>• MFA (TOTP) supported</li>
                <li>• OAuth: Google, Microsoft</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Access Control</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• RBAC: User/Editor/Viewer/Admin</li>
                <li>• Row-level security (PostgreSQL)</li>
                <li>• Platform Admin Guard</li>
                <li>• Session limits & timeouts</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-orange-100 rounded-lg w-fit mb-4">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Monitoring</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Structured logging (Pino)</li>
                <li>• Error tracking (Sentry, PII scrubbed)</li>
                <li>• Audit logs for sensitive actions</li>
                <li>• Rate limiting on all endpoints</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-indigo-100 rounded-lg w-fit mb-4">
                <Bug className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">App Security</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Zod validation on all APIs</li>
                <li>• DOMPurify for rich text</li>
                <li>• Prisma ORM (no SQL injection)</li>
                <li>• CSP, HSTS, X-Frame-Options</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-red-100 rounded-lg w-fit mb-4">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Infrastructure</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Vercel (frontend) + Render (backend)</li>
                <li>• Supabase (PostgreSQL, Storage)</li>
                <li>• CI/CD with required checks</li>
                <li>• Daily backups, 30-day retention</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Privacy Controls */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Privacy Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-blue-100 rounded-lg w-fit mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Data Access</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• View all your data in-app</li>
                <li>• Settings → Billing: usage, limits</li>
                <li>• Settings → Profile: personal info</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Data Portability</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Download Your Data (JSON + files)</li>
                <li>• Export: DOCX, PDF, LaTeX, RTF, TXT</li>
                <li>• CSL-JSON for citations</li>
                <li>• API: /api/user/data-export</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-red-100 rounded-lg w-fit mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Account Deletion</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Settings → Danger Zone</li>
                <li>• 30-day recovery window</li>
                <li>• Selective: delete projects, docs</li>
                <li>• Revoke integrations anytime</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Third-Party Sharing</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Integrations: opt-in, scoped OAuth</li>
                <li>• AI providers: snippets only, no training</li>
                <li>• Subprocessors: DPAs + SCCs</li>
                <li>• Marketing: opt-in only (EmailOctopus)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" /> Your Rights
              Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-800">
              <div>
                <p className="font-medium">GDPR (EU/UK)</p>
                <ul className="space-y-1 pl-4 list-disc">
                  <li>Access, Rectification, Erasure</li>
                  <li>Restrict, Portability, Object</li>
                  <li>Automated decision-making rights</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">FERPA (US Students)</p>
                <ul className="space-y-1 pl-4 list-disc">
                  <li>Inspect & Review</li>
                  <li>Request Amendment</li>
                  <li>Consent to Disclosure</li>
                  <li>File Complaint (US DOE)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">CCPA (California)</p>
                <ul className="space-y-1 pl-4 list-disc">
                  <li>Know, Delete, Opt-Out</li>
                  <li>Non-Discrimination</li>
                  <li>We don't sell data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Data Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" /> Data We Collect
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Account: name, email, OAuth tokens (encrypted)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Profile: institution, field, level (optional)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Documents: Tiptap JSON, citations, sources
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Usage: feature counts, plan, credits, storage
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Device: browser, OS (security only)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Payments: last 4, brand (Stripe/Lemon Squeezy)
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" /> How We Use Your
                Data
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Core features (contract): audits, scans, search, AI, certs,
                  export, collab
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Security (legitimate interest): auth, fraud, reliability,
                  abuse prevention
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Comms (consent/legitimate): transactional (Resend), marketing
                  opt-in (EmailOctopus)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Legal (obligation): tax, law enforcement, FERPA
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  No AI training on your content
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  No data selling or advertising
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-600" /> Protection Measures
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Encryption: TLS 1.3, AES-256, secrets encrypted
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Auth: JWT, bcrypt, MFA, OAuth, session mgmt
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Access: RBAC, RLS, Admin Guard, least privilege
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Monitoring: Pino, Sentry (PII scrubbed), audit logs
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  AppSec: Zod, DOMPurify, Prisma, CSP, rate limits
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />{" "}
                  Infra: Vercel/Render/Supabase, CI/CD, backups
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Privacy & Security Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" /> Protect Your Account
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Enable
                  MFA (Settings → Security)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Use
                  unique password (password manager)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Review
                  authorized devices periodically
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Save
                  MFA backup codes offline
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-600" /> Manage Your Privacy
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Review
                  Settings → Profile, AI Preferences
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Disable analytics cookies in banner
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Unsubscribe from marketing emails
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Disconnect unused integrations
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Export
                  data before major changes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detailed Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/privacy"
              className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Privacy Policy</p>
                  <p className="text-sm text-gray-600">
                    Full details on data collection, use, rights, subprocessors
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/security"
              className="border border-gray-200 rounded-xl p-5 hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Security Practices
                  </p>
                  <p className="text-sm text-gray-600">
                    Technical measures, compliance, incident response, bug
                    bounty
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/gdpr"
              className="border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">GDPR Compliance</p>
                  <p className="text-sm text-gray-600">
                    Lawful bases, rights, DPO, transfers, subprocessors, ROPA
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/ferpa"
              className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:bg-orange-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <School className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">
                    FERPA Compliance
                  </p>
                  <p className="text-sm text-gray-600">
                    Student rights, exceptions, institutional tools, SPO
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/cookies"
              className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Cookie Policy</p>
                  <p className="text-sm text-gray-600">
                    Cookie types, purposes, durations, management
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/terms"
              className="border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Terms of Service
                  </p>
                  <p className="text-sm text-gray-600">
                    Subscription, IP, acceptable use, liability, disputes
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Questions?</h3>
          <p className="opacity-90 mb-4">
            We're transparent about our practices. Reach out anytime.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:privacy@colabwize.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Privacy Team
            </a>
            <a
              href="mailto:security@colabwize.com"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              Security Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurityPage;
