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

## 04 Content — `data/content.ts` ☑ (2026-09-14 — see `research/04-content.md`; no value changed: the one public content mix measures broadcast pet content on Weibo and cannot be mapped onto the seven types, so shares stay hypothesis; three of the four understanding targets now carry a published comparable in their provenance note)

| Question | Feeds | Notes |
|---|---|---|
| Observed content-type mix on pet communities or hashtags | `contentTypes.share`, `contentTypesProvenance` | sample a public feed or cite a platform report; otherwise stays hypothesis |
| Published benchmarks for breed / entity recognition precision | `understandingMetrics` (note only) | targets stay hypothesis; cite comparable model results in `note` |
| Examples of platforms ranking content on structured understanding | `research/04-content.md` | evidence for the "understanding is infrastructure" claim |

## 05 Social — `data/social.ts` ☑ (2026-09-16 — see `research/05-social.md`; no value changed. The five-tier model left only two blocks needing evidence: `ladderFunnel` (two comparables that disagree on the shape, neither sharing its denominator) and `matchMetrics` (one peer-reviewed figure for the last step; the listed dating companies publish no funnel). Identity dimensions, the ladder, the match prototype and the principles are `design`.)

| Question | Feeds | Notes |
|---|---|---|
| Public funnel benchmarks from like → comment → follow → DM on community apps | `ladderFunnel`, `ladderFunnelProvenance` | rarely published; estimate with reasoning or keep hypothesis |
| Benchmarks for match acceptance, conversation and offline conversion (dating / activity apps) | `matchMetrics` (note only) | targets stay hypothesis; cite comparables in `note` |
| Evidence that pet identity drives owner-to-owner relationships | `research/05-social.md` | qualitative sources, forums, interviews |

## 06 Local — `data/services.ts` ☑ (2026-09-16 — see `research/06-local.md`; **no value changed**. Three of the eight category frequencies now carry a public comparable (grooming 4–6 weeks per merchant and AKC guidance, vet 1–2 check-ups a year per AAHA against the Chinese self-reported distribution, walking 77.9% at least daily in a UK household survey) and boarding's holiday shape is sourced; the other four and all trust needs stay judgement. Of the four targets, repeat and reviews→content are bracketed by Rover's and Airbnb's disclosures with their denominators stated, intent→booking is a recorded negative finding (no marketplace publishes a request→booking rate), and time-to-book has no comparable at all. One `revisions.md` row: the "intent appears in content before search" ordering is kept with a qualification.)

| Question | Feeds | Notes |
|---|---|---|
| Typical frequency per service category (grooming, vet, boarding, walking…) | `serviceCategories.frequency`, `serviceCategoriesProvenance` | ☑ Chinese white papers publish penetration, not frequency (same gap as 02). Grooming, vet, walking and boarding bracketed from professional guidance and household surveys (S56–S59, S61); training, photography, pet-friendly places, community events unsourced |
| Where trust matters most (vet, boarding) — evidence | `serviceCategories.trustNeed` | ☑ No survey ranks the categories, so the ordering stays judgement. Support: 32.8% of new vet clients arrive via a fellow owner (S63); ratings are too compressed to separate merchants (97% five-star on Rover, S64) |
| Local-service conversion and repeat benchmarks | `serviceMetrics` (note only) | ☑ Targets stay hypothesis. Repeat: Rover 81% of bookings (S64) — different denominator. Reviews: Airbnb 68% of trips (S65). Conversion: nobody publishes one (S66) |
| Real merchant examples for the concierge prototype (optional) | `recommendedServices` | ☑ Kept fictional — the block is `design`; no permission to name real merchants was sought |

## 07 AI Strategy — `data/ai.ts` ☑ (2026-09-16, reopened 09-17 for one author-decided addition — see `research/07-ai-strategy.md`; **the 09-16 pass changed no value and none could be**: every block in the file was `design`. On 09-17 the author decided the PIPL constraint should go on the page: `aiPrinciples` went four → five with 「位置单独征求同意」, and the statute is cited in the section copy via `<Sourced>` + a new `locationConsentProvenance` (`verified`, S78) — the chapter's first non-`design` export. Four of the five capabilities are evidenced in production (content understanding, local-service review understanding, one-graph-many-consumers, confirmation-gated agent execution); Social Intelligence has no observable comparable. The cost question closes as **answered structurally, no figure**: a documented cascade (S73) plus sourced levers — tier 5–10×, batch 50% off, cache reads 0.1× — but ¥/post needs tokens-per-post, which is the product's own unknown. New risks section: breed error floor, indirect prompt injection, and PIPL 单独同意 on location data. No `revisions.md` row — no counter-evidence found.)

| Question | Feeds | Notes |
|---|---|---|
| Real-world examples of each capability in production (content understanding, matching, service agents) | `research/07-ai-strategy.md` | ☑ 01 Pinterest taxonomy over 200B+ Pins (S46/S47); 03 Meituan 智能掌柜 review understanding at ~708k merchants (S76) and Dianping's 点仔 internal test (S77); 04 one-graph-many-consumers (S46); 05 confirmation-gated execution as a platform primitive (S74). 02 Social: no production description published anywhere |
| Known limitations / risks (pet-breed misclassification, privacy of location data, agent side-effects) | `research/07-ai-strategy.md` | ☑ Breed error floor from 04 (86.4% / ~59%, and Weibo's top pet types in no class list); indirect prompt injection, whose named control is the human approval the chapter already requires (S75); PIPL Art. 28/29 — 行踪轨迹 is sensitive personal information and needs 单独同意 (S78), a constraint the case mentions nowhere — flagged for the author |
| What content understanding actually costs to run at scale, and how production systems tier it | `capabilities[0]`, 04 pipeline copy, `research/07-ai-strategy.md` | ☑ **Answered structurally; no figure went on any page.** Documented cascade: Pinterest inserts lightweight ranking before full ranking because that step "is usually quite costly and time-consuming" (S73), on top of P2I's per-item constraint (S47). Sourced levers, all first-party: model tier $1/$5 vs $5/$25 vs $10/$50 per MTok (S70) and measured at "about a tenth of Opus 5's cost per question, with 63% accuracy compared with 92%" (S72); batch "charged at 50% of the standard API prices" (S69); cache reads 0.1× input, measured 2.7–5.3× on agent loops and 83% on a triage agent (S71, S72). A ¥/post number needs tokens per post, escalation rate and refresh frequency — all the product's own unknowns, so none was invented. |

## 08 Benchmark — `data/benchmark.ts` ☑ (2026-09-10 — see `research/08-benchmark.md`; six rows sourced, 5 verified / 1 estimate; no example replaced)

| Question | Feeds | Notes |
|---|---|---|
| Verify each described mechanism (Xiaohongshu, Instagram, Soul, Jike, Dianping, Meituan) from public material | `benchmarkRows[*].mechanism`, `.provenance` | product pages, help centres, credible teardowns |
| Is there a better example for any domain? | `benchmarkRows` | replace only with a reason recorded in the note |

## 09 Insights — `data/insights.ts` ☑ (2026-09-16 — see `research/09-insights.md`; **two positions moved, both author-decided**: the concierge 66 → 80 (its supply dependency is contractual and documented — a contract per merchant, sub-second availability, complete inventory — and has no public interface in the target market) and content intelligence 42 → 52 with its "clear evaluation" clause replaced (published breed accuracy tops out at 86.4% / ~59% and the commonest Chinese pet types are in no class list). The other four were checked against 02–08 and left alone; `priorities` / `northStar` / `principles` / `roadmap` are `design`.)

| Question | Feeds | Notes |
|---|---|---|
| Does the evidence from 02–08 change any complexity / value position? | `opportunities[*].complexity/value` | ☑ Two complexity scores moved (concierge 66 → 80, content-intel 42 → 52), both proposed to and decided by the author, two `revisions.md` rows. No `value` score was challenged; `pet-match`, `knowledge-graph`, `creation-tools` and `events` survived the check unchanged, with their rationales now evidenced (S50/S43 for creation tools, S53–S55/S57 for match, S46/S47 for the graph) |
| Dependencies confirmed by research (e.g. merchant availability APIs exist) | `opportunities[*].dependsOn` | ☑ **No public merchant-availability API exists in the target market** — 美团's open platform publishes OAuth and user resources only, behind an enterprise application and review (S79); where the interface is standardised it requires a contract with every merchant, sub-second availability and complete inventory (S80, S81); the Chinese pet-store SaaS vendors publish none (negative finding). `dependsOn` reworded to say so. Same-city density is not externally verifiable and stays the author's |

## 01 Overview — `data/overview.ts` ☑ (2026-09-16 → 09-17 — see `research/01-overview.md`; reconciliation against 02–09 found **seven mismatches**, four of them already predicted by `revisions.md` rows ending "if chapter 01 is ever rewritten…", and **all nine edits are now applied**. Insights 01 and 02 were rewritten **by the author** — the uncompared "stronger than any interest tag" is gone, and insight 02 now states 06's negative finding on the page instead of papering over it with two universals (two `revisions.md` rows, both **author**). `opportunities[0]` and the "Reading the chain" copy were brought in line with revisions already made in 03 and 07; the 2026-09-06 positioning line is in the hero and in `PRODUCT.md`; the dead `overviewScopeProvenance` is wired, which closes the last unmarked data block on the site. `overviewInsightsProvenance` stays `hypothesis` with a note carrying the evidence for and against each insight — reconciliation does not make the insights *derived from* sources.)

Update the summary only after chapters 02–09 are done, and only to reflect verified evidence. The thesis and the
three insights are the author's; propose edits in `research/01-overview.md` rather than changing them.

01 has almost no external facts of its own — it is the consumer of the other eight chapters, so its research is
reconciliation plus one targeted search for the single claim no other chapter covers.

| Question | Feeds | Notes |
|---|---|---|
| Does any public source compare an identity-based social key against an interest tag? | `insights[0]` body | ☑ **Negative finding.** Nothing found. The homophily literature splits ties into status and value homophily and treats both, plus shared activity foci, as parallel mechanisms — it does not rank them. "Stronger than any interest tag" cannot reach the case's bar for `estimate`; P1 proposes dropping it |
| Can the identity half of insight 01 be cited at all? | `insights[0]`, `sources.md` | ☑ **No source added.** Belk, "Metaphoric Relationships with Pets" (*Society & Animals* 4(2), 121–145, 1996) is the obvious citation, but the openly hosted PDF is a scan with no text layer and the publisher page 403s — not readable first-hand, so citing it would rest on a secondary summary of the abstract. This is the only load-bearing claim in the case with no citation |
| Does anything in 02–09 contradict the three insights? | `insights[*]`, `overviewInsightsProvenance` | ☑ Insight 01: contact yes (S53, S55), cohesion and friendship no (S53, S54); the anchored tie is what carries (S54). Insight 02: both ends published (S63, S64, S65), the middle is a recorded negative finding (S66). Insight 03: four of five capabilities have production comparables (S46/S47, S74, S76, S77), social matching has none (S52), and cheap understanding is cheap only on the easy majority (S72) |
| Is 01 consistent with the revisions made in 03, 04, 06, 07 and 09? | `opportunities[0]`, page copy | ☑ **No, in two places.** `opportunities[0].body` still carries the pre-2026-09-15 "understand every post" framing that the cost revision replaced in `ai.ts` and `content.ts`; "Reading the chain" still puts the failure at "relationships that never leave the screen", which 03 revised (BarkHappy left the screen and closed without a transaction layer, S21/S40–S42). P3 and P4 |
| Does every block on the page carry a mark? | `overviewScopeProvenance` | ☑ **No.** The export exists and is rendered nowhere — the Research scope block uses a bare label, not `SectionHeader`, so the 2026-09-15 wiring pass had no prop to pass it to. P8 |
| Where does the positioning line land? | hero copy, `PRODUCT.md` | ◐ Decided 2026-09-06; placement drafted in P7, and `PRODUCT.md`'s "Evidence on Hand" section is itself stale ("None yet … `sources.md` is empty", now 81 sources). P9 |
