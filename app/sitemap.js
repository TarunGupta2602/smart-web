import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic'; // Ensures fresh generation on each request

export default async function sitemap() {
    const siteUrl = 'https://www.smartsoftsolutions.org';
    const lastModified = new Date();

    // ---------- STATIC PAGES ----------
    const staticPages = [
        { path: '', priority: 1.0, changefreq: 'daily' },
        { path: 'about', priority: 0.8, changefreq: 'weekly' },
        { path: 'contact', priority: 0.8, changefreq: 'weekly' },
        { path: 'projects', priority: 0.8, changefreq: 'weekly' },
        { path: 'pricing', priority: 0.8, changefreq: 'weekly' },
        { path: 'portfolio', priority: 0.8, changefreq: 'weekly' },
        { path: 'blog', priority: 0.8, changefreq: 'weekly' },
    ];

    const staticUrls = staticPages.map(({ path, priority, changefreq }) => ({
        url: path === '' ? siteUrl : `${siteUrl}/${path}`,
        lastModified: lastModified,
        priority,
        changeFrequency: changefreq,
    }));

    // ---------- BLOG DETAIL PAGES ----------
    let blogUrls = [];
    try {
        const { data, error } = await supabase
            .from('blogs_site2')
            .select('slug, updated_at, date_posted');

        if (error) {
            console.error('Supabase error:', error);
        } else if (data) {
            blogUrls = data.map((blog) => ({
                url: `${siteUrl}/blog/${blog.slug}`,
                lastModified: new Date(blog.updated_at || blog.date_posted || lastModified),
                priority: 0.7,
                changeFrequency: 'monthly',
            }));
        }
    } catch (err) {
        console.error('Sitemap generation error:', err);
    }

    return [...staticUrls, ...blogUrls];
}
