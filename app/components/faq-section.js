"use client";

import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does it cost to build a website?",
            answer: "Our website development plans start at $199.99 for small businesses and startups. Pricing is transparent and tailored to your needs.",
            icon: "💰"
        },
        {
            question: "How quickly can you deliver a website or app?",
            answer: "Most websites and apps are delivered within 48 hours for essential plans. Custom solutions may take longer, but we always prioritize speed and quality.",
            icon: "⏱️"
        },
        {
            question: "Do you offer mobile app development?",
            answer: "Yes, we build affordable mobile apps for iOS and Android. Our team will help you launch your app quickly and efficiently.",
            icon: "�"
        },
        {
            question: "Is my website SEO-optimized and mobile-friendly?",
            answer: "Every website we build is fully SEO-optimized and mobile-responsive, ensuring your business ranks well and looks great on any device.",
            icon: "�"
        },
        {
            question: "Do you provide content writing services?",
            answer: "Absolutely! We offer professional content writing for websites, blogs, and marketing. Our writers help you engage and convert your audience.",
            icon: "✍️"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-linear-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full mb-6">
                        <p className="text-sm font-bold text-white uppercase tracking-wide">FAQ</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                        FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Got questions? We've got answers! Here are the most common questions our clients ask about our services.
                    </p>
                    <div className="h-1 w-24 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-6"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${openIndex === index ? 'border-yellow-400' : 'border-gray-100 hover:border-yellow-300'}`}
                            >
                                {/* Gradient accent bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-yellow-400 to-orange-500 transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-linear-to-r hover:from-yellow-50/50 hover:to-transparent transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                                {faq.icon}
                                            </div>
                                        </div>
                                        {/* Question */}
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                    {/* Toggle Icon */}
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

                                {/* Answer */}
                                <div
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                                        <div className="bg-linear-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border-l-4 border-yellow-400">
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

                {/* CTA Section */}
                <div className="mt-16 relative">
                    <div className="bg-linear-to-br from-gray-900 via-gray-800 to-black p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <div className="text-5xl mb-4">💬</div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase">
                                Still Have Questions?
                            </h3>
                            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                We're here to help! Contact us and we'll answer all your questions.
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
                                    className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-base uppercase hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-xl">✉️</span>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
