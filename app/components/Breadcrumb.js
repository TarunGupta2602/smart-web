'use client';

import Link from 'next/link';

/**
 * Accessible breadcrumb navigation for SEO and UX.
 * Use with breadcrumbList() from @/lib/schema for JSON-LD on the same page.
 * @param {Array<{ name: string, url: string }>} items - Breadcrumb items (last item = current page)
 * @param {string} [className] - Optional wrapper class
 */
export default function Breadcrumb({ items = [], className = '', variant = 'default' }) {
  if (!items?.length) return null;

  const light = variant === 'light';

  return (
    <nav
      className={`text-xs ${light ? 'text-white/70' : 'text-slate-500'} ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex flex-wrap items-center gap-1 sm:gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const href = item.url?.startsWith('http') ? item.url : item.url || '/';
          const isInternal = !item.url?.startsWith('http');

          return (
            <li
              key={i}
              className="inline-flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i !== 0 && (
                <span className={`mx-1 select-none ${light ? 'text-white/35' : 'text-slate-300'}`} aria-hidden="true">
                  /
                </span>
              )}
              {!isLast && isInternal ? (
                <Link
                  href={href}
                  className={`transition-colors ${light ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-800'}`}
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : !isLast && !isInternal ? (
                <a
                  href={href}
                  className={`transition-colors ${light ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-800'}`}
                  itemProp="item"
                  rel="noopener noreferrer"
                >
                  <span itemProp="name">{item.name}</span>
                </a>
              ) : (
                <span
                  className={`truncate max-w-[160px] sm:max-w-xs ${light ? 'text-white' : 'text-slate-800'}`}
                  aria-current="page"
                  itemProp="name"
                >
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
