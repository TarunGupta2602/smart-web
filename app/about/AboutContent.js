"use client";

import Link from "next/link";

export default function AboutContent({ expertiseItems, team }) {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-500 selection:text-black">

            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-slate-950 text-white py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-400">Open for Paid Projects</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.1] lg:leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-white">
                            WE BUILD SITES THAT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-2">get customers.</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                            SmartSoft Solutions is a digital product company — marketing websites, e-commerce stores, and web apps with Next.js and React. You get a live product, not a demo.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div className="relative group mb-12 lg:mb-0">
                            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors"></div>

                                <div className="flex justify-between items-center border-b border-white/10 pb-6 relative z-10">
                                    <div>
                                        <h4 className="text-lg font-black uppercase text-white font-serif">SmartSoft Delivery</h4>
                                        <p className="text-xs text-slate-400">From brief to production launch</p>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">LIVE BUILD</span>
                                </div>

                                <div className="space-y-4 my-8 relative z-10">
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">Stack:</span>
                                        <span className="text-green-400 font-bold">Next.js · React</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">Backend options:</span>
                                        <span className="text-green-400 font-bold">Firebase · Supabase</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">Quote before build:</span>
                                        <span className="text-yellow-400 font-bold">✓ Fixed</span>
                                    </div>
                                </div>

                                <div className="p-5 bg-white/5 rounded-xl border border-white/10 relative z-10">
                                    <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">What you get</p>
                                    <p className="text-sm font-bold text-slate-200">
                                        A production deploy, maintainable codebase, and handoff notes — so you can run and grow the product.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 md:space-y-10">
                            <div className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 font-black uppercase text-[10px] tracking-widest rounded-md">Digital Solutions Company</div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase text-slate-900">
                                COMPANY BUILDS. <br />
                                <span className="italic font-serif text-yellow-500">LIVE PRODUCTS.</span>
                            </h2>
                            <div className="prose max-w-none text-slate-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    We specialize in business websites, e-commerce stores, and full-stack web apps. Projects are quoted up front, built with weekly demos, and launched to production — so clients get customers, not prototypes.
                                </p>
                                <p className="text-base leading-relaxed">
                                    Based in Canada and India, we work remotely with clients worldwide via WhatsApp, email, and video. Our process stays controlled so scope and budget stay clear from brief to handoff.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                                    <div className="text-yellow-500 mb-2 font-black text-xl">✓</div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-600">Fixed Quotes</h4>
                                </div>
                                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                                    <div className="text-yellow-500 mb-2 font-black text-xl">✓</div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-600">Production Deploys</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-4">Core Strengths</h3>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900">OUR DIGITAL <span className="text-yellow-500 italic font-serif">EXPERTISE</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertiseItems.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-350 hover:-translate-y-1">
                                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-black uppercase mb-4 text-slate-900">{item.name}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-4">The People</h3>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900">MEET THE <span className="text-yellow-500 italic font-serif">TEAM</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-900 text-yellow-400 flex items-center justify-center text-xl font-black group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-300">
                                    {member.initials}
                                </div>
                                <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{member.name}</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                        HAVE A PROJECT? <span className="italic font-serif text-yellow-500 lowercase">Let&apos;s ship.</span>
                    </h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Send a short brief — we reply with scope and a clear quote, usually within two business days.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase text-xs tracking-widest rounded-full transition-all shadow-xl"
                    >
                        Request a Quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
