import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, CheckCircle, AlertCircle, Clock, User, Download, Trash2, Mail } from "lucide-react";

const TermsPage = () => {
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
            <FileText className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Summary Box */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5" /> Key Points (Plain Language Summary)
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> You own your documents and data — we just host and process them for the features you request</li>
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> Free plan available forever; paid plans auto-renew monthly unless cancelled</li>
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> No refunds for digital services (standard for SaaS), but you can cancel anytime and use until period ends</li>
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> We don't sell your data or use it for advertising</li>
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> Academic integrity features (citation audit, originality scan, AI detection) are assistive tools — you're responsible for your work</li>
            <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5" /> Team Workspaces: workspace owner controls membership and permissions</li>
          </ul>
        </div>

        {/* 1. Acceptance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              By creating an account, accessing, or using ColabWize (the "Service"), you agree to be bound by these Terms of Service
              ("Terms"), our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, and any applicable
              laws and regulations. If you do not agree with any part of these Terms, you may not use the Service.
            </p>
            <p className="mb-4">
              These Terms apply to all users, including Free, Plus, Premium, Credit Package, and Institutional plan users.
              Additional terms may apply to specific features (e.g., AI features, Team Workspaces) and are incorporated by reference.
            </p>
            <p className="mb-4">
              We may update these Terms from time to time. Material changes will be notified via email and in-app banner at least
              30 days before taking effect. Continued use after changes constitutes acceptance.
            </p>
          </div>
        </section>

        {/* 2. Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ul className="space-y-2 list-disc pl-6">
              <li>You must be at least 13 years old (16 in the EU/UK) to use ColabWize.</li>
              <li>If you are under 18, you represent that you have parental/guardian consent.</li>
              <li>You must provide accurate registration information and keep it updated.</li>
              <li>You may not use ColabWize if you have been previously banned or if your use would violate any applicable law.</li>
              <li>Institutional/organizational accounts require an authorized representative to accept these Terms on behalf of the entity.</li>
            </ul>
          </div>
        </section>

        {/* 3. Account & Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Account Registration & Security</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="font-semibold mb-2">3.1 Registration</h3>
            <p className="mb-4">
              You may register using email/password, Google OAuth, or Microsoft OAuth (personal, work, or school accounts).
              Social login creates an account linked to that provider's email. You cannot have multiple accounts for the same email.
            </p>
            <h3 className="font-semibold mb-2">3.2 Account Security</h3>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li>You are responsible for maintaining the confidentiality of your credentials.</li>
              <li>Enable Multi-Factor Authentication (MFA) for additional security (Settings → Security).</li>
              <li>Notify us immediately at <a href="mailto:security@colabwize.com" className="text-blue-600 underline">security@colabwize.com</a> if you suspect unauthorized access.</li>
              <li>We are not liable for losses from compromised credentials where you have not enabled available security features (MFA).</li>
            </ul>
            <h3 className="font-semibold mb-2">3.3 Account Types</h3>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li><strong>Personal:</strong> Individual use, single user.</li>
              <li><strong>Workspace Member:</strong> Invited to a Team Workspace by an Owner; permissions set by Owner (Editor/Viewer).</li>
              <li><strong>Institutional:</strong> Organization-wide, managed by designated admins, SSO available.</li>
            </ul>
          </div>
        </section>

        {/* 4. Subscription & Billing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Subscription Plans, Billing & Credits</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="font-semibold mb-2">4.1 Plans</h3>
            <p className="mb-4">
              ColabWize offers the following subscription plans (prices in USD, subject to change with notice):
            </p>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li><strong>Free:</strong> $0/month — 3 citation audits, 3 rephrase, 25 paper searches, 5 AI chat, 3 projects, 20k chars, watermarked certs (7-day retention)</li>
              <li><strong>Plus:</strong> $5.99/month — 25 citation audits, 25 rephrase, 10 originality scans, 100 paper searches, 50 AI chat, 25 AI Research Assistant, 25 certs, 25 projects, 80k chars, Team Workspaces (create), 30-day cert retention</li>
              <li><strong>Premium:</strong> $12.99/month — 100 citation audits, 100 rephrase, 100 originality scans, 200 paper searches, 100 AI chat, 100 AI Research Assistant, 100 certs, 100 projects, 200k chars, Advanced Analytics, Literature Matrix, Research Gaps, Draft Comparison, Priority Scanning, 90-day cert retention</li>
              <li><strong>Credit Packages (PAYG):</strong> Trial 5 credits/$1.99, Standard 25/$6.99, Power 50/$12.99 — for Literature Matrix batches, Deep Paper Search, Certificates, AI Research Assistant queries</li>
              <li><strong>Institutional:</strong> Custom pricing — contact sales.</li>
            </ul>

            <h3 className="font-semibold mb-2">4.2 Billing Cycle</h3>
            <p className="mb-4">
              Subscriptions renew monthly on your <strong>billing cycle date</strong> (the date you subscribed, not calendar month).
              Free users reset on the 1st of each month. View your exact reset date in Settings → Billing.
            </p>

            <h3 className="font-semibold mb-2">4.3 Payment Processing</h3>
            <p className="mb-4">
              Payments are processed by <strong>Stripe</strong> (credit cards) and <strong>Lemon Squeezy</strong> (subscriptions).
              ColabWize does not store full payment card details — only last 4 digits, brand, and expiry for display.
              By subscribing, you authorize recurring charges to your payment method.
            </p>

            <h3 className="font-semibold mb-2">4.4 Auto-Use Credits</h3>
            <p className="mb-4">
              Credit packages supplement your subscription. When "Auto-use credits" is enabled (default: ON in Settings → Billing),
              credits are automatically consumed for credit-gated features (Literature Matrix, Deep Search, Certificates, AI Research Assistant)
              after your monthly plan allowance is exhausted. Credit-only users (no subscription) use credits for all credit-gated features.
            </p>

            <h3 className="font-semibold mb-2">4.5 Student Discount</h3>
            <p className="mb-4">
              Verified students with a <code>.edu</code> email qualify for 25% off Plus/Premium plans. Contact support with student ID to apply.
              Discount applies while student status is verified (re-verified annually).
            </p>
          </div>
        </section>

        {/* 5. Cancellation & Refunds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Cancellation, Refunds & Access</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="font-semibold mb-2">5.1 Cancellation</h3>
            <p className="mb-4">
              You may cancel your subscription at any time in Settings → Billing. Cancellation stops auto-renewal.
              You retain full access to paid features until the end of your current billing period. We do not terminate access early.
            </p>

            <h3 className="font-semibold mb-2">5.2 No-Refund Policy</h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-amber-900 mb-2">Important: No Refunds for Digital Services</p>
              <p className="text-amber-800 text-sm">
                Because ColabWize provides immediate access to digital tools, server resources, and AI processing upon payment,
                we operate on a <strong>strict non-refundable basis</strong>. This applies regardless of usage level, subscription duration,
                or reason for cancellation. No refunds for: partial use, change of mind, forgotten cancellations, inactivity,
                or feature dissatisfaction.
              </p>
            </div>

            <h3 className="font-semibold mb-2">5.3 Exceptions (Sole Discretion)</h3>
            <p className="mb-4">
              In rare cases of verified billing errors (duplicate charges, incorrect amount) or platform-wide outages
              preventing core feature access for {">24"} hours, we may review at our sole discretion. Contact
              <a href="mailto:billing@colabwize.com" className="text-blue-600 underline">billing@colabwize.com</a>.
            </p>

            <h3 className="font-semibold mb-2">5.4 Credit Packages</h3>
            <p className="mb-4">
              Credit packages are one-time purchases, non-refundable, and reset on your billing cycle date.
              They do not constitute a subscription and do not grant access to subscription-only features
              (Team Workspace creation, Advanced Analytics, Draft Comparison, Research Gaps, Priority Scanning).
            </p>
          </div>
        </section>

        {/* 6. Your Content & Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Your Content & Intellectual Property</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="font-semibold mb-2">6.1 Your Content</h3>
            <p className="mb-4">
              You retain all intellectual property rights in your documents, citations, notes, and other content you create or upload
              ("Your Content"). ColabWize claims no ownership over Your Content.
            </p>

            <h3 className="font-semibold mb-2">6.2 License to Us</h3>
            <p className="mb-4">
              By uploading or creating Content, you grant ColabWize a worldwide, non-exclusive, royalty-free license to:
            </p>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li>Host, store, and backup Your Content on our infrastructure (Supabase, Vercel, Render).</li>
              <li>Process Your Content to provide the features you request: citation audits, originality scans, AI detection, rephrase, paper search, AI chat, certificate generation, export, collaboration sync.</li>
              <li>Transmit Your Content to subprocessors strictly for feature delivery (e.g., OpenAI for rephrase, GPTZero for detection, CrossRef for citation verification).</li>
              <li>Enable real-time collaboration via Yjs/Hocuspocus (Team Workspaces) — content synced to invited collaborators only.</li>
            </ul>
            <p className="mb-4">
              This license ends when you delete the specific Content or your account (subject to 30-day recovery window).
              We do not use Your Content to train our or third-party AI models.
            </p>

            <h3 className="font-semibold mb-2">6.3 Our IP</h3>
            <p className="mb-4">
              ColabWize, its software, UI, algorithms, documentation, and trademarks are our property (or our licensors').
              These Terms do not grant you any rights to our IP except the limited right to use the Service per your plan.
            </p>

            <h3 className="font-semibold mb-2">6.4 Feedback</h3>
            <p className="mb-4">
              Feedback, suggestions, or ideas you submit become our property and may be used without compensation or attribution.
            </p>
          </div>
        </section>

        {/* 7. Acceptable Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Acceptable Use</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">You agree not to use ColabWize to:</p>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li>Violate any law, regulation, or third-party rights (copyright, privacy, etc.).</li>
              <li>Upload malware, viruses, or malicious code.</li>
              <li>Attempt unauthorized access, probe, scan, or test vulnerabilities of our systems.</li>
              <li>Reverse engineer, decompile, or attempt to extract source code or models.</li>
              <li>Automate access (scraping, bots) beyond normal interactive use.</li>
              <li>Resell or commercialize access without an Institutional agreement.</li>
              <li>Generate content for academic dishonesty (we provide integrity tools; you are responsible for ethical use).</li>
              <li>Harass, threaten, or abuse other users (including in Team Workspaces).</li>
              <li>Circumvent usage limits (e.g., creating multiple accounts to bypass Free plan limits).</li>
            </ul>
            <p className="mb-4">
              We may suspend or terminate accounts violating these terms, with notice (except for immediate threats).
              Appeals: <a href="mailto:appeals@colabwize.com" className="text-blue-600 underline">appeals@colabwize.com</a>.
            </p>
          </div>
        </section>

        {/* 8. Academic Integrity Features — Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. Academic Integrity Features — Important Disclaimer</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-red-800">
                <p className="font-semibold mb-2">Assistive Tools, Not Judgments</p>
                <p className="mb-3">
                  ColabWize's citation audit, originality scan, AI detection, and certificate features are <strong>assistive tools</strong>.
                  They provide data and analysis to help you improve your work and demonstrate authorship. They do not make
                  definitive determinations of plagiarism, misconduct, or academic integrity violations.
                </p>
                <ul className="space-y-1 pl-5 list-disc text-sm">
                  <li>Originality scans compare against public databases; they cannot access private repositories or unpublished works.</li>
                  <li>AI detection (GPTZero) provides a probability score, not a binary verdict; false positives/negatives occur.</li>
                  <li>Citation audit checks formatting and verifiability; it cannot confirm the intellectual content of citations.</li>
                  <li>Certificates of Authorship reflect <em>your documented process</em> (reading time, highlights, notes, citation timing) — they are evidence, not guarantees.</li>
                </ul>
                <p className="mt-3 font-medium">
                  Final academic integrity determinations rest with your institution, instructor, or publisher.
                  ColabWize is not liable for outcomes based on feature results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Team Workspaces */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. Team Workspaces</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Team Workspaces (available on Plus/Premium/Institutional) enable real-time collaborative editing via Yjs/Hocuspocus CRDTs.
            </p>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li><strong>Workspace Owner:</strong> Creates workspace, manages members, roles (Owner/Editor/Viewer), billing, deletion.</li>
              <li><strong>Editors:</strong> Full read/write access to workspace documents and resources.</li>
              <li><strong>Viewers:</strong> Read-only access; can comment.</li>
              <li>All collaborators see real-time presence, cursors, and contributions.</li>
              <li>Workspace Owner can transfer ownership; deleting workspace removes all workspace data for all members.</li>
              <li>Free plan users can <strong>join</strong> workspaces as Editor/Viewer but cannot <strong>create</strong> them.</li>
            </ul>
          </div>
        </section>

        {/* 10. Third-Party Integrations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10. Third-Party Integrations</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              ColabWize integrates with Google Drive, OneDrive, Zotero, and Mendeley via OAuth/API keys you provide.
            </p>
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li>You control connections in Settings → Integrations; disconnect anytime.</li>
              <li>We access only the scopes you authorize (e.g., <code>drive.readonly</code> for Google Drive).</li>
              <li>Your credentials are encrypted at rest; we never share them.</li>
              <li>Third-party terms also apply (Google, Microsoft, Zotero, Mendeley terms of service).</li>
              <li>We are not liable for third-party service changes, outages, or data loss on their platforms.</li>
            </ul>
          </div>
        </section>

        {/* 11. Disclaimer of Warranties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">11. Disclaimer of Warranties</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, OR TITLE. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE,
              OR THAT RESULTS WILL BE ACCURATE OR RELIABLE.
            </p>
            <p className="mb-4">
              AI FEATURES (REPHRASE, RESEARCH ASSISTANT, CITATION FIX) ARE PROVIDED AS ASSISTANCE ONLY.
              AI OUTPUTS MAY CONTAIN INACCURACIES ("HALLUCINATIONS"). YOU ARE RESPONSIBLE FOR VERIFYING ALL AI-GENERATED CONTENT.
            </p>
          </div>
        </section>

        {/* 12. Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, COLABWIZE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING LOSS OF DATA, PROFITS, GOODWILL, OR SERVICE INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY.
            </p>
            <p className="mb-4">
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED THE GREATER OF:
              (A) THE TOTAL FEES YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) $100 USD.
            </p>
            <p className="mb-4">
              SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY; IN SUCH CASES, OUR LIABILITY IS LIMITED TO THE
              MAXIMUM EXTENT PERMITTED BY LAW.
            </p>
          </div>
        </section>

        {/* 13. Indemnification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">13. Indemnification</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless ColabWize and its affiliates from any claims, damages,
              losses, or expenses (including reasonable attorneys' fees) arising from: (a) Your Content, (b) your use of
              the Service in violation of these Terms, (c) your violation of any third-party rights, or (d) your negligence
              or willful misconduct.
            </p>
          </div>
        </section>

        {/* 14. Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">14. Termination</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ul className="space-y-2 list-disc pl-6 mb-4">
              <li>You may terminate by deleting your account (Settings → Danger Zone).</li>
              <li>We may terminate or suspend for material breach, with 30 days' notice (except immediate for security/legal).</li>
              <li>Upon termination: license to Your Content ends (subject to 30-day recovery), subscription ends, access revoked.</li>
              <li>Provisions that should survive (IP, disclaimers, limitations, indemnification) survive termination.</li>
            </ul>
          </div>
        </section>

        {/* 15. Governing Law & Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">15. Governing Law & Dispute Resolution</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of laws.
            </p>
            <p className="mb-4">
              <strong>Disputes:</strong> We encourage informal resolution first (contact support).
              If unresolved, disputes shall be resolved by binding arbitration under JAMS Streamlined Arbitration Rules,
              in English, in Delaware (or remote). Class actions and jury trials are waived.
              You may opt out of arbitration within 30 days of first use by emailing <a href="mailto:legal@colabwize.com" className="text-blue-600 underline">legal@colabwize.com</a>.
            </p>
          </div>
        </section>

        {/* 16. General */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">16. General Provisions</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Entire Agreement:</strong> These Terms + Privacy Policy + any feature-specific terms constitute the entire agreement.</li>
              <li><strong>Severability:</strong> If any provision is unenforceable, the rest remain in effect.</li>
              <li><strong>No Waiver:</strong> Failure to enforce a right does not waive it.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms. We may assign to an affiliate or successor.</li>
              <li><strong>Force Majeure:</strong> Not liable for delays due to events beyond reasonable control.</li>
              <li><strong>Language:</strong> English version controls; translations provided for convenience.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">17. Contact</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">Questions about these Terms:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:legal@colabwize.com" className="text-blue-600 hover:underline">legal@colabwize.com</a> (Legal/Terms)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:support@colabwize.com" className="text-blue-600 hover:underline">support@colabwize.com</a> (General Support)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:billing@colabwize.com" className="text-blue-600 hover:underline">billing@colabwize.com</a> (Billing/Payments)</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Questions About Our Terms?</h3>
          <p className="opacity-90 mb-4">We're here to help clarify anything.</p>
          <a href="mailto:legal@colabwize.com" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Email Legal Team</a>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;