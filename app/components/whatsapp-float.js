"use client";

import { usePathname } from "next/navigation";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";
import { trackWhatsApp } from "@/lib/lead";

const DEFAULT_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi Tarun, I need a website quote."
)}`;

export default function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/private") || pathname.startsWith("/services/nfc-digital-menu")) {
    return null;
  }

  return (
    <a
      href={DEFAULT_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("float")}
      aria-label="Chat on WhatsApp"
      className="press fixed bottom-5 right-4 z-40 inline-flex items-center rounded-full bg-[#128C7E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0f7a6e] md:bottom-6 md:right-6"
    >
      WhatsApp
    </a>
  );
}
