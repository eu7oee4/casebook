/**
 * Central barrel for the case's research data.
 * Every figure carries a provenance (`data/provenance.ts`): market, competitor and mechanism figures are
 * sourced (`verified` / `estimate`) against `research/sources.md`; product targets and judgement fields stay
 * `hypothesis` and render as Illustrative; the product's own proposals are `design`. Nothing renders unmarked.
 */
export * from "./provenance";
export * from "./overview";
export * from "./market";
export * from "./competitors";
export * from "./content";
export * from "./social";
export * from "./services";
export * from "./ai";
export * from "./benchmark";
export * from "./insights";
export * from "./risks";

/** Matches the footer string in `components/layout/Footer.tsx`; re-read both whenever a chapter's provenance changes. */
export const DATA_DISCLAIMER =
  "Market, competitor and mechanism figures are sourced; product targets and judgement fields are marked Illustrative.";
