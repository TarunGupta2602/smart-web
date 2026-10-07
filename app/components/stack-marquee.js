export default function StackMarquee({ items }) {
  const row = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-clip relative border-y border-slate-200 bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-40" />
      <div className="animate-marquee flex w-max items-center py-7 sm:py-8">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? "true" : undefined}>
            {row.map((item, index) => (
              <span key={`${copy}-${item}-${index}`} className="flex items-center">
                <span className="px-4 font-display text-lg font-semibold tracking-tight text-slate-900 sm:px-6 sm:text-2xl">
                  {item}
                </span>
                <span className="text-[#0f3d68]/35" aria-hidden="true">
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
