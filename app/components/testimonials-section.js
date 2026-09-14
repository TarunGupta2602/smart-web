import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";

const testimonials = [
  {
    quote:
      "SmartSoft rebuilt our jewellery store with clear collections, offers, and a checkout that works on mobile. We moved from brochure traffic to real online orders.",
    name: "Ananya R.",
    role: "Founder, jewellery brand",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Our support site finally turns urgent printer issues into phone calls. Clear pages, call-first CTAs, and a callback flow that our team can manage.",
    name: "Imran K.",
    role: "Owner, print support business",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Clear quote, weekly demos, and a maintainable Next.js codebase. No surprise fees. Exactly what we needed from a development partner.",
    name: "Sarah L.",
    role: "Marketing lead, service company",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">Client feedback</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            What partners say after launch
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real projects. Clear communication. Live results — not slide decks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index + 1}>
              <figure className="h-full border border-slate-200 p-6 bg-slate-50/60">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-slate-200">
                    <Image src={t.image} alt="" fill sizes="44px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative overflow-hidden px-6 py-10 md:px-12 md:py-14 text-white">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80"
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
                  Send a short brief — what you need, timeline, and budget range. We reply with scope and a clear quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex px-5 py-2.5 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  Request a quote
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
