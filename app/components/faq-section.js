"use client";

import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does it cost to build a website?",
            answer: "Our website plans start from just $199.99! We offer flexible pricing based on your specific needs and requirements. Whether you need a simple landing page or a complex e-commerce platform, we can customize a plan that fits your budget. Contact us for a detailed quote tailored to your project.",
            icon: "💰"
        },
        {
            question: "How long does it take to build a website?",
            answer: "The timeline varies depending on the complexity of your project. A basic website can be completed in 1-2 weeks, while more complex websites with custom features may take 4-8 weeks. We'll provide you with a detailed timeline during our initial consultation and keep you updated throughout the development process.",
            icon: "⏱️"
        },
        {
            question: "Do you provide website maintenance and support?",
            answer: "Yes! We offer comprehensive maintenance and support packages to keep your website running smoothly. This includes regular updates, security patches, content updates, bug fixes, and technical support. We're committed to ensuring your website remains secure, fast, and up-to-date.",
            icon: "🔧"
        },
        {
            question: "Will my website be mobile-friendly and responsive?",
            answer: "Absolutely! All websites we create are fully responsive and optimized for all devices including smartphones, tablets, and desktops. We follow modern web design standards to ensure your website looks great and functions perfectly on any screen size.",
            icon: "📱"
        },
        {
            question: "Do you offer SEO services?",
            answer: "Yes, we provide comprehensive SEO services to help your website rank higher in search engines. This includes on-page optimization, keyword research, meta tags, site speed optimization, and SEO-friendly content structure. We ensure your website is built with SEO best practices from the ground up.",
            icon: "🚀"
        },
        {
            question: "Can you help with domain and hosting?",
            answer: "Yes! We provide domain registration and hosting services at the lowest possible cost. We can help you choose the perfect domain name for your business and set up reliable, secure hosting that ensures your website loads quickly and stays online 24/7.",
            icon: "🌐"
        },
        {
            question: "What industries do you serve?",
            answer: "We serve all industries! From agriculture to aviation, banking to e-commerce, real estate to healthcare, and everything in between. Our team has experience working with diverse businesses and can create customized solutions for any industry or niche market.",
            icon: "🏢"
        },
        {
            question: "Will I be able to update my website content myself?",
            answer: "Yes! We can build your website on user-friendly platforms like WordPress that allow you to easily update content, add images, and make changes without any technical knowledge. We also provide training and documentation to help you manage your website confidently.",
            icon: "✏️"
        },
        {
            question: "Do you provide e-commerce solutions?",
            answer: "Absolutely! We specialize in creating powerful e-commerce websites with features like product catalogs, shopping carts, secure payment gateways, inventory management, and order tracking. We can help you sell your products online effectively and securely.",
            icon: "🛒"
        },
        {
            question: "What makes SmartSoft Solutions different from other web development companies?",
            answer: "We combine affordability with quality! Our competitive pricing starting at $199.99, personalized service, quick turnaround times, and commitment to customer satisfaction set us apart. We treat every project as unique and work closely with you to ensure your vision becomes reality. Plus, we provide ongoing support to help your business grow.",
            icon: "⭐"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full mb-6">
                        <p className="text-sm font-bold text-white uppercase tracking-wide">FAQ</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                        FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Got questions? We've got answers! Here are the most common questions our clients ask about our services.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-6"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${openIndex === index ? 'border-yellow-400' : 'border-gray-100 hover:border-yellow-300'
                                    }`}
                            >
                                {/* Gradient accent bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow-400 to-orange-500 transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                                    }`}></div>

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-transparent transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
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
                                    <div className="flex-shrink-0">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-yellow-400 rotate-180' : 'bg-gray-100 group-hover:bg-yellow-100'
                                            }`}>
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
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
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

                {/* CTA Section */}
                <div className="mt-16 relative">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
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
                                    href="tel:17867538470"
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span className="text-xl">📞</span>
                                    Call: 1-786-753-8470
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-base uppercase hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
