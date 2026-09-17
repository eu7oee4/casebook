# 10 · Insights — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis; both score proposals decided by the author) · Last updated: 2026-09-16

> Renumbered 09 → 10 on 2026-09-17, when 09 风险与未解 was inserted before it. The file was `research/09-insights.md`;
> references to that name in dated records (`research/revisions.md`) were deliberately left as written.

## Questions
See `research/plan.md` → Insights.

## Findings

Method note: `priorities`, `northStar`, `principles` and `roadmap` are `design`. The only block that asserts
anything about the world is `opportunities` — six items with `complexity` / `value` scores (0–100), a
`rationale`, an optional `dependsOn` and a `firstMilestone`. The scores are the author's judgement and no
source can produce them; what research can do is check the *claims inside the rationales and dependencies*,
which is what follows. This chapter is also the first that mostly consumes the other eight rather than the web.

**Q1 — does the evidence from 02–08 move any position? Item by item.**

**`content-intel` (42 / 88, P0) — the rationale's two halves now disagree.**
"Mature multimodal models" holds: Pinterest classifies a 200B+ Pin corpus and maps "more than 99% of the Pins"
to at least one taxonomy node (S46), which also makes this item's `firstMilestone` — labels on 90% of posts —
the one milestone in the chapter with a published precedent above it. **"Clear evaluation" does not hold on this
product's label set.** From 04: the best published breed comparables are 86.4% (Tsinghua Dogs, 130 breeds) and
~59% (Oxford-IIIT Pet), and Weibo's most common pet types (橘猫, 狸花猫, 中华田园犬) appear in **none** of
those class lists (S44–S45); service intent has no public comparable at all. From 07: the cheap tier is not
only cheaper but materially worse — "about a tenth of Opus 5's cost per question, with 63% accuracy compared
with 92%" (S72) — so the quality of this capability depends on an escalation policy that has to be tuned against
an evaluation set that does not yet exist for Chinese pet content. **Proposal to the author** (below): keep
`value: 88`, and either raise `complexity` from 42 or drop the words "clear evaluation" from the rationale.
Nothing changed yet.

**`concierge` (66 / 92, P0) — the rationale is right and understated; this is the chapter's real finding.**
It says the item "depends on supply integration, not on research breakthroughs", with
`dependsOn: "Merchant availability API; pet profile"`. Research says supply integration is documented, hard,
and contractual rather than technical:

- **In the target market there is no self-serve availability API.** Meituan's public open platform documents
  OAuth 2.0 and user-resource endpoints (phone number, avatar/nickname) and nothing else; access requires being
  an enterprise, contacting "美团侧合作的业务方", emailing an application to `mphtb.open@meituan.com` with the
  company's 营业执照号 and the applicant's ID number, and passing review before `client_id` / `client_secret`
  are issued (S79). Nothing public exposes a 丽人/到店 merchant's bookable slots.
- **Where the interface is a published standard, the requirements say what it actually costs.** Google's
  Actions Center Reservations End-to-End integration requires that "Partners need to have a direct contractual
  relationship with all the merchants included in their integration feed" (S80), that "Partners must have
  direct access to merchants' availability/time slots in real time (ie. partners must be able to respond to
  availability requests from Google in less than 1 second)" and "must have comprehensive inventory for their
  merchants. Merchants with partial or distressed inventory may not be eligible" — and that "meeting the
  requirements does not guarantee a partner will be eligible" (S81). The integration is three components: feeds,
  a booking API and a booking server.
- **The merchant-side systems that hold pet-service slots publish no APIs.** Searching the named Chinese
  pet-store SaaS products (宠老板, 宠想来, 爱宠 iCHONG, 宠知道) returned marketing and feature pages only — no
  public API documentation for any of them. Negative finding: integration would be per-vendor BD, not a
  published endpoint.

So "supply integration" decomposes into a contract per merchant (or per SaaS vendor), a real-time availability
path measured in sub-second responses, and inventory coverage complete enough to be worth showing — before any
of the case's AI work starts. `value: 92` is if anything reinforced by 06 (repeat dominates pet services:
"approximately 81% of our bookings were repeat bookings", S64; peer recommendation dominates high-trust
acquisition at 32.8%, S63). **Proposal to the author**: raise `complexity` from 66 — it currently sits below
`knowledge-graph`'s 82, and the evidence says the hard part of this item is not modelling but supply. The
`firstMilestone` ("grooming only, one city") is exactly the right hedge and is now evidence-backed; the
"under 60 seconds" half has no public comparable, same negative finding as 06's `serviceMetrics[1]` (S66).

**`pet-match` (58 / 80, P1) — position stands, rationale strengthened.**
"Needs density" is supported from two directions. 05: the mediating relationship type is the *anchored* tie —
relationships that exist through the dog (b=0.69, p<.001), more than twice the direct effect — while
neighbourhood friendship shows no effect (b=0.22, p=.36) and social cohesion no difference (S53–S55). 06: the
social act is the **walk**, not ownership, and 77.9% of dogs are walked at least daily (S57), which is what
makes a schedule-based match plausible at district level. The `firstMilestone` ("weekend walk matches in one
district; measured on 7-day retention") is the one milestone in the chapter that matches its evidence exactly.
No change proposed.

**`knowledge-graph` (82 / 84, P1) — position stands, and the "grow it, don't pre-build it" claim is now sourced.**
Pinterest's Interest Taxonomy is a hierarchy up to 11 levels that the classification layer (P2I) populates and
that home-feed ranking, search ranking/retrieval and ads all consume (S46, S47). The graph is the *output* of
content understanding being used by several consumers, not a prerequisite built in advance — which is what this
item's rationale says. No change proposed.

**`creation-tools` (24 / 46, P2) — position stands, and the "raises supply without raising relevance" judgement
is the best-evidenced rationale in the chapter.** Participation is structurally skewed: 90% lurk, 9% contribute
occasionally, 1% heavily (S50), so tools aimed at creation address the small end of the distribution. And what
pet-content users say they want is knowledge, not more captions: 养宠知识/科普 58.2% (owners TGI 136),
宠物食品/用品/服务 48.6% (TGI 123) among N=500 (S43). No change proposed.

**`events` (50 / 58, P2) — position stands, with one qualification.**
"Valuable once relationships exist; premature before match density" is consistent with S54's mediation result
(the anchored tie is what converts contact into a sense of community). The qualification is from 06: the
community-events row is one of the four service categories **nothing public sizes** — no frequency, no
penetration, no benchmark. So this item's value score is the least checkable of the six, in either direction.
No change proposed.

**Q2 — are the dependencies confirmed?**

| `dependsOn` | Status |
|---|---|
| `concierge`: "Merchant availability API; pet profile" | **Confirmed as a real dependency and understated as a difficulty.** No public availability API exists in the target market (S79); where the interface is standardised, it requires a contract with every merchant, sub-second real-time availability and comprehensive inventory (S80, S81); the pet-store SaaS vendors publish no APIs (negative finding). The pet-profile half is internal and needs no evidence. |
| `pet-match`: "Content Intelligence; same-city density" | Content-intelligence half confirmed by construction (05's match prototype consumes the same entities). **Same-city density is not externally verifiable** — no public source measures pet-owner density per district on any platform; it stays the author's. |
| `knowledge-graph`: "Entities from Content Intelligence and Concierge" | Confirmed as the documented pattern (S46/S47). |
| `events`: "Pet Match" | Consistent with S54's mediation finding; not independently verifiable. |

**Q3 — checkable numbers inside `firstMilestone`**

- "Labels on 90% of posts" — precedent above it: ">99% of the Pins can be mapped to at least one taxonomy node"
  (S46). Feasible as stated.
- "Intent → booked in under 60 seconds" — no public comparable, same gap as 06's 48-second target; nobody
  publishes time-to-book (S66 and 06's note).
- "7-day retention" as the match measure — no benchmark published (05: the category discloses no funnel, S52),
  but as a *choice of metric* it is what S54's evidence argues for.

## Data changes

Both proposals were put to the author on 2026-09-16 and **both were accepted**; two `revisions.md` rows record
them as author-decided. No `value` score was challenged by anything found — `concierge`'s 92 is reinforced
(S63, S64) — and the other four items are untouched.

| Field | Before | After |
|---|---|---|
| `opportunities[concierge].complexity` | 66 | **80** — supply integration is contractual and documented (S80, S81) and has no public interface in the target market (S79); it should not score easier than the knowledge graph's 82 |
| `opportunities[concierge].dependsOn` | "Merchant availability API; pet profile" / 「商家可预约时段接口；宠物档案」 | "A contract per merchant, real-time slots, complete inventory; pet profile" / 「每家商家的合同、实时可预约时段、完整库存；宠物档案」 — names what the dependency actually is |
| `opportunities[content-intel].complexity` | 42 | **52** — building the evaluation set and tuning the escalation policy is real work, and 42 made it the second-cheapest item in the chapter |
| `opportunities[content-intel].rationale` | "…mature multimodal models, **clear evaluation**, and every other capability depends on it." | "…mature multimodal models, and every other capability depends on it. The evaluation set is ours to build — the breeds most common in Chinese pet content appear in no public model's class list." (`en`+`zh`) |
| `opportunitiesProvenance` | `HYPOTHESIS` (bare) | `hypothesis` + source (Actions Center policies / 美团接入指南), url, `retrievedAt`, and a note stating which two positions moved, why, and that the other four were checked and left alone |

**Side effect of the 42 → 52 move, flagged to the author:** 52 crosses the x=50 reference line, so
`content-intel` moves from the *Quick wins* quadrant into *Strategic bets*, leaving **Quick wins empty** while
the chart's caption still calls the top-left "the build-first quadrant" (`OpportunityMatrix.tsx`, quadrant
labels 速赢 / 战略押注 / 补充项 / 延后). The author can settle it either way: 48 keeps the quadrant populated;
keeping 52 means the caption should eventually stop promising a build-first quadrant. **Nothing in the component
or the caption was changed** — that is UI copy and a separate decision.

## Still hypothesis

- All six `complexity` / `value` scores — judgement by design; no source can produce a 0–100 position.
- `pet-match`'s same-city density dependency and `events`' entire value case: nothing public measures either.
- The "under 60 seconds" and "7-day retention" milestone figures — product targets, no public comparable.
- Everything `design`: priorities, north star, four principles, roadmap.

## Evidence for / against the chapter's argument

**For — the ordering survives.** The two P0s are the two with the most evidence behind their *value*
(content understanding as the substrate every other capability consumes, S46/S47; local services where repeat
and peer trust dominate, S63/S64), and the two P2s are the two whose rationales the evidence most clearly
supports as *deprioritisations* (creation tools address the 1–9% who create, S50, while demand is for knowledge,
S43). Nothing found argues for promoting a P2 or demoting a P0.

**Against — one rationale clause and two scores, all three now revised.** "Clear evaluation" for content
intelligence was contradicted and is gone from the rationale; `concierge`'s complexity understated a
documented, contractual supply problem and moved 66 → 80; `content-intel` moved 42 → 52. All author-decided,
with two `revisions.md` rows. The four remaining positions were checked against 02–08 and survived unchanged —
which is the outcome worth stating plainly: the chapter's ordering was not the thing research moved, its two
difficulty estimates were.

**Carried forward for 01 Overview** (the last chapter, and the one that states the thesis):
1. The pet anchors the relationship, but the climb from contact to trust is the product's job, not a property
   of dog ownership (05's row, S53–S55).
2. Understanding is cheap *on the easy majority* — the escalation path is load-bearing, not an optimisation
   (07, S72).
3. Local is where the case is strongest on value and weakest on measurability: no marketplace publishes a
   request → booking conversion (S66), so the argument has to rest on repeat and trust, which are published
   (S63, S64).
