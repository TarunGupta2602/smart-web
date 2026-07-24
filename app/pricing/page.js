import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Affordable Bookkeeping & Payroll Service Pricing | USA & Canada",
    description: "Compare our flat-rate bookkeeping, payroll, and business tax return pricing. Outsource your accounting starting at $49/mo. Clear pricing with zero hidden fees.",
    keywords: ["bookkeeping pricing", "accounting fees small business", "payroll processing cost", "affordabe CPA services", "tax preparation pricing", "low cost bookkeeper USA", "payroll service Canada"],
    alternates: {
        canonical: `${SITE_URL}/pricing`,
    },
    openGraph: {
        title: "Bookkeeping & Accounting Service Pricing | USA & Canada",
        description: "Compare flat-rate bookkeeping, payroll, and business tax packages starting at $49/month.",
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
        title: "Bookkeeping & Accounting Service Pricing | USA & Canada",
        description: "Compare flat-rate bookkeeping, payroll, and business tax packages starting at $49/month.",
        images: ['/og-image.jpg'],
    },
    other: {
        category: 'Pricing',
        classification: 'Financial Services',
    },
};

export default function PricingPage() {
    const pricingSchema = localBusiness({
        name: 'SmartSoft Solutions Pricing',
        description: 'Professional bookkeeping and payroll service plans starting from $49/mo.'
    });

    const plans = [
        {
            name: "Essential Bookkeeping",
            price: "49.99",
            period: "month",
            original: "99.99",
            description: "Perfect for sole proprietors, freelancers, and early-stage small businesses with low transaction volume.",
            features: [
                "Up to 50 Monthly Transactions",
                "Reconcile Bank & Credit Cards",
                "Monthly P&L & Balance Sheets",
                "Email & Chat Support",
                "QuickBooks/Xero Integration",
                "Tax-Ready Financial Records"
            ],
            accent: "border-slate-200",
            buttonStyle: "bg-slate-900 text-white hover:bg-slate-800"
        },
        {
            name: "Growth Payroll & Books",
            price: "149.99",
            period: "month",
            original: "249.99",
            isPopular: true,
            description: "Complete financial operations for growing businesses with employees, high transaction volumes, and invoicing needs.",
            features: [
                "Up to 150 Monthly Transactions",
                "Full-Service Payroll (Up to 10 Employees)",
                "Statutory Tax Withholding & Deposits",
                "Invoicing & Accounts Receivable",
                "Quarterly Financial Reviews",
                "Priority Email & Phone Support",
                "USA & Canada Compliance"
            ],
            accent: "border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.15)]",
            buttonStyle: "bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 border-none hover:shadow-lg"
        },
        {
            name: "Premium Controller / CPA",
            price: "299.99",
            period: "month",
            original: "499.99",
            description: "CPA-supervised controller services for established enterprises needing strategic advisory, cash flow forecasting, and custom reports.",
            features: [
                "Unlimited Transactions",
                "Full-Service Payroll (Unlimited Employees)",
                "CPA-Supervised Financial Accounting",
                "Monthly CFO Strategic Advisory",
                "Accounts Payable & Bill Pay Management",
                "Custom Invoicing & Financial Forecasts",
                "Tax Filing Prep & Advisory"
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
        description: 'Transparent flat-rate bookkeeping, payroll, and tax packages starting at just $49/mo.',
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

            {/* Cinematic Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                {/* Decorative CSS/Glow Art (No Image dependencies) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-black text-yellow-400">Flat-Rate Financial Packages</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase">
                            INVEST IN YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">GROWTH.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Outsource your bookkeeping, payroll, invoicing, and tax preparation without high CPA fees. Choose the flat-rate tier that matches your monthly volume.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
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
                                        Best Value Plan
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-sm font-black uppercase tracking-[.3em] text-slate-400 mb-6">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black tracking-tighter">
                                            ${plan.price}
                                        </span>
                                        <span className="text-slate-400 font-bold text-sm">/{plan.period}</span>
                                        {plan.original && (
                                            <span className="text-lg text-slate-400 line-through font-bold ml-2">${plan.original}</span>
                                        )}
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
                                    Select This Package
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Value Addition */}
            <section className="py-24 border-y border-slate-100 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-150 border border-slate-200 mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Value Proposition</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.95] tracking-tighter uppercase text-slate-900">
                                COMPLIANT <br />
                                <span className="italic font-serif text-yellow-500">FINANCES.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                                We help small businesses across the USA and Canada maintain accurate ledgers, file taxes on time, run direct deposit payroll, and generate professional reports. CPA-supervised and IRS/CRA compliant.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 font-black text-xl">100%</div>
                                    <h4 className="font-bold text-slate-950 uppercase text-xs tracking-wider">Accuracy Guarantee</h4>
                                </div>
                                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-600 mb-6 font-black text-xl">IRS/CRA</div>
                                    <h4 className="font-bold text-slate-950 uppercase text-xs tracking-wider">Full Compliance</h4>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Pure CSS/SVG Visual (No Image component with external paths file) */}
                        <div className="relative">
                            <div className="relative z-10 aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-8 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-xs uppercase text-slate-400 tracking-wider">Monthly Financial Report</p>
                                        <p className="font-serif italic text-yellow-500">Supervised by CPA</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/20 border border-green-500 text-green-400 text-[10px] font-bold rounded-full uppercase">Balanced</span>
                                </div>

                                <div className="my-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Total Monthly Revenue:</span>
                                        <span className="font-bold text-green-400">+$24,450.80</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Reconciled Expenses:</span>
                                        <span className="font-bold text-red-400">-$12,180.20</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-t border-white/5 pt-3">
                                        <span className="text-slate-200 font-bold">Net Business Profit:</span>
                                        <span className="font-black text-yellow-400 text-lg">+$12,270.60</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] text-slate-400 uppercase">Tax Reserve</p>
                                        <p className="font-black text-sm text-yellow-400">$3,680.00</p>
                                    </div>
                                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] text-slate-400 uppercase">Payroll Reserve</p>
                                        <p className="font-black text-sm text-yellow-400">$4,500.00</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Blurs */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us FAQ style */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 bg-slate-50 border border-slate-200/50 py-10 rounded-3xl max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-slate-900">FAIR & <span className="italic font-serif text-yellow-500">TRANSPARENT.</span></h2>
                        <p className="text-slate-600 font-bold uppercase tracking-wider text-xs">Everything you need to know about our pricing packages</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                        {[
                            { q: "Are there any setup fees or hidden charges?", a: "No. Our flat rates are fully transparent. All services are charged monthly or annually as quoted, with zero hidden setup costs." },
                            { q: "How do I upgrade or downgrade my plan?", a: "You can change or cancel your package at any time. Simply notify your dedicated bookkeeper before your next billing cycle." },
                            { q: "Does the pricing cover both USA and Canada taxes?", a: "Yes, our certified experts handle IRS and CRA compliance, and we adjust our tax preparation forms to match your country of registration." },
                            { q: "What software integrations are included?", a: "All plans include setup and synchronization with QuickBooks Online or Xero. If you have custom billing files, we can import them manually." }
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

            {/* Bottom CTA */}
            <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-yellow-400 uppercase tracking-widest text-xs font-black">Free Consulting & Assessment</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.95] mt-4">
                            GET A <span className="italic font-serif text-yellow-500">CUSTOM</span><br />
                            QUOTE NOW.
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                            Need a custom bookkeeping, payroll, or business tax filing combination? Speak directly to our experts for a personalized pricing structure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-wider rounded-full transition-all duration-300 text-sm shadow-xl"
                            >
                                Request Custom Plan
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <a href="tel:17077084062" className="text-white hover:text-yellow-400 font-bold tracking-wide transition-colors">
                                Call Free: 1-707-708-4062
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
