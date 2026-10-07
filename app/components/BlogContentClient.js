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
                    h1: ({ node, ...props }) => <h1 className="font-display my-5 text-3xl font-semibold tracking-tight text-slate-900" {...props} />,
                    h2: ({ node, children, ...props }) => {
                        const getNodeText = (node) => {
                            if (['string', 'number'].includes(typeof node)) return node
                            if (node instanceof Array) return node.map(getNodeText).join('')
                            if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
                            return ''
                        }
                        const id = slugify(getNodeText(children))
                        return <h2 id={id} className="font-display my-4 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900" {...props}>{children}</h2>
                    },
                    h3: ({ node, children, ...props }) => {
                        const getNodeText = (node) => {
                            if (['string', 'number'].includes(typeof node)) return node
                            if (node instanceof Array) return node.map(getNodeText).join('')
                            if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
                            return ''
                        }
                        const id = slugify(getNodeText(children))
                        return <h3 id={id} className="font-display my-3 scroll-mt-24 text-xl font-semibold text-slate-900" {...props}>{children}</h3>
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
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f3d68] list-none" />
                            <span>{children}</span>
                        </li>
                    ),

                    // Blockquote
                    blockquote: ({ node, ...props }) => (
                        <blockquote
                            className="my-6 rounded-r-xl border-l-4 border-[#0f3d68] bg-slate-50 py-3 pl-5 pr-4 italic text-slate-600"
                            {...props}
                        />
                    ),

                    // Code
                    code: ({ node, inline, className, children, ...props }) => (
                        inline
                            ? <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800" {...props}>{children}</code>
                            : <pre className="my-6 overflow-auto rounded-2xl bg-[#081220] p-5 text-sm text-slate-100 shadow-lg"><code className={className} {...props}>{children}</code></pre>
                    ),

                    // Tables
                    table: ({ node, ...props }) => (
                        <div className="overflow-auto my-6 rounded-xl border border-slate-200 shadow-sm">
                            <table className="min-w-full divide-y divide-slate-200" {...props} />
                        </div>
                    ),
                    thead: ({ node, ...props }) => <thead className="bg-[#0f3d68] text-white" {...props} />,
                    th: ({ node, ...props }) => <th className="px-5 py-3 text-left text-xs font-medium text-white" {...props} />,
                    td: ({ node, ...props }) => <td className="px-5 py-3 text-sm text-slate-700 border-t border-slate-100" {...props} />,

                    // Links
                    a: ({ node, children, ...props }) => {
                        if (!allowLinks) {
                            return <span className={(props.className || '') + ' font-medium text-[#0f3d68]'}>{children}</span>
                        }
                        const href = props.href || ''
                        const external = href.startsWith('http')
                        return (
                            <a
                                {...props}
                                target={external ? (props.target || '_blank') : undefined}
                                rel={external ? (props.rel || 'noopener noreferrer') : undefined}
                                className="font-medium text-[#0f3d68] underline underline-offset-2 decoration-[#0f3d68]/30 hover:decoration-[#0f3d68]"
                            >
                                {children}
                            </a>
                        )
                    },

                    // Horizontal rule
                    hr: ({ node, ...props }) => <hr className="my-8 border-slate-200" {...props} />,

                    // Strong / em
                    strong: ({ node, ...props }) => <strong className="font-semibold text-slate-900" {...props} />,
                    em: ({ node, ...props }) => <em className="italic text-slate-600" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
