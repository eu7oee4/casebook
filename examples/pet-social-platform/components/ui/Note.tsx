"use client";

import { cn } from "@/lib/utils";
import { HYPOTHESIS, provenanceLabel, type Provenance } from "@/data/provenance";
import { useLocale, useT } from "@/lib/locale-context";
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
 * Shows where a number comes from. Hypothesis → "Illustrative"; estimate/verified/contradicted → source, linked when a URL exists.
 * The dot colour is the status: clay = hypothesis, grey = estimate, moss = verified, blue = contradicted.
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
  const text = label ?? provenanceLabel(provenance, locale);
  const dot =
    provenance.confidence === "verified"
      ? "bg-accent"
      : provenance.confidence === "contradicted"
        ? "bg-series-2"
        : provenance.confidence === "estimate"
          ? "bg-ink-3"
          : "bg-series-3";
  const title = [provenance.note, provenance.retrievedAt && `${locale === "zh" ? "获取于" : "Retrieved"} ${provenance.retrievedAt}`]
    .filter(Boolean)
    .join(" · ");
  const body = (
    <>
      <span className={cn("h-1 w-1 rounded-full shrink-0", dot)} aria-hidden />
      <span className="truncate max-w-[32ch]">{text}</span>
    </>
  );
  const cls = cn(
    "inline-flex items-center gap-1.5 font-mono text-[11px] leading-[1.4] tracking-[0.06em] border border-line-2 rounded-sm px-1.5 py-[3px] text-ink-3",
    provenance.confidence === "hypothesis" && "uppercase tracking-[0.12em]",
    provenance.url && "hover:text-ink hover:border-ink transition-colors",
    className
  );
  if (provenance.url) {
    return (
      <a href={provenance.url} target="_blank" rel="noreferrer" title={title || undefined} className={cls}>
        {body}
      </a>
    );
  }
  return (
    <span title={title || undefined} className={cls}>
      {body}
    </span>
  );
}

export function Annotation({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("t-annotation max-w-[40ch]", className)}>{children}</p>;
}

export function Rule({ strong, className }: { strong?: boolean; className?: string }) {
  return <hr className={cn("border-0 border-t", strong ? "border-ink" : "border-line", className)} />;
}
