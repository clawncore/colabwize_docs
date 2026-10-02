import { Link } from "react-router-dom";
import { ArrowLeft, Shield, User, Lock, FileText, CheckCircle, School, Database, Mail, AlertCircle, Eye, Download, Trash2, Settings, Building } from "lucide-react";

const FERPAPage = () => {
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
            <School className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">FERPA Compliance</h1>
            <p className="text-lg text-gray-600">
              How we comply with the Family Educational Rights and Privacy Act
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <School className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">FERPA Alignment</h3>
              <p className="text-sm text-blue-800">
                ColabWize is not a "school" under FERPA (20 U.S.C. § 1232g), but we process student education records on behalf of
                educational institutions as a "school official" with legitimate educational interest. We align our practices with FERPA
                requirements to support institutional compliance. This page explains our FERPA-aligned controls.
              </p>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FERPA Key Principles We Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Student Privacy Rights</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right to inspect and review education records</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right to request amendment of inaccurate records</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right to consent to disclosure of PII (with exceptions)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Right to file complaint with US DOE</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">Consent for Disclosure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Written consent required before disclosing PII from education records</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Consent must specify records, purpose, and recipient</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Exceptions for directory info, school officials, health/safety emergencies</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Parents' rights transfer to student at 18 or postsecondary enrollment</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold">Directory Information</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> We do not designate directory information — institutions control this</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Students can opt out of institutional directory disclosures</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> ColabWize profile visibility settings default to private</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> No public student directories</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                  <Lock className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold">Data Security (FERPA §99.31)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Encryption: TLS 1.3 in transit, AES-256 at rest</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Access controls: RBAC, MFA, row-level security</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Audit logs: admin actions, data access, exports</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Employee training: annual FERPA awareness</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Incident response: 72-hour notification for PII breaches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Student Rights Implementation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Support Student Rights</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Eye className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Inspect & Review (34 CFR §99.10)</h3>
                  <p className="text-gray-600 text-sm">Students can access their education records within 45 days.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Self-service:</strong> All documents, citations, source integration data visible in-app</p>
                <p>• <strong>Full export:</strong> Settings → Danger Zone → "Download Your Data" (JSON + files)</p>
                <p>• <strong>API:</strong> <code>GET /api/user/data-export</code> for programmatic access</p>
                <p>• <strong>Institutional request:</strong> Designated officials can request via DPO channel</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <Lock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Request Amendment (34 CFR §99.20)</h3>
                  <p className="text-gray-600 text-sm">Students can request correction of inaccurate/misleading records.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <strong>Self-service:</strong> Edit documents, citations, profile directly in-app</p>
                <p>• <strong>Formal request:</strong> Email <a href="mailto:ferpa@colabwize.com" className="text-blue-600 underline">ferpa@colabwize.com</a> for records not editable (audit logs, etc.)</p>
                <p>• <strong>Response:</strong> Within 30 days; if denied, student may add statement to record</p>
                <p>• <strong>Hearing:</strong> Institutional process applies; we provide records for hearing</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to Consent to Disclosures (34 CFR §99.30)</h3>
                  <p className="text-gray-600 text-sm">Written consent required before disclosing PII from education records.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• ColabWize never discloses student PII to third parties without consent</p>
                <p>• Integrations (Zotero, Mendeley, Drive, OneDrive): student initiates, controls scope</p>
                <p>• Team Workspaces: student chooses to join; workspace owner sees contributions</p>
                <p>• Institutional admins: access per institution's FERPA policy (designated officials only)</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-3">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Right to File Complaint (34 CFR §99.64)</h3>
                  <p className="text-gray-600 text-sm">Students may complain to US DOE Family Policy Compliance Office.</p>
                </div>
              </div>
              <div className="ml-9 space-y-2 text-sm text-gray-700">
                <p>• <a href="https://studentprivacy.ed.gov/complaint-process" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">File complaint at StudentPrivacy.gov</a></p>
                <p>• Contact our Student Privacy Officer first: <a href="mailto:spo@colabwize.com" className="text-blue-600 underline">spo@colabwize.com</a></p>
                <p>• We commit to good-faith resolution before formal complaint</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exceptions to Consent (FERPA §99.31) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FERPA Exceptions to Consent — How We Handle</h2>
          <p className="text-gray-600 mb-4">FERPA permits disclosure without consent in specific circumstances. Our handling:</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Exception (§99.31)</th>
                  <th className="px-6 py-3 text-left font-semibold">Our Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4"><strong>(a)(1) School Officials with Legitimate Educational Interest</strong></td>
                  <td className="px-6 py-4 text-sm">
                    Institutional admins designated by the institution (via Institutional plan) have access to student records
                    within their scope. Access logged and auditable. Not used for marketing or non-educational purposes.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(2) Other Schools (Transfer/Enrollment)</strong></td>
                  <td className="px-6 py-4 text-sm">Student-initiated export (Download Your Data) enables transfer. We do not auto-disclose.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>(a)(3) Authorized Representatives (Comptroller, Attorney General, Secretary of Education, IES)</strong></td>
                  <td className="px-6 py-4 text-sm">We comply with lawful requests (subpoenas, court orders) per legal obligation. Legal team reviews all requests.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(4) Financial Aid</strong></td>
                  <td className="px-6 py-4 text-sm">Not applicable — ColabWize does not process financial aid data.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>(a)(5) State/Local Authorities (Juvenile Justice)</strong></td>
                  <td className="px-6 py-4 text-sm">Comply with lawful orders; notify institution where feasible.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(6) Organizations Conducting Studies</strong></td>
                  <td className="px-6 py-4 text-sm">Only with written agreement specifying purpose, data destruction, and no redisclosure. Not routine.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>(a)(7) Accrediting Organizations</strong></td>
                  <td className="px-6 py-4 text-sm">Institution may share records with accreditors; we provide export tools.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(8) Parents of Dependent Students (IRS)</strong></td>
                  <td className="px-6 py-4 text-sm">Rights transfer to student at 18 or postsecondary. We follow institution's dependency determination.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>(a)(9) Judicial Orders/Subpoenas</strong></td>
                  <td className="px-6 py-4 text-sm">Comply with valid orders; notify institution/student unless prohibited.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(10) Health/Safety Emergencies</strong></td>
                  <td className="px-6 py-4 text-sm">Disclose to appropriate parties if necessary to protect health/safety. Documented and reported.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><strong>(a)(11) Directory Information</strong></td>
                  <td className="px-6 py-4 text-sm">We do not maintain directory information. Institution controls. Student opt-out respected.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong>(a)(13) Sex Offender Registry</strong></td>
                  <td className="px-6 py-4 text-sm">Not applicable to our service.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* For Educational Institutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">For Educational Institutions</h2>
          <p className="text-gray-600 mb-6">Institutions using ColabWize are responsible for FERPA compliance. We provide:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><FileText className="h-5 w-5 text-blue-600" /> Data Agreements</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Standard DPA with SCCs</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> FERPA-specific addendum</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> BAA available if PHI involved</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Database className="h-5 w-5 text-green-600" /> Student Record Tools</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Per-student data export</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Audit logs for access tracking</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Role-based access (Official/Editor/Viewer)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Bulk provisioning (Institutional)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><School className="h-5 w-5 text-purple-600" /> Training & Resources</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> FERPA compliance guide for admins</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Annual security awareness training</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Incident response coordination</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Dedicated support channel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Student Privacy Officer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Student Privacy Officer</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">We have appointed a Student Privacy Officer responsible for FERPA alignment:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:spo@colabwize.com" className="text-blue-600 hover:underline font-medium">spo@colabwize.com</a></div>
              <p className="text-gray-600 text-sm">Contact for: FERPA questions, rights requests, institutional compliance, breach coordination.</p>
            </div>
          </div>
        </section>

        {/* Complaints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Complaints to US Department of Education</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Family Policy Compliance Office</h3>
            <p className="text-gray-600 mb-2">
              U.S. Department of Education<br />
              400 Maryland Avenue, SW<br />
              Washington, DC 20202-8520
            </p>
            <a href="https://studentprivacy.ed.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Visit StudentPrivacy.gov
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:ferpa@colabwize.com" className="text-blue-600 hover:underline">ferpa@colabwize.com</a> (FERPA-specific)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:spo@colabwize.com" className="text-blue-600 hover:underline">spo@colabwize.com</a> (Student Privacy Officer)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:privacy@colabwize.com" className="text-blue-600 hover:underline">privacy@colabwize.com</a> (General privacy)</div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:security@colabwize.com" className="text-blue-600 hover:underline">security@colabwize.com</a> (Security incidents)</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white text-center">
          <h3 className="text-xl font-semibold mb-2">FERPA Questions?</h3>
          <p className="opacity-90 mb-4">Contact our Student Privacy Officer for institutional or student inquiries.</p>
          <a href="mailto:spo@colabwize.com" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">Contact Student Privacy Officer</a>
        </div>
      </div>
    </div>
  );
};

export default FERPAPage;