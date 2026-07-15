import Reveal from "@/components/Reveal";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-surface-alt py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
              Nos services
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
                Tous les corps de métier, une seule équipe.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-concrete-dark/70">
              De la structure aux finitions, nous couvrons l&apos;intégralité
              de votre chantier avec le même niveau d&apos;exigence.
            </p>
          </Reveal>
        </div>

        <Reveal
          childSelector=".service-item"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
