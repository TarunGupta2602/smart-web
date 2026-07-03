"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

const contactMethods = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: "Call Us",
        description: "+1-707-708-4062",
        subtext: "Mon–Fri, 9am–6pm EST",
        label: "Call Now",
        link: "tel:17077084062"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Email Us",
        description: "smartsoftsols@gmail.com",
        subtext: "Response within 2 business hours",
        label: "Send Email",
        link: "mailto:smartsoftsols@gmail.com"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.5 0C5.149 0 0 5.149 0 11.5c0 2.01.524 3.898 1.436 5.537L0 23l6.148-1.611A11.456 11.456 0 0011.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0zm0 21.012a9.497 9.497 0 01-4.84-1.318l-.346-.207-3.586.94.957-3.498-.228-.36A9.488 9.488 0 012.012 11.5C2.012 6.254 6.254 2.012 11.5 2.012S20.988 6.254 20.988 11.5 16.746 21.012 11.5 21.012z" />
            </svg>
        ),
        title: "WhatsApp",
        description: "+91-7456096455",
        subtext: "Chat with us instantly",
        label: "Open Chat",
        link: "https://wa.me/917456096455"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Head Office",
        description: "24 Ranchlands Bay NW",
        subtext: "Calgary, AB T3G 1S4, Canada",
        label: "View on Map",
        link: "https://maps.google.com/?q=24+Ranchlands+Bay+NW+Calgary+AB+T3G+1S4+Canada"
    }
];

export default function ContactContent() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Bookkeeping", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        if (!form.name || !form.email || !form.service || !form.message) {
            setError("Please fill in all required fields.");
            setLoading(false);
            return;
        }
        try {
            const { error: supabaseError } = await supabase.from("contact_inquiries").insert([
                { name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.message }
            ]);
            if (supabaseError) {
                setError("Submission failed. Please try again.");
            } else {
                setSuccess("Thank you! A financial expert will follow up within 2 business hours.");
                setForm({ name: "", email: "", phone: "", service: "Bookkeeping", message: "" });
            }
        } catch {
            setError("Submission failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/8 rounded-full blur-[140px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse delay-1000" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-400">Free Consultation Available</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.95]">
                        LET&apos;S FIX YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase">books & taxes.</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Whether you need clean books, stress-free payroll, or a full tax strategy — our CPA-supervised team is ready to help your USA or Canada business today.
                    </p>
                </div>
            </section>

            {/* ─── CONTACT METHOD CARDS ─────────────────────────────── */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, i) => (
                            <a
                                key={i}
                                href={method.link}
                                target={method.link.startsWith("http") ? "_blank" : undefined}
                                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="group relative bg-white border-2 border-slate-100 hover:border-yellow-400 p-8 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col items-center text-center overflow-hidden"
                            >
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 rounded-2xl bg-slate-900 group-hover:bg-yellow-400 flex items-center justify-center text-white group-hover:text-slate-900 transition-all duration-300 mb-5 shadow-lg">
                                    {method.icon}
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.25em] font-black text-slate-400 mb-2">{method.title}</span>
                                <p className="text-lg font-black text-slate-900 mb-2 break-all">{method.description}</p>
                                {method.subtext && <p className="text-xs text-slate-500 font-medium mb-5">{method.subtext}</p>}
                                <span className="text-[9px] font-black uppercase tracking-widest text-yellow-600 flex items-center gap-1">
                                    {method.label}
                                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FORM + SIDEBAR ───────────────────────────────────── */}
            <section id="form" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

                        {/* Left sidebar copy */}
                        <div className="lg:col-span-2 lg:sticky lg:top-28">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-6">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-yellow-700">No Obligation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6 leading-[0.95]">
                                GET A FREE <span className="text-yellow-500 italic font-serif lowercase">consultation.</span>
                            </h2>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8">
                                Tell us what you need. We&apos;ll review your situation and send a custom, flat-rate proposal — typically within 2 business hours.
                            </p>

                            <div className="space-y-3 mb-10">
                                {[
                                    { label: "Bookkeeping Diagnostic", sub: "Free 30-minute review of your books" },
                                    { label: "Flat-rate Proposal", sub: "No hidden fees, ever" },
                                    { label: "USA & Canada Compliance", sub: "IRS authorized · CRA compliant" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5">✓</div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 block">{item.label}</span>
                                            <span className="text-[10px] text-slate-500">{item.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-2">
                                {["IRS Authorized", "CPA Supervised", "QuickBooks Pro", "CRA Compliant"].map((b) => (
                                    <span key={b} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-900 text-yellow-400 border border-slate-800">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 space-y-6 relative"
                            >
                                {/* Subtle top accent bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-t-[2.5rem]" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400" htmlFor="name">Full Name *</label>
                                        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="John Doe" required
                                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-semibold text-sm transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400" htmlFor="email">Email Address *</label>
                                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required
                                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-semibold text-sm transition-all outline-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400" htmlFor="phone">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} placeholder="+1 (707) 000-0000"
                                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-semibold text-sm transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400" htmlFor="service">Service Needed *</label>
                                        <select name="service" id="service" value={form.service} onChange={handleChange} required
                                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-semibold text-sm transition-all outline-none cursor-pointer appearance-none">
                                            <option value="Bookkeeping">Bookkeeping</option>
                                            <option value="Accounting & Reporting">Accounting & Reporting</option>
                                            <option value="Invoicing & Billing">Invoicing & Billing</option>
                                            <option value="Payroll Processing">Payroll Processing</option>
                                            <option value="Tax Preparation">Tax Preparation</option>
                                            <option value="Financial Consulting">Financial Consulting</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-slate-400" htmlFor="message">Your Message *</label>
                                    <textarea name="message" id="message" value={form.message} onChange={handleChange}
                                        placeholder="Tell us briefly about your business and what you need help with..."
                                        required rows={5}
                                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-semibold text-sm transition-all outline-none resize-none" />
                                </div>

                                {error && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                                        ⚠ {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-bold">
                                        ✓ {success}
                                    </div>
                                )}

                                <button type="submit" disabled={loading}
                                    className="w-full py-4 bg-slate-900 hover:bg-yellow-500 text-white hover:text-slate-900 font-black rounded-2xl text-xs uppercase tracking-[0.25em] transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-yellow-200">
                                    {loading ? "Sending..." : "Request Free Consultation →"}
                                </button>

                                <p className="text-center text-[10px] text-slate-400 font-medium">
                                    No spam. No obligation. Your data is 256-bit SSL encrypted.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECURITY SECTION ─────────────────────────────────── */}
            <section className="py-20 bg-slate-950 text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-yellow-400">Your Data is Safe</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5 leading-none">
                                BANK LEVEL <span className="text-yellow-500 italic font-serif">SECURITY.</span>
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                All spreadsheets, bank logs, payroll records, and tax files are protected with 256-bit encryption and stored on secure, audited cloud platforms. We maintain strict CPA supervisor access controls — your financial data never leaves our encrypted environment.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "256-Bit SSL", sub: "End-to-end encrypted" },
                                    { title: "CPA Monitored", sub: "Strict access control" },
                                    { title: "IRS Compliant", sub: "Authorized e-File provider" },
                                    { title: "CRA Certified", sub: "Canada Revenue Compliant" },
                                ].map((item) => (
                                    <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-yellow-400 block mb-1">✓ {item.title}</span>
                                        <span className="text-[10px] text-slate-500">{item.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SVG Shield Visual */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-500/20 rounded-[3rem] blur-3xl scale-110" />
                                <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[3rem] flex items-center justify-center shadow-2xl">
                                    <div className="absolute inset-3 bg-slate-950 rounded-[2.5rem] flex flex-col items-center justify-center gap-3">
                                        <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
                                            <path d="M32 4L8 14v16c0 13.3 10.2 25.7 24 29 13.8-3.3 24-15.7 24-29V14L32 4z" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" />
                                            <path d="M22 32l6 6 12-12" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white">Protected</span>
                                        <span className="text-[8px] uppercase text-slate-400 tracking-wide">IRS & CRA Secure</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
