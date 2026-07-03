"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsContent({ projects }) {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Bookkeeping & Accounting", "Payroll Processing", "Tax Preparation"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">

            {/* Cinematic Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-black text-yellow-400">Verified Client Results</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase whitespace-pre-line text-white">
                            Proven Case <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">Studies.</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Read how our bookkeeping restructuring, compliant payroll, and CPA-guided tax filings saved thousands of dollars and eliminated audit concern for small business owners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter Section */}
            <section className="py-12 bg-slate-50 border-b border-slate-200/50 sticky top-16 z-30 backdrop-blur-md bg-white/95">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${filter === cat
                                        ? "bg-slate-900 text-white shadow-lg"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-yellow-400 hover:text-slate-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Case Study Grid */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 gap-16">
                        {filteredProjects.map((p, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>

                                <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                    <div>
                                        <span className="text-[10px] uppercase font-black text-slate-400 tracking-[0.25em] block mb-2">{p.category}</span>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight group-hover:text-yellow-600 transition-colors">{p.title}</h3>
                                    </div>
                                    <div className="px-6 py-2.5 bg-yellow-50 border border-yellow-200/50 rounded-full text-xs font-black uppercase text-yellow-700 tracking-wider">
                                        Result: {p.result}
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-6 border-t border-slate-100 pt-8 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 bg-slate-50 border border-slate-150 rounded-lg text-[9px] font-black uppercase text-slate-500 tracking-widest"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-xs font-bold text-slate-400">
                                        Timeline: <span className="text-slate-900 font-extrabold">{p.timeline}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Trust row (No local images) */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Tax Compliance & Accreditations</h3>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
                        <span className="text-sm font-black tracking-widest uppercase">IRS Authorized e-File</span>
                        <span className="text-sm font-black tracking-widest uppercase">Canada Revenue Compliant</span>
                        <span className="text-sm font-black tracking-widest uppercase">CPA Monitored</span>
                        <span className="text-sm font-black tracking-widest uppercase">QuickBooks ProAdvisor</span>
                    </div>
                </div>
            </section>

            {/* bottom banner */}
            <section className="py-24 bg-slate-950 text-white relative">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter uppercase">
                            LET US STABILIZE <br />
                            <span className="font-serif italic text-yellow-500">YOUR LEDGER.</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                            Contact us configuration for a bookkeeping review, automated business payroll installation, or tax deductions check.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase text-xs tracking-widest rounded-full transition-all duration-300 shadow-xl"
                        >
                            Request Free Consultation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
