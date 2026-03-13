"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            {/* Cinematic LA Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us-banner.jpg"
                        alt="App Development Los Angeles"
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/80 to-white"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/80">Elite App Engineering in LA</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase text-white">
                            Mobile App <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-500 italic font-serif lowercase pr-4">Services</span>
                            in <span className="text-yellow-500">Los Angeles</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
                            Transforming visionary ideas into market-leading mobile applications. From Silicon Beach startups to Hollywood enterprises, we build the future of mobile.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="px-12 py-6 bg-yellow-500 text-black font-black rounded-2xl text-sm uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl shadow-yellow-500/20">
                                Launch Your App
                            </Link>
                            <a href="tel:17077084062" className="px-12 py-6 bg-white/10 text-white font-black rounded-2xl text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md">
                                Talk To A Specialist
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The LA Advantage */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-8">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-700">Premier LA Engineering</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-[0.8]">
                                Scalable Apps for <br />
                                <span className="text-yellow-500">LA Startups</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
                                In the heart of Southern California's tech ecosystem, high-quality mobile products are the differentiator. We deliver secure, scalable applications designed to thrive in Los Angeles's ultra-competitive digital landscape.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { t: "Native Excellence", d: "Pure performance through iOS and Android native stacks." },
                                    { t: "Viral Interface", d: "Engaging UI designed for California's trend-setting users." },
                                    { t: "Cloud Scalability", d: "Inherent infrastructure to handle sudden user surges." },
                                    { t: "Post-Launch Ops", d: "Continuous maintenance to keep your app dominant." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">✓</div>
                                        <div>
                                            <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">{benefit.t}</h4>
                                            <p className="text-sm text-slate-500">{benefit.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
                                <Image src="/neww.png" alt="LA App Development" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10">
                                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
                                        <p className="text-yellow-600 font-black uppercase text-[10px] tracking-widest mb-2">Technical Excellence</p>
                                        <h3 className="text-slate-900 text-xl font-black tracking-tight uppercase">USA-Based Core Engineering</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Expertise Grid */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">Our Mobile <span className="text-yellow-500 italic font-serif lowercase">expertise</span></h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">From concept to App Store glory, we provide end-to-end mobile development.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-100 hover:border-yellow-400/50 transition-all duration-700 hover:-translate-y-4 shadow-xl hover:shadow-yellow-500/10">
                                <div className="text-5xl mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">{service.icon}</div>
                                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Development Lifecycle */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24">
                        <div className="lg:w-1/3">
                            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-[0.8] mb-10">
                                Engineering <br />
                                <span className="text-yellow-500">Lifecycle</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                Our lifecycle is built for speed without compromising on the industrial-grade quality expected by Los Angeles tech leaders.
                            </p>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {processes.map((step, i) => (
                                <div key={i} className="group flex gap-8 items-start pb-12 border-b border-slate-100 last:border-0 hover:pl-4 transition-all duration-500">
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-yellow-500 transition-colors">0{i + 1}</span>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tight">{step.name}</h4>
                                        <p className="text-slate-500 font-medium italic">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LA App Scale CTA */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-500/10 rounded-full blur-[150px] -mr-[25vw] -mt-[25vw]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter uppercase leading-[0.8] text-white">
                        Scale Your <br />
                        <span className="text-yellow-500">LA App</span>
                    </h2>
                    <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium">
                        Join the high-growth LA companies dominating the mobile charts. Your global mobile presence starts with expert engineering.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <Link href="/contact" className="px-16 py-8 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 text-sm shadow-2xl shadow-yellow-500/40">
                            Get App Consultation
                        </Link>
                        <Link href="/projects" className="px-16 py-8 bg-transparent text-white border border-white/20 font-black uppercase tracking-[0.3em] rounded-full hover:bg-white/10 transition-all text-sm backdrop-blur-md">
                            Portfolio Showcase
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
