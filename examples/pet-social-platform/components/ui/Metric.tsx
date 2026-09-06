import { cn } from "@/lib/utils";
import type { Provenance } from "@/data/provenance";
import { ProvenanceMark } from "./Note";
import { ProvenanceHover } from "./ProvenanceHover";

export type MetricProps = {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  delta?: { value: string; direction: "up" | "down" | "flat"; good?: boolean };
  /** Where the number comes from. Omit for pure product targets; hypothesis is shown as "Illustrative". */
  provenance?: Provenance;
  size?: "md" | "lg";
  className?: string;
};

export function Metric({ label, value, unit, note, delta, provenance, size = "md", className }: MetricProps) {
  return (
    <div className={cn("flex h-full flex-col gap-2 min-w-0", className)}>
      <div className="t-label">{label}</div>
      <div className="flex items-baseline gap-1.5">
        {provenance ? (
          <ProvenanceHover provenance={provenance} cue>
            <span className={size === "lg" ? "t-metric" : "t-metric-sm"}>{value}</span>
          </ProvenanceHover>
        ) : (
          <span className={size === "lg" ? "t-metric" : "t-metric-sm"}>{value}</span>
        )}
        {unit && <span className="text-sm text-ink-3">{unit}</span>}
        {delta && (
          <span
            className={cn(
              "ml-2 t-mono",
              delta.good === undefined ? "text-ink-2" : delta.good ? "text-accent-ink" : "text-ink-2"
            )}
          >
            {delta.direction === "up" ? "↑" : delta.direction === "down" ? "↓" : "→"} {delta.value}
          </span>
        )}
      </div>
      {note && <div className="t-caption">{note}</div>}
      {provenance && provenance.confidence !== "hypothesis" && (
        <div className="pt-1 mt-auto min-w-0">
          <ProvenanceMark provenance={provenance} />
        </div>
      )}
    </div>
  );
}

export function MetricGrid({
  items,
  columns = 4,
  className,
  size,
}: {
  items: MetricProps[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
  size?: "md" | "lg";
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    5: "sm:grid-cols-3 lg:grid-cols-5",
  }[columns];
  return (
    <div className={cn("grid grid-cols-1 gap-y-8 gap-x-8", cols, className)}>
      {items.map((m) => (
        <div key={m.label} className="border-t border-line-2 pt-4">
          <Metric {...m} size={size ?? m.size} />
        </div>
      ))}
    </div>
  );
}
