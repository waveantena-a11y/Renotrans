import { ServiceIcon } from "@/components/icons";

export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <div className="service-item rounded-lg border border-navy/10 bg-surface p-8 shadow-[0_1px_3px_rgba(28,29,46,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_20px_rgba(28,29,46,0.1)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gold/10 text-gold-dark">
        <ServiceIcon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-navy-dark">
        {title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-concrete-dark/70">
        {description}
      </p>
    </div>
  );
}
