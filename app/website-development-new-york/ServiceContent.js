"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { nycData } from "@/lib/seoData";

export default function ServiceContent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "Custom Web Development",
            description: "Tailor-made digital solutions designed to align with your unique brand identity and business objectives.",
            icon: "🚀"
        },
        {
            title: "Business Solutions",
            description: "High-performance websites for NYC agencies and entrepreneurs to showcase expertise and capture leads.",
            icon: "🏢"
        },
        {
            title: "E-Commerce Engines",
            description: "Scalable online stores with seamless payment integrations and optimized checkout experiences.",
            icon: "🛍️"
        },
        {
            title: "Performance Redesign",
            description: "Modernizing legacy platforms with lightning-fast speeds, fresh UI, and improved conversion rates.",
            icon: "🔄"
        },
        {
            title: "CMS Integration",
            description: "Empowering your team with intuitive content management systems for effortless site updates.",
            icon: "⚙️"
        }
    ];

    const processes = [
        { name: "Requirement Analysis", desc: "Consultation to align on business goals, target audience, and NYC market trends." },
        { name: "Strategic Planning", desc: "Creating wireframes, UX flows, and a technical roadmap for seamless execution." },
        { name: "Agile Development", desc: "Building your platform using modern frameworks with clean, scalable code." },
        { name: "Rigorous Testing", desc: "Ensuring cross-device compatibility, security, and peak performance before launch." },
        { name: "Launch & Growth", desc: "Deploying your site and providing the infrastructure for continuous evolution." }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black font-sans">
            {/* Cinematic NYC Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-dark">
                {/* Mesh Gradient Blobs */}
                <div className="absolute top-0 -left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-orange-600/10 rounded-full blur-[150px]"></div>

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Website Development New York City"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-950"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-6xl mx-auto text-center transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-ping"></span>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-white/90">The NYC Authority in Web Engineering</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
                            Digital <br className="hidden sm:block" />
                            <span className="text-gold-gradient italic font-serif lowercase pr-4">Architects</span>
                            <br className="hidden sm:block" />
                            in <span className="text-white underline decoration-yellow-500 decoration-8 underline-offset-8">New York</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium mb-12 backdrop-blur-sm px-4">
                            We don't just build websites; we engineer revenue-generating digital ecosystems for Manhattan's elite startups and global powerhouses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="group relative px-12 py-6 bg-yellow-500 text-black font-black rounded-full text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                                <span className="relative z-10 underline decoration-2 underline-offset-4">Commission a Project</span>
                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                            </Link>
                            <a href="tel:17077084062" className="px-12 py-6 glass-card text-white font-black rounded-full text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all border-white/20">
                                Direct Consultation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Blur Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white to-transparent"></div>
            </section>

            {/* Why Choose Us - The NYC Difference */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className={isVisible ? 'opacity-100 translate-x-0 transition-all duration-1000' : 'opacity-0 -translate-x-10 transition-all'}>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 mb-8">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white">Institutional Quality</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-slate-950 mb-10 uppercase tracking-tighter leading-[0.85]">
                                Engineered for <br />
                                <span className="text-yellow-600">Performance</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
                                In the world's most competitive market, mediocrity is invisible. We deliver industrial-grade stability combined with consumer-grade aesthetics.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                {[
                                    { t: "Atomic Precision", d: "Pixel-perfect layouts following international design standards." },
                                    { t: "SEO Dominance", d: "Schema-rich architecture designed to occupy page one." },
                                    { t: "Cloud Native", d: "Scalable infrastructures built on AWS and Google Cloud nodes." },
                                    { t: "Rapid Execution", d: "NYC speed. We move from ideation to launch in 14 days." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-5 border-l-2 border-slate-100 pl-6 hover:border-yellow-500 transition-colors py-2">
                                        <div>
                                            <h4 className="font-black text-slate-950 uppercase text-sm tracking-widest mb-2">{benefit.t}</h4>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{benefit.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden border-[12px] border-slate-50 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                                <Image src="/neww.png" alt="NYC Web Development" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-linear-to-tr from-slate-950/40 to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="glass-card-light p-10 rounded-[3rem] border border-white/50">
                                        <p className="text-yellow-600 font-black uppercase text-xs tracking-widest mb-3">Core Performance</p>
                                        <h3 className="text-slate-950 text-2xl font-black tracking-tight uppercase leading-tight">99.9% Uptime Architecture</h3>
                                    </div>
                                </div>
                            </div>
                            {/* Accent Blob */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Focus - The NYC Specialization */}
            <section className="py-32 mesh-gradient-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-yellow-500/5 rounded-full blur-[200px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/80">Hyper-Local Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-9xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.85]">
                            NYC Market <br /><span className="text-gold-gradient italic font-serif lowercase">specialization</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 font-medium leading-relaxed">
                            A one-size-fits-all approach doesn't work in New York. We specialize in the high-stakes industries that define Manhattan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {nycData.industries.map((industry, i) => (
                            <div key={i} className="group relative p-10 rounded-[3rem] glass-card hover:bg-white/10 transition-all duration-700 hover:-translate-y-4">
                                <div className="text-6xl mb-10 group-hover:scale-125 transition-transform duration-700">{industry.icon}</div>
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{industry.title}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">{industry.description}</p>

                                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-transparent transition-all">
                                    →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services Grid */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter mb-8 leading-[0.85]">
                            Elite <span className="text-yellow-600 italic font-serif lowercase">competencies</span>
                        </h2>
                        <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium">From custom-coded monoliths to serverless microservices, we build for the future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, i) => (
                            <div key={i} className="group bg-white p-12 rounded-[4rem] border border-slate-100 hover:border-yellow-500/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-10 group-hover:bg-yellow-500 transition-all duration-700">{service.icon}</div>
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
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-[7rem] font-black text-slate-950 uppercase tracking-tighter mb-8 leading-[0.85]">The <span className="text-yellow-600">Dialogue</span></h2>
                            <p className="text-slate-500 text-xl font-medium italic max-w-2xl mx-auto">Everything you need to know about initiating a high-performance project in New York.</p>
                        </div>

                        <div className="space-y-6">
                            {nycData.faqs.map((faq, i) => {
                                const [isOpen, setIsOpen] = useState(false);
                                return (
                                    <div key={i} className={`rounded-[2.5rem] transition-all duration-500 ${isOpen ? 'bg-slate-900 border-transparent shadow-2xl scale-[1.02]' : 'bg-slate-50 border border-slate-100 hover:border-yellow-200'}`}>
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full px-12 py-10 text-left flex justify-between items-center gap-6"
                                        >
                                            <span className={`font-black uppercase tracking-tight text-lg md:text-xl transition-colors ${isOpen ? 'text-white' : 'text-slate-900'}`}>{faq.q}</span>
                                            <span className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${isOpen ? 'bg-yellow-500 text-black rotate-180' : 'bg-white text-slate-400'}`}>
                                                ⌄
                                            </span>
                                        </button>
                                        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                            <div className="px-12 pb-12 text-slate-400 text-lg font-medium leading-relaxed max-w-4xl">
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

            {/* Atomic CTA Section */}
            <section className="py-40 mesh-gradient-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_70%)]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-[12rem] font-black mb-12 tracking-tighter uppercase leading-[0.8] text-white">
                        Build <br className="hidden sm:block" />
                        <span className="text-gold-gradient italic font-serif lowercase">your</span> Empire
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                        Join the elite circle of NYC entrepreneurs scaling with our technical advantage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link href="/contact" className="w-full sm:w-auto px-16 py-8 bg-yellow-500 text-black font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:scale-110 active:scale-95 transition-all duration-500 text-sm shadow-[0_20px_60px_rgba(234,179,8,0.4)]">
                            Secure Consultation
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto px-16 py-8 glass-card text-white font-black uppercase tracking-[0.4em] rounded-full hover:bg-white/10 transition-all text-sm border-white/20">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
