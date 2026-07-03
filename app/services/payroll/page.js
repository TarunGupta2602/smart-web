import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "USA & Canada Payroll Processing Services | SmartSoft Solutions",
    description: "Complete small business payroll processing in USA and Canada. We calculate payroll taxes, handle direct deposits, and issue W-2 and T4 forms.",
    keywords: ["small business payroll service", "payroll processing USA Canada", "W-2 T4 tax filing payroll", "direct deposit payroll company", "CPA supervised payroll"],
    alternates: {
        canonical: `${SITE_URL}/services/payroll`,
    },
    openGraph: {
        title: "USA & Canada Payroll Services | SmartSoft Solutions",
        description: "Accurate payroll processing, IRS/CRA deposit schedules, W-2/T4 filings, and hourly/salary Direct Deposit.",
        url: `${SITE_URL}/services/payroll`,
        type: 'website',
        images: [{ url: '/favicon.ico', width: 512, height: 512 }]
    }
};

export default function PayrollServicePage() {
    const pageSchema = webPage({
        name: 'Payroll Processing Services',
        description: 'Complete USA and Canadian business payroll solutions including direct deposit setup, salary calculations, and end-of-year tax operations.',
        url: `${SITE_URL}/services/payroll`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Payroll', url: `${SITE_URL}/services/payroll` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Payroll', url: '/services/payroll' }
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
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-450">Unified Cross-Border Payroll</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            USA & CANADA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">PAYROLL PROCESSING.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Pay your employees on time with zero stress. We calculate salary payments, manage state/provincial tax deposits, and handle tax returns (W-2s/T4s) under absolute compliance checks.
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
                                COMPLIANT CALCULATIONS, <br />
                                <span className="text-yellow-500 italic font-serif">ON-TIME DIRECT DEPOSITS.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                Manual payroll creates compliance risks (unpaid payroll tax deposits, incorrect W-2 registers). We configure direct deposit schedules, withhold state/federal payroll taxes, file quarterly 941 reports, and register local employer databases.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Direct Deposit & Salary Processing (Weekly / Semimonthly)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Federal & Local Payroll Tax Deposits (USA & Canada)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Year-End Employee Tax Documents (W-2 & T4 Registers)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Quarterly IRS Form 941 & CRA Statutory Submissions
                                </li>
                            </ul>
                        </div>

                        {/* Visual Mockup (No Images) */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Payroll Tax Withholding</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Statutory Withholdings Complete</p>
                                </div>
                                <span className="bg-green-500/20 border border-green-500 text-green-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">IRS & CRA PASS</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Total Net Salary Paid:</span>
                                    <span className="text-green-400 font-bold">+$32,450.00</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Federal/State Withholdings:</span>
                                    <span className="text-yellow-400 font-bold">$7,420.50</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-slate-200">Reconciled Payroll Accounts:</span>
                                    <span className="text-green-400 font-black">100% Balanced</span>
                                </div>
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                💡 **Tax Advisory:** Employee status calculations optimized to limit employer tax burdens and guarantee error-free deposits.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Have cross-border employees?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">UNIFY YOUR STAFF PAYMENTS</h2>
                    <p className="text-slate-655 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Speak to our payroll processors for automated statutory calculations, direct deposit integrations, and quarterly returns setup.
                    </p>
                    <Link href="/contact?service=Payroll%20Processing" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Get Payroll Solutions
                    </Link>
                </div>
            </section>
        </div>
    );
}
