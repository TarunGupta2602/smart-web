import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { getAllPosts } from "@/lib/blog";

/**
 * Homepage blog strip — surfaces newest guides for SEO + trust.
 */
export default function HomeBlogSection() {
  const posts = getAllPosts().slice(0, 3);

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
          <Link href="/blog" className="text-sm font-medium text-[#0f3d68] hover:underline shrink-0">
            View all posts →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index + 1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-colors">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    ) : null}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-400 mb-2">
                      {post.date_posted
                        ? new Date(post.date_posted).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : null}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#0f3d68] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
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
