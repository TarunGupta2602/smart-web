import { supabase } from '@/lib/supabaseClient'

export default async function sitemap() {
    const baseUrl = 'https://www.smartsoftsolutions.org'

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/pricing',
        '/portfolio',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog routes
    try {
        const { data: blogs } = await supabase
            .from('blogs_site2')
            .select('slug, updated_at, date_posted')

        const blogRoutes = (blogs || []).map((blog) => ({
            url: `${baseUrl}/blog/${blog.slug}`,
            lastModified: blog.updated_at || blog.date_posted || new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
        }))

        return [...routes, ...blogRoutes]
    } catch (error) {
        console.error('Sitemap generation error:', error)
        return routes
    }
}
