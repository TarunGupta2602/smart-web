import Link from "next/link";
import Reveal from "./reveal";

const DEFAULT_LINKS = [
  { href: "/services/nfc-digital-menu", label: "NFC QR digital menu for restaurants" },
  { href: "/services/website-designing", label: "Website & e-commerce development" },
  { href: "/services/seo", label: "SEO services" },
  { href: "/services/digital-marketing", label: "Digital marketing" },
  { href: "/projects", label: "Selected work" },
  { href: "/pricing", label: "Pricing & quotes" },
  { href: "/free-website-audit", label: "Free website review" },
  { href: "/website-development-company-in", label: "India city pages" },
  { href: "/blog", label: "Blog & guides" },
  { href: "/contact", label: "Contact / get a quote" },
];

/**
 * Internal link hub to strengthen crawl paths between key pages.
 */
export default function RelatedLinks({
  title = "Explore SmartSoft Solutions",
  subtitle = "Jump to the pages that matter for quotes, services, and live work.",
  links = DEFAULT_LINKS,
  excludeHref,
}) {
  const items = links.filter((l) => l.href !== excludeHref);

  return (
    <section className="py-14 md:py-16 border-t border-slate-100 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-2">{title}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        </Reveal>
        <Reveal delay={2}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#0f3d68] hover:border-slate-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
