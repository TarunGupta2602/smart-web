"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./reveal";

const services = [
  {
    href: "/services/website-designing#business-websites",
    title: "Business websites",
    description:
      "A clear site that explains your offer and captures leads — mobile-ready, fast, and structured for search.",
    outcome: "More qualified enquiries",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
    alt: "Designer building a business website on a laptop",
  },
  {
    href: "/services/website-designing#ecommerce",
    title: "E-commerce stores",
    description:
      "Catalogs, offers, cart, and checkout with real payments — built so customers can buy on any device.",
    outcome: "A store that takes orders",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    alt: "Retail store ready for online orders",
  },
  {
    href: "/services/website-designing#web-apps",
    title: "Web apps & dashboards",
    description:
      "Login, dashboards, and product flows with Firebase or Supabase — tools your team can use every day.",
    outcome: "Less manual work",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    alt: "Product dashboard charts on a desktop screen",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital marketing",
    description:
      "Practical campaigns across social, ads, content, and email — measured against leads and revenue.",
    outcome: "Steady lead flow",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Team planning a marketing campaign around a table",
  },
  {
    href: "/services/seo",
    title: "SEO",
    description:
      "Technical fixes, keyword strategy, and on-page work that improve rankings and lasting organic traffic.",
    outcome: "Sustainable visibility",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Analytics charts used to review search performance",
  },
];

function ServiceCard({ service, index }) {
  return (
    <article id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="stack-card">
      <div className="stack-card-face">
        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-[#12151c] text-white shadow-[0_30px_90px_-28px_rgba(15,23,42,0.55)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[440px]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col px-5 py-6 sm:px-8 sm:py-8 lg:py-9 lg:pr-9 lg:pl-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              {String(index + 1).padStart(2, "0")} — {service.outcome}
            </p>
            <h3 className="mt-4 font-display text-[clamp(1.85rem,3.1vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              {service.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-[15px]">
              {service.description}
            </p>
            <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
              <div className="border border-white/15 px-5 py-4">
                <p className="font-display text-lg font-semibold tracking-tight sm:text-xl">{service.outcome}</p>
              </div>
              <Link
                href={service.href}
                className="press link-shift inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 hover:border-white/50"
              >
                Learn more <span className="shift-icon" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const deck = root.querySelector("[data-deck]");
        const cards = gsap.utils.toArray(".stack-card", root);
        const faces = gsap.utils.toArray(".stack-card-face", root);
        if (!deck || cards.length < 2 || faces.length !== cards.length) return undefined;

        cards.forEach((card, index) => {
          card.style.zIndex = String(index + 1);
          card.style.pointerEvents = "none";
        });
        const statement = root.querySelector("[data-statement]");
        gsap.set(faces, { yPercent: 145, scale: 0.98, autoAlpha: 0, force3D: true });
        faces.forEach((face) => {
          face.style.pointerEvents = "none";
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deck,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * cards.length)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onUpdate: () => {
              let active = 0;
              faces.forEach((face, index) => {
                const y = Number(gsap.getProperty(face, "yPercent"));
                if (y < 55) active = index;
              });
              faces.forEach((face, index) => {
                face.style.pointerEvents = index === active ? "auto" : "none";
              });
            },
          },
        });

        tl.fromTo(
          faces[0],
          { yPercent: 145, scale: 0.98, autoAlpha: 1, force3D: true },
          { yPercent: 0, scale: 1, autoAlpha: 1, ease: "none", duration: 1, force3D: true },
          0
        );
        if (statement) {
          tl.to(statement, { autoAlpha: 0, scale: 0.94, duration: 0.65, ease: "none" }, 0.3);
        }

        faces.forEach((face, index) => {
          if (index === 0) return;
          const at = index;
          tl.to(
            faces[index - 1],
            { yPercent: -10, scale: 0.94, ease: "none", duration: 1, force3D: true },
            at
          ).fromTo(
            face,
            { yPercent: 145, scale: 0.98, autoAlpha: 1, force3D: true },
            { yPercent: 0, scale: 1, autoAlpha: 1, ease: "none", duration: 1, force3D: true, immediateRender: false },
            at
          );
        });

        return () => {
          gsap.set(faces, { clearProps: "all" });
          if (statement) gsap.set(statement, { clearProps: "all" });
          cards.forEach((card) => {
            card.style.zIndex = "";
            card.style.pointerEvents = "";
          });
          faces.forEach((face) => {
            face.style.pointerEvents = "";
          });
        };
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .service-deck {
            height: 100svh;
            overflow: hidden;
          }
          .stack-stage {
            height: 100%;
            position: relative;
          }
          .stack-card {
            position: absolute;
            left: 50%;
            top: 50%;
            width: min(1120px, 94vw);
            transform: translate(-50%, -50%);
          }
          .stack-card .stack-card-face {
            opacity: 0;
            visibility: hidden;
          }
          [data-statement] {
            position: absolute;
            inset: 0;
            min-height: 0;
            padding-top: 0;
            padding-bottom: 0;
          }
        }
      `}</style>
      <div
        data-deck
        className="service-deck relative bg-[radial-gradient(ellipse_at_center,#efe8f8_0%,#f6f4fb_46%,#ffffff_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-50" />
        <div
          data-statement
          className="relative z-0 flex min-h-[78vh] items-center justify-center px-5 py-24 lg:absolute lg:inset-0 lg:min-h-0 lg:py-0"
        >
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-[clamp(3.3rem,8.6vw,7.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              <Reveal as="span" className="block text-[#3f4654]">
                See it live.
              </Reveal>
              <Reveal as="span" delay={2} className="mt-1 block text-[#8ea0c9]">
                Price it first.
              </Reveal>
            </h2>
            <Reveal as="p" delay={3} className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-slate-500 md:text-base">
              A business site, a store, or a web app. Scope and a fixed quote in writing, then a URL your customers can open.
            </Reveal>
          </div>
        </div>
        <div className="stack-stage relative z-10 mx-auto flex max-w-[1120px] flex-col gap-6 px-4 pb-16 sm:px-6 lg:block lg:px-0 lg:pb-0">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
          <p className="text-sm text-slate-600">
            Prefer to talk first? Call{" "}
            <a href="tel:+917456096455" className="font-medium text-slate-900 hover:underline">
              +91 74560 96455
            </a>
          </p>
          <Link
            href="/contact"
            className="press inline-flex self-start rounded-md bg-[#0f3d68] px-5 py-2.5 text-sm font-medium text-white"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
