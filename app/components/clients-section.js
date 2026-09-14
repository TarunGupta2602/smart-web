import Image from "next/image";
import Reveal from "./reveal";

const process = [
  {
    step: "01",
    title: "Brief & quote",
    text: "You share the goal, timeline, and budget range. We reply with scope and a fixed price before work begins.",
  },
  {
    step: "02",
    title: "Build with demos",
    text: "We design and develop in Next.js or React with weekly progress you can review. Changes stay controlled.",
  },
  {
    step: "03",
    title: "Launch & handoff",
    text: "We deploy to production, polish the final items, and hand you a maintainable codebase with next steps.",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "Supabase"];

export default function ClientsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-medium text-[#0f3d68] mb-3">How we work</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              A simple process from brief to launch
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
              No vague retainers. No surprise scope. You always know what is being built and when it ships.
            </p>
            <div className="space-y-7">
              {process.map((item) => (
                <div key={item.step} className="border-l-2 border-[#0f3d68]/25 pl-5">
                  <p className="text-xs font-medium text-slate-400 mb-1">{item.step}</p>
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={2}>
            <div className="media-frame relative aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] bg-slate-100 animate-float-soft">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
                alt="Team collaborating on a website project in a bright office"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-t border-slate-100 pt-10">
            <p className="text-sm text-slate-500 mb-4">Stack we ship with</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {stack.map((item) => (
                <span key={item} className="font-display text-sm font-semibold text-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
