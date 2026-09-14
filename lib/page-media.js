/**
 * Shared remote media for page heroes (Pexels video + Unsplash posters).
 */

export const PAGE_VIDEOS = {
  workspace:
    "https://videos.pexels.com/video-files/6774633/6774633-hd_1920_1080_30fps.mp4",
  typing:
    "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
  screens:
    "https://videos.pexels.com/video-files/3209298/3209298-hd_1920_1080_25fps.mp4",
  office:
    "https://videos.pexels.com/video-files/3141207/3141207-hd_1920_1080_25fps.mp4",
  meeting:
    "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4",
};

export const PAGE_POSTERS = {
  code: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
  laptop: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80",
  shop: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80",
  city: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
};

export const CTA_IMAGE =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80";

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
    "/website-development-company-in",
  ];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
