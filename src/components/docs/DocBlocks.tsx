import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  Image as ImageIcon,
  Play,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

/**
 * Shared building blocks for long-form docs articles (the pages the Quick
 * Start "Learn more" links point to). Keeps every guide consistent and lets
 * the team drop in real screenshots / videos later via the placeholders.
 */

// Placeholder for a screenshot the team will supply. `label` tells the reader
// what the image shows; `note` tells the team exactly which capture to add.
export const Screenshot = ({ label, note }: { label: string; note: string }) => (
  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 my-4">
    <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-3" />
    <p className="text-sm font-medium text-gray-700">{label}</p>
    <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
      Screenshot needed — {note}
    </p>
  </div>
);

// Placeholder for a YouTube embed. Insert the video ID in the TODO comment.
export const VideoPlaceholder = ({
  title = "Walkthrough video",
  length,
}: {
  title?: string;
  length?: string;
}) => (
  // TODO: Embed the YouTube video here. Insert the video ID:
  // <iframe src="https://www.youtube.com/embed/<VIDEO_ID>" ... />
  <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50 my-6">
    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-200 mx-auto mb-4">
      <Play className="h-6 w-6 text-gray-500" />
    </div>
    <p className="text-sm font-medium text-gray-700">Video: {title}</p>
    <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
      YouTube embed — replace this placeholder with the video
      {length ? ` (recommended length: ${length})` : ""}. Insert the video ID
      in the TODO comment above.
    </p>
  </div>
);

// A numbered how-to step.
export const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-gray-900 text-white text-sm font-semibold">
      {n}
    </div>
    <div className="flex-1 pb-6">
      <h4 className="text-base font-semibold text-gray-900 mb-1">{title}</h4>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

// A soft-gray info note.
export const InfoBox = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start my-4">
    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
    <div className="text-sm text-gray-700">{children}</div>
  </div>
);

// A yellow tip / warning note.
export const Tip = ({ children }: { children: ReactNode }) => (
  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start my-4">
    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
    <div className="text-sm text-yellow-800">{children}</div>
  </div>
);

// A section heading with a number badge, matching AccountSetupPage style.
export const NumberedSection = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children?: ReactNode;
}) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-900 text-white font-semibold">
        {n}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    {children}
  </section>
);

// Scrolls to the top of the page on every route change so clicking a "Next"
// button in the core feature chain starts the new article at the beginning
// instead of leaving the reader mid-page.
export const ScrollRestoration = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Shared footer for every core docs article. Renders the enlarged "Next"
// button that carries readers to the next article in the chain, plus a
// consistent "Still need help?" card with Contact Support and FAQ links.
// Using it everywhere keeps the bottom of each page identical and removes
// the hand-duplicated Next + Help blocks.
export const DocFooter = ({
  nextTo,
  nextLabel,
  helpText = "Something not working, or a question we didn't cover? Our team is here to help.",
}: {
  nextTo?: string;
  nextLabel?: string;
  helpText?: string;
}) => (
  <>
    {nextTo && (
    <section className="mb-12">
      <div className="flex justify-end">
        <Link
          to={nextTo}
          className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold text-base transition-colors shadow-sm">
          {nextLabel}
          <ChevronRight className="h-5 w-5 ml-1.5" />
        </Link>
      </div>
    </section>
    )}

    <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">Still need help?</h2>
          <p className="text-gray-600 mb-4">{helpText}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact-support"
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium">
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);
