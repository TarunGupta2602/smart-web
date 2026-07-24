import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Monthly Bookkeeping & Bank Reconciliation | SmartSoft Solutions",
    description: "CPA-supervised monthly bookkeeping services for small businesses and startups in USA & Canada. Real-time bank reconciliations & ledger cleanup.",
    keywords: ["bookkeeping service small business", "monthly ledger reconciliation", "outsource bookkeeper QuickBooks", "CPA supervised account bookkeeping", "Canada CRA bookkeeping"],
    alternates: {
        canonical: `${SITE_URL}/services/bookkeeping`,
    },
    openGraph: {
        title: "Bookkeeping & Bank Reconciliation | SmartSoft Solutions",
        description: "Accurate monthly bookkeeping and reconciliation services supervised by senior CPAs.",
        url: `${SITE_URL}/services/bookkeeping`,
        type: 'website',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
    },
    other: {
        category: 'Bookkeeping',
        classification: 'Financial Services',
    },
};

export default function BookkeepingServicePage() {
    const pageSchema = webPage({
        name: 'Bookkeeping & Bank Reconciliation Services',
        description: 'Complete monthly transaction mapping, bank reconciliation, ledger cleanup, and statement audits under CPA supervision.',
        url: `${SITE_URL}/services/bookkeeping`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Bookkeeping', url: `${SITE_URL}/services/bookkeeping` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Bookkeeping', url: '/services/bookkeeping' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-6 pt-4 pb-2" />

            {/* Subpage Hero */}
            <section className="relative min-h-[40vh] flex items-center bg-slate-950 text-white overflow-hidden py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-550/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 self-center lg:self-start">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-400">Essential Financial Operations</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            BOOKKEEPING & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">RECONCILIATION.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Stop worrying about missing receipts, unsorted transactions, or tax-season stress. We manage your daily ledgers, reconcile bank feeds, and organize records under senior CPA review.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Details Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 tracking-tight">
                                ACCURATE BOOKS, <br />
                                <span className="text-yellow-500 italic font-serif">ZERO COMPROMISE.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                Proper bookkeeping is the backbone of any healthy small business. Our experts synchronize your bank statement logs, credit card inputs, merchant processing portals, and QuickBooks outputs daily.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Daily Receipt Log & Transaction Categorization
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Dual-Platform Sync (QuickBooks & Xero)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    CPA-Approved P&L Statement Generation
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Historic Books Cleanup & Catch-Up Audits
                                </li>
                            </ul>
                        </div>

                        {/* CSS/SVG Mockup representing reconciled books (No images) */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Ledger Balance Sheet</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Verified CPA Review</p>
                                </div>
                                <span className="bg-green-500/25 border border-green-500 text-green-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">Balanced</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Total Cleared Revenue:</span>
                                    <span className="text-green-400 font-bold">+$18,740.00</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Total Cleared Expenses:</span>
                                    <span className="text-red-400 font-bold">-$8,450.50</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-white font-bold">Total Undeposited Funds:</span>
                                    <span className="text-yellow-400 font-black">+$10,289.50</span>
                                </div>
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                💡 **Audit Insight:** Synced with bank statements. 12 unreconciled items automatically mapped to IRS schedule-C categories.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Are your books behind?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">CATCH UP ON HISTORICAL LEDGERS</h2>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Whether you are 3 months or 3 years behind, we can reconstruct your books, organize deductions, and make you compliant instantly.
                    </p>
                    <Link href="/contact?service=Bookkeeping" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Request Free Audit
                    </Link>
                </div>
            </section>
        </div>
    );
}
