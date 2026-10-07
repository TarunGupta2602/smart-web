"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";
import { leadLooksLikeSpam, trackLead } from "@/lib/lead";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I need a website quote. My city is "
)}`;

export default function QuoteForm({ service = "Business website" }) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.message.trim()) {
      setError("Name, phone, city, and what you need are required.");
      return;
    }
    const spam = leadLooksLikeSpam(form);
    if (spam) {
      setError(spam);
      return;
    }
    setLoading(true);
    const message = `City: ${form.city.trim()}\n\n${form.message.trim()}`;
    try {
      const { error: supabaseError } = await supabase.from("contact_inquiries").insert([
        {
          name: form.name.trim(),
          email: form.email.trim() || "not-provided@smartsoftsolutions.org",
          phone: form.phone.trim(),
          service,
          message,
        },
      ]);
      if (supabaseError) {
        setError("Could not send that. WhatsApp us instead — we reply the same day.");
      } else {
        trackLead("quote_form");
        setSuccess("Received. Tarun will reply on WhatsApp or phone with scope and a fixed price.");
        setForm({ name: "", phone: "", city: "", email: "", message: "" });
      }
    } catch {
      setError("Could not send that. WhatsApp us instead — we reply the same day.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-800">Name</span>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-800">Phone / WhatsApp</span>
          <input name="phone" value={form.phone} onChange={handleChange} required inputMode="tel" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-800">City</span>
          <input name="city" value={form.city} onChange={handleChange} required placeholder="Ghaziabad, Noida, Delhi…" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-800">Email <span className="font-normal text-slate-400">(optional)</span></span>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-slate-800">What do you need?</span>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="A clinic site, a jewellery store, a 5-page business site…" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900" />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {success ? <p className="text-sm text-[#0f3d68]">{success}</p> : null}
      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={loading} className="press rounded-md bg-[#0f3d68] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a2f52] disabled:opacity-60">
          {loading ? "Sending…" : "Send for a fixed quote"}
        </button>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead("whatsapp")}
          className="press rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400"
        >
          WhatsApp Tarun
        </a>
      </div>
    </form>
  );
}
