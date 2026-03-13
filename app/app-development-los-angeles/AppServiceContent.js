"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { laData } from "@/lib/seoData";

export default function AppServiceContent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "iOS App Development",
            description: "Premium, high-performance applications optimized for Apple's ecosystem, focused on fluid UX and native efficiency.",
            icon: "🍎"
        },
        {
            title: "Android Solutions",
            description: "Scalable and robust Android applications designed for consistent performance across a vast device landscape.",
            icon: "🤖"
        },
        {
            title: "Custom Mobile Engineering",
            description: "Strategic mobile architectures built from the ground up to solve complex business challenges in the LA market.",
            icon: "⚡"
        },
        {
            title: "Enterprise App Systems",
            description: "Secure, high-scale mobile platforms designed to optimize internal operations and boost workforce productivity.",
            icon: "🛡️"
        },
        {
            title: "UI/UX App Design",
            description: "Visual storytelling through interactive interfaces that prioritize user engagement and brand prestige.",
            icon: "✨"
        }
    ];

    const processes = [
        { name: "Strategic Consultation", desc: "Mapping your app vision to Los Angeles market electronics and user expectations." },
        { name: "Prototyping & UX", desc: "Creating interactive wireframes and high-fidelity designs for early validation." },
        { name: "Native Development", desc: "Building with Swift, Kotlin, or React Native for peak performance and scalability." },
        { name: "Quality Engineering", desc: "Rigorous automated and manual testing to ensure a bug-free, premium experience." },
        { name: "Deployment & Support", desc: "Launching to App Store/Play Store and providing the support for continuous updates." }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black font-sans">
            {/* Cinematic LA Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-dark">
                {/* Neon Accents */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-600/20 rounded-full blur-[150px]"></div>
                <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-yellow-500/10 rounded-full blur-[120px]"></div>

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us-banner.jpg"
                        alt="App Development Los Angeles"
                        fill
                        className="object-cover opacity-30 mix-blend-screen"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/60 to-slate-950"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-6xl mx-auto text-center transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card mb-10">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-white/90">Elite Mobile Engineering in Silicon Beach</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-[11rem] font-black mb-10 leading-[0.8] tracking-tighter uppercase text-white drop-shadow-2xl">
                            The App <br className="hidden sm:block" />
                            <span className="text-gold-gradient italic font-serif lowercase pr-4">Authority</span>
                            <br className="hidden sm:block" />
                            in <span className="text-yellow-500 underline decoration-white decoration-8 underline-offset-[16px]">LA</span>
                        </h1>

                        <p className="text-xl md:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium mb-16 backdrop-blur-sm px-4">
                            Engineering peak-performance iOS and Android applications for Hollywood enterprises and high-growth Silicon Beach startups.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link href="/contact" className="group relative px-16 py-8 bg-white text-black font-black rounded-full text-sm uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                                <span className="relative z-10">Launch Innovation</span>
                                <div className="absolute inset-0 bg-yellow-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                            </Link>
                            <a href="tel:17077084062" className="px-16 py-8 glass-card text-white font-black rounded-full text-sm uppercase tracking-[0.3em] hover:bg-white/10 transition-all border-white/20">
                                Connect With Engineers
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white to-transparent"></div>
            </section>

            {/* The LA Advantage */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className={isVisible ? 'opacity-100 translate-x-0 transition-all duration-1000' : 'opacity-0 -translate-x-10 transition-all'}>
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-10">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-yellow-700">Strategic Engineering Advantage</span>
                            </div>
                            <h2 className="text-5xl md:text-[6rem] font-black text-slate-950 mb-12 uppercase tracking-tighter leading-[0.85]">
                                Scalable Apps for <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-yellow-500">LA Leaders</span>
                            </h2>
                            <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-12 italic">
                                From Santa Monica to Silver Lake, we build mobile products that capture attention and dominate the App Store.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {[
                                    { t: "Swift/Kotlin Native", d: "Zero abstraction. Pure performance architecture." },
                                    { t: "Kinetic UI/UX", d: "Micro-interactions and gestures designed for delight." },
                                    { t: "High-Traffic Ready", d: "Ready to scale from 10 to 10M users instantly." },
                                    { t: "IP Protection", d: "Enterprise-grade security and full code ownership." }
                                ].map((benefit, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="w-12 h-0.5 bg-slate-200 mb-6 group-hover:w-24 group-hover:bg-yellow-500 transition-all duration-500"></div>
                                        <h4 className="font-black text-slate-950 uppercase text-sm tracking-widest mb-3">{benefit.t}</h4>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border-[16px] border-slate-50 shadow-[0_50px_120px_rgba(0,0,0,0.12)]">
                                <Image src="/neww.png" alt="LA App Development" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-linear-to-tr from-orange-600/30 to-transparent mix-blend-overlay"></div>
                                <div className="absolute bottom-16 left-12 right-12 text-center">
                                    <div className="glass-card-light p-10 rounded-[3.5rem] border border-white/60">
                                        <div className="flex justify-center gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-500 text-sm">★</span>)}
                                        </div>
                                        <h3 className="text-slate-950 text-2xl font-black tracking-tight uppercase leading-tight px-4">5-Star App Engineering</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl animate-bounce duration-[10000ms]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LA Industry Specialization */}
            <section className="py-40 mesh-gradient-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-32">
                        <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full glass-card mb-10 border-white/20">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/90">Vertical Integration Specialists</span>
                        </div>
                        <h2 className="text-5xl md:text-[10rem] font-black text-white mb-10 uppercase tracking-tighter leading-[0.8]">
                            The SoCal <br /><span className="text-gold-gradient italic font-serif lowercase">spectrum</span>
                        </h2>
                        <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed italic">
                            We design for the cultural hubs and tech powerhouses that make Los Angeles unique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {laData.industries.map((industry, i) => (
                            <div key={i} className="group relative p-12 rounded-[4rem] glass-card border-white/10 hover:border-yellow-500/50 transition-all duration-700 hover:-translate-y-6 hover:shadow-[0_40px_80px_rgba(234,179,8,0.1)]">
                                <div className="text-7xl mb-12 group-hover:scale-125 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{industry.icon}</div>
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-tight">{industry.title}</h3>
                                <p className="text-base text-slate-400 font-medium leading-relaxed group-hover:text-slate-100 transition-colors">{industry.description}</p>

                                <div className="mt-12 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-transparent group-hover:scale-110 transition-all duration-500">
                                    →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile Expertise Grid */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter mb-8 leading-[0.85]">
                            Mobile <span className="text-yellow-600 italic font-serif lowercase">competencies</span>
                        </h2>
                        <p className="text-slate-600 text-2xl max-w-3xl mx-auto font-medium font-serif italic opacity-70">End-to-end engineering from concept to global launch.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, i) => (
                            <div key={i} className="group bg-white p-16 rounded-[5rem] border border-slate-100 hover:border-orange-600/20 transition-all duration-700 hover:shadow-[0_60px_120px_rgba(0,0,0,0.08)]">
                                <div className="text-6xl mb-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">{service.icon}</div>
                                <h3 className="text-2xl font-black text-slate-950 mb-6 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-base text-slate-500 leading-relaxed font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic FAQ Section */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-[8rem] font-black text-slate-900 uppercase tracking-tighter mb-10 leading-[0.8]">The <br className="md:hidden" /><span className="text-yellow-500">Briefing</span></h2>
                            <p className="text-slate-500 text-2xl font-medium italic opacity-80">Industrial insights for the next generation of LA innovators.</p>
                        </div>

                        <div className="space-y-8">
                            {laData.faqs.map((faq, i) => {
                                const [isOpen, setIsOpen] = useState(false);
                                return (
                                    <div key={i} className={`rounded-[3rem] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'bg-slate-950 border-transparent shadow-[0_40px_80px_rgba(0,0,0,0.2)] scale-[1.02]' : 'bg-slate-50 border border-slate-100 hover:bg-white hover:border-yellow-300'}`}>
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full px-12 py-12 text-left flex justify-between items-center gap-8"
                                        >
                                            <span className={`font-black uppercase tracking-tight text-xl md:text-2xl transition-colors ${isOpen ? 'text-white' : 'text-slate-900'}`}>{faq.q}</span>
                                            <span className={`flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 ${isOpen ? 'bg-yellow-500 text-black rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                                                ⌄
                                            </span>
                                        </button>
                                        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                            <div className="px-12 pb-14 text-slate-400 text-xl font-medium leading-relaxed max-w-3xl">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Atomic LA Scale CTA */}
            <section className="py-40 mesh-gradient-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-orange-600/10 rounded-full blur-[200px]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-[14rem] font-black mb-16 tracking-tighter uppercase leading-[0.75] text-white">
                        Own <br className="hidden sm:block" />
                        <span className="text-gold-gradient italic font-serif lowercase">the</span> Mobile Future
                    </h2>
                    <p className="text-2xl md:text-4xl text-slate-400 mb-20 max-w-4xl mx-auto font-medium leading-relaxed italic border-x border-white/10 px-10 py-6">
                        Join Los Angeles's architectural elite. We build the high-stakes digital products that define Silicon Beach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                        <Link href="/contact" className="w-full sm:w-auto px-20 py-10 bg-white text-black font-black uppercase tracking-[0.4em] rounded-full hover:bg-yellow-500 hover:scale-110 active:scale-95 transition-all duration-500 text-sm shadow-[0_30px_90px_rgba(255,255,255,0.15)]">
                            Secure Market Dominance
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto px-20 py-10 glass-card text-white font-black uppercase tracking-[0.4em] rounded-full hover:bg-white/10 transition-all text-sm border-white/20">
                            The Artifacts
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
