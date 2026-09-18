import Link from "next/link";
import NfcReelPlayer from "./nfc-reel-player";
import Reveal from "./reveal";
import { NFC_PROMO } from "@/lib/page-media";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I want the NFC + QR digital menu pilot for my restaurant."
)}`;

export default function NfcHomeBand() {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f3d68] mb-4">
              <span className="rounded-full bg-[#0f3d68] text-white px-2 py-0.5">New</span>
              For restaurants &amp; cafes
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              NFC QR digital menu — tap, order, kitchen sees the table.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              A complete table-ordering system, not a PDF behind a sticker. Guests tap NFC or scan QR,
              order from the live menu, and your dashboard shows table number, items, and status. No guest app.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 mb-8 max-w-lg">
              {["NFC tap + QR backup", "Live menu & cart", "Unique link per table", "Free 1–2 restaurant pilot"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0f3d68] shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/nfc-digital-menu"
                className="inline-flex px-6 py-3 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-semibold transition-colors"
              >
                See the NFC menu
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:border-slate-400 transition-colors"
              >
                WhatsApp the pilot
              </a>
            </div>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#081220] px-6 py-8 sm:px-10 sm:py-10">
              <NfcReelPlayer
                src={NFC_PROMO.src}
                poster={NFC_PROMO.poster}
                title={NFC_PROMO.title}
                className="max-w-[220px] sm:max-w-[240px]"
              />
              <p className="mt-4 text-center text-xs text-slate-400">29-second walkthrough · no guest app</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
