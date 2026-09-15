"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Poster-first hero video — loads/plays only when near viewport to keep LCP fast.
 */
export default function LazyHeroVideo({
  src,
  poster,
  className = "h-full w-full object-cover animate-slow-zoom",
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !src) return undefined;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = Boolean(connection?.saveData);
    const slowNet = connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";
    if (saveData || slowNet) return undefined;

    let idleId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          // Defer network until browser is idle when possible.
          if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 1200 });
          } else {
            setTimeout(() => setShouldLoad(true), 200);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (idleId && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
    };
  }, [src]);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Poster remains if autoplay is blocked.
      }
    };
    play();
  }, [shouldLoad, src]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          className={`${className} absolute inset-0`}
          fetchPriority="high"
          decoding="async"
        />
      ) : null}
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={`${className} absolute inset-0`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
