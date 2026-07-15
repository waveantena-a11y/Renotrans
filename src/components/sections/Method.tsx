import Reveal from "@/components/Reveal";
import { METHOD_STEPS } from "@/lib/content";

export default function Method() {
  return (
    <section id="methode" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
          Notre méthode
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
            Un process clair, du premier appel à la remise des clés.
          </h2>
        </Reveal>

        <Reveal
          childSelector=".method-item"
          className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent lg:block" />
          {METHOD_STEPS.map((step) => (
            <div key={step.n} className="method-item relative">
              <span className="font-display text-6xl font-bold text-gradient-gold">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-dark">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-concrete-dark/70">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
