import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  RefreshCw,
  AlertCircle,
  TrendingUp,
  Zap,
  Calendar,
  CreditCard,
  Info,
} from "lucide-react";

const UsageLimitsPage = () => {
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
            <BarChart3 className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Usage Limits</h1>
            <p className="text-lg text-gray-600">
              Understanding scan limits, credit system, and billing cycles
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Key Concept */}
        <div className="mb-12 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Two Limit Systems</h3>
              <p className="text-sm text-blue-800">
                <strong>Subscription plans (Free/Plus/Premium):</strong> Monthly allowances that reset on your <strong>billing cycle date</strong>
                (not calendar month). Tracked in Settings → Billing.
                <br />
                <strong>Credit packages (PAYG):</strong> One-time purchases. Credits consumed per feature use.
                Also reset on billing cycle. Toggle "Auto-use credits" in Settings → Billing.
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Limits by Plan */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Monthly Allowances by Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Free</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Citation Audits</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rephrase Suggestions</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paper Searches</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Chat Messages</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Research Assistant</span>
                  <span className="font-bold text-red-600">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Originality Scans</span>
                  <span className="font-bold text-red-600">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Projects</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Characters/Scan</span>
                  <span className="font-bold">20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate Retention</span>
                  <span className="font-bold">7 days</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-indigo-500 rounded-lg p-6 bg-indigo-50">
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Plus</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Citation Audits</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rephrase Suggestions</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Originality Scans</span>
                  <span className="font-bold">10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paper Searches</span>
                  <span className="font-bold">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Chat Messages</span>
                  <span className="font-bold">50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Research Assistant</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Projects</span>
                  <span className="font-bold">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Characters/Scan</span>
                  <span className="font-bold">80,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate Retention</span>
                  <span className="font-bold">30 days</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">Premium</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Citation Audits</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rephrase Suggestions</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Originality Scans</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paper Searches</span>
                  <span className="font-bold text-purple-600">200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Chat Messages</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Research Assistant</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Projects</span>
                  <span className="font-bold text-purple-600">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Characters/Scan</span>
                  <span className="font-bold text-purple-600">200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate Retention</span>
                  <span className="font-bold text-purple-600">90 days</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
              <h3 className="text-lg font-semibold mb-3 text-orange-700 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Credit Packages (PAYG)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">All Premium Features</span>
                  <span className="font-bold">Per credit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Literature Matrix</span>
                  <span className="font-bold">1 credit/batch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deep Paper Search</span>
                  <span className="font-bold">1 credit/search</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate Generation</span>
                  <span className="font-bold">1 credit/cert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Research Assistant</span>
                  <span className="font-bold">1 credit/query</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Characters/Scan</span>
                  <span className="font-bold">300,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate Retention</span>
                  <span className="font-bold text-red-600">Instant only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Workspace Creation</span>
                  <span className="font-bold text-red-600">✗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Limits Work */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Usage Limits Work</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-gray-900">Key Rules</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>Billing Cycle Reset (not calendar month):</strong> Limits reset on your subscription
                  renewal date (e.g., if you subscribed on the 15th, limits reset on the 15th each month).
                  Check your exact reset date in Settings → Billing → Subscription Details.
                </span>
              </li>
              <li className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>Per-Feature Consumption:</strong> Each feature use consumes from its specific bucket:
                  Citation Audit uses "citation_audit", Originality Scan uses "originality_scan",
                  Paper Search uses "paper_search", AI Chat uses "ai_chat", Certificate uses "certificate".
                  They don't share a single "scan" counter.
                </span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>Plan-First, Then Credits:</strong> If you have a subscription, features consume
                  from your monthly allowance first. Only when that bucket is exhausted do credits kick in
                  (if "Auto-use credits" is enabled in Settings → Billing).
                </span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>No Rollover:</strong> Unused monthly allowances do not carry over to the next cycle.
                  Credit packages are one-time and also don't roll over beyond their billing cycle reset.
                </span>
              </li>
              <li className="flex items-start">
                <CreditCard className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>Project Limits:</strong> Free = 3 projects max, Plus = 25, Premium = 100.
                  Credits = per credit. Deleting a project frees up a slot.
                </span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <strong>Character Limits:</strong> Per-scan character caps: Free 20k, Plus 80k,
                  Premium 200k, Credits 300k. Larger documents may need chunked processing.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Access Matrix */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Feature Access by Plan</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Feature</th>
                  <th className="px-6 py-3 text-center font-semibold">Free</th>
                  <th className="px-6 py-3 text-center font-semibold">Plus</th>
                  <th className="px-6 py-3 text-center font-semibold">Premium</th>
                  <th className="px-6 py-3 text-center font-semibold">Credits (PAYG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Citation Audit</td>
                  <td className="px-6 py-4 text-center text-sm">3/mo</td>
                  <td className="px-6 py-4 text-center text-sm">25/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Rephrase Suggestions</td>
                  <td className="px-6 py-4 text-center text-sm">3/mo</td>
                  <td className="px-6 py-4 text-center text-sm">25/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Originality Scan (Full Document)</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm">10/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">AI Detection (GPTZero)</td>
                  <td className="px-6 py-4 text-center text-sm">Included in audit</td>
                  <td className="px-6 py-4 text-center text-sm">Included in audit</td>
                  <td className="px-6 py-4 text-center text-sm">Included in audit</td>
                  <td className="px-6 py-4 text-center text-sm">Included in audit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Paper Search (7 DBs)</td>
                  <td className="px-6 py-4 text-center text-sm">25/mo</td>
                  <td className="px-6 py-4 text-center text-sm">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">200/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit (deep)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">AI Chat Assistant</td>
                  <td className="px-6 py-4 text-center text-sm">5/mo</td>
                  <td className="px-6 py-4 text-center text-sm">50/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">AI Research Assistant (Explain Mode)</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm">25/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Certificate of Authorship</td>
                  <td className="px-6 py-4 text-center text-sm">0/mo</td>
                  <td className="px-6 py-4 text-center text-sm">25/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Draft Comparison</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">100/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Advanced Analytics</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">✓ Exclusive</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Literature Review Matrix</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">✓ Exclusive</td>
                  <td className="px-6 py-4 text-center text-sm">1 credit/batch</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Research Gaps Panel</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">✓ Exclusive</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Not Available</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Priority Scanning</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Advanced Citations (Auto-fix, Find Missing Link)</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-purple-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Team Workspaces (Create)</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Team Workspaces (Join as Editor/Viewer)</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-sm">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Export Formats</td>
                  <td className="px-6 py-4 text-center text-sm">All</td>
                  <td className="px-6 py-4 text-center text-sm">All</td>
                  <td className="px-6 py-4 text-center text-sm">All + Journal Packages</td>
                  <td className="px-6 py-4 text-center text-sm">All</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tracking Usage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Track Your Usage</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Dashboard Overview
              </h3>
              <p className="text-gray-600 text-sm">
                Main dashboard shows remaining monthly allowances for your current plan.
                Updates in real-time as you use features.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-green-600" />
                Billing Page (Detailed)
              </h3>
              <p className="text-gray-600 text-sm">
                Settings → Billing shows: current plan, usage per feature (used/limit),
                credit balance, billing cycle dates, payment method, invoice history.
                Powered by <code>/api/subscription/billing/overview</code>.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                In-App Warnings
              </h3>
              <p className="text-gray-600 text-sm">
                When you attempt a feature with 0 remaining allowance (and no credits/auto-use off),
                you'll see a modal: "Limit reached — upgrade, buy credits, or wait for reset."
                Does not block the editor, only the specific feature.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-purple-600" />
                Auto-Use Credits Toggle
              </h3>
              <p className="text-gray-600 text-sm">
                Settings → Billing → "Auto-use credits when plan limit reached".
                When ON: credits automatically consumed after monthly allowance exhausted.
                When OFF: feature blocks until next cycle or manual credit purchase.
                Default: ON.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens at Limit */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Happens When You Reach a Limit?</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-8 w-8 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-amber-900">Feature Blocked (Not the Editor)</h3>
                <p className="text-amber-800 mb-4">
                  You can continue writing, editing, and using other features. Only the specific
                  feature that hit its limit will be blocked.
                </p>
                <p className="text-amber-800 font-medium mb-3">Options to continue:</p>
                <ul className="space-y-2 text-amber-900 pl-5 list-disc">
                  <li>Wait for billing cycle reset (automatic)</li>
                  <li>Upgrade subscription (Plus/Premium/Institutional) — immediate</li>
                  <li>Buy credit package — immediate</li>
                  <li>Enable "Auto-use credits" if disabled — immediate (if credits available)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Packages Detail */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Credit Packages (Pay-As-You-Go)</h2>
          <p className="text-gray-600 mb-6">
            One-time purchases for occasional premium feature access. No subscription required.
            Credits consumed per use case below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Trial Pack</h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">5 credits</div>
              <div className="text-lg text-gray-600 mb-4">$1.99</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 5 Literature Matrix batches</li>
                <li>• 5 Deep paper searches</li>
                <li>• 5 Certificate generations</li>
                <li>• 5 AI Research Assistant queries</li>
              </ul>
            </div>
            <div className="border-2 border-indigo-500 rounded-xl p-6 bg-indigo-50">
              <h3 className="font-semibold text-gray-900 mb-2">Standard Pack</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-1">25 credits</div>
              <div className="text-lg text-gray-600 mb-4">$6.99</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 25 Literature Matrix batches</li>
                <li>• 25 Deep paper searches</li>
                <li>• 25 Certificate generations</li>
                <li>• 25 AI Research Assistant queries</li>
              </ul>
              <p className="text-xs text-indigo-600 mt-3">Best value for occasional use</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Power Pack</h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">50 credits</div>
              <div className="text-lg text-gray-600 mb-4">$12.99</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 50 Literature Matrix batches</li>
                <li>• 50 Deep paper searches</li>
                <li>• 50 Certificate generations</li>
                <li>• 50 AI Research Assistant queries</li>
              </ul>
              <p className="text-xs text-purple-600 mt-3">Lowest cost per credit</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              <strong>Credit Consumption Map:</strong>
              Literature Matrix (batch AI analysis of 50+ papers) = 1 credit/batch
              • Deep Paper Search (enhanced 7-DB search with credibility scoring) = 1 credit/search
              • Certificate of Authorship generation = 1 credit/certificate
              • AI Research Assistant (explain-mode query) = 1 credit/query
              • Standard citation audit, rephrase, paper search, AI chat use subscription allowances first, then credits if auto-use enabled.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white text-center">
          <h3 className="text-2xl font-semibold mb-2">Need More Access?</h3>
          <p className="opacity-90 mb-4">
            Upgrade your plan or buy credits to continue without waiting for the monthly reset.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://app.colabwize.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Pricing & Subscribe
            </a>
            <Link
              to="/plans"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
              Compare Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageLimitsPage;