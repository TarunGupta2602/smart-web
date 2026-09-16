import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";
import { GOOGLE_BUSINESS_URL } from "@/lib/seo";

/**
 * Honest proof — live projects + Google Business Profile (no fabricated person quotes).
 */
export default function TestimonialsSection() {
  const highlights = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">Proof & reviews</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Live work you can open — plus Google reviews
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We show shipped projects with visit links, not invented quotes. For reviews and directions,
            use our{" "}
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f3d68] font-medium hover:underline"
            >
              Google Business Profile
            </a>
            .
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {highlights.map((project, index) => (
            <Reveal key={project.title} delay={index + 1}>
              <article className="h-full border border-slate-200 p-6 bg-slate-50/60 flex flex-col">
                <p className="text-xs text-slate-400 mb-2">{project.category}</p>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{project.result}</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0f3d68] hover:underline"
                >
                  Visit live site →
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-16">
          <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-xl">
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Google reviews
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                After a project ships, we ask clients to leave an honest review on Google.
                If you have worked with us — or want to see what others say as reviews land — open the profile below.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] text-white text-sm font-semibold hover:bg-[#0a2f52] transition-colors"
              >
                Open Google Business Profile
              </a>
              <Link
                href="/projects"
                className="inline-flex px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-white transition-colors"
              >
                All live projects
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden px-6 py-10 md:px-12 md:py-14 text-white">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=70"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0f3d68]/88" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                  Have a project? Let’s price it and ship.
                </h3>
                <p className="text-sm text-slate-200 max-w-xl">
                  Packages start at ₹5,000 / ₹10,000 / ₹15,000. Send a short brief — we reply with scope and a fixed quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/pricing"
                  className="inline-flex px-5 py-2.5 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  See pricing
                </Link>
                <a
                  href="https://wa.me/917456096455"
                  className="inline-flex px-5 py-2.5 rounded-md border border-white/35 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
