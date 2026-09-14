import Link from "next/link";
import Image from "next/image";
import IndiaCitiesSection from "../../components/india-cities-section";
import PageHero from "../../components/page-hero";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export const metadata = buildPageMetadata({
  title: "Business Website & E-commerce Development",
  description:
    "Custom business website design and e-commerce development with Next.js and React. Mobile-ready stores, marketing sites, and web apps — fixed quotes, SEO-friendly builds, production launch.",
  path: "/services/website-designing",
  keywords: [
    "business website development",
    "e-commerce website development",
    "custom website design company",
    "Next.js website development",
    "online store development",
    "conversion focused websites",
    "hire website developer",
  ],
});

const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "Pricing depends on pages, features, and integrations. SmartSoft Solutions provides a fixed quote after reviewing your goals and budget range — before any development starts.",
  },
  {
    question: "Do you build e-commerce stores with payments?",
    answer:
      "Yes. We build catalogs, carts, checkout flows, and payment integrations so your store can take real orders on mobile and desktop.",
  },
  {
    question: "Will my new website be SEO-friendly?",
    answer:
      "Yes. We structure pages with clear headings, fast performance, mobile-first layouts, and on-page SEO basics so you can rank for relevant search terms.",
  },
  {
    question: "Do you build websites for businesses in Delhi, Mumbai, Bangalore, and other Indian cities?",
    answer:
      "Yes. We serve companies across major Indian cities with remote delivery and fixed quotes. See our city pages under website development company in India for Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and more.",
  },
];

export default function WebsiteDesigningServicePage() {
  const pageSchema = webPage({
    name: "Business Website & E-commerce Development",
    description:
      "Custom business websites, e-commerce stores, and web apps built with Next.js and React.",
    url: `${SITE_URL}/services/website-designing`,
  });
  const serviceSchema = service({
    name: "Business Website & E-commerce Development",
    description:
      "Marketing websites, online stores, and web apps built for conversion and production launch.",
    url: "/services/website-designing",
    serviceType: "Website Development",
    areaServed: "Worldwide",
  });
  const breadcrumbSchema = breadcrumbList([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Websites & Stores", url: `${SITE_URL}/services/website-designing` },
  ], SITE_URL);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Websites & Stores", url: "/services/website-designing" },
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
        eyebrow="Website development · E-commerce"
        title="Business website and e-commerce development built to rank and convert"
        description="SmartSoft Solutions designs and develops marketing websites, online stores, and web apps with Next.js and React — fast, mobile-ready, and structured for search engines and sales."
        videoSrc={PAGE_VIDEOS.screens}
        posterSrc={PAGE_POSTERS.shop}
        primaryCta={{ href: "/contact?service=Business%20Website", label: "Get a website quote" }}
        secondaryCta={{ href: "/projects", label: "See selected work" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-8">What we build</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business websites",
                text: "Service pages, about, pricing, and lead forms that explain your offer and capture enquiries.",
                image: PAGE_POSTERS.analytics,
              },
              {
                title: "E-commerce stores",
                text: "Product catalogs, offers, cart, checkout, and payment integrations for real online orders.",
                image: PAGE_POSTERS.shop,
              },
              {
                title: "Web apps & dashboards",
                text: "Auth, dashboards, and workflows with Firebase or Supabase for teams and customers.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index + 1}>
                <div className="border border-slate-200 overflow-hidden">
                  <div className="media-frame relative aspect-[16/10] bg-slate-100">
                    <Image src={item.image} alt="" fill sizes="33vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">On-page SEO included in every build</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Ranking starts with clean structure. We implement technical and on-page SEO foundations during development —
              not as an afterthought.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Semantic headings and crawlable page structure",
                "Fast Core Web Vitals–focused performance",
                "Mobile-first responsive layouts",
                "Meta titles, descriptions, and canonical URLs",
                "Schema-ready service and content pages",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#0f3d68]">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">Related services</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/seo" className="text-[#0f3d68] hover:underline font-medium">SEO services</Link>
                <span className="text-slate-500"> — technical audits, keywords, and ongoing organic growth</span>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-[#0f3d68] hover:underline font-medium">Digital marketing</Link>
                <span className="text-slate-500"> — ads, content, and campaigns that drive traffic to your new site</span>
              </li>
              <li>
                <Link href="/pricing" className="text-[#0f3d68] hover:underline font-medium">Pricing packages</Link>
                <span className="text-slate-500"> — website, store, and web app quote options</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <IndiaCitiesSection
        title="Website development for Indian city businesses"
        subtitle="Dedicated landing pages for Delhi, Mumbai, Bangalore, and other hubs — useful for local SEO and city-specific enquiries."
      />

      <section className="py-14 md:py-20">
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

      <PageCta
        title="Ready for a website or store quote?"
        description="Tell us your goals — we reply with scope, timeline, and a fixed price."
        primaryHref="/contact?service=Business%20Website"
      />
    </div>
  );
}
