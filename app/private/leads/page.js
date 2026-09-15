"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const { data, error: qError } = await supabase
          .from("contact_inquiries")
          .select("*")
          .order("created_at", { ascending: false });

        if (qError) {
          // Fallback if created_at column name differs
          const retry = await supabase
            .from("contact_inquiries")
            .select("*")
            .order("id", { ascending: false });
          if (retry.error) throw retry.error;
          if (!cancelled) setLeads(retry.data || []);
        } else if (!cancelled) {
          setLeads(data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Could not load leads.");
          setLeads([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (value) => {
    if (!value) return "—";
    try {
      return new Date(value).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return String(value);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Private</p>
            <h1 className="font-display text-2xl md:text-3xl font-semibold">Contact leads</h1>
            <p className="text-sm text-slate-500 mt-1">
              From <code className="text-xs bg-slate-200 px-1 rounded">contact_inquiries</code> · newest first
            </p>
          </div>
          <p className="text-sm text-slate-500">{loading ? "Loading…" : `${leads.length} lead${leads.length === 1 ? "" : "s"}`}</p>
        </div>

        {error ? (
          <div className="border border-red-200 bg-red-50 text-red-700 text-sm px-4 py-3 mb-6">
            {error}
          </div>
        ) : null}

        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full text-sm text-left min-w-[720px]">
            <thead className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-3 py-3 font-medium">When</th>
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">Email</th>
                <th className="px-3 py-3 font-medium">Phone</th>
                <th className="px-3 py-3 font-medium">Service</th>
                <th className="px-3 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-slate-400">
                    Loading leads…
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-slate-400">
                    No leads yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id || `${lead.email}-${lead.created_at}`} className="border-t border-slate-100 align-top">
                    <td className="px-3 py-3 whitespace-nowrap text-slate-500">
                      {formatDate(lead.created_at || lead.inserted_at || lead.date)}
                    </td>
                    <td className="px-3 py-3 font-medium text-slate-900">{lead.name || "—"}</td>
                    <td className="px-3 py-3">
                      {lead.email ? (
                        <a href={`mailto:${lead.email}`} className="text-[#0f3d68] hover:underline">
                          {lead.email}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      {lead.phone ? (
                        <a href={`tel:${lead.phone}`} className="text-[#0f3d68] hover:underline">
                          {lead.phone}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-3 text-slate-700">{lead.service || "—"}</td>
                    <td className="px-3 py-3 text-slate-600 max-w-sm whitespace-pre-wrap">{lead.message || "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
