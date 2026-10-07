import StackMarquee from "./stack-marquee";
import ProcessShowcase from "./process-showcase";

const stack = ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "Supabase"];

export default function ClientsSection() {
  return (
    <section className="bg-white pt-20 md:pt-28">
      <div className="mx-auto mb-16 max-w-7xl px-4 sm:px-5 lg:px-6">
        <ProcessShowcase />

      </div>

      <div>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-5">
          Stack we ship with
        </p>
        <StackMarquee items={stack} />
      </div>
    </section>
  );
}
