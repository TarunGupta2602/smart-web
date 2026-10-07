import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./QuoteForm";
import { buildPageMetadata, GOOGLE_BUSINESS_URL, SITE_URL } from "@/lib/seo";
import { PRICING_PACKAGES } from "@/lib/pricing";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";
import { breadcrumbList, stringifySchema, webPage } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Get a Website Quote",
  description:
    "Fixed website quotes from ₹10,000. Talk to Tarun Gupta in Ghaziabad. See live client sites, then send your city and what you need.",
  path: "/get-a-quote",
  keywords: [
    "website quote Ghaziabad",
    "business website cost Delhi",
    "hire website developer Delhi NCR",
    "ecommerce website quote",
  ],
});

export default async function GetAQuotePage(props) {
  const searchParams = await props.searchParams;
  const service = typeof searchParams?.service === "string" && searchParams.service.trim()
    ? searchParams.service.trim().slice(0, 80)
    : "Business website";
  const schema = stringifySchema([
    webPage({
      name: "Get a website quote",
      description: "Fixed quotes for business websites, stores, and web apps. Talk to Tarun Gupta.",
      url: `${SITE_URL}/get-a-quote`,
    }),
    breadcrumbList([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Get a quote", url: `${SITE_URL}/get-a-quote` },
    ]),
  ]);

  return (
    <div className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <section className="border-b border-slate-100 pt-10 pb-14 md:pt-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-5 lg:grid-cols-12 lg:px-6">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/images/tarun-gupta.png"
                alt="Tarun Gupta, founder of SmartSoft Solutions"
                width={84}
                height={84}
                priority
                unoptimized
                className="h-[84px] w-[84px] rounded-full object-cover object-top"
              />
              <div>
                <p className="text-sm font-medium text-[#0f3d68]">You talk to the person who quotes the work</p>
                <p className="font-display text-xl font-semibold text-slate-900">Tarun Gupta</p>
                <p className="text-sm text-slate-500">Ghaziabad · building sites since 2018</p>
              </div>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              A fixed quote before any build starts.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              Business sites from ₹10,000, stores from ₹15,000, web apps from ₹25,000. A focused marketing site is often ready in about 2–3 weeks. Work starts after a deposit. The rest follows the milestones in your quote.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {PRICING_PACKAGES.map((plan) => (
                <li key={plan.name}>
                  <span className="font-medium text-slate-900">{plan.name}</span> from {plan.priceFrom}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              Hosting, domain, and payment-gateway fees are separate.{" "}
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-[#0f3d68] underline">
                Google reviews
              </a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm service={service} />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
          <h2 className="mb-6 font-display text-2xl font-semibold text-slate-900">Open the live work first</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-[#0f3d68]"
              >
                <p className="text-xs font-medium text-[#0f3d68]">{project.category}</p>
                <p className="mt-1 font-display text-xl font-semibold text-slate-900">{project.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.result}</p>
                <p className="mt-4 text-sm font-medium text-[#0f3d68]">Open the live site →</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Need the longer form or a free review of a site you already have?{" "}
            <Link href="/contact" className="text-[#0f3d68] underline">Contact</Link>
            {" · "}
            <Link href="/free-website-audit" className="text-[#0f3d68] underline">Free website review</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
