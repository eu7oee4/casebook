"use client";

import { cn } from "@/lib/utils";
import { HYPOTHESIS, provenanceBadge, provenanceKind, type Provenance } from "@/data/provenance";
import { useLocale, useT } from "@/lib/locale-context";
import { ProvenanceHover } from "./ProvenanceHover";
import type { Str } from "@/lib/i18n";

/** Marks data as illustrative — never presented as real market fact. */
export function Illustrative({ className, label }: { className?: string; label?: Str }) {
  const t = useT();
  return (
    <ProvenanceMark
      provenance={HYPOTHESIS}
      label={label ? t(label) : t({ en: "Illustrative data", zh: "示意数据" })}
      className={className}
    />
  );
}

/**
 * Shows where a number comes from. Hypothesis → "Illustrative"; estimate/verified/contradicted → source.
 * The dot colour is the status: clay = hypothesis, grey = estimate, moss = verified, blue = contradicted.
 * Hovering (or focusing / tapping) the badge opens a card with the full provenance — source link,
 * retrieval date and note — so the badge itself is no longer a link.
 */
export function ProvenanceMark({
  provenance,
  label,
  className,
}: {
  provenance: Provenance;
  label?: string;
  className?: string;
}) {
  const locale = useLocale();
  const text = label ?? provenanceBadge(provenance, locale);
  const kind = provenanceKind(provenance);
  // Shape carries the distinction so it survives greyscale and colour-blindness; colour only reinforces it.
  // round + filled = sourced · round + hollow = invented · square = the proposal itself, nothing to cite.
  const dot =
    kind === "invented"
      ? "rounded-full border border-series-3 bg-transparent"
      : kind === "design"
        ? "rounded-[1px] bg-ink-3"
        : provenance.confidence === "verified"
          ? "rounded-full bg-accent"
          : provenance.confidence === "contradicted"
            ? "rounded-full bg-series-2"
            : "rounded-full bg-ink-3";
  return (
    <ProvenanceHover provenance={provenance} className={className}>
      <span
        className={cn(
          "inline-flex items-center gap-1.5 min-w-0 max-w-full font-mono text-[11px] leading-[1.4] tracking-[0.06em] rounded-sm px-1.5 py-[3px] cursor-help border transition-colors",
          kind === "invented"
            ? "border-dashed border-line-2 text-ink-3 uppercase tracking-[0.12em] hover:text-ink-2 hover:border-ink-3"
            : "border-solid border-line-2 text-ink-2 hover:text-ink hover:border-ink"
        )}
      >
        <span className={cn("h-1.5 w-1.5 shrink-0", dot)} aria-hidden />
        <span className="truncate min-w-0 max-w-[32ch]">{text}</span>
      </span>
    </ProvenanceHover>
  );
}

export function Annotation({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("t-annotation max-w-[40ch]", className)}>{children}</p>;
}

export function Rule({ strong, className }: { strong?: boolean; className?: string }) {
  return <hr className={cn("border-0 border-t", strong ? "border-ink" : "border-line", className)} />;
}
