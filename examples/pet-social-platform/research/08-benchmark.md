# 08 · Benchmark — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-10

## Questions
See `research/plan.md` → Benchmark.

## Findings

Method note: the six benchmark products are the same six that sit in chapter 03's cross-industry tier, and their
mechanisms were verified there on 2026-09-10 (S30–S38: App Store listings via the iTunes lookup API, help centres
and platform rule pages, read first-hand or through a text proxy where the site blocks fetches). This chapter reuses
those sources; nothing new was fetched. Per row, what the source actually documents vs. what stays the author's reading:

- **小红书 (Content)** — documented: interest community, "遇见同好", 种草 → 下单, offline activities (S30). Secondary
  only: search-first usage (~70% of MAU search, ~600M daily searches in 2024Q4 — S31, 新浪科技 reprint). Author's
  inference: "search and feed share one understanding layer". → `estimate`.
- **Instagram (Content)** — documented: Close Friends applies to posts, notes, reels and stories; private list, green
  ring, no request/notification (S32). Author's reading: pet accounts as personas (observed practice, not a feature). → `verified`.
- **Soul (Social)** — documented: 30-second personality/values test, avatars, voice matching, group parties, nearby
  discovery (S33). **Not documented: "guided first conversation"** — the row's mechanism said so; removed (also
  corrected in `data/competitors.ts`). → `verified` for the reworded mechanism.
- **即刻 (Social)** — documented: 30W+ circles (developer claim), 48-hour diaries, offline meet-ups (S34). "Visible
  norms" is the author's reading. → `verified`.
- **大众点评 (Local)** — documented: 必吃榜 rules — review-integrity first, no nominations, no fees, manipulation
  exclusion, notarised (S36); reviews, 团购, booking in the listing (S35). → `verified`.
- **美团 (Local)** — documented: 未消费随时退 / 过期自动退 / 1–7 working-day refunds (S38), "7天内未消费无条件退款",
  table booking, delivery (S37); pet-store booking pilot (S11). **Not documented: "merchant SLAs"** — reworded to
  platform-level guarantees. The adaptation and `transferMap[execution]` keep "SLA" as the case's own design term
  for what the concierge would require from merchants; the note on the row says so. → `verified`.

**Is there a better example for any domain?** Considered and kept as is:
- Content: 抖音 has larger pet reach (S07) but its mechanism is feed-first; the chapter's point is decision-grade
  discovery, which 小红书 documents better (种草 → 下单, search). Kept.
- Social: BarkHappy (03) is the closest social × local product but closed in 2025 (S21) and published no mechanism
  page — it is evidence, not a benchmark. Soul and 即刻 kept.
- Local: Rover (03) documents trust artefacts (repeat-client stats, Star Sitter — S27) and would fit "trust ranking";
  not added because the chapter is about cross-industry transfer and Rover is in-industry. 大众点评 / 美团 kept.

## Data changes

All in `data/benchmark.ts`, `en` and `zh` together; `transferPrinciple` and `transferMap` unchanged.

| Field | Old | New | Confidence |
|---|---|---|---|
| `benchmarkRows[xiaohongshu].provenance` | — | added | estimate · S30 + S31 |
| `benchmarkRows[instagram].provenance` | — | added | verified · S32 |
| `benchmarkRows[soul].mechanism` | "Compatibility test before photos; guided first conversation" | "30-second personality-and-values test before photos; avatars, voice matching and group parties as low-pressure first contact" | verified · S33 |
| `benchmarkRows[jike].provenance` | — | added | verified · S34 |
| `benchmarkRows[dianping].provenance` | — | added | verified · S36 (+S35 in note) |
| `benchmarkRows[meituan].mechanism` | "… in one flow, with merchant SLAs" | "… in one flow, backed by platform-level guarantees (unconsumed-voucher refund, expired-voucher auto refund)" | verified · S38 (+S37, S11 in note) |
| `data/competitors.ts` → `competitors[soul].mechanism` | "→ guided first conversation" | "→ low-pressure first contact (avatars, voice matching, group parties)" | verified · S33 (03 follow-up) |

## Still hypothesis

- `whyItWorks`, `insight`, `adaptation` on every row and the whole `transferMap` — product judgement by design; the
  provenance mark covers the mechanism column only (the row's note says which parts are inference).
- "SLA" in `benchmarkRows[meituan].adaptation` and `transferMap[execution]` is the case's own term.

## Evidence for / against the chapter's argument

- **Against two mechanism descriptions as written**: Soul's "guided first conversation" and Meituan's "merchant SLAs"
  are not documented anywhere public → both reworded (chapter-level wording, decided by agent; no insight or
  adaptation changed, so no `revisions.md` row — the transfer argument itself was not contradicted).
- **For "borrow the mechanism, not the product"**: each documented mechanism is narrow and product-specific
  (a private list, a 30-second test, a list rule, a refund term); none of the six products bundles more than one
  stage of the loop, which is the chapter's premise.
- Counter-evidence was looked for row by row; only the two wording conflicts above were found.
