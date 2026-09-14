import Link from "next/link";
import IndiaCitiesSection from "../../components/india-cities-section";
import PageHero from "../../components/page-hero";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export const metadata = buildPageMetadata({
  title: "SEO Services | On-Page & Technical Search Optimization",
  description:
    "SEO services for businesses that need higher Google rankings. Technical SEO, on-page optimization, keyword strategy, and local visibility — paired with website development that is built to rank.",
  path: "/services/seo",
  keywords: [
    "SEO services",
    "on-page SEO",
    "technical SEO",
    "search engine optimization company",
    "local SEO services",
    "SEO agency for small business",
    "improve Google rankings",
  ],
});

const faqs = [
  {
    question: "What is included in your SEO services?",
    answer:
      "Technical audits, keyword research, on-page optimization, content guidance, and performance reporting focused on rankings and qualified organic traffic.",
  },
  {
    question: "Do you fix on-page SEO on existing websites?",
    answer:
      "Yes. We improve titles, headings, internal links, page speed issues, crawlability, and content structure on sites you already have — or rebuild when needed.",
  },
  {
    question: "How is SEO different from website development?",
    answer:
      "Development launches the product. SEO helps people find it on Google. SmartSoft Solutions can deliver both so your site is fast, clear, and search-ready from day one.",
  },
  {
    question: "Can you do local SEO for Indian cities like Delhi or Mumbai?",
    answer:
      "Yes. We map city and service keywords, structure location pages, and improve on-page signals so Indian businesses can rank for searches such as their service + city. See our website development company in India city pages for examples of location targeting.",
  },
];

export default function SeoServicePage() {
  const pageSchema = webPage({
    name: "SEO Services",
    description: "On-page, technical, and local SEO services to improve Google rankings and organic traffic.",
    url: `${SITE_URL}/services/seo`,
  });
  const serviceSchema = service({
    name: "SEO Services",
    description: "Technical SEO, on-page optimization, and keyword strategy for sustainable organic growth.",
    url: "/services/seo",
    serviceType: "Search Engine Optimization",
    areaServed: "Worldwide",
  });
  const breadcrumbSchema = breadcrumbList([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "SEO", url: `${SITE_URL}/services/seo` },
  ], SITE_URL);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SEO", url: "/services/seo" },
  ];

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([pageSchema, serviceSchema, breadcrumbSchema, faqPage(faqs)]),
        }}
      />
      <PageHero
        eyebrow="On-page SEO · Technical SEO · Local SEO"
        title="SEO services that help your business rank on Google"
        description="Get found when customers search. We improve technical health, on-page relevance, and content strategy so your website ranks for the terms that bring enquiries and sales."
        videoSrc={PAGE_VIDEOS.typing}
        posterSrc={PAGE_POSTERS.analytics}
        primaryCta={{ href: "/contact?service=SEO", label: "Request an SEO quote" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-8">On-page and off-page SEO coverage</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t border-slate-200 pt-5">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">On-page SEO</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>– Title tags, meta descriptions, and heading structure</li>
                <li>– Keyword mapping to service and location pages</li>
                <li>– Internal linking and crawlable navigation</li>
                <li>– Content clarity for search intent and conversions</li>
                <li>– Image alt text and page experience improvements</li>
              </ul>
            </div>
            <div className="border-t border-slate-200 pt-5">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Technical & growth SEO</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>– Site audits, indexation, and Core Web Vitals</li>
                <li>– Sitemap, robots, and schema markup guidance</li>
                <li>– Local SEO signals and Google Business alignment</li>
                <li>– Content plans that support ranking topics</li>
                <li>– Reporting on rankings, clicks, and opportunities</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-600 max-w-3xl">
            Off-page SEO (backlinks, citations, partnerships) works best when your on-page foundation is solid.
            We help you prioritize what to improve first, then support growth content and outreach direction.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">Pair SEO with a site built to rank</h2>
          <p className="text-sm text-slate-600 mb-6 max-w-2xl">
            If your current website is slow or hard to crawl, SEO alone will struggle. See our{" "}
            <Link href="/services/website-designing" className="text-[#0f3d68] hover:underline font-medium">
              website development service
            </Link>{" "}
            or{" "}
            <Link href="/services/digital-marketing" className="text-[#0f3d68] hover:underline font-medium">
              digital marketing
            </Link>{" "}
            for paid demand while organic grows.
          </p>
        </div>
      </section>

      <IndiaCitiesSection
        title="Local SEO for major Indian cities"
        subtitle="City landing pages help you target searches like website development company in Delhi, Mumbai, or Bangalore — with unique content per market."
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="text-base font-medium text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want a ranking-focused SEO plan?"
        description="Share your site and target keywords — we reply with scope and a clear quote."
        primaryHref="/contact?service=SEO"
        primaryLabel="Get an SEO quote"
      />
    </div>
  );
}
