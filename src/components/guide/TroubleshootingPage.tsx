import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const slug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const deviceSpecific = [
  {
    device: "Mobile Devices (iOS Safari / Android Chrome)",
    issues: [
      {
        title: "Page crashes or freezes on mobile",
        steps: [
          "Restart phone/tablet.",
          "Update mobile browser (Chrome, Safari) to latest via App Store / Play Store.",
          "Update device OS to current version.",
          "Clear browser cache & site data in browser settings.",
          "Reinstall PWA: remove home-screen icon → Safari/Chrome → Share/Menu → Add to Home Screen.",
        ],
      },
      {
        title: "Touch interface not responding / editor toolbar issues",
        steps: [
          "Clean screen (dirt/moisture/smudge affects touch).",
          "Check for physical screen damage.",
          "Refresh page. Editor toolbar collapses to bottom bar on narrow screens — swipe up to reveal.",
          "If PWA misbehaves, open in mobile browser instead (full feature parity).",
          "External keyboard: shortcuts work (Cmd/Ctrl+B, / for commands).",
        ],
      },
      {
        title: "PWA install not showing / 'Install app' missing",
        steps: [
          "Must be on HTTPS (colabwize.com). HTTP or localhost won't show install prompt.",
          "Use Chrome (Android) or Safari (iOS). Firefox mobile doesn't support PWA install.",
          "Visit app.colabwize.com, sign in, then: Chrome → Menu → Install app; Safari → Share → Add to Home Screen.",
          "If already installed: uninstall first, then reinstall.",
        ],
      },
    ],
  },
  {
    device: "Desktop (Windows / macOS / Linux)",
    issues: [
      {
        title: "Browser or PWA problems",
        steps: [
          "Use recent Chrome, Firefox, Safari, or Edge.",
          "Try PWA (standalone window) instead of browser tab, or vice versa. PWA: Chrome/Edge → Menu → Install ColabWize; Safari → File → Add to Dock.",
          "Clear cache & cookies, reload.",
          "Disable extensions: ad blockers, script blockers, privacy tools, Vimium.",
          "Linux: ensure WebGL/WebSocket not blocked by Wayland/pipewire issues. Try Chrome over Firefox.",
        ],
      },
      {
        title: "WebSocket / real-time sync fails (firewall/proxy)",
        steps: [
          "Corporate firewall/VPN may block <code>wss://api.colabwize.com/hocuspocus</code> (port 443).",
          "Test: open browser devtools (F12) → Console → look for WebSocket connection errors.",
          "IT: allow WebSocket (wss://) to api.colabwize.com. Not just HTTPS.",
          "Try on personal network/hotspot to confirm it's network-related.",
          "If blocked: request IT to allow WebSocket to our domain, or use PWA which may cache offline.",
        ],
      },
      {
        title: "High CPU / memory usage in editor",
        steps: [
          "Large documents (>50k words): consider splitting into chapters/projects.",
          "Close unused sidebars (left/right) — each panel uses memory.",
          "Disable unused panels: left sidebar → only keep Documents + Citations open.",
          "Focus Mode (<kbd>Ctrl/Cmd+Shift+F</kbd>) hides sidebars, reduces memory.",
          "Restart browser if memory leak suspected. Report persistent issues with document size.",
        ],
      },
    ],
  },
];

const TroubleshootingPage = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location.hash]);

  const quickFixes = [
    "Refresh the page: <kbd>Ctrl+R</kbd> (Windows/Linux) or <kbd>Cmd+R</kbd> (Mac).",
    "Sign out, then sign back in: refreshes your session and plan status.",
    "Clear browser cache & cookies for colabwize.com, then fully close and reopen the browser.",
    "Open a private/incognito window (<kbd>Ctrl/Cmd+Shift+N</kbd>) and sign in. Rules out extension conflicts.",
    "Update your browser to the latest version (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+).",
    "Check internet connection: open another site or run a speed test.",
    "Disable browser extensions (ad blockers, privacy tools, Vimium, password managers) and reload.",
  ];

  const categories = [
    {
      category: "Login & Account Access",
      issues: [
        {
          title: "Can't sign in / incorrect password",
          symptom: "Login rejected or sign-in button does nothing.",
          cause: "Typo in email, Caps Lock, wrong password, stale session, or autofill error.",
          steps: [
            "Check email field for typos and trailing/leading spaces.",
            "Ensure Caps Lock is off; verify keyboard layout.",
            "Click <strong>Forgot password</strong> on the sign-in screen. Follow the reset link sent to your email.",
            "If you registered with Google/GitHub, use that provider's button — you may not have a password set.",
            "Clear cookies for colabwize.com, or try in a private/incognito window.",
            "Still blocked? Contact support with your registered email and exact error message.",
          ],
        },
        {
          title: "Verification email never arrives",
          symptom: "No confirmation email after sign-up.",
          cause: "Landed in Spam/Junk/Promotions, mistyped address, or email provider delay.",
          steps: [
            "Check Spam, Junk, and Promotions (or 'Other') folders.",
            "Add <code>noreply@colabwize.com</code> to contacts/safe senders, then click <strong>Resend</strong> on the sign-up screen.",
            "Confirm you typed the correct email on the sign-up screen.",
            "Wait 2–3 minutes and click <strong>Resend</strong>. Some providers delay new senders.",
            "If nothing after 15 minutes, contact support with your email and sign-up time.",
          ],
        },
        {
          title: '"Email already in use"',
          symptom: "Told the email is already taken when creating account.",
          cause: "Account exists — possibly created via Google/GitHub OAuth instead of email/password.",
          steps: [
            "Click <strong>Sign In</strong> instead of creating a new account.",
            "Use <strong>Forgot password</strong> to reset if you don't remember the password.",
            "If you originally joined with Google/GitHub, use that sign-in method.",
            "Need a fresh start on the same email? Contact support to recover or close the existing account.",
          ],
        },
        {
          title: "Stuck on redirect loop after login",
          symptom: "Log in successfully, but immediately bounced back to sign-in page.",
          cause: "Corrupted session cookie, ad/tracker blocker, or strict privacy settings blocking the login token.",
          steps: [
            "Clear cookies for colabwize.com only (browser settings → cookies for this site), reload, sign in again.",
            "Temporarily disable privacy/ad-blocking/tracker-blocking extensions, or try a browser without them.",
            "Allow cookies for the site. In Safari/Brave, you may need to allow cross-site cookies for colabwize.com.",
            "Try a different supported browser to confirm it's a setting on the first one.",
            "If loop continues, contact support with browser name and version.",
          ],
        },
      ],
    },
    {
      category: "Editor & Documents",
      issues: [
        {
          title: "Document won't open or keeps loading",
          symptom: "Click a document → spinner/blank screen that never finishes.",
          cause: "Connectivity drop, very large document, or stuck editor session in browser.",
          steps: [
            "Refresh (<kbd>Ctrl/Cmd+R</kbd>) and reopen from the Recent Documents list (left sidebar → Documents panel).",
            "Check connection by opening another site. If slow, wait and retry.",
            "Try in a different browser or private/incognito window to rule out extensions.",
            "Large documents (>100 pages) may take longer on first load. Wait a minute.",
            "If it still fails, note the document title and contact support so we can check server-side.",
          ],
        },
        {
          title: "Formatting looks broken or changes unexpectedly",
          symptom: "Headings, spacing, fonts render differently or change after pasting.",
          cause: "Pasting styled text from Word/Google Docs brings its formatting. Partial sync before refresh.",
          steps: [
            "Paste without formatting: <kbd>Ctrl/Cmd+Shift+V</kbd>. Keeps only words.",
            "Undo (<kbd>Ctrl/Cmd+Z</kbd>) to remove last change, then re-apply heading/style via editor toolbar.",
            "Refresh to pull saved version from server, then confirm formatting.",
            "If still wrong after refresh, screenshot and contact support with document name.",
          ],
        },
        {
          title: "Upload fails or is rejected",
          symptom: "PDF/Word file won't upload or shows error.",
          cause: "Unsupported format, corrupted/password-protected file, or file too large.",
          steps: [
            "Supported: <strong>DOCX, PDF, .tex (LaTeX), .md (Markdown), .zip (Overleaf)</strong>.",
            "Open in original app (Word, Google Docs) and re-save, then retry.",
            "Ensure file is not password-protected/encrypted and opens normally on your computer.",
            "Very large files: split into sections and upload separately.",
            "Still rejected? Contact support with file type, size, and exact error text.",
          ],
        },
        {
          title: "Auto-save not working / lost changes",
          symptom: "Edits don't seem to persist; changes disappear on refresh.",
          cause: "WebSocket disconnected, offline without noticing, or browser storage issue.",
          steps: [
            "Check connection indicator in toolbar (green = connected, yellow = syncing, red = offline).",
            "If red: check internet, wait for reconnect (auto-retries). Changes queue locally and sync on reconnect.",
            "Manual save: <kbd>Ctrl/Cmd+S</kbd> triggers immediate save.",
            "Version history: left sidebar → Documents panel → clock icon for document → restore previous version.",
            "If data lost, contact support immediately with document name and approximate time of loss.",
          ],
        },
      ],
    },
    {
      category: "Citations & Audit",
      issues: [
        {
          title: "Citation Audit shows no citations found",
          symptom: "Run Citation Audit → compliance score 0, '0 citations found' despite having references.",
          cause: "Citations must be inserted via <strong>Add Citation</strong> modal (have internal IDs). Plain-text citations aren't detected. Or scan hasn't run.",
          steps: [
            "Open left sidebar → <strong>Sources</strong> panel → confirm sources are in library.",
            "In editor, open <strong>Add Citation</strong> modal → search/insert citations at reference points.",
            "Click <strong>Run Audit</strong> in Citation Audit panel. Wait for scan to complete.",
            "If imported from DOCX/LaTeX: citations may need re-linking. Use <strong>Find Missing Link</strong> in audit results.",
            "Still 0? Contact support with document name and whether citations were inserted via modal or typed.",
          ],
        },
        {
          title: "Citation compliance score seems wrong",
          symptom: "Score doesn't match expected state after fixing citations.",
          cause: "Score calculates on saved version. Unsaved edits not counted. Cache may be stale.",
          steps: [
            "Ensure document is saved (auto-saves every ~2s, or press <kbd>Ctrl/Cmd+S</kbd>).",
            "Wait a few seconds for analytics to update, then reload dashboard.",
            "Re-run Citation Audit to force fresh scan.",
            "Confirm fixed citations are actual citation nodes (not plain text).",
            "If still off, screenshot audit results and contact support.",
          ],
        },
        {
          title: "Auto-fix didn't resolve all issues",
          symptom: "Clicked Auto-Fix but some formatting issues remain.",
          cause: "Auto-fix handles common style inconsistencies (punctuation, et al., ibid.). Complex issues (missing DOIs, author name mismatches) need manual review.",
          steps: [
            "Review audit report: each issue shows confidence (High/Medium/Low) and suggested fix.",
            "High confidence: usually safe to auto-apply. Medium/Low: review manually.",
            "<strong>Find Missing Link</strong> searches CrossRef/OpenAlex for unverified citations.",
            "For missing DOIs: search paper title in Find Papers panel → drag into editor.",
            "For author/year mismatches: edit citation via Add Citation modal → update fields.",
          ],
        },
        {
          title: "Zotero/Mendeley sync not working",
          symptom: "Collections not appearing, papers not syncing, or sync stuck.",
          cause: "OAuth token expired, API rate limits, large library (>5000 items), or network blocking API domains.",
          steps: [
            "Settings → Integrations → <strong>Reset Connection</strong> for Zotero/Mendeley, then re-authorize.",
            "Check Zotero/Mendeley API status pages for outages.",
            "Large libraries: sync may take minutes. Progress shows in Sources panel.",
            "Mendeley: rate limits may pause sync temporarily. Wait and retry.",
            "Corporate firewall/VPN: ensure <code>api.zotero.org</code> and <code>api.mendeley.com</code> are accessible.",
            "Still failing? Contact support with which manager, library size, and error message.",
          ],
        },
        {
          title: "Certificate of Authorship won't generate",
          symptom: "Click Generate Certificate → error or stuck on generating.",
          cause: "Document has no authorship evidence (no edits recorded), or PDF generation (Puppeteer) failed.",
          steps: [
            "Ensure document has edits: Certificate requires server-observed edits (Yjs/Hocuspocus commits).",
            "New blank document: make at least one edit, wait for auto-save, then try again.",
            "Check browser console (F12) for Puppeteer errors (usually blocked by popup blocker).",
            "Allow popups for colabwize.com, or try in Chrome/Edge (best Puppeteer support).",
            "If error persists, contact support with document ID and console error.",
          ],
        },
      ],
    },
    {
      category: "Real-Time Collaboration",
      issues: [
        {
          title: "Changes aren't showing for collaborators",
          symptom: "You edit, but co-authors don't see updates in real time.",
          cause: "Dropped WebSocket, paused sync, or collaborators have Viewer role (read-only).",
          steps: [
            "Confirm all editors have stable internet. Ask a co-author if their view updated.",
            "Refresh the document page — each person pulls latest server state.",
            "Check roles: Dashboard → Workspace → Members. Collaborators need <strong>Editor</strong> role (Viewer = read-only).",
            "If live cursor freezes: close document and reopen.",
            "If edits appear lost: check Version History (left sidebar → Documents → clock icon) before making more changes.",
          ],
        },
        {
          title: "Live cursor / presence missing",
          symptom: "Don't see who else is in the document; no colored cursors or avatars.",
          cause: "Awareness channel disconnected, VPN/firewall blocking WebSocket, or document not shared.",
          steps: [
            "Refresh page to reconnect awareness channel.",
            "Ask other person to refresh as well.",
            "Disable VPN/firewall temporarily and try again. Awareness uses WebSocket (<code>wss://api.colabwize.com/hocuspocus</code>).",
            "Confirm document is shared with expected people (Dashboard → Workspace → Members).",
            "If only some users missing: they may have joined via different workspace or have Viewer role.",
          ],
        },
        {
          title: "Comments not appearing / notifications not sent",
          symptom: "Added comment but collaborator didn't see it or get email.",
          cause: "Comment threading issue, email notification failed (Resend), or @mention format incorrect.",
          steps: [
            "Refresh document — comments sync via Hocuspocus awareness (low latency).",
            "Check Comment System panel (right sidebar) for thread visibility.",
            "For @mentions: type <kbd>@</kbd> then select user from dropdown. Email sends via Resend transactional.",
            "Email delivery: check spam folder. Resend webhook: <code>POST /api/admin/email/send</code>.",
            "If emails consistently fail, contact support with recipient email and timestamp.",
          ],
        },
      ],
    },
    {
      category: "Export & Integrations",
      issues: [
        {
          title: "Export fails or output looks wrong",
          symptom: "DOCX/PDF/LaTeX export errors, or formatting/citations broken in output.",
          cause: "Unresolved citation issues, unsupported elements (complex tables, custom HTML), or Pandoc conversion limits.",
          steps: [
            "<strong>Run Citation Audit first</strong> — fix all High confidence issues before export.",
            "Check for unsupported elements: custom HTML, very wide tables, nested callouts.",
            "For LaTeX: ensure BibTeX entries are valid. Try <strong>DOCX</strong> first (most robust).",
            "Large documents (>100 pages): export in chunks or contact support for assisted export.",
            "Self-plagiarism guard: if triggered, review flagged sections against your previous exports.",
          ],
        },
        {
          title: "Google Drive / OneDrive import fails",
          symptom: "OAuth works but file selection fails or import errors.",
          cause: "File format not supported, file corrupted, or OAuth token scope insufficient.",
          steps: [
            "Supported from cloud: <strong>.docx, .pdf, .tex</strong>. Google Docs: export as DOCX first, then upload.",
            "Re-authorize: Settings → Integrations → Reset Connection for Google/OneDrive.",
            "File must be accessible (not in trash, not restricted by org policy).",
            "Try downloading file locally, then use <strong>Local PC</strong> upload instead.",
            "If persistent, contact support with cloud provider and file details.",
          ],
        },
        {
          title: "Keyboard shortcuts not working",
          symptom: "Shortcuts (bold, italic, slash commands, focus mode) don't trigger.",
          cause: "Editor not focused, input field active, extension conflict (Vimium, translators), or OS keyboard layout.",
          steps: [
            "Click in the editor writing area to focus (not in sidebar, not in modal).",
            "Press <kbd>Esc</kbd> to exit any input field/textarea.",
            "Disable extensions that intercept keys: Vimium, password managers, translation tools.",
            "Try in incognito/private window to isolate extension conflicts.",
            "macOS: System Settings → Keyboard → Keyboard Shortcuts → check for conflicts.",
            "Editor uses standard Tiptap/browser defaults. <strong>No custom editor shortcuts configured.</strong>",
          ],
        },
      ],
    },
    {
      category: "Billing & Subscription",
      issues: [
        {
          title: "Paid feature still locked after upgrade",
          symptom: "On Plus/Researcher/Institutional, but feature shows as restricted.",
          cause: "Session hasn't refreshed with new plan, or payment didn't complete.",
          steps: [
            "Sign out and back in — refreshes plan status on device.",
            "Settings → Billing → confirm subscription shows <strong>Active</strong> (not Past Due/Canceled).",
            "Check latest payment succeeded (no failed/pending charge on card).",
            "Still locked? Contact support with plan name and invoice number.",
          ],
        },
        {
          title: "Payment or upgrade failed",
          symptom: "Checkout declined, or upgrade doesn't apply after paying.",
          cause: "Expired card, bank block, insufficient funds, or payment gateway error.",
          steps: [
            "Verify card not expired and has sufficient funds.",
            "Wait 1 minute and retry (temporary gateway errors resolve quickly).",
            "Try different payment method if available.",
            "If bank declines: call them or use different card, then retry.",
            "Contact support if multiple attempts fail — we can check Stripe logs.",
          ],
        },
        {
          title: "Credits not refilling / AI features locked",
          symptom: "Monthly credit allowance didn't reset, or AI features (Literature Matrix, deep search) unavailable.",
          cause: "Credits reset on billing cycle date (not calendar month). Plan may not include feature.",
          steps: [
            "Settings → Billing → check <strong>credit balance</strong> and <strong>reset date</strong>.",
            "Free/Plus: monthly credits reset on subscription anniversary date.",
            "Feature gating: Literature Matrix = Researcher+ only. Deep search = credits required.",
            "Purchase additional credits in Settings → Billing if needed.",
            "If credits show 0 but should have reset, contact support with plan and billing date.",
          ],
        },
      ],
    },
    {
      category: "Device-Specific",
      issues: [
        {
          device: "Mobile Devices (iOS Safari / Android Chrome)",
          issues: [
            {
              title: "Page crashes or freezes on mobile",
              steps: [
                "Restart phone/tablet.",
                "Update mobile browser (Chrome, Safari) to latest via App Store / Play Store.",
                "Update device OS to current version.",
                "Clear browser cache & site data in browser settings.",
                "Reinstall PWA: remove home-screen icon → Safari/Chrome → Share/Menu → Add to Home Screen.",
              ],
            },
            {
              title: "Touch interface not responding / editor toolbar issues",
              steps: [
                "Clean screen (dirt/moisture/smudge affects touch).",
                "Check for physical screen damage.",
                "Refresh page. Editor toolbar collapses to bottom bar on narrow screens — swipe up to reveal.",
                "If PWA misbehaves, open in mobile browser instead (full feature parity).",
                "External keyboard: shortcuts work (Cmd/Ctrl+B, / for commands).",
              ],
            },
            {
              title: "PWA install not showing / 'Install app' missing",
              steps: [
                "Must be on HTTPS (colabwize.com). HTTP or localhost won't show install prompt.",
                "Use Chrome (Android) or Safari (iOS). Firefox mobile doesn't support PWA install.",
                "Visit app.colabwize.com, sign in, then: Chrome → Menu → Install app; Safari → Share → Add to Home Screen.",
                "If already installed: uninstall first, then reinstall.",
              ],
            },
          ],
        },
        {
          device: "Desktop (Windows / macOS / Linux)",
          issues: [
            {
              title: "Browser or PWA problems",
              steps: [
                "Use recent Chrome, Firefox, Safari, or Edge.",
                "Try PWA (standalone window) instead of browser tab, or vice versa. PWA: Chrome/Edge → Menu → Install ColabWize; Safari → File → Add to Dock.",
                "Clear cache & cookies, reload.",
                "Disable extensions: ad blockers, script blockers, privacy tools, Vimium.",
                "Linux: ensure WebGL/WebSocket not blocked by Wayland/pipewire issues. Try Chrome over Firefox.",
              ],
            },
            {
              title: "WebSocket / real-time sync fails (firewall/proxy)",
              steps: [
                "Corporate firewall/VPN may block <code>wss://api.colabwize.com/hocuspocus</code> (port 443).",
                "Test: open browser devtools (F12) → Console → look for WebSocket connection errors.",
                "IT: allow WebSocket (wss://) to api.colabwize.com. Not just HTTPS.",
                "Try on personal network/hotspot to confirm it's network-related.",
                "If blocked: request IT to allow WebSocket to our domain, or use PWA which may cache offline.",
              ],
            },
            {
              title: "High CPU / memory usage in editor",
              steps: [
                "Large documents (>50k words): consider splitting into chapters/projects.",
                "Close unused sidebars (left/right) — each panel uses memory.",
                "Disable unused panels: left sidebar → only keep Documents + Citations open.",
                "Focus Mode (<kbd>Ctrl/Cmd+Shift+F</kbd>) hides sidebars, reduces memory.",
                "Restart browser if memory leak suspected. Report persistent issues with document size.",
              ],
            },
          ],
        },
      ],
    },
  ];

  const anchorNav = (id: string) =>
    `${window.location.origin}/troubleshooting#${id}`;

  return (
    <div className="min-h-screen px-8 max-w-4xl mx-auto" ref={topRef}>
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center mb-4 text-blue-600 hover:text-gray-700 underline">
          ← Back to Documentation
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">Troubleshooting</h1>
          <p className="text-lg text-gray-600">
            Step-by-step fixes for common problems. Start with quick fixes, then jump to your category.
            Each topic is a direct link you can copy and share, e.g.{" "}
            <code className="text-sm text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">
              /troubleshooting#cant-sign-in
            </code>
            .
          </p>
        </div>
      </div>

      {/* Quick Fixes */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Here: Quick Fixes</h2>
        <p className="text-gray-600 mb-4">Work through these in order — they resolve most issues.</p>
        <ol className="space-y-3">
          {quickFixes.map((fix, i) => (
            <li key={i} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm flex items-center justify-center mr-3 mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: fix }} />
            </li>
          ))}
        </ol>
      </div>

      {/* Categorized Issues */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Issues & Solutions</h2>
        <div className="space-y-10">
          {categories.map((category, categoryIndex) => {
            const catId = slug(category.category);
            return (
              <div key={categoryIndex} id={catId}>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2"
                  id={`${catId}-heading`}>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.issues.map((issue, issueIndex) => {
                    const id = slug(issue.title);
                    return (
                      <div
                        key={issueIndex}
                        id={id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 scroll-mt-24">
                        <a
                          href={anchorNav(id)}
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard?.writeText(anchorNav(id));
                            window.history.replaceState(null, "", `#${id}`);
                          }}
                          title="Click to copy direct link to this topic"
                          className="font-semibold text-gray-900 hover:text-blue-600 hover:underline decoration-gray-300 block mb-2">
                          {issue.title} #
                        </a>
                        {issue.symptom && (
                          <p className="text-gray-500 text-sm mb-1">
                            <span className="font-medium text-gray-700">What you see: </span>
                            {issue.symptom}
                          </p>
                        )}
                        {issue.cause && (
                          <p className="text-gray-500 text-sm mb-3">
                            <span className="font-medium text-gray-700">Likely cause: </span>
                            {issue.cause}
                          </p>
                        )}
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Try these steps</p>
                        <ol className="space-y-2">
                          {issue.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold flex items-center justify-center mr-2.5 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: step }} />
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Device-Specific */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Device-Specific Troubleshooting</h2>
        <div className="space-y-8">
          {deviceSpecific.map((device, deviceIndex) => {
            const devId = slug(device.device);
            return (
              <div key={deviceIndex} id={devId}>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2"
                  id={`${devId}-heading`}>
                  {device.device}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {device.issues.map((issue, issueIndex) => {
                    const id = slug(issue.title);
                    return (
                      <div
                        key={issueIndex}
                        id={id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 scroll-mt-24">
                        <a
                          href={anchorNav(id)}
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard?.writeText(anchorNav(id));
                            window.history.replaceState(null, "", `#${id}`);
                          }}
                          title="Click to copy direct link to this topic"
                          className="font-semibold text-gray-900 hover:text-blue-600 hover:underline decoration-gray-300 block mb-3">
                          {issue.title} #
                        </a>
                        <ol className="space-y-2">
                          {issue.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold flex items-center justify-center mr-2.5 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: step }} />
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Escalation */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">When to Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Before You Reach Out</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Work through quick fixes and category steps above.</li>
              <li>Write down exact error message wording.</li>
              <li>Take a screenshot if possible.</li>
              <li>Have your email and affected document name ready.</li>
              <li>Note browser, OS, and whether using PWA or browser tab.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us When</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Issue persists after all troubleshooting steps.</li>
              <li>Data loss, missing documents, or corruption.</li>
              <li>Billing or account-security concern.</li>
              <li>
                <Link to="/contact-support" className="text-blue-600 hover:underline">
                  Contact Support
                </Link>{" "}
                for complex technical issues, or check the{" "}
                <Link to="/faq" className="text-blue-600 hover:underline">
                  FAQ
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingPage;