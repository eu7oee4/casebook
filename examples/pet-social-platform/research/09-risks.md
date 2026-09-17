# 09 · Risks & Unknowns 风险与未解 — chapter note

Status: ☑ **built 2026-09-17** (`data/risks.ts`, `app/[locale]/risks/page.tsx`, chapter inserted at 09 and
Insights renumbered 10). All five decisions were taken by the author on 2026-09-17; the build record and the
three places the build departed from this spec are at "Built — what shipped" below. ·
Last updated: 2026-09-17

**Decided 2026-09-17, all five**: chapter name 「风险与未解」 / "Risks & Unknowns"; R4 kept here *and* in 07;
06's metric label changed; a closing "what to falsify first" section added (R7); section 5's standfirst is
Option A. Nothing is open.

This file began as a **proposal for a new chapter** and the proposal is kept below as written — R1–R7 are the
drafts the page was built from, so the wording on the page can be diffed against what was approved.

The author's question of 2026-09-17 — *"用户的需求没办法得到一个确切的统计值吧？"* — changed what this chapter
is for. See R6, which is now its centre.

## Built — what shipped, 2026-09-17

Everything in the checklist below was done in one session. `npm run check` passes and every new string was
verified in both prerendered locales. Committed on `main`; **not yet reviewed in a browser by the author.**

**Three departures from this spec, all small, all deliberate:**

1. **The `/local` metrics section description was edited too** (step 1 said label + note). Its copy read "the
   comparison that matters is intent → booking" directly above the relabelled metric, which is the same
   contradiction the relabel exists to remove. Changed in both languages; it is in the `revisions.md` row.
2. **Section 6's "Because" cells carry their own marks.** A single `design` badge over the table would have
   covered cells quoting 63% / 92%, the Actions Center requirements and b=0.69 — numbers that are sourced, not
   invented. The section badge now covers the claims, the tests and the consequences (all the proposal's own)
   and each "Because" cell carries the mark of the evidence it aims at, per the row-level pattern from 06.
   This adds `anchoredTieProvenance` (S54) to `data/risks.ts` — the first time 05's anchored-tie result is
   cited in a data file rather than in prose.
3. **Section 3 uses the section badge, not an inline `<Sourced>`.** The whole section is the statute, so an
   inline mark inside the description would have pointed at the same provenance object as the badge beside it.
   The interpretive questions that stay off the page are on the page as a short paragraph, and the badge's note
   says the badge covers the statute text only.

**Section 5's type-B row is the one Illustrative mark in the chapter.** There is no source to cite for a rate
whose denominator cannot be enumerated, and `hypothesis` is what this case's own rules say to use when a number
cannot be found. Its note carries the three partial remedies and labels the content-narration channel as an
argument rather than a measurement.

### The checklist, as built

**Tone rule, and it applies to two places differently** (author, 2026-09-17 — the first version of this note
over-applied it and had to be corrected). It is no longer only written here: it was extracted to
**`docs/writing-rules.md`** at the workspace level on 2026-09-17, and the case `CLAUDE.md` → "Copy tone" points
at it. Read that file rather than relying on this summary:

- **On the page**: *「平一点，调研报告，别太自夸」*. Objectively marking something as important is fine —
  "this is the constraint the rest of the chapter depends on" is a statement about the subject. What is not
  fine is the case admiring its own work: no "the strongest thing here", no "unusually honest", no telling the
  reader how to feel about the finding.
- **In this note**: say which rows matter and why, plainly and at length. This file exists to hand judgement
  forward to whoever builds the chapter. Stripping the judgement out of it to sound modest helps nobody —
  it just means the next person rebuilds the reasoning from scratch.

1. **06 first, it is independent** — `data/services.ts` `serviceMetrics[0].label` 「意图 → 预订」 →
   「表达出的意图 → 预订」 / "Intent → booking" → "Expressed intent → booking", extend the provenance note with
   why the denominator can only be the expressed half (R6), value 23% unchanged. One `revisions.md` row,
   logged **author**. Check the metric grid still lays out; if it wraps badly, fix the grid, not the label.
2. **New chapter** — `data/risks.ts` (blocks per R1–R7, every row with its own `provenance`) and
   `app/[locale]/risks/page.tsx`. Six sections per the table below. Existing components only:
   `SectionHeader`, `DataTable` with row-level `provenance` (the 06 pattern), `InsightCard`, `<Sourced>`.
3. **Renumber** — `lib/nav.ts`: insert the 09 row (exact object at "Decisions", item 5) and move Insights to
   `index: "10"`. Then the 5 other code touch points and 11 doc cross-references listed at "Build cost".
4. **Rename** `research/09-insights.md` → `research/10-insights.md`. **Do not renumber the existing
   `revisions.md` rows** — they are dated records; add one line under the table header noting the 2026-09-17
   renumbering.
5. `npm run check`, then verify every new string in both prerendered locales, as with every other chapter.
6. Update `research/plan.md` (new chapter row + 10 Insights renamed), `STATE.md`, `PRODUCT.md` and
   `PROGRESS.md` (they say "nine chapters"), and the chapter table in the case `CLAUDE.md`.

Sources are all in hand — S44, S45, S52, S66, S72, S74, S75, S78, S79, S80, S81. **No new research is needed
and no new source should be added.** If a row cannot be written from a source already in `research/sources.md`,
it does not go in the chapter.

## What this chapter is for

Every risk below is **already researched and sourced**; none of it is new work. What is new is that it would
render. Before this chapter, the case's defensive thinking was invisible: 07's risk section, 04's error floor
and the supply finding from Insights all lived in `research/`, and a reader of the site never met them.

**What it must not become.** A generic risk checklist — "data privacy, model accuracy, competition" — is worth
less than nothing on a case that spent nine chapters citing sources. Two rules keep it honest:

1. **Every row carries a source or is explicitly marked as judgement**, same bar as every other chapter.
2. **Nothing is moved out of 04 / 06 / 07 / 10.** Those chapters keep their own mitigations; this chapter
   references them. A risk chapter assembled by hollowing out the others would weaken both.

## Why 09, and not 10

The author's ordering — Risks 09, Insights 10 — is the right one, and worth stating as the reason:
**the conclusion should land having survived the risks, not despite them.** A risk chapter after the
conclusion reads as a disclaimer; before it, it is the last test the recommendation passes.

## Structure, as proposed and as built

Six sections, all from existing components — no new UI, and `DataTable` + row-level `provenance` is the
pattern already sanctioned for 06's category table. (The "Component" column is the proposal; see the three
departures recorded at the top.)

| # | Section | Block | Component |
|---|---|---|---|
| 1 | 能力边界 · What the system cannot do well | 2 rows | `DataTable`, row-level provenance |
| 2 | 执行安全 · What happens when the agent is wrong | 1 row + the existing control | `InsightCard` |
| 3 | 法律与合规 · Where the law binds the design | 1 row | `InsightCard`, `<Sourced>` |
| 4 | 供给依赖 · The part that is not an AI problem | 1 row | `InsightCard` |
| 5 | **测不到的东西 · What could not be measured** | 3 rows, typed A/B/C | `DataTable`, row-level provenance |
| 6 | 先证伪什么 · What to falsify first | 3 rows | `DataTable`, `design` |

**Where the weight sits, for whoever builds this.** Sections 1–4 are restatements: every one of those
findings already exists in `research/`, and the work is selection and wording, not discovery. They are
necessary — a risk chapter missing the legal row or the supply row reads as incomplete — but if time is short
they are the parts to write quickly.

**Section 5 is the one to spend the time on.** It is the only section with no counterpart anywhere else in the
case, and it is the only one that says something about the *research* rather than about the product: three
numbers went unchecked for three structurally different reasons, and the reasons determine what to do next.
It also came out of the author's own objection (R6), which means it is load-bearing for them, not just
tidy. If a row in section 5 is wrong, the chapter loses its reason to exist; if a row in section 2 is
clumsily worded, the chapter survives.

**Section 6 is the exit.** Added at the author's request 2026-09-17. Without it the chapter ends on a list of
problems and the reader carries that tone into chapter 10, which is the recommendation. With it, the unknowns
become scheduled tests and the hand-off to 10's priorities is explicit. Get the "if it comes back negative"
column right — that column is what makes the tests real rather than decorative.

---

## R1 · Breed and entity recognition has a published ceiling
Section 1 · `verified` · S44, S45 (via 04)

> **EN** — "Published fine-grained breed accuracy tops out at 86.4% (Tsinghua Dogs, 130 breeds, over 65% real-life images) and about 59% (Oxford-IIIT Pet, 37 breeds). The pet types most common in Chinese pet content — 橘猫, 狸花猫, 中华田园犬 — are classes in **neither** list. The 0.87 target sits at the top of what published models reach, on an easier label set than this product's."
> **ZH** — 「公开的细粒度品种识别最好成绩是 86.4%（Tsinghua Dogs，130 类，七成以上真实生活照）和约 59%（Oxford-IIIT Pet，37 类）。而中文宠物内容里最常见的那几种——橘猫、狸花猫、中华田园犬——在两份类目表里都不是一个类。0.87 这个目标已经压在公开模型的上限上，而且是在一个比本产品简单的标签集上。」

**Mitigation already in the design** (reference, do not restate as new): the profile join — the owner told us
the breed — and escalation for ambiguous posts, rather than trusting a classifier on every image
(`capabilities[0].mechanism`, reworded 2026-09-15).

## R2 · The escalation policy has no evaluation set
Section 1 · `estimate` · S44, S45, S72

> **EN** — "Cheap-tier understanding is not merely cheaper, it is materially worse: a tenth of the cost per question at 63% accuracy against 92%. So the rule deciding what escalates is load-bearing — and tuning it needs a labelled set of Chinese pet content that does not exist yet. This is the evaluation gap that moved content intelligence from 42 to 52 in chapter 10."
> **ZH** — 「便宜档位的理解不只是更便宜，它确实更差：每个问题约十分之一的成本，准确率 63% 对 92%。所以决定"什么升级"的那条规则是承重的——而要调它，需要一个中文宠物内容的标注集，这个集子还不存在。这正是把内容理解的复杂度从 42 推到 52 的那个评估缺口。」

## R3 · The agent reads user content, then pays — indirect prompt injection
Section 2 · `verified` · S75, with S74 for the control

> **EN** — "OWASP's LLM01 defines indirect prompt injection as arising when a model 'accepts input from external sources, such as websites or files'. This product's agent reads posts, reviews and merchant listings, and then books and pays — a textbook exposure. The control OWASP names is 'Require human approval for high-risk actions', which is the fourth AI design principle the case already commits to, and the platform primitive that implements it is a per-tool permission policy where 'the model never executes anything on its own'."
> **ZH** — 「OWASP LLM01 把间接提示注入定义为：模型「接受来自外部来源的输入，例如网站或文件」时产生的漏洞。本产品的 agent 读帖子、读评价、读商家信息，然后下单并付款——教科书式的暴露面。OWASP 点名的控制措施是「高风险操作需要人工批准」，也就是案例第四条 AI 设计原则已经承诺的那件事；实现它的平台原语是逐工具的权限策略，「模型不会自己执行任何操作」。」

**Why this row matters** (note-voice): it is the only risk in the chapter where the case's existing design
already matches the control the published standard names. That is worth getting right, because it is the row
an interviewer is most likely to push on — "you read OWASP after the fact and claimed credit" is the obvious
challenge, and the defence is that `aiPrinciples[3]` predates the research and is in git history.

**Page-voice**: state the exposure, state the control OWASP names, state that the fourth principle already
commits to it. Stop there. Do not present it as solved, and do not comment on the fact that they match —
the reader can see it.

## R4 · Location is legally sensitive, and location is load-bearing
Section 3 · `verified` · S78 · **already on the site** as `aiPrinciples[4]` (2026-09-17)

> **EN** — "PIPL Article 28 lists 行踪轨迹 among sensitive personal information; Article 29 requires 单独同意 — separate consent, not a blanket terms-of-service checkbox. Location runs through all three layers of this case: the content understanding label, the same-city rung of the relationship ladder, and the whole local layer."
> **ZH** — 「《个人信息保护法》第 28 条把行踪轨迹列为敏感个人信息，第 29 条要求单独同意——单独问一次，不是用户协议里的一个总勾选。而位置贯穿这个案例的三层：内容理解的地点标签、关系阶梯的"同城"一级、以及整个本地服务层。」

**Decided 2026-09-17 — keep both.** R4 states the constraint; `aiPrinciples[4]` is the product's answer to it.
They are different claims and the overlap is the point: a reader who meets the constraint here can see, one
chapter later, that the design already accounts for it.

**Deliberately still off the page** (from `research/07-ai-strategy.md`, unchanged): where the line falls
between a 行踪轨迹 and a single city-level fix, and whether handing location to a merchant triggers a second
单独同意 under Article 23. Both are interpretive, no source read, and they stay in the notes.

## R5 · The hardest dependency is contractual, not technical
Section 4 · `verified` · S79, S80, S81 (via 10 Insights)

> **EN** — "Where a bookable-slot interface is a published standard, the requirements are contractual: a direct contractual relationship with every merchant in the feed, availability answered in under a second, comprehensive inventory — and meeting all of it still does not guarantee eligibility. In the target market no such interface is public at all: 美团's open platform documents OAuth and user resources only, behind an enterprise application and review, and none of the named Chinese pet-store SaaS vendors publishes an API. All of that sits before any of this case's AI work begins."
> **ZH** — 「在可预订时段接口已有公开标准的地方，要求是契约性的：与接入的每一个商家都有直接合同关系、可用性查询一秒内响应、库存完整——而且全部满足也不保证有资格接入。在目标市场，这样的接口根本没有公开：美团开放平台的公开文档只覆盖 OAuth 与用户资源，接入要企业申请并审核，几家中文宠物门店 SaaS 无一公开 API。这一切都发生在本案的 AI 工作开始**之前**。」

---

## R6 · What could not be measured — and why it is three different problems
Section 5 · the chapter's centre

This section began as "no marketplace publishes a request → booking rate (S66)". The author's question of
2026-09-17 showed that framing was too generous to the case: it implies the number exists and is merely
withheld. For the metric this case actually states, it does not exist.

**The distinction.** `serviceMetrics[0]` is labelled **「意图 → 预订」/ "Intent → booking"**, value 23%.

- A **request** is a platform event — a submitted need, an inquiry, a tap on book. Angi's "approximately 23
  million projects" is this. It is observable, and Angi and Rover can certainly compute a rate from it; they
  just do not publish one (S66).
- An **intent** is a state of the owner. The platform sees only the intents that surfaced as some platform
  action. "狗该洗澡了，下楼那家就做了" never touches the product. **The denominator cannot be enumerated from
  inside the platform**, so the rate as defined has no denominator — this is censoring, not a publication gap.

**Can browsing behaviour recover it?** Half of it.

- **Precision is measurable**: of the intents the model flagged, how many converted. Standard, and it is what
  `understandingMetrics[3]` (posts → service intent signals, 12%) is reaching for.
- **Recall is not**: of all real needs, how many were caught. That requires ground truth on needs that never
  appeared on the platform — exactly what is missing. No amount of log data fixes this; it is not a modelling
  problem.
- **Three partial remedies**, all producing an `estimate` at best: ask users what they did off-platform
  (how white papers get penetration — and 06 already records that Chinese white papers publish penetration,
  not frequency); borrow an external split (S60 gives where owners go — 宠物店 above 50% for both 洗美 and
  寄养); or run geo/hold-out experiments and measure incremental bookings, which sidesteps the denominator.
- **One channel this product has and a pure marketplace does not**: users narrate offline consumption in
  content. A post saying 「今天带狗去洗澡了」 is an observation of a transaction the platform did not broker.
  That gives this product a better shot at estimating off-platform leakage than Angi or Rover has.
  **This is an argument, not a measurement** — labelled as such, the same way the 2026-09-15 row labelled
  "scrolled past ≠ findable when needed".

**Proposed table — three types, not one bucket:**

| Type | What it means | The case's instance | Source |
|---|---|---|---|
| **A · Not published** | Someone measures it; nobody discloses it. Obtainable in principle — by working there. | request → booking on a services marketplace | S66 |
| **B · Not observable from inside** | The denominator includes events that never reach the platform. No log fixes it; only surveys, external splits or experiments estimate it. | **意图 → 预订** | — (the finding *is* the absence) |
| **C · No comparable exists** | Nobody in an adjacent category publishes anything to bracket it against. | the social matching funnel — Match Group and Bumble disclose payers and ARPPU only | S52 |

**Section standfirst — the author rejected the first draft; pick one.**

The original closing clause ("Only the first would be solved by working at a competitor" / 「只有第一个，进对手
公司上班就能解决。」) was flagged as off-key, and it is: a flippant landing on an otherwise hard section, in a
case an interviewer reads. It is also inaccurate — working at a competitor yields *their* rate, not this
product's. The three-way distinction is kept in both replacements; only the landing changes.

**✅ Decided 2026-09-17 — Option A**, on the author's instruction: flatter, this is a research report, not a
pitch. (Option B landed on why the taxonomy earns its place, which reads as the case praising its own method.)

> **EN** — "Three of this case's numbers could not be checked, for three different reasons. The distinction matters: one is a disclosure problem, one is a measurement problem, and one is an absence of any comparable. Only the first disappears with better access to data; the other two need surveys, experiments and time."
> **ZH** — 「这个案例里有三个数字没能核实，原因各不相同。区别很重要：一个是披露问题，一个是测量问题，一个是根本没有可比对象。只有第一类会随着数据获取的改善而消失，另外两类不会——它们要靠调研、实验和时间。」

## R7 · Closing — the three things to falsify first
Section 6 (new, decided 2026-09-17) · `design` · hands over to 10 Insights

The chapter should not end on the unknowns. It ends by turning them into tests, which is also the hand-off to
the next chapter's priorities: each row names a capability, the risk that threatens it, and the smallest
experiment that would kill it.

> **EN standfirst** (flattened 2026-09-17 under the same instruction — the first draft opened "None of this is a reason not to build", which argues with the reader) — "These risks do not change what to build; they change what to find out first. Each test below is small enough to run before the capability it threatens, and each can come back negative."
> **ZH** — 「这些风险不改变要做什么，改变的是先弄清楚什么。下面每个测试都小到可以在对应能力开工之前跑完，而且都可能跑出否定的结果。」

| Falsify | Because | The smallest test | If it comes back negative |
|---|---|---|---|
| **内容理解便宜得起** (P0) | R2: the cheap tier is 63% against 92%, and the escalation rule has no evaluation set for Chinese pet content | Hand-label a few hundred real Chinese pet posts; measure the cheap tier plus an escalation rule against them, at cost | Content intelligence is not the cheap substrate the case calls it — the whole "understand every post" architecture has to be re-costed |
| **供给接得上** (P0) | R5: the dependency is contractual — a contract per merchant, real-time slots, complete inventory — and no public interface exists in the target market | Sign a handful of merchants in **one** district and get real availability out of them, by whatever means | The concierge is not a P0 for this team at this stage, whatever its user value — and 10's complexity 80 was still too low |
| **锚定的关系留得住** (P1) | 05: the anchored tie is the only relationship type that mediates a sense of community (b=0.69, p<.001), while dog ownership alone does not raise friendship likelihood (b=0.22, p=.36) | Compare 7-day relationship retention for activity-anchored matches against unanchored ones | Pet matching is producing contact volume, which the research says does not become trust — and `matchPrinciples` needs rewriting, not tuning |

**Deliberately not on this list: 意图 → 预订.** It is a type-B unknown, so it cannot be falsified by an
experiment — there is no denominator to test against. The first move there is not a test but an **estimate**:
survey owners on what they did off-platform last month, and publish the result as an `estimate` with its
sample stated. Saying that out loud is the point of the section above it.

## Consequences for chapter 06 — decided, and done

R6 is not only a finding for this chapter; it says the existing metric is mislabelled.

**Proposed**: `serviceMetrics[0].label` 「意图 → 预订」→「**表达出的意图 → 预订**」/ "Intent → booking" →
"**Expressed intent → booking**", with the note extended to say why the denominator can only be the expressed
half. The value (23%) does not change — what changes is what it claims to be a rate *of*.

**Decided 2026-09-17 — change the label.** One `revisions.md` row, logged **author** (the objection is theirs
and it changes what a number claims to be a rate of). A hover card that contradicts the label above it is the
exact failure mode this provenance system exists to prevent. Check the metric grid still lays out at the
longer label — if 「表达出的意图 → 预订」 wraps badly, the fix is the grid, not a shorter and less true label.

## Decisions — all closed 2026-09-17

1. ~~Section 5's standfirst~~ — **decided: Option A** (the flat one). R7's standfirst was flattened under the
   same rule — its first draft opened "None of this is a reason not to build", which argues with the reader.
   **Scope of the rule, corrected 2026-09-17**: it governs *page copy*, not this note. On the page, naming
   something as important is fine; praising the case for having noticed it is not. In the note, say which
   rows carry the chapter and why — see "Where the weight sits" above.
2. ~~R4 vs `aiPrinciples[4]`~~ — **decided: keep both.**
3. ~~06's metric label~~ — **decided: change it.**
4. ~~Chapter closing~~ — **decided: add it.** Drafted at R7, three rows, handing over to 10's priorities.
5. **Chapter name — decided: 「风险与未解」 / "Risks & Unknowns".** Proposed `NAV` row:
   `{ index: "09", label: { en: "Risks & Unknowns", zh: "风险与未解" }, href: "/risks",
   short: { en: "Limits, constraints, and what could not be measured", zh: "能力边界、法律约束，以及测不到的东西" } }`

## Build cost — estimated, then actual

The estimate below held: 6 code touch points and the doc set listed, no component change, no new source.
Small, and mostly bookkeeping. Numbering is centralised in `lib/nav.ts`, so:

- **Code — 6 touch points**: one new `NAV` row + Insights `index` 09 → 10; `app/[locale]/insights/page.tsx`
  `index="09"` → `"10"`; `app/[locale]/page.tsx` "prioritised in chapter 09" → 10; `overview.readingPath`'s
  "08–09" entry restructured; new `app/[locale]/risks/page.tsx`; new `data/risks.ts`.
- **Docs and notes — 11 cross-references** across `CLAUDE.md`, `PRODUCT.md`, `STATE.md`, `research/plan.md`,
  `research/01-overview.md`, `research/revisions.md`.
- **File rename**: `research/09-insights.md` → `research/10-insights.md`; this file stays `09-risks.md`.
- **`revisions.md` existing rows are NOT renumbered.** They are dated records of what was decided when;
  rewriting them would falsify the log. A line under the table header noting the 2026-09-17 renumbering is
  the correct fix.
- Every string bilingual, `npm run check`, both locales verified in the prerendered output, as usual.
