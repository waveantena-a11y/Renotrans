import Reveal from "@/components/Reveal";
import FAQItem from "./FAQItem";
import { FAQ as FAQ_DATA } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-surface-alt py-28 sm:py-36">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-10 md:px-14">
        <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
          FAQ
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
            Questions fréquentes.
          </h2>
        </Reveal>

        <Reveal delay={0.1} childSelector=".faq-item" className="mt-14 border-t border-navy/10">
          {FAQ_DATA.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
