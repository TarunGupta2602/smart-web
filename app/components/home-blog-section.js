import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { getAllPosts } from "@/lib/blog";

/**
 * Homepage blog strip — surfaces newest guides for SEO + trust.
 */
const FEATURED_SLUGS = [
  "business-website-cost-in-india",
  "website-development-cost-in-delhi-2026",
  "seo-checklist-for-new-business-website",
];

export default function HomeBlogSection() {
  const all = getAllPosts();
  const featured = FEATURED_SLUGS.map((slug) => all.find((post) => post.slug === slug)).filter(Boolean);
  const posts = featured.length ? featured : all.slice(0, 3);

  if (!posts.length) return null;

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0f3d68] mb-3">Guides</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
              Practical website advice for Indian businesses
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pricing, hiring checklists, e-commerce launches, and SEO — written for owners who need leads, not fluff.
            </p>
          </div>
          <Link href="/blog" className="link-shift shrink-0 text-sm font-medium text-[#0f3d68]">
            View all posts <span className="shift-icon" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index + 1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#0f3d68]/20 group-hover:shadow-[0_24px_50px_-24px_rgba(15,61,104,0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={`object-cover transition duration-700 group-hover:scale-[1.04] ${
                          post.image.includes("storyboard") ? "object-[center_18%]" : "object-center"
                        }`}
                      />
                    ) : null}
                  </div>
                  <div className="flex h-[calc(100%-0px)] flex-col p-5">
                    <p className="mb-2 text-xs text-slate-400">
                      {post.date_posted
                        ? new Date(post.date_posted).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : null}
                    </p>
                    <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#0f3d68]">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
                    <span className="link-shift mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0f3d68]">
                      Read guide <span className="shift-icon" aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
