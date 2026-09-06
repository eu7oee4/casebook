# STATE — pet-social-platform

Last updated: 2026-09-06 (late night — 02 Market researched)

## Where it stands
- Site complete: nine chapters, EN / 中文, design system finished, `npm run check` passes.
- Research: **in scope for all nine chapters** (open decision closed 2026-09-06, see `research/plan.md` top).
- **02 Market done (2026-09-06)**: all five KPIs now `verified` (white-paper excerpt PDF, CBNData, iResearch
  — the iResearch 62-page image PDF was read page-by-page); `spendTrend` rebuilt as an `estimate` (share ×
  market size, 2022=100, derivation in provenance note); `valueMatrix`/`needLayers`/`journey` stay judgement
  by design. 18 sources in `research/sources.md`; findings in `research/02-market.md`. First real
  `revisions.md` row: "services grow fastest" was contradicted by white-paper shares → revised to
  "goods → care (medical); services grow in penetration, not spend share"; market page copy updated to match.
- Provenance has four tiers (`hypothesis` / `estimate` / `verified` / `contradicted`).
- **Provenance hover cards (2026-09-06, author-approved UI change)**: hovering any data element for ~0.45s
  (or focus / tap) opens a card with tier, source, link, retrieval date and the researcher's note (note stays
  in its original language — author decision). New `components/ui/ProvenanceHover.tsx` (portal + fixed
  positioning so overflow containers can't clip). Wired: `ProvenanceMark` badges site-wide (badge is no longer
  a direct link — the link moved into the card), `Metric` values (dotted-underline cue), and inline prose
  numbers via new `<Sourced>` (first use: the 19%→28% medical-share claim on `/market`, provenance exported
  from `data/market.ts`). Convention: any sourced number in page copy gets wrapped in `<Sourced>` from now on.
  Benchmark/competitor rows show nothing yet only because their optional `provenance` fields are still unset —
  cards appear automatically once those chapters are researched. Verified via SSR markup + `npm run check`;
  **not yet eyeballed in a real browser** (no Chrome extension in this session).
- Moved into `casebook/examples/` on 2026-09-05 (public reference case) from the original `~/dossier` repo (this copy carries the uncommitted 2026-09-05 doc changes). The prototype was retired for real on 2026-09-06: its stale dev server had been squatting on port 3000 serving old data; contents verified redundant, `node_modules`/`.next` deleted, repo renamed to `~/dossier.DISCARDED-20260906` (1.5MB, git history intact).

## Blocked on the author
- Nothing blocking. One flag from 02 still open for review:
  1. Copy edits were made in `app/[locale]/market/page.tsx` (section title, description, implication, aside
     label, removed the blanket section-01 Illustrative badge) — content corrections, not UI; listed in
     `research/02-market.md` → Data changes.
  (The `SpendTrend.tsx` hard-coded Y domain was fixed 2026-09-06 with author approval: domain/ticks are now
  computed from the data. Provenance-badge overflow with long real source names was also fixed the same day —
  badges now truncate to their column width and bottom-align across a metric row.)

## Next steps (in order)
1. Research 03 Competitors, then 08 Benchmark; then 04–07, then 09, then 01 last.
2. After 02 (or 02+03) is walked through end to end, casebook v1 extraction (`packages/`, template, skills)
   can start in parallel with the remaining chapters — workspace-level decision, 2026-09-06.
3. Review mode (in-page editing + annotations → AI applies) is planned at the casebook level, not here; wait for `packages/` to exist.

## Decisions made
- 2026-09-06 — **Open decision closed: research case, all nine chapters in scope.** Targets and
  judgement-type fields stay Illustrative by design. Positioning line recorded in `research/plan.md`;
  it lands in 01 Overview / `PRODUCT.md` when chapter 01 is updated (last).
- 2026-09-05 — Conclusions are revisable with a paper trail (`research/revisions.md`), not frozen.
- 2026-09-05 — Review mode will be built into the site (route A), not via published artifact pages. Not started.
