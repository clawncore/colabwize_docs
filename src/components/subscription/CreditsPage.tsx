import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  CreditCard,
  AlertCircle,
  RefreshCw,
  XCircle,
} from "lucide-react";

const CreditsPage = () => {
  const creditPackages = [
    {
      id: "credits_trial",
      credits: 5,
      price: 1.99,
      perCredit: 0.398,
      name: "Trial Pack",
      description: "Perfect for testing premium features",
    },
    {
      id: "credits_standard",
      credits: 25,
      price: 6.99,
      perCredit: 0.28,
      name: "Standard Pack",
      description: "Most popular for occasional use",
      popular: true,
    },
    {
      id: "credits_power",
      credits: 50,
      price: 12.99,
      perCredit: 0.26,
      name: "Power Pack",
      description: "Best value per credit",
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
            <Zap className="h-16 w-16 mx-auto mb-4 text-orange-600" />
            <h1 className="text-3xl font-bold mb-2">Credit Packages (Pay-As-You-Go)</h1>
            <p className="text-lg text-gray-600">
              One-time credit purchases for occasional premium feature access.
              No subscription, no recurring charges.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* How Credits Work */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Credits Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <DollarSign className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-semibold mb-2 text-orange-900">No Subscription</h3>
              <p className="text-orange-800 text-sm">
                One-time purchase. No recurring charges or commitments.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <Clock className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2 text-purple-900">Billing Cycle Reset</h3>
              <p className="text-purple-800 text-sm">
                Credits reset on your <strong>billing cycle date</strong> (not calendar month).
                Check Settings → Billing for your exact reset date.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2 text-green-900">Stack & Auto-Use</h3>
              <p className="text-green-800 text-sm">
                Buy multiple packages → credits accumulate.
                Toggle "Auto-use credits" in Settings → Billing to consume credits
                after monthly plan allowances are exhausted.
              </p>
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <strong>Important:</strong> Credits are <strong>not</strong> a separate "PAYG plan" with unlimited features.
                Credits supplement your current plan (Free/Plus/Premium) by unlocking specific premium features
                when your monthly allowance is exhausted (if auto-use enabled) or for features not in your plan.
                Credit-only users (no subscription) have access to credit-gated features only.
              </div>
            </div>
          </div>
        </div>

        {/* Credit Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Available Credit Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border rounded-xl p-6 ${
                  pkg.popular
                    ? "border-indigo-500 bg-indigo-50 relative"
                    : "border-gray-200"
                }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">{pkg.credits}</div>
                  <div className="text-gray-600 text-sm">Credits</div>
                  <p className="text-sm text-gray-500 mt-1">{pkg.name}</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    ${pkg.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    ${pkg.perCredit.toFixed(3)} per credit
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{pkg.description}</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Literature Matrix: {pkg.credits} batches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Deep Paper Search: {pkg.credits} searches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Certificates: {pkg.credits} generations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>AI Research Assistant: {pkg.credits} queries</span>
                  </li>
                </ul>
                <a
                  href="https://app.colabwize.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}>
                  Purchase {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Credit Consumption Map */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Consumes Credits</h2>
          <p className="text-gray-600 mb-6">
            Credits are consumed per-use for specific premium features. Standard features
            (citation audit, rephrase, paper search, AI chat) use your subscription allowance first,
            then credits if auto-use is enabled.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Feature</th>
                  <th className="px-6 py-3 text-center font-semibold">Credit Cost</th>
                  <th className="px-6 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Literature Review Matrix</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">1 credit / batch</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Batch AI analysis of up to 50 papers with theme extraction (Gap/Methodology/Result).
                    Premium subscribers: included in monthly allowance (100/mo).
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Deep Paper Search</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">1 credit / search</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Enhanced 7-DB search with credibility badges, citation graph data.
                    Standard paper search uses subscription allowance (25/100/200/mo).
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Certificate of Authorship</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">1 credit / certificate</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Generates PDF certificate with 6 confidence dimensions, QR verification.
                    Plus: 25/mo included. Premium: 100/mo included.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">AI Research Assistant</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">1 credit / query</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Explain-mode queries (methodology, literature search strategy, citation guidance).
                    Plus: 25/mo included. Premium: 100/mo included.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Originality Scan (Full Document)</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">1 credit / scan</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Full-document originality + AI detection.
                    Plus: 10/mo. Premium: 100/mo. Free: not available.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Citation Audit</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">0 credits (uses plan allowance)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Uses monthly citation_audit allowance. Credits only if auto-use ON and allowance exhausted.
                    Free: 3/mo. Plus: 25/mo. Premium: 100/mo.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Rephrase Suggestions</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">0 credits (uses plan allowance)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Uses monthly rephrase_suggestions allowance.
                    Free: 3/mo. Plus: 25/mo. Premium: 100/mo.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">AI Chat Assistant</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">0 credits (uses plan allowance)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Uses monthly ai_chat allowance.
                    Free: 5/mo. Plus: 50/mo. Premium: 100/mo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Credit-Only Access vs Subscription */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Credit-Only vs. Subscription + Credits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gray-600" />
                Credits Only (No Subscription)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Access to credit-gated features only (Literature Matrix, Deep Search, Certificates, AI Research Assistant, Originality Scans)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Full export formats (PDF, DOCX, LaTeX, RTF, TXT)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> No watermark on certificates</li>
                <li className="flex items-start"><XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> No monthly citation audit / rephrase / paper search / AI chat allowances</li>
                <li className="flex items-start"><XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> Cannot create Team Workspaces (requires Plus+)</li>
                <li className="flex items-start"><XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> Certificate retention: instant download only (0 days)</li>
                <li className="flex items-start"><XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> No Advanced Analytics, Draft Comparison, Research Gaps, Priority Scanning</li>
                <li className="flex items-start"><XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> 300,000 character limit per scan</li>
              </ul>
            </div>
            <div className="border border-indigo-500 rounded-xl p-6 bg-indigo-50">
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-600" />
                Subscription (Free/Plus/Premium) + Credits
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Monthly allowances for all standard features (citation audit, rephrase, paper search, AI chat, AI Research Assistant, originality scans, certificates)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Credits auto-consume (if enabled) after monthly allowance exhausted</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Team Workspaces: Plus+ can create, all can join</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Certificate retention: Free 7d, Plus 30d, Premium 90d</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Premium unlocks: Advanced Analytics, Literature Matrix, Research Gaps, Draft Comparison, Priority Scanning</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Character limits: Free 20k, Plus 80k, Premium 200k</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> Best value for regular users</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Managing Credits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Managing Your Credits</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                View Balance & History
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Settings → Billing shows: current credit balance, billing cycle reset date,
                auto-use toggle, and purchase history.
              </p>
              <p className="text-sm text-gray-500">
                API: <code>/api/subscription/credits/history</code> returns last 50 transactions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-purple-600" />
                Auto-Use Credits Toggle
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Settings → Billing → "Auto-use credits when plan limit reached".
                <strong>Default: ON.</strong>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• ON: Credits automatically used when monthly allowance hits 0</li>
                <li>• OFF: Feature blocks until next cycle or manual credit purchase</li>
                <li>• Applies per-feature (citation_audit, originality_scan, etc.)</li>
                <li>• Credit-only users: always uses credits (no plan allowance)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Billing Cycle vs Calendar Month
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Monthly allowances and credit resets happen on your <strong>subscription renewal date</strong>,
                not the 1st of the month.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Subscribed on the 15th? Resets on the 15th each month</li>
                <li>• View exact date in Settings → Billing → Subscription Details</li>
                <li>• Free users: calendar month (1st of each month)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to Buy Credits?</h3>
          <p className="opacity-90 mb-4">
            Get started with pay-as-you-go access to premium features. No subscription required.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://app.colabwize.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Purchase Credits
            </a>
            <Link
              to="/plans"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
              Compare Subscription Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;