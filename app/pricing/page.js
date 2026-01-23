"use client";

import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
    const plans = [
        {
            name: "Essential Lite",
            price: "199.99",
            original: "399.99",
            description: "Perfect for personal brands and early-stage startups seeking a professional landing hub.",
            features: [
                "Single Page Premium Design",
                "Fully Responsive Layout",
                "Basic SEO Setup",
                "48-Hour Rapid Delivery",
                "Domain Integration",
                "Standard Hosting (1 Year)"
            ],
            accent: "border-gray-800",
            buttonStyle: "bg-white/5 hover:bg-white/10 text-white border-white/10"
        },
        {
            name: "Enterprise Scaler",
            price: "499.99",
            original: "999.99",
            isPopular: true,
            description: "Comprehensive multi-page solutions for established businesses aiming for growth and conversion.",
            features: [
                "Up to 5 Premium Pages",
                "Advanced SEO Architecture",
                "Contact/Lead Management",
                "Business Email Setup",
                "Content Management System",
                "High-Speed SSD Hosting",
                "Priority Support Access"
            ],
            accent: "border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.2)]",
            buttonStyle: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-none"
        },
        {
            name: "Global Commerce",
            price: "Custom",
            description: "High-octane e-commerce engines with infinite scalability for global retailers.",
            features: [
                "Full E-Commerce Suite",
                "Payment Gateway Integration",
                "Product Inventory System",
                "Admin Operations Panel",
                "Automated Email Marketing",
                "Ultra-Secure Hosting",
                "Dedicated Account Manager"
            ],
            accent: "border-gray-800",
            buttonStyle: "bg-white/5 hover:bg-white/10 text-white border-white/10"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-yellow-500 selection:text-black">
            {/* Cinematic Hero */}
            <section className="relative h-[65vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg" // Using the established cinematic banner
                        alt="Pricing Strategy"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md mb-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-black text-yellow-500">Transparent & Scalable Models</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            INVEST IN YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">GROWTH.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            High-end digital solutions don't have to break the bank.
                            Explore our meticulously crafted tiers designed for maximum business ROI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-24 relative z-20 -mt-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col p-10 rounded-[3rem] bg-[#121214] border-2 transition-all duration-500 ${plan.accent}`}
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                                        Most Popular Selection
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-sm font-black uppercase tracking-[.3em] text-gray-500 mb-6">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black tracking-tighter">
                                            {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                                        </span>
                                        {plan.original && (
                                            <span className="text-lg text-gray-600 line-through font-bold">${plan.original}</span>
                                        )}
                                    </div>
                                    <p className="mt-6 text-gray-400 leading-relaxed text-sm font-medium">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all">
                                                <svg className="w-3 h-3 text-yellow-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 text-center ${plan.buttonStyle}`}
                                >
                                    Select This Infrastructure
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Value Addition */}
            <section className="py-32 border-y border-white/5 bg-white/2 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Value Proposition</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                                UNBEATABLE <br />
                                <span className="italic font-serif text-yellow-500">INFRASTRUCTURE.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                Our pricing isn't just about code; it's about the elite infrastructure we provide message.
                                We include enterprise-grade hosting and premium domain services to ensure your success from day one.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 mb-6 font-black">99.9%</div>
                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest">Uptime Guarantee</h4>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 font-black">24/7</div>
                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest">Elite Support</h4>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                                <Image
                                    src="/images/p7.jpg"
                                    alt="Elite Server Tech"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Blurs */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] -z-10"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us FAQ style */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase">FAIR & <span className="italic font-serif text-yellow-500">FLEXIBLE.</span></h2>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Everything you need to know about our investment models</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {[
                            { q: "Are there any hidden maintenance fees?", a: "Absolutely not. Transparency is our core value. Any recurring costs like hosting or domain renewals are clearly outlined upfront." },
                            { q: "Can I upgrade my plan later?", a: "Yes. Our architecture is designed for infinite scalability. You can upgrade from Essential to Enterprise whenever your business needs evolve." },
                            { q: "Do you offer custom integrations?", a: "Absolutely. Our 'Global Commerce' tier handles everything from proprietary API connections to custom database architectures." },
                            { q: "What's the typical turnaround time?", a: "Our Essential plans can go live in as little as 48-72 hours. Enterprise solutions typically scale between 2-4 weeks depending on complexity." }
                        ].map((faq, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white/2 border border-white/5 hover:border-white/10 transition-all">
                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                    {faq.q}
                                </h4>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 relative overflow-hidden bg-white/2 border-t border-white/5">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
                            GET A <span className="italic font-serif text-yellow-500">CUSTOM</span><br />
                            QUOTE NOW.
                        </h2>
                        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                            Got a unique project that doesn't fit a tier? Our analysts are ready to create a personalized blueprint for your success.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-6 px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full hover:bg-yellow-500 transition-all duration-500 text-sm shadow-[0_0_60px_rgba(255,255,255,0.05)]"
                        >
                            Request Custom Analysis
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
