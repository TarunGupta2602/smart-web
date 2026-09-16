"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import PageHero from "../components/page-hero";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

const contactMethods = [
    {
        title: "Phone / WhatsApp",
        description: "+91 74560 96455",
        subtext: "Primary India line · Mon–Fri business hours",
        link: "tel:+917456096455",
    },
    {
        title: "Email",
        description: "smartsoft.solutions0@gmail.com",
        subtext: "We reply within two business days",
        link: "mailto:smartsoft.solutions0@gmail.com",
    },
    {
        title: "Address",
        description: "SK2 Shastri Nagar, Ghaziabad",
        subtext: "Uttar Pradesh 201002 · Google Business Profile",
        link: "https://www.google.com/maps/search/?api=1&query=SK2+Shastri+Nagar+Ghaziabad+Uttar+Pradesh+201002",
    },
    
        
];

export default function ContactContent() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Business Website", message: "" });
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
                setSuccess("Thank you. We will follow up within two business days with next steps.");
                setForm({ name: "", email: "", phone: "", service: "Business Website", message: "" });
            }
        } catch {
            setError("Submission failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="bg-white text-slate-900">
            <PageHero
                compact
                eyebrow="Contact"
                title="Tell us what you need. We’ll send a clear quote."
                description="Share a short brief — goals, timeline, and budget range. No obligation."
                videoSrc={PAGE_VIDEOS.meeting}
                posterSrc={PAGE_POSTERS.laptop}
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Contact", url: "/contact" },
                ]}
            />

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <Reveal className="lg:col-span-4 space-y-8">
                            <div>
                                <h2 className="font-display text-xl font-semibold text-slate-900 mb-4">Reach us directly</h2>
                                <ul className="space-y-5">
                                    {contactMethods.map((method) => (
                                        <li key={method.title}>
                                            <p className="text-xs text-slate-400 mb-1">{method.title}</p>
                                            <a
                                                href={method.link}
                                                target={method.link.startsWith("http") ? "_blank" : undefined}
                                                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-sm font-medium text-slate-900 hover:text-[#0f3d68]"
                                            >
                                                {method.description}
                                            </a>
                                            <p className="text-xs text-slate-500 mt-0.5">{method.subtext}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Typical reply: scope, timeline, and a fixed project price within two business days.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal className="lg:col-span-8" delay={2}>
                            <form onSubmit={handleSubmit} className="border border-slate-200 p-6 md:p-8 space-y-5 bg-slate-50/40">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="name">Full name *</label>
                                        <input
                                            type="text" name="name" id="name" value={form.name} onChange={handleChange} required
                                            className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="email">Email *</label>
                                        <input
                                            type="email" name="email" id="email" value={form.email} onChange={handleChange} required
                                            className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="phone">Phone</label>
                                        <input
                                            type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange}
                                            className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                                            placeholder="+1 ..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="service">Service needed *</label>
                                        <select
                                            name="service" id="service" value={form.service} onChange={handleChange} required
                                            className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:border-slate-400 bg-white"
                                        >
                                            <option value="Business Website">Business website</option>
                                            <option value="E-commerce Store">E-commerce store</option>
                                            <option value="Custom Web App">Custom web app</option>
                                            <option value="Digital Marketing">Digital marketing</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="message">Project brief *</label>
                                    <textarea
                                        name="message" id="message" value={form.message} onChange={handleChange} required rows={5}
                                        className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400 resize-y"
                                        placeholder="What do you need, when do you need it, and what budget range are you considering?"
                                    />
                                </div>

                                {error && <p className="text-sm text-red-600">{error}</p>}
                                {success && <p className="text-sm text-green-700">{success}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] disabled:opacity-60 text-white text-sm font-medium transition-colors"
                                >
                                    {loading ? "Sending…" : "Send quote request"}
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </section>

            <RelatedLinks excludeHref="/contact" />
        </div>
    );
}
