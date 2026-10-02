import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  Mail,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Receipt,
  Shield,
} from "lucide-react";

const RefundPolicyPage = () => {
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
            <CreditCard className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">
              Refunds & Cancellations Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl">
        {/* Key Notice */}
        <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-amber-800">
              <h3 className="font-semibold mb-2">
                Important: No Refunds for Digital Services
              </h3>
              <p className="mb-2">
                Because ColabWize provides <strong>immediate access</strong> to
                digital tools, server resources, AI processing, and premium
                features upon payment, we operate on a{" "}
                <strong>strict non-refundable basis</strong>. This is standard
                for SaaS platforms.
              </p>
              <p className="text-sm">
                This applies regardless of: usage level, subscription duration,
                reason for cancellation, feature dissatisfaction, forgotten
                cancellations, or inactivity.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" /> How to Cancel
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Go to <strong>Settings → Billing</strong>
                </li>
                <li>
                  • Click <strong>"Cancel Subscription"</strong>
                </li>
                <li>• Confirm cancellation — auto-renewal stops immediately</li>
                <li>• No penalty, no questions asked</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" /> Access After
                Cancellation
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>
                  You retain FULL access to all paid features until the end of
                  your current billing period.
                </strong>
                We do not terminate access early.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Your billing cycle date = the date you subscribed (not
                  calendar month)
                </li>
                <li>
                  • View exact date in Settings → Billing → Subscription Details
                </li>
                <li>• Free users: reset on the 1st of each month</li>
                <li>
                  • After period ends: account reverts to Free plan limits
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-orange-600" /> Prorated
                Refunds? No.
              </h3>
              <p className="text-gray-700 text-sm">
                We do not offer prorated refunds for unused time remaining in
                your billing period. You continue to have access for the full
                period you paid for.
              </p>
            </div>
          </div>
        </section>

        {/* No-Refund Policy Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">No-Refund Policy Details</h2>
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <p className="font-semibold text-gray-900 mb-3">
              The following are <strong>not eligible for refunds</strong>:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 pl-5 list-disc">
              <li>Partial use of the service during the billing period</li>
              <li>Changing your mind after purchase</li>
              <li>Forgotten cancellations (auto-renewal)</li>
              <li>Inactivity or not using features</li>
              <li>Feature dissatisfaction or expectation mismatch</li>
              <li>Technical issues that are resolved within SLA</li>
              <li>Account suspension/termination for Terms violation</li>
              <li>Credit package purchases (one-time, non-recurring)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" /> Why No Refunds?
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>
                • <strong>Immediate value delivery:</strong> AI processing,
                server compute, database operations consume resources instantly
              </li>
              <li>
                • <strong>No physical goods:</strong> Digital services cannot be
                "returned" or resold
              </li>
              <li>
                • <strong>Fairness:</strong> Prevents abuse (use for a project,
                then refund)
              </li>
              <li>
                • <strong>Industry standard:</strong> Consistent with all major
                SaaS platforms
              </li>
            </ul>
          </div>
        </section>

        {/* Exceptions (Sole Discretion) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Exceptions — Reviewed at Our Sole Discretion
          </h2>
          <p className="text-gray-600 mb-4">
            In <strong>rare</strong> cases, we may review the following. These
            are not guarantees — each case is assessed individually.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-orange-600" /> Verified
                Billing Errors
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Duplicate charges for the same period</li>
                <li>• Incorrect amount charged (system error)</li>
                <li>• Charge after confirmed cancellation</li>
                <li>
                  Contact:{" "}
                  <a
                    href="mailto:billing@colabwize.com"
                    className="text-blue-600 underline"
                  >
                    billing@colabwize.com
                  </a>{" "}
                  with receipt/invoice
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" /> Platform-Wide
                Outage
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • Core features unavailable for &gt;24 consecutive hours
                </li>
                <li>• Verified via status page and monitoring</li>
                <li>
                  • Not applicable to: scheduled maintenance, third-party API
                  outages, user-specific issues
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-purple-600" /> Unauthorized
                Charge
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Charge made without account holder authorization</li>
                <li>• Requires police report or bank fraud affidavit</li>
                <li>
                  • We cooperate fully with financial institution investigations
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * All exceptions reviewed case-by-case. Decision final. No appeal
            for denied requests. Response within 5 business days. Contact{" "}
            <a
              href="mailto:billing@colabwize.com"
              className="text-blue-600 underline"
            >
              billing@colabwize.com
            </a>
            .
          </p>
        </section>

        {/* Payment Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Payment Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-600" /> Credit/Debit
                Cards
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Processed by <strong>Stripe</strong> (PCI DSS Level 1)
                </li>
                <li>
                  • Accepted: Visa, Mastercard, American Express, Discover
                </li>
                <li>• ColabWize never sees full card number</li>
                <li>
                  • Stored: last 4 digits, brand, expiry (for display only)
                </li>
                <li>• 3D Secure / SCA supported where required</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Receipt className="h-5 w-5 text-green-600" /> Subscription
                Billing
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Managed by <strong>Lemon Squeezy</strong> (merchant of
                  record)
                </li>
                <li>• Invoices generated automatically each cycle</li>
                <li>• View/download in Settings → Billing → Invoices</li>
                <li>• VAT/GST handled per jurisdiction (Lemon Squeezy)</li>
                <li>
                  • Failed payments: 3 retry attempts over 7 days, then
                  cancellation
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Student Discount:</strong> Verified <code>.edu</code>{" "}
              emails qualify for 25% off Plus/Premium. Contact{" "}
              <a
                href="mailto:support@colabwize.com"
                className="text-blue-600 underline"
              >
                support@colabwize.com
              </a>{" "}
              with student ID. Discount applied to future cycles; no retroactive
              refund on prior payments.
            </p>
          </div>
        </section>

        {/* Credit Packages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Credit Packages (Pay-As-You-Go)
          </h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Non-Refundable, One-Time Purchases
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Credit packages are <strong>not subscriptions</strong> — no
                auto-renewal
              </li>
              <li>
                • Credits reset on your <strong>billing cycle date</strong> (not
                calendar month)
              </li>
              <li>
                • Non-refundable once purchased (digital goods, immediate
                availability)
              </li>
              <li>
                • Do not grant access to subscription-only features (Team
                Workspace creation, Advanced Analytics, Draft Comparison,
                Research Gaps, Priority Scanning)
              </li>
              <li>
                • Credit-only users: credits used for all credit-gated features
                (Literature Matrix, Deep Search, Certificates, AI Research
                Assistant)
              </li>
            </ul>
          </div>
        </section>

        {/* Institutional Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Institutional / Enterprise Plans
          </h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-3">
              Custom agreements for universities and research institutes. Terms
              negotiated per contract.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• May include custom refund/termination clauses</li>
              <li>• Multi-year contracts available</li>
              <li>• Volume discounts, SSO, dedicated support</li>
              <li>
                • Contact:{" "}
                <a
                  href="mailto:sales@colabwize.com"
                  className="text-blue-600 underline"
                >
                  sales@colabwize.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Billing FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Billing FAQ</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                How do I upgrade/downgrade?
              </h3>
              <p className="text-gray-700 text-sm">
                Settings → Billing → "Change Plan". Upgrades take effect
                immediately (prorated charge). Downgrades take effect at next
                billing cycle. No refund for downgrade mid-cycle.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">What if my payment fails?</h3>
              <p className="text-gray-700 text-sm">
                Lemon Squeezy retries 3 times over 7 days. You'll receive email
                notifications. After final failure, subscription cancels and
                account reverts to Free. Update payment method to restore.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">Where are my invoices?</h3>
              <p className="text-gray-700 text-sm">
                Settings → Billing → Invoice History. Download PDF anytime. Also
                emailed via Resend.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Can I get a refund if I upgrade by mistake?
              </h3>
              <p className="text-gray-700 text-sm">
                No refunds, but you can downgrade immediately. The upgrade
                charge stands (immediate access granted), but you won't be
                charged again at the higher tier. Contact billing@ for review if
                genuine error.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Contact for Billing Issues
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />{" "}
                <a
                  href="mailto:billing@colabwize.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  billing@colabwize.com
                </a>{" "}
                (Primary — refunds, charges, invoices, payment issues)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />{" "}
                <a
                  href="mailto:support@colabwize.com"
                  className="text-blue-600 hover:underline"
                >
                  support@colabwize.com
                </a>{" "}
                (General subscription help, plan changes)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />{" "}
                <a
                  href="mailto:sales@colabwize.com"
                  className="text-blue-600 hover:underline"
                >
                  sales@colabwize.com
                </a>{" "}
                (Institutional/Enterprise)
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Include: account email, invoice/receipt number, description of
              issue.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Billing Questions?</h3>
          <p className="opacity-90 mb-4">
            We're here to help with any payment or subscription concerns.
          </p>
          <a
            href="mailto:billing@colabwize.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Email Billing Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
