import Link from "next/link";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Accounting & Reporting Services USA & Canada | CPA Supervised – SmartSoft Solutions",
    description: "CPA-supervised accounting and financial reporting for small businesses in the USA and Canada. Profit & loss statements, balance sheets, cash flow analysis, and financial forecasting.",
    keywords: ["accounting services USA", "CPA accounting small business", "financial reporting USA", "profit and loss statement", "balance sheet preparation", "accounting firm Canada", "small business accountant USA"],
    alternates: { canonical: `${SITE_URL}/services/accounting` },
};

export default function AccountingPage() {
    const pageSchema = webPage({ name: 'Accounting & Reporting Services', description: 'CPA-supervised accounting and financial reporting for USA & Canada businesses.', url: `${SITE_URL}/services/accounting` });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Accounting', url: `${SITE_URL}/services/accounting` }
    ], SITE_URL);

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap gap-3 mb-8">
                            <Link href="/services" className="text-emerald-300 hover:text-white text-sm font-bold transition-colors">← All Services</Link>
                            <span className="inline-block bg-emerald-400/20 text-emerald-200 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">CPA Supervised</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight tracking-tighter">
                            ACCOUNTING &<br />
                            <span className="text-yellow-400 italic font-serif lowercase">reporting.</span>
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-10 leading-relaxed">
                            CPA-supervised financial statements, profit & loss reports, balance sheets, and cash flow management. Turn your numbers into actionable business insights.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105">
                                Get Started — Free Consultation
                            </Link>
                            <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-4 rounded-full text-sm font-bold">
                                <span className="text-lg">🎓</span> CPA-Supervised Reports
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports We Provide */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">REPORTS WE <span className="text-emerald-600">PROVIDE</span></h2>
                            <p className="text-gray-600 text-lg">Professional financial statements reviewed by CPAs — delivered monthly.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "📊", title: "Profit & Loss Statement", desc: "A comprehensive income statement showing revenue, expenses, and net profit for any period. Know if your business is truly profitable." },
                                { icon: "⚖️", title: "Balance Sheet", desc: "Snapshot of your business assets, liabilities, and equity. Essential for understanding your company's financial health and net worth." },
                                { icon: "💧", title: "Cash Flow Statement", desc: "Track the actual movement of cash in and out of your business. Never be surprised by a cash shortfall again." },
                                { icon: "📋", title: "Accounts Receivable Report", desc: "Know exactly who owes you money and for how long. We help you collect faster and reduce outstanding receivables." },
                                { icon: "📉", title: "Accounts Payable Report", desc: "Stay on top of what you owe vendors and suppliers. Manage payment timing to optimize your cash flow." },
                                { icon: "🔮", title: "Financial Forecasting", desc: "12-month revenue and expense projections based on your historical data. Plan ahead with data-driven confidence." },
                            ].map((item) => (
                                <div key={item.title} className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h4 className="font-black text-gray-900 uppercase text-sm mb-3">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CPA Supervised Explanation */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">Why It Matters</div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-6">CPA-SUPERVISED <span className="text-emerald-600">ACCURACY</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Every financial report we produce is supervised and reviewed by a Certified Public Accountant (CPA). This means your numbers aren&apos;t just entered — they&apos;re verified.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Accurate financial statements are essential for bank loans, investor pitches, tax filing, and making critical business decisions. We make sure yours are always correct.
                            </p>
                            <div className="space-y-4">
                                {["GAAP-compliant financial statements", "CPA review on every report", "Audit-ready documentation", "Consistent month-over-month reporting"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { stat: "CPA", label: "Supervised Reports" },
                                { stat: "99%", label: "Accuracy Rate" },
                                { stat: "5 Days", label: "Monthly Delivery" },
                                { stat: "100%", label: "Audit Ready" },
                            ].map((item) => (
                                <div key={item.stat} className="p-8 bg-white rounded-2xl border border-emerald-100 shadow-md text-center hover:shadow-xl transition-shadow">
                                    <p className="text-4xl font-black text-emerald-600 mb-2">{item.stat}</p>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">UNDERSTAND YOUR <span className="text-yellow-400">NUMBERS</span></h2>
                    <p className="text-emerald-200 text-lg mb-10 max-w-2xl mx-auto">Get CPA-supervised financial reports delivered monthly. Book your free consultation today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 text-sm">
                            Book Free Consultation
                        </Link>
                        <a href="tel:17077084062" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-black uppercase tracking-wider transition-all text-sm">
                            📞 Call: 1-707-708-4062
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
