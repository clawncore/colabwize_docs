import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HelpSection } from "../shared/HelpSection";
import { ArrowLeft, Mail, ChevronRight, CheckCircle } from "lucide-react";
import {
  VideoPlaceholder,
  Step,
  InfoBox,
  Tip,
  NumberedSection,
} from "../docs/DocBlocks";

/* ---------- Brand logos (inline SVG, no external assets needed) ---------- */

const GoogleIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

const MicrosoftIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 21 21" aria-hidden="true">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

// Real screenshot: loads the image the team drops into docs/public/images/.
const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure className="my-6">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-gray-200"
    />
    <figcaption className="text-center text-xs text-gray-500 mt-2">
      {caption}
    </figcaption>
  </figure>
);

const AccountSetupPage = () => {
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
            <h1 className="text-3xl font-bold mb-2">Set Up Your Account</h1>
            <p className="text-lg text-gray-600">
              Create a free ColabWize account and sign in, in about two minutes,
              no credit card required.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            A ColabWize account is your home for drafting papers, checking
            citations, running originality scans, and collaborating with
            classmates. You can create one with your email address, or sign in
            with an existing{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <GoogleIcon className="h-4 w-4" />
            </span>
            Google or{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <MicrosoftIcon className="h-4 w-4" />
            </span>
            Microsoft account, whichever you prefer. This guide shows you the
            sign-in screen, the three ways to get in, and then walks through
            each one step by step, how to confirm your email, and how to finish
            onboarding before you head to the Quick Start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">
                What you'll need
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>An email address, or a Google / Microsoft account</li>
                <li>A password (if signing up by email)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">Time</p>
              <p className="mt-2 text-sm text-gray-600">
                About 2 minutes, plus a minute to confirm your email.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">Cost</p>
              <p className="mt-2 text-sm text-gray-600">
                Free. No payment details required to start.
              </p>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
          <p className="text-gray-600 mb-2">
            Prefer to follow along? This short video covers the whole
            create-and-sign-in flow from start to finish.
          </p>
          <VideoPlaceholder
            title="Account setup & sign-in walkthrough"
            length="~2 minutes"
          />
        </section>

        {/* Step 1: sign-in screen + the 3 ways */}
        <section className="mb-12">
          <NumberedSection
            n={1}
            title="The sign-in screen and your three options"
          >
            <p className="text-gray-600 mb-4">
              When you open ColabWize, you'll see the sign-in screen. It has a
              field for your email and password at the top, and dedicated
              buttons underneath for the two social providers. Here's what the
              screen looks like:
            </p>

            <p className="text-gray-600 mb-4">
              Having trouble signing in? See{" "}
              <Link
                to="/troubleshooting#cant-sign-in"
                className="text-blue-600 hover:underline"
              >
                Can't sign in
              </Link>{" "}
              in our Troubleshooting guide.
            </p>

            {/* IMAGE 1: sign-in screen / buttons */}
            <Figure
              src="/images/sign-in.png"
              alt="ColabWize sign-in screen"
              caption="The ColabWize sign-in screen: email and password at the top, with Continue with Google and Continue with Microsoft below."
            />

            <p className="text-gray-600 mb-4">
              You can get into your account three ways. They all land you in the
              same place. Pick whichever is easiest. The three options are
              highlighted below:
            </p>

            {/* IMAGE 2: the 3 red boxes */}
            <Figure
              src="/images/three-ways.png"
              alt="The three ways to sign in, highlighted"
              caption="The three ways to sign in to ColabWize, highlighted: (1) Google, (2) Microsoft, (3) Email."
            />
          </NumberedSection>
        </section>

        {/* Option 1: Google */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-900 text-white font-semibold">
              1
            </div>
            <GoogleIcon className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Sign in with Google</h2>
          </div>

          <p className="text-gray-600 mb-4">
            If you use Gmail or Google Workspace, you can skip creating a
            separate password. ColabWize uses your existing Google login. Your
            ColabWize account is created automatically from your Google email
            the first time you use this option.
          </p>

          <Step n={1} title="Click Continue with Google">
            On the sign-in screen, click the{" "}
            <span className="font-medium">Continue with Google</span> button.
          </Step>
          <Step n={2} title="Choose your Google account">
            A Google window opens. Select the account you want to use, or sign
            in if you aren't already. If multiple accounts are listed, pick the
            one you want linked to ColabWize.
          </Step>
          <Step n={3} title="Approve and you're in">
            Review the permissions (ColabWize only needs your name and email)
            and click <span className="font-medium">Allow</span>. You're signed
            in, no password required.
          </Step>

          <InfoBox>
            Already have a ColabWize account under that same Gmail address?
            Google sign-in connects to it automatically instead of making a
            duplicate.
          </InfoBox>
        </section>

        {/* Option 2: Microsoft */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-900 text-white font-semibold">
              2
            </div>
            <MicrosoftIcon className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Sign in with Microsoft</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Microsoft sign-in works with personal Microsoft accounts (Outlook,
            Hotmail, Live) as well as work and school accounts, including
            university <span className="font-medium">.edu</span> logins through
            Microsoft Entra ID. Like Google, it creates your ColabWize account
            from your Microsoft email, so there's no separate password to
            remember.
          </p>

          <Step n={1} title="Click Continue with Microsoft">
            On the sign-in screen, click the{" "}
            <span className="font-medium">Continue with Microsoft</span> button.
          </Step>
          <Step n={2} title="Choose your Microsoft account">
            A Microsoft window opens. Select your account: personal, work, or
            school. If you're already signed in to Microsoft, you may just need
            to confirm which account to use.
          </Step>
          <Step n={3} title="Approve and you're in">
            Review the permissions and click{" "}
            <span className="font-medium">Accept</span>. You're signed in with
            your Microsoft email, no password required.
          </Step>

          <InfoBox>
            Microsoft sign-in is enabled for personal, work, and school
            accounts, so students using a university{" "}
            <span className="font-medium">.edu</span> login can sign in
            directly.
          </InfoBox>
        </section>

        {/* Option 3: Email */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-900 text-white font-semibold">
              3
            </div>
            <Mail className="h-6 w-6 text-gray-700" />
            <h2 className="text-2xl font-bold">Sign in with email</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Email and password is the default method and works for any address.
            Use this if you created your account with your email, or if you want
            a standard username-and-password login.
          </p>

          <Step n={1} title="Open the sign-in page">
            Go to <span className="font-medium">colabwize.com</span> and click{" "}
            <span className="font-medium">Sign In</span> in the top-right
            corner.
          </Step>
          <Step n={2} title="Enter your email and password">
            Type the email address you registered with and the password you
            chose. Your password must be at least 8 characters and include a mix
            of letters, numbers, and symbols.
          </Step>
          <Step n={3} title="Click Sign In">
            You'll be taken straight to your dashboard. If you've enabled
            two-factor authentication, you'll be asked for a code first.
          </Step>

          <Tip>
            Forgot your password? Click{" "}
            <span className="font-medium">Forgot password</span> on the sign-in
            screen to receive a reset link by email.
          </Tip>
        </section>

        {/* Returning user note */}
        <section className="mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold">Returning user?</span> Use the
                  same method you originally registered with: Google, Microsoft,
                  or email. You can't mix an email/password login with a Google
                  or Microsoft account that uses the same address; if you
                  registered with a provider, sign in with that provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: confirm email */}
        <section className="mb-12">
          <NumberedSection n={2} title="Confirm your email">
            <p className="text-gray-600 mb-4">
              After you create your account (email method), ColabWize sends a
              verification email so we know the address is really yours. Here's
              exactly what happens:
            </p>

            <Step n={1} title="Watch for the email">
              Within a minute or two, you'll receive a message from ColabWize
              titled something like{" "}
              <span className="font-medium">Verify your email</span>. Check your
              inbox, and if it's not there, look in spam or junk.
            </Step>

            <Step n={2} title="Click the verification link">
              Open the email and click{" "}
              <span className="font-medium">Verify Email Address</span>. This
              confirms your account and signs you in. The link expires after 24
              hours.
            </Step>

            <Step n={3} title="Didn't get it? Resend">
              Back on the confirmation screen, click{" "}
              <span className="font-medium">Resend</span> to send a fresh link.
            </Step>

            <p className="text-gray-600 mt-4">
              Still no email? See{" "}
              <Link
                to="/troubleshooting#verification-email-never-arrives"
                className="text-blue-600 hover:underline"
              >
                Verification email never arrives
              </Link>{" "}
              in our Troubleshooting guide.
            </p>

            <Tip>
              <span className="font-semibold">Student discount:</span> if you
              sign up with a <span className="font-medium">.edu</span> email
              address, you'll automatically qualify for student pricing on Plus
              and Premium plans. You can also apply a student discount later
              from your billing settings.
            </Tip>
          </NumberedSection>
        </section>

        {/* Step 3: onboarding */}
        <section className="mb-12">
          <NumberedSection n={3} title="Complete your onboarding">
            <p className="text-gray-600 mb-4">
              This is the first onboarding screen displayed immediately after a
              user successfully logs into the ColabWize dashboard for the first
              time. Its purpose is to introduce you to the interactive product
              tour before guiding you through the application's features.
            </p>

            <Figure
              src="/images/onboarding.png"
              alt="ColabWize first-run onboarding popup"
              caption="The first-run onboarding popup. The dashboard behind it is intentionally dimmed with a semi-transparent overlay to focus attention on the welcome dialog at the center of the screen."
            />

            <p className="text-gray-600 mb-4">
              The background dashboard is intentionally dimmed with a
              semi-transparent overlay to direct your attention toward the
              onboarding dialog positioned at the center of the screen. The
              popup contains three key interactive elements:
            </p>

            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <strong>Welcome Message</strong> - The heading "Welcome to
                ColabWize! 🎉" introduces the onboarding experience and informs
                you that a guided tour is available.
              </li>
              <li>
                <strong>Skip Tour Button</strong> - Located in the lower-left
                corner of the dialog, this option lets experienced users dismiss
                the onboarding process and continue directly to the dashboard.
              </li>
              <li>
                <strong>Next Button (Step 1 of 6)</strong> - Located in the
                lower-right corner, this is the primary call-to-action that
                advances you to the next step of the onboarding sequence. The
                "Step 1 of 6" label indicates the onboarding consists of six
                guided steps.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              The six-step tour walks you through the dashboard: uploading your
              first document, your Latest Activity panel, the Advanced Document
              Analytics, and your Recent Documents. You can replay the tour at
              any time from the dashboard using the "Take a tour" button. When
              you're finished, continue to the Quick Start.
            </p>

            <Link
              to="/quickstart"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Continue to Quick Start
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </NumberedSection>
        </section>

        {/* Done: next step */}
        <section className="mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">
                  You're all set to start writing
                </p>
                <p className="text-sm text-gray-600">
                  Your account is created, verified, and onboarded. Next, create
                  your first project and try the AI writing assistant.
                </p>
              </div>
            </div>
            <Link
              to="/quickstart"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium text-center flex-shrink-0"
            >
              Continue to Quick Start
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-medium text-gray-900 text-sm">
                I didn't receive the verification email
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Check your spam or junk folder, then click{" "}
                <span className="font-medium">Resend</span> on the confirmation
                screen. Still nothing? See the{" "}
                <Link
                  to="/troubleshooting"
                  className="text-blue-600 hover:underline"
                >
                  Troubleshooting Guide
                </Link>
                .
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-medium text-gray-900 text-sm">
                "Email already in use"
              </p>
              <p className="text-gray-600 text-sm mt-1">
                You may have signed up before. Click{" "}
                <span className="font-medium">Sign In</span> and use{" "}
                <span className="font-medium">Forgot password</span> to reset
                it. If you originally used Google or Microsoft, sign in with
                that method instead.
              </p>
            </div>
          </div>
        </section>

        <HelpSection description="If you're stuck at any step, our support team and FAQ are here for you." />
      </div>
    </div>
  );
};

export default AccountSetupPage;
