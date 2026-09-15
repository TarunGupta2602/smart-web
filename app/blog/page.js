import { Suspense } from 'react';
import BlogListClient from '../components/BlogListClient';
import Pagination from '../components/Pagination';
import PageHero from '../components/page-hero';
import PageCta from '../components/page-cta';
import RelatedLinks from '../components/related-links';
import { breadcrumbList, stringifySchema } from '@/lib/schema';
import { PAGE_VIDEOS, PAGE_POSTERS } from '@/lib/page-media';
import { getPaginatedPosts } from '@/lib/blog';

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: 'Website Development Blog | SEO, E-commerce & Next.js Guides',
    description:
        'Practical guides from SmartSoft Solutions on hiring a website company, website cost in India, e-commerce checklists, SEO launches, and Next.js for business sites.',
    keywords: [
        'website development tips',
        'e-commerce guides',
        'SEO blog',
        'Next.js tips',
        'business website cost India',
        'website development company India',
        'SmartSoft Solutions blog',
    ],
    openGraph: {
        title: 'Website Development Blog | SmartSoft Solutions',
        description: 'Guides on websites, e-commerce, SEO, and Next.js for growing businesses.',
        type: 'website',
        url: `${SITE_URL}/blog`,
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Website Development Blog | SmartSoft Solutions',
        description: 'Guides on websites, e-commerce, SEO, and Next.js for growing businesses.',
        images: ['/og-image.jpg'],
    },
    alternates: { canonical: `${SITE_URL}/blog` },
};

export default async function BlogPage(props) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams?.page) || 1;
    const limit = 12;

    const { data: blogs, count } = getPaginatedPosts(page, limit);
    const totalPages = Math.max(1, Math.ceil(count / limit));

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
                title="Guides that help your website win customers"
                description="Original playbooks on hiring developers, pricing, e-commerce launches, SEO, and Next.js — written for Indian business owners."
                videoSrc={PAGE_VIDEOS.typing}
                posterSrc={PAGE_POSTERS.code}
                breadcrumbs={breadcrumbItems}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14">
                <div className="flex flex-wrap gap-2 mb-10">
                    {["All posts", "Websites", "E-commerce", "SEO", "Next.js", "Pricing"].map((tag) => (
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

            <RelatedLinks excludeHref="/blog" />

            <PageCta
                title="Planning a website or store?"
                description="Send a short brief — we reply with scope and a fixed quote."
            />
        </div>
    );
}
