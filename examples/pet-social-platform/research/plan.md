# Research plan

## Open decision — which chapters go to `verified`, which stop at `Illustrative`?

**Status: undecided. The author decides this. Agents: do not pick for her, and do not start researching any
chapter until this section names the chapters that are in scope.**

The question: of the nine chapters, which ones must be researched until their key figures are `verified` or
`estimate`, and which ones are accepted as staying `hypothesis` (rendered as **Illustrative**) on purpose?

Why it has to be settled first: every number on the site currently carries an Illustrative mark. If the finished
site still shows that mark across most of its surface, a reader will file it as a UI demo, not as product
research — the provenance system makes the gap visible rather than hiding it. There are two coherent end states:

- **Research case** — a small number of chapters (the natural candidates are those that depend most on external
  fact: 02 Market, 03 Competitors, 08 Benchmark) are taken all the way to sourced figures, and the remaining
  chapters are explicitly framed as product judgement built on that base.
- **Design piece** — the site is repositioned as a design / prototyping portfolio item, the Illustrative marks
  stay everywhere, and `PRODUCT.md` / the overview copy say so plainly.

The worst outcome is the middle: some chapters half-sourced, the rest Illustrative, with no statement of which is
which. That reads as research that was attempted and abandoned.

To close this section, the author writes here: the chapters in scope for `verified`, the chapters accepted as
Illustrative, and the one-line positioning that follows. Then the per-chapter tables below apply.

Status legend: ☐ not started · ◐ in progress · ☑ done (all fields either sourced or explicitly left hypothesis)

Work top-down: chapters 02, 03 and 08 depend most on external facts. Chapters 04–07 and 09 are product
judgement; research there means finding evidence for or against the argument, not rewriting it.

## 02 Market — `data/market.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Share of urban households with ≥1 pet (tier-1/2 China, latest year) | `marketKpis[0]` | prefer industry white papers; state the year and city tier |
| How often owners consume pet content (weekly reach or similar) | `marketKpis[1]` | platform reports or surveys; state the platform and sample |
| Share of owners who interact with other owners online | `marketKpis[2]` | likely only survey data; estimate acceptable |
| Service visits per pet per quarter (grooming, vet, boarding) | `marketKpis[3]` | derive from annual visit counts if needed; document the derivation |
| Annual spend per pet and split by food / services / health | `marketKpis[4]`, `spendTrend` | index the series to the first year = 100; keep the three categories |
| Growth rates of services and health vs food, last 5 years | `spendTrend`, `spendTrendNote` | if only totals exist, mark the series `estimate` |
| Evidence for the three need layers (functional / emotional / social) | `needLayers` | interviews, surveys, qualitative reports; cite in `research/02-market.md` |
| Which surfaces carry both functional and emotional value | `valueMatrix`, `valueMatrixProvenance` | positions stay judgement unless a survey ranks them |

## 03 Competitors — `data/competitors.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Which real products are the direct pet-social competitors (CN and global)? | `competitors[tier=direct]` | replace the generic "type A / B" entries with named products, each with a `provenance` |
| For each competitor: core value, strength, gap, mechanism worth learning | `competitors[*]` | from product pages, app-store listings, help centres; no user numbers without sources |
| Do any players occupy the high-service × high-social quadrant? | map coordinates `x`, `y` | positions are judgement; explain them in the chapter note |
| Which pet service / commerce apps matter in the target market? | `competitors[tier=industry]` | |

## 04 Content — `data/content.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Observed content-type mix on pet communities or hashtags | `contentTypes.share`, `contentTypesProvenance` | sample a public feed or cite a platform report; otherwise stays hypothesis |
| Published benchmarks for breed / entity recognition precision | `understandingMetrics` (note only) | targets stay hypothesis; cite comparable model results in `note` |
| Examples of platforms ranking content on structured understanding | `research/04-content.md` | evidence for the "understanding is infrastructure" claim |

## 05 Social — `data/social.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Public funnel benchmarks from like → comment → follow → DM on community apps | `ladderFunnel`, `ladderFunnelProvenance` | rarely published; estimate with reasoning or keep hypothesis |
| Benchmarks for match acceptance, conversation and offline conversion (dating / activity apps) | `matchMetrics` (note only) | targets stay hypothesis; cite comparables in `note` |
| Evidence that pet identity drives owner-to-owner relationships | `research/05-social.md` | qualitative sources, forums, interviews |

## 06 Local — `data/services.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Typical frequency per service category (grooming, vet, boarding, walking…) | `serviceCategories.frequency`, `serviceCategoriesProvenance` | industry reports or merchant guidance |
| Where trust matters most (vet, boarding) — evidence | `serviceCategories.trustNeed` | surveys on how owners choose a vet or boarder |
| Local-service conversion and repeat benchmarks | `serviceMetrics` (note only) | targets stay hypothesis |
| Real merchant examples for the concierge prototype (optional) | `recommendedServices` | keep fictional unless permission to name real merchants is clear |

## 07 AI Strategy — `data/ai.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Real-world examples of each capability in production (content understanding, matching, service agents) | `research/07-ai-strategy.md` | evidence only; the capability list and priorities stay |
| Known limitations / risks (pet-breed misclassification, privacy of location data, agent side-effects) | `research/07-ai-strategy.md` | feeds an optional "risks" note; do not weaken the architecture |

## 08 Benchmark — `data/benchmark.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Verify each described mechanism (Xiaohongshu, Instagram, Soul, Jike, Dianping, Meituan) from public material | `benchmarkRows[*].mechanism`, `.provenance` | product pages, help centres, credible teardowns |
| Is there a better example for any domain? | `benchmarkRows` | replace only with a reason recorded in the note |

## 09 Insights — `data/insights.ts` ☐

| Question | Feeds | Notes |
|---|---|---|
| Does the evidence from 02–08 change any complexity / value position? | `opportunities[*].complexity/value` | positions are judgement; adjust only with a reason recorded in the note, and tell the author |
| Dependencies confirmed by research (e.g. merchant availability APIs exist) | `opportunities[*].dependsOn` | |

## 01 Overview — `data/overview.ts` ☐

Update the summary only after chapters 02–09 are done, and only to reflect verified evidence. The thesis and the
three insights are the author's; propose edits in `research/01-overview.md` rather than changing them.
