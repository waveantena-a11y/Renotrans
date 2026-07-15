import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface-alt py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <div className="text-center">
          <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
            Contact
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
              Parlons de votre projet.
            </h2>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-navy/10 bg-surface shadow-[0_1px_3px_rgba(28,29,46,0.08)] lg:grid-cols-5"
        >
          <div className="relative bg-navy-dark p-10 lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-white">
              RENOTRANS SRL
            </h3>
            <p className="mt-2 font-body text-sm text-white/60">
              Tous travaux de rénovation et transformation
            </p>

            <div className="mt-10 space-y-6">
              <a href="tel:+32478231696" className="flex items-start gap-4">
                <span className="mt-0.5 text-gold-light">☎</span>
                <div>
                  <div className="font-body text-xs uppercase tracking-wider text-white/50">
                    Téléphone
                  </div>
                  <div className="font-display text-lg text-white">0478 231 696</div>
                </div>
              </a>
              <a href="mailto:renotrans@hotmail.com" className="flex items-start gap-4">
                <span className="mt-0.5 text-gold-light">✉</span>
                <div>
                  <div className="font-body text-xs uppercase tracking-wider text-white/50">
                    Email
                  </div>
                  <div className="font-display text-lg text-white">renotrans@hotmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-gold-light">⌂</span>
                <div>
                  <div className="font-body text-xs uppercase tracking-wider text-white/50">
                    Adresse
                  </div>
                  <div className="font-display text-lg text-white">
                    Avenue de la Constitution 49
                    <br />
                    1083 Bruxelles
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-10 font-body text-xs text-white/40">
              TVA BE0896.706.404
            </p>
          </div>

          <div className="bg-surface p-10 lg:col-span-3">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
