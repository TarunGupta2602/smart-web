"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How much does a website or web app cost?",
        answer:
            "It depends on scope. A focused business site, an e-commerce store, and a custom web app are priced differently. Share your goals and budget range — we reply with a fixed quote before any build starts.",
    },
    {
        question: "What kinds of projects do you take?",
        answer:
            "Business and marketing websites, e-commerce stores, and web apps or dashboards built with Next.js, React, Firebase, or Supabase — including redesigns when the goal is a live product.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Many marketing sites ship in a few weeks. Stores and apps take longer based on features. Timeline is written into the quote so you know launch timing before we start.",
    },
    {
        question: "Do you work with clients outside Canada and India?",
        answer:
            "Yes. We work remotely via WhatsApp, email, and video calls — including USA and other time zones when needed.",
    },
    {
        question: "What do we get when the project is done?",
        answer:
            "A production deploy, a maintainable codebase, and handoff notes so you can run the site or app. Deliverables are listed in the quote up front.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <p className="text-sm font-medium text-[#0f3d68] mb-3">FAQ</p>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                            Straight answers before you hire
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Pricing, timelines, and deliverables — without the sales fluff.
                        </p>
                    </div>

                    <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-slate-200">
                        {faqs.map((faq, index) => {
                            const open = openIndex === index;
                            return (
                                <div key={faq.question}>
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(open ? null : index)}
                                        className="w-full text-left py-5 flex items-start justify-between gap-6"
                                    >
                                        <span className="text-base font-medium text-slate-900 pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0">
                                            {open ? "−" : "+"}
                                        </span>
                                    </button>
                                    {open && (
                                        <p className="pb-5 text-sm text-slate-600 leading-relaxed max-w-2xl -mt-1">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
