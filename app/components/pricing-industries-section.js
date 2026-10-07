import Link from "next/link";
import Reveal from "./reveal";
import LazyHeroVideo from "./lazy-hero-video";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";
import { PRICING_PACKAGES, PRICING_SUMMARY } from "@/lib/pricing";

const industries = [
  "Local service businesses",
  "Restaurants & cafes",
  "E-commerce brands",
  "Professional practices",
  "Startups & product teams",
  "Retail & specialty shops",
  "Consultants & agencies",
];

export default function PricingIndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111c] py-20 text-white md:py-28">
      <div className="absolute inset-0">
        <LazyHeroVideo
          src={PAGE_VIDEOS.coffee}
          poster={PAGE_POSTERS.coffee}
          className="h-full w-full object-cover object-[70%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111c]/92 via-[#07111c]/48 to-[#07111c]/12" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111c]/10 via-[#07111c]/20 to-[#07111c]/78" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-sky-200/80 mb-3">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Clear starting prices. Fixed quotes before build.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-2">
            {PRICING_SUMMARY}. You always get a written fixed quote before any development starts.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PRICING_PACKAGES.map((plan, index) => (
            <Reveal key={plan.name} delay={index + 1}>
              <div
                className={`flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-white text-slate-900 shadow-[0_28px_70px_-24px_rgba(0,0,0,0.55)]"
                    : "border border-white/10 bg-[#101c2e]/95 text-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.8)] hover:border-white/25"
                }`}
              >
                {plan.featured && (
                  <p className="text-xs font-medium text-[#0f3d68] mb-3">Most requested</p>
                )}
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <p
                  className={`text-2xl font-semibold mb-1 ${
                    plan.featured ? "text-[#0f3d68]" : "text-white"
                  }`}
                >
                  From {plan.priceFrom}
                </p>
                <p
                  className={`text-xs mb-4 ${
                    plan.featured ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {plan.priceNote}
                </p>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    plan.featured ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="mb-8 flex-1 space-y-2.5">
                  {plan.includes.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className={`text-sm flex gap-2 ${
                        plan.featured ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      <span className={plan.featured ? "text-[#0f3d68]" : "text-sky-200"}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${encodeURIComponent(plan.name)}`}
                  className={`press mt-auto inline-flex w-fit rounded-md px-4 py-2.5 text-sm font-semibold ${
                    plan.featured
                      ? "bg-[#0f3d68] text-white hover:bg-[#0a2f52]"
                      : "border border-white/20 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  Request this package
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display text-xl font-semibold mb-3">Who we build for</h3>
          <p className="text-sm text-slate-300 mb-6 max-w-xl">
            Practical sites for Indian businesses that need enquiries, orders, or a working product — not slide decks.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-white/40 hover:bg-white/10"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/pricing" className="text-sm font-medium text-sky-200 hover:underline">
              View full pricing details →
            </Link>
            <Link href="/free-website-audit" className="text-sm font-medium text-sky-200 hover:underline">
              Get a free website review →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
