import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  RefreshCw,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Download,
  Settings,
  Play,
  ExternalLink,
  Shield,
} from "lucide-react";

const InstallationPage = () => {
  const [activePlatform, setActivePlatform] = useState("web");
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const platforms = [
    {
      id: "web",
      icon: <Globe className="h-6 w-6" />,
      title: "Web Browser",
      description: "Primary access — no install needed",
    },
    {
      id: "desktop",
      icon: <Monitor className="h-6 w-6" />,
      title: "Desktop (PWA)",
      description: "Install as app from Chrome/Edge/Safari",
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile (PWA)",
      description: "Add to home screen from Safari/Chrome",
    },
    {
      id: "tablet",
      icon: <Tablet className="h-6 w-6" />,
      title: "Tablet (PWA)",
      description: "Home screen install, split-screen support",
    },
  ];

  const platformSteps: Record<string, any[]> = {
    web: [
      {
        title: "Open a Modern Browser",
        description: "Chrome 90+, Firefox 88+, Safari 14+, Edge 90+",
        details: [
          "Update browser to latest version for best compatibility",
          "Enable JavaScript and cookies for colabwize.com",
          "Allow clipboard access for copy/paste in editor",
        ],
        tip: "Chrome or Firefox recommended for full feature support (real-time sync, PWA install)",
      },
      {
        title: "Navigate to ColabWize",
        description:
          "Go to app.colabwize.com (or your institution's custom domain)",
        details: [
          "Bookmark the URL for quick access",
          "No download, no installer, no admin rights needed",
          "Works behind corporate firewalls (standard HTTPS/WebSocket)",
        ],
        tip: "If your institution uses SSO, you may be redirected to your identity provider",
      },
      {
        title: "Create or Sign In to Your Account",
        description: "Email/password or Google/GitHub OAuth",
        details: [
          "New users: click 'Sign Up' → enter email, name, password",
          "OAuth: click 'Continue with Google' or 'Continue with GitHub'",
          "Verify email via the link sent to your inbox",
          "Complete the one-time onboarding survey (role, institution, goals)",
        ],
        link: { text: "Account Setup Guide", url: "/account-setup" },
      },
      {
        title: "You're Ready",
        description: "Dashboard loads — create your first project",
        details: [
          "Click 'New Project' → choose type, template, citation style",
          "Editor opens with real-time autosave and collaboration",
          "All features available: citations, AI assistant, export, certificates",
        ],
        link: { text: "Quick Start Guide", url: "/quickstart" },
      },
    ],
    desktop: [
      {
        title: "Open Browser & Sign In",
        description:
          "Go to app.colabwize.com in Chrome, Edge, Firefox, or Safari",
        details: [
          "Sign in with your ColabWize account",
          "Your projects, settings, and workspaces sync from the cloud",
        ],
        tip: "No separate desktop app download — the web app IS the desktop experience",
      },
      {
        title: "Install as PWA (Optional but Recommended)",
        description: "Get a windowed app with taskbar/dock icon",
        details: [
          "Chrome/Edge: Menu (⋮) → 'Install ColabWize' or 'Install app'",
          "Firefox: Address bar → install icon → 'Install'",
          "macOS Safari: File → 'Add to Dock'",
          "Linux: Works in Chrome/Edge/Firefox PWA install flow",
        ],
        tip: "PWA launches in its own window, works offline for cached content, auto-updates",
      },
      {
        title: "Launch & Configure",
        description:
          "Open the PWA shortcut from your app launcher/taskbar/dock",
        details: [
          "Sign in once — session persists across restarts",
          "Set preferred citation style in Settings → Editor",
          "Configure notification preferences (desktop notifications supported)",
        ],
        link: { text: "Profile Settings", url: "/profile" },
      },
    ],
    mobile: [
      {
        title: "Open Safari (iOS) or Chrome (Android)",
        description:
          "Go to app.colabwize.com — no App Store/Play Store download",
        details: [
          "Sign in with existing account or create new one",
          "Full editor works on mobile (touch-optimized toolbar)",
          "Real-time collaboration and cursor sync work on mobile",
        ],
        tip: "Editor toolbar collapses to bottom bar on narrow screens; swipe to reveal sidebars",
      },
      {
        title: "Install as PWA / Add to Home Screen",
        description: "Creates a home-screen icon that opens in standalone mode",
        details: [
          "iOS Safari: Share button → 'Add to Home Screen' → 'Add'",
          "Android Chrome: Menu (⋮) → 'Install app' or 'Add to Home screen'",
          "No app store review, no update lag — always latest version",
        ],
      },
      {
        title: "Sign In & Enable Notifications",
        description:
          "Push notifications for collaboration, deadlines, audit completion",
        details: [
          "Allow notifications when browser prompts (or enable in Settings later)",
          "Configure: collaboration alerts, citation audit done, export ready",
          "Biometric unlock (Face ID / fingerprint) supported via browser",
        ],
        link: { text: "Account Setup Guide", url: "/account-setup" },
      },
      {
        title: "Optimize for Mobile Writing",
        description: "Settings → Editor → Mobile Layout",
        details: [
          "Enable 'Compact Toolbar' for more writing space",
          'Adjust "Font Size" for comfortable reading',
          "Use voice dictation (iOS/Android keyboard mic button) for hands-free drafting",
        ],
      },
    ],
    tablet: [
      {
        title: "Open Safari (iPad) or Chrome (Android)",
        description: "Go to app.colabwize.com — desktop-class experience",
        details: [
          "Full editor with sidebars visible simultaneously",
          "Keyboard shortcuts work with external keyboards",
          "Drag-and-drop citations from Sources panel into editor",
        ],
      },
      {
        title: "Install as PWA",
        description: "Standalone window, multitasking support",
        details: [
          "iPad Safari: Share → 'Add to Home Screen'",
          "Android: Menu → 'Install app'",
          "iPadOS: Supports Stage Manager / Split View with PWA window",
        ],
      },
      {
        title: "Tablet-Specific Optimizations",
        description: "Settings tuned for tablet workflows",
        details: [
          "Use Split View: research PDF on left, editor on right",
          "Apple Pencil / stylus: handwritten annotations on PDFs (where supported)",
          "Adjust sidebar width for comfortable touch targets",
        ],
      },
      {
        title: "Cross-Device Sync",
        description: "Same account = same projects everywhere",
        details: [
          "Sign in with same credentials as desktop/mobile",
          "Projects, citations, comments, cursor position sync automatically",
          "Offline edits queue and sync on reconnect",
        ],
        link: { text: "Account Management", url: "/account" },
      },
    ],
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleComplete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const currentSteps = platformSteps[activePlatform] || platformSteps.web;

  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <Download className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">
              Getting Started — No Installation Required
            </h1>
            <p className="text-lg text-gray-600">
              ColabWize is a web-first application. Use it instantly in any
              browser, or install as a PWA (Progressive Web App) for a
              native-like experience on desktop, mobile, and tablet.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Key Point */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                No Traditional Installation
              </h3>
              <p className="text-sm text-blue-800">
                There is no .exe, .dmg, .apk, or App Store download. ColabWize
                runs entirely in your browser with optional PWA installation for
                offline caching, standalone windows, and home-screen icons. All
                your data syncs via the cloud.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choose Your Platform</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => {
                  setActivePlatform(platform.id);
                  setExpandedStep(0);
                  setCompletedSteps([]);
                }}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  activePlatform === platform.id
                    ? "border-blue-500 bg-gray-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`mb-3 ${
                    activePlatform === platform.id
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {platform.icon}
                </div>
                <h3 className="font-semibold">{platform.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {platform.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Progress: {completedSteps.length} of {currentSteps.length} steps
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((completedSteps.length / currentSteps.length) * 100)}%
              complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${
                  (completedSteps.length / currentSteps.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Steps - {platforms.find((p) => p.id === activePlatform)?.title}
          </h2>
          <div className="space-y-4">
            {currentSteps.map((step, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  completedSteps.includes(index)
                    ? "border-green-300 bg-green-50"
                    : expandedStep === index
                      ? "border-blue-300 shadow-md"
                      : "border-gray-200"
                }`}
              >
                {/* Step Header */}
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mr-4">
                    {completedSteps.includes(index) ? (
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-blue-600 font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold ${
                        completedSteps.includes(index)
                          ? "text-green-700 line-through"
                          : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleComplete(index, e)}
                      className={`p-2 rounded-lg transition-colors ${
                        completedSteps.includes(index)
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                      title={
                        completedSteps.includes(index)
                          ? "Mark incomplete"
                          : "Mark complete"
                      }
                    >
                      <CheckCircle className="h-5 w-5" />
                    </button>
                    {expandedStep === index ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedStep === index && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                    <div className="ml-14">
                      <h4 className="font-medium text-gray-700 mb-3">
                        Instructions:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail: string, dIndex: number) => (
                          <li key={dIndex} className="flex items-start text-sm">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {step.tip && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                          <p className="text-sm text-yellow-800">
                            <strong>Tip:</strong> {step.tip}
                          </p>
                        </div>
                      )}
                      {step.link && (
                        <Link
                          to={step.link.url}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-gray-700 font-medium"
                        >
                          {step.link.text}
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/account-setup"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-gray-50 transition-colors"
            >
              <Settings className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Account Setup</h3>
                <p className="text-sm text-gray-500">Configure your account</p>
              </div>
            </Link>
            <Link
              to="/quickstart"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-gray-50 transition-colors"
            >
              <Play className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold">Quick Start</h3>
                <p className="text-sm text-gray-500">Get started quickly</p>
              </div>
            </Link>
            <Link
              to="/troubleshooting"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="h-6 w-6 text-orange-600 mr-3" />
              <div>
                <h3 className="font-semibold">Troubleshooting</h3>
                <p className="text-sm text-gray-500">Fix common issues</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="p-6 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Common Questions</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-gray-600">
                  <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    "App won't load" — clear browser cache, check internet, try
                    incognito
                  </span>
                </li>
                <li className="flex items-start text-gray-600">
                  <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    "PWA install not showing" — use Chrome/Edge/Safari; must be
                    on HTTPS
                  </span>
                </li>
                <li className="flex items-start text-gray-600">
                  <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    "Can't sign in" — reset password at /login or contact
                    support
                  </span>
                </li>
                <li className="flex items-start text-gray-600">
                  <RefreshCw className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    "Real-time sync fails" — check WebSocket not blocked by
                    firewall/VPN
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Get Support</h3>
              <div className="space-y-3">
                <Link
                  to="/faq"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  → Check FAQ
                </Link>
                <Link
                  to="/contact-support"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  → Contact Support
                </Link>
                <a
                  href="https://discord.gg/2MMSdX3Uee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  → Join Discord Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
