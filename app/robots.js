export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
        ],
        sitemap: 'https://smartsoftsolutions.org/sitemap.xml',
    }
}
