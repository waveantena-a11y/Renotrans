import Reveal from "@/components/Reveal";
import { WHY_US } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="relative bg-surface-alt py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
              Pourquoi nous choisir
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
                La confiance se construit, brique après brique.
              </h2>
            </Reveal>
          </div>

          <Reveal
            childSelector=".why-item"
            className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:col-span-8"
          >
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="why-item group relative bg-surface p-9 transition-colors duration-300 hover:bg-surface-alt"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-display text-gold-dark">
                  ✓
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-dark">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-concrete-dark/70">
                  {item.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
