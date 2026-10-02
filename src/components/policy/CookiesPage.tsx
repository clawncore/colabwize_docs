import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Cookie,
  Settings,
  Shield,
  CheckCircle,
  Eye,
  Database,
  AlertCircle,
  Link as LinkIcon,
  ExternalLink,
  Mail,
} from "lucide-react";

const CookiesPage = () => {
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
            <Cookie className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Our Approach</h3>
              <p className="text-sm text-blue-800">
                We use cookies and similar technologies only for essential
                functionality, security, and optional analytics (with consent).
                No advertising cookies. No third-party tracking for ads. You
                control everything via our cookie banner and browser settings.
              </p>
            </div>
          </div>
        </div>

        {/* What Are Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files stored on your device when you visit a
            website. They help the site remember your preferences, keep you
            signed in, and understand how the site is used. Similar technologies
            include localStorage, sessionStorage, and IndexedDB.
          </p>
          <p className="text-gray-600">
            ColabWize uses <strong>first-party cookies only</strong> (set by
            colabwize.com / app.colabwize.com / docs.colabwize.com). We do not
            allow third-party advertising cookies or cross-site tracking.
          </p>
        </section>

        {/* Cookie Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            2. Cookie Categories We Use
          </h2>

          <div className="space-y-6">
            {/* Essential */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Essential Cookies</h3>
                    <span className="text-xs text-gray-500 font-medium px-2 py-0.5 bg-gray-100 rounded">
                      Always Active
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Required for the website to function. Cannot be disabled without
                breaking core features. Set in response to your actions (login,
                form submission, privacy preferences).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Cookie Name
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Purpose
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        session_id / sid
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Maintains your authenticated session (JWT in httpOnly
                        cookie)
                      </td>
                      <td className="px-4 py-2 text-gray-500">
                        Session (15 min access token, 7 days refresh)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-mono text-gray-900">
                        csrf_token
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Prevents Cross-Site Request Forgery on state-changing
                        operations
                      </td>
                      <td className="px-4 py-2 text-gray-500">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        cookie_consent
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Stores your cookie category preferences
                        (essential/analytics)
                      </td>
                      <td className="px-4 py-2 text-gray-500">1 year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-mono text-gray-900">
                        theme_preference
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Remembers light/dark/system theme choice
                      </td>
                      <td className="px-4 py-2 text-gray-500">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        sidebar_state
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Remembers collapsed/expanded sidebar state
                      </td>
                      <td className="px-4 py-2 text-gray-500">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Database className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Analytics Cookies</h3>
                    <span className="text-xs text-gray-500 font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded">
                      Opt-In Required
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Help us understand how the Service is used so we can improve it.
                Only set after explicit consent via cookie banner. Data is
                aggregated and anonymized. You can withdraw consent anytime.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Cookie Name
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Purpose
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        _ga / _ga_*
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Google Analytics 4: distinguishes users, sessions,
                        events (anonymized IP)
                      </td>
                      <td className="px-4 py-2 text-gray-500">2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-mono text-gray-900">
                        _gid
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        GA4: session tracking
                      </td>
                      <td className="px-4 py-2 text-gray-500">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        _gat_gtag_*
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        GA4: throttle request rate
                      </td>
                      <td className="px-4 py-2 text-gray-500">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Google Analytics is configured with: IP anonymization ON, data
                sharing OFF, ads personalization OFF, user data deletion ON,
                data retention: 14 months.
              </p>
            </div>

            {/* Functionality */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Functionality Cookies</h3>
                    <span className="text-xs text-gray-500 font-medium px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                      Opt-In (via consent)
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Enable enhanced functionality and personalization. Set by us
                (not third parties). Currently we use minimal functionality
                cookies — most preferences stored in localStorage.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Cookie Name
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Purpose
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-2 font-mono text-gray-900">
                        preferences
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Editor preferences (font size, line height, auto-save
                        interval)
                      </td>
                      <td className="px-4 py-2 text-gray-500">1 year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-mono text-gray-900">
                        editor_state
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        Tiptap editor UI state (panels open, toolbar config)
                      </td>
                      <td className="px-4 py-2 text-gray-500">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Most editor preferences use localStorage (not cookies) for
                better performance and no size limits. These cookies are
                fallbacks for cross-tab sync.
              </p>
            </div>

            {/* No Advertising/Targeting */}
            <div className="border border-green-200 bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-green-900">
                  No Advertising / Targeting Cookies
                </h3>
              </div>
              <p className="text-green-800 text-sm">
                We do <strong>not</strong> use cookies for advertising,
                remarketing, or cross-site tracking. No Facebook Pixel, Google
                Ads conversion tracking, or third-party ad network cookies. If
                you see ads related to ColabWize, they are from the platform's
                own targeting (e.g., Google search ads), not from cookies we
                set.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Services (Not Cookies) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            3. Third-Party Services (Embedded Content)
          </h2>
          <p className="text-gray-600 mb-4">
            Some features embed third-party content that may set their own
            cookies. These are governed by the third party's policies.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-blue-600" /> Google Drive /
                OneDrive OAuth
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                When you connect Google Drive or OneDrive, the OAuth flow
                redirects to Google/Microsoft. They may set cookies for
                authentication. We only receive tokens via secure redirect — we
                don't access their cookies.
              </p>
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Google Cookie Policy
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Microsoft Privacy
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-orange-600" /> Zotero /
                Mendeley API
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                API key authentication — no cookies involved. Communication is
                server-to-server via HTTPS.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-purple-600" /> Payment
                Providers (Stripe / Lemon Squeezy)
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Checkout flows redirect to Stripe/Lemon Squeezy hosted pages.
                They set their own cookies for fraud prevention and session
                management.
              </p>
              <a
                href="https://stripe.com/cookies-policy/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Stripe Cookie Policy
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a
                href="https://lemonsqueezy.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Lemon Squeezy Privacy
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-red-600" /> Email Links
                (Resend / EmailOctopus)
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Links in our emails may have tracking parameters for click
                analytics (Resend/EmailOctopus). No cookies set by us.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            4. Managing Your Cookie Preferences
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" /> Cookie Consent
                Banner
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                On first visit, a banner appears allowing you to:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
                <li>Accept All (essential + analytics)</li>
                <li>Reject All (essential only)</li>
                <li>Customize (toggle analytics on/off)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Preferences stored in <code>cookie_consent</code> cookie (1
                year). Change anytime by clicking "Cookie Settings" in the
                footer or clearing site data.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-600" /> Browser Settings
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                All browsers allow you to block, delete, or manage cookies.
                Blocking essential cookies will break login and core features.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  •{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Chrome: Clear, enable, disable cookies
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Firefox: Cookie settings
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Safari: Manage cookies
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Edge: Cookies and site permissions
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-600" /> localStorage /
                sessionStorage
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                We use localStorage for: editor preferences, UI state, draft
                autosave, feature flags. These are not cookies (not sent with
                every request) but can be cleared via browser dev tools or
                "Clear site data".
              </p>
              <p className="text-gray-600 text-sm">
                To clear: DevTools → Application → Local Storage → colabwize.com
                → Right-click → Clear.
              </p>
            </div>
          </div>
        </section>

        {/* GDPR/CCPA */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            5. Your Rights (GDPR / CCPA)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" /> GDPR (EU/UK)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Consent required for analytics cookies (Art. 6(1)(a))
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to withdraw consent anytime (Art. 7(3))
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to object to processing (Art. 21)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Contact:{" "}
                  <a
                    href="mailto:dpo@colabwize.com"
                    className="text-blue-600 underline"
                  >
                    dpo@colabwize.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600" /> CCPA
                (California)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to know what personal info is collected
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to delete personal info
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to opt-out of sale (we don't sell)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right
                  to non-discrimination
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Changes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            6. Changes to This Cookie Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy to reflect changes in our practices
            or legal requirements. Material changes will be notified via:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
            <li>Updated "Last updated" date above</li>
            <li>Cookie consent banner re-prompt (if categories change)</li>
            <li>In-app notification for significant changes</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Continued use after changes constitutes acceptance of updated
            practices.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />{" "}
                <a
                  href="mailto:privacy@colabwize.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@colabwize.com
                </a>{" "}
                (Cookie/privacy questions)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />{" "}
                <a
                  href="mailto:dpo@colabwize.com"
                  className="text-blue-600 hover:underline"
                >
                  dpo@colabwize.com
                </a>{" "}
                (GDPR/cookie rights)
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">
            Manage Your Cookie Preferences
          </h3>
          <p className="opacity-90 mb-4">
            Update your consent choices anytime.
          </p>
          <button
            onClick={() => {
              // This would trigger the cookie consent banner to reappear
              if (typeof window !== "undefined") {
                localStorage.removeItem("cookie_consent");
                window.location.reload();
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            Open Cookie Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
