import Reveal from "@/components/Reveal";

const STATS = [
  { value: "15+", label: "années d'expérience cumulée" },
  { value: "200+", label: "chantiers livrés" },
  { value: "100%", label: "devis gratuits & transparents" },
];

const DIRECTION = [
  { name: "Pawel Smolinski", role: "Co-gérant" },
  { name: "Artur Wyszyński", role: "Co-gérant" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function About() {
  return (
    <section id="apropos" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
              À propos
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
                Une entreprise générale, une exigence : le détail.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="font-body text-lg leading-relaxed text-concrete-dark sm:text-xl">
                RENOTRANS SRL est une entreprise générale de rénovation et
                transformation basée à Bruxelles. Du gros œuvre aux finitions
                les plus fines, nous accompagnons particuliers et
                professionnels avec une exigence constante : livrer un
                travail soigné, dans les délais, au prix annoncé.
              </p>
              <p className="mt-6 font-body text-lg leading-relaxed text-concrete-dark/70 sm:text-xl">
                Notre équipe intervient sur l&apos;ensemble du corps de
                métier — démolition, chapes, plafonnage, carrelage, parquet,
                peinture, châssis — pour vous offrir un interlocuteur unique
                du premier coup de crayon à la remise des clés.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              childSelector=".stat-item"
              className="mt-14 grid grid-cols-1 gap-8 border-t border-navy/10 pt-10 sm:grid-cols-3"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-body text-sm text-concrete-dark/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={0.1}
          childSelector=".director-item"
          className="mt-20 border-t border-navy/10 pt-14"
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
            Direction
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-14">
            {DIRECTION.map((person) => (
              <div key={person.name} className="director-item flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark font-display text-lg font-bold text-ink">
                  {getInitials(person.name)}
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-navy-dark">
                    {person.name}
                  </div>
                  <div className="mt-1 font-body text-sm uppercase tracking-wider text-gold-dark">
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
