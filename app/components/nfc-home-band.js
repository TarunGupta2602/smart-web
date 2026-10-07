"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NfcReelPlayer from "./nfc-reel-player";
import { NFC_PROMO } from "@/lib/page-media";
import { CONTACT_WHATSAPP_URL } from "@/lib/seo";

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I want the NFC + QR digital menu pilot for my restaurant."
)}`;

export default function NfcHomeBand() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const pin = root.querySelector("[data-nfc-pin]");
        const video = root.querySelector("[data-nfc-video]");
        const frame = root.querySelector("[data-nfc-frame]");
        const chrome = gsap.utils.toArray("[data-nfc-chrome]", root);
        const copy = root.querySelector("[data-nfc-copy]");
        const veil = root.querySelector("[data-nfc-veil]");
        const focus = root.querySelector("[data-nfc-focus]");
        const card = root.querySelector("[data-nfc-card]");
        const caption = root.querySelector("[data-nfc-caption]");
        if (!pin || !video || !frame || !copy || !veil || !focus || !card || !caption) return undefined;

        const big = { x: 0, y: 0, scale: 1 };

        const measure = () => {
          const pinRect = pin.getBoundingClientRect();
          const rect = video.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const vw = document.documentElement.clientWidth;
          const vh = document.documentElement.clientHeight;
          const padTop = 88;
          const padBottom = 78;
          const padX = 40;
          const maxW = Math.min(vw - padX * 2, 520);
          const maxH = vh - padTop - padBottom;
          const scale = Math.min(maxW / rect.width, maxH / rect.height);
          const scaledW = rect.width * scale;
          const scaledH = rect.height * scale;
          const left = rect.left - pinRect.left;
          const top = rect.top - pinRect.top;
          big.x = (vw - scaledW) / 2 - left;
          big.y = padTop + (maxH - scaledH) / 2 - top;
          big.scale = scale;
        };

        gsap.set(video, { clearProps: "transform", transformOrigin: "0% 0%" });
        measure();

        const grow = {
          x: () => big.x,
          y: () => big.y,
          scale: () => big.scale,
          transformOrigin: "0% 0%",
          duration: 0.32,
          ease: "power2.inOut",
          force3D: true,
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * 1.45)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.45,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onRefreshInit: () => {
              gsap.set(video, { clearProps: "transform", transformOrigin: "0% 0%" });
              measure();
            },
          },
        });

        tl.to(video, grow, 0.18)
          .to(frame, { borderRadius: "1.15rem", borderWidth: 0, duration: 0.32, ease: "power2.inOut" }, 0.18)
          .to(chrome, { autoAlpha: 0, duration: 0.18, ease: "power2.out" }, 0.18)
          .to(veil, { autoAlpha: 1, duration: 0.26, ease: "power2.out" }, 0.2)
          .to(copy, { autoAlpha: 0, duration: 0.2, ease: "power2.out" }, 0.18)
          .to(caption, { autoAlpha: 0, duration: 0.16, ease: "power2.out" }, 0.18)
          .to(card, { backgroundColor: "rgba(8,18,32,0)", duration: 0.2, ease: "power2.out" }, 0.18)
          .to(focus, { autoAlpha: 1, duration: 0.22, ease: "power2.out" }, 0.4)
          .to(
            video,
            {
              x: 0,
              y: 0,
              scale: 1,
              transformOrigin: "0% 0%",
              duration: 0.32,
              ease: "power2.inOut",
              force3D: true,
            },
            0.68
          )
          .to(frame, { borderRadius: "2.15rem", borderWidth: 10, duration: 0.32, ease: "power2.inOut" }, 0.68)
          .to(veil, { autoAlpha: 0, duration: 0.26, ease: "power2.out" }, 0.68)
          .to(focus, { autoAlpha: 0, duration: 0.14, ease: "power2.out" }, 0.66)
          .to(copy, { autoAlpha: 1, duration: 0.26, ease: "power2.out" }, 0.76)
          .to(card, { backgroundColor: "#081220", duration: 0.22, ease: "power2.out" }, 0.8)
          .to(chrome, { autoAlpha: 1, duration: 0.2, ease: "power2.out" }, 0.84)
          .to(caption, { autoAlpha: 1, duration: 0.2, ease: "power2.out" }, 0.84);

        return () => {
          gsap.set([video, copy, frame, veil, focus, card, caption, ...chrome], { clearProps: "all" });
        };
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative border-b border-slate-200 bg-slate-50">
      <div data-nfc-pin className="relative overflow-visible">
        <div data-nfc-veil className="pointer-events-none absolute inset-0 bg-[#07111c] opacity-0" />
        <p
          data-nfc-focus
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(92vw,420px)] -translate-x-1/2 text-center text-sm font-medium tracking-wide text-white/85 opacity-0"
        >
          Tap NFC or scan QR — menu, cart, then the kitchen sees the table
        </p>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 md:py-14 lg:px-6 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div data-nfc-copy className="lg:col-span-7">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f3d68]">
                <span className="rounded-full bg-[#0f3d68] px-2 py-0.5 text-white">New</span>
                For restaurants &amp; cafes
              </p>
              <h2
                data-nfc-title
                className="mb-4 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.35rem] lg:leading-[1.05]"
              >
                NFC QR digital menu — tap, order, kitchen sees the table.
              </h2>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                A complete table-ordering system, not a PDF behind a sticker. Guests tap NFC or scan QR,
                order from the live menu, and your dashboard shows table number, items, and status. No guest app.
              </p>
              <ul className="mb-8 grid max-w-lg grid-cols-1 gap-2.5 text-sm text-slate-700 sm:grid-cols-2">
                {["NFC tap + QR backup", "Live menu & cart", "Unique link per table", "Free 1–2 restaurant pilot"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f3d68]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services/nfc-digital-menu"
                  className="press inline-flex rounded-md bg-[#0f3d68] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a2f52]"
                >
                  See the NFC menu
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400"
                >
                  WhatsApp the pilot
                </a>
              </div>
            </div>

            <div className="relative z-20 lg:col-span-5">
              <div data-nfc-card className="relative z-10 mx-auto w-full max-w-[340px] rounded-3xl bg-[#081220] px-6 py-8 sm:px-8 sm:py-10">
                  <div data-nfc-video className="mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[250px]">
                    <NfcReelPlayer
                      src={NFC_PROMO.src}
                      poster={NFC_PROMO.poster}
                      title={NFC_PROMO.title}
                      className="max-w-none w-full"
                    />
                  </div>
                  <p data-nfc-caption className="mt-4 text-center text-xs text-slate-400">29-second walkthrough · no guest app</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
