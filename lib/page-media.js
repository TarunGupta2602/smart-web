/**
 * Shared remote media for page heroes (lighter Pexels + Unsplash posters).
 * Prefer 720p/SD over 1080p so heroes do not block first paint.
 */

/** Homepage hero — bright desk, person on the right so the headline stays clear. */
export const HERO_MEDIA = {
  src: "https://videos.pexels.com/video-files/8266163/8266163-hd_1280_720_25fps.mp4",
  poster: "/videos/hero-bright.jpg",
};

/** 720p clips. Each marketing page uses a different one. Posters are a frame from that file. */
const clip = (id, fps) =>
  `https://videos.pexels.com/video-files/${id}/${id}-hd_1280_720_${fps}fps.mp4`;

const STUDIO_VIDEO = clip(7792333, 25);
const HUDDLE_VIDEO = clip(6563909, 25);
const TEAM_VIDEO = clip(6774633, 30);
const ORDERS_VIDEO = clip(7855146, 25);
const CAFE_VIDEO = clip(6828724, 25);
const DESK_VIDEO = clip(9198469, 25);
const BRIEF_VIDEO = clip(3205624, 25);
const WINDOW_VIDEO = clip(3044273, 24);
const COFFEE_VIDEO = clip(5977266, 25);
const DINING_VIDEO = clip(10767767, 24);

export const PAGE_VIDEOS = {
  studio: STUDIO_VIDEO,
  huddle: HUDDLE_VIDEO,
  team: TEAM_VIDEO,
  orders: ORDERS_VIDEO,
  cafe: CAFE_VIDEO,
  desk: DESK_VIDEO,
  brief: BRIEF_VIDEO,
  window: WINDOW_VIDEO,
  coffee: COFFEE_VIDEO,
  dining: DINING_VIDEO,
  workspace: TEAM_VIDEO,
  typing: DESK_VIDEO,
  screens: ORDERS_VIDEO,
  office: HUDDLE_VIDEO,
  meeting: CAFE_VIDEO,
};

export const PAGE_POSTERS = {
  workspace: "/videos/hero-team.jpg",
  team: "/videos/hero-team.jpg",
  studio: "/videos/hero-studio.jpg",
  huddle: "/videos/hero-huddle.jpg",
  orders: "/videos/hero-orders.jpg",
  cafe: "/videos/hero-cafe.jpg",
  desk: "/videos/hero-desk.jpg",
  brief: "/videos/hero-brief.jpg",
  window: "/videos/hero-window.jpg",
  coffee: "/videos/hero-coffee.jpg",
  dining: "/videos/hero-dining.jpg",
  code: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=70",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=70",
  laptop: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=70",
  shop: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=70",
  city: "/videos/hero-dining.jpg",
  design: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=70",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
  workshop: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=70",
};

export const CTA_IMAGE = "/videos/hero-studio.jpg";

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
