/**
 * Provenance — every factual number or claim in `data/` can carry one of these.
 *
 * confidence:
 *   "hypothesis" — placeholder used to structure the case; not researched. Shown as "Illustrative".
 *   "estimate"   — derived from one or more public sources with stated reasoning. Shown as "Estimate · <source>".
 *   "verified"   — read directly from a public source that is cited. Shown as "Source · <source>".
 *   "design"     — the product's own design, not a claim about the world: a step in its own flow, a capability
 *                  definition, a deliberately fictional worked example. There is nothing to cite, so it is not
 *                  "unsourced" — it is off the sourced/invented axis entirely. Shown as "Design".
 *   "contradicted" — a cited public source points the opposite way from the value or claim shown. Shown as
 *                  "Contradicted · <source>". Same evidence bar as "verified"; must be paired with a row in
 *                  `research/revisions.md` that either revises the claim or records why it is kept.
 *
 * Rules for whoever edits data (human or agent):
 *   - Never set estimate / verified / contradicted without filling `source` (and `url` if it exists) and `retrievedAt`.
 *   - `note` explains how an estimate was derived, what the source actually measures, or how it conflicts.
 *   - If a number cannot be found, leave it as hypothesis. Do not invent.
 */
export type Confidence = "hypothesis" | "design" | "estimate" | "verified" | "contradicted";

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
/** The proposal itself — nothing to cite. Never use it for a number that could have a source. */
export const DESIGN: Provenance = { confidence: "design" };

/**
 * Short state word for the inline badge — no source name. The whole point is that a reader can
 * tell sourced from invented at a glance; the source itself lives in the hover card.
 * `sourced` is the binary the UI actually renders: solid border = sourced, dashed = invented.
 */
export function isSourced(p: Provenance): boolean {
  return p.confidence === "verified" || p.confidence === "estimate" || p.confidence === "contradicted";
}

/** What the badge must communicate at a glance, before any source name is read. */
export function provenanceKind(p: Provenance): "sourced" | "invented" | "design" {
  if (p.confidence === "design") return "design";
  return isSourced(p) ? "sourced" : "invented";
}

export function provenanceBadge(p: Provenance, locale: "en" | "zh" = "en"): string {
  const zh = locale === "zh";
  if (p.confidence === "verified") return zh ? "实证" : "Sourced";
  if (p.confidence === "estimate") return zh ? "估算" : "Estimate";
  if (p.confidence === "contradicted") return zh ? "反证" : "Contradicted";
  if (p.confidence === "design") return zh ? "设计" : "Design";
  return zh ? "示意" : "Illustrative";
}

export function provenanceLabel(p: Provenance, locale: "en" | "zh" = "en"): string {
  const zh = locale === "zh";
  if (p.confidence === "verified") return p.source ? `${zh ? "来源" : "Source"} · ${p.source}` : zh ? "已核实" : "Verified";
  if (p.confidence === "contradicted")
    return p.source ? `${zh ? "反证" : "Contradicted"} · ${p.source}` : zh ? "存在反证" : "Contradicted";
  if (p.confidence === "estimate") return p.source ? `${zh ? "估算" : "Estimate"} · ${p.source}` : zh ? "估算" : "Estimate";
  if (p.confidence === "design") return zh ? "产品设计" : "Product design";
  return zh ? "示意数据" : "Illustrative";
}
