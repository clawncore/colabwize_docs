import { Link } from "react-router-dom";
import { HelpSection } from "../shared/HelpSection";
import {
  ArrowLeft,
  User,
  Camera,
  GraduationCap,
  BookOpen,
  Globe,
  ChevronRight,
  CheckCircle,
  Download,
  Trash2,
} from "lucide-react";
import {
  VideoPlaceholder,
  Step,
  Tip,
  InfoBox,
  NumberedSection,
} from "../docs/DocBlocks";

const ProfileSettingsPage = () => {
  const profileSections = [
    {
      title: "Basic Information",
      description: "Your name, profile picture, and contact details",
      icon: <User className="h-6 w-6 text-blue-600" />,
      settings: [
        "Full Name",
        "Profile Picture",
        "Email Address",
        "Phone Number",
      ],
    },
    {
      title: "Academic Profile",
      description: "Your educational background and academic interests",
      icon: <GraduationCap className="h-6 w-6 text-green-600" />,
      settings: [
        "Institution",
        "Academic Level",
        "Field of Study",
        "Graduation Year",
      ],
    },
    {
      title: "Writing Preferences",
      description: "Customize your writing experience",
      icon: <BookOpen className="h-6 w-6 text-purple-600" />,
      settings: [
        "Preferred Citation Style",
        "Default Document Type",
        "Language Preferences",
        "Writing Goals",
      ],
    },
    {
      title: "Public Profile",
      description: "Control what others see on your profile",
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      settings: [
        "Profile Visibility",
        "Show Academic Information",
        "Display Achievements",
        "Social Links",
      ],
    },
  ];

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
            <h1 className="text-3xl font-bold mb-2">Set Up Your Profile</h1>
            <p className="text-lg text-gray-600">
              Add your academic details and writing preferences so ColabWize can
              give you better suggestions and citations.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-4xl">
        {/* Overview */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Your profile tells ColabWize which citation style you use, what
            you're studying, and how you like to write. A complete profile means
            more accurate citation checks, smarter writing suggestions, and an
            easier time collaborating with classmates. Most of it takes under
            three minutes to fill in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">Time</p>
              <p className="mt-2 text-sm text-gray-600">
                About 3 minutes to complete.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">Required?</p>
              <p className="mt-2 text-sm text-gray-600">
                Basic info only. Academic details are recommended.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900">
                Editable anytime
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Change anything later from Settings.
              </p>
            </div>
          </div>

          {/* Video */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Watch the walkthrough</h2>
            <p className="text-gray-600 mb-2">
              A quick tour of the profile settings screen.
            </p>
            <VideoPlaceholder
              title="Profile setup walkthrough"
              length="~2 minutes"
            />
          </section>

          {/* IMAGE 1: Opening the Profile Menu */}
          <Figure
            src="/images/profile-settings.png"
            alt="Opening the User Profile Menu"
            caption="Image 1 – Opening the Profile Menu. Click the profile avatar in the upper-right corner to open the account menu, which gives quick access to profile management, documents, account settings, and logout. (Avatar, user info, and the View Profile option are highlighted; the user's name and email are blurred for privacy.)"
          />

          <p className="text-gray-700 leading-relaxed mb-4">
            Open the menu and choose{" "}
            <span className="font-medium">View Profile</span> (or Settings →
            Profile) to reach the screen where you'll enter your details. Once
            you're there, the walkthrough below shows each step: basic
            information, your academic profile, writing preferences, what others
            can see, and your account security.
          </p>

          {/* IMAGE 2: Profile Management page */}
          <Figure
            src="/images/profile-dashboard.png"
            alt="Profile Management page"
            caption="Image 2 – Profile Management. This is the screen after choosing View Profile from the account menu. (1) Profile Picture and the Change Photo button, (2) Basic Information (Full Name, Email, Username, Bio — name, email, and username blurred for privacy), (3) Professional Information with academic details such as Field of Study, Academic Level, Institution, and Location. Annotations use red numbered callouts; the interface layout is unchanged."
          />
        </section>

        {/* Step 1: open settings */}
        <NumberedSection n={1} title="Open Profile settings">
          <Step n={1} title="Open the account menu">
            Click your <span className="font-medium">avatar</span> (or initials)
            in the top-right corner of any page, then choose{" "}
            <span className="font-medium">Settings</span>.
          </Step>
          <Step n={2} title="Go to the Profile tab">
            In Settings, select the <span className="font-medium">Profile</span>{" "}
            tab. You'll see four sections: Basic Information, Academic Profile,
            Writing Preferences, and Public Profile.
          </Step>
        </NumberedSection>

        {/* Step 2: basic info */}
        <NumberedSection n={2} title="Add your basic information">
          <Step n={1} title="Enter your name and contact details">
            Fill in your full name and the email and phone number you want
            associated with your account. Your email is pre-filled from sign-up
            but you can review it.
          </Step>
          <Step n={2} title="Upload a profile picture">
            Click the camera button on the avatar circle to upload a photo (JPG,
            PNG, or GIF, up to 5MB). A clear photo helps collaborators recognize
            you.
          </Step>
        </NumberedSection>

        {/* Step 3: academic profile */}
        <NumberedSection n={3} title="Fill in your academic profile">
          <p className="text-gray-600 mb-2">
            This section powers better citation suggestions and document
            defaults. It's optional, but strongly recommended.
          </p>
          <div className="border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Academic Profile fields
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></div>
                Institution — your university or school
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></div>
                Academic Level — e.g., Undergraduate, Masters, PhD
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></div>
                Field of Study — e.g., Computer Science, History
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></div>
                Graduation Year
              </li>
            </ul>
          </div>
          <Tip>
            Pick the citation style you use most often (APA, MLA, Chicago,
            Harvard, or IEEE). ColabWize will suggest it by default for new
            documents.
          </Tip>
        </NumberedSection>

        {/* Step 4: writing preferences */}
        <NumberedSection n={4} title="Set your writing preferences">
          <Step n={1} title="Choose a default citation style">
            Under <span className="font-medium">Writing Preferences</span>,
            select your preferred citation style. This becomes the default for
            every new document.
          </Step>
          <Step n={2} title="Pick a default document type and language">
            Set your usual document type (essay, research paper, thesis, etc.)
            and your writing language. These pre-fill new projects so you start
            faster.
          </Step>
          <Step n={3} title="Add writing goals (optional)">
            Optional goals — like "improve clarity" or "tighten structure" —
            help the AI writing assistant tailor its suggestions.
          </Step>
        </NumberedSection>

        {/* Step 5: public profile */}
        <NumberedSection n={5} title="Control what others see">
          <Step n={1} title="Review your Public Profile">
            In the <span className="font-medium">Public Profile</span> section,
            decide your visibility, whether to show academic information,
            display achievements, and which social links appear.
          </Step>
          <InfoBox>
            Your profile is only shared according to these settings. Review the{" "}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            for full details on how your information is used.
          </InfoBox>
        </NumberedSection>

        {/* Save + next */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Save and continue</h2>
          <p className="text-gray-600 mb-4">
            Changes save automatically as you edit. Once your profile looks
            right, create your first project or jump into the writing tools.
          </p>
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Profile ready</p>
                <p className="text-sm text-gray-600">
                  You can now create projects and run citation checks.
                </p>
              </div>
            </div>
            <Link
              to="/create-project"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium text-center flex-shrink-0"
            >
              Create your first project
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* Account & Security (image 3: settings master) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Manage your account and security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond your profile, the Settings page also controls your password,
            the research tools you connect, extra login security, and your data.
            It is divided into four areas, each marked with a numbered callout.
          </p>
          <Figure
            src="/images/account-settings.png"
            alt="ColabWize Settings page"
            caption="Image 3 – Settings page overview. The Settings page is divided into four major areas, each marked with a numbered callout: (1) Password Management, (2) Integrations (Zotero, Mendeley, Google Drive, Microsoft OneDrive), (3) Two-Factor Authentication, and (4) Danger Zone (Download Your Data, Delete Account). Annotations use red numbered callouts; the interface layout is unchanged."
          />
        </section>

        <NumberedSection n={6} title="Update your password">
          <Step n={1} title="Open the Password section">
            From the dashboard, click your avatar in the top-right corner and
            choose <span className="font-medium">Settings</span>. Then select
            the Password tab (callout 1 in Image 3).
          </Step>
          <Step n={2} title="Enter your current password">
            Type your existing password in the{" "}
            <span className="font-medium">Current Password</span> field. This
            confirms it is really you making the change.
          </Step>
          <Step n={3} title="Create and confirm a new password">
            In the <span className="font-medium">New Password</span> and{" "}
            <span className="font-medium">Confirm New Password</span> fields,
            enter your new password. The password requirements appear beneath
            the fields so you can see what still needs to be added.
          </Step>
          <InfoBox>
            Choose a strong password: at least 8 characters, a mix of uppercase
            and lowercase letters, at least one number, and at least one symbol.
            Do not reuse a password from another site.
          </InfoBox>
          <Step n={4} title="Save the change">
            Once every requirement is met, click{" "}
            <span className="font-medium">Update Password</span>. You stay
            signed in on this device. Other devices may be asked to sign in
            again.
          </Step>
          <Tip>
            A password manager (such as the one built into your browser) makes
            it easy to create and remember a long, unique password.
          </Tip>
        </NumberedSection>

        <NumberedSection n={7} title="Connect your research tools">
          <p className="text-gray-600 mb-4">
            The Integrations section (callout 2 in Image 3) lets ColabWize work
            with the citation managers and cloud storage you already use.
            Connect or disconnect any service at any time.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Citation Managers
          </h3>
          <p className="text-gray-600 mb-4">
            Keep your references in sync so citations you add in ColabWize match
            the library you use elsewhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src="/images/zotero-icon.png"
                    alt="Zotero"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Zotero</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Connect your Zotero library so references and PDFs are available
                when you cite. New citations you add in ColabWize can be pushed
                back to Zotero.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Authorize Zotero from Settings then Integrations
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Import your reference library and PDFs
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Enable automated sync to keep references up to date
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src="/images/mendeley-icon.png"
                    alt="Mendeley"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Mendeley
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Sync your Mendeley library so your references and PDFs are
                available when you cite. New citations you add in ColabWize can
                be pushed back to Mendeley.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Authorize Mendeley from Settings then Integrations
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Import your reference library and PDFs
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Two-way sync keeps citations consistent across apps
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
            Cloud Storage Providers
          </h3>
          <p className="text-gray-600 mb-4">
            Connect cloud storage to import documents, back them up, and export
            your work without leaving ColabWize.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src="/images/google-drive.png"
                    alt="Google Drive"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Google Drive
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Import your Google Docs and PDFs directly from Drive. Changes
                you make in ColabWize stay in sync with the original file.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Connect from Settings then Integrations
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Pick individual files or entire folders to import
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Disconnect anytime without deleting your Drive files
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 mr-3">
                  <svg
                    viewBox="0 0 24 18"
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Microsoft OneDrive"
                  >
                    <path
                      d="M9.5 2C6.46 2 3.93 4.07 3.25 6.88C1.36 7.55 0 9.34 0 11.5C0 14.26 2.24 16.5 5 16.5H19C21.76 16.5 24 14.26 24 11.5C24 9.08 22.28 7.06 19.96 6.59C19.12 3.96 16.56 2 13.5 2C12.12 2 10.83 2.42 9.76 3.14"
                      fill="#094AB2"
                    />
                    <path
                      d="M9.5 5C7.08 5 5.06 6.72 4.59 9.04C2.89 9.39 1.59 10.86 1.5 12.64C1.5 12.76 1.5 12.88 1.5 13C1.5 15.21 3.29 17 5.5 17H12L5.5 10L9.5 5z"
                      fill="#0364B8"
                    />
                    <path
                      d="M13.5 5C11.7 5 10.12 5.93 9.28 7.35L5.5 10L12 17H19.5C21.71 17 23.5 15.21 23.5 13C23.5 10.79 21.71 9 19.5 9C19.17 9 18.85 9.04 18.54 9.11C17.84 6.73 15.85 5 13.5 5z"
                      fill="#0078D4"
                    />
                    <path
                      d="M9.28 7.35C8.81 8.13 8.5 9.03 8.5 10C8.5 10.34 8.54 10.68 8.61 11L12 17L18.54 9.11C17.84 6.73 15.85 5 13.5 5C11.7 5 10.12 5.93 9.28 7.35z"
                      fill="#1490DF"
                    />
                    <path
                      d="M4.59 9.04C4.56 9.19 4.53 9.35 4.51 9.5C4.5 9.67 4.5 9.83 4.5 10C4.5 10.34 4.54 10.68 4.61 11L8.61 11L5.5 10L4.59 9.04z"
                      fill="#28A8EA"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Microsoft OneDrive
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Connect OneDrive to bring in your Word documents and PDFs and to
                keep a backup of your work in your own cloud storage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Connect from Settings then Integrations
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Import documents and export finished work to OneDrive
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3"></div>
                  Disconnect anytime without deleting your OneDrive files
                </li>
              </ul>
            </div>
          </div>
          <Tip>
            Turn on automated synchronization for your citation manager so new
            references you collect elsewhere appear in ColabWize automatically.
          </Tip>
        </NumberedSection>

        <NumberedSection n={8} title="Turn on Two-Factor Authentication (2FA)">
          <p className="text-gray-600 mb-4">
            Two-Factor Authentication (callout 3 in Image 3) adds a second step
            to signing in. Even if someone learns your password, they cannot get
            into your account without the code from your phone.
          </p>
          <Step n={1} title="Open the 2FA section">
            On the Settings page, find the{" "}
            <span className="font-medium">Two-Factor Authentication</span> area
            and click <span className="font-medium">Start Setup</span>.
          </Step>
          <Step n={2} title="Choose a method">
            Follow the prompts to link an authenticator app (such as Google
            Authenticator or Authy) or another second factor supported by
            ColabWize.
          </Step>
          <Step n={3} title="Confirm and finish">
            Enter the code shown by your authenticator app to turn on 2FA. From
            now on, signing in asks for that code after your password.
          </Step>
          <InfoBox>
            Benefits of 2FA: protection against unauthorized account access,
            early warning if someone tries your password, and stronger overall
            account security for your documents and citations.
          </InfoBox>
        </NumberedSection>

        <NumberedSection
          n={9}
          title="Manage your data and account (Danger Zone)"
        >
          <p className="text-gray-600 mb-4">
            The Danger Zone (callout 4 in Image 3) holds the two actions that
            affect your account the most. Use them with care.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Trash2 className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-lg font-semibold text-red-900">
                Danger Zone
              </h3>
            </div>
            <div className="flex items-start mb-6">
              <Download className="h-5 w-5 text-gray-600 mr-3 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Download Your Data</p>
                <p className="text-sm text-gray-600 mb-3">
                  Export a copy of your account data for backup or to move to
                  another service. This is a read-only action: your account,
                  documents, and settings stay exactly as they are.
                </p>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  What gets exported
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600 mb-3">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    Your documents and their text, plus formatting where
                    supported
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    Citations, your reference library, and connected integration
                    settings
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    Your profile, writing preferences, and account details
                  </li>
                </ul>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Good to know
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    The export is a downloadable file; nothing on the server
                    changes
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    Large accounts may take a few minutes to prepare
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    Documents you share with others stay with those
                    collaborators
                  </li>
                </ul>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-400 rounded-lg font-medium text-sm cursor-not-allowed"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Your Data
                </button>
              </div>
            </div>
            <div className="border-t border-red-200 pt-6 flex items-start">
              <Trash2 className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-red-900">Delete Account</p>
                <p className="text-sm text-red-800 mb-3">
                  Permanently removes your ColabWize account and all associated
                  data. This cannot be undone, so export your data first if you
                  might need it later.
                </p>
                <h4 className="text-sm font-semibold text-red-900 mb-2">
                  What gets deleted
                </h4>
                <ul className="space-y-1.5 text-sm text-red-800 mb-3">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    All your documents and their version history
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    Your citations, reference library, and integration
                    connections
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    Your profile, preferences, and account login
                  </li>
                </ul>
                <h4 className="text-sm font-semibold text-red-900 mb-2">
                  Before you delete
                </h4>
                <ul className="space-y-1.5 text-sm text-red-800 mb-4">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    Download Your Data so you keep a backup
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    Leave any shared documents you still need access to
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                    Documents owned only by you are removed for everyone
                  </li>
                </ul>
                <button
                  type="button"
                  disabled
                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium text-sm opacity-60 cursor-not-allowed"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </NumberedSection>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tips for a great profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Professional presentation
              </h3>
              <ul className="space-y-2">
                {[
                  "Use a clear, professional profile picture",
                  "Keep your academic information up to date",
                  "Highlight your areas of expertise",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start text-gray-600 text-sm"
                  >
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Account security</h3>
              <ul className="space-y-2">
                {[
                  "Enable two-factor authentication",
                  "Use a strong, unique password",
                  "Review connected integrations often",
                  "Export your data before big changes",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start text-gray-600 text-sm"
                  >
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <HelpSection description="Stuck on a field, or want to change something later? We've got you." />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
