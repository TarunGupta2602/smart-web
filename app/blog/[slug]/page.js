import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import BlogContentClient from '@/app/components/BlogContentClient'
import TableOfContents from '@/app/components/TableOfContents'
import { stripMarkdown, estimateReadTime, buildBlogSeo, resolveBlogTaxonomy } from '@/lib/utils'
import { breadcrumbList, article, faqPage, stringifySchema } from '@/lib/schema'
import { getAllBlogSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const blog = getPostBySlug(slug)
    if (!blog) return { title: 'Blog' }

    const blogSeo = buildBlogSeo(blog)
    const siteUrl = 'https://www.smartsoftsolutions.org'
    const canonicalUrl = `${siteUrl}/blog/${blog.slug}`

    const keywordTags = blogSeo.keywords.length > 0
        ? blogSeo.keywords
        : (blog.meta_keywords ? blog.meta_keywords.split(',').map(k => k.trim()).filter(Boolean) : undefined)
    const { category, classification } = resolveBlogTaxonomy(blog)
    const phoneNumber = '+91-74560-96455'

    return {
        title: blogSeo.metaTitle || blogSeo.title,
        description: blogSeo.metaDescription,
        alternates: { canonical: canonicalUrl },
        robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
        openGraph: {
            title: blogSeo.metaTitle || blogSeo.title,
            description: blogSeo.metaDescription,
            type: 'article',
            locale: 'en_US',
            url: canonicalUrl,
            siteName: 'SmartSoft Solutions',
            images: blog.image ? [{ url: blog.image, width: 1200, height: 630, alt: blogSeo.metaTitle || blogSeo.title }] : [{ url: `${siteUrl}/favicon.ico`, width: 512, height: 512, alt: blogSeo.metaTitle || blogSeo.title }],
            publishedTime: blog.date_posted,
            modifiedTime: blog.updated_at || blog.date_posted,
            authors: blog.author ? [blog.author] : ['SmartSoft Solutions'],
            ...(category ? { section: category } : {}),
            tags: keywordTags,
        },
        twitter: {
            card: 'summary_large_image',
            title: blogSeo.metaTitle || blogSeo.title,
            description: blogSeo.metaDescription,
            images: blog.image ? [blog.image] : undefined,
            creator: '@SmartSoftSol',
        },
        keywords: keywordTags ? keywordTags.join(', ') : undefined,
        other: {
            ...(category ? { category } : {}),
            ...(classification ? { classification } : {}),
            telephone: phoneNumber,
        },
    }
}

export default async function BlogSlugPage({ params }) {
    const { slug } = await params

    const blog = getPostBySlug(slug)
    if (!blog) return notFound()
    const relatedBlogs = getRelatedPosts(slug)

    const faqs = Array.isArray(blog.faqs) ? blog.faqs : []
    const content = blog.content || blog.description || ''
    const blogSeo = buildBlogSeo(blog)
    const plainDescription = stripMarkdown(blogSeo.metaDescription || '')
    const siteUrl = 'https://www.smartsoftsolutions.org'
    const canonicalUrl = `${siteUrl}/blog/${blog.slug}`
    const readTime = estimateReadTime(stripMarkdown(content || ''))
    const { category: postCategory } = resolveBlogTaxonomy(blog)

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
        keywords: blogSeo.keywords.join(', ')
    })
    const faqSchema = faqs.length > 0 ? faqPage(faqs.map(f => ({ q: f.question, a: f.answer }))) : null

    return (
        <main className="min-h-screen bg-white">

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

                    <div className="lg:col-span-2">

                        <header className="mb-8">
                            {postCategory && (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-yellow-700">
                                        {postCategory}
                                    </span>
                                </div>
                            )}

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-5">
                                {blog.title}
                            </h1>

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

                            {blog.meta_description && (
                                <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <p className="text-sm text-slate-700 leading-relaxed">{blog.meta_description}</p>
                                </div>
                            )}
                        </header>

                        {blog.image && (
                            <figure className="mb-8 rounded-3xl overflow-hidden border border-slate-100 shadow-lg bg-slate-50">
                                <Image
                                    src={blog.image} alt={blog.title}
                                    width={1200} height={675} priority
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                                />
                            </figure>
                        )}

                        <article
                            id="article-content"
                            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                            prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:text-yellow-700
                            prose-strong:text-slate-900 prose-blockquote:border-yellow-400 prose-blockquote:text-slate-600"
                        >
                            <BlogContentClient content={content} />

                            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 not-prose">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <p className="text-slate-900 font-semibold text-sm mb-1">Planning a website or store?</p>
                                        <p className="text-slate-500 text-xs">Get a fixed project quote from SmartSoft Solutions.</p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium rounded-md transition-colors"
                                    >
                                        Get a quote
                                    </Link>
                                </div>
                            </div>

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

                    <aside className="mt-10 lg:mt-0 lg:col-span-1">
                        <div className="lg:sticky lg:top-28 space-y-6">

                            <TableOfContents content={content} />

                            <div className="bg-white border border-slate-200 p-6">
                                <div className="text-xs font-medium text-slate-400 mb-2">Project quote</div>
                                <p className="text-slate-900 font-semibold text-sm mb-1">Ready to start a build?</p>
                                <p className="text-slate-500 text-xs mb-5 leading-relaxed">Website, e-commerce, or web app — fixed quote before work begins.</p>
                                <Link
                                    href="/contact"
                                    className="w-full flex items-center justify-center px-4 py-2.5 bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium rounded-md transition-colors"
                                >
                                    Get a quote
                                </Link>
                                <a
                                    href="tel:+917456096455"
                                    className="w-full mt-3 flex items-center justify-center px-4 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:border-slate-300 transition-colors"
                                >
                                    +91 74560 96455
                                </a>
                            </div>

                            <div className="bg-white border border-slate-200 p-6">
                                <div className="text-xs font-medium text-slate-400 mb-4">Our services</div>
                                <ul className="space-y-2">
                                    {[
                                        { name: "Business websites & stores", href: "/services/website-designing" },
                                        { name: "Digital marketing", href: "/services/digital-marketing" },
                                        { name: "SEO", href: "/services/seo" },
                                        { name: "Pricing", href: "/pricing" },
                                        { name: "Live projects", href: "/projects" },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="flex items-center justify-between text-sm text-slate-700 hover:text-[#0f3d68] transition-colors py-1 group">
                                                {item.name}
                                                <svg className="w-3 h-3 text-slate-300 group-hover:text-[#0f3d68] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "React", "E-commerce", "SEO"].map((b) => (
                                    <span key={b} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }} />}

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
                                                <span className="text-yellow-400 font-black text-4xl opacity-20">S</span>
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
