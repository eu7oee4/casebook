import { Illustrative, ProvenanceMark } from "./Note";
import type { Provenance } from "@/data/provenance";
import { cn } from "@/lib/utils";

/** Not a card: a titled figure with a hairline, a question it answers, and a caption. */
export function ChartCard({
  title,
  question,
  children,
  caption,
  className,
  height,
  illustrative = true,
  provenance,
  legend,
}: {
  title: string;
  question?: string;
  children: React.ReactNode;
  caption?: React.ReactNode;
  className?: string;
  height?: number;
  illustrative?: boolean;
  /** Preferred over `illustrative`: shows Illustrative / Estimate / Source according to confidence. */
  provenance?: Provenance;
  legend?: Array<{ label: string; color: string }>;
}) {
  return (
    <figure className={cn("border-t border-line pt-4 min-w-0", className)}>
      <figcaption className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-[14px] font-medium text-ink">{title}</div>
          {question && <div className="t-caption mt-0.5">{question}</div>}
        </div>
        <div className="flex items-center gap-3">
          {legend && (
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {legend.map((l) => (
                <li key={l.label} className="inline-flex items-center gap-1.5 text-[12px] text-ink-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </li>
              ))}
            </ul>
          )}
          {provenance ? <ProvenanceMark provenance={provenance} /> : illustrative && <Illustrative />}
        </div>
      </figcaption>
      <div className="mt-5 min-w-0" style={height ? { height } : undefined}>
        {children}
      </div>
      {caption && <div className="t-annotation mt-3">{caption}</div>}
    </figure>
  );
}
