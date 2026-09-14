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
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="max-w-2xl mb-14">
                    <p className="text-sm font-medium text-[#0f3d68] mb-3">How we work</p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                        A simple process from brief to launch
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        No vague retainers. No surprise scope. You always know what is being built and when it ships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                    {process.map((item) => (
                        <div key={item.step}>
                            <p className="text-xs font-medium text-slate-400 mb-3">{item.step}</p>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="border-t border-slate-100 pt-10">
                    <p className="text-sm text-slate-500 mb-4">Stack we ship with</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {stack.map((item) => (
                            <span key={item} className="text-sm font-medium text-slate-800">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
