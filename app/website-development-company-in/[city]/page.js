import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/page-hero";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import RelatedLinks from "../../components/related-links";
import {
  webPage,
  breadcrumbList,
  service,
  faqPage,
  stringifySchema,
} from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import {
  INDIA_CITIES,
  getCityBySlug,
  getAllCitySlugs,
  getCityFaqs,
  cityPath,
} from "@/lib/india-cities";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return buildPageMetadata({
    title: `Website Development Company in ${city.name}`,
    description: `Hire SmartSoft Solutions — a website development company in ${city.name} for business websites, e-commerce stores, and web apps. Fixed quotes, Next.js & React, SEO-ready launches for ${city.region} businesses.`,
    path: cityPath(city.slug),
    keywords: city.keywords,
  });
}

export default async function CityWebsitePage({ params }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const faqs = getCityFaqs(city);
  const path = cityPath(city.slug);
  const pageUrl = `${SITE_URL}${path}`;

  const pageSchema = webPage({
    name: `Website Development Company in ${city.name}`,
    description: city.intro,
    url: pageUrl,
  });

  const serviceSchema = {
    ...service({
      name: `Website Development in ${city.name}`,
      description: city.intro,
      url: path,
      serviceType: "Website Development",
      areaServed: "India",
    }),
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
  };

  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "India cities", url: `${SITE_URL}/website-development-company-in` },
      { name: city.name, url: pageUrl },
    ],
    SITE_URL
  );

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "India cities", url: "/website-development-company-in" },
    { name: city.name, url: path },
  ];

  const otherCities = INDIA_CITIES.filter((c) => c.slug !== city.slug).slice(0, 9);

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([
            pageSchema,
            serviceSchema,
            breadcrumbSchema,
            faqPage(faqs),
          ]),
        }}
      />
      <PageHero
        compact
        eyebrow={`${city.name} · ${city.region}`}
        title={city.headline}
        description={`${city.intro} ${city.focus}`}
        videoSrc={PAGE_VIDEOS.workspace}
        posterSrc={PAGE_POSTERS.city}
        primaryCta={{
          href: `/contact?service=Website%20Development%20${encodeURIComponent(city.name)}`,
          label: `Get a ${city.name} website quote`,
        }}
        secondaryCta={{ href: "/projects", label: "See selected work" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              What we build for {city.name} businesses
            </h2>
            <p className="text-sm text-slate-600 mb-8 max-w-2xl">
              Business websites, e-commerce stores, and web apps tailored to how companies in {city.name} actually sell and take enquiries.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.businesses.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) + 1}>
                <div className="border-t border-slate-200 pt-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 max-w-3xl">
            <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">
              Local angle for {city.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{city.focus}</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {city.intro} When you are ready, we map pages to the offers that matter in {city.region},
              connect them to{" "}
              <Link href="/services/website-designing" className="text-[#0f3d68] hover:underline">website development</Link>
              {" "}and{" "}
              <Link href="/services/seo" className="text-[#0f3d68] hover:underline">SEO</Link>,
              and quote a fixed price before build starts. Typical marketing sites start from ₹5,000 —
              see <Link href="/pricing" className="text-[#0f3d68] hover:underline">pricing</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
              Services for {city.name}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/website-designing" className="text-[#0f3d68] hover:underline font-medium">
                  Business websites & e-commerce
                </Link>
                <span className="text-slate-500"> — marketing sites and online stores</span>
              </li>
              <li>
                <Link href="/services/seo" className="text-[#0f3d68] hover:underline font-medium">
                  SEO services
                </Link>
                <span className="text-slate-500"> — rank for {city.name} and service keywords</span>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-[#0f3d68] hover:underline font-medium">
                  Digital marketing
                </Link>
                <span className="text-slate-500"> — ads and campaigns that drive traffic</span>
              </li>
              <li>
                <Link href="/pricing" className="text-[#0f3d68] hover:underline font-medium">
                  Pricing
                </Link>
                <span className="text-slate-500"> — fixed quotes before build</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
              Why {city.name} companies hire us
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Fixed quote before development starts",
                "Next.js & React builds with SEO foundations",
                "Fully remote delivery with WhatsApp and video updates",
                "India-based team serving clients pan-India",
                "Handoff with production deploy and maintainable code",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#0f3d68]">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">
            Frequently asked questions — {city.name}
          </h2>
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

      <section className="py-14 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <h2 className="font-display text-xl font-semibold text-slate-900 mb-6">
            Website development in other Indian cities
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={cityPath(c.slug)}
                className="text-slate-600 hover:text-[#0f3d68] hover:underline"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/website-development-company-in"
              className="text-[#0f3d68] font-medium hover:underline"
            >
              View all cities
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`More from SmartSoft Solutions`}
        subtitle={`After browsing ${city.name}, explore services, live projects, and pricing.`}
      />

      <PageCta
        title={`Ready for a website quote in ${city.name}?`}
        description="Tell us your goals — we reply with scope, timeline, and a fixed price."
        primaryHref={`/contact?service=Website%20Development%20${encodeURIComponent(city.name)}`}
      />
    </div>
  );
}
