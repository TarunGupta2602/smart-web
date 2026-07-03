import Link from "next/link";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Financial Services | Bookkeeping, Accounting, Payroll & Tax – SmartSoft Solutions",
    description: "Professional bookkeeping, accounting, invoicing, payroll, tax preparation, and financial consulting for small businesses in the USA and Canada. CPA-supervised, IRS authorized, affordable monthly plans.",
    keywords: ["bookkeeping services USA", "accounting services Canada", "payroll processing USA", "tax preparation small business", "invoicing services", "financial consulting USA", "online bookkeeper USA", "CPA accounting services"],
    alternates: { canonical: `${SITE_URL}/services` },
    openGraph: {
        title: "Financial Services | SmartSoft Solutions",
        description: "Expert bookkeeping, payroll & tax services for USA & Canada small businesses.",
        url: `${SITE_URL}/services`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
    },
};

const services = [
    {
        slug: "bookkeeping",
        badge: "MONTHLY SERVICE",
        title: "Bookkeeping",
        subtitle: "Clean Books, Zero Stress",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        description: "We keep your books clean and up-to-date every month. Bank reconciliation, expense tracking, and organized financial records — so you always know where your money stands.",
        features: ["Monthly Bank Reconciliation", "Expense Categorization", "Financial Record Management", "Cash Flow Tracking", "QuickBooks / Xero Setup"],
        color: "from-blue-500 to-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        accent: "text-blue-600"
    },
    {
        slug: "accounting",
        badge: "CPA SUPERVISED",
        title: "Accounting & Reporting",
        subtitle: "Numbers That Drive Decisions",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        description: "CPA-supervised financial statements, profit & loss reports, balance sheets, and cash flow management. Turn your numbers into actionable business insights.",
        features: ["P&L Statements", "Balance Sheet Preparation", "Cash Flow Analysis", "Management Reports", "Financial Forecasting"],
        color: "from-emerald-500 to-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        accent: "text-emerald-600"
    },
    {
        slug: "invoicing",
        badge: "AUTOMATED BILLING",
        title: "Invoicing & Billing",
        subtitle: "Get Paid Faster",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        description: "Professional invoicing, automated payment reminders, and accounts receivable management. Get paid faster and stop chasing late payments.",
        features: ["Professional Invoice Creation", "Automated Payment Reminders", "Accounts Receivable Management", "Late Payment Follow-ups", "Payment Reporting"],
        color: "from-violet-500 to-violet-700",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        accent: "text-violet-600"
    },
    {
        slug: "payroll",
        badge: "USA & CANADA",
        title: "Payroll Processing",
        subtitle: "Pay Your Team On Time, Every Time",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        description: "Full-service payroll for US and Canadian businesses. Direct deposit, tax withholding, W-2 / T4 filing, and compliance — handled completely for you.",
        features: ["Direct Deposit Processing", "Federal & State/Provincial Tax Withholding", "W-2 & T4 Preparation", "IRS & CRA Compliance", "Payroll Tax Deposits"],
        color: "from-orange-500 to-orange-700",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        accent: "text-orange-600"
    },
    {
        slug: "tax-preparation",
        badge: "IRS AUTHORIZED",
        title: "Tax Preparation",
        subtitle: "Maximize Your Refund",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
            </svg>
        ),
        description: "Individual and business tax returns for the USA (Federal + State) and Canada (Federal + Provincial). IRS e-file authorized and CRA compliant. Every deduction found.",
        features: ["Federal & State Tax Returns (USA)", "Federal & Provincial Returns (Canada)", "Business & Personal Filing", "IRS e-File Authorized", "Tax Planning & Deduction Optimization"],
        color: "from-red-500 to-red-700",
        bg: "bg-red-50",
        border: "border-red-200 hover:border-red-400",
        accent: "text-red-600"
    },
    {
        slug: "financial-consulting",
        badge: "EXPERT ADVICE",
        title: "Financial Consulting",
        subtitle: "Strategy for Growth",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        description: "Strategic financial planning, budgeting, and tax-saving advice tailored for small business owners. We help you plan for growth and reduce your tax burden legally.",
        features: ["Business Budgeting & Forecasting", "Tax-Saving Strategies", "Cash Flow Optimization", "Growth Planning", "Financial Health Reviews"],
        color: "from-yellow-500 to-yellow-700",
        bg: "bg-yellow-50",
        border: "border-yellow-200 hover:border-yellow-400",
        accent: "text-yellow-600"
    }
];

export default function ServicesPage() {
    const pageSchema = webPage({
        name: 'SmartSoft Solutions Financial Services',
        description: 'Professional bookkeeping, accounting, invoicing, payroll, tax preparation, and financial consulting for USA and Canada businesses.',
        url: `${SITE_URL}/services`,
    });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` }
    ], SITE_URL);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full mb-8">Our Services</div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase leading-tight tracking-tighter">
                        FINANCIAL SERVICES<br />
                        <span className="text-yellow-400 italic font-serif lowercase">for every business.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Professional bookkeeping, accounting, invoicing, payroll, and tax services for small businesses across the USA and Canada. CPA-supervised, accurate, and affordable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                            Book Free Consultation
                        </Link>
                        <a href="tel:17077084062" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all">
                            📞 1-707-708-4062
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">
                            WHAT WE <span className="text-yellow-500">DO</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Six core financial services designed to save you time, money, and stress.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.slug} className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${service.border}`}>
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${service.bg} ${service.accent} mb-6`}>
                                    {service.badge}
                                </div>
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase mb-2">{service.title}</h3>
                                <p className={`text-sm font-bold ${service.accent} mb-4`}>{service.subtitle}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/services/${service.slug}`} className={`inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider ${service.accent} group-hover:gap-4 transition-all duration-300`}>
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">
                            WHY CHOOSE <span className="text-yellow-500">US</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            { stat: "500+", label: "Businesses Served" },
                            { stat: "99%", label: "Accuracy Rate" },
                            { stat: "10+", label: "Years Experience" },
                            { stat: "USA & CA", label: "Coverage" },
                        ].map((item) => (
                            <div key={item.stat} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                                <p className="text-4xl font-black text-yellow-500 mb-1">{item.stat}</p>
                                <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">{item.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "🏛️", title: "IRS Authorized & CRA Compliant", desc: "Fully authorized to file with the IRS and compliant with Canadian Revenue Agency (CRA) requirements." },
                            { icon: "📊", title: "QuickBooks & Xero Certified", desc: "We are QuickBooks ProAdvisors and Xero Certified — we work with the software you already use." },
                            { icon: "🔒", title: "Bank-Level Data Security", desc: "256-bit encryption and secure cloud storage. Your financial data is always private and protected." },
                        ].map((item) => (
                            <div key={item.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h4 className="text-base font-black text-gray-900 uppercase mb-3">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">
                        READY TO GET <span className="text-yellow-400 italic font-serif lowercase">started?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Book your free consultation today. Our financial experts will design a custom plan for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 text-sm">
                            Book Free Consultation
                        </Link>
                        <Link href="/pricing" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-black uppercase tracking-wider transition-all text-sm">
                            View Pricing Plans
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
