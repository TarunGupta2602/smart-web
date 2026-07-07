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
    title: 'Financial Insights Blog | SmartSoft Solutions',
    description: 'Expert guides on bookkeeping, accounting, payroll, tax preparation, and financial planning for USA & Canada small businesses.',
    keywords: [
        'bookkeeping tips', 'accounting guides', 'payroll help USA Canada',
        'tax preparation tips', 'small business finance blog', 'QuickBooks tips',
        'financial planning blog', 'SmartSoft Solutions blog',
    ],
    openGraph: {
        title: 'Financial Insights Blog | SmartSoft Solutions',
        description: 'Expert guides on bookkeeping, accounting, payroll, and tax preparation for USA & Canada small businesses.',
        type: 'website',
        url: `${SITE_URL}/blog`,
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Financial Insights Blog | SmartSoft Solutions',
        description: 'Expert guides on bookkeeping, payroll, and tax services for small businesses.',
        images: ['/og-image.jpg'],
    },
    alternates: { canonical: `${SITE_URL}/blog` },
    robots: {
        index: true, follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
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
        if (error) { console.error('Supabase blogs error:', error); return { data: [], count: 0 }; }
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

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-yellow-500/8 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[100px]" />
                    {/* Subtle grid lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <Breadcrumb items={breadcrumbItems} className="mb-8 opacity-60" />
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-400">Financial Insights</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-4">
                                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase">blog.</span>
                            </h1>
                            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
                                Guides on bookkeeping, payroll, tax prep, and financial strategy — written for USA & Canada small business owners.
                            </p>
                        </div>
                        <a
                            href="tel:+17077084062"
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black uppercase text-xs tracking-widest rounded-full shadow-lg transition-all duration-300 shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── BLOG LIST ────────────────────────────────────────── */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">

                {/* Topics chips */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {["All Posts", "Bookkeeping", "Payroll", "Tax Prep", "Accounting", "Financial Tips"].map((tag) => (
                        <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border transition-all cursor-pointer ${tag === "All Posts" ? "bg-slate-900 text-yellow-400 border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-yellow-400 hover:text-yellow-600"}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <Suspense
                    key={page}
                    fallback={
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                                    <div className="h-52 bg-slate-100 rounded-t-3xl" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-3 w-1/4 bg-slate-100 rounded-full" />
                                        <div className="h-6 w-4/5 bg-slate-100 rounded-xl" />
                                        <div className="h-4 w-full bg-slate-100 rounded-xl" />
                                        <div className="h-4 w-3/4 bg-slate-100 rounded-xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                >
                    <BlogListClient blogs={blogs} />
                </Suspense>

                <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />

                {/* Bottom CTA */}
                <div className="mt-20 bg-slate-950 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4 relative z-10">
                        NEED EXPERT FINANCIAL HELP?
                    </h2>
                    <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto relative z-10">
                        Skip the reading — talk directly to a CPA-supervised bookkeeping or tax expert today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <a href="tel:+17077084062" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black uppercase text-xs tracking-widest rounded-full transition-all">
                            Call +1-707-708-4062
                        </a>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full transition-all">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}