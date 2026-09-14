import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
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
      <Breadcrumb items={breadcrumbItems} className="max-w-6xl mx-auto px-5 sm:px-6 pt-4" />

      <section className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <p className="text-sm font-medium text-[#0f3d68] mb-4">
            {city.name} · {city.region}
          </p>
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
            {city.headline}
          </h1>
          <p className="max-w-2xl text-base text-slate-600 leading-relaxed mb-4">
            {city.intro}
          </p>
          <p className="max-w-2xl text-sm text-slate-500 leading-relaxed mb-8">
            {city.focus}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/contact?service=Website%20Development%20${encodeURIComponent(city.name)}`}
              className="px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium"
            >
              Get a {city.name} website quote
            </Link>
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-md border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300"
            >
              See selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
            What we build for {city.name} businesses
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-2xl">
            Business websites, e-commerce stores, and web apps tailored to how companies in {city.name} actually sell and take enquiries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.businesses.map((item) => (
              <div key={item.title} className="border-t border-slate-200 pt-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
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
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Why {city.name} companies hire us
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Fixed quote before development starts",
                "Next.js & React builds with SEO foundations",
                "Remote delivery with WhatsApp and video updates",
                "India team presence in Noida for NCR coordination",
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
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
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
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
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

      <section className="border-t border-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ready for a website quote in {city.name}?
            </h2>
            <p className="text-sm text-slate-600">
              Tell us your goals — we reply with scope, timeline, and a fixed price.
            </p>
          </div>
          <Link
            href={`/contact?service=Website%20Development%20${encodeURIComponent(city.name)}`}
            className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
