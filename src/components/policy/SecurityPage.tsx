import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Lock,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle,
  User,
  Database,
  Bug,
  Server,
  Clock,
  Mail,
} from "lucide-react";

const SecurityPage = () => {
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
            <h1 className="text-3xl font-bold mb-2">Security Practices</h1>
            <p className="text-lg text-gray-600">
              How we protect your academic work and personal information
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Overview */}
        <div className="mb-12">
          <div className="bg-white border-b border-gray-200 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Security</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At ColabWize, we understand that your academic work is valuable and sensitive. We implement comprehensive
                security measures to protect your data, documents, and personal information. Security is not a feature —
                it's the foundation of our platform.
              </p>
            </div>
          </div>

          {/* Security Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-gray-100 rounded-lg w-fit mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                TLS 1.3 in transit, AES-256 at rest. Database (Supabase/PostgreSQL) and file storage (Supabase Storage)
                encrypted by default. OAuth tokens and API keys encrypted in DB.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Access Controls</h3>
              <p className="text-gray-600 text-sm">
                JWT auth with short-lived access tokens, rotated refresh tokens, bcrypt password hashing. MFA (TOTP)
                supported. Role-based access: User, Workspace Owner/Editor/Viewer, Platform Admin. Row-level security in DB.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring & Detection</h3>
              <p className="text-gray-600 text-sm">
                Structured logging (Pino), error tracking (Sentry), audit logs for sensitive actions. Rate limiting on
                all public endpoints. Automated dependency scanning. Security headers (CSP, HSTS, X-Frame-Options).
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Security Measures */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Security Measures</h2>

          <div className="space-y-8">
            {/* Encryption */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-gray-100 rounded-lg mr-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Encryption</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We use industry-standard encryption to protect your data both in transit and at rest:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">TLS 1.3 for all data in transit (API, web, WebSocket for Yjs)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">AES-256 encryption for data at rest (Supabase managed)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Secrets encrypted in database: OAuth tokens, API keys, webhook secrets</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">No secrets in logs, code, or config files (env vars only)</span>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Key className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Authentication & Access Control</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Robust authentication and authorization measures:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">JWT access tokens (15 min), rotated refresh tokens (7 days)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">bcrypt password hashing (cost factor 12)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">MFA (TOTP) via Google Authenticator / Authy / 1Password</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">OAuth 2.0: Google, Microsoft (personal, work, school)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Session management: concurrent session limits, idle timeout</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Role-based access: User, Workspace Owner/Editor/Viewer, Platform Admin</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Row-level security (RLS) in PostgreSQL for multi-tenant isolation</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Platform Admin Guard on all /admin routes (separate from user roles)</span>
                </div>
              </div>
            </div>

            {/* Monitoring */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Monitoring, Detection & Response</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Continuous security monitoring and incident response:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Structured JSON logging (Pino) with request IDs for traceability</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Error tracking via Sentry (PII scrubbed before send)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Audit logs: admin actions, auth events, data exports, deletions</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Rate limiting: express-rate-limit on all public endpoints</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Automated dependency scanning (npm audit, Dependabot)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Incident response plan: detection → containment → investigation → communication</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Penetration testing: annual third-party, continuous automated</span>
                </div>
              </div>
            </div>

            {/* Application Security */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-orange-100 rounded-lg mr-4">
                  <Bug className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Application Security</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Secure development practices and runtime protections:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Input validation: Zod schemas on all API endpoints</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Output encoding: DOMPurify for user-generated rich text (Tiptap)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">CSRF protection: SameSite cookies, CSRF tokens for state-changing ops</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">SQL injection prevention: Prisma ORM (parameterized queries only)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">XSS prevention: React auto-escaping, CSP, no dangerouslySetInnerHTML</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">File upload validation: MIME type, size limits, virus scanning (ClamAV)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Webhook verification: HMAC-SHA256 for EmailOctopus, Stripe, Lemon Squeezy</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Async route wrapper: all Express routes use asyncHandler for error safety</span>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                  <Server className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Infrastructure & Deployment</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Secure hosting and deployment pipeline:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Frontend: Vercel (edge network, DDoS protection, automatic HTTPS)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Backend: Render (private network, managed PostgreSQL, auto-deploy)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Database: Supabase (PostgreSQL, point-in-time recovery, backups)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">CI/CD: GitHub Actions with required checks (lint, typecheck, tests)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Environment separation: dev, preview, production (separate secrets)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Secrets: GitHub Environments + Vercel/Render env vars (never in repo)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Backup: Daily automated DB backups, 30-day retention, tested restores</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Node.js v22+ (LTS), dependency updates weekly via Dependabot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>GDPR:</strong> Full compliance — DPO appointed, SCCs for US transfers, rights fulfillment (access, deletion, portability)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>FERPA:</strong> Aligned practices for educational users — Student Privacy Officer, consent for disclosure, directory info controls</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>CCPA:</strong> California privacy rights honored (access, deletion, opt-out of sale — we don't sell data)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>ISO 27001:</strong> Security management aligned with ISO 27001 controls (not certified)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>SOC 2 Type II:</strong> Supabase and Render are SOC 2 Type II certified; our controls inherit</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Security Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>Annual Penetration Testing:</strong> Independent third-party firm, scope includes API, frontend, infrastructure</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>Employee Training:</strong> All staff complete annual security awareness training (phishing, data handling, incident reporting)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>Incident Response:</strong> Documented runbook, 4-hour SLA for critical, 24-hour for high, communication within 72 hours per GDPR</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>Vendor Review:</strong> Annual security assessment of all subprocessors</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" /> <strong>Bug Bounty:</strong> Private program via HackerOne (contact security@ for scope)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Best Practices for Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Lock className="h-5 w-5 text-blue-600" /> Strong Passwords</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Use unique passwords for each account (password manager recommended)</li>
                <li>• Minimum 8 chars, mixed case, number, symbol (enforced by ColabWize)</li>
                <li>• Never reuse passwords from other sites</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Key className="h-5 w-5 text-green-600" /> Multi-Factor Authentication</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Enable MFA in Settings → Security (TOTP: Google Auth, Authy, 1Password)</li>
                <li>• Save backup codes securely (offline)</li>
                <li>• Review authorized devices periodically</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Eye className="h-5 w-5 text-purple-600" /> Device Security</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Keep OS, browser, and apps updated</li>
                <li>• Use reputable antivirus/EDR</li>
                <li>• Avoid public Wi-Fi for sensitive work (or use VPN)</li>
                <li>• Lock device when away (Win+L / Cmd+Ctrl+Q)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-yellow-600" /> Phishing Awareness</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• ColabWize emails only from @colabwize.com (Resend) or @emailoctopus.com (marketing)</li>
                <li>• We never ask for password via email</li>
                <li>• Verify URLs: app.colabwize.com, docs.colabwize.com</li>
                <li>• Report suspicious messages to security@colabwize.com</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Security Incident Response</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 mb-4">In the unlikely event of a security incident, we follow a structured response:</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3"><span className="text-blue-600 font-bold">1</span></div>
                <h3 className="font-semibold mb-1">Detection</h3>
                <p className="text-gray-600 text-sm">Automated alerts (Sentry, logs) + user reports</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3"><span className="text-green-600 font-bold">2</span></div>
                <h3 className="font-semibold mb-1">Containment</h3>
                <p className="text-gray-600 text-sm">Isolate affected systems, revoke compromised tokens</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-3"><span className="text-yellow-600 font-bold">3</span></div>
                <h3 className="font-semibold mb-1">Investigation</h3>
                <p className="text-gray-600 text-sm">Root cause analysis, impact assessment, evidence preservation</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-3"><span className="text-purple-600 font-bold">4</span></div>
                <h3 className="font-semibold mb-1">Communication</h3>
                <p className="text-gray-600 text-sm">Notify affected users within 72h (GDPR), public status page</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Reporting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Report a Security Vulnerability</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Bug className="h-8 w-8 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-blue-900">Responsible Disclosure</h3>
                <p className="text-blue-800 mb-4">
                  If you believe you've found a security vulnerability, please report it responsibly:
                </p>
                <ul className="space-y-2 text-sm text-blue-800 pl-5 list-disc">
                  <li>Email <a href="mailto:security@colabwize.com" className="underline">security@colabwize.com</a> with details</li>
                  <li>Include steps to reproduce, impact assessment, and any PoC</li>
                  <li>Do not test on other users' accounts or data</li>
                  <li>We acknowledge within 48 hours, triage within 5 business days</li>
                  <li>Valid reports eligible for bug bounty (private HackerOne program)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Security Concerns?</h3>
          <p className="opacity-90 mb-4">Our security team takes all reports seriously. We'll respond within 48 hours.</p>
          <a href="mailto:security@colabwize.com" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Report Security Issue</a>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;