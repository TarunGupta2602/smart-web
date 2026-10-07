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

            <div className="border-b border-slate-100 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav aria-label="Breadcrumb">
                        <ol className="inline-flex flex-wrap items-center gap-1 text-xs">
                            {breadcrumbs.map((b, i) => (
                                <li key={i} className="inline-flex items-center">
                                    {i !== 0 && <span className="mx-2 text-slate-300">/</span>}
                                    {i < breadcrumbs.length - 1 ? (
                                        <Link href={b.url.replace(siteUrl, '')} className="font-medium text-slate-500 hover:text-[#0f3d68]">
                                            {b.name}
                                        </Link>
                                    ) : (
                                        <span className="truncate max-w-[180px] font-medium text-slate-800 sm:max-w-xs">{b.name}</span>
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
                                <p className="mb-4 text-sm font-medium text-[#0f3d68]">{postCategory}</p>
                            )}

                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3d68] text-sm font-semibold text-white">
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
                                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">{readTime} min read</span>
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
                            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10
                            prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-900
                            prose-a:text-[#0f3d68] prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 prose-blockquote:border-[#0f3d68] prose-blockquote:text-slate-600"
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
                                        className="press shrink-0 inline-flex items-center gap-2 rounded-md bg-[#0f3d68] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0a2f52]"
                                    >
                                        Get a quote
                                    </Link>
                                </div>
                            </div>

                            {faqs.length > 0 && (
                                <section className="mt-10 not-prose">
                                    <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                                        Questions on this guide
                                    </h2>
                                    <div className="space-y-3">
                                        {faqs.map((f, i) => (
                                            <details key={i} className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors open:shadow-sm">
                                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-slate-900">
                                                    <span>{f.question}</span>
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs text-[#0f3d68] transition-transform group-open:rotate-45">
                                                        +
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

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="text-xs font-medium text-slate-400 mb-2">Project quote</div>
                                <p className="text-slate-900 font-semibold text-sm mb-1">Ready to start a build?</p>
                                <p className="text-slate-500 text-xs mb-5 leading-relaxed">Website, e-commerce, or web app — fixed quote before work begins.</p>
                                <Link
                                    href="/contact"
                                    className="press flex w-full items-center justify-center rounded-md bg-[#0f3d68] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0a2f52]"
                                >
                                    Get a quote
                                </Link>
                                <a
                                    href="tel:+917456096455"
                                    className="press mt-3 flex w-full items-center justify-center rounded-md border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-300"
                                >
                                    +91 74560 96455
                                </a>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                        <div className="mb-10 flex items-end justify-between">
                            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                More guides
                            </h2>
                            <Link href="/blog" className="link-shift text-sm font-medium text-[#0f3d68]">
                                All posts <span className="shift-icon">→</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {relatedBlogs.map((item) => (
                                <Link key={item.id} href={`/blog/${item.slug}`} className="group block h-full">
                                    <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                        <div className="media-frame relative h-44 bg-slate-100">
                                            {item.image ? (
                                                <Image src={item.image} alt="" fill className="object-cover" sizes="33vw" />
                                            ) : null}
                                        </div>
                                        <div className="p-5">
                                            <time className="text-xs text-slate-400">
                                                {new Date(item.date_posted).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </time>
                                            <h3 className="mt-2 line-clamp-2 font-display text-base font-semibold text-slate-900 transition-colors group-hover:text-[#0f3d68]">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <div className="mt-16 text-center">
                    <Link href="/blog" className="link-shift inline-flex items-center gap-2 text-sm font-medium text-[#0f3d68]">
                        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        Back to Blog
                    </Link>
                </div>
            </div>
        </main>
    )
}
