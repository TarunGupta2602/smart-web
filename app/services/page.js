import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "CPA Supervised Bookkeeping, Payroll & Tax Services | USA & Canada",
    description: "Explore our smart financial services for small businesses and freelancers. We offer bookkeeping, full-service payroll, invoicing, and tax preparation.",
    keywords: ["bookkeeping services", "business accounting firm", "payroll processing USA Canada", "corporate tax preparation", "invoicing solutions", "CPA supervised accounting"],
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: "Financial Services Hub | SmartSoft Solutions",
        description: "Scale your business with our absolute compliance solutions: bookkeeping, payroll, and corporate tax prep.",
        url: `${SITE_URL}/services`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Financial Services Hub | SmartSoft Solutions',
        description: 'Scale your business with our absolute compliance solutions: bookkeeping, payroll, and corporate tax prep.',
        images: ['/logo.png']
    }
};

export default function ServicesPage() {
    const services = [
        {
            slug: "bookkeeping",
            title: "Bookkeeping & Reconciliation",
            tagline: "Monthly ledger maintenance & transaction mapping",
            description: "Keep your books clean and up-to-date every month. We track every transaction, reconcile bank/credit cards, and deliver accurate P&L and Balance Sheet statements certified under CPA supervision. Built to integrate with QuickBooks and Xero.",
            color: "border-yellow-200 hover:border-yellow-400 group-hover:bg-yellow-50",
            icon: (
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            slug: "accounting",
            title: "CPA Supervised Accounting",
            tagline: "High-end corporate reporting & compliance",
            description: "Get comprehensive financial statements, strategic audits, end-of-year accounting closures, and executive-level balance sheet analysis. All monthly records are carefully verified by senior CPAs.",
            color: "border-orange-200 hover:border-orange-400 group-hover:bg-orange-50",
            icon: (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            slug: "invoicing",
            title: "Invoicing & Accounts Receivable",
            tagline: "Automated billing systems & cash flow velocity",
            description: "Create, schedule, and send professional invoices automatically. We manage client billing schedules, execute friendly follow-ups for outstanding accounts receivable, and optimize your cash flow collection rates.",
            color: "border-slate-205 hover:border-slate-400 group-hover:bg-slate-50",
            icon: (
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            slug: "payroll",
            title: "USA & Canada Payroll Services",
            tagline: "Statutory withholdings, T4/W-2s & direct bank deposit",
            description: "Remove payroll headache. We compute salaries, withhold appropriate federal/state/provincial taxes, submit state deposits automatically, and issue year-end W-2s & T4s for your employees in USA and Canada.",
            color: "border-yellow-250 hover:border-yellow-450 group-hover:bg-yellow-50",
            icon: (
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            slug: "tax-preparation",
            title: "IRS Authorized Tax Prep",
            tagline: "Corporate & individual returns & tax deductions maximization",
            description: "Authorized IRS e-File provider and fully compliant with Canada Revenue Agency (CRA). We compile, balance, and file your annual corporation, partnership, or schedule-C tax returns with extreme attention to deductions.",
            color: "border-orange-255 hover:border-orange-450 group-hover:bg-orange-50",
            icon: (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2-2 4 4m0-7v3m0 0v3m0-3h3m-3 0H9m-6 9V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            slug: "financial-consulting",
            title: "Expert Financial Consulting",
            tagline: "Cash flow forecasting & modular CFO advisory",
            description: "Understand your financial velocity. Get customized budget models, cash burn predictions, capital structuring advice, and monthly CFO consultations to help your enterprise make key business decisions.",
            color: "border-slate-200 hover:border-slate-405 group-hover:bg-slate-50",
            icon: (
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    const serviceListSchema = localBusiness({
        name: 'SmartSoft Solutions Financial Services',
        description: 'Monthly bookkeeping, payroll, tax prep, invoicing, and CPA advisory solutions.'
    });

    const webPageSchema = webPage({
        name: 'SmartSoft Solutions Services Group',
        description: 'Complete suite of bookkeeping, accounting, invoicing, payroll, and tax packages.',
        url: `${SITE_URL}/services`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([serviceListSchema, webPageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-6 pt-4 pb-2" />

            {/* Dark Cinematic Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-black text-yellow-400">Total Financial Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase whitespace-pre-line text-white">
                            Smart Financial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">Solutions.</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Stop worrying about bookkeeping reconciliation or IRS/CRA files. Our CPA-supervised specialists manage your daily financial operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Cards Grid */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                href={`/services/${service.slug}`}
                                key={index}
                                className={`group p-8 rounded-[2.5rem] bg-white border-2 transition-all duration-350 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between ${service.color}`}
                            >
                                <div>
                                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-100 group-hover:scale-105 transition-all">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400 mb-2 group-hover:text-yellow-600 transition-colors uppercase">{service.slug}</h3>
                                    <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-4 uppercase">{service.title}</h4>
                                    <p className="text-[10px] uppercase font-bold text-slate-550 tracking-wider mb-6">{service.tagline}</p>
                                    <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                                        {service.description}
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-650 group-hover:text-amber-600 transition-colors pt-4 border-t border-slate-100/50 mt-auto">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-24 bg-slate-950 text-white relative">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter uppercase whitespace-pre-line">
                            Need a Custom <br />
                            <span className="font-serif italic text-yellow-500">Service Plan?</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                            Connect with us directly for a free bookkeeping diagnostic review, and let us design a personalized package for your company.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase text-xs tracking-widest rounded-full transition-all duration-300 shadow-xl"
                        >
                            Request Free Consultation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
