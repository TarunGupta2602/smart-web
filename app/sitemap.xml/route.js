import { supabase } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

export async function GET() {
    const baseUrl = 'https://www.smartsoftsolutions.org'

    // Define static routes outside try block to use as fallback
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/pricing',
        '/portfolio',
        '/blog',
    ]

    try {
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
        } catch (innerError) {
            console.error('Sitemap dynamic content fetch failed:', innerError)
        }

        const allRoutes = [
            ...staticRoutes.map((route) => ({
                url: `${baseUrl}${route}`,
                lastModified: new Date().toISOString().split('T')[0],
                changeFrequency: 'weekly',
                priority: route === '' ? '1.0' : '0.8',
            })),
            ...blogRoutes
        ]

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
</urlset>`.trim()

        return new Response(sitemap, {
            headers: {
                'Content-Type': 'text/xml',
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
            },
        })
    } catch (outerError) {
        console.error('Sitemap generation failed completely:', outerError)
        const fallbackSitemap = '<?xml version="1.0" encoding="UTF-8"?>' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
            '<url><loc>' + baseUrl + '</loc>' +
            '<lastmod>' + new Date().toISOString().split('T')[0] + '</lastmod>' +
            '<changefreq>daily</changefreq><priority>1.0</priority></url>' +
            '</urlset>';
        return new Response(fallbackSitemap, {
            headers: { 'Content-Type': 'text/xml' },
        })
    }
}
