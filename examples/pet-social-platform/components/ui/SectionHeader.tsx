import { cn } from "@/lib/utils";
import { ProvenanceMark } from "./Note";
import type { Provenance } from "@/data/provenance";

export function SectionHeader({
  label,
  title,
  description,
  right,
  provenance,
  className,
  size = "md",
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  right?: React.ReactNode;
  /** Where this whole section's data comes from. Renders the badge so no block is left unmarked. */
  provenance?: Provenance;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={cn("pt-6 border-t border-line", className)}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div className="max-w-[60ch]">
          {label && <div className="t-label mb-3">{label}</div>}
          <h2 className={size === "lg" ? "t-h2" : "t-h3"}>{title}</h2>
          {description && <p className="t-body-sm text-ink-2 mt-3 max-w-[56ch]">{description}</p>}
        </div>
        {(right || provenance) && (
          <div className="shrink-0 flex items-center gap-3">
            {right}
            {provenance && <ProvenanceMark provenance={provenance} />}
          </div>
        )}
      </div>
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mt-16 lg:mt-24", className)}>
      {children}
    </section>
  );
}
