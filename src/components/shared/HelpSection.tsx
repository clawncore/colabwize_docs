import { Link } from "react-router-dom";

interface HelpSectionProps {
  title?: string;
  description?: string;
  contactLabel?: string;
  faqLabel?: string;
}

export function HelpSection({
  title = "Need help?",
  description,
  contactLabel = "Contact Support",
  faqLabel = "View FAQ",
}: HelpSectionProps) {
  return (
    <section className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description ? <p className="text-gray-600 mb-6">{description}</p> : null}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/contact-support"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium text-center"
        >
          {contactLabel}
        </Link>
        <Link
          to="/faq"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-center"
        >
          {faqLabel}
        </Link>
      </div>
    </section>
  );
}
