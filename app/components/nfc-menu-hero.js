"use client";

import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import NfcReelPlayer from "./nfc-reel-player";
import { NFC_PROMO } from "@/lib/page-media";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I want the NFC + QR digital menu pilot for my restaurant."
)}`;

export default function NfcMenuHero({ breadcrumbs }) {
  return (
    <section className="relative overflow-hidden bg-[#081220] text-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#0f3d68]/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-24 pb-14 md:pt-28 md:pb-20">
        {breadcrumbs?.length > 0 && (
          <div className="mb-8">
            <Breadcrumb items={breadcrumbs} variant="light" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-200 mb-5">
              <span className="rounded-full bg-white text-[#0f3d68] px-2 py-0.5">Free pilot</span>
              NFC + QR table ordering · India
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight leading-[1.08] mb-5">
              NFC QR digital menu for restaurants — tap, order, serve.
            </h1>
            <p className="max-w-xl text-base md:text-lg text-slate-200/90 leading-relaxed mb-8">
              Each table gets an NFC card with a QR backup. Guests open a live menu on their phone — no app —
              add dishes to cart, and send the order. Your dashboard shows the table number, items, and status.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact?service=NFC%20digital%20menu"
                className="inline-flex px-6 py-3 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                Apply for a free pilot
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                WhatsApp us
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <li>No guest app</li>
              <li>Unique table link</li>
              <li>Live kitchen board</li>
              <li>1–2 restaurants, free</li>
            </ul>
          </div>

          <div id="nfc-reel" className="lg:col-span-5 order-1 lg:order-2 scroll-mt-24">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />
              <NfcReelPlayer src={NFC_PROMO.src} poster={NFC_PROMO.poster} title={NFC_PROMO.title} />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Silent 29-second walkthrough · tap, menu, cart, dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
