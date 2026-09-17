"use client";

import { HOME_FAQS } from "@/lib/seo";
import { PRICING_SHORT } from "@/lib/pricing";
import Reveal from "./reveal";

/**
 * Accordion UI, but answers stay in the DOM (visually hidden when closed)
 * so crawlers and no-JS still see FAQ text — not empty "+" rows.
 */
export default function FAQSection() {
  const faqs = HOME_FAQS;

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-medium text-[#0f3d68] mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Straight answers before you hire
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Production websites from {PRICING_SHORT}. Timelines and deliverables for business sites, stores, and web apps across India.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={2}>
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-2" open={faq === faqs[0]}>
                  <summary className="py-3 flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0 group-open:hidden">
                      +
                    </span>
                    <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0 hidden group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="pb-5 text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
