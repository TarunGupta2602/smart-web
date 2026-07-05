import { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import BlogContentClient from '@/app/components/BlogContentClient'
import TableOfContents from '@/app/components/TableOfContents'
import { stripMarkdown, estimateReadTime } from '@/lib/utils'
import { breadcrumbList, article, faqPage, stringifySchema } from '@/lib/schema'

export const revalidate = 3600;

const getBlogBySlug = cache(async (slug) => {
    if (!slug) return null
    const { data, error } = await supabase.from('blogs_site2').select('*').eq('slug', slug).single()
    if (error) { console.error('Error fetching blog:', error); return null }
    return data
})

async function getRelatedBlogs(currentSlug, limit = 3) {
    const { data, error } = await supabase
        .from('blogs_site2')
        .select('id, title, slug, image, date_posted, author')
        .neq('slug', currentSlug)
        .order('date_posted', { ascending: false })
        .limit(limit)
    if (error) { console.error('Error fetching related blogs:', error); return [] }
    return data || []
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const blog = await getBlogBySlug(slug)
    if (!blog) return { title: 'Blog' }

    const title = blog.meta_title || blog.title
    const rawDescription = blog.meta_description || blog.description || ''
    const description = stripMarkdown(rawDescription).slice(0, 160)
    const siteUrl = 'https://www.smartsoftsolutions.org'
    const canonicalUrl = `${siteUrl}/blog/${blog.slug}`

    const category = blog.category || 'Bookkeeping & Accounting Services'
    const classification = blog.classification || 'Business / Financial Services'
    const phoneNumber = blog.phone_number || '+1-707-708-4062'

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
        openGraph: {
            title, description, type: 'article', locale: 'en_US', url: canonicalUrl,
            siteName: 'SmartSoft Solutions',
            images: blog.image ? [{ url: blog.image, width: 1200, height: 630, alt: title }] : [{ url: `${siteUrl}/favicon.ico`, width: 512, height: 512, alt: title }],
            publishedTime: blog.date_posted,
            modifiedTime: blog.updated_at || blog.date_posted,
            authors: blog.author ? [blog.author] : ['SmartSoft Solutions'],
            section: category,
            tags: blog.meta_keywords ? blog.meta_keywords.split(',').map(k => k.trim()) : undefined,
        },
        twitter: { card: 'summary_large_image', title, description, images: blog.image ? [blog.image] : undefined, creator: '@SmartSoftSol' },
        keywords: blog.meta_keywords || undefined,
        other: {
            category,
            classification,
            telephone: phoneNumber,
        },
    }
}

export default async function BlogSlugPage({ params }) {
    const { slug } = await params

    const [blog, relatedBlogs] = await Promise.all([getBlogBySlug(slug), getRelatedBlogs(slug)])
    if (!blog) return notFound()

    const faqs = Array.isArray(blog.faqs) ? blog.faqs : []
    const content = blog.content || blog.description || ''
    const plainDescription = stripMarkdown(blog.meta_description || blog.description || '')
    const siteUrl = 'https://www.smartsoftsolutions.org'
    const canonicalUrl = `${siteUrl}/blog/${blog.slug}`
    const readTime = estimateReadTime(stripMarkdown(content || ''))

    const breadcrumbs = [
        { name: 'Home', url: siteUrl },
        { name: 'Blog', url: `${siteUrl}/blog` },
        { name: blog.title, url: canonicalUrl }
    ]

    const breadcrumbSchema = breadcrumbList(breadcrumbs, siteUrl)
    const articleSchema = article({
        headline: blog.title,
        description: plainDescription.slice(0, 160),
        author: blog.author,
        datePublished: blog.date_posted,
        dateModified: blog.updated_at || blog.date_posted,
        image: blog.image, url: canonicalUrl,
        keywords: blog.meta_keywords
    })
    const faqSchema = faqs.length > 0 ? faqPage(faqs.map(f => ({ q: f.question, a: f.answer }))) : null

    return (
        <main className="min-h-screen bg-white">

            {/* ── Breadcrumb bar ─────────────────────────────────── */}
            <div className="bg-slate-950 border-b border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav aria-label="Breadcrumb">
                        <ol className="inline-flex flex-wrap items-center gap-1 text-xs">
                            {breadcrumbs.map((b, i) => (
                                <li key={i} className="inline-flex items-center">
                                    {i !== 0 && <span className="mx-2 text-slate-600">/</span>}
                                    {i < breadcrumbs.length - 1 ? (
                                        <Link href={b.url.replace(siteUrl, '')} className="text-slate-400 hover:text-yellow-400 transition-colors font-medium">
                                            {b.name}
                                        </Link>
                                    ) : (
                                        <span className="text-slate-300 font-semibold truncate max-w-[180px] sm:max-w-xs">{b.name}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">

                    {/* ── Main Content ──────────────────────────── */}
                    <div className="lg:col-span-2">

                        {/* Article Header */}
                        <header className="mb-8">
                            {/* Category chip */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-yellow-700">
                                    {blog.category || 'Financial Insights'}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-5">
                                {blog.title}
                            </h1>

                            {/* Author + meta row */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-yellow-400 font-black text-sm shadow-md">
                                        {(blog.author || 'S').slice(0, 1)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">{blog.author || 'SmartSoft Solutions'}</div>
                                        <div className="text-[11px] text-slate-500">
                                            {new Date(blog.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                            {' '}&bull;{' '}{readTime} min read
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto flex items-center gap-2">
                                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-900 text-yellow-400">{readTime} min</span>
                                </div>
                            </div>

                            {/* Description preview */}
                            {(blog.meta_description || blog.description) && (
                                <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <BlogContentClient
                                        content={blog.meta_description || blog.description}
                                        wrapperClass="prose max-w-none prose-sm text-slate-700"
                                        allowLinks={true}
                                    />
                                    {blog.content && (
                                        <a href="#article-content" className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-yellow-600 hover:text-yellow-700 mt-3 transition-colors">
                                            Read full article
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                        </a>
                                    )}
                                </div>
                            )}
                        </header>

                        {/* Featured Image */}
                        {blog.image && (
                            <figure className="mb-8 rounded-3xl overflow-hidden border border-slate-100 shadow-lg bg-slate-50">
                                <Image
                                    src={blog.image} alt={blog.title}
                                    width={1200} height={675} priority unoptimized={true}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                                />
                            </figure>
                        )}

                        {/* Article Body */}
                        <article
                            id="article-content"
                            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                            prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:text-yellow-700
                            prose-strong:text-slate-900 prose-blockquote:border-yellow-400 prose-blockquote:text-slate-600"
                        >
                            <BlogContentClient content={content} />

                            {/* Inline CTA */}
                            <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 not-prose">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <p className="text-white font-black uppercase tracking-tight text-sm mb-1">Need expert financial help?</p>
                                        <p className="text-slate-400 text-xs">Talk to our CPA-supervised team today — free consultation.</p>
                                    </div>
                                    <a
                                        href="tel:+17077084062"
                                        className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black uppercase text-[10px] tracking-widest rounded-full transition-all"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        +1-707-708-4062
                                    </a>
                                </div>
                            </div>

                            {/* FAQs */}
                            {faqs.length > 0 && (
                                <section className="mt-10 not-prose">
                                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">
                                        Frequently Asked <span className="text-yellow-500">Questions</span>
                                    </h2>
                                    <div className="space-y-3">
                                        {faqs.map((f, i) => (
                                            <details key={i} className="group border-2 border-slate-100 hover:border-yellow-300 rounded-2xl bg-white px-5 py-4 transition-all">
                                                <summary className="font-black cursor-pointer list-none flex items-center justify-between gap-3 text-sm text-slate-900">
                                                    <span>{f.question}</span>
                                                    <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-yellow-400 flex items-center justify-center text-xs text-slate-700 group-hover:text-slate-900 transition-all shrink-0 font-black">
                                                        <span className="group-open:hidden">+</span>
                                                        <span className="hidden group-open:inline">−</span>
                                                    </span>
                                                </summary>
                                                <div className="mt-4 text-sm text-slate-600 leading-relaxed">
                                                    <BlogContentClient content={f.answer || ''} />
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </article>
                    </div>

                    {/* ── Sidebar ───────────────────────────────── */}
                    <aside className="mt-10 lg:mt-0 lg:col-span-1">
                        <div className="lg:sticky lg:top-28 space-y-6">

                            <TableOfContents content={content} />

                            {/* CTA Card */}
                            <div className="bg-slate-950 rounded-3xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-yellow-400 mb-2">Free Consultation</div>
                                    <p className="text-white font-black text-sm mb-1">Ready to outsource your books?</p>
                                    <p className="text-slate-400 text-xs mb-5 leading-relaxed">CPA-supervised bookkeeping, payroll & tax services for USA & Canada businesses.</p>
                                    <a
                                        href="tel:+17077084062"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        Call Now
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="w-full mt-3 flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all"
                                    >
                                        Book a Consultation
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white rounded-3xl border-2 border-slate-100 p-6">
                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Our Services</div>
                                <ul className="space-y-2">
                                    {[
                                        { name: "Bookkeeping", href: "/services/bookkeeping" },
                                        { name: "Accounting", href: "/services/accounting" },
                                        { name: "Payroll Processing", href: "/services/payroll" },
                                        { name: "Tax Preparation", href: "/services/tax-preparation" },
                                        { name: "Financial Consulting", href: "/services/financial-consulting" },
                                        { name: "Pricing & Plans", href: "/pricing" },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="flex items-center justify-between text-xs font-bold text-slate-700 hover:text-yellow-600 transition-colors py-1 group">
                                                {item.name}
                                                <svg className="w-3 h-3 text-slate-300 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-2">
                                {["IRS Authorized", "CPA Supervised", "QuickBooks Pro"].map((b) => (
                                    <span key={b} className="text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-950 text-yellow-400">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                {/* JSON-LD schemas */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }} />}

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                    <section className="mt-20 pt-16 border-t border-slate-100">
                        <div className="flex items-end justify-between mb-10">
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-slate-900">
                                Related <span className="text-yellow-500 italic font-serif lowercase">Articles</span>
                            </h2>
                            <Link href="/blog" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-yellow-600 transition-colors flex items-center gap-1">
                                All Posts
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedBlogs.map((item) => (
                                <article key={item.id} className="group bg-white rounded-3xl border-2 border-slate-100 hover:border-yellow-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <Link href={`/blog/${item.slug}`} className="block relative h-44 overflow-hidden bg-slate-100">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                                                <span className="text-yellow-400 font-black text-4xl opacity-20">$</span>
                                            </div>
                                        )}
                                    </Link>
                                    <div className="p-5">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-yellow-600 mb-2">{item.author || 'SmartSoft Editorial'}</div>
                                        <h3 className="text-base font-black text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                                            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <time className="text-[10px] text-slate-400 font-medium">
                                                {new Date(item.date_posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </time>
                                            <Link href={`/blog/${item.slug}`} className="text-[10px] font-black uppercase tracking-widest text-yellow-600 hover:text-yellow-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Blog */}
                <div className="mt-16 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-yellow-600 transition-colors">
                        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        Back to Blog
                    </Link>
                </div>
            </div>
        </main>
    )
}