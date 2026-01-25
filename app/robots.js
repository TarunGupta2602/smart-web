export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
        ],
        sitemap: 'https://www.smartsoftsolutions.org/sitemap.xml',
    }
}
