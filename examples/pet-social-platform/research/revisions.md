# Revision log

Every time research produces evidence that conflicts with one of the case's conclusions (thesis chain, three
insights, five AI capabilities, priorities, north star, or any chapter-level claim), add one row here **before**
touching `data/`. See `CLAUDE.md` → "Conclusions may change, but only with a paper trail".

A row that ends in "kept original judgement" is as valid as one that revises. What matters is that the
counter-evidence was weighed and the reasoning is on record. An empty log after a chapter is researched means
either nothing conflicting was found or nothing was looked for — the chapter note must say which.

Columns:

- **Date** — ISO, the day the decision was made.
- **Where** — chapter and data field, e.g. `02 Market · marketKpis[0]`, or `01 Overview · thesis`.
- **Original conclusion** — the claim as it stood, quoted or paraphrased closely.
- **Triggering evidence** — what was found, what it measures (region, year, sample), and the source ID from
  `research/sources.md`.
- **Outcome** — either the revised conclusion (and the new provenance set), or "Kept original judgement, because …".
- **Decided by** — `author` or `agent`. Agents may revise chapter-level numbers and wording; changes to the
  thesis, the three insights, the five capabilities, the priorities or the north star are proposed here and
  decided by the author.

| Date | Where | Original conclusion | Triggering evidence | Outcome | Decided by |
|---|---|---|---|---|---|
| 2026-09-06 | 02 Market · `spendTrend`, `spendTrendNote`, `marketKpis[4]` note, section-01 title & implication copy | "Services and health outgrow food as spend shifts from goods to care; services growing fastest" (invented index reaching services 234 vs food 131 by 2026). | White-paper category shares of urban dog & cat spend: services flat at 6.8% / 6.8% / 6.5% (2022 / 2024 / 2025 — S03, S01, S02); food share **rising** 50.7% → 53.7%; the structural riser was medical, 19.0% (2019) → 29.2% (2021) → ~28% plateau (S15, S01). Derived index (share × market size, 2022 = 100): food 122 vs services 110 by 2025. | Revised. Chart replaced with the derived real index (`estimate`, derivation in provenance note; 2023 omitted — four-way share split not public). Claim reworded everywhere (`en`+`zh`): the shift is **goods → care (medical)**; services growth appears in **penetration** (pet travel +4.9pp, insurance 18.9% — S02), not yet in spend share. Chapter's decision-layer argument kept in adjusted form. | agent |
| 2026-09-10 | 03 Competitors · `competitorInsights[0]` | "Direct competitors own identity but stall at interaction; nobody has built the bridge to local action." | BarkHappy (US) did build that bridge — nearby-dog matches, user-hosted play dates, dog-friendly place pages with pet policies — and its site now says the app is no longer available as of January 2025 (S21, first-hand). 宠胖胖 (CN) puts a community module and one-tap nearby stores in one app (S23). | Revised. "Nobody has built the bridge" → "the one that bridged to local action (BarkHappy) had no transaction layer underneath and closed in 2025" (`en`+`zh`). The stall-at-interaction reading is kept; the claim that the bridge was never attempted is dropped. | agent |
| 2026-09-10 | 03 Competitors · `competitorInsights[1]` | "Service and commerce players own the transaction but start every booking from zero trust." | Rover's sitter profiles carry repeat-client stats, background-check badges, verified reviews and a Star Sitter status computed from repeat clients, rating and response time (S27, S28); Meituan carries trust in platform-level refund terms (S38). Trust is not zero — it is rebuilt per sitter / per merchant from artefacts, not carried by a community. | Revised wording only: "start every booking from zero trust" → "trust is rebuilt per booking from badges and reviews; no community carries it forward" (`en`+`zh`). Direction of the argument unchanged. | agent |
| 2026-09-10 | 03 Competitors · `competitorInsights[2]` | "The empty quadrant — high service, high social — is where a community-grounded service layer would sit." | The quadrant was occupied: BarkHappy sat high on the social axis with a local layer and no transaction layer, and closed (S21). 宠胖胖 sits mid-map with community beside stores (S23). The quadrant is empty of *surviving* products, not untried. | Revised: "empty quadrant" → "has no surviving product … with the transaction layer BarkHappy lacked" (`en`+`zh`). The opportunity reading is kept, now stated with its failure case. | agent |
