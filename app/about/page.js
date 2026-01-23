"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const expertiseItems = [
        {
            name: "Digital Engineering",
            description: "High-performance web architecture, mobile ecosystem development, and custom internal software logic.",
            icon: "🌐",
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Full-Scale Marketing",
            description: "Internet marketing, brand positioning, and product growth strategies for global markets.",
            icon: "🚀",
            color: "bg-blue-50 text-blue-600"
        },
        {
            name: "Cloud Infrastructure",
            description: "Redundant hosting nodes, domain management, and mission-critical server stability at scale.",
            icon: "☁️",
            color: "bg-purple-50 text-purple-600"
        }
    ];

    const team = [
        { img: "/images/about-img2.jpg", name: "Executive Lead" },
        { img: "/images/about-img3.jpg", name: "Technical Architect" },
        { img: "/images/about-img4.jpg", name: "Security Specialist" },
        { img: "/images/about-img5.jpg", name: "Lead UI/UX" },
        { img: "/images/about-img6.jpg", name: "Project Manager" },
        { img: "/images/about-img7.jpg", name: "Cloud Engineer" },
        { img: "/images/about-img8.jpg", name: "DevOps Lead" },
        { img: "/images/about-img9.jpg", name: "Creative Director" }
    ];

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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <div className="max-w-6xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-500">Global Digital Solutions Provider</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1] lg:leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white">
                            GET TO KNOW ABOUT US & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-2">OUR THINKING.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto lg:mx-0">
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
                                    src="/images/about-img.jpg"
                                    alt="Expertise In Action"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-8 rounded-3xl shadow-xl">
                                        <p className="text-orange-600 font-black uppercase text-xs tracking-widest mb-4">Core Capability</p>
                                        <p className="text-gray-900 text-lg font-bold leading-tight uppercase">Removing technological bottlenecks for global scale.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="inline-block px-4 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-md">The One-Stop Shop Solution</div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase text-gray-900">
                                WE ARE A DEVELOPMENT <br />
                                <span className="italic font-serif text-orange-600">ENTERPRISE.</span>
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    We Have Expertise In Website Development & Designing, Website Making Company, Software Development,
                                    Graphics Designing, Android Apps Development, Digital Marketing, Internet Marketing, Brand Marketing,
                                    Product Marketing Etc. We Make Websites At Lowest Possible Price. We Also Provide Domain And Hosting
                                    Servers At Lowest Cost.
                                </p>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Our unique capability to serve as the one-stop shop solutions provider for its customers removes
                                    the hassle of managing multiple vendors, logistics, and technological bottlenecks. It gives our
                                    customers the peace of mind that they have chosen a reliable, long-term partner capable of
                                    solving their development needs as their businesses grow.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <span className="block text-3xl mb-2">💎</span>
                                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Lowest Price Guarantee</h4>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                    <span className="block text-3xl mb-2">🔒</span>
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
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black text-3xl mb-10 shadow-lg">🌍</div>
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-gray-900">Global Connectivity</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Our mission is to create an environment that helps companies to capitalize on the diversity of its people
                                and the inclusion of ideas and solutions to meet the needs of its increasing global and diverse customer base.
                            </p>
                        </div>
                        <div className="p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-10 shadow-lg">🔥</div>
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
                                    <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-black">QA</div>
                                        <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Premier Quality Team</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 font-black">RT</div>
                                        <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Repeat Trust Model</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-gray-50 p-4 shadow-xl">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/images/about-img7.jpg"
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

            {/* Elite Team Showcase - LIGHT THEME */}
            <section className="py-32 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-tight text-gray-900">THE LEADERSHIP <span className="italic font-serif text-orange-600 uppercase">GRID.</span></h2>
                        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm">Dedicated to continuous delivery and trust</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h4 className="text-lg font-black text-white">{member.name}</h4>
                                    <div className="h-0.5 w-10 bg-yellow-500 mt-2"></div>
                                </div>
                            </div>
                        ))}
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
                            <a href="tel:17867538470" className="group px-12 py-8 bg-white text-gray-900 border border-gray-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 transition-all duration-500 flex items-center gap-6 shadow-md">
                                Direct Assistance 📞
                            </a>
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
