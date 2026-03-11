"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactContent({ contactMethods }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Website Development",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        // Basic validation
        if (!form.name || !form.email || !form.service || !form.message) {
            setError("Please fill in all required fields.");
            setLoading(false);
            return;
        }
        try {
            const { error: supabaseError } = await supabase.from("contact_inquiries").insert([
                {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    service: form.service,
                    message: form.message
                }
            ]);
            if (supabaseError) {
                setError("Submission failed. Please try again.");
            } else {
                setSuccess("Thank you! Your inquiry has been submitted.");
                setForm({ name: "", email: "", phone: "", service: "Website Development", message: "" });
            }
        } catch (err) {
            setError("Submission failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            {/* Modern Cinematic Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Contact SmartSoft Solutions"
                        fill
                        className="object-cover opacity-20 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/80 to-white"></div>

                    {/* Animated Glows */}
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/80">Connect with the Elite</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.8] tracking-tighter uppercase text-white">
                            Transforming <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-500 italic font-serif lowercase pr-4">ideas</span>
                            into <span className="text-yellow-500">Reality</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
                            Step into the future of digital engineering. Whether you're a startup or an established enterprise, our USA-based experts are ready to accelerate your growth.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#form" className="px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:scale-105">
                                Start a Conversation
                            </a>
                            <a href="tel:17077084062" className="px-10 py-5 bg-white/5 text-white border border-white/10 backdrop-blur-xl font-black uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-3">
                                <span>📞</span> Quick Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods - Precision Grid */}
            <section className="py-32 relative z-20 -mt-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="group relative bg-white border border-slate-100 p-12 rounded-[2.5rem] hover:border-yellow-400/50 transition-all duration-700 hover:-translate-y-4 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(234,179,8,0.15)]"
                            >
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors duration-700"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mb-10 border border-slate-100 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-3 group-hover:text-yellow-600 transition-colors">{method.title}</h3>
                                    <p className="text-2xl font-black text-slate-900 mb-5 leading-none tracking-tight">{method.description}</p>
                                    {method.subtext && <p className="text-xs text-slate-500 font-bold italic mb-8 uppercase tracking-widest">{method.subtext}</p>}

                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600">
                                        <span className="w-8 h-[1px] bg-yellow-300 group-hover:w-12 transition-all duration-700"></span>
                                        {method.label}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form - Glassmorphism Design */}
            <section id="form" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-50 rounded-full blur-[120px] -mr-[25vw] -mt-[25vw] opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-50 rounded-full blur-[100px] -ml-[20vw] -mb-[20vw] opacity-50"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-8 self-start">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-700">Get a Quote</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-[0.8]">
                                Let's Discuss Your <span className="text-yellow-500">Vision</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
                                Fill out the form and our technical leadership will get back to you within 2 business hours for a detailed consultation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="font-bold text-slate-800 uppercase text-xs tracking-widest">Free Technical Audit</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="font-bold text-slate-800 uppercase text-xs tracking-widest">No-Obligation Quote</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="font-bold text-slate-800 uppercase text-xs tracking-widest">24/7 Global Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] p-10 md:p-14 space-y-8 border border-slate-100 relative group/form">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400 pl-4" htmlFor="name">Full Name*</label>
                                        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-bold transition-all" />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400 pl-4" htmlFor="email">Email Address*</label>
                                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-bold transition-all" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400 pl-4" htmlFor="phone">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} placeholder="+1 (707) 000-0000" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-bold transition-all" />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400 pl-4" htmlFor="service">Interested Service*</label>
                                        <select name="service" id="service" value={form.service} onChange={handleChange} required className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-black transition-all appearance-none cursor-pointer">
                                            <option>Website Development</option>
                                            <option>Mobile App Development</option>
                                            <option>Content Writing</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400 pl-4" htmlFor="message">Your Message*</label>
                                    <textarea name="message" id="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project goals..." required rows={5} className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-yellow-500 focus:ring-0 focus:bg-white text-slate-900 font-bold transition-all" />
                                </div>

                                {error && <div className="p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm font-bold flex items-center gap-3"><span>❌</span> {error}</div>}
                                {success && <div className="p-4 bg-green-50 text-green-600 rounded-2xl border border-green-100 text-sm font-bold flex items-center gap-3"><span>✅</span> {success}</div>}

                                <button type="submit" disabled={loading} className="w-full py-6 bg-slate-900 text-white font-black rounded-2xl text-sm uppercase tracking-[0.3em] hover:bg-yellow-500 hover:text-black transition-all duration-500 shadow-xl disabled:opacity-50 group-hover/form:scale-[1.02]">
                                    {loading ? "Transmitting..." : "Send Secret Message"}
                                </button>

                                <div className="absolute -bottom-1 -left-1 -right-1 h-3 bg-yellow-500 rounded-b-[3rem] opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 -z-10"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Why Us Section */}
            <section className="py-40 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[1px] bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <div className="space-y-6 pt-20">
                                    <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img2.jpg" alt="Team Work" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                    <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img3.jpg" alt="Studio" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img4.jpg" alt="Brainstorming" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                    <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
                                        <Image src="/images/about-img5.jpg" alt="Office" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="bg-yellow-500 text-black w-40 h-40 rounded-full flex flex-col items-center justify-center border-[10px] border-slate-950 shadow-2xl animate-spin-slow">
                                    <div className="animate-none flex flex-col items-center">
                                        <span className="text-4xl font-black">99%</span>
                                        <span className="text-[8px] uppercase font-black tracking-[0.2em] max-w-[80px] text-center leading-tight">Elite Satisfaction Rate</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/60">The SmartSoft Edge</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter uppercase">
                                Engineering <br />
                                <span className="text-yellow-500 italic font-serif lowercase pr-4">excellence</span>
                                Beyond <span className="text-yellow-500">Limits</span>
                            </h2>
                            <p className="text-xl text-slate-400 mb-16 leading-relaxed font-medium">
                                We don't just build software. We craft digital legacies. Our methodology combines rapid USA-based engineering with global scalability.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                {[
                                    { t: "Agile Engineering", d: "Hyper-fast delivery cycles without compromising on precision." },
                                    { t: "Future-Proof UI", d: "Interactions designed to evolve with tomorrow's web standards." },
                                    { t: "SEO Dominance", d: "Inherent architectural optimization for maximum visibility." },
                                    { t: "24/7 Ops", d: "Global support infrastructure at your reach, anytime." }
                                ].map((item, i) => (
                                    <div key={i} className="group/item">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover/item:bg-yellow-500 group-hover/item:text-black transition-all">
                                                <span className="text-[10px] font-black">{i + 1}</span>
                                            </div>
                                            <h4 className="text-lg font-black uppercase tracking-tight">{item.t}</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atomic CTA Section */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto backdrop-blur-md p-10 md:p-20 rounded-[4rem] border border-slate-100 bg-slate-50/30">
                        <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter uppercase leading-[0.8] text-slate-900">
                            Ignite Your <br />
                            <span className="text-yellow-500">Growth</span>
                        </h2>
                        <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium">
                            Join the ranks of elite startups who have scaled with our engineering prowess. Your digital empire starts here.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-6 justify-center">
                            <a href="tel:17077084062" className="flex items-center justify-between gap-10 px-10 py-8 bg-slate-900 text-white rounded-[2rem] hover:bg-yellow-500 hover:text-black transition-all duration-500 group/cta">
                                <div className="text-left">
                                    <span className="block text-[8px] uppercase tracking-widest font-black opacity-60 mb-1">Instant Access</span>
                                    <span className="block font-black tracking-tight text-lg">+1-707-708-4062</span>
                                </div>
                                <span className="text-2xl group-hover/cta:rotate-12 transition-transform">📞</span>
                            </a>
                            <a href="https://wa.me/17077084062" className="flex items-center justify-between gap-10 px-10 py-8 bg-white border border-slate-200 text-slate-900 rounded-[2rem] hover:border-yellow-500 transition-all duration-500 group/cta shadow-sm">
                                <div className="text-left">
                                    <span className="block text-[8px] uppercase tracking-widest font-black opacity-60 mb-1">Direct Chat</span>
                                    <span className="block font-black tracking-tight text-lg">WhatsApp Experts</span>
                                </div>
                                <span className="text-2xl group-hover/cta:rotate-12 transition-transform">💬</span>
                            </a>
                        </div>

                        <a href="mailto:support@smartsoftsolutions.org" className="inline-block mt-12 text-xs font-black uppercase tracking-[0.4em] text-slate-400 hover:text-yellow-600 transition-colors">
                            support@smartsoftsolutions.org
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
