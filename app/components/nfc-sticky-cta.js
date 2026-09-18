"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I want the NFC + QR digital menu pilot for my restaurant."
)}`;

export default function NfcStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-30 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-3 transition-transform duration-200 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <Link
          href="/contact?service=NFC%20digital%20menu"
          className="flex-1 inline-flex items-center justify-center py-3 rounded-md bg-[#0f3d68] text-white text-sm font-semibold"
        >
          Free pilot
        </Link>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center py-3 rounded-md border border-slate-300 text-slate-800 text-sm font-medium"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
