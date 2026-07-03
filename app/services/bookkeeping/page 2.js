import Link from "next/link";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Bookkeeping Services USA & Canada | Monthly Bookkeeping from $49/mo – SmartSoft Solutions",
    description: "Professional monthly bookkeeping services for small businesses in the USA and Canada. Bank reconciliation, expense tracking, QuickBooks, Xero. CPA-supervised, starting at $49/mo.",
    keywords: ["bookkeeping services USA", "online bookkeeper USA", "monthly bookkeeping service", "QuickBooks bookkeeping", "small business bookkeeping", "bookkeeping services Canada", "remote bookkeeper", "virtual bookkeeping"],
    alternates: { canonical: `${SITE_URL}/services/bookkeeping` },
};

export default function BookkeepingPage() {
    const pageSchema = webPage({ name: 'Bookkeeping Services', description: 'Professional monthly bookkeeping for USA & Canada businesses.', url: `${SITE_URL}/services/bookkeeping` });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Bookkeeping', url: `${SITE_URL}/services/bookkeeping` }
    ], SITE_URL);

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap gap-3 mb-8">
                            <Link href="/services" className="text-blue-300 hover:text-white text-sm font-bold transition-colors">← All Services</Link>
                            <span className="inline-block bg-blue-400/20 text-blue-200 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">Monthly Service</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight tracking-tighter">
                            BOOKKEEPING<br />
                            <span className="text-yellow-400 italic font-serif lowercase">services.</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-10 leading-relaxed">
                            We keep your books clean and up-to-date every month. Bank reconciliation, expense tracking, and organized financial records — so you always know where your money stands.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105">
                                Get Started — Free Consultation
                            </Link>
                            <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-4 rounded-full text-sm font-bold">
                                <span className="text-lg">💰</span> From $49/month
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">WHAT&apos;S <span className="text-blue-600">INCLUDED</span></h2>
                            <p className="text-gray-600 text-lg">Everything you need to keep your finances accurate and organized.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "🏦", title: "Bank Reconciliation", desc: "Monthly reconciliation of all bank accounts, credit cards, and financial accounts to ensure your books match your statements." },
                                { icon: "📊", title: "Expense Categorization", desc: "Every transaction properly categorized for accurate financial reporting and maximum tax deductions come tax time." },
                                { icon: "📁", title: "Financial Record Management", desc: "Secure, organized digital records of all your financial transactions, receipts, and supporting documents." },
                                { icon: "💵", title: "Cash Flow Tracking", desc: "Real-time visibility into your cash position so you know exactly where your money is coming from and going." },
                                { icon: "📱", title: "QuickBooks / Xero Setup", desc: "We set up and manage your accounting software — QuickBooks, Xero, FreshBooks, or Wave — so everything runs smoothly." },
                                { icon: "📈", title: "Monthly Financial Summary", desc: "Clean, easy-to-read monthly summary delivered within 5 business days of month-end. No jargon, just clear numbers." },
                            ].map((item) => (
                                <div key={item.title} className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h4 className="font-black text-gray-900 uppercase text-sm mb-3">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4">HOW IT <span className="text-blue-600">WORKS</span></h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Free Consultation", desc: "We review your current books, understand your business, and design a custom bookkeeping plan." },
                                { step: "02", title: "Setup & Onboarding", desc: "We connect to your accounts, set up your software, and get started — usually within 48 hours." },
                                { step: "03", title: "Monthly Bookkeeping", desc: "We handle all transaction recording, reconciliation, and categorization every month." },
                                { step: "04", title: "Review & Report", desc: "Receive clean monthly reports with a summary of your financial position. Ask questions anytime." },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mx-auto mb-4">{item.step}</div>
                                    <h4 className="font-black text-gray-900 uppercase text-sm mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-12 text-center">BOOKKEEPING <span className="text-blue-600">FAQs</span></h2>
                    <div className="space-y-6">
                        {[
                            { q: "How much does bookkeeping cost?", a: "Our bookkeeping services start at $49/month for small businesses with low transaction volumes. Pricing scales with your business size and transaction count. All plans include free setup and a free initial consultation." },
                            { q: "What accounting software do you use?", a: "We are QuickBooks ProAdvisors and Xero Certified. We also work with FreshBooks, Wave, and Sage. We work with your existing software or recommend the best fit for your business." },
                            { q: "Do you serve both US and Canadian businesses?", a: "Yes! We provide bookkeeping services for businesses in all US states and all Canadian provinces. We understand both IRS and CRA requirements." },
                            { q: "How quickly will I receive my reports?", a: "Monthly financial summaries are delivered within 5 business days of month-end. You can also request a status update at any time." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-black text-gray-900 mb-3 text-base">Q: {item.q}</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">A: {item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">START WITH <span className="text-yellow-400">CLEAN BOOKS</span></h2>
                    <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">Get your books organized and up-to-date. Book your free consultation — no commitment required.</p>
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
