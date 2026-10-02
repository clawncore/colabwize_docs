import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  CreditCard,
  Settings,
  MessageCircle,
  Zap,
  ArrowRight,
  LifeBuoy,
  Mail,
  Shield,
  FileCheck,
  Users,
  GraduationCap,
  Download,
  Link2,
} from "lucide-react";

const HelpCenterPage = () => {
  const categories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Create account, onboarding survey, first project, editor basics.",
      link: "/quickstart",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      borderColor: "border-yellow-100",
    },
    {
      icon: FileCheck,
      title: "Core Features",
      description: "AI Research Assistant, Citation Audit, Find Papers, Certificates, Export, Literature Review.",
      link: "/ai-integrity",
      color: "text-blue-600",
      bg: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: Users,
      title: "Collaboration & Workspaces",
      description: "Team Workspaces, RBAC, real-time co-editing, comments, shared vault, analytics.",
      link: "/team-workspace",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      borderColor: "border-indigo-100",
    },
    {
      icon: GraduationCap,
      title: "Integrations",
      description: "Zotero, Mendeley, Google Drive, OneDrive, .bib/.ris import, DOI/URL fetch.",
      link: "/integrations",
      color: "text-purple-600",
      bg: "bg-purple-50",
      borderColor: "border-purple-100",
    },
    {
      icon: CreditCard,
      title: "Billing & Subscriptions",
      description: "Plans (Free/Plus/Researcher/Institutional), credits, upgrades, invoices, cancellation.",
      link: "/billing",
      color: "text-green-600",
      bg: "bg-green-50",
      borderColor: "border-green-100",
    },
    {
      icon: Settings,
      title: "Account & Profile",
      description: "Profile settings, password, email, citation style preferences, data deletion.",
      link: "/account",
      color: "text-pink-600",
      bg: "bg-pink-50",
      borderColor: "border-pink-100",
    },
    {
      icon: LifeBuoy,
      title: "Troubleshooting",
      description: "Editor loading, sync issues, citation audit problems, export failures, integration errors.",
      link: "/troubleshooting",
      color: "text-red-600",
      bg: "bg-red-50",
      borderColor: "border-red-100",
    },
    {
      icon: Shield,
      title: "Privacy & Legal",
      description: "Privacy Policy, Terms of Service, GDPR, Data Processing Agreement, Security.",
      link: "/privacy",
      color: "text-gray-600",
      bg: "bg-gray-50",
      borderColor: "border-gray-100",
    },
  ];

  const popularArticles = [
    {
      title: "AI Research Assistant & Integrity Co-Pilot",
      link: "/ai-integrity",
      readTime: "6 min read",
    },
    {
      title: "Citation Audit: Compliance Score & Auto-Fix",
      link: "/citations",
      readTime: "5 min read",
    },
    {
      title: "Find Papers: 7 Database Parallel Search",
      link: "/find-papers",
      readTime: "4 min read",
    },
    {
      title: "Certificate of Authorship & Academic Integrity",
      link: "/certificates",
      readTime: "5 min read",
    },
    {
      title: "Multi-Format Export (DOCX, PDF, LaTeX, RTF, TXT)",
      link: "/export",
      readTime: "4 min read",
    },
    {
      title: "Literature Review Matrix & Research Gaps",
      link: "/literature-review",
      readTime: "6 min read",
    },
    {
      title: "Team Workspaces: Real-Time Collaboration",
      link: "/team-workspace",
      readTime: "5 min read",
    },
    {
      title: "Document & Task Templates",
      link: "/templates",
      readTime: "4 min read",
    },
    {
      title: "Zotero & Mendeley Integration Guide",
      link: "/integrations",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen px-8 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Browse guides, search documentation, or contact support.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for articles, guides, and help..."
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-shadow hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Help Categories */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>
            <Link
              to="/"
              className="text-blue-600 font-medium hover:text-gray-700 flex items-center">
              View all documentation
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className={`block p-6 rounded-xl border ${category.borderColor} hover:shadow-lg transition-all duration-300 group bg-white`}>
                <div
                  className={`w-12 h-12 rounded-lg ${category.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.link}
                className="flex flex-col p-5 rounded-lg border border-gray-100 hover:border-gray-300 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-start mb-2">
                  <BookOpen className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    {article.title}
                  </h3>
                </div>
                <span className="text-xs text-gray-500 ml-8">
                  {article.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links by Role */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Links by Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-gray-100 rounded-xl">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Students</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/quickstart" className="text-blue-600 hover:underline">Quick Start Guide</Link></li>
                <li><Link to="/citations" className="text-blue-600 hover:underline">Citation Audit for Papers</Link></li>
                <li><Link to="/find-papers" className="text-blue-600 hover:underline">Find Sources for Essays</Link></li>
                <li><Link to="/export" className="text-blue-600 hover:underline">Export to DOCX/PDF</Link></li>
                <li><Link to="/templates" className="text-blue-600 hover:underline">Academic Templates</Link></li>
              </ul>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl">
              <div className="flex items-center mb-3">
                <FileCheck className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Researchers</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/literature-review" className="text-blue-600 hover:underline">Literature Review Matrix</Link></li>
                <li><Link to="/certificates" className="text-blue-600 hover:underline">Authorship Certificates</Link></li>
                <li><Link to="/integrations" className="text-blue-600 hover:underline">Zotero/Mendeley Sync</Link></li>
                <li><Link to="/ai-integrity" className="text-blue-600 hover:underline">AI Research Assistant</Link></li>
                <li><Link to="/team-workspace" className="text-blue-600 hover:underline">Collaborate with Co-authors</Link></li>
              </ul>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Instructors / Teams</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/team-workspace" className="text-blue-600 hover:underline">Create Team Workspace</Link></li>
                <li><Link to="/billing" className="text-blue-600 hover:underline">Manage Team Subscription</Link></li>
                <li><Link to="/templates" className="text-blue-600 hover:underline">Shared Templates</Link></li>
                <li><Link to="/analytics" className="text-blue-600 hover:underline">Contribution Analytics</Link></li>
                <li><Link to="/account" className="text-blue-600 hover:underline">Member Management</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact/Support CTA */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wide mb-4">
                Still need help?
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our support team is here to help. We typically respond within 24 hours on business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-support"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <Link
                  to="https://discord.gg/2MMSdX3Uee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                  <MessageCircle className="h-5 w-5 mr-2 text-[#5865F2]" />
                  Join Discord Community
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
              <div className="relative rounded-xl shadow-lg w-full max-w-sm object-cover h-64 border border-gray-100 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <span className="text-gray-400 text-center px-4">
                  Support team illustration
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenterPage;