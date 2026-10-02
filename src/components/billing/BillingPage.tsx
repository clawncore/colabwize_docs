import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  DollarSign,
  Receipt,
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Shield,
  Zap,
  BarChart3,
  Users,
  FileText,
  Clock,
  Mail,
} from "lucide-react";

const BillingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying ColabWize",
      features: [
        "3 citation audits / month",
        "3 rephrase suggestions / month",
        "25 paper searches / month",
        "5 AI chat messages / month",
        "AI detection included in audits",
        "3 projects max",
        "20,000 characters / scan",
        "Watermarked certificates (7-day retention)",
        "All export formats (PDF, DOCX, LaTeX, RTF, TXT)",
        "Join Team Workspaces (Editor/Viewer)",
      ],
      limitations: [
        "No originality scans (full document)",
        "No AI Research Assistant",
        "No Literature Matrix / Research Gaps",
        "No Advanced Analytics / Draft Comparison",
        "No Team Workspace creation",
        "No priority scanning",
        "7-day certificate retention",
      ],
      cta: "Current Plan",
      variant: "default",
    },
    {
      name: "Plus",
      price: "$5.99",
      period: "/month",
      description: "Ideal for students writing papers",
      features: [
        "25 citation audits / month",
        "25 rephrase suggestions / month",
        "10 originality scans / month",
        "100 paper searches / month",
        "50 AI chat messages / month",
        "25 AI Research Assistant queries / month",
        "25 certificates / month",
        "25 projects max",
        "80,000 characters / scan",
        "Professional certificates (30-day retention)",
        "Create Team Workspaces (Owner)",
        "All export formats + Journal submission packages",
        "Team Workspaces: real-time collab, RBAC, Kanban",
      ],
      limitations: [
        "No Advanced Analytics",
        "No Literature Matrix / Research Gaps",
        "No Draft Comparison",
        "No Priority Scanning",
      ],
      cta: "Select Plus",
      variant: "popular",
    },
    {
      name: "Premium",
      price: "$12.99",
      period: "/month",
      description: "For serious researchers & academics",
      features: [
        "100 citation audits / month",
        "100 rephrase suggestions / month",
        "100 originality scans / month",
        "200 paper searches / month",
        "100 AI chat messages / month",
        "100 AI Research Assistant queries / month",
        "100 certificates / month",
        "100 projects max",
        "200,000 characters / scan",
        "Professional certificates (90-day retention)",
        "Create Team Workspaces (Owner)",
        "All export formats + Journal packages",
        "Advanced Analytics (exclusive)",
        "Literature Review Matrix (exclusive)",
        "Research Gaps Panel (exclusive)",
        "Draft Comparison (exclusive)",
        "Priority Scanning (exclusive)",
        "Team Workspaces: full suite",
      ],
      limitations: [],
      cta: "Select Premium",
      variant: "premium",
    },
  ];

  const creditPackages = [
    { name: "Trial Pack", credits: 5, price: 1.99, perCredit: 0.398, description: "Test premium features" },
    { name: "Standard Pack", credits: 25, price: 6.99, perCredit: 0.28, description: "Most popular", popular: true },
    { name: "Power Pack", credits: 50, price: 12.99, perCredit: 0.26, description: "Best value per credit" },
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
            <h1 className="text-3xl font-bold mb-2">Billing & Plans</h1>
            <p className="text-lg text-gray-600">
              Understand our pricing, manage your subscription, and track usage
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-7xl">
        {/* Hero */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Flexible Pricing for Academic Writing</h2>
              <p className="opacity-90">
                Choose the plan that fits your workflow. All plans include core citation audit, paper search,
                and export features. Upgrade, downgrade, or cancel anytime.
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="bg-white/20 p-3 rounded-lg"><DollarSign className="h-6 w-6" /></div>
              <div className="bg-white/20 p-3 rounded-lg"><CreditCard className="h-6 w-6" /></div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-6 border ${
                  plan.variant === "popular"
                    ? "border-indigo-500 ring-2 ring-indigo-100 bg-indigo-50"
                    : plan.variant === "premium"
                    ? "border-purple-500 ring-2 ring-purple-100 bg-purple-50"
                    : "border-gray-200"
                }`}>
                {plan.variant === "popular" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                {plan.variant === "premium" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Value
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.variant === "premium" ? "text-purple-500" : plan.variant === "popular" ? "text-indigo-500" : "text-green-500"
                      }`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 line-through text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/plans"
                  className={`w-full py-2 rounded-lg font-medium text-center transition-colors ${
                    plan.variant === "popular"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : plan.variant === "premium"
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Credit Packages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Credit Packages (Pay-As-You-Go)</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            One-time purchases for occasional access to credit-gated features:
            Literature Matrix batches, Deep Paper Searches, Certificate generation, AI Research Assistant queries.
            Credits reset on your billing cycle date. Non-refundable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`border rounded-xl p-6 ${
                  pkg.popular ? "border-indigo-500 bg-indigo-50 relative" : "border-gray-200"
                }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">{pkg.credits}</div>
                  <div className="text-gray-600 text-sm">Credits</div>
                  <p className="text-sm text-gray-500 mt-1">{pkg.name}</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">${pkg.price}</div>
                  <div className="text-xs text-gray-500">${pkg.perCredit.toFixed(3)} per credit</div>
                  <p className="text-xs text-gray-500 mt-1">{pkg.description}</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Literature Matrix: {pkg.credits} batches</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Deep Paper Search: {pkg.credits} searches</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Certificates: {pkg.credits} generations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> AI Research Assistant: {pkg.credits} queries</li>
                </ul>
                <Link
                  to="/plans"
                  className={`block text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    pkg.popular ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}>
                  Purchase {pkg.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2"><AlertCircle className="h-5 w-5" /> Credit Usage Rules</h3>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• Credits supplement your subscription (plan allowances used first, then credits if auto-use ON)</li>
              <li>• Credit-only users: credits used for all credit-gated features</li>
              <li>• Auto-use credits toggle: Settings → Billing (default: ON)</li>
              <li>• Credits reset on your billing cycle date (not calendar month)</li>
              <li>• Non-refundable, no rollover beyond cycle reset</li>
            </ul>
          </div>
        </section>

        {/* Usage Limits by Plan */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Usage Limits Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Feature / Limit</th>
                  <th className="px-6 py-3 text-center font-semibold">Free</th>
                  <th className="px-6 py-3 text-center font-semibold">Plus</th>
                  <th className="px-6 py-3 text-center font-semibold">Premium</th>
                  <th className="px-6 py-3 text-center font-semibold">Credits (PAYG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-6 py-4 font-medium">Citation Audits</td><td className="px-6 py-4 text-center">3/mo</td><td className="px-6 py-4 text-center">25/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Rephrase Suggestions</td><td className="px-6 py-4 text-center">3/mo</td><td className="px-6 py-4 text-center">25/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr><td className="px-6 py-4 font-medium">Originality Scans</td><td className="px-6 py-4 text-center text-red-600 font-semibold">Not Available</td><td className="px-6 py-4 text-center">10/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">AI Detection (GPTZero)</td><td className="px-6 py-4 text-center">In audit</td><td className="px-6 py-4 text-center">In audit</td><td className="px-6 py-4 text-center">In audit</td><td className="px-6 py-4 text-center">In audit</td></tr>
                <tr><td className="px-6 py-4 font-medium">Paper Searches (7 DBs)</td><td className="px-6 py-4 text-center">25/mo</td><td className="px-6 py-4 text-center">100/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">200/mo</td><td className="px-6 py-4 text-center">1 credit (deep)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">AI Chat Messages</td><td className="px-6 py-4 text-center">5/mo</td><td className="px-6 py-4 text-center">50/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr><td className="px-6 py-4 font-medium">AI Research Assistant</td><td className="px-6 py-4 text-center text-red-600 font-semibold">Not Available</td><td className="px-6 py-4 text-center">25/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Certificates</td><td className="px-6 py-4 text-center">0/mo</td><td className="px-6 py-4 text-center">25/mo</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100/mo</td><td className="px-6 py-4 text-center">1 credit</td></tr>
                <tr><td className="px-6 py-4 font-medium">Draft Comparison</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td><td className="px-6 py-4 text-center text-red-600">✗</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Advanced Analytics</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-purple-600 font-bold">✓ Exclusive</td><td className="px-6 py-4 text-center text-red-600">✗</td></tr>
                <tr><td className="px-6 py-4 font-medium">Literature Matrix</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-purple-600 font-bold">✓ Exclusive</td><td className="px-6 py-4 text-center">1 credit/batch</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Research Gaps Panel</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-red-600">✗</td><td className="px-6 py-4 text-center text-purple-600 font-bold">✓ Exclusive</td><td className="px-6 py-4 text-center text-red-600">✗</td></tr>
                <tr><td className="px-6 py-4 font-medium">Priority Scanning</td><td className="px-6 py-4 text-center">✗</td><td className="px-6 py-4 text-center">✗</td><td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td><td className="px-6 py-4 text-center">✗</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Team Workspace Creation</td><td className="px-6 py-4 text-center">✗</td><td className="px-6 py-4 text-center text-green-600 font-bold">✓</td><td className="px-6 py-4 text-center text-green-600 font-bold">✓</td><td className="px-6 py-4 text-center">✗</td></tr>
                <tr><td className="px-6 py-4 font-medium">Max Projects</td><td className="px-6 py-4 text-center">3</td><td className="px-6 py-4 text-center">25</td><td className="px-6 py-4 text-center text-purple-600 font-bold">100</td><td className="px-6 py-4 text-center">Per credit</td></tr>
                <tr><td className="px-6 py-4 font-medium">Max Characters/Scan</td><td className="px-6 py-4 text-center">20,000</td><td className="px-6 py-4 text-center">80,000</td><td className="px-6 py-4 text-center text-purple-600 font-bold">200,000</td><td className="px-6 py-4 text-center">300,000</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Certificate Retention</td><td className="px-6 py-4 text-center">7 days</td><td className="px-6 py-4 text-center">30 days</td><td className="px-6 py-4 text-center text-purple-600 font-bold">90 days</td><td className="px-6 py-4 text-center text-red-600">Instant only</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How Billing Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How Billing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-blue-100 rounded-lg w-fit mb-4"><Calendar className="h-6 w-6 text-blue-600" /></div>
              <h3 className="font-semibold mb-2">Billing Cycle</h3>
              <p className="text-gray-600 text-sm">
                Monthly on your subscription date (not calendar 1st).
                View exact date in Settings → Billing.
                Free users: 1st of each month.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4"><Zap className="h-6 w-6 text-green-600" /></div>
              <h3 className="font-semibold mb-2">Auto-Use Credits</h3>
              <p className="text-gray-600 text-sm">
                Default: ON. Credits auto-consumed after monthly allowance exhausted.
                Toggle in Settings → Billing.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4"><Shield className="h-6 w-6 text-purple-600" /></div>
              <h3 className="font-semibold mb-2">No Refunds</h3>
              <p className="text-gray-600 text-sm">
                Digital services = immediate access. No refunds for partial use, forgotten cancellation, or change of mind.
                Rare billing errors reviewed case-by-case.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-orange-100 rounded-lg w-fit mb-4"><BarChart3 className="h-6 w-6 text-orange-600" /></div>
              <h3 className="font-semibold mb-2">Usage Tracking</h3>
              <p className="text-gray-600 text-sm">
                Real-time in dashboard. Detailed in Settings → Billing.
                Per-feature buckets: citation_audit, originality_scan, paper_search, ai_chat, certificate, ai_research.
              </p>
            </div>
          </div>
        </section>

        {/* Student Discount */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Student Discount</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg"><Users className="h-6 w-6 text-blue-600" /></div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">25% Off Plus & Premium</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Verified <code>.edu</code> email address required</li>
                  <li>• Contact <a href="mailto:support@colabwize.com" className="underline">support@colabwize.com</a> with student ID</li>
                  <li>• Applied to future billing cycles (not retroactive)</li>
                  <li>• Re-verified annually</li>
                  <li>• Available on monthly plans only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Team & Institutional Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">For Universities & Research Institutes</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited everything: projects, words, storage (1TB), AI usage",
                  "Custom templates and citation styles",
                  "Advanced analytics and institutional reporting",
                  "SSO integration (SAML/OAuth/OIDC)",
                  "Dedicated premium support and account management",
                  "FERPA/GDPR compliance-ready",
                  "Bulk user provisioning via SCIM",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-2xl font-bold text-white">Custom Pricing</div>
                <Link to="/contact-support" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-cyan-700">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">Enterprise Features</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "White-label options (custom domain, branding)",
                  "Compliance-ready (FERPA, GDPR, SOC 2 inherited)",
                  "Multi-year contract options",
                  "SLA with uptime guarantees",
                  "Custom data residency (EU/US)",
                  "Advanced admin controls & audit logs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-lg text-gray-300">Tailored solutions for your organization</div>
                <Link to="/contact-support" className="inline-flex items-center px-3 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-purple-700">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Management */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Billing Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Payment Methods", desc: "Add, update, remove credit cards", icon: <CreditCard className="h-6 w-6 text-blue-600" />, link: "/dashboard/settings/billing" },
              { title: "Billing History", desc: "View invoices, receipts, payment records", icon: <Receipt className="h-6 w-6 text-green-600" />, link: "/dashboard/settings/billing" },
              { title: "Subscription", desc: "Upgrade, downgrade, cancel, change cycle", icon: <TrendingUp className="h-6 w-6 text-purple-600" />, link: "/dashboard/settings/billing" },
              { title: "Usage Tracking", desc: "Monitor limits, credits, cycle dates", icon: <BarChart3 className="h-6 w-6 text-orange-600" />, link: "/dashboard/settings/billing" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <Link to={item.link} className="text-blue-600 hover:text-gray-700 font-medium text-sm">Manage {item.title} →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Billing FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How do I upgrade my plan?", a: "Settings → Billing → Change Plan. Upgrades take effect immediately with prorated charge. Downgrades at next cycle." },
              { q: "Can I cancel anytime?", a: "Yes. Settings → Billing → Cancel Subscription. Access continues until period ends. No early termination." },
              { q: "What payment methods?", a: "Visa, Mastercard, Amex, Discover via Stripe. Subscriptions via Lemon Squeezy. Bank transfer for annual institutional." },
              { q: "Where are my invoices?", a: "Settings → Billing → Invoice History. Also emailed via Resend. PDF download available." },
              { q: "Payment failed — what now?", a: "3 retries over 7 days. Update payment method in Settings → Billing. After final failure, cancels to Free." },
              { q: "How do credits work with my plan?", a: "Plan allowances used first. If auto-use ON (default), credits consumed after allowance exhausted. Toggle in Settings → Billing." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/troubleshooting#a-paid-feature-is-locked" className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-blue-600 mb-3"><Shield className="h-6 w-6" /></div>
              <h3 className="font-semibold">Feature Locked?</h3>
              <p className="text-sm text-gray-600 mt-1">Upgrade, buy credits, or wait for reset</p>
            </Link>
            <Link to="/troubleshooting#payment-or-upgrade-failed" className="border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:bg-red-50 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-red-600 mb-3"><AlertCircle className="h-6 w-6" /></div>
              <h3 className="font-semibold">Payment Failed?</h3>
              <p className="text-sm text-gray-600 mt-1">Retry, update card, or contact billing</p>
            </Link>
            <Link to="/contact-support" className="border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:bg-green-50 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-green-600 mb-3"><Mail className="h-6 w-6" /></div>
              <h3 className="font-semibold">Contact Support</h3>
              <p className="text-sm text-gray-600 mt-1">Billing, refunds, institutional sales</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to Choose a Plan?</h3>
          <p className="opacity-90 mb-4">Start free, upgrade when you need more. No credit card required to begin.</p>
          <div className="flex justify-center gap-4">
            <Link to="/plans" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">View Pricing & Subscribe</Link>
            <Link to="/contact-support" className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;