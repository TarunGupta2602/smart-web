"use client";

import Link from "next/link";

export default function AboutContent({ expertiseItems, team }) {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-500 selection:text-black">

            {/* Dark Premium Hero Section (Glows & Gradients, No Images) */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-slate-950 text-white py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-400">Professional CPA-Supervised Team</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.1] lg:leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-white">
                            GET TO KNOW US & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-2">OUR THINKING.</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                            We bridge the gap between compliance and business growth, providing USA & Canada small business owners with accurate bookkeeping, tax filing, and full payroll peace of mind.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section - Grid Layout with CSS Art instead of Images */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Pure CSS/SVG Art Representing Ledger / Accounting System */}
                        <div className="relative group mb-12 lg:mb-0">
                            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors"></div>

                                <div className="flex justify-between items-center border-b border-white/10 pb-6 relative z-10">
                                    <div>
                                        <h4 className="text-lg font-black uppercase text-white font-serif">SmartSoft Ledger Sync</h4>
                                        <p className="text-xs text-slate-400">Real-Time Bookkeeping Reconciliation</p>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">LIVE SCANNER</span>
                                </div>

                                <div className="space-y-4 my-8 relative z-10">
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">QuickBooks Online Sync:</span>
                                        <span className="text-green-400 font-bold">✓ Connected</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">IRS / CRA Audit Engine:</span>
                                        <span className="text-green-400 font-bold">✓ Pass</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-slate-400">CPA Supervised Review:</span>
                                        <span className="text-yellow-400 font-bold">✓ Completed</span>
                                    </div>
                                </div>

                                <div className="p-5 bg-white/5 rounded-xl border border-white/10 relative z-10">
                                    <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Accuracy Guarantee</p>
                                    <p className="text-sm font-bold text-slate-200">
                                        All spreadsheets, journals, and accounts receivable are guaranteed 100% accurate or we correct them for free.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="space-y-8 md:space-y-10">
                            <div className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 font-black uppercase text-[10px] tracking-widest rounded-md">Financial Solutions Partner</div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase text-slate-900">
                                LEADING ACCOUNTING <br />
                                <span className="italic font-serif text-yellow-500">ENTERPRISE.</span>
                            </h2>
                            <div className="prose max-w-none text-slate-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    We specialize in CPA-Supervised Bookkeeping, Professional Invoicing, Tax Filing (USA Federal + State and Canadian Federal + Provincial), and Full-Service Payroll Processing. As a premier provider, we help business owners eliminate stress and focus on scaling their companies.
                                </p>
                                <p className="text-base leading-relaxed">
                                    Our unique processes align tax strategy with day-to-day bookkeeping, removing reporting delays, audit risks, and organizational fragmentation. We are your reliable partner for accurate financial records and statutory compliance.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                                    <div className="text-yellow-500 mb-2 font-black text-xl">✓</div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-600">CPA Supervised</h4>
                                </div>
                                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                                    <div className="text-yellow-500 mb-2 font-black text-xl">✓</div>
                                    <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-600">IRS & CRA Compliant</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Items Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-4">Core Strengths</h3>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900">OUR FINANCIAL <span className="text-yellow-500 italic font-serif">EXPERTISE</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertiseItems.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-350 hover:-translate-y-1">
                                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-black uppercase mb-4 text-slate-900">{item.name}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase text-slate-900">
                                ACCURACY FIRST <br />
                                <span className="italic font-serif text-yellow-500">PHILOSOPHY.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We realize that any discrepancy, late filing, or error in your business bookkeeping has serious consequences. That is why we take accuracy personally. Every journal, balance sheet, and tax deduction is double-checked by a qualified CPA.
                            </p>
                            <div className="p-8 bg-slate-50 rounded-3xl border-l-4 border-yellow-500 shadow-sm italic text-lg text-slate-700">
                                &ldquo;We understand that compliance and cash flow are the lifelines of your business. We treat your books with the same precision as our own.&rdquo;
                            </div>
                        </div>

                        {/* Pure CSS Stat Pillar (No image dependencies) */}
                        <div className="relative group">
                            <div className="relative aspect-square rounded-full bg-slate-50 border-8 border-slate-100 flex items-center justify-center p-8 shadow-xl">
                                <div className="text-center">
                                    <span className="block text-7xl md:text-8xl font-black text-yellow-500 mb-2">99.9%</span>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 block">Accuracy Rate</span>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 block mt-2">CPA SUPERVISED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-4 font-bold">Leading Specialists</h3>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900">MEET THE <span className="text-yellow-500 italic font-serif">TEAM</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-yellow-400 transition-all text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-orange-50 text-slate-950 font-bold border border-yellow-250 flex items-center justify-center text-xl mx-auto mb-4">
                                    {member.initials}
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm md:text-base">{member.name}</h4>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wide mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.8] text-white">
                            DEPEND ON OUR <br />
                            <span className="italic font-serif text-yellow-500 uppercase">PROMISES.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                            Let our CPA-supervised experts manage your bookkeeping, payroll, and taxes so you can focus on growing your business. No hourly fees, just simple flat-rate pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-wider rounded-full transition-all duration-300 text-sm shadow-xl">
                                Request Free Consultation
                            </Link>
                            <a href="tel:17077084062" className="text-white hover:text-yellow-400 font-bold transition-colors">
                                Call: 1-707-708-4062
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
