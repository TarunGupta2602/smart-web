"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutContent({ expertiseItems, team }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-500 selection:text-black">
            {/* Cinematic Hero Section - PRESERVED DARK THEME */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#0a0a0b]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Get To Know Us"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>

                </div>

                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <div className="max-w-6xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-400 border border-yellow-500/20 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-black animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-black">Global Digital Solutions Provider</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1] lg:leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-black">
                            GET TO KNOW ABOUT US & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-2">OUR THINKING.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-black leading-relaxed max-w-4xl mx-auto lg:mx-0">
                            We bridge the gap between complex engineering and user-centric design, providing the infrastructure
                            that powers high-growth companies worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comprehensive Expertise & One-Stop Solutions - WHITE THEME */}
            <section className="py-32 bg-white text-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="relative group">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
                                <Image
                                    src="/neww.png"
                                    alt="Expert Digital Engineering in Action"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-8 rounded-3xl shadow-xl">
                                        <p className="text-orange-600 font-black uppercase text-xs tracking-widest mb-4">Core Capability</p>
                                        <h3 className="text-gray-900 text-lg font-bold leading-tight uppercase">Scalable Architecture & Infrastructure Optimization.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="inline-block px-4 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-md">The One-Stop Shop Solution</div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase text-gray-900">
                                LEADING WEB DEVELOPMENT <br />
                                <span className="italic font-serif text-orange-600">ENTERPRISE.</span>
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    We possess deep expertise in Advanced Website Development, Professional UI/UX Design, Custom Software Engineering,
                                    and Strategic Digital Marketing. As a premier web designing agency, we specialize in building high-conversion platforms
                                    that integrate Android/iOS App Development and Enterprise-Grade Cloud Hosting.
                                </p>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Our unique capability to serve as a comprehensive digital solutions provider removes
                                    technological bottlenecks and vendor fragmentation. We are your reliable partner for **Agile Development**,
                                    Secure API Integrations, and Global Brand Scaling.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="text-orange-600 mb-2">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Lowest Price Guarantee</h4>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="text-orange-600 mb-2">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Simplified Logistics</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* World Class Commitment Section - LIGHT BACKGROUND */}
            <section className="py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-gray-900">
                            BUILDING WORLD CLASS <br />
                            <span className="italic font-serif text-orange-600 uppercase">PRODUCTS.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are committed to build world class products based on its philosophy that great products help building successful companies.
                            This is designed to drive customer satisfaction, making the workplace a fun place for our employees
                            and creating significant shareholder value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black mb-10 shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-gray-900">Global Connectivity</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Our mission is to create an environment that helps companies to capitalize on the diversity of its people
                                and the inclusion of ideas and solutions to meet the needs of its increasing global and diverse customer base.
                            </p>
                        </div>
                        <div className="p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3.5 1.3 2.1 5m1.3.6a4 4 0 11-8 1.3" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-gray-900">Passion & Capabilities</h3>
                            <p className="text-gray-500 leading-relaxed">
                                With thousands of successful projects delivered across the world, we believe in giving life to your
                                brand through our experience, passion and capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Principles & Quality Assurance - WHITE THEME */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-gray-900">
                                    CUSTOMER FIRST <br />
                                    <span className="italic font-serif text-orange-600">PHILOSOPHY.</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    We take pride in our ability to deliver excellent software solutions to our clients around the world.
                                    As a corporate principle we believe in winning repeat business from our existing customers through
                                    our hard-work and dedication.
                                </p>
                                <div className="p-8 bg-gray-50 rounded-3xl border-l-4 border-yellow-500 shadow-sm">
                                    <p className="text-gray-700 italic text-lg">
                                        "We realize that any inefficiency and loss to our customer's business is our loss,
                                        and we take this loss personally."
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-500 leading-relaxed">
                                    Our strict adherence to internal processes, guidelines, and the use of a premier quality assurance team
                                    ensures that our customers stay happy while we deliver the highest caliber of software development
                                    and customer service.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Premier Quality Team</span>
                                    </div>
                                    <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                        <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Repeat Trust Model</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-gray-50 p-4 shadow-xl">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/customerfirst.png"
                                        alt="Quality Assurance"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent"></div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 lg:-bottom-12 lg:-right-12 bg-white border border-gray-100 p-10 rounded-3xl shadow-2xl text-center">
                                <span className="block text-5xl font-black text-orange-600 mb-2">100%</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Satisfaction Promise</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            {/* Final Reassurance CTA - LIGHT THEME */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8] text-gray-900">
                            DEPEND ON OUR <br />
                            <span className="italic font-serif text-orange-600 uppercase">PROMISES.</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                            Our culture, passion for quality, and the simple "customer comes first" philosophy ensures
                            that clients can depend on us to continuously deliver on the promises we make.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <Link href="/contact" className="group px-12 py-8 bg-gray-900 text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 transition-all duration-500 flex items-center gap-6 shadow-xl">
                                Verify Our Process
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </Link>
                            <div className="flex flex-col gap-4">
                                <a href="tel:17077084062" className="group px-8 py-4 bg-white text-gray-900 border border-gray-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 transition-all duration-500 flex items-center gap-4 shadow-md">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.5A2.5 2.5 0 015.5 3h1.8a1 1 0 01.9.6l.8 2.5a1 1 0 01-.6 1.2l-1.5.8a11 11 0 005 5l.8-1.5a1 1 0 011.2-.6l2.5.8a1 1 0 01.6.9v1.8a2.5 2.5 0 01-2.5 2.5h-1C8.5 21 3 15.5 3 8.35v-2.85z" /></svg>
                                    1-707-708-4062
                                </a>
                                <a href="mailto:support@smartsoftsolutions.org" className="group px-8 py-4 bg-white text-gray-900 border border-gray-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 transition-all duration-500 flex items-center gap-4 shadow-md">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    support@smartsoftsolutions.org
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 text-[15vw] font-black text-gray-100 uppercase select-none pointer-events-none whitespace-nowrap">
                    SMARTSOFT SOLUTIONS
                </div>
            </section>
        </div>
    );
}
