import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  XCircle,
  TrendingUp,
  Users,
  CreditCard,
  Search,
  FileText,
  Brain,
  Award,
  Download,
  Shield,
  Crown,
} from "lucide-react";

const SubscriptionPlansPage = () => {
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
            <CreditCard className="h-16 w-16 mx-auto mb-4 text-indigo-600" />
            <h1 className="text-3xl font-bold mb-2">Subscription Plans</h1>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your academic writing needs. All plans include the core editor
              with real-time autosave, collaborative editing, and citation tools.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Plan Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 citation audits/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 rephrase suggestions/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 paper searches/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>5 AI chat messages/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 projects max</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>20,000 character limit per scan</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Export: PDF, DOCX, LaTeX, RTF, TXT</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Certificate of Authorship (watermarked, 7-day retention)</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No AI Research Assistant (explain mode)</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No originality scans</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No advanced analytics / research gaps</span>
              </li>
            </ul>
          </div>

          {/* Plus Plan */}
          <div className="border-2 border-indigo-500 rounded-xl p-6 bg-indigo-50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Plus</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$5.99</span>
              <span className="text-gray-600">/month</span>
              <p className="text-xs text-gray-500 mt-1">$57.50/year (Save 20%)</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 citation audits/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 rephrase suggestions/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>10 originality scans/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>100 paper searches/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>50 AI chat messages/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 AI Research Assistant (explain mode) queries/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 certificates/month</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>25 projects max</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>80,000 character limit per scan</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Export: all formats (PDF, DOCX, LaTeX, RTF, TXT)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Certificate of Authorship (no watermark, 30-day retention)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Create/join Team Workspaces (RBAC: Admin/Editor/Viewer)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Email support</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No draft comparison</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No advanced analytics / research gaps / literature matrix</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No priority scanning</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="border border-purple-500 rounded-xl p-6 bg-purple-50">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$12.99</span>
              <span className="text-gray-600">/month</span>
              <p className="text-xs text-gray-500 mt-1">$124.70/year (Save 20%)</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 citation audits/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 rephrase suggestions/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 originality scans/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>200 paper searches/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 AI chat messages/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 AI Research Assistant queries/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 certificates/month</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>100 projects max</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>200,000 character limit per scan</strong></span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Export: all formats + journal submission packages</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Certificate of Authorship (no watermark, 90-day retention)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Draft comparison</strong> (side-by-side version diff)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Advanced Analytics</strong> (writing velocity, contribution heatmaps)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Literature Review Matrix</strong> (batch AI analysis of 50+ papers)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Research Gaps Panel</strong> (temporal/topical/methodological)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Priority scanning</strong> (queue jump)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Advanced citations</strong> (auto-fix, find missing link)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority email support</span>
              </li>
            </ul>
          </div>

          {/* Credit Packages (Pay-As-You-Go) */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              Credit Packages
            </h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
              <p className="text-xs text-gray-500 mt-1">One-time purchases, no subscription</p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">Trial Pack — 5 credits</p>
                <p className="text-sm text-gray-600">$1.99 one-time</p>
                <p className="text-xs text-gray-500 mt-1">Good for testing premium features</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">Standard Pack — 25 credits</p>
                <p className="text-sm text-gray-600">$6.99 one-time</p>
                <p className="text-xs text-gray-500 mt-1">Most popular credit package</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">Power Pack — 50 credits</p>
                <p className="text-sm text-gray-600">$12.99 one-time</p>
                <p className="text-xs text-gray-500 mt-1">Best value per credit</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm">
                <Zap className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Credits unlock: Literature Matrix, deep paper search, certificate generation, AI Research Assistant queries</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No subscription commitment</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Credits reset on billing cycle (not calendar month)</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Auto-use credits toggle in Settings → Billing</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No Team Workspace creation (requires Plus+ subscription)</span>
              </li>
              <li className="flex items-start text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Certificate retention: 0 days (instant download only)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
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
                <td className="px-6 py-4 font-medium">Monthly Price</td>
                <td className="px-6 py-4 text-center">$0</td>
                <td className="px-6 py-4 text-center">$5.99</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">$12.99</td>
                <td className="px-6 py-4 text-center">One-time</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Annual Price (20% off)</td>
                <td className="px-6 py-4 text-center">—</td>
                <td className="px-6 py-4 text-center">$57.50</td>
                <td className="px-6 py-4 text-center">$124.70</td>
                <td className="px-6 py-4 text-center">—</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Citation Audits / Month</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Rephrase Suggestions / Month</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Originality Scans / Month</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">10</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Paper Searches / Month</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center">100</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">200</td>
                <td className="px-6 py-4 text-center">Per credit (deep search)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">AI Chat Messages / Month</td>
                <td className="px-6 py-4 text-center">5</td>
                <td className="px-6 py-4 text-center">50</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">AI Research Assistant / Month</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Certificates / Month</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Max Projects</td>
                <td className="px-6 py-4 text-center">3</td>
                <td className="px-6 py-4 text-center">25</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">100</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Max Characters per Scan</td>
                <td className="px-6 py-4 text-center">20,000</td>
                <td className="px-6 py-4 text-center">80,000</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">200,000</td>
                <td className="px-6 py-4 text-center">300,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Export Formats</td>
                <td className="px-6 py-4 text-center">All</td>
                <td className="px-6 py-4 text-center">All</td>
                <td className="px-6 py-4 text-center">All + Journal Packages</td>
                <td className="px-6 py-4 text-center">All</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Certificate Watermark</td>
                <td className="px-6 py-4 text-center">Yes</td>
                <td className="px-6 py-4 text-center">No</td>
                <td className="px-6 py-4 text-center">No</td>
                <td className="px-6 py-4 text-center">No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Certificate Retention</td>
                <td className="px-6 py-4 text-center">7 days</td>
                <td className="px-6 py-4 text-center">30 days</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">90 days</td>
                <td className="px-6 py-4 text-center">Instant download only</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Draft Comparison</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Advanced Analytics</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Literature Review Matrix</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">Per credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Research Gaps Panel</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Priority Scanning</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Advanced Citations (Auto-fix, Find Missing Link)</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Team Workspaces (Create)</td>
                <td className="px-6 py-4 text-center">✗</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Team Workspaces (Join)</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                <td className="px-6 py-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Support</td>
                <td className="px-6 py-4 text-center">Community</td>
                <td className="px-6 py-4 text-center">Email</td>
                <td className="px-6 py-4 text-center text-purple-600 font-bold">Priority</td>
                <td className="px-6 py-4 text-center">Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Which Plan is Right? */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Which Plan is Right for You?</h2>
        <p className="text-gray-600 mb-6">
          Having billing issues? See <Link to="/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <Users className="h-8 w-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold mb-2">Students & Occasional Writers</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Free</strong> or <strong>Credits</strong>. Free gives you 3 citation audits/month and 25 paper searches.
              Buy a Credit Pack (5 for $1.99) when you need Literature Matrix or extra certificates.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold mb-2">Active Researchers (3-5 papers/month)</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Plus ($5.99/mo)</strong> gives 25 citation audits, 10 originality scans, 100 paper searches,
              Team Workspaces, and 30-day certificate retention. Best value for regular writers.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Award className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Faculty, PhD Candidates, Research Teams</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Premium ($12.99/mo)</strong> unlocks unlimited-scale features: 100 audits/scans,
              Literature Review Matrix (batch 50+ papers), Research Gaps, Draft Comparison,
              Advanced Analytics, and priority support.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Crown className="h-8 w-8 text-yellow-600 mb-3" />
            <h3 className="font-semibold mb-2">Institutions & Departments</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Institutional (custom)</strong> adds SSO (SAML/OIDC), multi-node deployment,
              sovereign storage (EU/US/on-prem), executive reports, and dedicated support.
              <Link to="/contact-support" className="text-blue-600 hover:underline">Contact Sales →</Link>
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white text-center">
        <h3 className="text-2xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="opacity-90 mb-6">
          Choose your plan and start improving your academic writing today.
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
            to="/limits"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
            Learn About Usage Limits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPage;