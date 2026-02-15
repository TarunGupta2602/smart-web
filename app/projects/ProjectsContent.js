"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsContent({ caseStudies, techStack }) {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            {/* Cinematic Hero */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="SmartSoft Solutions - Strategic Digital Projects and Case Studies"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-black backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-black animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-black">Strategic Case Studies</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">
                            IMPACTFUL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">DELIVERY.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl">
                            We don't just build websites; we engineer business solutions.
                            Explore how our strategic technical approach has transformed brands globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-slate-400 mb-4">Selected Case Studies</h2>
                    <div className="h-0.5 w-20 bg-yellow-500 mx-auto"></div>
                </div>

                <div className="container mx-auto px-6 space-y-32">
                    {caseStudies.map((study, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Project Visual */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-slate-100 shadow-xl">
                                    <Image
                                        src={study.image}
                                        alt={`${study.title} - ${study.category} Case Study by SmartSoft Solutions`}
                                        fill
                                        className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-1/2 text-left">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500 mb-4 block">{study.category}</span>
                                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{study.title}</h3>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-slate-50 border-l-2 border-slate-200 p-6 rounded-r-2xl">
                                        <p className="text-slate-500 text-xs font-black uppercase mb-2 tracking-widest">The Challenge</p>
                                        <p className="text-slate-600 leading-relaxed italic">"{study.challenge}"</p>
                                    </div>
                                    <div className="bg-yellow-500/5 border-l-2 border-yellow-500 p-6 rounded-r-2xl">
                                        <p className="text-yellow-600 text-xs font-black uppercase mb-2 tracking-widest">The Outcome</p>
                                        <p className="text-slate-900 font-bold leading-relaxed">{study.outcome}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-yellow-500 transition-colors group">
                                    View Detailed Blueprint
                                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack / Expertise */}
            <section className="py-32 border-y border-slate-100 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-tight">TECHNICAL <span className="italic font-serif text-yellow-500">PRECISION.</span></h2>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">We master the tools that build the future</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((tech, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-yellow-500/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                                <div className="text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">{tech.icon}</div>
                                <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">{tech.name}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI CTA Section */}
            <section className="py-32 relative overflow-hidden backdrop-blur-3xl">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
                            START YOUR <br />
                            <span className="italic font-serif text-yellow-500">LEGACY.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
                            Every global brand started with a single project. Let's build something that matters together.
                            Our technical leads are ready for your briefing.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <Link href="/contact" className="group px-12 py-8 bg-slate-900 text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-2xl">
                                Launch Your Project
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </Link>
                            <a href="tel:17077084062" className="group px-12 py-8 bg-transparent text-slate-900 border border-slate-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-slate-50 transition-all duration-500 flex items-center gap-6">
                                Technical Briefing 📞
                            </a>
                        </div>
                    </div>
                </div>
                {/* Background Text Blur Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[20vw] font-black text-slate-900/[0.03] uppercase select-none pointer-events-none whitespace-nowrap">
                    SMARTSOFT SOLUTIONS
                </div>
            </section>
        </div>
    );
}
