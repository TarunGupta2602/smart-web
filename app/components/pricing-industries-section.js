import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { PRICING_PACKAGES, PRICING_SUMMARY } from "@/lib/pricing";

const industries = [
  "Local service businesses",
  "E-commerce brands",
  "Professional practices",
  "Startups & product teams",
  "Retail & specialty shops",
  "Consultants & agencies",
];

export default function PricingIndustriesSection() {
  return (
    <section className="relative bg-[#0b1726] text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-35">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1726]/85" />
      </div>

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
                className={`h-full p-7 backdrop-blur-sm ${
                  plan.featured
                    ? "bg-white text-slate-900"
                    : "bg-white/5 border border-white/15 text-white"
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
                <ul className="space-y-2.5 mb-8">
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
                  className={`text-sm font-medium hover:underline ${
                    plan.featured ? "text-[#0f3d68]" : "text-white"
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
                className="text-xs px-3 py-1.5 rounded-md border border-white/15 text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
          <Link href="/pricing" className="text-sm font-medium text-sky-200 hover:underline">
            View full pricing details →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
