"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    const caseStudies = [
        {
            title: "Global Supply Chain Optimizer",
            category: "Enterprise Software",
            image: "/images/po4.png",
            challenge: "Simplifying complex logistics across 12 countries with real-time tracking.",
            outcome: "35% increase in operational efficiency and 20% reduction in fuel costs.",
            tags: ["React Native", "Node.js", "AWS Cloud"]
        },
        {
            title: "Apex E-Commerce Ecosystem",
            category: "Digital Retail",
            image: "/images/p9.jpg",
            challenge: "Migrating a legacy retail brand to a high-speed, headless commerce architecture.",
            outcome: "150% growth in mobile conversions within the first quarter.",
            tags: ["Next.js", "Shopify API", "Tailwind"]
        },
        {
            title: "Secure FinTech Gateway",
            category: "Financial Services",
            image: "/images/p4.jpg",
            challenge: "Architecting a multi-layered encryption system for global transactions.",
            outcome: "Zero security breaches reported over 5 million processed transactions.",
            tags: ["Cybersecurity", "PostgreSQL", "Dedicated Auth"]
        }
    ];

    const techStack = [
        { name: "Frontend Mastery", description: "Crafting fluid pixels with React, Next.js, and advanced CSS animations.", icon: "🎨" },
        { name: "Backend Robustness", description: "Scalable architectures built on Node.js, Python, and Go for high loads.", icon: "⚙️" },
        { name: "Cloud Excellence", description: "Zero-downtime deployments using AWS, Azure, and Google Cloud Platform.", icon: "☁️" },
        { name: "Mobile Innovation", description: "Native and hybrid app development for iOS and Android ecosystems.", icon: "📱" }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-yellow-500 selection:text-black">
            {/* Cinematic Hero */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Strategic Projects"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Strategic Case Studies</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">
                            IMPACTFUL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">DELIVERY.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                            We don't just build websites; we engineer business solutions.
                            Explore how our strategic technical approach has transformed brands globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-gray-600 mb-4">Selected Case Studies</h2>
                    <div className="h-0.5 w-20 bg-yellow-500 mx-auto"></div>
                </div>

                <div className="container mx-auto px-6 space-y-32">
                    {caseStudies.map((study, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Project Visual */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-1/2 text-left">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500 mb-4 block">{study.category}</span>
                                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{study.title}</h3>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-white/5 border-l-2 border-white/10 p-6 rounded-r-2xl">
                                        <p className="text-gray-500 text-xs font-black uppercase mb-2 tracking-widest">The Challenge</p>
                                        <p className="text-gray-300 leading-relaxed italic">"{study.challenge}"</p>
                                    </div>
                                    <div className="bg-yellow-500/5 border-l-2 border-yellow-500 p-6 rounded-r-2xl">
                                        <p className="text-yellow-500 text-xs font-black uppercase mb-2 tracking-widest">The Outcome</p>
                                        <p className="text-white font-bold leading-relaxed">{study.outcome}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white hover:text-yellow-500 transition-colors group">
                                    View Detailed Blueprint
                                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack / Expertise */}
            <section className="py-32 border-y border-white/5 bg-white/2">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-tight">TECHNICAL <span className="italic font-serif text-yellow-500">PRECISION.</span></h2>
                        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm">We master the tools that build the future</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((tech, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-[#121214] border border-white/5 hover:border-yellow-500/50 transition-all duration-500">
                                <div className="text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">{tech.icon}</div>
                                <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{tech.name}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{tech.description}</p>
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
                        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                            Every global brand started with a single project. Let's build something that matters together.
                            Our technical leads are ready for your briefing.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <Link href="/contact" className="group px-12 py-8 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-2xl">
                                Launch Your Project
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </Link>
                            <a href="tel:17867538470" className="group px-12 py-8 bg-transparent text-white border border-white/10 font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all duration-500 flex items-center gap-6">
                                Technical Briefing 📞
                            </a>
                        </div>
                    </div>
                </div>
                {/* Background Text Blur Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[20vw] font-black text-white/[0.02] uppercase select-none pointer-events-none whitespace-nowrap">
                    SMARTSOFT SOLUTIONS
                </div>
            </section>
        </div>
    );
}
