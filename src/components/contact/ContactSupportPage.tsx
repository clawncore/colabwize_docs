import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  HelpCircle,
  User,
  FileText,
  AlertTriangle,
  Shield,
  CheckCircle,
  Send,
  Ticket,
  Loader2,
  ExternalLink,
  Users,
} from "lucide-react";
import { useState } from "react";
import ContactService from "../../lib/utils/contactService";

const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    ticketNumber?: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send form data to backend support service
      const result = await ContactService.submitContactForm(
        formData.name,
        formData.email,
        formData.subject,
        formData.message,
      );

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! We'll get back to you within 24 hours.",
          ticketNumber: result.ticketNumber,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportOptions = [
    {
      title: "Contact Form (Recommended)",
      description: "Submit a ticket — get a ticket number and email confirmation",
      icon: <Send className="h-6 w-6 text-blue-600" />,
      availability: "24/7 — Response within 24 hours",
      action: "Submit Ticket",
      primary: true,
    },
    {
      title: "Email Support",
      description: "Direct email to our support team",
      icon: <Mail className="h-6 w-6 text-green-600" />,
      availability: "24/7 — Response within 24 hours",
      action: "support@colabwize.com",
      href: "mailto:support@colabwize.com",
    },
    {
      title: "Billing & Payments",
      description: "Subscription, invoices, refunds, payment issues",
      icon: <FileText className="h-6 w-6 text-orange-600" />,
      availability: "Mon-Fri 9AM-5PM EST",
      action: "billing@colabwize.com",
      href: "mailto:billing@colabwize.com",
    },
    {
      title: "Security Issues",
      description: "Report vulnerabilities, data concerns, account compromise",
      icon: <Shield className="h-6 w-6 text-red-600" />,
      availability: "24/7 — Priority response",
      action: "security@colabwize.com",
      href: "mailto:security@colabwize.com",
    },
    {
      title: "Privacy & GDPR",
      description: "Data access, deletion, portability, compliance questions",
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      availability: "Mon-Fri 9AM-5PM EST",
      action: "privacy@colabwize.com",
      href: "mailto:privacy@colabwize.com",
    },
    {
      title: "Institutional Sales",
      description: "University/Enterprise plans, SSO, volume licensing",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      availability: "Mon-Fri 9AM-5PM EST",
      action: "sales@colabwize.com",
      href: "mailto:sales@colabwize.com",
    },
    {
      title: "Community Discord",
      description: "Connect with other users, get peer help, feature discussions",
      icon: <MessageCircle className="h-6 w-6 text-indigo-600" />,
      availability: "24/7 — Community & staff",
      action: "Join Discord",
      href: "https://discord.gg/colabwize",
      external: true,
    },
  ];

  const commonTopics = [
    {
      title: "Account Issues",
      description: "Login problems, password resets, account access, MFA",
      icon: <User className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Billing Questions",
      description: "Subscription changes, payment issues, invoices, refunds",
      icon: <FileText className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Technical Support",
      description: "App issues, bugs, performance, feature requests",
      icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
    },
    {
      title: "Academic Features",
      description: "Citation audit, originality scan, AI detection, certificates, export",
      icon: <HelpCircle className="h-5 w-5 text-purple-600" />,
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
            <Ticket className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Contact Support</h1>
            <p className="text-lg text-gray-600">
              Get help from our dedicated support team
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* How Support Works */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">We're Here to Help</h2>
                <p className="opacity-90">
                  Our support team is ready to assist you with any questions or issues.
                  All contact form submissions receive a ticket number and email confirmation.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="bg-white/20 p-3 rounded-lg"><Ticket className="h-6 w-6" /></div>
                <div className="bg-white/20 p-3 rounded-lg"><Mail className="h-6 w-6" /></div>
              </div>
            </div>
          </div>

          {/* Support Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How Our Support Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">1. Submit</h3>
                <p className="text-gray-600 text-sm">
                  Fill out the form or email us. Get instant ticket number (CW-YYYY-XXXX).
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">2. Confirm</h3>
                <p className="text-gray-600 text-sm">
                  Receive email confirmation with ticket number and expected response time.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">3. Investigate</h3>
                <p className="text-gray-600 text-sm">
                  Team reviews your ticket. Discord alerts for urgent issues (billing, security).
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">4. Resolve</h3>
                <p className="text-gray-600 text-sm">
                  Response within 24 hours. Ticket marked resolved. Follow-up if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                {submitStatus.ticketNumber && (
                  <p className="font-semibold mb-2">
                    Your ticket number: <code className="bg-gray-100 px-2 py-1 rounded">{submitStatus.ticketNumber}</code>
                  </p>
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Support Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  option.primary
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 transition-colors"
                }`}>
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3">{option.icon}</div>
                  <h3 className="text-lg font-semibold">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    <Clock className="h-3 w-3 mr-1" />
                    {option.availability}
                  </span>
                </div>
                {option.href ? (
                  <a
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center w-full justify-center px-4 py-2 rounded-lg font-medium text-sm ${
                      option.primary
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                    {option.action}
                    {option.external && <ExternalLink className="h-4 w-4 ml-2" />}
                  </a>
                ) : (
                  <button
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                    disabled={!option.primary}>
                    {option.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Support Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonTopics.map((topic, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 mr-3">{topic.icon}</div>
                  <h3 className="text-lg font-semibold">{topic.title}</h3>
                </div>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before Contacting Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Before Contacting Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Check Our Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-600">
                    <Link to="/faq" className="text-blue-600 hover:underline">Browse our FAQ</Link> for quick answers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-600">
                    <Link to="/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting guide</Link> — including{" "}
                    <Link to="/troubleshooting#cant-sign-in" className="text-blue-600 hover:underline">Can't sign in</Link>{" "}
                    and{" "}
                    <Link to="/troubleshooting#a-paid-feature-is-locked" className="text-blue-600 hover:underline">A paid feature is locked</Link>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-600">
                    Check our <Link to="/" className="text-blue-600 hover:underline">documentation</Link> for feature guides
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-600">
                    <Link to="/roadmap" className="text-blue-600 hover:underline">Roadmap</Link> for upcoming features
                  </span>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Prepare Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-gray-600">Your account email address</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-gray-600">Current plan (Free/Plus/Premium)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-gray-600">Details about the issue (what, when, how often)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-gray-600">Screenshots or screen recordings if applicable</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-gray-600">Browser/OS and any error messages</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ticket Info */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Ticket className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-amber-800">
                <h3 className="font-semibold mb-2">Ticket Numbers</h3>
                <p className="text-sm mb-2">
                  All contact form submissions receive a ticket number in the format
                  <code className="bg-white px-1.5 py-0.5 rounded">CW-YYYY-XXXX</code>
                  (e.g., CW-2026-0042). Save this number to check status or follow up.
                </p>
                <p className="text-sm">
                  You'll receive an email confirmation with your ticket number.
                  Our team also receives the ticket in our Discord support channel for immediate triage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency */}
        <section className="mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-red-800">
                <h3 className="font-semibold mb-2">Emergency / Critical Issues</h3>
                <p className="text-sm mb-2">
                  For critical issues affecting your academic work (data loss, account compromise, security breach):
                </p>
                <ul className="space-y-1 text-sm pl-5 list-disc">
                  <li>Email <a href="mailto:security@colabwize.com" className="underline">security@colabwize.com</a> (24/7 monitoring)</li>
                  <li>Include "URGENT" in subject line</li>
                  <li>Describe the issue and impact on your work</li>
                </ul>
                <p className="text-sm mt-2">
                  For billing emergencies: <a href="mailto:billing@colabwize.com" className="underline">billing@colabwize.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactSupportPage;