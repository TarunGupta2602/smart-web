"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import PageHero from "../components/page-hero";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

const REVIEW_STEPS = [
  {
    step: "01",
    title: "Send the live URL",
    text: "Share your current site and what feels off — slow pages, unclear offers, weak enquiry path, or missing local SEO.",
  },
  {
    step: "02",
    title: "We review the real pages",
    text: "We open the homepage and one inner page on mobile: titles, speed, trust, and whether a visitor can actually contact or buy.",
  },
  {
    step: "03",
    title: "Written notes, no pitch deck",
    text: "You get practical notes by email within two business days. If a rebuild is the right next step, we can follow with a fixed quote.",
  },
];

export default function AuditContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
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
    if (!form.name || !form.email || !form.website) {
      setError("Please add your name, email, and website URL.");
      setLoading(false);
      return;
    }
    const notes = form.message.trim()
      ? form.message.trim()
      : "Please review the live site and send written notes.";
    const message = `Website URL: ${form.website.trim()}\n\n${notes}`;
    try {
      const { error: supabaseError } = await supabase.from("contact_inquiries").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: "Free website audit",
          message,
        },
      ]);
      if (supabaseError) {
        setError("Submission failed. Please try again.");
      } else {
        setSuccess("Thank you. We will email a written review within two business days.");
        setForm({ name: "", email: "", phone: "", website: "", message: "" });
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
        eyebrow="Free website review"
        title="Get a written look at your live site before you hire anyone."
        description="No quote required. We review speed, mobile clarity, offers, and the enquiry path — then email notes you can use even if you never work with us."
        videoSrc={PAGE_VIDEOS.meeting}
        posterSrc={PAGE_POSTERS.laptop}
        primaryCta={{ href: "/free-website-audit#audit-form", label: "Request the review" }}
        secondaryCta={{ href: "/projects", label: "See client work" }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free website review", url: "/free-website-audit" },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                  What the review covers
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  This is a founder-led pass on your live pages — not a 40-point slide deck and not a sales call trap.
                </p>
                <div className="space-y-6">
                  {REVIEW_STEPS.map((item) => (
                    <div key={item.step}>
                      <p className="text-xs font-medium text-[#0f3d68] mb-1">{item.step}</p>
                      <h3 className="font-display text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Prefer a build quote instead? Use{" "}
                  <a href="/contact" className="text-[#0f3d68] font-medium hover:underline">
                    contact
                  </a>{" "}
                  or WhatsApp{" "}
                  <a href="https://wa.me/917456096455" className="text-[#0f3d68] font-medium hover:underline">
                    +91 74560 96455
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={2}>
              <form
                id="audit-form"
                onSubmit={handleSubmit}
                className="border border-slate-200 p-6 md:p-8 space-y-5 bg-slate-50/40 scroll-mt-24"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="name">
                      Full name *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                      placeholder="+91 …"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="website">
                      Live website URL *
                    </label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      value={form.website}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400"
                      placeholder="https://yourbusiness.in"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5" htmlFor="message">
                    What should we look at?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-400 resize-y"
                    placeholder="Speed, mobile layout, missing leads, Google listings, checkout, or anything else that is not working."
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-green-700">{success}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] disabled:opacity-60 text-white text-sm font-medium transition-colors"
                >
                  {loading ? "Sending…" : "Request free review"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedLinks excludeHref="/free-website-audit" />
    </div>
  );
}
