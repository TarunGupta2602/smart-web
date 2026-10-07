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
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f3d68]">FAQ</p>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
              <span className="block text-[#3f4654]">Straight answers.</span>
              <span className="mt-1 block text-[#8ea0c9]">Before you hire.</span>
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              Production websites from {PRICING_SHORT}. Timelines and deliverables for business sites, stores, and web apps across India.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="border-t border-slate-200">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={(index % 3) + 1}>
                  <details
                    className="group border-b border-slate-200"
                    name="home-faq"
                    {...(index === 0 ? { open: true } : {})}
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
                      <h3 className="pr-4 text-base font-medium text-slate-900 transition-colors group-open:text-[#0f3d68]">
                        {faq.question}
                      </h3>
                      <span className="mt-0.5 shrink-0 text-lg leading-none text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="max-w-2xl translate-y-1 pb-5 text-sm leading-relaxed text-slate-600 opacity-0 transition duration-500 group-open:translate-y-0 group-open:opacity-100">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
