"use client";

import Image from "next/image";

export default function ContactPage() {
    const contactMethods = [
        {
            title: "Visit Our Hub",
            description: "H-25, Basement Floor, Sector 63, Noida, 201301",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            link: "https://goo.gl/maps/xyz", // Placeholder for actual link
            label: "Get Directions"
        },
        {
            title: "Voice Assistance",
            description: "+1-786-753-8470",
            subtext: "Toll Free Support Available 24/7",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            link: "tel:17867538470",
            label: "Start Call"
        },
        {
            title: "Digital Correspondence",
            description: "smartsoft-solutions@outlook.com",
            subtext: "Expect a response within 2 business hours",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: "mailto:smartsoft-solutions@outlook.com",
            label: "Send Email"
        },
        {
            title: "Global WhatsApp",
            description: "+1-786-753-8470",
            subtext: "Chat with our development leads",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            link: "https://wa.me/17867538470",
            label: "Open WhatsApp"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-yellow-500 selection:text-black">
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Available Globally 24/7</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            CONNECT WITH THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">EXPERTS.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                            Transforming your vision into digital excellence starts with a simple conversation.
                            Our team is ready to scale your business to new heights.
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
                                className="group relative bg-[#121214] border border-white/5 p-10 rounded-[2.5rem] hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 overflow-hidden shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-500 mb-8 border border-white/10 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-sm uppercase tracking-widest font-black text-gray-500 mb-2">{method.title}</h3>
                                    <p className="text-lg font-bold text-white mb-4 leading-tight">{method.description}</p>
                                    {method.subtext && <p className="text-xs text-gray-500 italic mb-6">{method.subtext}</p>}
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
            <section className="py-32 border-y border-white/5 bg-white/2">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img2.jpg" alt="Team Work" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img3.jpg" alt="Studio" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img4.jpg" alt="Brainstorming" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
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
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                                WHY PARTNER WITH <br />
                                <span className="italic font-serif text-yellow-500">SMARTSOFT?</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
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
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <span className="text-yellow-500 font-bold">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">{item.t}</h4>
                                            <p className="text-sm text-gray-500">{item.d}</p>
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
                            <a href="tel:17867538470" className="group px-12 py-8 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                <span className="text-xl">📞</span>
                                Call 1-786-753-8470
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
