import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  Users,
  Star,
  Calendar,
  CheckCircle,
  MessageCircle,
  Clock,
  Shield,
  Mail,
} from "lucide-react";
import { useState } from "react";
import WaitlistService from "../../lib/utils/waitlistService";

const BetaProgramPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    researchArea: "",
    experience: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Submit to backend waitlist service
      const result = await WaitlistService.addToWaitlist({
        email: formData.email,
        feature: "beta-program",
        name: formData.name,
        reason: formData.interest,
        institution: formData.institution,
        researchArea: formData.researchArea,
        experience: formData.experience,
        interest: formData.interest,
        additionalData: {
          type: "beta_application",
          submittedAt: new Date().toISOString(),
        },
      });

      if (result && result.id) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for applying to the Beta Program! We will review your application and contact you soon.",
        });
        setFormData({
          name: "",
          email: "",
          institution: "",
          researchArea: "",
          experience: "",
          interest: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting beta application:", error);
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your application. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Zap className="h-16 w-16 mx-auto mb-4 text-yellow-600" />
            <h1 className="text-3xl font-bold mb-2">Beta Program</h1>
            <p className="text-lg text-gray-600">
              Get early access to new features and help shape the future of
              ColabWize
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* Program Overview */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">What is the Beta Program?</h2>
              <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
                The ColabWize Beta Program gives selected users early access to
                upcoming features before they're released to the general public. As
                a beta tester, you'll be among the first to try new functionality
                and provide valuable feedback that helps us improve the product.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Beta testers play a crucial role in shaping ColabWize by identifying
                issues, suggesting improvements, and helping us ensure new features
                meet the needs of our academic community.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Beta Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Early Access</h3>
                </div>
                <p className="text-gray-600">
                  Get exclusive access to new features and improvements before
                  they're publicly released.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Direct Influence</h3>
                </div>
                <p className="text-gray-600">
                  Your feedback directly influences the development and refinement
                  of new features.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Community</h3>
                </div>
                <p className="text-gray-600">
                  Connect with other beta testers and ColabWize developers in our
                  exclusive Discord community.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Receive special recognition in our release notes and community
                  acknowledgments.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-gray-600">
                    Fill out the application form with your background, research interests,
                    and which features you'd like to test.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Review</h3>
                  <p className="text-gray-600">
                    Our team reviews applications based on engagement with ColabWize,
                    research field alignment, and feature testing needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get Access</h3>
                  <p className="text-gray-600">
                    If selected, you'll receive an email invitation with access to
                    the beta features and our private Discord channel.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Test & Feedback</h3>
                  <p className="text-gray-600">
                    Test new features, report bugs via our feedback system, and
                    participate in surveys to help us improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Beta Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current & Upcoming Beta Features</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Advanced Analytics Dashboard</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Premium Exclusive
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Track your writing productivity, citation quality trends, and document creation patterns.
                Includes: most productive day detection, weekly upload velocity, citation fix rates, time-to-verification metrics.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Status: Available to Premium subscribers
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Literature Review Matrix</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Beta
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Batch AI analysis of papers in your library. Extract themes: Gap, Methodology, Result.
                Generate Research Gaps panel (temporal, topical, methodological gaps).
                Requires Premium plan + credits for batch processing.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Status: In active beta testing
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">AI Research Assistant (Explain-Only Mode)</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Beta
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Chat with your papers — ask questions, get explanations, find connections.
                Guardrails prevent text generation; only explains existing content.
                7 database search + Semantic Scholar author profiles.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Status: In active beta testing
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Draft Comparison</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Premium Exclusive
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Compare two document versions side-by-side with AI-powered diff analysis.
                Highlights: added/removed citations, structural changes, argument shifts.
                Exclusive to Premium plan.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Status: Released (Premium only)
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Team Workspaces (Real-time Collab)</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Released
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Yjs/Hocuspocus CRDT-based real-time co-editing. Presence, cursors, comments.
                Workspace Owner/Editor/Viewer roles. Available on Plus/Premium/Institutional.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Status: Released (Plus/Premium/Institutional)
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beta Program Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Active ColabWize account</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Regular user of ColabWize features (any plan)</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Willingness to provide detailed feedback</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Academic or research focus</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Discord account for community access</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Test new features regularly (weekly minimum)</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Report bugs via in-app feedback or Discord</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Provide detailed feedback on usability</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Participate in surveys and discussions</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" /> <span className="text-gray-600">Maintain confidentiality of unreleased features</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Join the Beta Program</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-1">
                  Institution/Affiliation
                </label>
                <input
                  type="text"
                  id="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="University, research institute, or organization"
                />
              </div>

              <div>
                <label htmlFor="researchArea" className="block text-sm font-medium mb-1">
                  Research Area/Field of Study
                </label>
                <input
                  type="text"
                  id="researchArea"
                  value={formData.researchArea}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Computer Science, Biology, History"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  How long have you been using ColabWize?
                </label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select your experience level</option>
                  <option value="less-than-1">Less than 1 month</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="more-than-12">More than 12 months</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">
                  Which features are you most interested in testing?
                </label>
                <textarea
                  id="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us which upcoming features you're most excited about"></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}>
                  {isSubmitting ? "Submitting..." : "Apply to Beta Program"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                How are beta testers selected?
              </h3>
              <p className="text-gray-600">
                We select beta testers based on their engagement with ColabWize,
                their research field, and how well their needs align with
                upcoming features. We aim for a diverse group of users who can
                provide valuable feedback across different academic disciplines.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Is there a fee to join the beta program?
              </h3>
              <p className="text-gray-600">
                No, the beta program is completely free. Beta testers often receive
                extended access to premium features during the testing period.
                However, some beta features may eventually require a Premium plan
                when publicly released.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                How long does the beta testing period last?
              </h3>
              <p className="text-gray-600">
                Beta testing periods vary by feature but typically last 4-8
                weeks. We provide advance notice before features are released to
                the general public. You'll be notified via email and Discord.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What if I'm not selected?
              </h3>
              <p className="text-gray-600">
                Not all applicants can be accepted due to limited spots. You can
                reapply for future beta cycles. All users get access to features
                when they're publicly released per their plan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Can I leave the beta program if I change my mind?
              </h3>
              <p className="text-gray-600">
                Yes, you can leave the beta program at any time. Simply contact
                our support team, and we'll remove you from the beta testing
                group and Discord channel.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Roadmap */}
        <div className="text-center mt-12">
          <Link
            to="/roadmap"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BetaProgramPage;