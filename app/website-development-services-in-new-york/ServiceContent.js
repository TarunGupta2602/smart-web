"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            {/* Cinematic NYC Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Website Development New York City"
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/80 to-white"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 md:mb-10 shadow-2xl">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black text-white/80">Premium Web Engineering in NYC</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter uppercase text-white">
                            Website Development <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-500 italic font-serif lowercase pr-2 md:pr-4">Services</span>
                            in <span className="text-yellow-500">New York</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium mb-10 md:mb-12">
                            Empowering New York's startups and global enterprises with high-performance digital architectures that dominate search results and convert visitors into loyal customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                            <Link href="/contact" className="px-10 md:px-12 py-5 md:py-6 bg-yellow-500 text-black font-black rounded-2xl text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl shadow-yellow-500/20">
                                Start Your Project
                            </Link>
                            <a href="tel:17077084062" className="px-10 md:px-12 py-5 md:py-6 bg-white/10 text-white font-black rounded-2xl text-xs md:text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md">
                                Consult An Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - The NYC Difference */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-6 md:mb-8">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-700">The SmartSoft Edge</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 md:mb-10 uppercase tracking-tighter leading-[1] md:leading-[0.8]">
                                Why NYC Businesses <br />
                                <span className="text-yellow-500">Trust Us</span>
                            </h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-10 md:mb-12">
                                In the fast-paced New York economy, your digital presence is your strongest asset. We don't just build websites; we engineer revenue-generating platforms optimized for the unique demands of the NYC market.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                {[
                                    { t: "Custom Precision", d: "Architecture tailored to your specific industry needs." },
                                    { t: "SEO Dominance", d: "Inherent structure designed to rank on page one." },
                                    { t: "Mobile-First", d: "Flawless experiences across all modern devices." },
                                    { t: "Rapid Delivery", d: "Agile cycles to get you to market faster." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] md:text-xs">✓</div>
                                        <div>
                                            <h4 className="font-black text-slate-900 uppercase text-[10px] md:text-xs tracking-widest mb-1">{benefit.t}</h4>
                                            <p className="text-xs md:text-sm text-slate-500">{benefit.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group mt-12 lg:mt-0">
                            <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
                                <Image src="/neww.png" alt="NYC Web Development" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 leading-tight">
                                    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-white/20">
                                        <p className="text-yellow-600 font-black uppercase text-[8px] md:text-[10px] tracking-widest mb-2">Performance Metric</p>
                                        <h3 className="text-slate-900 text-lg md:text-xl font-black tracking-tight uppercase">99.9% Architecture Reliability</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Grid */}
            <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4 md:mb-6">Our Web <span className="text-yellow-500 italic font-serif lowercase">expertise</span></h2>
                        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">Comprehensive development solutions for every stage of your digital journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:border-yellow-400/50 transition-all duration-700 hover:-translate-y-4 shadow-xl hover:shadow-yellow-500/10">
                                <div className="text-4xl md:text-5xl mb-6 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">{service.icon}</div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structured Process Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-[1] md:leading-[0.8] mb-6 md:mb-10 text-center lg:text-left">
                                Our <br className="hidden lg:block" />
                                <span className="text-yellow-500">Process</span>
                            </h2>
                            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed text-center lg:text-left">
                                We follow a structured, developer-driven methodology to ensure every line of code adds value to your business.
                            </p>
                        </div>
                        <div className="lg:w-2/3 space-y-8 md:space-y-12">
                            {processes.map((step, i) => (
                                <div key={i} className="group flex gap-6 md:gap-8 items-start pb-8 md:pb-12 border-b border-slate-100 last:border-0 hover:pl-2 md:hover:pl-4 transition-all duration-500">
                                    <span className="text-3xl md:text-5xl font-black text-slate-100 group-hover:text-yellow-500 transition-colors">0{i + 1}</span>
                                    <div>
                                        <h4 className="text-base md:text-xl font-black text-slate-900 uppercase mb-2 md:mb-3 tracking-tight">{step.name}</h4>
                                        <p className="text-sm md:text-base text-slate-500 font-medium italic">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Atomic CTA Section */}
            <section className="py-24 md:py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-500/10 rounded-full blur-[150px] -mr-[25vw] -mt-[25vw]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-9xl font-black mb-8 md:mb-10 tracking-tighter uppercase leading-[1] md:leading-[0.8] text-white">
                        Ignite Your <br className="hidden sm:block" />
                        <span className="text-yellow-500">NYC Growth</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto font-medium">
                        Join the elite New York businesses Scaling with our digital expertise. Your new empire starts with a single click.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
                        <Link href="/contact" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 text-xs md:text-sm shadow-2xl shadow-yellow-500/40">
                            Book A Consultation
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-transparent text-white border border-white/20 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full hover:bg-white/10 transition-all text-xs md:text-sm backdrop-blur-md">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
