import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

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
      <Breadcrumb items={breadcrumbItems} className="max-w-6xl mx-auto px-5 sm:px-6 pt-4" />

      <section className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <p className="text-sm font-medium text-[#0f3d68] mb-4">Website development · E-commerce</p>
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
            Business website and e-commerce development built to rank and convert
          </h1>
          <p className="max-w-2xl text-base text-slate-600 leading-relaxed mb-8">
            SmartSoft Solutions designs and develops marketing websites, online stores, and web apps with Next.js and React —
            fast, mobile-ready, and structured for search engines and sales.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?service=Business%20Website" className="px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium">
              Get a website quote
            </Link>
            <Link href="/projects" className="px-5 py-2.5 rounded-md border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300">
              See selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">What we build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business websites",
                text: "Service pages, about, pricing, and lead forms that explain your offer and capture enquiries.",
              },
              {
                title: "E-commerce stores",
                text: "Product catalogs, offers, cart, checkout, and payment integrations for real online orders.",
              },
              {
                title: "Web apps & dashboards",
                text: "Auth, dashboards, and workflows with Firebase or Supabase for teams and customers.",
              },
            ].map((item) => (
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
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">On-page SEO included in every build</h2>
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
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Related services</h2>
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
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
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

      <section className="border-t border-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Ready for a website or store quote?</h2>
            <p className="text-sm text-slate-600">Tell us your goals — we reply with scope, timeline, and a fixed price.</p>
          </div>
          <Link
            href="/contact?service=Business%20Website"
            className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
