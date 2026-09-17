# Pet Social Platform — Product Research Case

> The public reference case inside the `casebook` workspace. Read `STATE.md` in this folder first; the workspace-level rules are in
> the repo root `CLAUDE.md`. Run all `npm` commands from this folder.

A ten-chapter Product Research & AI Strategy case for a 0→1 pet social platform, built as a Next.js site.
(Nine researched chapters plus 09 风险与未解, added 2026-09-17, which renders findings already sourced in the other nine.)
Audience: product directors and interviewers. The site must read as the work of a PM who did real research.

## What you are here to do

Research the pet social / pet services domain step by step, gather **sourced** data, and update the site's
content. You update **data and research notes**, not UI. The visual system is finished; do not redesign it —
except where "What not to change" below records an explicit, author-approved exception.

Start every session by reading `research/plan.md` (open questions per chapter) and `research/sources.md`.

## Where content lives

| Chapter | Route | Data file | What it holds |
|---|---|---|---|
| 01 Overview | `/` | `data/overview.ts` | thesis, three insights, opportunity summary |
| 02 Market | `/market` | `data/market.ts` | KPIs, spend trend, need layers, value matrix, journey |
| 03 Competitors | `/competitors` | `data/competitors.ts` | tiers, competitor cards, map coordinates |
| 04 Content | `/content` | `data/content.ts` | content types, loop, intelligence pipeline, targets |
| 05 Social | `/social` | `data/social.ts` | identity dimensions, ladder, funnel, match prototype, targets |
| 06 Local | `/local` | `data/services.ts` | service categories, journey, concierge workflow, targets |
| 07 AI Strategy | `/ai-strategy` | `data/ai.ts` | architecture, five capabilities, agent loop, trace |
| 08 Benchmark | `/benchmark` | `data/benchmark.ts` | mechanism-transfer rows, transfer map |
| 09 Risks & Unknowns | `/risks` | `data/risks.ts` | capability limits, execution safety, law, supply, what could not be measured, what to falsify |
| 10 Insights | `/insights` | `data/insights.ts` | opportunity matrix, priorities, north star, roadmap |

`data/research.ts` re-exports everything. Pages in `app/*/page.tsx` only render; components in `components/` only present.

## Bilingual content (EN / 中文)

The site is served at `/en/...` and `/zh/...` (root redirects by browser language; the sidebar toggles).
User-visible strings in `data/` are `Text` objects `{ en, zh }` (`lib/i18n.ts`); numbers, codes, product
names stay plain strings. **Every content change must update both `en` and `zh`** in the same object — never
leave one language stale. Translate in the same analytical PM voice; do not paraphrase numbers differently
between languages. UI chrome strings live inline as `t({ en, zh })` in components and are not research content.

## Provenance rules (non-negotiable)

Every factual number or claim carries a `Provenance` (`data/provenance.ts`):

- `hypothesis` — placeholder to structure the case: a number or claim that *could* have a source but does not
  yet. Rendered as **Illustrative** with a **dashed** border and a **hollow** dot. This is the default.
- `design` — the product's own design, not a claim about the world: a step in its own flow, a capability
  definition, a deliberately fictional worked example, a roadmap. There is nothing to cite, so it is **not**
  "unsourced" — it is off the sourced/invented axis. Rendered as **Design** with a solid border and a **square**
  dot. Never use it for a number that could have a source; that is `hypothesis`.
- `estimate` — derived from cited sources with reasoning in `note`. Rendered as **Estimate**, solid border, filled dot.
- `verified` — read directly from a cited source. Rendered as **Sourced**, solid border, filled accent dot.
- `contradicted` — a cited source points the **opposite** way from the value or claim shown. Rendered as
  **Contradicted · source** (linked if `url`). Same evidence bar as `verified`: `source`, `url` (if one exists),
  `retrievedAt`, and a `note` saying what the source measures and how it conflicts. Use it when the claim is kept
  on the page for now (pending the author's decision, see `research/revisions.md`) but must not read as supported.

**Nothing renders unmarked.** Every block of data on a page carries a provenance — per item where the component
supports it (`Metric`, competitor cards, benchmark rows), otherwise at the section level via `SectionHeader`'s
`provenance` prop. A section whose items are *individually* marked takes no section badge: one badge cannot
honestly summarise a mixed section. Where only *some* items are marked — 06's category table, where two of
eight frequencies follow cited guidance — the section badge stays, covers exactly what is unmarked, and its
note must say which cells those are. The badge shows only the state word; the source name, link, retrieval date
and note live in the hover card. Then, for each mark:

1. Never set `estimate`, `verified` or `contradicted` without `source`, `url` (if one exists) and `retrievedAt` (ISO date).
2. If a number cannot be found, leave it `hypothesis`. **Do not invent, round, or "reasonably assume" a figure.**
3. Prefer primary sources: official reports, company disclosures, app-store listings, product help pages.
   Secondary press is acceptable for `estimate`, never for `verified`.
4. Product **targets** (match metrics, concierge metrics, understanding metrics) stay `hypothesis` unless a
   comparable public benchmark is cited in `note` — they are goals, not observations.
5. Competitors: verify product mechanisms and positioning from public material. Never add user counts, revenue
   or retention figures without a source. Never fabricate details about how a competitor's ranking works.
6. Add every source to `research/sources.md` and log what changed in the chapter's note under `research/`.
7. A `contradicted` mark is never the end state. It must be paired with an entry in `research/revisions.md`
   (see below) that either revises the claim or records why the author keeps it.

## Conclusions may change, but only with a paper trail

The core argument of the case — the thesis chain, the three insights, the five AI capabilities, the priorities
and the north star — was written **before any research was done** (see `PROGRESS.md`: "Chapters researched:
none yet"). It is the author's starting product judgement, not a finding. Treating it as fixed would turn the
research into a confirmation exercise, so it is revisable — under these rules:

When research turns up evidence that conflicts with a conclusion, do **not** stop. Do all three, in order:

1. **Chapter note** — record the conflict in `research/NN-chapter.md` under "Evidence for / against", with the
   source ID from `research/sources.md` and what the source actually measures.
2. **Revision log** — append one row to `research/revisions.md`: date / original conclusion / triggering evidence
   with source / revised conclusion, **or** "kept original judgement, because …". A row that keeps the original
   is a valid outcome; the point is that counter-evidence was considered, not that it always wins.
3. **Data file** — only then update `data/*.ts`: change the value or wording (both `en` and `zh`) and set the
   provenance, or leave the claim in place with `confidence: "contradicted"` pointing at the source.

An empty `research/revisions.md` after a chapter is researched means either no counter-evidence was found or
none was looked for — say which in the chapter note. Do not rewrite a conclusion silently, and do not rewrite
one to match a single weak source: the bar for revising is the same as for `verified`.

## What not to change

- UI components, design tokens, typography, layout, `app/globals.css`, `components/`. (Sanctioned exceptions,
  all already made: the `contradicted` branch in `ProvenanceMark`; the 2026-09-15 provenance-legibility
  change — the `design` tier, the dashed/solid + hollow/filled/square badge scheme, `SectionHeader`'s
  `provenance` prop, and `Metric` no longer hiding the badge for `hypothesis`; and the 2026-09-16 row-level mark
  in 06's category table — `serviceCategories` rows gained an optional `provenance`, and `/local` renders a
  `ProvenanceMark` inline after the frequency value for the rows that carry one. `DataTable` itself was **not** changed:
  its `cell` render prop was already enough, so nothing outside `/local` moved. And the 2026-09-16 keyboard-nav
  fix in `KeyboardNav.tsx`, reported by the author: `[` / `]` matched `e.key` only, which a Chinese IME turns into
  「 and 」, so chapter navigation did nothing for the author — it now matches `e.code` (`BracketLeft` /
  `BracketRight`) as well, skips `isComposing` and `contenteditable`, and is otherwise unchanged.)

  **Pattern for row-level marks in a table**: set the row's optional `provenance` only where the row departs from
  the section floor, keep the `SectionHeader` badge for everything unmarked, and say in the section note which
  cells the section badge still covers. Repeating the section's own state on every row adds noise, not information.
- Copy tone: analytical, PM-voice, English. No marketing language, and **no praising the case's own research**
  — page copy states a finding, it does not appraise it. Marking something as important objectively is fine;
  telling the reader the work is rigorous or honest is not. The research notes under `research/` run the
  opposite rule and should carry judgement forward at length. Both are in `docs/writing-rules.md` (workspace
  level, applies to every case); read it before writing copy or a chapter note.

**Standing check on blanket disclaimers.** Chrome strings that describe the case's evidence status go stale as
chapters get researched. Two were corrected on 2026-09-16 (author-requested) because they contradicted eight
researched chapters: the sidebar's "Data shown is illustrative." / 「所示数据均为示意。」 became "Every figure shows
its provenance." / 「每个数据都标注了出处。」, and the footer's "All figures are illustrative research hypotheses,
not market data." / 「所有数字均为示意性研究假设，非市场数据。」 became "Market, competitor and mechanism figures
are sourced; product targets and judgement fields are marked Illustrative." / 「市场、竞品、机制类数字均有出处；
产品目标值与判断类字段标为示意。」 A third, `DATA_DISCLAIMER` in `data/research.ts`, still carried the old footer
wording and was corrected to match on 2026-09-17, together with that file's header comment. It renders nowhere
today, but it is the first thing a reader of the repo meets. If a chapter's provenance changes, re-read all
three before finishing.

## How to work

1. Pick one chapter from `research/plan.md`. Answer its questions with web research.
2. Update the chapter's data file: fill values, set `provenance`, keep types intact.
3. Write findings, sources and open gaps in `research/NN-chapter.md`; append sources to `research/sources.md`.
4. Run `npm run check` (typecheck, lint, production build). Fix anything it reports.
5. Start `npm run dev` and open the chapter in both languages (`/zh/<route>` and `/en/<route>`) to confirm the
   page renders and every changed number shows its provenance mark.
6. Summarise: what changed, what is now verified / estimated / contradicted, what remains hypothesis and why,
   and which rows (if any) were added to `research/revisions.md`.

Work one chapter at a time. Do not commit unless asked.

## Commands

```bash
npm run dev      # http://localhost:3000 → redirects to /en or /zh
npm run check    # tsc + eslint + next build
```
