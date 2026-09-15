import { SITE_NAME, SITE_URL } from "@/lib/seo";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "SmartSoft",
    description:
      "Website development company for business sites, e-commerce stores, and web apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f3d68",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
