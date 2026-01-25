import { supabase } from '@/lib/supabaseClient'

export default async function sitemap() {
    const baseUrl = 'https://smartsoftsolutions.org'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/pricing',
        '/portfolio',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Dynamic blog routes from Supabase
    try {
        const { data: blogs, error } = await supabase
            .from('blogs_site2')
            .select('slug, updated_at, date_posted')
            .order('date_posted', { ascending: false })

        if (error) throw error

        const blogRoutes = (blogs || []).map((blog) => ({
            url: `${baseUrl}/blog/${blog.slug}`,
            lastModified: new Date(blog.updated_at || blog.date_posted || new Date()).toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.6,
        }))

        return [...staticRoutes, ...blogRoutes]
    } catch (error) {
        console.error('Sitemap dynamic fetch failed:', error)
        return staticRoutes
    }
}
