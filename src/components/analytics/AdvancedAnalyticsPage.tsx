import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  FileText,
  TrendingDown,
  DollarSign,
  Calendar,
  LineChart,
  PieChart,
  Activity,
  Database,
} from "lucide-react";

const AdvancedAnalyticsPage = () => {
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
            <BarChart3 className="h-16 w-16 mx-auto mb-4 text-purple-600" />
            <h1 className="text-3xl font-bold mb-2">Advanced Analytics</h1>
            <p className="text-lg text-gray-600">
              Comprehensive writing analytics dashboard — exclusive to Premium plan
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Plan Badge */}
        <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-xl">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900">Premium Exclusive Feature</h3>
              <p className="text-sm text-purple-800">
                Advanced Analytics is only available on the <strong>Premium plan ($12.99/mo)</strong>.
                Free and Plus users do not have access. Upgrade in Settings → Billing to unlock.
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <p className="text-gray-600 mb-6">
            Advanced Analytics provides deep insights into your writing productivity, citation quality, and document trends.
            Data is collected automatically as you use ColabWize — no manual setup required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4">
                <LineChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Writing Trends</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Weekly document creation (8-week rolling)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Monthly project growth (6-month)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Yearly overview (all time)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-blue-100 rounded-lg w-fit mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Productivity Insights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Most productive day of week</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Percentage contribution by day</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Total words written across sessions</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality & Compliance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Citation audit stats (avg compliance, integrity index)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Verification results (verified/unverified sources)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Common issues: broken refs, duplicates, formatting errors</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-orange-100 rounded-lg w-fit mb-4">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Billing & Usage</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Monthly billing trends</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Feature usage counters (scans, checks, certs, uploads)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Conversion tracking</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-indigo-100 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Dashboard Summary</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Latest originality score</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Citation status & count</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Authorship verification status</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Upcoming project deadlines</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="p-2 bg-red-100 rounded-lg w-fit mb-4">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Audit Deep-Dive</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Avg compliance score</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Avg citations per audit</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Avg broken/uncited refs, duplicates, invalid URLs</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Avg audit duration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard View */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Dashboard View</h2>
          <p className="text-gray-600 mb-6">
            The Analytics dashboard is accessible from the main navigation when on Premium plan.
            It aggregates data from your personal projects (workspace projects excluded).
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Dashboard Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Originality Score</p>
                <p className="text-gray-600">Latest scan overall score + classification (Human/AI/Mixed)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Citation Status</p>
                <p className="text-gray-600">None / Active / Fair / Good / Strong (based on citation count)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Authorship Verified</p>
                <p className="text-gray-600">Certificate status (completed = verified)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Citation Count</p>
                <p className="text-gray-600">Total citations in personal projects</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Weekly Trend</p>
                <p className="text-gray-600">Bar chart: documents created per week (8 weeks)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Upcoming Deadlines</p>
                <p className="text-gray-600">Next 5 projects with due dates (personal only)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"><Shield className="h-5 w-5" /> Data Scope</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> <strong>Personal projects only</strong> (workspace_id = null)</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Team Workspace projects excluded from personal analytics</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Workspace analytics available separately to Workspace Owners</li>
            </ul>
          </div>
        </section>

        {/* Detailed Analytics (Trends Tab) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Detailed Analytics (Trends Tab)</h2>
          <p className="text-gray-600 mb-6">
            Accessible via the "Trends" tab in the Analytics section. Provides comprehensive historical views.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><LineChart className="h-5 w-5 text-purple-600" /> Monthly Growth</h3>
              <p className="text-gray-600 text-sm mb-4">Documents created per month for the last 12 months.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Month key (YYYY-MM) + formatted name (e.g., "Jan 2024")</li>
                <li>• Document count per month</li>
                <li>• Visualizes seasonal patterns and productivity trends</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-blue-600" /> Yearly Overview</h3>
              <p className="text-gray-600 text-sm mb-4">Total documents created per year (all time).</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Year + document count</li>
                <li>• Long-term growth trajectory</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-green-600" /> Productivity Insight</h3>
              <p className="text-gray-600 text-sm mb-4">Analyzes authorship activity sessions to find your most productive day.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Most productive day of week (Sunday–Saturday)</li>
                <li>• Percentage contribution of that day to total words</li>
                <li>• Total words written across all tracked sessions</li>
                <li>• Based on <code>authorshipActivity</code> table (session_start, word_count)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><DollarSign className="h-5 w-5 text-orange-600" /> Billing Trends</h3>
              <p className="text-gray-600 text-sm mb-4">Monthly payment history (paid invoices only).</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Month + total amount paid (USD)</li>
                <li>• From <code>paymentHistory</code> table (status = paid)</li>
                <li>• Useful for expense tracking and budget planning</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-red-600" /> Citation Audit Statistics</h3>
              <p className="text-gray-600 text-sm mb-4">Aggregated metrics from completed citation audits (<code>auditJob</code> table).</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Total audits completed</li>
                <li>• Avg compliance score (0-100)</li>
                <li>• Avg integrity index (0-100)</li>
                <li>• Avg citations per audit, broken refs, uncited refs, duplicates, invalid URLs, formatting errors</li>
                <li>• Avg audit duration (seconds)</li>
                <li>• Avg verified / unverified sources</li>
                <li>• Last audit date</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Data Is Collected */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Data Is Collected</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Activity className="h-5 w-5 text-blue-600" /> Automatic Event Tracking</h3>
              <p className="text-gray-600 text-sm mb-3">Frontend sends events to <code>POST /api/analytics/track</code> for key actions:</p>
              <ul className="space-y-1 text-sm text-gray-700 pl-5 list-disc">
                <li>Feature usage: originality_scan_completed, citation_check_completed, certificate_downloaded, document_uploaded</li>
                <li>User journey: upload → scan → review → defend</li>
                <li>Conversions: free_to_paid, trial_started, subscription_renewed</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Database className="h-5 w-5 text-green-600" /> Database Aggregations</h3>
              <p className="text-gray-600 text-sm mb-3">Analytics Service queries these tables directly:</p>
              <ul className="space-y-1 text-sm text-gray-700 pl-5 list-disc">
                <li><code>project</code> — creation trends, deadlines, word counts</li>
                <li><code>originalityScan</code> — latest scores, classifications</li>
                <li><code>citation</code> — counts for citation status</li>
                <li><code>certificate</code> — verification status</li>
                <li><code>auditJob</code> — compliance scores, verification results, durations</li>
                <li><code>authorshipActivity</code> — session word counts for productivity insight</li>
                <li><code>paymentHistory</code> — billing trends</li>
                <li><code>user_metrics</code> — cached counters (scans, checks, certs, uploads)</li>
                <li><code>analytics_events</code> — raw event log for custom analysis</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Shield className="h-5 w-5 text-purple-600" /> Privacy & Retention</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Analytics events: 13 months (aggregated for product analytics)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> User metrics: until account deletion + 30 days</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> No PII in analytics events (user_id only, no email/name)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Opt-out: Disable "Usage Analytics" in Settings → Privacy (stops event tracking)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> GDPR/CCPA: Access, delete, portability via Download Your Data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">API Endpoints (For Reference)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Endpoint</th>
                  <th className="px-6 py-3 text-left font-semibold">Method</th>
                  <th className="px-6 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-6 py-4 font-mono text-sm">/api/analytics/track</td><td className="px-6 py-4">POST</td><td className="px-6 py-4 text-sm text-gray-600">Track custom event (feature usage, journey, conversion)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-mono text-sm">/api/analytics/summary</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Cached user metrics (scans, checks, certs, uploads, paid status)</td></tr>
                <tr><td className="px-6 py-4 font-mono text-sm">/api/analytics/metrics</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Same as summary (legacy)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-mono text-sm">/api/analytics/dashboard</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Main dashboard data (originality, citations, authorship, trends, deadlines)</td></tr>
                <tr><td className="px-6 py-4 font-mono text-sm">/api/analytics/trends</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Monthly document trends (6 months default, ?months=)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-mono text-sm">/api/analytics/detailed</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Trends tab data: monthly growth, yearly, productivity, billing</td></tr>
                <tr><td className="px-6 py-4 font-mono text-sm">/api/analytics/audit-stats</td><td className="px-6 py-4">GET</td><td className="px-6 py-4 text-sm text-gray-600">Citation audit aggregated statistics</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-3">All endpoints require authentication (JWT). Premium plan required for dashboard/detailed/audit-stats.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Is Advanced Analytics included in my plan?</h3>
              <p className="text-gray-600">
                <strong>Only Premium plan ($12.99/mo)</strong> includes Advanced Analytics.
                Free and Plus users see a locked state with upgrade prompt.
                Credit packages do not grant access to this feature.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Will it analyze my existing documents?</h3>
              <p className="text-gray-600">
                Yes. Analytics queries your existing <code>project</code>, <code>originalityScan</code>, <code>citation</code>,
                <code>certificate</code>, and <code>auditJob</code> records. Historical data appears immediately upon upgrade.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Can I export my analytics data?</h3>
              <p className="text-gray-600">
                Yes. Dashboard data can be exported via "Download Your Data" (Settings → Danger Zone) which includes
                analytics summaries. CSV export for trend charts is planned.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Does it track Team Workspace activity?</h3>
              <p className="text-gray-600">
                Personal dashboard excludes workspace projects (<code>workspace_id != null</code>).
                Workspace Owners see separate workspace analytics in the Workspace settings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I opt out of analytics tracking?</h3>
              <p className="text-gray-600">
                Yes. Settings → Privacy → "Usage Analytics" toggle. Disables <code>/api/analytics/track</code> events.
                Dashboard aggregations (from existing DB records) still work; only new event tracking stops.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Unlock Advanced Analytics</h3>
          <p className="opacity-90 mb-4">Upgrade to Premium to access your comprehensive writing analytics dashboard.</p>
          <div className="flex justify-center gap-4">
            <Link to="/plans" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Upgrade to Premium</Link>
            <Link to="/contact-support" className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsPage;