import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Small Business Financial Consulting & Advisory | SmartSoft Solutions",
    description: "Expert business consulting, cash flow forecasting, budgeting analysis, and fractional CFO advisory services for growing enterprises.",
    keywords: ["business financial consulting", "fractional CFO advisory", "cash flow forecasting startup", "business budgeting consultant", "strategic financial modeling"],
    alternates: {
        canonical: `${SITE_URL}/services/financial-consulting`,
    },
    openGraph: {
        title: "Financial Consulting & Business Advisory | SmartSoft Solutions",
        description: "Optimize cash flow balances, analyze budget models, and accelerate growth with strategic advisory.",
        url: `${SITE_URL}/services/financial-consulting`,
        type: 'website',
        images: [{ url: '/favicon.ico', width: 512, height: 512 }]
    }
};

export default function FinancialConsultingServicePage() {
    const pageSchema = webPage({
        name: 'Financial Consulting & Strategic Advisory Services',
        description: 'Advanced business budgeting modeling, cash flow diagnostic reconciliation, capital structures, and fractional CFO consultations.',
        url: `${SITE_URL}/services/financial-consulting`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Financial Consulting', url: `${SITE_URL}/services/financial-consulting` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Financial Consulting', url: '/services/financial-consulting' }
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
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Fractional CFO Advisory</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            FINANCIAL CONSULTING & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">BUSINESS ADVISORY.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-350 max-w-2xl leading-relaxed">
                            Navigate scaling hurdles with clarity. Get professional cash flow forecasts, operational cost controls, and custom budgeting plans to guide major business choices.
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
                                DATA-DRIVEN STRATEGIES, <br />
                                <span className="text-yellow-500 italic font-serif">PRECISE DECISION MAKING.</span>
                            </h2>
                            <p className="text-slate-650 leading-relaxed text-sm font-medium">
                                Many businesses fail because of poor cash flow management, not lack of sales. We analyze your monthly profit velocity, identify cost reduction opportunities, structure pricing tiers, and generate custom forecasts.
                            </p>

                            {/* Features list */}
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Strategic Cash Flow & Revenue Projection Models
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Operational Cost Controls & Expense Audits
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Pricing Tier Evaluations & Margin Optimization
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-101 flex items-center justify-center text-yellow-600">✓</span>
                                    Fractional CFO Review & Monthly Strategy Calls
                                </li>
                            </ul>
                        </div>

                        {/* Visual Mockup (No Images) */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Strategic Forecast</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Operational Advisory Review</p>
                                </div>
                                <span className="bg-yellow-500/20 border border-yellow-500 text-yellow-405 px-3 py-1 rounded-full text-[9px] font-bold uppercase">Optimized</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Current Cash Runway:</span>
                                    <span className="text-green-400 font-bold">14.5 Months</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Target Operating Costs Reduction:</span>
                                    <span className="text-yellow-405 font-bold">-$3,500.00/mo</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-slate-200">Advisory Return Target:</span>
                                    <span className="text-green-400 font-black">2.5x ROI</span>
                                </div>
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                💡 **Advisory Insight:** Restructuring payroll reserves and tax schedules will free up $15,000 in immediate working capital this quarter.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Want to optimize your margins?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">CONNECT WITH STRATEGIC CFO CONSULTANTS</h2>
                    <p className="text-slate-655 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Outsource CFO responsibilities, analyze operational projections, and set up clear capital allocations under expert advice.
                    </p>
                    <Link href="/contact?service=Financial%20Consulting" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Schedule CFO Strategy Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
