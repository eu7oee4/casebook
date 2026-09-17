# 01 · Overview — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis; P1 and P2 written by the author, P3–P9 applied as recommended) · Last updated: 2026-09-17

## Questions
See `research/plan.md` → Overview. The rule there: update 01 only after 02–09 are done, only to reflect
verified evidence, and **propose** edits to the thesis and the three insights here rather than making them.

## Findings

**Method.** 01 has almost no external facts of its own; it is the consumer of the other eight chapters. Of its
seven blocks, four are `design` (`scope`, `thesis`, `opportunities`, `readingPath`), two are framing copy in
`app/[locale]/page.tsx` ("Reading the chain", the three-insights section title), and exactly one asserts things
about the world: `insights`. So the work here is reconciliation — reading every claim 01 makes against what
02–09 actually found — plus one targeted search for the single claim in 01 that no other chapter covers.

Seven mismatches came out of it. Four of them were already predicted by rows in `research/revisions.md` that
end "if chapter 01 is ever rewritten…".

### F1 — The three-insights section title claims a provenance the block does not have

`app/[locale]/page.tsx` heads the block with "What the research changed in how I think about the product" /
「研究改变了我对这个产品的哪些看法」. The three insights were written **before any research** (`PROGRESS.md`:
"Chapters researched: none yet") and have not changed since. As it stands the title is false in the same way
the two blanket disclaimers corrected on 2026-09-16 were false, and it sits one scroll below the hero.

It is also the easiest to fix: apply P1 and P2 below and the title becomes true. See P6 for the alternative.

### F2 — Insight 01's comparative is uncompared, and its implicit climb is denied by 05

Insight 01 body: "That identity is a stronger social key than any interest tag, because it is specific,
persistent and emotionally loaded."

Two separable claims. The first half — pet as identity rather than topic — is qualitatively well supported in
the human–animal literature (pets as "parts of self" / the extended self; public display of a pet as social
expression of the owner's identity). **No source was added for it**: see "The one search 01 needed" below.

The second half is a comparison, and nothing public compares an identity key against an interest tag. Worse
for the claim, the network-science literature treats interest and value homophily as a *primary* tie-formation
mechanism in its own right, so the comparative is asserted against that literature rather than with it.

What 05 did establish (already on record, `revisions.md` 2026-09-16):

- **For contact**: US dog owners were 2.4× more likely to meet their neighbours than cat owners (95% CI
  1.5–3.9; n=99 aged 55+, S55). Japanese dog owners **who walked** scored significantly higher on activities
  with neighbours (N=3606, S53).
- **Against the climb**: no significant difference in social cohesion between non-owners, owner non-walkers
  and owner walkers in either age group (S53); dog ownership did **not** raise the likelihood of neighbourhood
  friendships once demographics were controlled (b=0.22, p=.36, S54).
- **What actually carries**: the *anchored* tie — relationships existing through the dog — is the only type
  mediating ownership → sense of community (b=0.69, p<.001, "more than twice as large as the direct effect",
  S54).

So the pet does anchor the relationship; the climb from contact to trust is the product's job. That is a
finding 01 should be carrying, not a qualification it should be hiding from.

### F3 — Insight 02's two universals are exactly the step nobody publishes

Insight 02 body: "Every same-city relationship carries service intent; every service visit creates content and
trust."

06 looked for that conversion and recorded a **negative finding**: no marketplace discloses a request →
booking rate. Angi discloses "approximately 23 million projects" and Rover discloses bookings; neither is a
rate (S66), and every "booking rate" league table in search traces to marketing blogs. What *is* published is
the two ends of the loop:

- **Repeat**: Rover, FY2021 10-K — "approximately 81% of our bookings were repeat bookings" (S64).
- **Peer trust**: 32.8% of new veterinary clients first heard of the practice from a fellow pet owner, ahead
  of every other channel, and chose on personnel over location (N=129, NL, S63).
- **Visits → content**: the nearest comparable is Airbnb's control group, "68% of trips result in a guest
  review" (S65) — a much higher-stakes transaction and a review, not content. 06 reads the case's own 31%
  target as conservative against it.

Separately, 06's `revisions.md` row drops the sequence word: intent shows up in content **as well as** in
search, not before it (Xiaohongshu discloses 70% of MAU actively searching, S67, against Meituan notes +224%
vs searches +80%, S68). 01's insight 02 does not use the word "before", so nothing there needs correcting on
that count — but any rewrite must not reintroduce it.

### F4 — Opportunity 01 is still on the pre-2026-09-15 wording

`overview.opportunities[0].body`: "Understand every post at the pet / breed / stage / place / emotion level".

On 2026-09-15 the author's cost challenge changed exactly this claim in `data/ai.ts` (`capabilities[0]`) and
`data/content.ts` (`pipeline[1]`) plus the content page copy: understanding runs **once at publish time, not
per impression**, is mostly a profile join or a small classifier rather than a large model, and **only
ambiguous posts escalate**. 01 was not updated in that pass and still reads as one large multimodal call per
post — the exact reading the revision existed to remove.

Two further caveats that 01's one-liner cannot carry but which the block-level note now does: breed has a
published ceiling (86.4% on Tsinghua Dogs, ~59% on Oxford-IIIT Pet, and 橘猫 / 狸花猫 / 中华田园犬 are classes
in neither list, S44–S45), and "emotion" has no comparable anywhere in this case. The label list is left
intact in P3 because `capabilities[0].capability` in 07 uses the same seven labels; dropping one only in 01
would create a fresh inconsistency.

### F5 — "Reading the chain" puts the failure one step too early

Current copy: "The chain fails where most pet apps stop: interaction that never becomes a relationship, and
relationships that never leave the screen."

03 revised this reading twice. BarkHappy **did** get relationships off the screen — nearby-dog matches,
user-hosted play dates, dog-friendly place pages with pet policies — and closed in January 2025 (S21,
first-hand; Wayback snapshots S40; 1 employee, no funding rounds, S41; 60,000 users in 2017, S42). 03's
`competitorInsights[0]` now reads "the one that bridged to local action had no transaction layer underneath".
Half of 01's sentence is right (most apps stall at interaction — 猫卡 / 闻闻窝 / 遛遛 / 狗卡 / 宠咖秀 all
stopped, S22; ~30 pet apps tested, half dead, S39) and half is now contradicted by the case's own chapter 03.

Paragraph 2 of the same block — "AI … makes each transition cheaper" — is supported structurally by 07 but
drops 07's sharpest finding: the cheap tier is **materially worse, not just cheaper** ("about a tenth of Opus
5's cost per question, with 63% accuracy compared with 92%", S72), so the escalation path is load-bearing.

### F6 — `overviewScopeProvenance` is exported and never rendered

`data/overview.ts:4` exports it; `grep` across `app/ components/ data/ lib/` finds no other reference. The
2026-09-15 pass wired 28 section headers and marked two mixed sub-blocks, and missed this one: the Research
scope block uses a bare `t-label` div, not `SectionHeader`, so there was no `provenance` prop to pass. The
site therefore renders one data block from `data/` with no mark, against "nothing renders unmarked".

### F7 — Two internal docs now state the opposite of the truth

- `PRODUCT.md` → "Evidence on Hand": "None yet — **this is a to-do state, not a design intention.** As of
  2026-09-05 every figure on the site is still `hypothesis` and renders as Illustrative; `research/sources.md`
  is empty." There are now 81 sources and eight researched chapters.
- `PRODUCT.md` → Capabilities and Constraints lists four provenance tiers; `design` (added 2026-09-15) is
  missing.
- `PROGRESS.md:23`: "- [ ] Chapters researched: none yet (all figures still hypothesis)".

Not reader-visible, so lower priority than the 2026-09-16 disclaimer fix — but the same class of error, and
the 2026-09-06 decision already says the positioning line lands in `PRODUCT.md` when 01 is updated.

### The one search 01 needed, and what came back

Insight 01's "stronger social key than any interest tag" is the only claim in 01 that no other chapter
covers, so it got its own search rather than a reconciliation.

- **Comparative — negative finding.** Nothing found compares identity-based against interest-based keys for
  tie formation. The homophily literature splits ties into *status* homophily (fixed or elective
  socio-demographic characteristics) and *value* homophily (beliefs, attitudes), and treats both, plus shared
  activity foci, as parallel mechanisms — it does not rank them, and it certainly does not rank "pet owner"
  against "interest tag". The comparative cannot be supported at the case's own bar for `estimate`.
- **Identity half — no source added, deliberately.** The obvious citation is Belk, "Metaphoric Relationships
  with Pets" (*Society & Animals* 4(2), 121–145, 1996), whose metaphors include pets as "parts of self". The
  openly hosted PDF (animalsandsociety.org) is a **scan with no text layer** and the publisher page returns
  403, so it could not be read first-hand; secondary summaries of the abstract were the only access. Under
  rule 3 that is not enough for `verified`, and citing an abstract summary to prop up a claim the author
  already holds is confirmation shopping. **No entry was added to `sources.md`.** If the author wants this
  half cited, the honest route is a library copy of Belk 1996 or of Trigg et al. 2016 (*Social and Personality
  Psychology Compass* 10(2)), read in full.

Net: the identity half of insight 01 remains the only load-bearing claim in the case with no citation at all,
and the comparative half should go. P1 reflects that.

## Data changes

**2026-09-16 — reconciliation pass.** Provenance metadata only; no value, no wording, no conclusion changed.

- `overviewInsightsProvenance` — stays `hypothesis` (these are the author's product judgement, written before
  research; nothing about the reconciliation makes them *derived from* sources, so `estimate` would
  over-claim). Gained `retrievedAt: "2026-09-16"` and a `note` carrying, per insight, what 02–09 found for and
  against, so the hover card shows a reader the evidence status of the block instead of a bare "Illustrative".
  Same pattern as `understandingMetrics` in 04: target stays hypothesis, comparable goes in the note.
- Nothing else in `data/overview.ts` was touched on 09-16.

**2026-09-17 — P1–P9 applied.** `en` and `zh` changed together everywhere.

`data/overview.ts`
- `insights[0].body` (P1) — **author-written.** Comparative dropped; the identity is now "a reliable social
  key" that "genuinely produces contact", with the climb to trust named as the product's job. Two
  `revisions.md` rows cover P1 and P2; both logged **author**.
- `insights[1].body` (P2) — **author-written.** Universals dropped; the unmeasured middle (S66) is now stated
  on the page.
- `opportunities[0].body` (P3) — "once at publish time, with only the ambiguous ones escalated" added, closing
  the gap the 2026-09-15 cost revision left in 01. Follow-through of an existing row, so no new row.
- `overview.positioning` (P7) — new `Text` field carrying the 2026-09-06 positioning line in both locales.

Three edits to the author's ZH drafts, all small and all flagged back:
1. P1 — 「产品要思考的**的**事」 → 「的事」 (duplicated 的).
2. P1 — 「……产生接触，作为一把社交钥匙。」 → 「这种身份是一把可靠的社交钥匙，能让养宠人之间真的产生接触。」 The
   appositive dangled at the end of the clause.
3. P2 — 「寄养喂养」 → 「寄养」 (喂养 is not one of 06's eight `serviceCategories` rows; 上门喂养 appears only
   inside S61's headline); one 而-clause that broke off at a dash split into a complete sentence;
   「搭筑」 → 「搭建」.

Raised and **not** changed: P1's 「它本身带来的信任有限」 concedes more than the evidence shows. S53 and S54 are
**null** results — no difference in cohesion, b=0.22 p=.36 for friendship — so "limited trust" asserts a small
positive effect that was not measured, where "it does not produce trust on its own" would stay inside the
finding. The author's wording was kept; the point is on the record here and in the `revisions.md` row.

`app/[locale]/page.tsx`
- "Reading the chain" ¶1 (P4, Option A) — failure point moved one step later and BarkHappy named, matching
  03's `competitorInsights[0]`. Follow-through of the 2026-09-10 row, so no new row.
- "Reading the chain" ¶2 (P5) — 07's escalation half appended: cheap only on the easy majority, the cheap tier
  is materially worse (S72), so escalation is design rather than optimisation.
- Hero (P7) — `overview.positioning` rendered under the summary in both locales, `t-annotation` with a
  `border-t border-line-2 pt-3` separator so it does not blur into the EN-only `summaryZh` line above it.
- Research scope (P8, Option A) — `ProvenanceMark` wired beside the label, `ProvenanceMark` /
  `overviewScopeProvenance` imported. **This closes the last unmarked data block on the site**; EN now
  prerenders three `Design` badges on 01 where it prerendered two.
- P6 — no edit, as recommended: with P1 and P2 applied the section title describes what actually happened.

`PRODUCT.md` / `PROGRESS.md` (P9)
- "Evidence on Hand" rewritten from "None yet … `sources.md` is empty" to the real state: nine chapters
  researched 2026-09-06 → 09-17, 81 sources, the positioning line in both languages, and four sub-lists —
  what is sourced, what is Illustrative **by design**, what is `design`, and the four negative findings.
- The tier list gained `design` and the "nothing renders unmarked" rule.
- `PROGRESS.md` research-handoff checkbox ticked with the dates, 81 sources and 14 revision rows.

**Standing check on the blanket disclaimers** (`CLAUDE.md`): re-read after this pass. The sidebar's "Every
figure shows its provenance." / 「每个数据都标注了出处。」 is *more* true than before (P8 closed the last gap),
and the footer's "Market, competitor and mechanism figures are sourced; product targets and judgement fields
are marked Illustrative." is the short form of the positioning line now in the hero. Neither changed.

Observation, not a proposal: the hover card prints a generic blurb for every `hypothesis`
("Placeholder hypothesis used to structure the case…"). For the three insights that is slightly wrong — they
are the author's judgement, not a placeholder. The note now says so; changing the blurb would be a component
edit and is not proposed.

## Proposed edits — **all decided and applied 2026-09-17**

P1 and P2 were written by the author (their drafts are kept below under 「✅selected alternative」, with the
EN translations that shipped and the three ZH fixes listed in Data changes). P3–P9 were applied as
recommended. Nothing in this section is outstanding.

Ordered by how much they matter. EN and ZH drafts are paired; whichever option is chosen, both change together.

### P1 · Insight 01 body — drop the uncompared comparative, carry 05's finding
Predicted by `revisions.md` 2026-09-16 (05 Social · `relationshipLadder`).

Current
> EN: "Owners present themselves through their pets — breed, stage, temperament, routine. That identity is a stronger social key than any interest tag, because it is specific, persistent and emotionally loaded."
> ZH: 「养宠人通过宠物来呈现自己：品种、阶段、性格、作息。这种身份比任何兴趣标签都更有力，因为它具体、持久，且带有强烈情感。」

**Option A (recommended)** — replaces the comparative with what the research actually says:
> EN: "Owners present themselves through their pets — breed, stage, temperament, routine: specific, persistent, emotionally loaded. That identity reliably produces contact between owners. It does not produce trust on its own — the climb from contact to relationship is the product's job, not a property of owning a dog."
> ZH: 「养宠人通过宠物来呈现自己：品种、阶段、性格、作息——具体、持久，且带有强烈情感。这种身份能可靠地让养宠人之间产生接触，但它本身不会带来信任：从接触爬到关系，是产品要做的事，不是养狗自带的属性。」

**Option B** — minimal: delete only the comparative clause, add nothing.
> EN: "…That identity is specific, persistent and emotionally loaded, which is what makes it usable as a social key."
> ZH: 「……这种身份具体、持久，且带有强烈情感，这正是它能被当作社交钥匙的原因。」

**Option C** — keep the sentence as it stands and let the block note carry the absence of a comparison.

**✅selected alternative** - 英文你看着翻译一下，中文措辞也可以小改，不对的地方直接指出来
> ZH: 「养宠人通过宠物来呈现自己：品种、阶段、性格、作息——具体、持久，且带有强烈情感。这种身份能可靠地让养宠人之间产生接触，作为一把社交钥匙。但它本身带来的信任有限：如何从接触上升到关系，是产品要思考的的事。」

Note: no figure is proposed inside an insight body. `InsightCard` takes plain strings, so a number there could
not get a `<Sourced>` hover card without a component change — the evidence belongs in the block note.

### P2 · Insight 02 body — replace the two universals with the published ends and the unmeasured middle
Predicted by `research/06-local.md` → Evidence for / against.

Current
> EN: "Walks, parks, groomers and vets are inherently local. Every same-city relationship carries service intent; every service visit creates content and trust. That loop is the moat a pure content app never gets."
> ZH: 「遛狗、公园、美容店、宠物医院天然是本地的。每一段同城关系都带着服务意图，每一次服务都产生内容与信任。这个闭环是纯内容产品永远得不到的护城河。」

**Option A (recommended)** — states the negative finding instead of hiding it:
> EN: "Walks, parks, groomers and vets are inherently local, and the recommendation an owner acts on comes from another owner. Service relationships repeat and peer trust travels; what no marketplace publishes is the step between them — how often a stated need becomes a booking. That gap is the moat, and the thing this product has to prove."
> ZH: 「遛狗、公园、美容店、宠物医院天然是本地的，而养宠人真正会照着做的推荐，来自另一个养宠人。服务关系会复购，熟人信任会传递；没有任何平台公开过中间那一步——一句需求到底有多大比例变成一次预订。那道缺口既是护城河，也是这个产品必须自己证明的东西。」

**Option B** — minimal: drop only the universal quantifiers, keep the structure.
> EN: "…Same-city relationships carry service intent, and service visits create content and trust. That loop is the moat a pure content app never gets."
> ZH: 「……同城关系带着服务意图，服务也会产生内容与信任。这个闭环是纯内容产品永远得不到的护城河。」

**✅selected alternative** - 英文你看着翻译一下，中文措辞也可以小改，不对的地方直接指出来
> ZH: 「遛狗、美容、寄养喂养、宠物医院……这些需求天然是本地的，而一句需求到底有多大比例变成一次预订——没有任何平台公开过中间那一步。宠物社交关系带着服务意图，服务落地产生内容、信任和复购。这个闭环是纯内容产品永远得不到的护城河，也是最难搭筑的缺口。」

### P3 · Opportunity 01 body — align with the 2026-09-15 cost revision

Current
> EN: "Understand every post at the pet / breed / stage / place / emotion level; the substrate for every other capability."
> ZH: 「在宠物 / 品种 / 阶段 / 地点 / 情绪的层面理解每一条内容，是其他所有能力的基础。」

**✅Proposed** (label list deliberately unchanged, see F4)
> EN: "Understand every post at the pet / breed / stage / place / emotion level — once at publish time, with only the ambiguous ones escalated; the substrate for every other capability."
> ZH: 「在宠物 / 品种 / 阶段 / 地点 / 情绪的层面理解每一条内容——发布时跑一次，只有判不准的才升级处理；是其他所有能力的基础。」

### P4 · "Reading the chain", paragraph 1 — move the failure point one step later
`app/[locale]/page.tsx`. Predicted by `revisions.md` 2026-09-10 (03 · `competitorInsights[0]`).

**✅selected Option A (recommended, names the product as 03 does)**
> EN: "Each step is a product surface with its own metric. Most pet apps stall at interaction that never becomes a relationship. BarkHappy got further — nearby matches, user-hosted play dates, dog-friendly place pages — and closed in 2025 with no transaction layer underneath it."
> ZH: 「每一步都是一个有自己指标的产品界面。大多数宠物产品止步于互动，关系始终没有长出来。BarkHappy 走得更远——附近匹配、用户自办的约玩、宠物友好场所页——但下面没有交易层，2025 年关停。」

**Option B** — same point without naming the product:
> EN: "…The one product that did get relationships off the screen had no transaction layer underneath it, and closed in 2025."
> ZH: 「……唯一真的把关系带到线下的那个产品，下面没有交易层，2025 年关停了。」

### P5 · "Reading the chain", paragraph 2 — add 07's escalation half

**✅Proposed** (append one sentence)
> EN: "… — understanding content, matching people, executing services. Cheaper on the easy majority: the cheap model tier is materially worse, not only cheaper, so knowing when to escalate is part of the design rather than an optimisation."
> ZH: 「……理解内容、匹配人、执行服务。便宜只在「容易的大多数」上成立——便宜的模型档位不只是更便宜，它确实更差，所以「什么时候升级」是设计的一部分，而不是事后的优化。」

### P6 · The three-insights section title
- **✅Option A (recommended)**: apply P1 and P2; the title "What the research changed in how I think about the
  product" then describes what actually happened, and nothing needs editing.
- **Option B**: if all three insights are kept verbatim, the title has to stop claiming a research provenance:
  > EN: "Three things I believe about this product" · ZH: 「关于这个产品，我相信的三件事」

### P7 · The positioning line into the hero
Already decided 2026-09-06 ("lands in 01 Overview opening copy and `PRODUCT.md` when chapter 01 is updated");
only the placement is open, and it adds a rendered element, so it needs an explicit go-ahead.

- **✅Option A (recommended)**: a new `overview.positioning` Text field rendered under `overview.summary` in the
  hero, in both locales. (The existing `summaryZh` slot below it renders for `en` only, so it cannot be used.)
  - ZH (author's own wording): 「基于公开来源做过实证的产品研究；市场、竞品、机制类数字均有出处，产品目标值与判断类结论明确标注为作者假设。」
  - EN: "Evidence-backed product research built on public sources; market, competitor and mechanism figures are sourced, while product targets and judgement-based conclusions are explicitly marked as the author's hypotheses."
- **Option B**: put it in the Research scope block instead, next to the scope badge from P8.

### P8 · `overviewScopeProvenance`
- **✅Option A (recommended)**: render a `ProvenanceMark` beside the "Research scope" label, same pattern as the
  28 headers wired on 2026-09-15. Closes the last unmarked data block on the site.
- **Option B**: delete the dead export and accept that the scope list is navigation, not data.

### P9 · `PRODUCT.md` and `PROGRESS.md` (F7)
- Rewrite `PRODUCT.md` → "Evidence on Hand" to the real state: eight chapters researched 2026-09-06 → 09-16,
  81 sources in `research/sources.md`, targets and judgement fields Illustrative **by design**, and the
  positioning line per the 2026-09-06 decision.
- Add `design` to the tier list in `PRODUCT.md` → Capabilities and Constraints.
- Tick `PROGRESS.md:23` with the eight researched chapters.

## Still hypothesis

- `overviewInsightsProvenance` — the three insights stay `hypothesis` and stay the author's. Insight 01's
  identity half has no citation in the case at all (see the search section); insight 02's conversion step has
  a recorded negative finding (S66); insight 03 is the best evidenced of the three but its social-matching
  third has no production comparable anywhere (S52).
- `overviewScopeProvenance`, `overviewThesisProvenance`, `overviewOpportunitiesProvenance` — `design`, and
  correctly so: the scope, the thesis chain and the four opportunities are the case's own proposal. 09's two
  moved complexity scores do not touch 01, which shows priorities (P0 / P1) only, and those are unchanged.

## Evidence for / against the chapter's argument

**Insight 01 — pet as social identity.**
For: S55 (2.4× more likely to meet neighbours, US, n=99 aged 55+); S53 (walkers higher on activities with
neighbours, Japan, N=3606); S54 (anchored ties mediate sense of community, b=0.69, p<.001, N=377); S43
(owners over-index on pet knowledge content, TGI 136, N=500). Qualitative support for pets-as-extended-self
exists but could not be read first-hand, so it is not cited.
Against: S53 (no significant difference in social cohesion, either age group); S54 (ownership does not raise
neighbourhood friendship likelihood, b=0.22, p=.36). Uncompared: "stronger than any interest tag" — no source
found; the homophily literature treats interest/value similarity as a primary tie mechanism of its own.

**Insight 02 — local services turn online relationships into real-world value.**
For: S64 (Rover, 81% of bookings repeat; 3.7 → 7.3 bookings per repeat customer in year one); S63 (32.8% of
new vet clients arrive via another owner, chosen on personnel over location); S65 (Airbnb, 68% of trips
produce a review); S60 (KPMG: 宠物店 above 50% for both 洗美 and 寄养); S68 (Meituan: 宠物友好 notes +224%,
platform pet-service merchants 30k+, +24% H1).
Against / unmeasurable: S66 (no marketplace publishes a request → booking rate — Angi discloses projects,
Rover discloses bookings); S67 (on the platform closest to this thesis, search is the dominant entry — 70% of
MAU actively search), which is why 06 dropped the word "before" from the ordering claim.

**Insight 03 — AI as the intelligence layer, not a feature.**
For: S46 / S47 (Pinterest: one Interest Taxonomy, >99% of Pins mapped, feeding home feed, search and ads —
one graph, many consumers, over 200B+ Pins as a daily batch); S76 (Meituan 智能掌柜 splits reviews by
菜品 / 服务 / 环境 at ~708k merchants); S77 (Dianping 点仔 answering from its own review corpus); S74
(confirmation-gated execution is a platform primitive: "The model never executes anything on its own").
Qualifying: S72 (the cheap tier is 63% accurate against 92% — cheap only on the easy majority, escalation is
load-bearing); S44 / S45 (breed ceiling, and the commonest Chinese pet types in no class list); S52 (no dating
or matching company discloses a funnel — social matching is the one capability with no production comparable).
Against: nothing found that says the layer should be a feature instead.

**Thesis chain / "Reading the chain".**
For the stall at interaction: S22 (猫卡 / 闻闻窝 / 遛遛 / 狗卡 / 宠咖秀 all stopped); S39 (~30 pet apps tested,
about half dead); S24 (铲屎官的日常, last updated 2020).
Against "relationships that never leave the screen": S21 / S40 / S41 / S42 — BarkHappy left the screen and
still failed, with no transaction layer and no funding. See P4.

**New constraint still unaddressed anywhere in the case** (carried forward from 07, flag 6): PIPL Art. 28
lists 行踪轨迹 as sensitive personal information and Art. 29 requires 单独同意 (S78). Location is load-bearing
in insight 02, in `capabilities[01]`, in 05's same-city rung and in the whole of 06. Adding it is new content,
not a correction, so nothing was written — it stays the author's call.
