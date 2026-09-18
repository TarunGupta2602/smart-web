"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 9:16 product reel in a phone bezel — never cropped into landscape.
 */
export default function NfcReelPlayer({ src, poster, title, className = "max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]" }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return undefined;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = Boolean(connection?.saveData);
    const slowNet = connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";
    if (saveData || slowNet) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return undefined;
    const video = videoRef.current;
    const node = wrapRef.current;
    if (!video || !node) return undefined;

    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    visibility.observe(node);
    play();
    return () => visibility.disconnect();
  }, [load]);

  return (
    <div ref={wrapRef} className={`mx-auto w-full ${className}`}>
      <div className="relative rounded-[2.15rem] border-[10px] border-slate-950 bg-slate-950 shadow-[0_28px_70px_rgba(0,0,0,0.5)] overflow-hidden aspect-[9/16]">
        <div className="pointer-events-none absolute top-2 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
        ) : null}
        {load ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            controls={false}
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            title={title}
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}
        <div className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-1 w-20 -translate-x-1/2 rounded-full bg-white/35" />
      </div>
    </div>
  );
}
