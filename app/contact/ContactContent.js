"use client";

import Image from "next/image";

export default function ContactContent({ contactMethods }) {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            {/* Cinematic Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Contact SmartSoft Solutions"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-black backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-black animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-black">Available Globally 24/7</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            CONNECT WITH THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">EXPERTS.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black leading-relaxed max-w-2xl">
                            Transforming your vision into digital excellence starts with a simple conversation.
                            Our team of Senior Technical Consultants and Software Architects is ready to scale your business
                            through Enterprise-Grade Engineering and Global Marketing Strategies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Grid */}
            <section className="py-24 relative z-20 -mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="group relative bg-white border border-slate-200 p-10 rounded-[2.5rem] hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-yellow-500 mb-8 border border-slate-200 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-sm uppercase tracking-widest font-black text-slate-400 mb-2">{method.title}</h3>
                                    <p className="text-lg font-bold text-slate-900 mb-4 leading-tight">{method.description}</p>
                                    {method.subtext && <p className="text-xs text-slate-400 italic mb-6">{method.subtext}</p>}
                                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-yellow-500 group-hover:gap-4 transition-all">
                                        {method.label}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Culture Section */}
            <section className="py-32 border-y border-slate-100 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 group">
                                        <Image src="/images/about-img2.jpg" alt="Team Work" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 group">
                                        <Image src="/images/about-img3.jpg" alt="Studio" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 group">
                                        <Image src="/images/about-img4.jpg" alt="Brainstorming" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 group">
                                        <Image src="/images/about-img5.jpg" alt="Office" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating Stats */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="bg-yellow-500 text-black p-8 rounded-[2rem] shadow-[0_0_50px_rgba(234,179,8,0.3)] text-center animate-pulse">
                                    <span className="block text-4xl font-black mb-1">98%</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">Global Reach</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-slate-900">
                                WHY PARTNER WITH <br />
                                <span className="italic font-serif text-yellow-500">SMARTSOFT?</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                                We aren't just a service provider; we are your strategic partner. Our global infrastructure
                                ensures that your digital assets are built to scale, secure by design, and optimized for maximum ROI.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Rapid Prototyping", d: "From concept to MVP in Record Time." },
                                    { t: "Global Infrastructure", d: "High-performance nodes across 4 continents." },
                                    { t: "Elite Security", d: "Enterprise-grade encryption for all data." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                                            <span className="text-yellow-500 font-bold">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                                            <p className="text-sm text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Connect CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
                            READY TO <span className="italic font-serif text-yellow-500">ASCEND?</span>
                        </h2>
                        <p className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto">
                            Stop waiting for the perfect moment. Create it today by reaching out to our senior technical consultants.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <a href="tel:17867538470" className="group px-12 py-8 bg-slate-900 text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-xl">
                                <span className="text-xl">📞</span>
                                Call 1-786-753-8470
                            </a>
                            <a href="mailto:support@smartsoftsolutions.org" className="group px-12 py-8 bg-white text-slate-900 border border-slate-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-lg">
                                <span className="text-xl">✉️</span>
                                Email Us
                            </a>
                            <a href="https://wa.me/17867538470" className="group px-12 py-8 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-500 flex items-center gap-6">
                                <span className="text-xl">💬</span>
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
