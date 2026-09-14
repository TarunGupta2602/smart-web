import { Suspense, cache } from 'react';
import { supabase } from '@/lib/supabaseClient';
import BlogListClient from '../components/BlogListClient';
import Pagination from '../components/Pagination';
import PageHero from '../components/page-hero';
import PageCta from '../components/page-cta';
import { breadcrumbList, stringifySchema } from '@/lib/schema';
import { PAGE_VIDEOS, PAGE_POSTERS } from '@/lib/page-media';

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const revalidate = 1800;

export const metadata = {
    title: 'Insights Blog | SmartSoft Solutions',
    description: 'Guides on website development, e-commerce, SEO, and digital growth for businesses hiring a development partner.',
    keywords: [
        'website development tips', 'e-commerce guides', 'SEO blog',
        'Next.js tips', 'digital marketing', 'web app development',
        'SmartSoft Solutions blog',
    ],
    openGraph: {
        title: 'Insights Blog | SmartSoft Solutions',
        description: 'Guides on websites, e-commerce, SEO, and digital growth.',
        type: 'website',
        url: `${SITE_URL}/blog`,
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insights Blog | SmartSoft Solutions',
        description: 'Guides on websites, e-commerce, SEO, and digital growth.',
        images: ['/og-image.jpg'],
    },
    alternates: { canonical: `${SITE_URL}/blog` },
};

const getBlogs = cache(async (page = 1, limit = 12) => {
    try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;
        const { data, count, error } = await supabase
            .from('blogs_site2')
            .select('id, title, slug, description, image, date_posted, author', { count: 'exact' })
            .order('date_posted', { ascending: false })
            .range(from, to);
        if (error) {
            console.error('Supabase blogs error:', error.message || error.code || JSON.stringify(error));
            return { data: [], count: 0 };
        }
        return { data: data || [], count: count || 0 };
    } catch (err) {
        console.error('Unexpected error fetching blogs:', err);
        return { data: [], count: 0 };
    }
});

export default async function BlogPage(props) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams?.page) || 1;
    const limit = 12;

    const { data: blogs, count } = await getBlogs(page, limit);
    const totalPages = Math.ceil(count / limit);

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Blog', url: `${SITE_URL}/blog` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }} />

            <PageHero
                compact
                eyebrow="Blog"
                title="Practical notes on websites, stores, and growth"
                description="Guides on web development, e-commerce, SEO, and hiring a digital partner — written for business owners."
                videoSrc={PAGE_VIDEOS.typing}
                posterSrc={PAGE_POSTERS.code}
                breadcrumbs={breadcrumbItems}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14">
                <div className="flex flex-wrap gap-2 mb-10">
                    {["All posts", "Websites", "E-commerce", "SEO", "Web apps", "Marketing"].map((tag) => (
                        <span
                            key={tag}
                            className={`text-xs px-3 py-1.5 rounded-md border ${
                                tag === "All posts"
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-white text-slate-500 border-slate-200"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Suspense
                    key={page}
                    fallback={
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="border border-slate-100 overflow-hidden">
                                    <div className="h-44 bg-slate-100" />
                                    <div className="p-5 space-y-3">
                                        <div className="h-3 w-1/4 bg-slate-100 rounded" />
                                        <div className="h-5 w-4/5 bg-slate-100 rounded" />
                                        <div className="h-4 w-full bg-slate-100 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                >
                    <BlogListClient blogs={blogs} />
                </Suspense>

                <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />
            </main>

            <PageCta
                title="Planning a website or store?"
                description="Send a short brief — we reply with scope and a fixed quote."
            />
        </div>
    );
}
