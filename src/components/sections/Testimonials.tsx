import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="avis" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
          Avis clients
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
            Ce que nos clients retiennent.
          </h2>
        </Reveal>

        <Reveal
          childSelector=".testimonial-item"
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="testimonial-item relative rounded-3xl border border-navy/10 bg-surface-alt p-8 shadow-[0_1px_3px_rgba(28,29,46,0.06)]"
            >
              <span className="font-display text-5xl text-gold/50">&ldquo;</span>
              <blockquote className="-mt-4 font-body text-lg leading-relaxed text-concrete-dark">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy/10 pt-5">
                <div className="font-display text-sm font-semibold text-navy-dark">
                  {t.name}
                </div>
                <div className="mt-1 font-body text-xs text-concrete-dark/60">
                  {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
