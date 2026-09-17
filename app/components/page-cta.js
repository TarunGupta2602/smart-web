import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { CTA_IMAGE } from "@/lib/page-media";

export default function PageCta({
  title = "Have a project? Let’s price it and ship.",
  description = "Send a short brief — goals, timeline, and budget range. We reply with scope and a clear quote. Or start with a free review of your live site.",
  primaryLabel = "Request a quote",
  primaryHref = "/contact",
  secondaryLabel = "Free website review",
  secondaryHref = "/free-website-audit",
  imageSrc = CTA_IMAGE,
}) {
  return (
    <Reveal>
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="relative overflow-hidden px-6 py-10 md:px-12 md:py-14 text-white">
            <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[#0f3d68]/88" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-slate-200 max-w-xl">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href={primaryHref}
                  className="inline-flex px-5 py-2.5 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  {primaryLabel}
                </Link>
                {secondaryHref && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex px-5 py-2.5 rounded-md border border-white/35 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
