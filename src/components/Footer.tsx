import Logo from "@/components/Logo";

const LINKS = [
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-dark pb-8 pt-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-concrete-light/50">
              Entreprise générale de rénovation et transformation à
              Bruxelles. Gros œuvre, finitions, châssis — un seul
              interlocuteur.
            </p>
            <a
              href="https://www.facebook.com/people/Renotrans-SRL/61571651499920/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RENOTRANS SRL sur Facebook"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-concrete-light/70 transition-colors hover:border-gold hover:text-gold-light"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
            </a>
          </div>

          <div>
            <div className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">
              Navigation
            </div>
            <nav className="mt-5 grid grid-cols-2 gap-3">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline w-fit font-body text-sm text-concrete-light/70 hover:text-white"

                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-body text-xs uppercase tracking-[0.3em] text-gold-light">
              Contact
            </div>
            <div className="mt-5 space-y-2 font-body text-sm text-concrete-light/70">
              <p>Avenue de la Constitution 49, 1083 Bruxelles</p>
              <p>0478 231 696</p>
              <p>renotrans@hotmail.com</p>
              <p className="text-concrete-light/40">TVA BE0896.706.404</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-concrete-light/40">
            © {new Date().getFullYear()} RENOTRANS SRL. Tous droits réservés.
          </p>
          <p className="font-body text-xs text-concrete-light/30">
            Bruxelles, Belgique
          </p>
        </div>
      </div>
    </footer>
  );
}
