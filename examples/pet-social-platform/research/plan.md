# Research plan

## Open decision — which chapters go to `verified`, which stop at `Illustrative`?

**Status: decided by the author, 2026-09-06. End state: research case. All nine chapters are in scope.**

- Every chapter is researched until each field is either sourced (`verified` / `estimate`) or explicitly
  recorded as staying `hypothesis`. Product targets and judgement-type fields (map positions, matrix
  positions, funnels with no public benchmarks) stay Illustrative **by design** — the per-chapter notes
  below already say which; that is not the abandoned middle state, it is the declared end state.
- Positioning line — ZH (author's wording): 「基于公开来源做过实证的产品研究；市场、竞品、机制类数字均有出处，产品目标值与判断类结论明确标注为作者假设。」
- Positioning line — EN: "Evidence-backed product research built on public sources; market, competitor and
  mechanism figures are sourced, while product targets and judgement-based conclusions are explicitly
  marked as the author's hypotheses."
- The line reaches reader-visible surfaces (01 Overview opening copy, `PRODUCT.md`) only when chapter 01
  is updated — last, after 02–09, per the chapter-01 rule below.

Status legend: ☐ not started · ◐ in progress · ☑ done (all fields either sourced or explicitly left hypothesis)

Work top-down: chapters 02, 03 and 08 depend most on external facts. Chapters 04–07 and 09 are product
judgement; research there means finding evidence for or against the argument, not rewriting it.

## 02 Market — `data/market.ts` ☑ (2026-09-06 — see `research/02-market.md`; KPIs verified, spendTrend estimate, valueMatrix stays judgement)

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

## 03 Competitors — `data/competitors.ts` ☑ (2026-09-10 — see `research/03-competitors.md`; 14 named products, 13 verified / 1 estimate; map positions stay judgement; breed-cohort archetype has no named standalone product)

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
