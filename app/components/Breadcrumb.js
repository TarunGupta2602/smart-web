'use client';

import Link from 'next/link';

/**
 * Accessible breadcrumb navigation for SEO and UX.
 * Use with breadcrumbList() from @/lib/schema for JSON-LD on the same page.
 * @param {Array<{ name: string, url: string }>} items - Breadcrumb items (last item = current page)
 * @param {string} [className] - Optional wrapper class
 */
export default function Breadcrumb({ items = [], className = '' }) {
  if (!items?.length) return null;

  return (
    <nav
      className={`text-xs sm:text-sm text-gray-600 ${className}`}
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
                <span className="mx-1 text-gray-400 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {!isLast && isInternal ? (
                <Link
                  href={href}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : !isLast && !isInternal ? (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  itemProp="item"
                  rel="noopener noreferrer"
                >
                  <span itemProp="name">{item.name}</span>
                </a>
              ) : (
                <span
                  className="text-gray-900 font-semibold truncate max-w-[160px] sm:max-w-xs"
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
