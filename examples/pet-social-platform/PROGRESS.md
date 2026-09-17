# Progress

- [x] Phase 1 — Inspect (empty project; briefs read)
- [x] Phase 2 — Plan (PROJECT_PLAN.md)
- [x] Phase 3 — Design system (tokens, typography scale, chart theme; palette CVD-validated)
- [x] Phase 4 — Shell (AppShell, Sidebar, TopBar drawer, keyboard `[` `]`, page transitions)
- [x] Phase 5 — Core pages: Overview, AI Strategy, Social, Local, Competitors
- [x] Phase 5b — Market, Content, Benchmark, Insights
- [x] Phase 6 — Data centralised in `data/` (barrel: `data/research.ts`)
- [x] Phase 7 — Interactions (tabs, filters, hover, tooltips, agent workflow, agent trace, pipeline, matrices, match cards)
- [x] Phase 8 — Visual QA via Playwright screenshots (1440 / 900 / 390), console clean, no horizontal overflow
- [x] Verification — `tsc`, `eslint`, `next build`

## Known limitations / next steps
- All data is illustrative; no backend, no real API.
- Scatter quadrant labels are positioned against fixed chart margins (approximate on unusual widths).
- Possible next steps: dark mode, print/PDF export, a table-view toggle for every chart, deploy to Vercel.

## Research handoff (2026-09-04)
- [x] `CLAUDE.md` — rules for an agent researching and updating content
- [x] `data/provenance.ts` — five tiers on every factual number (`hypothesis` / `design` / `estimate` /
      `verified` / `contradicted`; `design` added 2026-09-15); `ProvenanceMark` in UI
- [x] `research/` — plan per chapter, sources register, chapter note templates
- [x] Chapters researched: **all nine** (02 and 03 and 08 · 2026-09-06 → 09-10; 04 · 09-14; 05, 06, 07, 09 ·
      09-16; 01 · 09-16 → 09-17). 81 sources in `research/sources.md`, 15 rows in `research/revisions.md`.
      Market, competitor and mechanism figures are sourced; product targets and judgement fields stay
      Illustrative **by design** (declared end state, `research/plan.md` top)

## Bilingual (2026-09-04)
- [x] Routes `/en/*` and `/zh/*`, root redirect by Accept-Language, sidebar EN / 中文 toggle
- [x] All nine chapters translated; data strings are `{ en, zh }` objects
- [x] Chinese typography overrides (`:lang(zh-CN)`), CJK font fallbacks
- [x] QA: zh desktop + mobile screenshots, en interaction test, `npm run check`
