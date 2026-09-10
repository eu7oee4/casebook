# STATE — pet-social-platform

Last updated: 2026-09-10 (03 Competitors + 08 Benchmark researched; 02/03 UI edits)

## Where it stands
- Site complete: nine chapters, EN / 中文, design system finished, `npm run check` passes.
- Research: **in scope for all nine chapters** (open decision closed 2026-09-06, see `research/plan.md` top).
- **08 Benchmark done (2026-09-10)**: all six rows carry `provenance` reused from 03's sources (5 `verified`,
  小红书 `estimate`). Two mechanism wordings corrected because nothing public documents them: Soul's "guided first
  conversation" (also fixed in `data/competitors.ts`) and Meituan's "merchant SLAs" → platform-level refund
  guarantees. "SLA" stays in the adaptation column / `transferMap` as the case's own design term (noted). No example
  replaced; reasoning in `research/08-benchmark.md`. No `revisions.md` row — no insight or adaptation changed.
  `npm run check` passes; SSR-checked by curl; not eyeballed in a browser. **Uncommitted.**
- **03 Competitors done (2026-09-10)**: BarkHappy kept on the map (author OK, 2026-09-10); closure reason researched — none published, timeline and company facts in `research/03-competitors.md` (S40–S42). the 11 cards are now 14 named products, every one with a `provenance`
  (13 `verified`, 1 `estimate` — Xiaohongshu's search-first mechanism rests on secondary press). Direct tier:
  Petzbe, Yummypets, BarkHappy (US, app discontinued Jan 2025 — kept on the map as evidence), 宠胖胖 (CN). Industry:
  PetMD (Chewy), Rover, Chewy, 波奇. Benchmark six unchanged in identity, mechanisms verified from listings / help
  pages / 美团规则中心; Meituan's "merchant SLAs" replaced by documented refund guarantees. The generic "breed &
  interest communities" card was removed (no named standalone product; recorded under Still hypothesis). Three
  `revisions.md` rows, all at insight level: "nobody built the bridge to local" → BarkHappy did and closed without a
  transaction layer; "zero trust" → trust rebuilt per booking from badges/reviews; "empty quadrant" → "no surviving
  product". Map positions stay judgement; reasoning in `research/03-competitors.md`. 21 new sources (S19–S39).
  App-store listings were read via the iTunes lookup API (first-hand); rover.com / help.instagram.com / Google Play
  via a text proxy. `npm run check` passes; both locales SSR-checked by curl; **not eyeballed in a browser**.
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
- Nothing blocking. Flags open for review:
  1. (from 02) Copy edits were made in `app/[locale]/market/page.tsx` (section title, description, implication, aside
     label, removed the blanket section-01 Illustrative badge) — content corrections, not UI; listed in
     `research/02-market.md` → Data changes.
  2. (from 03, 2026-09-10) Author-approved UI edits, not eyeballed in a browser: the competition map now takes the
     full row (height 520) and the product cards sit below it, two per row from `md` up, no internal scrolling
     (`CompetitorExplorer.tsx`); dead `SHORT` / `LABEL_DY` entries for retired ids removed from `CompetitorMap.tsx`
     (labels use `c.name`; only the Meituan nudge remains). Check label collisions on the wider map.
  3. (from 02, 2026-09-10) KPI grid switched to 2 columns (rows 2 / 2 / 1) at the author's request after badges
     overlapped at zoom; `npm run check` passes, not eyeballed in a browser (no Chrome extension in this session).
  (The `SpendTrend.tsx` hard-coded Y domain was fixed 2026-09-06 with author approval: domain/ticks are now
  computed from the data. Provenance-badge overflow with long real source names was also fixed the same day —
  badges now truncate to their column width and bottom-align across a metric row.)

## Next steps (in order)
1. Research 04 Content next (content-type mix on pet feeds / hashtags; breed-recognition benchmarks for the
   understanding-metrics note; examples of platforms ranking on structured understanding), then 05, 06, 07, then 09,
   then 01 last. Chapters 04–07 are product judgement: the job is evidence for / against, not rewriting.
2. After 02 (or 02+03) is walked through end to end, casebook v1 extraction (`packages/`, template, skills)
   can start in parallel with the remaining chapters — workspace-level decision, 2026-09-06.
3. Review mode (in-page editing + annotations → AI applies) is planned at the casebook level, not here; wait for `packages/` to exist.

## Decisions made
- 2026-09-06 — **Open decision closed: research case, all nine chapters in scope.** Targets and
  judgement-type fields stay Illustrative by design. Positioning line recorded in `research/plan.md`;
  it lands in 01 Overview / `PRODUCT.md` when chapter 01 is updated (last).
- 2026-09-05 — Conclusions are revisable with a paper trail (`research/revisions.md`), not frozen.
- 2026-09-05 — Review mode will be built into the site (route A), not via published artifact pages. Not started.
