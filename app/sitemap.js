import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
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
        // Try both possible tables just in case
        const [res1, res2] = await Promise.all([
            supabase.from('blogs_site2').select('slug, updated_at, date_posted'),
            supabase.from('blogs').select('slug, updated_at, date_posted')
        ]);

        const allBlogs = [...(res1.data || []), ...(res2.data || [])];

        if (allBlogs.length > 0) {
            blogRoutes = allBlogs.map((blog) => ({
                url: `${siteUrl}/blog/${blog.slug}`,
                lastModified: new Date(blog.updated_at || blog.date_posted || now),
                changeFrequency: 'monthly',
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Sitemap fetch error:', error);
    }

    // Deduplicate and filter out any invalid blogs
    const uniqueMap = new Map();
    [...staticRoutes, ...blogRoutes].forEach(item => {
        if (item.url && !uniqueMap.has(item.url)) {
            uniqueMap.set(item.url, item);
        }
    });

    return Array.from(uniqueMap.values());
}
