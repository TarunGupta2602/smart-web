"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import PageHero from "../components/page-hero";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";
import { CONTACT_WHATSAPP_URL, FACEBOOK_URL, GOOGLE_BUSINESS_URL } from "@/lib/seo";
import { leadLooksLikeSpam, trackLead, trackWhatsApp } from "@/lib/lead";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi Tarun, I need a website quote."
)}`;

const contactMethods = [
  {
    title: "Phone / WhatsApp",
    description: "+91 74560 96455",
    subtext: "Mon–Fri business hours · fastest reply on WhatsApp",
    link: WHATSAPP_HREF,
    track: "contact_page",
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
    subtext: "Uttar Pradesh 201002 · View on Google",
    link: GOOGLE_BUSINESS_URL,
  },
  {
    title: "Google Business Profile",
    description: "Smartsoft Solutions on Google",
    subtext: "Reviews, hours, and directions",
    link: GOOGLE_BUSINESS_URL,
  },
  {
    title: "Facebook",
    description: "Smartsoft Solutions on Facebook",
    subtext: "Follow updates and reach us on Facebook",
    link: FACEBOOK_URL,
  },
];

export default function ContactContent({ initialService = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: initialService ? `I need help with: ${initialService}\n\n` : "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    if (!form.name || !form.email || !form.message) {
      setError("Name, email, and project details are required.");
      setLoading(false);
      return;
    }
    const spam = leadLooksLikeSpam(form);
    if (spam) {
      setError(spam);
      setLoading(false);
      return;
    }
    try {
      const service = initialService?.trim() || "Business website";
      const { error: supabaseError } = await supabase.from("contact_inquiries").insert([
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: "",
          service,
          message: form.message.trim(),
        },
      ]);
      if (supabaseError) {
        setError("Submission failed. WhatsApp us instead — we reply the same day.");
      } else {
        trackLead("contact_form");
        setSuccess("Thank you. We will follow up within two business days with next steps.");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setError("Submission failed. WhatsApp us instead — we reply the same day.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white text-slate-900">
      <PageHero
        compact
        eyebrow="Contact"
        title="Tell us what you need. We’ll send a clear quote."
        description="Three fields only — name, email, and project details. Prefer chat? WhatsApp Tarun on +91 74560 96455."
        videoSrc={PAGE_VIDEOS.window}
        posterSrc={PAGE_POSTERS.window}
        objectPosition="object-[34%_center]"
        primaryCta={{ href: "/contact#contact-form", label: "Send project details" }}
        secondaryCta={{ href: "/get-a-quote", label: "Get a Free Quote" }}
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
                        rel={
                          method.link.startsWith("http")
                            ? method.link.includes("facebook.com")
                              ? "me noopener noreferrer"
                              : "noopener noreferrer"
                            : undefined
                        }
                        onClick={method.track ? () => trackWhatsApp(method.track) : undefined}
                        className="text-sm font-medium text-slate-900 hover:text-[#0f3d68]"
                      >
                        {method.description}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">{method.subtext}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Typical reply: scope, timeline, and a fixed project price within two business days.
                </p>
                <Link href="/get-a-quote" className="link-shift text-sm font-medium text-[#0f3d68]">
                  Prefer the short quote form? <span className="shift-icon">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={2}>
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-200 p-6 md:p-8 space-y-5 bg-slate-50/40 shadow-sm scroll-mt-24"
              >
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="name">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="message">
                    Project details *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400 resize-y"
                    placeholder="What do you need — a business site, store, or web app? City and timeline help."
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-green-700">{success}</p>}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="press px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] disabled:opacity-60 text-white text-sm font-medium"
                  >
                    {loading ? "Sending…" : "Get a Free Quote"}
                  </button>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp("contact_form")}
                    className="press px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:border-slate-400"
                  >
                    WhatsApp instead
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedLinks excludeHref="/contact" />
    </div>
  );
}
