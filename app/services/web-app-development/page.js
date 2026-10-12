import Link from "next/link";
import IndiaCitiesSection from "../../components/india-cities-section";
import PageHero from "../../components/page-hero";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import RelatedLinks from "../../components/related-links";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";
import { PRICE_APP } from "@/lib/pricing";

export const metadata = buildPageMetadata({
  title: "Custom Web App Development",
  description:
    "Custom web apps and dashboards with Next.js, React, Firebase or Supabase. Auth, roles, and workflows — fixed quotes from ₹25,000.",
  path: "/services/web-app-development",
  keywords: [
    "web app development",
    "custom web application development India",
    "Next.js web app",
    "dashboard development",
    "Firebase web app",
    "Supabase web app",
  ],
});

const faqs = [
  {
    question: "How much does a custom web app cost?",
    answer: `Web apps start from ${PRICE_APP}. The fixed quote depends on auth, roles, screens, and integrations. You get a written scope before any build starts.`,
  },
  {
    question: "Do you build mobile apps for the App Store?",
    answer:
      "We build web apps that work on phone browsers and can feel app-like. Native iOS/Android store apps are a different scope — ask if that is what you need.",
  },
  {
    question: "What stack do you use?",
    answer:
      "Next.js and React on the front. Firebase or Supabase for auth, data, and storage. You get a maintainable codebase and a production handoff.",
  },
  {
    question: "How long does a web app take?",
    answer:
      "A focused MVP with login and a few core screens often takes several weeks. Timeline is written into the quote after the feature map.",
  },
];

const process = [
  { step: "01", title: "Map the problem", text: "Who logs in, what they need to do, and which screens matter in week one." },
  { step: "02", title: "Fixed quote", text: "Written scope, price, and timeline before development — no open-ended hourly fog." },
  { step: "03", title: "Weekly demos", text: "Staging links every week so you can click the real product, not slides." },
  { step: "04", title: "Launch & handoff", text: "Production deploy, access docs, and a codebase you can keep maintaining." },
];

export default function WebAppDevelopmentPage() {
  const pageSchema = webPage({
    name: "Custom Web App Development",
    description: "Auth, dashboards, and workflows built with Next.js, React, Firebase or Supabase.",
    url: `${SITE_URL}/services/web-app-development`,
  });
  const serviceSchema = service({
    name: "Custom Web App Development",
    description: "Web apps and dashboards with auth, roles, and production handoff.",
    url: "/services/web-app-development",
    serviceType: "Web Application Development",
    areaServed: "Worldwide",
  });
  const breadcrumbSchema = breadcrumbList([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Web apps", url: `${SITE_URL}/services/web-app-development` },
  ]);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Web apps", url: "/services/web-app-development" },
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
        eyebrow="Web apps · Dashboards · Workflows"
        title="Custom web apps that teams actually use"
        description="Login, roles, dashboards, and product flows — built with Next.js and React, backed by Firebase or Supabase. Fixed quotes from ₹25,000 before any code starts."
        videoSrc={PAGE_VIDEOS.team}
        posterSrc={PAGE_POSTERS.team}
        primaryCta={{ href: "/get-a-quote?service=Custom%20web%20app", label: "Get a Free Quote" }}
        secondaryCta={{ href: "/projects", label: "See live work" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">The problem</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Spreadsheets, WhatsApp threads, and borrowed tools break when more than a few people use them. You need
              roles, a clear workflow, and a product you own — not another template that cannot grow.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">The solution</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We ship a focused web app: auth, the screens that matter, and a backend you can hand to your team. Start
              with an MVP that solves one job well, then expand with a written change request.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">How we build it</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={(index % 4) + 1}>
                <p className="text-xs font-medium text-[#0f3d68] mb-2">{item.step}</p>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">Pricing range</h2>
            <p className="text-3xl font-semibold text-[#0f3d68] mb-2">From {PRICE_APP}</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Starting band for a focused Next.js web app with auth and core screens. Exact quote follows your feature map.
              Hosting and third-party tools are separate.
            </p>
            <Link href="/pricing" className="link-shift text-sm font-medium text-[#0f3d68]">
              Compare all packages <span className="shift-icon">→</span>
            </Link>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">Related services</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/website-designing" className="text-[#0f3d68] hover:underline font-medium">
                  Business websites & stores
                </Link>
                <span className="text-slate-500"> — marketing sites and e-commerce when you need leads or orders first</span>
              </li>
              <li>
                <Link href="/services/seo" className="text-[#0f3d68] hover:underline font-medium">
                  SEO
                </Link>
                <span className="text-slate-500"> — structure and content so the right people find the product</span>
              </li>
              <li>
                <Link href="/projects" className="text-[#0f3d68] hover:underline font-medium">
                  Selected work
                </Link>
                <span className="text-slate-500"> — live client sites you can open</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <IndiaCitiesSection
        title="Web apps for Indian city businesses"
        subtitle="Remote delivery across Delhi NCR and major Indian cities — weekly staging demos instead of office visits."
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

      <RelatedLinks excludeHref="/services/web-app-development" />
      <PageCta
        title="Ready for a web app quote?"
        description="Share the job the app must do — we reply with scope, timeline, and a fixed price."
        primaryLabel="Get a Free Quote"
        primaryHref="/get-a-quote?service=Custom%20web%20app"
      />
    </div>
  );
}
