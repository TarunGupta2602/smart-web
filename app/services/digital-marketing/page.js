import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import IndiaCitiesSection from "../../components/india-cities-section";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services | Leads & Paid Growth",
  description:
    "Digital marketing services that generate leads for your website and online store — social, paid ads, content, and email campaigns measured against enquiries and revenue.",
  path: "/services/digital-marketing",
  keywords: [
    "digital marketing services",
    "lead generation marketing",
    "PPC advertising",
    "social media marketing for business",
    "content marketing agency",
    "online marketing company",
  ],
});

const faqs = [
  {
    question: "What digital marketing channels do you handle?",
    answer:
      "Social media, paid search and social ads, content, and email nurturing — chosen based on where your customers actually convert.",
  },
  {
    question: "Can marketing work with SEO and website development?",
    answer:
      "Yes. Paid and content campaigns drive traffic quickly while SEO compounds. A clear website converts that traffic into leads and sales.",
  },
  {
    question: "How do you measure marketing success?",
    answer:
      "By leads, form fills, calls, and revenue outcomes — not vanity metrics like likes alone.",
  },
  {
    question: "Do you run campaigns for businesses in Indian cities?",
    answer:
      "Yes. We support lead campaigns for companies across Delhi, Mumbai, Bangalore, and other Indian markets — paired with a conversion-ready website and city-aware SEO when needed.",
  },
];

export default function DigitalMarketingServicePage() {
  const pageSchema = webPage({
    name: "Digital Marketing Services",
    description: "Lead-focused digital marketing across social, ads, content, and email.",
    url: `${SITE_URL}/services/digital-marketing`,
  });
  const serviceSchema = service({
    name: "Digital Marketing Services",
    description: "Campaigns that grow visibility and generate qualified leads for businesses.",
    url: "/services/digital-marketing",
    serviceType: "Digital Marketing",
    areaServed: "Worldwide",
  });
  const breadcrumbSchema = breadcrumbList([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Digital Marketing", url: `${SITE_URL}/services/digital-marketing` },
  ], SITE_URL);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Digital Marketing", url: "/services/digital-marketing" },
  ];

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([pageSchema, serviceSchema, breadcrumbSchema, faqPage(faqs)]),
        }}
      />
      <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-4" />

      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14 md:py-20">
          <p className="text-sm font-medium text-[#0f3d68] mb-4">Digital marketing · Lead generation</p>
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
            Digital marketing services that turn attention into customers
          </h1>
          <p className="max-w-2xl text-base text-slate-600 leading-relaxed mb-8">
            Reach the right audience with focused campaigns across social, search, content, and email —
            measured by leads and revenue, not vanity metrics.
          </p>
          <Link href="/contact?service=Digital%20Marketing" className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium">
            Request a marketing quote
          </Link>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Paid ads", text: "Search and social campaigns aimed at high-intent traffic and measurable enquiries." },
            { title: "Content & social", text: "Clear messaging that supports your offer and builds trust over time." },
            { title: "Email nurturing", text: "Follow-up sequences that move leads from interest to booking or purchase." },
          ].map((item) => (
            <div key={item.title} className="border-t border-slate-200 pt-5">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 text-sm text-slate-600">
          <p>
            Marketing performs best on a conversion-ready site. Explore{" "}
            <Link href="/services/website-designing" className="text-[#0f3d68] hover:underline font-medium">website development</Link>
            {" "}and{" "}
            <Link href="/services/seo" className="text-[#0f3d68] hover:underline font-medium">SEO services</Link>
            {" "}for organic growth alongside paid demand.
          </p>
        </div>
      </section>

      <IndiaCitiesSection
        title="Digital marketing for Indian city businesses"
        subtitle="Campaigns work best with a clear website and local landing pages — see our city pages for Delhi, Mumbai, Bangalore, and more."
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Need leads for your website or store?</h2>
            <p className="text-sm text-slate-600">Tell us your offer and budget — we will propose a practical campaign plan.</p>
          </div>
          <Link href="/contact?service=Digital%20Marketing" className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium">
            Get a marketing quote
          </Link>
        </div>
      </section>
    </div>
  );
}
