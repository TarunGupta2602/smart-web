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
            {/* Modern Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Contact SmartSoft Solutions"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-white"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-700">USA-Based Experts</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            Let's Build Your <span className="text-yellow-600">Website</span> or <span className="text-orange-500">App</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                            Contact our team for fast, modern website development, mobile app solutions, and professional content writing. We specialize in helping USA startups and small businesses grow online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="py-16 bg-yellow-50 border-b border-yellow-100">
                <div className="container mx-auto px-6 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-black text-yellow-700 mb-8 text-center uppercase">Inquiry Form</h2>
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-yellow-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-yellow-700" htmlFor="name">Name*</label>
                                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required className="w-full p-3 rounded-lg border border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-yellow-700" htmlFor="email">Email*</label>
                                <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required className="w-full p-3 rounded-lg border border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-yellow-700" htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} className="w-full p-3 rounded-lg border border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-yellow-700" htmlFor="service">Service*</label>
                                <select name="service" id="service" value={form.service} onChange={handleChange} required className="w-full p-3 rounded-lg border border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500">
                                    <option>Website Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Content Writing</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-yellow-700" htmlFor="message">Message*</label>
                            <textarea name="message" id="message" value={form.message} onChange={handleChange} required rows={5} className="w-full p-3 rounded-lg border border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500" />
                        </div>
                        {error && <p className="text-red-600 font-bold text-sm">{error}</p>}
                        {success && <p className="text-green-600 font-bold text-sm">{success}</p>}
                        <button type="submit" disabled={loading} className="w-full py-4 bg-yellow-500 text-black font-black rounded-full text-lg uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300">
                            {loading ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Information Grid */}
            <section className="py-24 relative z-20 -mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="group relative bg-white border border-yellow-200 p-10 rounded-3xl hover:border-yellow-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-500 mb-8 border border-yellow-200 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-sm uppercase tracking-widest font-black text-yellow-700 mb-2">{method.title}</h3>
                                    <p className="text-lg font-bold text-slate-900 mb-4 leading-tight">{method.description}</p>
                                    {method.subtext && <p className="text-xs text-yellow-700 italic mb-6">{method.subtext}</p>}
                                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-yellow-500 group-hover:gap-4 transition-all">
                                        {method.label}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Service Section */}
            <section className="py-32 border-y border-yellow-100 bg-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-yellow-200 group">
                                        <Image src="/images/about-img2.jpg" alt="Team Work" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-3/4 rounded-3xl overflow-hidden border border-yellow-200 group">
                                        <Image src="/images/about-img3.jpg" alt="Studio" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative aspect-3/4 rounded-3xl overflow-hidden border border-yellow-200 group">
                                        <Image src="/images/about-img4.jpg" alt="Brainstorming" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-yellow-200 group">
                                        <Image src="/images/about-img5.jpg" alt="Office" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating Stats */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="bg-yellow-500 text-black p-8 rounded-4xl shadow-[0_0_50px_rgba(234,179,8,0.3)] text-center animate-pulse">
                                    <span className="block text-4xl font-black mb-1">99%</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">USA Client Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-yellow-700">
                                Why Choose <span className="italic font-serif text-orange-500">SmartSoft?</span>
                            </h2>
                            <p className="text-xl text-yellow-900 mb-12 leading-relaxed">
                                We deliver fast, secure, and scalable websites and mobile apps for USA startups and small businesses. Our content writing team ensures your brand stands out online. Partner with us for reliable service and measurable results.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Website Development", d: "Custom, responsive, and SEO-optimized sites built for your business goals." },
                                    { t: "Mobile App Development", d: "Launch your app quickly with expert design and development for iOS & Android." },
                                    { t: "Content Writing", d: "Engaging, professional content to attract and convert your target audience." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 border border-yellow-200">
                                            <span className="text-orange-500 font-bold">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-yellow-700 mb-2">{item.t}</h4>
                                            <p className="text-sm text-yellow-900">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strong CTA Section */}
            <section className="py-32 relative overflow-hidden bg-black text-white">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-2xl text-yellow-200 mb-16 max-w-2xl mx-auto">
                            Get your website or app live in days, not weeks. Contact our USA-based team for a free consultation and quote.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <a href="tel:17077084062" className="group px-12 py-8 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-500 flex items-center gap-6 shadow-xl">
                                <span className="text-xl">📞</span>
                                Call 1-707-708-4062
                            </a>
                            <a href="mailto:support@smartsoftsolutions.org" className="group px-12 py-8 bg-white text-black border border-yellow-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-6 shadow-lg">
                                <span className="text-xl">✉️</span>
                                Email Us
                            </a>
                            <a href="https://wa.me/17077084062" className="group px-12 py-8 bg-yellow-100 text-yellow-700 border border-yellow-200 font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-500 flex items-center gap-6">
                                <span className="text-xl">💬</span>
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
