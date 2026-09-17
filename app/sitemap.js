import { INDIA_CITIES, cityPath } from "@/lib/india-cities";
import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const siteUrl = "https://www.smartsoftsolutions.org";
  const lastModified = new Date();

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "services", priority: 0.95, changeFrequency: "weekly" },
    { path: "services/website-designing", priority: 0.9, changeFrequency: "weekly" },
    { path: "services/digital-marketing", priority: 0.85, changeFrequency: "weekly" },
    { path: "services/seo", priority: 0.85, changeFrequency: "weekly" },
    { path: "website-development-company-in", priority: 0.9, changeFrequency: "weekly" },
    { path: "pricing", priority: 0.85, changeFrequency: "monthly" },
    { path: "projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "about", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "blog", priority: 0.9, changeFrequency: "weekly" },
    { path: "privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "terms-of-service", priority: 0.3, changeFrequency: "yearly" },
    { path: "refund-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticUrls = staticPages.map(({ path, priority, changeFrequency }) => {
    const url = path === "" ? siteUrl : `${siteUrl}/${path}`;
    const entry = {
      url,
      lastModified,
      changeFrequency,
      priority,
    };

    if (path === "") {
      entry.videos = [
        {
          title: "SmartSoft Solutions — We build websites",
          thumbnail_loc: `${siteUrl}/videos/smartsoft-reel-poster.jpg`,
          description:
            "A 7-second look at SmartSoft Solutions: business websites, e-commerce stores, and web apps. Need a website? Get a fixed quote.",
          content_loc: `${siteUrl}/videos/smartsoft-reel.mp4`,
          player_loc: siteUrl,
          duration: 7,
          publication_date: "2026-09-17",
          family_friendly: "yes",
          live: "no",
          tag: "website development",
        },
      ];
    }

    return entry;
  });

  const cityUrls = INDIA_CITIES.map((city) => ({
    url: `${siteUrl}${cityPath(city.slug)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogUrls = getAllPosts().map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: blog.updated_at || blog.date_posted || lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticUrls, ...cityUrls, ...blogUrls];
}
