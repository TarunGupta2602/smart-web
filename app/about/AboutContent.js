"use client";

import Link from "next/link";

export default function AboutContent({ expertiseItems, team }) {
    return (
        <div className="bg-white text-slate-900">
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">About SmartSoft Solutions</p>
                    <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                        A development company that ships live products
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
                        We build business websites, e-commerce stores, and web apps with Next.js and React.
                        Projects are quoted clearly, delivered with weekly demos, and launched to production.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-5">
                                Company builds. Real handoffs.
                            </h2>
                            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                                <p>
                                    SmartSoft Solutions helps businesses get customers online — through clearer websites,
                                    stores that take orders, and apps teams can actually use.
                                </p>
                                <p>
                                    We work from Canada and India, and deliver remotely worldwide via WhatsApp, email, and video.
                                    Scope and budget stay written down from the first quote through launch.
                                </p>
                            </div>
                        </div>
                        <div className="border border-slate-200 bg-slate-50 p-7 md:p-8 space-y-5">
                            <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                <span className="text-slate-500">Primary stack</span>
                                <span className="font-medium text-slate-900">Next.js · React</span>
                            </div>
                            <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                <span className="text-slate-500">Backends</span>
                                <span className="font-medium text-slate-900">Firebase · Supabase</span>
                            </div>
                            <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                <span className="text-slate-500">Pricing model</span>
                                <span className="font-medium text-slate-900">Fixed project quotes</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Delivery</span>
                                <span className="font-medium text-slate-900">Remote · Global</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
                        What we are good at
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertiseItems.map((item) => (
                            <div key={item.name} className="border-t border-slate-200 pt-5">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
                        Team
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {team.map((member) => (
                            <div key={member.name}>
                                <div className="w-12 h-12 mb-3 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-semibold">
                                    {member.initials}
                                </div>
                                <p className="text-sm font-medium text-slate-900">{member.name}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-100 py-14">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Ready to start a project?</h2>
                        <p className="text-sm text-slate-600">Send a brief — we reply with scope and a fixed quote.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Get a quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
