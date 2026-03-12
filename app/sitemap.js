import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic';

export default async function sitemap() {
    const siteUrl = 'https://www.smartsoftsolutions.org';
    const lastModified = new Date().toISOString();

    // Static pages
    const staticPages = [
        { path: '', priority: 1.0, changefreq: 'daily' },
        { path: 'about', priority: 0.8, changefreq: 'weekly' },
        { path: 'contact', priority: 0.8, changefreq: 'weekly' },
        { path: 'projects', priority: 0.8, changefreq: 'weekly' },
        { path: 'pricing', priority: 0.8, changefreq: 'weekly' },
        { path: 'website-development-services-in-NewYork', priority: 0.8, changefreq: 'weekly' },

        { path: 'blog', priority: 0.8, changefreq: 'weekly' },
        { path: 'privacy-policy', priority: 0.6, changefreq: 'yearly' },
        { path: 'terms-of-service', priority: 0.6, changefreq: 'yearly' },
        { path: 'refund-policy', priority: 0.6, changefreq: 'yearly' },
        { path: 'cookie-policy', priority: 0.6, changefreq: 'yearly' },
        // Add favicon.ico explicitly for Google
        { path: 'favicon.ico', priority: 0.5, changefreq: 'yearly' },
    ];

    const staticUrls = staticPages.map(({ path, priority, changefreq }) => ({
        url: path === '' ? siteUrl : `${siteUrl}/${path}`,
        lastmod: lastModified,
        priority,
        changefreq,
    }));

    // Blog detail pages
    let blogUrls = [];
    try {
        const { data, error } = await supabase.from('blogs_site2').select('slug');
        if (!error && data) {
            blogUrls = data.map((blog) => ({
                url: `${siteUrl}/blog/${blog.slug}`,
                lastmod: lastModified,
                priority: 0.7,
                changefreq: 'weekly',
            }));
        }
    } catch (err) {
        console.error('Sitemap generation error:', err);
    }

    return [...staticUrls, ...blogUrls];
}
