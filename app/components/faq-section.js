"use client";

import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does a website or web app cost?",
            answer: "It depends on scope — a focused business site, an e-commerce store, and a custom web app are priced differently. Share your goals and budget range on the quote form and we reply with a clear fixed quote before any build starts.",
            icon: "💰"
        },
        {
            question: "What kinds of paid projects do you take?",
            answer: "Business and marketing websites, e-commerce stores, and web apps or dashboards built with Next.js, React, Firebase, or Supabase — including redesigns and performance fixes when the goal is a live product.",
            icon: "🛠️"
        },
        {
            question: "How long does a typical project take?",
            answer: "Many marketing sites ship in a few weeks; stores and apps take longer based on features. Timeline is included in the quote so you know launch timing before we start.",
            icon: "⏱️"
        },
        {
            question: "Do you work with clients outside India and Canada?",
            answer: "Yes. SmartSoft Solutions works remotely with clients via WhatsApp, email, and video calls — including USA and other time zones when needed.",
            icon: "🌎"
        },
        {
            question: "What do we get when the project is done?",
            answer: "A production deploy, a maintainable codebase, and handoff notes so you can run the site or app. Scope and deliverables are written into the quote up front.",
            icon: "✅"
        },
        {
            question: "What stack do you ship with?",
            answer: "We primarily build with Next.js, React, Node.js, TypeScript, Firebase, and Supabase — modern tools that keep sites fast, maintainable, and ready to grow.",
            icon: "💻"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full mb-6">
                        <p className="text-sm font-bold text-white uppercase tracking-wide">FAQ</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                        BEFORE YOU <span className="text-yellow-500">HIRE US</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Straight answers on pricing, timelines, and what you get when SmartSoft Solutions ships your project.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-6"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${openIndex === index ? 'border-yellow-400' : 'border-gray-100 hover:border-yellow-300'}`}
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow-400 to-orange-500 transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-transparent transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                                {faq.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-yellow-400 rotate-180' : 'bg-gray-100 group-hover:bg-yellow-100'}`}>
                                            <svg
                                                className="w-5 h-5 text-gray-900"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border-l-4 border-yellow-400">
                                            <p className="text-gray-700 leading-relaxed text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 relative">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <div className="text-5xl mb-4">💬</div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase">
                                Still Have Questions?
                            </h3>
                            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                Send a short brief — what you need, timeline, and budget range. We reply with scope and a clear quote.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="tel:17077084062"
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-xl">📞</span>
                                    Call: 1-707-708-4062
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-base uppercase hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-xl">✉️</span>
                                    Request a Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
