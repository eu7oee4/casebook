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
| _example — delete when the first real row is added_ 2026-09-05 | 02 Market · `marketKpis[3]` | "Owners visit a pet service ~4× per quarter." | Industry white paper (S03) reports 6–8 grooming/vet visits **per year** for urban dog owners, 2025, n≈12k. That is ~1.5–2× per quarter, not 4×. | Revised to "~2× per quarter"; `confidence: "estimate"`, note records the derivation. `en` and `zh` both updated. | agent |
| _example — delete when the first real row is added_ 2026-09-05 | 01 Overview · insight 2 | "Owners primarily form relationships through their pets, not around content." | Survey (S07) finds 61% of owner-to-owner contacts start from a content interaction, 2024, n≈3k, single platform. | Kept original judgement, because the survey measures the first touch on one content-first platform, not where the relationship persists; the insight is about the durable bond. Recorded in `research/05-social.md`. Claim on `/` marked `contradicted` until the author reviews. | author |
