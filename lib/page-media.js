/**
 * Shared remote media for page heroes (lighter Pexels + Unsplash posters).
 * Prefer 720p/SD over 1080p so heroes do not block first paint.
 */

export const PAGE_VIDEOS = {
  workspace:
    "https://videos.pexels.com/video-files/6774633/6774633-hd_1280_720_30fps.mp4",
  typing:
    "https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4",
  screens:
    "https://videos.pexels.com/video-files/3209298/3209298-sd_640_360_25fps.mp4",
  office:
    "https://videos.pexels.com/video-files/3141207/3141207-sd_640_360_25fps.mp4",
  meeting:
    "https://videos.pexels.com/video-files/3045163/3045163-sd_640_360_25fps.mp4",
};

export const PAGE_POSTERS = {
  code: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=70",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=70",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70",
  laptop: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=70",
  shop: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=70",
  city: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=70",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70",
};

export const CTA_IMAGE =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=70";

/** NFC + QR restaurant ordering storyboard (tap, menu, cart, dashboard, pilot). */
export const NFC_STORYBOARD = {
  src: "/nfc/nfc-qr-ordering-storyboard.png",
  width: 959,
  height: 1024,
  alt: "SmartSoft NFC and QR restaurant ordering: tap or scan, digital menu, cart, table identification, staff dashboard, order status, and a free restaurant pilot",
};

/** 9:16 NFC + QR product reel — play in a phone frame, never crop into 16:9. */
export const NFC_PROMO = {
  src: "/videos/nfc-qr-promo.mp4",
  poster: "/videos/nfc-qr-promo-poster.jpg",
  durationSeconds: 29,
  durationIso: "PT29S",
  width: 720,
  height: 1280,
  title: "SmartSoft NFC + QR restaurant ordering",
  description:
    "Tap an NFC card or scan a QR code to open a live restaurant menu, add items to cart, and send the order to a staff dashboard with the table number. No guest app.",
};

/** Branded 9:16 promo reel — keep in a phone frame, never crop into a 16:9 hero. */
export const SHOWREEL = {
  src: "/videos/smartsoft-reel.mp4",
  poster: "/videos/smartsoft-reel-poster.jpg",
  durationSeconds: 7,
  durationIso: "PT7S",
  width: 720,
  height: 1280,
  title: "SmartSoft Solutions — We build websites",
  description:
    "A 7-second look at SmartSoft Solutions: we build business websites, e-commerce stores, and web apps. Need a website? Get a fixed quote.",
};

/** Paths that use a full-bleed dark video hero (transparent nav + no spacer). */
export function hasVideoHero(pathname = "/") {
  if (!pathname) return false;
  if (pathname === "/") return true;
  const prefixes = [
    "/about",
    "/contact",
    "/pricing",
    "/projects",
    "/services",
    "/blog",
    "/free-website-audit",
    "/website-development-company-in",
  ];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
