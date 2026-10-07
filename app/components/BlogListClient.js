"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { resolveBlogTaxonomy, estimateReadTime, stripMarkdown } from '@/lib/utils'

const CATEGORY_ORDER = ["Restaurant tech", "Web Development", "E-commerce", "SEO", "Digital Marketing"]

export default function BlogListClient({ blogs = [] }) {
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState('newest')
    const [category, setCategory] = useState('All')

    const categories = useMemo(() => {
        const present = new Set(blogs.map((post) => resolveBlogTaxonomy(post).category).filter(Boolean))
        return ["All", ...CATEGORY_ORDER.filter((name) => present.has(name))]
    }, [blogs])

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        let items = blogs.slice()
        if (category !== 'All') {
            items = items.filter((post) => resolveBlogTaxonomy(post).category === category)
        }
        if (q) {
            items = items.filter((post) => {
                const hay = `${post.title} ${post.description || ''} ${post.author || ''}`.toLowerCase()
                return hay.includes(q)
            })
        }
        items.sort((a, b) => {
            if (sort === 'oldest') return new Date(a.date_posted) - new Date(b.date_posted)
            return new Date(b.date_posted) - new Date(a.date_posted)
        })
        return items
    }, [blogs, query, sort, category])

    const readMins = (post) =>
        estimateReadTime(stripMarkdown(`${post.content || ''} ${post.description || ''}`))

    return (
        <div>
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">
                    {categories.map((name) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setCategory(name)}
                            className={`press rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                                category === name
                                    ? "bg-[#0f3d68] text-white"
                                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search guides"
                        className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0f3d68] focus:outline-none sm:w-56"
                        aria-label="Search guides"
                    />
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-[#0f3d68] focus:outline-none"
                        aria-label="Sort guides"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            {filtered.length > 0 ? (
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((post) => {
                        const { category: postCategory } = resolveBlogTaxonomy(post)
                        return (
                            <li key={post.id}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                        <div className="media-frame relative aspect-[16/10] bg-slate-100">
                                            {post.image ? (
                                                <Image
                                                    src={post.image}
                                                    alt=""
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover"
                                                />
                                            ) : null}
                                        </div>
                                        <div className="flex flex-1 flex-col p-5">
                                            <p className="mb-2 text-xs font-medium text-[#0f3d68]">
                                                {postCategory || "Guide"}
                                            </p>
                                            <h2 className="mb-2 line-clamp-2 font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#0f3d68]">
                                                {post.title}
                                            </h2>
                                            <p className="mb-3 text-xs text-slate-400">
                                                {new Date(post.date_posted).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                {' · '}{readMins(post)} min read
                                            </p>
                                            <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                                                {stripMarkdown(post.description || '')}
                                            </p>
                                            <span className="link-shift mt-4 text-sm font-medium text-[#0f3d68]">
                                                Read guide <span className="shift-icon">→</span>
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p className="py-16 text-center text-sm text-slate-500">No guides match that search.</p>
            )}
        </div>
    )
}
