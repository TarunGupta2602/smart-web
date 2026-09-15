import Link from "next/link";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { webPage, breadcrumbList, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { INDIA_CITIES, cityPath, getIndiaHubFaqs } from "@/lib/india-cities";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

const faqs = getIndiaHubFaqs();

export const metadata = buildPageMetadata({
  title: "Website Development Company in India | Major Cities",
  description:
    "SmartSoft Solutions builds business websites, e-commerce stores, and web apps for companies across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, and other major Indian cities. Fixed quotes. SEO-ready launches.",
  path: "/website-development-company-in",
  keywords: [
    "website development company in India",
    "web development company India",
    "e-commerce website development India",
    "website company Delhi Mumbai Bangalore",
    "hire web developer India",
  ],
});

export default function IndiaCitiesHubPage() {
  const pageSchema = webPage({
    name: "Website Development Company in India — Major Cities",
    description:
      "Business websites, e-commerce, and web apps for companies across major Indian cities.",
    url: `${SITE_URL}/website-development-company-in`,
  });
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Website Development in India", url: `${SITE_URL}/website-development-company-in` },
    ],
    SITE_URL
  );
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "India cities", url: "/website-development-company-in" },
  ];

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([pageSchema, breadcrumbSchema, faqPage(faqs)]),
        }}
      />

      <PageHero
        eyebrow="India · Local SEO pages"
        title="Website development company for major Indian cities"
        description="SmartSoft Solutions builds business websites, e-commerce stores, and web apps for companies in Delhi, Mumbai, Bangalore, and other business hubs — fixed quotes, Next.js & React builds, and fully remote delivery."
        videoSrc={PAGE_VIDEOS.office}
        posterSrc={PAGE_POSTERS.city}
        primaryCta={{ href: "/contact", label: "Get a quote" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-8">
              Choose your city
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {INDIA_CITIES.map((city, index) => (
              <Reveal key={city.slug} delay={(index % 3) + 1}>
                <Link
                  href={cityPath(city.slug)}
                  className="border-t border-slate-200 pt-5 group block"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-[#0f3d68] transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-2">{city.region}</p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    Website development company in {city.name} for local businesses.
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
          </Reveal>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="py-5">
                  <h3 className="text-base font-medium text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks excludeHref="/website-development-company-in" />
      <PageCta />
    </div>
  );
}
