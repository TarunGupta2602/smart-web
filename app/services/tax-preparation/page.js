import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "IRS Authorized Tax Preparation & CRA Filing | SmartSoft Solutions",
    description: "CPA-guided corporate and small business tax preparation. Maximize your deductions and file with an IRS Authorized e-File provider.",
    keywords: ["IRS authorized tax preparation", "corporate tax return filing", "small business tax advisor", "Canada Revenue Agency compliance tax", "business tax deductible list"],
    alternates: {
        canonical: `${SITE_URL}/services/tax-preparation`,
    },
    openGraph: {
        title: "Tax Preparation & Corporate Filing | SmartSoft Solutions",
        description: "Maximize your refund and assure absolute accounting compliance under CPA-supervised tax preparation.",
        url: `${SITE_URL}/services/tax-preparation`,
        type: 'website',
        images: [{ url: '/favicon.ico', width: 512, height: 512 }]
    }
};

export default function TaxPreparationServicePage() {
    const pageSchema = webPage({
        name: 'Tax Preparation & Corporate Filing Services',
        description: 'Complete tax planning, deductions audit, corporate filing preparation, and federal/state electronic submissions under CPA supervision.',
        url: `${SITE_URL}/services/tax-preparation`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Tax Preparation', url: `${SITE_URL}/services/tax-preparation` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Tax Preparation', url: '/services/tax-preparation' }
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
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-orange-450">Authorized IRS e-File Provider</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            TAX PREPARATION & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">FILING SERVICES.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Maximize write-offs, avoid filing penalties, and secure certification. Our CPA-supervised tax preparers manage corporate returns (1120/1120S/1065) and Schedule-C files in USA & Canada.
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
                                MAXIMIZE DEDUCTIONS, <br />
                                <span className="text-orange-500 italic font-serif">ELIMINATE AUDIT LIABILITY.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                Filing taxes shouldn&apos;t just be a yearly chore—it&apos;s a strategic asset for business reinvestment. We evaluate depreciation balances, trace credit opportunities, check state/provincial filing requirements, and review historical returns.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    Corporate Tax Return Prep (IRS Form 1120, 1120S, 1065 & T2 Canada)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    Schedule C & Self-employed Tax Filing
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    Sales Tax & State/Provincial Compliance (HST / GST Setup)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
                                    CPA Authorized E-file Submission
                                </li>
                            </ul>
                        </div>

                        {/* Visual Mockup (No Images) */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Tax Year filing Summary</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Verified Deductions Review</p>
                                </div>
                                <span className="bg-green-500/20 border border-green-500 text-green-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">e-filed</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Identified Tax Deductions:</span>
                                    <span className="text-green-400 font-bold">+$48,150.00</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Total Tax Savings Made:</span>
                                    <span className="text-yellow-400 font-bold">+18.5% SAVED</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-slate-200">IRS / CRA Compliance:</span>
                                    <span className="text-green-400 font-black">Passed & Authorized</span>
                                </div>
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                💡 **Expert Insight:** Section 179 depreciation deductions mapped correctly. State filings structured for maximum advantage.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Filing deadline approaching?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">SECURE SYSTEMATIC TAX OPTIMIZATION</h2>
                    <p className="text-slate-655 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Work with certified corporate preparers to restructure your tax profiles, claim correct deductions, and submit clean e-files.
                    </p>
                    <Link href="/contact?service=Tax%20Preparation" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Schedule Tax Review
                    </Link>
                </div>
            </section>
        </div>
    );
}
