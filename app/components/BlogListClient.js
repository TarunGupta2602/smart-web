"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogContentClient from './BlogContentClient'
import { resolveBlogTaxonomy } from '@/lib/utils'

export default function BlogListClient({ blogs = [] }) {
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState('newest')

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        let items = blogs.slice() || []
        if (q) {
            items = items.filter(b => {
                const hay = `${b.title} ${b.description || ''} ${b.author || ''}`.toLowerCase()
                return hay.includes(q)
            })
        }

        items.sort((a, b) => {
            if (sort === 'newest') return new Date(b.date_posted) - new Date(a.date_posted)
            if (sort === 'oldest') return new Date(a.date_posted) - new Date(b.date_posted)
            return 0
        })

        return items
    }, [blogs, query, sort])

    const estimateReadTime = (text = '') => {
        const words = (text || '').trim().split(/\s+/).filter(Boolean).length
        return Math.max(1, Math.ceil(words / 200))
    }

    const hero = filtered[0]
    const rest = filtered.slice(1)

    return (
        <div>
            {/* ── Search & Filter Bar ──────────────────────────────────── */}
            <div className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                            </svg>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search articles…"
                                className="pl-10 pr-4 py-2.5 bg-white border-2 border-slate-100 hover:border-slate-200 focus:border-yellow-400 focus:outline-none rounded-xl w-60 text-sm text-slate-700 placeholder:text-slate-400 transition-colors shadow-sm"
                                aria-label="Search articles"
                            />
                        </div>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="px-4 py-2.5 bg-white border-2 border-slate-100 hover:border-slate-200 focus:border-yellow-400 focus:outline-none rounded-xl text-sm text-slate-700 transition-colors shadow-sm font-medium cursor-pointer"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>

                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                        {filtered.length} Article{filtered.length !== 1 ? 's' : ''}
                    </div>
                </div>
            </div>

            {/* ── Hero / Featured Post ────────────────────────────────── */}
            {hero && (
                <section className="mb-12 group bg-white rounded-[2rem] overflow-hidden border-2 border-slate-100 hover:border-yellow-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="md:flex">
                        {hero.image && (
                            <div className="md:w-2/5 min-h-[260px] overflow-hidden relative bg-slate-100">
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    fill
                                    unoptimized={true}
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:to-transparent" />
                            </div>
                        )}
                        <div className="p-8 md:flex-1 flex flex-col justify-between">
                            <div>
                                {(() => {
                                    const { category } = resolveBlogTaxonomy(hero)
                                    return (
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
                                            <span className="text-[9px] font-black uppercase tracking-widest text-yellow-700">
                                                {category || 'Featured Article'}
                                            </span>
                                        </div>
                                    )
                                })()}
                                <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-3">
                                    {new Date(hero.date_posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    {' '}&bull;{' '}{hero.author}
                                    {' '}&bull;{' '}{estimateReadTime(hero.description)} min read
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
                                    {hero.title}
                                </h2>
                                <div
                                    className="text-slate-600 mb-6 text-sm leading-relaxed"
                                    style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                                >
                                    <BlogContentClient content={(hero.description || '').split(/\n\s*\n/)[0]} allowLinks={false} wrapperClass="prose-sm max-w-none" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/blog/${hero.slug}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-black text-[10px] uppercase tracking-widest rounded-full transition-all"
                                >
                                    Read Article
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                                <a
                                    href="tel:+17077084062"
                                    className="inline-flex items-center gap-2 px-5 py-3 border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 font-black text-[10px] uppercase tracking-widest rounded-full transition-all"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── Article Grid ─────────────────────────────────────────── */}
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((b) => (
                    <li key={b.id} className="group bg-white border-2 border-slate-100 hover:border-yellow-300 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
                        <Link href={`/blog/${b.slug}`} className="block" aria-label={`Read ${b.title}`}>
                            {b.image ? (
                                <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
                                    <Image
                                        src={b.image}
                                        alt={b.title}
                                        fill
                                        unoptimized={true}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                </div>
                            ) : (
                                <div className="h-48 w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                                    <span className="text-yellow-400 font-black text-5xl opacity-20">$</span>
                                </div>
                            )}

                            <div className="p-5 flex-1">
                                <div className="text-[9px] font-black uppercase tracking-widest text-yellow-600 mb-2">
                                    {resolveBlogTaxonomy(b).category || b.author || 'SmartSoft Editorial'}
                                </div>
                                <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors leading-snug line-clamp-2">
                                    {b.title}
                                </h3>
                                <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-3 font-medium">
                                    {new Date(b.date_posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    {' '}&bull;{' '}{estimateReadTime(b.description)} min read
                                </div>
                                <div
                                    className="text-sm text-slate-600 leading-relaxed"
                                    style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                                >
                                    <BlogContentClient content={(b.description || '').split(/\n\s*\n/)[0]} allowLinks={false} wrapperClass="prose-sm max-w-none" />
                                </div>
                            </div>
                        </Link>

                        {/* Action row — outside the Link to avoid nested <a> */}
                        <div className="p-4 border-t border-slate-100 bg-white/80 mt-auto">
                            <div className="flex items-center justify-between">
                                <Link
                                    href={`/blog/${b.slug}`}
                                    className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-700 hover:text-yellow-600 transition-colors group/read"
                                >
                                    Read article
                                    <svg className="w-3 h-3 group-hover/read:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                                <a
                                    href="tel:+17077084062"
                                    className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-[9px] uppercase tracking-widest transition-all shadow-sm"
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    Call
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {filtered.length === 0 && (
                <div className="mt-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M10 3v18M14 3v18" /></svg>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">No articles found.</p>
                    <p className="text-xs text-slate-400 mt-1">Try a different search term.</p>
                </div>
            )}
        </div>
    )
}
