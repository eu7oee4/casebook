# STATE — pet-social-platform

Last updated: 2026-09-15 (04 Content researched; no value changed, three targets now benchmarked;
supply/demand subtraction retracted; AI cost wording fixed; provenance made legible at a glance — all author-decided)

## Where it stands
- Site complete: nine chapters, EN / 中文, design system finished, `npm run check` passes.
- Research: **in scope for all nine chapters** (open decision closed 2026-09-06, see `research/plan.md` top).
- **Provenance legibility (2026-09-15, author-approved UI change)**: the author's rule — *every data element must
  show its source explicitly, and a reader must tell at a glance what is real and what is invented; the specific
  source may hide in the hover card*. Audit found three failures: `Metric.tsx` **explicitly hid the badge for
  `hypothesis`** (the one state that most needed showing), chapters **01 / 07 / 09 had zero provenance fields**,
  and absence of a mark was ambiguous between "unresearched" and "not a factual claim at all".
  - **Fifth tier `design`** added to `Confidence` (author chose this over folding it into `hypothesis`): the
    product's own design — a step in its own flow, a capability definition, the deliberately fictional worked
    example, the roadmap. Nothing to cite, so it is off the sourced/invented axis rather than "编的".
  - **Shape carries the distinction, colour only reinforces it** (survives greyscale and colour-blindness):
    solid border + filled round dot = sourced · **dashed border + hollow dot = invented** · solid + **square**
    dot = design. The badge now shows only the state word (实证 / 估算 / 反证 / 示意 / 设计); source name, link,
    date and note moved into the hover card — which also fixes the long-source-name truncation noted earlier.
  - **Coverage**: `SectionHeader` gained a `provenance` prop; 28 section headers wired across all nine pages,
    plus two mixed-section sub-blocks marked directly (the relationship ladder beside the sourced funnel chart,
    and the competitor map whose x/y positions stay judgement). Rule applied: a section whose items are already
    marked individually gets **no** section badge — one badge cannot honestly summarise a mixed section.
  - New block-level provenance exports across `overview / ai / insights / market / competitors / content /
    social / services / benchmark`. `CLAUDE.md` provenance rules rewritten for five tiers + a "nothing renders
    unmarked" lead-in (rule numbering preserved so existing "rule 4" references still resolve).
  - `npm run check` passes; all nine ZH pages verified by curl to carry badges. **Reviewed in a browser by the
    author 2026-09-16 — approved, no changes asked for.** Known gap: competitor-card badges only render when a card is expanded, and the benchmark domain cards in
    「三个领域，六个参考」 show no mark although their rows are individually sourced in the table below. **Uncommitted.**
- **AI cost / tiering wording (2026-09-15, author-raised and author-decided)**: the author asked whether having AI
  understand every post — and rank with AI too — is overuse, and what the compute would cost. A search of `data/`
  and `app/` confirmed the gap: **every "cost / 成本" string in the case was user-side** (posting effort, acquisition,
  switching); the understanding layer's own running cost appeared in no chapter. The architecture survives the
  challenge — Pinterest runs the same shape over a 200B+ Pin corpus as a *daily batch* job with cheap high-recall
  candidate generation, and names per-item cost as the binding constraint (S47, already in hand from 04) — but the
  case was written so it read as one large multimodal call per post. Wording changed in four places (`en`+`zh`),
  architecture untouched: `capabilities[0].oneLiner` and `.mechanism` in `data/ai.ts` (understanding runs once at
  publish time, not per impression; mostly a profile join or a small classifier, not a large model; only ambiguous
  posts escalate), `pipeline[1].detail` in `data/content.ts`, and the pipeline section copy in
  `app/[locale]/content/page.tsx` (publish-time understanding now carries its cost half, not just the correctness
  one). The five capabilities are author-decided, so the `revisions.md` row is logged **author**, not agent.
  **No cost figure was put on any page** — that needs sourced unit economics and is now an open question on the 07
  table in `research/plan.md`. `npm run check` passes; `/en|zh/content` and `/en|zh/ai-strategy` all 200 with the new
  copy in the SSR payload, except `pipeline[1].detail`, which only renders for the *active* stage of the client-side
  pipeline widget — confirmed shipped in the client chunk instead. **Not eyeballed in a browser. Uncommitted.**
- **04 Content done (2026-09-14)**: **no value changed** — the chapter's numbers survive research, but three of
  them now say what they are measured against. The one public content-type mix that exists (微博大数据 via the
  iResearch × Weibo content white paper, 2021 H1: 宠物日记及创意内容 43% / 动物段子集锦 22% / 宠物热点及资讯 18% /
  动物公益/救助 12% / 养宠知识/科普 3% / 宠物服务 2%) measures broadcast creator content on a general platform;
  three of its six genres have no counterpart among the case's seven types, so it cannot be mapped without
  inventing a split and `contentTypes[*].share` stays `hypothesis`. What it does give is the demand side
  (N=500 iClick survey: 养宠知识/科普 58.2%, owners TGI 136; 宠物食品/用品/服务 48.6%, TGI 123), which justifies the chart's
  weighting through distribution shape and TGI — **not** by subtracting the two, which have different
  denominators (posts vs people; retracted 2026-09-15, author). `contentTypesNote` reworded (`en`+`zh`) to "a design target … from demand, not
  from any observed supply"; two `revisions.md` rows record it (the second, author-decided, retracts the subtraction). Three `understandingMetrics` now carry a published
  comparable in a still-`hypothesis` provenance, so the hover card shows the benchmark: breed 0.87 vs Tsinghua Dogs
  86.4% (130 breeds, >65% real-life images) and Oxford-IIIT Pet ~59% (2012), with the caveat that Weibo's top breeds
  (橘猫, 狸花猫, 中华田园犬) are in none of those class lists; pet-entity 91% vs Pinterest's ">99% of Pins map to at
  least one taxonomy node"; location 64% vs a 2.31% geotag rate over 41.3bn tweets. `understandingMetrics[3]`
  (service intent 12%) stays a bare hypothesis — nothing comparable is public. Q3 evidence: Pinterest publishes the
  exact architecture this chapter draws (one Interest Taxonomy feeding home feed ranking, search ranking &
  retrieval and ads targeting); Instagram names semantic content signals for Reels only, popularity elsewhere —
  recorded as partial counter-evidence. 7 new sources (S43–S49). `npm run check` passes; both locales SSR-checked
  by curl and the provenance notes confirmed in the payload; **not eyeballed in a browser**. **Uncommitted.**
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
- **Provenance has five tiers** (`hypothesis` / `design` / `estimate` / `verified` / `contradicted`) and is
  **legible at a glance** since 2026-09-15 (author-approved UI change, see below).
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
  3. (from 04, 2026-09-14) `contentTypesNote` copy changed in both languages — a content correction, not UI; the
     chart caption now says the mix is a design target rather than a hypothesis about an early feed. Reasoning in
     `research/04-content.md` → Data changes and the 2026-09-14 `revisions.md` row.
  4. (from 02, 2026-09-10) KPI grid switched to 2 columns (rows 2 / 2 / 1) at the author's request after badges
     overlapped at zoom; `npm run check` passes, not eyeballed in a browser (no Chrome extension in this session).
  (The `SpendTrend.tsx` hard-coded Y domain was fixed 2026-09-06 with author approval: domain/ticks are now
  computed from the data. Provenance-badge overflow with long real source names was also fixed the same day —
  badges now truncate to their column width and bottom-align across a metric row.)

## Next steps (in order)
1. Research 05 Social next, then 06, 07, then 09, then 01 last. Chapters 05–07 are product judgement: the job is
   evidence for / against, not rewriting. **Head start for 05**: the same iResearch × Weibo white paper (S43 p.17)
   has the closest public thing yet found to the ladder funnel — 71.2% of pet-content users actively follow
   creators (经常 43.6% + 总是 27.6%, N=500), broken down into 点赞/转发 → 评论 → 加入粉丝群. Read it from the local
   text dump route described in `research/04-content.md` (the PDF's text layer needs page-by-page extraction).
2. After 02 (or 02+03) is walked through end to end, casebook v1 extraction (`packages/`, template, skills)
   can start in parallel with the remaining chapters — workspace-level decision, 2026-09-06.
3. Review mode (in-page editing + annotations → AI applies) is planned at the casebook level, not here; wait for `packages/` to exist.

## Decisions made
- 2026-09-06 — **Open decision closed: research case, all nine chapters in scope.** Targets and
  judgement-type fields stay Illustrative by design. Positioning line recorded in `research/plan.md`;
  it lands in 01 Overview / `PRODUCT.md` when chapter 01 is updated (last).
- 2026-09-05 — Conclusions are revisable with a paper trail (`research/revisions.md`), not frozen.
- 2026-09-05 — Review mode will be built into the site (route A), not via published artifact pages. Not started.
