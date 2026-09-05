/**
 * Provenance — every factual number or claim in `data/` can carry one of these.
 *
 * confidence:
 *   "hypothesis" — placeholder used to structure the case; not researched. Shown as "Illustrative".
 *   "estimate"   — derived from one or more public sources with stated reasoning. Shown as "Estimate · <source>".
 *   "verified"   — read directly from a public source that is cited. Shown as "Source · <source>".
 *   "contradicted" — a cited public source points the opposite way from the value or claim shown. Shown as
 *                  "Contradicted · <source>". Same evidence bar as "verified"; must be paired with a row in
 *                  `research/revisions.md` that either revises the claim or records why it is kept.
 *
 * Rules for whoever edits data (human or agent):
 *   - Never set estimate / verified / contradicted without filling `source` (and `url` if it exists) and `retrievedAt`.
 *   - `note` explains how an estimate was derived, what the source actually measures, or how it conflicts.
 *   - If a number cannot be found, leave it as hypothesis. Do not invent.
 */
export type Confidence = "hypothesis" | "estimate" | "verified" | "contradicted";

export type Provenance = {
  confidence: Confidence;
  /** Short citation, e.g. "China Pet Industry White Paper 2025" or "Company FAQ page". */
  source?: string;
  url?: string;
  /** ISO date the source was read, e.g. "2026-09-04". */
  retrievedAt?: string;
  /** Derivation or caveat, one or two sentences. */
  note?: string;
};

export const HYPOTHESIS: Provenance = { confidence: "hypothesis" };

export function provenanceLabel(p: Provenance, locale: "en" | "zh" = "en"): string {
  const zh = locale === "zh";
  if (p.confidence === "verified") return p.source ? `${zh ? "来源" : "Source"} · ${p.source}` : zh ? "已核实" : "Verified";
  if (p.confidence === "contradicted")
    return p.source ? `${zh ? "反证" : "Contradicted"} · ${p.source}` : zh ? "存在反证" : "Contradicted";
  if (p.confidence === "estimate") return p.source ? `${zh ? "估算" : "Estimate"} · ${p.source}` : zh ? "估算" : "Estimate";
  return zh ? "示意数据" : "Illustrative";
}
