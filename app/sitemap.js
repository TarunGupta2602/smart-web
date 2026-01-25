import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap() {
    const siteUrl = 'https://www.smartsoftsolutions.org';
    const now = new Date();

    const staticRoutes = [
        { url: siteUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
        { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ];

    let blogRoutes = [];
    try {
        const { data: blogs } = await supabase
            .from('blogs_site2')
            .select('slug, updated_at, date_posted')
            .order('date_posted', { ascending: false });

        if (blogs && blogs.length > 0) {
            blogRoutes = blogs.map((blog) => ({
                url: `${siteUrl}/blog/${blog.slug}`,
                lastModified: new Date(blog.updated_at || blog.date_posted || now),
                changeFrequency: 'monthly',
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Sitemap blog fetch error:', error);
    }

    return [...staticRoutes, ...blogRoutes];
}
