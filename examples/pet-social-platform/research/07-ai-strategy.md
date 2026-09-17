# 07 · AI Strategy — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-16

## Questions
See `research/plan.md` → AI Strategy.

## Findings

Method note: **every block in `data/ai.ts` is `design`** — the architecture diagram, the five capabilities, the
agent loop, the pet-care trace and the four principles are the case's own proposal, with nothing to cite and no
number that could be sourced. So this chapter's research could not change a value even in principle; the job was
the one `plan.md` sets out — evidence for or against the argument, the cost question the author raised on
2026-09-15, and the risks the design has to survive. **No data value changed and no page copy changed.**

**Q1 — is each capability running in production somewhere?**

Four of the five are; one is not observable.

- **01 Content Intelligence** — yes, and at a corpus size two orders larger than this product would start with.
  Pinterest's Interest Taxonomy feeds home-feed ranking, search ranking and retrieval, and ads targeting from a
  single classification layer, mapping "more than 99% of the Pins" over a 200B+ Pin corpus (S46, S47, in hand
  from 04). Partial counter-evidence, also from 04: Instagram names semantic content signals for Reels only and
  popularity signals elsewhere.
- **03 Local Service Intelligence** — yes, and specifically the review-understanding half. Meituan's
  merchant-side 智能掌柜·品牌顾问 automates "帮你盯评价、帮你出报表、帮你看选址、帮你懂顾客", with 口碑管家
  "自动把顾客评价按菜品、服务、环境等维度拆开，直接量化顾客反馈" — 50+ chain brands on the brand version and
  roughly 708,000 merchants on the single-store version as of 2026-03-26 (S76, first-hand). On the consumer side,
  Dianping was reported to be internally testing 「点仔」, which answers 找店 / 菜品搭配 / 景点伴游 questions
  generated from the platform's own review corpus (S77, secondary press — an internal test, not a shipped
  product, so it is context only).
- **04 Pet Knowledge Graph** — the pattern (one graph, many consumers) is exactly what Pinterest documents
  (S46/S47). Nothing pet-specific is published.
- **05 AI Agent** — yes, and the case's most distinctive design choice turns out to be a **platform primitive**
  rather than a stylistic preference. Anthropic's Managed Agents documentation states that for custom tools
  "The model never executes anything on its own. It emits a structured request, your code runs the operation, and
  the result flows back into the conversation", and that a tool's `permission_policy` "controls whether the
  tool's calls run without confirmation, require confirmation, or are evaluated individually by the server"
  (S74). That is `aiPrinciples[3]` ("Explain and confirm") and the concierge's hold-then-confirm step, shipped.
- **02 Social Intelligence** — **not observable.** As 05 established, the companies in this category publish no
  funnel at all (S52), so there is nothing to check a production claim against. Recorded as a gap, not a fault.

**Q2 — what content understanding costs to run at scale, and how production systems tier it**
*(the author's question from 2026-09-15; `plan.md` → 07)*

Two things were findable, and one was not.

**Findable 1 — a documented cascade.** Pinterest inserts a *lightweight ranking* stage between candidate
generation and full ranking for exactly the reason the case gives: the full ranker is "a precise, yet complex,
neural network" and that step "is usually quite costly and time-consuming", so Pinterest "can afford to use a
simpler model and trade off some precision for efficiency" earlier in the funnel (S73). The funnel narrows from
billions of Pins in the corpus — Pixie generating "over 75 million Pins per second" at candidate generation — to
thousands of candidates for the expensive model, to a handful displayed. Combined with P2I's statement that
"anything that takes 0.01% more resources per Pin is amplified to something meaningful when multiplied by 200
billion" (S47, already in hand), this is the published version of the case's claim: understand cheaply on
everything, spend the expensive model only where it changes the answer.

**Findable 2 — sourced unit economics for the levers**, from first-party price lists and published measurements:

| Lever | Sourced fact | Source |
|---|---|---|
| Model tier | $1 / $5 per MTok (Haiku 4.5) vs $5 / $25 (Opus 5) vs $10 / $50 (Fable 5.1) — 5–10× across tiers | S70 |
| Model tier, measured | Haiku 4.5 "answered GPQA Diamond questions at about a tenth of Opus 5's cost per question, with 63% accuracy compared with 92% for Opus" — and "fell much further behind on long coding tasks" | S72 |
| Batch vs realtime | "All usage is charged at 50% of the standard API prices"; most batches finish in under an hour, results guaranteed within 24 | S69, S70 |
| Caching | cache reads 0.1× the base input price; 5-minute writes 1.25×, 1-hour writes 2× | S71, S70 |
| Caching, measured | cut agent-loop cost "by a factor of 2.7 to 5.3"; cut a triage agent's bill "by 83%, or 88% with input trimming added"; over a day of real traffic loops read "a median 84% of their input from the cache" | S72 |
| Cascade patterns | the *advisor* pattern (cheap executor escalates hard turns to a stronger model) and the *orchestrator* pattern (frontier model delegates token-heavy work to cheap workers, e.g. "a Claude Fable 5.1 lead over 25 Claude Sonnet 5 workers, cost about half as much") | S72 |
| What to measure | "compare models on cost per completed task" — a Fable 5.1 run at low effort solved 88.6% of tasks at $0.54 per solved task against 77.4% at $0.84 for a cheaper model; and "On a 20-problem WideSearch run, two problems carried 43% of the spend" | S72 |

The two model-tier rows together are the strongest support the chapter's wording has: the cheap tier is not
merely cheaper, it is **materially worse** (63% vs 92% on the same questions), which is why the design has to be
a cascade — cheap classifier on everything, escalation for the ambiguous minority — rather than "use the small
model everywhere". And the levers compose: tier (5–10×) × batch (2×) × cache on repeated input (~10×) is one to
two orders of magnitude between the naive shape (one large multimodal call per post per impression) and the
shape the case describes (publish-time, mostly a profile join or small classifier, escalate only the ambiguous).

**Not findable — a per-post figure for this product.** Converting the above into ¥/post needs tokens per post,
escalation rate and refresh frequency: all three are the product's own unknowns, and inventing any of them would
manufacture the number rather than source it. **No cost figure goes on any page**, which is what the 2026-09-15
`revisions.md` row already promised; the argument on the page stays structural and is now backed in the note.
The `plan.md` question closes as *answered structurally, no figure*. If the author ever wants a number on the
page, it needs a new element with its own `estimate` provenance and a stated derivation — a content addition,
not a research output.

**Q3 — known limitations and risks**

New section, per `plan.md`. None of this weakens the architecture; two of the three are arguments *for* choices
the case already made.

- **Breed and entity misclassification has a published error floor.** From 04: the best comparable is 86.4% on
  Tsinghua Dogs (130 breeds, >65% real-life images) and ~59% on Oxford-IIIT Pet, and Weibo's most common pet
  types (橘猫, 狸花猫, 中华田园犬) appear in **none** of those class lists (S44–S45, in hand). So
  `understandingMetrics[0]`'s 0.87 target sits at the top of what published models reach, on an easier label set
  than this product's. Mitigation is already in the design: the profile join (the owner told us the breed) and
  escalation for ambiguous posts, rather than trusting a classifier on every image.
- **Agent side effects — indirect prompt injection is the specific exposure.** OWASP's LLM01 defines the
  vulnerability as occurring "when user prompts alter the LLM's behavior or output in unintended ways", with
  indirect injection arising when "an LLM accepts input from external sources, such as websites or files", and
  lists among its controls "Require human approval for high-risk actions" and "Implement human-in-the-loop
  controls for privileged operations to prevent unauthorized actions" (S75). This product's agent reads
  user-generated posts, reviews and merchant listings and then *books and pays* — a textbook indirect-injection
  surface, and the control OWASP names is the principle the chapter already states. Recorded as the reason
  "Execution waits for confirmation" is not decoration; the platform primitive that implements it is S74.
- **Location data is legally sensitive in the target market.** PIPL Article 28 lists 行踪轨迹 among sensitive
  personal information — "一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害" —
  and Article 29 requires 单独同意 ("处理敏感个人信息应当取得个人的单独同意") (S78; promulgated 2021-08-20,
  effective 2021-11-01). Three parts of the case ride on location: `capabilities[01]`'s location label, the
  same-city rung of 05's ladder, and 06's whole local layer. The design consequence — separate, explicit consent
  for location, not a blanket terms-of-service checkbox — is a real constraint the case does not currently
  mention anywhere. Flagged for the author; it is a content addition, not a correction.

## Data changes

**None.** Every block in `data/ai.ts` is `design`; there was no sourceable value to change, and no page copy was
edited. The cost wording in `capabilities[0]` and 04's pipeline copy was already fixed on 2026-09-15 (see that
`revisions.md` row); this chapter's research **confirms** that wording rather than revising it.

## Still hypothesis

Nothing in this chapter is `hypothesis` — the whole file is `design`, which is the correct tier for it: an
architecture proposal, five capability definitions, a loop, a fictional trace and four principles are the
product's own design, not claims about the world. The three chapter-level claims that *are* about the world are
now evidenced in the note above (cascade economics, confirmation-gated execution, one-graph-many-consumers) and
one is unobservable (social-graph matching, nobody publishes it).

## Evidence for / against the chapter's argument

**For — "understanding before generation" and the cascade.** Pinterest runs the case's architecture at 200B+
items and documents both the cheap-first funnel and per-item cost as the binding constraint (S73, S47, S46).
The published price and measurement data (S69–S72) show the levers the wording now claims are real and
multiplicative, and the measured accuracy gap between tiers (63% vs 92%, S72) is why the cascade has to
escalate rather than settle for the cheap tier everywhere.

**For — "explain and confirm".** OWASP names human-in-the-loop approval for privileged operations as a control
for the exact attack class this product's agent is exposed to (S75), and Anthropic's agent platform ships it as
a per-tool `permission_policy` with the model never executing anything itself (S74). The principle is now
evidence-backed rather than a matter of taste.

**Against — nothing found.** No source contradicts a value or a conclusion in this chapter, so **no
`revisions.md` row was added**; per `CLAUDE.md`, that is because none was found rather than because none was
looked for. Two qualifications worth carrying forward instead:

1. **The cheap tier is worse, not just cheaper.** The case's phrase "cheaply enough to do it on all of them" is
   supported, but the honest reading of S72 is that a tenth of the cost also buys materially lower accuracy —
   so the escalation path is load-bearing, not an optimisation. If 01 Overview is ever rewritten, the claim
   should keep its second half (escalate the ambiguous), never just the first.
2. **Social Intelligence has no observable comparable.** 05 found the category publishes no funnel (S52), and
   07 found no production description either. It remains the least evidenced of the five capabilities — which
   is consistent with its P1 priority, and worth saying out loud if an interviewer asks which capability is
   least de-risked.

**PIPL 单独同意 — raised 2026-09-16, decided and written 2026-09-17 (author).** The constraint was absent from
the whole case: location is load-bearing in `capabilities[01]`'s location label, in 05's same-city rung and in
the whole of 06, and nothing anywhere said that 行踪轨迹 is sensitive personal information in the target market.

Three shapes were put to the author — a line in this chapter's design principles, a sentence each in 05 and 06,
or a dedicated compliance section — and the **first** was chosen, for two reasons recorded here:

1. The other two risks in this section (the breed error floor, indirect prompt injection) render **nowhere**;
   they live in this note. A compliance section would make PIPL the only risk on the site, and would push the
   case towards reading as a compliance memo.
2. PIPL is not the same kind of thing as those two. They are engineering risks the design already absorbs
   (escalation; `aiPrinciples[3]` "every action with a side effect asks first", which is the control OWASP
   names for LLM01). PIPL is a **hard legal constraint that changes the product's consent flow** — a design
   input, and something a PM presenting this case would be expected to know.

**Written**: a fifth principle, phrased as the product's own commitment so the block stays honestly `design` —
"Location is asked for on its own. Separate, explicit consent for location — declining it costs only the local
features, not the feed and not the graph." / 「位置单独征求同意。位置权限单独问一次；拒绝它只会失去本地功能，
不影响信息流，也不影响图谱。」 The statute it is designed around is cited in the section's copy via `<Sourced>`
and a new `locationConsentProvenance` (`verified`, S78) — the convention set on `/market` for a sourced claim
inside page prose. No component changed; `SectionHeader.description` already took a `ReactNode`.

**Deliberately kept off the page, and why.** Two related points are interpretive and no source for them was
read, so putting them on the site would spend the case's credibility on an uncited judgement:

- Where the line falls between a 行踪轨迹 (a trail that can reconstruct movement) and a single city-level fix.
  This matters a great deal here — "same city" and "continuous location tracking" are not the same legal
  object — but it is a contested reading, not something the statute text settles.
- Whether handing a user's location to a merchant at booking time triggers a **second** 单独同意 under
  Article 23 (providing personal information to another handler). Plausible, and it would land on 06's
  concierge rather than on this chapter, but again: no source read.

Both stay in this note. S78 covers the statute text only, and `locationConsentProvenance`'s note says so.
