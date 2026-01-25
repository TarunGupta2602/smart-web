import { supabase } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

export async function GET() {
    const baseUrl = 'https://www.smartsoftsolutions.org'

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
        priority: route === '' ? '1.0' : '0.8',
    }))

    // Dynamic blog routes from Supabase
    let blogRoutes = []
    try {
        const { data: blogs } = await supabase
            .from('blogs_site2')
            .select('slug, updated_at, date_posted')
            .order('date_posted', { ascending: false })

        if (blogs) {
            blogRoutes = blogs.map((blog) => ({
                url: `${baseUrl}/blog/${blog.slug}`,
                lastModified: new Date(blog.updated_at || blog.date_posted || new Date()).toISOString().split('T')[0],
                changeFrequency: 'monthly',
                priority: '0.6',
            }))
        }
    } catch (error) {
        console.error('Sitemap dynamic fetch failed:', error)
    }

    const allRoutes = [...staticRoutes, ...blogRoutes]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
            .map((route) => `
    <url>
        <loc>${route.url}</loc>
        <lastmod>${route.lastmod}</lastmod>
        <changefreq>${route.changeFrequency}</changefreq>
        <priority>${route.priority}</priority>
    </url>`)
            .join('')}
</urlset>`

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
        },
    })
}
