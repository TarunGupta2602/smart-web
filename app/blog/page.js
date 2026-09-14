import Link from 'next/link';
import { Suspense, cache } from 'react';
import { supabase } from '@/lib/supabaseClient';
import BlogListClient from '../components/BlogListClient';
import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { breadcrumbList, stringifySchema } from '@/lib/schema';

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

            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
                    <Breadcrumb items={breadcrumbItems} className="mb-6" />
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Blog</p>
                    <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
                        Practical notes on websites, stores, and growth
                    </h1>
                    <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                        Guides on web development, e-commerce, SEO, and hiring a digital partner — written for business owners.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
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

                <div className="mt-16 border border-slate-200 bg-slate-50 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Planning a website or store?</h2>
                        <p className="text-sm text-slate-600">Send a short brief — we reply with scope and a fixed quote.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Get a quote
                    </Link>
                </div>
            </main>
        </div>
    );
}
