import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Invoicing & Billing Automation Services | SmartSoft Solutions",
    description: "Automate your billing, invoices, and accounts receivable tracking. Get paid faster with our professional financial invoicing solutions.",
    keywords: ["automated business invoicing", "accounts receivable management", "client billing setup", "outsource business invoicing", "invoice payment collection"],
    alternates: {
        canonical: `${SITE_URL}/services/invoicing`,
    },
    openGraph: {
        title: "Invoicing & Billing Automation | SmartSoft Solutions",
        description: "Streamline client billing workflows, trace outstanding balances, and accelerate revenue collections.",
        url: `${SITE_URL}/services/invoicing`,
        type: 'website',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
    }
};

export default function InvoicingServicePage() {
    const pageSchema = webPage({
        name: 'Invoicing & Billing Automation Services',
        description: 'Professional invoice design, automated recurring billing, accounts receivable reconciliation, and client payment follow-ups.',
        url: `${SITE_URL}/services/invoicing`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Invoicing', url: `${SITE_URL}/services/invoicing` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Invoicing', url: '/services/invoicing' }
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
                    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-slate-550/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Automated Cash Flow Speed</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            INVOICING & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">BILLING SYSTEMS.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Stop chasing payments manually. We configure secure invoice pipelines, set up automated client billing reminders, and balance outstanding receivables automatically.
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
                                FASTER INVOICING, <br />
                                <span className="text-yellow-500 italic font-serif">GREATER CASH FLOW.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                Delays in invoicing prevent you from investing back into your operations. We automate merchant deposits, recurring client billing cycles, and follow-up templates while keeping every record linked to your books.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Professional Custom Branded Invoices
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Automated Accounts Receivable Follow-Ups
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Multiple Online Gateway Sync (Stripe, PayPal, QuickBooks)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Late Payment Tracking & Aging Reports
                                </li>
                            </ul>
                        </div>

                        {/* Visual Mockup (No Images) */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Outstanding Invoices</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Accounts Receivable Cycle</p>
                                </div>
                                <span className="bg-yellow-500/20 border border-yellow-500 text-yellow-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">Active</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Paid Invoices (This Month):</span>
                                    <span className="text-green-400 font-bold">+$12,500.00</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Aging Invoices (Over 30 Days):</span>
                                    <span className="text-yellow-400 font-bold">$1,200.00</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-slate-200">Average Clearing Velocity:</span>
                                    <span className="text-green-400 font-black">1.8 Days</span>
                                </div>
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                📈 **Invoicing Result:** Automatic reminders reduced outstanding receivables by 38% for connected small businesses.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Struggling with late payers?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">AUTOMATE YOUR REVENUE PIPELINE</h2>
                    <p className="text-slate-655 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Set up professional invoices, direct-debit portal sync, and automated reminders that politely prompt clients and track payment receipts.
                    </p>
                    <Link href="/contact?service=Invoicing" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Upgrade Billing Flow
                    </Link>
                </div>
            </section>
        </div>
    );
}
