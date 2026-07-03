"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { slugify } from '@/lib/utils'

export default function BlogContentClient({ content, allowLinks = true, wrapperClass = 'prose max-w-none' }) {
    if (!content) return null

    return (
        <div className={wrapperClass}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={{
                    // Headings
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-black tracking-tight text-slate-900 my-5" {...props} />,
                    h2: ({ node, children, ...props }) => {
                        const getNodeText = (node) => {
                            if (['string', 'number'].includes(typeof node)) return node
                            if (node instanceof Array) return node.map(getNodeText).join('')
                            if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
                            return ''
                        }
                        const id = slugify(getNodeText(children))
                        return <h2 id={id} className="text-2xl font-black tracking-tight text-slate-900 my-4 scroll-mt-24" {...props}>{children}</h2>
                    },
                    h3: ({ node, children, ...props }) => {
                        const getNodeText = (node) => {
                            if (['string', 'number'].includes(typeof node)) return node
                            if (node instanceof Array) return node.map(getNodeText).join('')
                            if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
                            return ''
                        }
                        const id = slugify(getNodeText(children))
                        return <h3 id={id} className="text-xl font-black text-slate-900 my-3 scroll-mt-24" {...props}>{children}</h3>
                    },
                    h4: ({ node, ...props }) => <h4 className="text-lg font-bold text-slate-900 my-2" {...props} />,

                    // Paragraphs and images
                    p: ({ node, children, ...props }) => {
                        const onlyImage = node.children && node.children.length === 1 && node.children[0].tagName === 'img'
                        if (onlyImage) {
                            const alt = node.children[0].properties && node.children[0].properties.alt
                            return (
                                <figure className="my-8">
                                    {children}
                                    {alt && <figcaption className="text-xs text-slate-500 mt-2 text-center italic">{alt}</figcaption>}
                                </figure>
                            )
                        }
                        return <p className="my-4 text-slate-700 leading-relaxed" {...props}>{children}</p>
                    },
                    img: ({ node, ...props }) => (
                        <img {...props} alt={props.alt || ''} loading="lazy" className="max-w-full h-auto rounded-2xl shadow-sm border border-slate-100" />
                    ),

                    // Lists
                    ul: ({ node, ...props }) => <ul className="list-none ml-0 my-4 space-y-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal ml-6 my-4 space-y-2" {...props} />,
                    li: ({ node, children, ...props }) => (
                        <li className="flex items-start gap-2.5 text-slate-700 leading-relaxed" {...props}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 list-none" />
                            <span>{children}</span>
                        </li>
                    ),

                    // Blockquote
                    blockquote: ({ node, ...props }) => (
                        <blockquote
                            className="border-l-4 border-yellow-400 bg-yellow-50/60 pl-5 pr-4 py-3 my-6 rounded-r-xl italic text-slate-600"
                            {...props}
                        />
                    ),

                    // Code
                    code: ({ node, inline, className, children, ...props }) => (
                        inline
                            ? <code className="bg-slate-100 px-1.5 py-0.5 rounded text-yellow-700 font-mono text-sm" {...props}>{children}</code>
                            : <pre className="bg-slate-950 text-yellow-400 p-5 rounded-2xl overflow-auto text-sm my-6 shadow-lg"><code className={className} {...props}>{children}</code></pre>
                    ),

                    // Tables
                    table: ({ node, ...props }) => (
                        <div className="overflow-auto my-6 rounded-xl border border-slate-200 shadow-sm">
                            <table className="min-w-full divide-y divide-slate-200" {...props} />
                        </div>
                    ),
                    thead: ({ node, ...props }) => <thead className="bg-slate-950 text-white" {...props} />,
                    th: ({ node, ...props }) => <th className="px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-yellow-400" {...props} />,
                    td: ({ node, ...props }) => <td className="px-5 py-3 text-sm text-slate-700 border-t border-slate-100" {...props} />,

                    // Links
                    a: ({ node, children, ...props }) => {
                        if (!allowLinks) {
                            return <span className={(props.className || '') + ' text-yellow-600 font-semibold'}>{children}</span>
                        }
                        return (
                            <a
                                {...props}
                                target={props.target || '_blank'}
                                rel={props.rel || 'noopener noreferrer'}
                                className="text-yellow-600 font-semibold underline underline-offset-2 decoration-yellow-300 hover:text-yellow-700 transition-colors"
                            >
                                {children}
                            </a>
                        )
                    },

                    // Horizontal rule
                    hr: ({ node, ...props }) => <hr className="my-8 border-slate-200" {...props} />,

                    // Strong / em
                    strong: ({ node, ...props }) => <strong className="font-black text-slate-900" {...props} />,
                    em: ({ node, ...props }) => <em className="italic text-slate-600" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
