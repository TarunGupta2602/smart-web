import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";

const services = [
  {
    slug: "website-designing",
    title: "Business websites",
    description:
      "A clear site that explains your offer and captures leads — mobile-ready, fast, and structured for search.",
    outcome: "More qualified enquiries",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard on a laptop for a business website",
  },
  {
    slug: "website-designing",
    title: "E-commerce stores",
    description:
      "Catalogs, offers, cart, and checkout with real payments — built so customers can buy on any device.",
    outcome: "A store that takes orders",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    alt: "Customer completing an online checkout on a phone",
  },
  {
    slug: "website-designing",
    title: "Web apps & dashboards",
    description:
      "Login, dashboards, and product flows with Firebase or Supabase — tools your team can use every day.",
    outcome: "Less manual work",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Product dashboard charts on a desktop screen",
  },
  {
    slug: "digital-marketing",
    title: "Digital marketing",
    description:
      "Practical campaigns across social, ads, content, and email — measured against leads and revenue.",
    outcome: "Steady lead flow",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    alt: "Marketing planning notes and laptop for campaigns",
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Technical fixes, keyword strategy, and on-page work that improve rankings and lasting organic traffic.",
    outcome: "Sustainable visibility",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
    alt: "Search results and SEO research on a computer",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 soft-grid pointer-events-none opacity-70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">What we build</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Website, store, and growth services that ship live
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fixed quotes before build starts. Weekly demos while we work. Production deploy and handoff so your team can run the product.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) + 1}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="media-frame relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 mb-2">{service.outcome}</p>
                  <h3 className="font-display text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0f3d68] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm font-medium text-[#0f3d68]">Learn more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-600">
            Prefer to talk first? Call{" "}
            <a href="tel:17077084062" className="font-medium text-slate-900 hover:underline">
              +1 707 708 4062
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
          >
            Request a quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
