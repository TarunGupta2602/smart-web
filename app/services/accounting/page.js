import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "CPA Supervised Accounting & Reporting | SmartSoft Solutions",
    description: "Get professional, CPA-supervised accounting solutions including financial statements, balance sheets, and end-of-year corporate closeouts.",
    keywords: ["CPA supervised accounting", "small business balance sheets", "corporate financial reporting", "outsource company accountant", "CPA accounting firm USA Canada"],
    alternates: {
        canonical: `${SITE_URL}/services/accounting`,
    },
    openGraph: {
        title: "CPA Supervised Accounting & Corporate Reporting | SmartSoft Solutions",
        description: "Scale with confidence using certified financial reports, end-of-year calculations, and CPA audits.",
        url: `${SITE_URL}/services/accounting`,
        type: 'website',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
    }
};

export default function AccountingServicePage() {
    const pageSchema = webPage({
        name: 'Accounting & Corporate Reporting Services',
        description: 'Advanced financial statements preparation, corporate account reconciliation, tax closure, and CPA supervised audits.',
        url: `${SITE_URL}/services/accounting`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Accounting', url: `${SITE_URL}/services/accounting` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Accounting', url: '/services/accounting' }
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
                    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-orange-550/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-orange-400">Advanced CPA Supervision</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            CPA SUPERVISED <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">ACCOUNTING.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Upgrade from simple bookkeeping to advanced corporate accounting. Prepare your enterprise for audits, secure bank loans, and make informed choices with certified financial statements.
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
                                PROFESSIONAL COMPLIANCE, <br />
                                <span className="text-orange-500 italic font-serif">SECURE GROWTH.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                General bookkeeping logs transactions, but corporate accounting defines your financial strategy. Our certified practitioners oversee monthly closing logs, balance sheets, cash flows, and IRS/CRA tax categories.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    CPA-Signature Financial Statements
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    Cash Flow Analysis & Working Capital Planning
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    End-of-Year Corporate Adjustments & Asset Depreciations
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    CPA Audits & Lender Financing Diagnostics
                                </li>
                            </ul>
                        </div>

                        {/* Visual Mockup (No Images) */}
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Annual Profit Map</h4>
                                    <p className="text-[10px] text-orange-400 font-bold">CPA Audited Close</p>
                                </div>
                                <span className="bg-orange-500/20 border border-orange-500 text-orange-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">Certified</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase">Operating Margin Info</p>
                                    <p className="text-lg font-black text-yellow-400">42.5% Profit Margin</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase">Yearly Tax Deductible Total</p>
                                    <p className="text-lg font-black text-green-400">+$34,500.00 Claimed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Ready to consult a professional?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">OUTSOURCE TO EXPERT CPA ADVISORS</h2>
                    <p className="text-slate-650 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Ensure total compliance, maximize corporate tax write-offs, and receive CPA-supervised reports without the high cost of an in-house controller.
                    </p>
                    <Link href="/contact?service=Accounting" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Book a CPA Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
