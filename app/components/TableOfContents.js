'use client';

import React, { useEffect, useState } from 'react';
import { slugify, stripMarkdown } from '@/lib/utils';

export default function TableOfContents({ content }) {
    const headings = React.useMemo(() => {
        if (!content) return [];
        const regex = /^(#{2,3})\s+(.+)$/gm;
        const items = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            const level = match[1].length; // 2 or 3
            const text = match[2];
            const cleanText = stripMarkdown(text);
            const id = slugify(cleanText);
            items.push({ id, text: cleanText, level });
        }
        return items;
    }, [content]);

    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        if (headings.length === 0) return;

        // Scroll spy logic
        const handleScroll = () => {
            const headingElements = headings.map(h => document.getElementById(h.id));
            const scrollPosition = window.scrollY + 100; // offset

            let currentId = '';
            for (const el of headingElements) {
                if (el && el.offsetTop <= scrollPosition) {
                    currentId = el.id;
                }
            }
            setActiveId(currentId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    if (headings.length < 2) return null;

    return (
        <nav className="hidden max-h-[80vh] overflow-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:block">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
                On this page
            </h4>
            <ul className="space-y-2.5 border-l border-slate-200 text-sm">
                {headings.map((h, i) => (
                    <li key={i} className={`pl-4 ${h.level === 3 ? 'ml-2' : ''}`}>
                        <a
                            href={`#${h.id}`}
                            className={`block transition-colors hover:text-[#0f3d68] ${activeId === h.id
                                ? '-ml-[17px] border-l-2 border-[#0f3d68] pl-4 font-medium text-[#0f3d68]'
                                : 'text-slate-500'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${h.id}`)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setActiveId(h.id);
                            }}
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
