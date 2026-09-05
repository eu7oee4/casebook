import { cn } from "@/lib/utils";

export function InsightCard({
  index,
  title,
  body,
  className,
  tone = "default",
}: {
  index?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <div className={cn("border-t pt-5", tone === "accent" ? "border-accent" : "border-ink", className)}>
      {index && <div className={cn("t-mono mb-4", tone === "accent" ? "text-accent" : "text-ink-3")}>{index}</div>}
      <h3 className="t-statement">{title}</h3>
      {body && <p className="t-body-sm text-ink-2 mt-4 max-w-[44ch]">{body}</p>}
    </div>
  );
}

/** Label → value pairs; the editorial substitute for a card grid. */
export function Spec({
  rows,
  className,
  dense,
}: {
  rows: Array<{ label: string; value: React.ReactNode }>;
  className?: string;
  dense?: boolean;
}) {
  return (
    <dl className={cn("divide-y divide-line", className)}>
      {rows.map((r) => (
        <div key={r.label} className={cn("grid grid-cols-[112px_1fr] gap-4", dense ? "py-2" : "py-3")}>
          <dt className="t-label pt-[3px]">{r.label}</dt>
          <dd className="text-[14px] leading-6 text-ink">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
