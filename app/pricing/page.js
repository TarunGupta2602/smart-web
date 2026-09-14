import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Website & E-commerce Project Pricing",
    description: "Transparent project packages for business websites, e-commerce stores, and custom web apps. Fixed quotes before any build starts.",
    keywords: ["website pricing", "e-commerce development cost", "web app quote", "Next.js project pricing", "business website package"],
    alternates: {
        canonical: `${SITE_URL}/pricing`,
    },
    openGraph: {
        title: "Website & E-commerce Project Pricing | SmartSoft Solutions",
        description: "Business websites, online stores, and web apps — clear packages and fixed quotes.",
        url: `${SITE_URL}/pricing`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Website & E-commerce Project Pricing | SmartSoft Solutions",
        description: "Business websites, online stores, and web apps — clear packages and fixed quotes.",
        images: ['/og-image.jpg'],
    },
};

export default function PricingPage() {
    const pricingSchema = localBusiness({
        name: 'SmartSoft Solutions Pricing',
        description: 'Project pricing for business websites, e-commerce stores, and custom web apps.'
    });

    const plans = [
        {
            name: "Business Website",
            price: "Quote",
            period: "project",
            description: "A focused marketing site that explains your offer, builds trust, and captures leads — mobile-ready and SEO-friendly.",
            features: [
                "Custom Next.js / React design",
                "Service & about pages",
                "Lead forms & CTAs",
                "Mobile-first performance",
                "Basic on-page SEO",
                "Production deploy & handoff"
            ],
            accent: "border-slate-200",
            buttonStyle: "bg-slate-900 text-white hover:bg-slate-800"
        },
        {
            name: "E-commerce Store",
            price: "Quote",
            period: "project",
            original: null,
            isPopular: true,
            description: "Catalogs, collections, offers, cart, and checkout so you can sell online — built for conversion and real payments.",
            features: [
                "Product catalog & collections",
                "Cart & checkout flow",
                "Payment integration",
                "Promotions & offer messaging",
                "Mobile shopping UX",
                "Admin-friendly product updates",
                "Launch support"
            ],
            accent: "border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.15)]",
            buttonStyle: "bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 border-none hover:shadow-lg"
        },
        {
            name: "Custom Web App",
            price: "Quote",
            period: "project",
            description: "Login, dashboards, and product flows with Firebase or Supabase — software your team and customers can use every day.",
            features: [
                "Auth & user roles",
                "Dashboards & workflows",
                "Firebase or Supabase backend",
                "API integrations as needed",
                "Weekly progress demos",
                "Maintainable TypeScript codebase",
                "Deploy + documentation"
            ],
            accent: "border-slate-200",
            buttonStyle: "bg-slate-900 text-white hover:bg-slate-800"
        }
    ];

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Pricing', url: `${SITE_URL}/pricing` }
    ], SITE_URL);

    const pricingPageSchema = webPage({
        name: 'SmartSoft Solutions Pricing',
        description: 'Transparent project packages for websites, e-commerce, and web apps.',
        url: `${SITE_URL}/pricing`,
    });

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([pricingSchema, breadcrumbSchema, pricingPageSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />

            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-black text-yellow-400">Fixed Quotes · No Guesswork</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase">
                            PRICE IT. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">THEN SHIP.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Share your goals and budget range. We reply with scope, timeline, and a clear fixed quote — before any build starts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-20 -mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col p-10 rounded-[3rem] bg-white border-2 transition-all duration-500 shadow-xl ${plan.accent}`}
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                                        Most Requested
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-sm font-black uppercase tracking-[.3em] text-slate-400 mb-6">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black tracking-tighter">
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-400 font-bold text-sm">/{plan.period}</span>
                                    </div>
                                    <p className="mt-6 text-slate-600 leading-relaxed text-sm font-medium">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-yellow-500 group-hover:border-yellow-400 transition-all">
                                                <svg className="w-3 h-3 text-yellow-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`/contact?service=${encodeURIComponent(plan.name)}`}
                                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 text-center shadow-md ${plan.buttonStyle}`}
                                >
                                    Request This Package
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-y border-slate-100 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Our Process</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.95] tracking-tighter uppercase text-slate-900">
                                BRIEF TO <br />
                                <span className="italic font-serif text-yellow-500">LAUNCH.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                                You tell us the goal and budget range. We reply with scope and price. Then we design and develop with weekly progress you can see — and hand you a live deploy plus maintainable code.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { step: "01", title: "Brief & quote" },
                                    { step: "02", title: "Build with demos" },
                                    { step: "03", title: "Launch & handoff" },
                                ].map((s) => (
                                    <div key={s.step} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg">
                                        <div className="text-yellow-500 font-black text-xl mb-2">{s.step}</div>
                                        <h4 className="font-bold text-slate-950 uppercase text-xs tracking-wider">{s.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-8 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-xs uppercase text-slate-400 tracking-wider">Sample Project Scope</p>
                                        <p className="font-serif italic text-yellow-500">Business Website</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/20 border border-green-500 text-green-400 text-[10px] font-bold rounded-full uppercase">Quoted</span>
                                </div>

                                <div className="my-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Pages & sections:</span>
                                        <span className="font-bold text-white">Included</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Lead capture:</span>
                                        <span className="font-bold text-white">Forms + CTAs</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-t border-white/5 pt-3">
                                        <span className="text-slate-200 font-bold">Deliverable:</span>
                                        <span className="font-black text-yellow-400 text-lg">Live site</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] text-slate-400 uppercase">Stack</p>
                                        <p className="font-black text-sm text-yellow-400">Next.js</p>
                                    </div>
                                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] text-slate-400 uppercase">Timeline</p>
                                        <p className="font-black text-sm text-yellow-400">In quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 bg-slate-50 border border-slate-200/50 py-10 rounded-3xl max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-slate-900">FAIR & <span className="italic font-serif text-yellow-500">TRANSPARENT.</span></h2>
                        <p className="text-slate-600 font-bold uppercase tracking-wider text-xs">Everything you need to know about project pricing</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                        {[
                            { q: "Are quotes fixed?", a: "Yes. Once scope is agreed, you get a clear fixed quote before any build starts — so the project stays on budget." },
                            { q: "How do timelines work?", a: "Many marketing sites ship in a few weeks; stores and apps take longer based on features. Timeline is written into the quote." },
                            { q: "Do you work remotely?", a: "Yes. We work with clients via WhatsApp, email, and video — including USA and other time zones." },
                            { q: "What do we get at handoff?", a: "A production deploy, maintainable codebase, and next-step guidance so you can run and grow the product." }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-yellow-400 transition-all duration-300 shadow-md">
                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-yellow-400 uppercase tracking-widest text-xs font-black">Have a Project?</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.95] mt-4">
                            GET A <span className="italic font-serif text-yellow-500">CUSTOM</span><br />
                            QUOTE NOW.
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                            Send a short brief — what you need, timeline, and budget range. We reply with scope and a clear quote, usually within two business days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-wider rounded-full transition-all duration-300 text-sm shadow-xl"
                            >
                                Request a Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <a href="tel:17077084062" className="text-white hover:text-yellow-400 font-bold tracking-wide transition-colors">
                                Call: 1-707-708-4062
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
