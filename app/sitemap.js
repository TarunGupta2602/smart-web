import { supabase } from "@/lib/supabaseClient";
import { INDIA_CITIES, cityPath } from "@/lib/india-cities";

export const dynamic = "force-dynamic";

export default async function sitemap() {
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
    { path: "projects", priority: 0.85, changeFrequency: "monthly" },
    { path: "about", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "blog", priority: 0.8, changeFrequency: "daily" },
    { path: "privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "terms-of-service", priority: 0.3, changeFrequency: "yearly" },
    { path: "refund-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticUrls = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: path === "" ? siteUrl : `${siteUrl}/${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const cityUrls = INDIA_CITIES.map((city) => ({
    url: `${siteUrl}${cityPath(city.slug)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  let blogUrls = [];
  try {
    const { data, error } = await supabase
      .from("blogs_site2")
      .select("slug, date_posted, updated_at");
    if (!error && data) {
      blogUrls = data.map((blog) => ({
        url: `${siteUrl}/blog/${blog.slug}`,
        lastModified: blog.updated_at || blog.date_posted || lastModified,
        changeFrequency: "weekly",
        priority: 0.65,
      }));
    }
  } catch (err) {
    console.error("Sitemap generation error:", err);
  }

  return [...staticUrls, ...cityUrls, ...blogUrls];
}
