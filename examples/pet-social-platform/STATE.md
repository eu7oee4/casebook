# STATE — pet-social-platform

Last updated: 2026-09-17 (**01 Overview done — all nine chapters researched**; PIPL 单独同意 written into 07
as a fifth design principle; and a **tenth chapter — 09 风险与未解 / Risks & Unknowns — approved and fully
specced but NOT built**: see `research/09-risks.md` → "Resume here")

## Where it stands
- Site complete: nine chapters, EN / 中文, design system finished, `npm run check` passes.
- Research: **in scope for all nine chapters** (open decision closed 2026-09-06, see `research/plan.md` top).
- **NEXT SESSION STARTS HERE — 09 风险与未解 is approved and specced, nothing is built.** The author asked
  whether the two risks that render nowhere (the breed ceiling, indirect prompt injection) could become their
  own chapter, with Insights renumbered 09 → 10. Answer: yes, and **risks before the conclusion is the right
  order** — the recommendation then lands having survived them. The full spec, with EN + ZH drafts for every
  row and an ordered build checklist, is `research/09-risks.md` → **"Resume here"**. Nothing outside that file
  has been touched: no route, no `data/risks.ts`, no nav row, no renumbering.
  - **Six sections**: 能力边界 (breed ceiling S44/S45; the escalation rule has no Chinese evaluation set, S72) ·
    执行安全 (indirect prompt injection S75, whose named control is `aiPrinciples[3]`, S74) · 法律与合规
    (PIPL S78 — **kept here as well as in 07**, author-decided: the constraint and the product's answer to it
    are different claims) · 供给依赖 (contractual, not technical, S79–S81) · **测不到的东西** · 先证伪什么.
  - **The author's question reshaped the chapter.** They objected that 需求 → 预订 has no obtainable
    denominator — the platform only ever sees needs that surfaced on it. That is right, and sharper than what
    06 recorded (which framed it as "nobody publishes this"). The metric is labelled 「意图 → 预订」, and an
    *intent* is a state of the owner, not a platform event: 「狗该洗澡了，下楼那家就做了」 never touches the
    product. Browsing data recovers **precision** (of the intents flagged, how many converted) but never
    **recall** — that needs ground truth on needs that never appeared. Only surveys, external splits (S60) or
    geo/hold-out experiments estimate it. One channel this product has that a pure marketplace does not: users
    narrate offline consumption in content, so a post about a service the platform did not broker is an
    observation of the censored half — **an argument, not a measurement**, and labelled as such.
  - So section 5 types the unknowns instead of bucketing them: **A** not published (request → booking, S66) ·
    **B** not observable from inside (意图 → 预订) · **C** no comparable exists (the matching funnel, S52).
  - **Consequence for 06, decided**: `serviceMetrics[0].label` 「意图 → 预订」 → 「表达出的意图 → 预订」, note
    extended, value 23% unchanged, one `revisions.md` row logged **author**. This is step 1 of the checklist
    and is independent of the new chapter.
  - **Tone rule — now a workspace rule, not a note in this chapter.** Extracted 2026-09-17 to
    `docs/writing-rules.md` (public, case-agnostic: the two voices, what a note must record including the
    three kinds of unmeasurable, argument-vs-measurement labelling, bilingual); the case `CLAUDE.md` →
    "Copy tone" now points at it, and the root `CLAUDE.md` `docs/` row was corrected — it still said the
    folder was empty. In summary (author, after correcting a first over-application):
    *「平一点，调研报告，别太自夸」* governs **page copy** — objectively naming something as important is fine,
    the case praising its own work is not. It does **not** govern `research/09-risks.md`, which exists to hand
    judgement forward: that file says which rows carry the chapter and why, at length. The section-5 standfirst
    is Option A (the flat one); R7's standfirst was flattened too, for arguing with the reader rather than for
    immodesty.
  - **No new research, no new sources.** Everything is already in `research/sources.md` (S44, S45, S52, S66,
    S72, S74, S75, S78–S81). A row that cannot be written from a source already in hand does not go in.
  - Build cost is small and counted: **6 code touch points** (numbering is centralised in `lib/nav.ts`) and
    **11 doc cross-references**; `research/09-insights.md` → `10-insights.md`; **existing `revisions.md` rows
    are not renumbered** — they are dated records, so a line under the table header notes the renumbering.
- **PIPL 单独同意 written into 07 (2026-09-17, author-decided)** — the one piece of **new content** the
  research produced, open since 09-16 as flag 6. PIPL Art. 28 lists 行踪轨迹 among sensitive personal
  information and Art. 29 requires 单独同意 — separate consent, not a blanket ToS checkbox (S78, statute text,
  first-hand). Location is load-bearing in `capabilities[01]`, 05's same-city rung and the whole of 06, and
  the case said nothing about it anywhere.
  Three shapes were put to the author; the **smallest** was chosen, on the reasoning that (a) the chapter's
  other two risks — the breed error floor and indirect prompt injection — render **nowhere**, so a dedicated
  compliance section would have made PIPL the only risk on the site and tipped the case towards reading as a
  compliance memo, and (b) PIPL is not the same kind of thing as those two: they are engineering risks the
  design already absorbs (`aiPrinciples[3]` "every action with a side effect asks first" is exactly the
  control OWASP names for LLM01), while PIPL is a hard legal constraint that **changes the consent flow**.
  **Written**: `aiPrinciples` four → five, phrased as the product's own commitment so the block stays honestly
  `design` — 「位置单独征求同意。位置权限单独问一次；拒绝它只会失去本地功能，不影响信息流，也不影响图谱。」 The
  statute is cited in the principles section's copy through `<Sourced>` and a new `locationConsentProvenance`
  (`verified`, S78) — **07's first non-`design` export** — following the `/market` convention for a sourced
  claim inside prose. No component changed: `SectionHeader.description` already took a `ReactNode`.
  **Two points deliberately kept off the page** because no source for them was read: where the line falls
  between a 行踪轨迹 and a single city-level fix (which matters — "same city" and continuous tracking are not
  the same legal object), and whether handing location to a merchant at booking triggers a **second**
  单独同意 under Art. 23. Both are in `research/07-ai-strategy.md`, and the provenance note says S78 covers
  statute text only. One `revisions.md` row, logged **author** (15 rows now). `npm run check` passes; both
  locales verified in the prerendered output. **Reviewed in a browser by the author 2026-09-17 — approved.**
  Not committed.
- **01 Overview done (2026-09-16 → 09-17) — the ninth and last chapter.** 01 has almost no external facts of
  its own: four of its seven blocks are `design`, two are page copy, and only `insights` asserts anything about
  the world. So the pass was a block-by-block reconciliation against 02–09 plus one targeted search, and it
  found **seven mismatches** — four already predicted by `revisions.md` rows ending "if chapter 01 is ever
  rewritten…". **All nine edits are applied.**
  - **Insights 01 and 02 were rewritten by the author** (two `revisions.md` rows, both **author**). Insight 01's
    「比任何兴趣标签都更有力」 is gone — nothing public makes that comparison, and 05's evidence splits underneath
    it: dogs reliably produce contact (S55, S53) but not cohesion (S53) and not friendship (b=0.22, p=.36, S54),
    with the anchored tie doing the real work (b=0.69, p<.001, S54). It now reads 「一把可靠的社交钥匙……但它本身
    带来的信任有限：如何从接触上升到关系，是产品要思考的事。」 Insight 02's two universals are gone and 06's
    **negative finding** is now on the page: 「一句需求到底有多大比例会变成一次预订，中间那一步没有任何平台公开过。」
    Three small fixes were made to the author's ZH drafts (a duplicated 的, a dangling appositive, 「寄养喂养」→
    「寄养」 since 喂养 is not one of 06's categories, and 搭筑→搭建) and one point was **raised and not changed**:
    「信任有限」 concedes a small positive effect where S53/S54 are **null** results — the author's wording kept,
    the objection recorded in the note and the revision row.
  - **Consistency repairs**: `opportunities[0]` still carried the **pre-2026-09-15** "understand every post"
    framing that the author's cost challenge replaced in `ai.ts` and `content.ts` — now aligned; and "Reading
    the chain" put the failure at "relationships that never leave the screen", which 03 had already revised —
    it now names BarkHappy, which did leave the screen and closed in Jan 2025 with no transaction layer
    (S21, S40–S42). Both are follow-through of existing rows, so no new rows. ¶2 gained 07's escalation half
    (cheap only on the easy majority; the cheap tier is materially worse, S72).
  - **The positioning line decided 2026-09-06 has landed**: new `overview.positioning` field rendered under the
    hero summary in both locales, and `PRODUCT.md`'s "Evidence on Hand" rewritten from "None yet … `sources.md`
    is empty" to the real state (nine chapters, 81 sources, what is sourced / Illustrative by design / `design`,
    and the four negative findings). `PROGRESS.md`'s "Chapters researched: none yet" ticked.
  - **The last unmarked data block on the site is closed**: `overviewScopeProvenance` was exported and rendered
    nowhere (the 2026-09-15 pass wired 28 `SectionHeader`s and the Research scope block does not use one). A
    `ProvenanceMark` now sits beside the label; EN prerenders three `Design` badges on 01 where it had two.
  - **One search, two negative findings**: nothing compares an identity key against an interest tag (the
    homophily literature treats status, value and shared-activity foci as parallel mechanisms and ranks none),
    and the obvious citation for the identity half — Belk, *Society & Animals* 4(2), 1996 — could not be read
    first-hand (the open PDF is a scan with no text layer; the publisher 403s), so **no source was added** and
    `sources.md` is unchanged at 81. The identity half of insight 01 is on record as the only load-bearing
    claim in the case with no citation at all; a library copy of Belk 1996 or Trigg 2016 would close it.
  - `overviewInsightsProvenance` stays `hypothesis` — reconciling against 02–09 does not make the insights
    *derived from* sources — and carries a note with the for/against per insight, so the hover card shows the
    evidence status instead of a bare 示意.
  - `npm run check` passes; every new string verified in both prerendered locales, including the scope badge's
    markup. **Reviewed in a browser by the author 2026-09-17 — approved, no changes asked for.** Standing check
    on the two chrome disclaimers re-run: both still hold, neither changed. Not committed.
- **Two chrome fixes (2026-09-16, author-requested)**: the author pressed
  `[` / `]` and nothing happened. Cause: `KeyboardNav.tsx` matched `e.key` only, and a Chinese IME turns the
  bracket keys into 「 and 」, so the handler never fired for the author — a feature the sidebar advertises on
  every page was dead for anyone typing Chinese. It now also matches `e.code` (`BracketLeft` / `BracketRight`),
  and skips `isComposing` and `contenteditable` targets. While looking at that sidebar block, two **blanket
  disclaimers turned out to contradict eight researched chapters** and were corrected in both languages:
  the sidebar's 「所示数据均为示意。」 → 「每个数据都标注了出处。」 ("Every figure shows its provenance.") and —
  the worse one, since it renders on every page — the footer's 「所有数字均为示意性研究假设，非市场数据。」 →
  「市场、竞品、机制类数字均有出处；产品目标值与判断类字段标为示意。」 ("Market, competitor and mechanism figures
  are sourced; product targets and judgement fields are marked Illustrative."), which matches the positioning
  line decided on 2026-09-06. Recorded in `CLAUDE.md` (the component fix as a sanctioned exception, plus a
  standing check to re-read those two strings whenever a chapter's provenance changes). `npm run check` passes;
  both locales curl-checked, old strings gone. **Verified in a browser by the author 2026-09-16: `[` / `]` now
  navigate.** Committed — see the log.
- **09 Insights done (2026-09-16)**: the first chapter that mostly consumed the other eight, and **the first
  where research moved a judgement position**. `priorities` / `northStar` / `principles` / `roadmap` are `design`;
  the only block asserting anything is `opportunities` (six items × complexity/value/rationale/dependsOn/
  firstMilestone). All six were reconciled item by item against 02–08; **four survived unchanged** and their
  rationales are now evidenced (creation tools "raise supply without raising relevance" ← 90-9-1 participation
  skew S50 plus demand for knowledge not captions S43; pet-match "needs density" ← the anchored tie is the only
  mediating relationship type, b=0.69 p<.001, S54, and the walk is the social act, 77.9% walked daily, S57; the
  graph "should grow out of the first two capabilities" ← exactly how Pinterest's taxonomy is populated and
  consumed, S46/S47). **Two moved, both proposed to the author and decided by them**:
  - `concierge` **66 → 80** (value 92 unchanged, still P0, same quadrant). The chapter's real finding sits here:
    its rationale ("depends on supply integration, not research breakthroughs") is right and understated.
    Where a bookable-slot interface is a published standard it is **contractual** — "a direct contractual
    relationship with all the merchants included in their integration feed" (S80), availability answered "in
    less than 1 second", "comprehensive inventory", and even then "meeting the requirements does not guarantee
    a partner will be eligible" (S81). In the target market nothing public exposes a merchant's slots at all:
    美团's open platform documents OAuth and user resources only, with access behind an enterprise email
    application (营业执照号 + 身份证号) and review (S79), and none of the named Chinese pet-store SaaS vendors
    (宠老板/宠想来/爱宠/宠知道) publishes an API. `dependsOn` reworded `en`+`zh` to name the real dependency.
  - `content-intel` **42 → 52** and its rationale's "clear evaluation" clause replaced (`en`+`zh`): published
    breed accuracy tops out at 86.4% / ~59% and the commonest Chinese pet types are in neither class list
    (S44–S45), service intent has no comparable, and 07's tier gap (63% vs 92%, S72) means the escalation
    policy needs an eval set that does not exist yet. **Side effect flagged to the author**: 52 crosses the
    x=50 reference line, so Quick wins (速赢) is now an **empty quadrant** while `OpportunityMatrix`'s caption
    still calls top-left "the build-first quadrant" — 48 would keep it populated; the component and caption
    were **not** touched (UI copy, separate decision).
  `opportunitiesProvenance` gained source/url/date and a note saying which two moved and that the other four
  were checked. 3 new sources (S79–S81). Two `revisions.md` rows, both logged **author**. `npm run check`
  passes. **Reviewed in a browser by the author 2026-09-16: no label collisions** between `concierge` (80) and
  `knowledge-graph` (82) after the label-side flip, and no other change asked for. Committed — see the log.
- **07 AI Strategy done (2026-09-16)**: **no data change, and none was possible** — every block in `data/ai.ts` is
  `design` (architecture, five capabilities, agent loop, fictional trace, four principles), so the whole chapter
  was evidence-for/against plus the author's cost question. **The cost question (raised 2026-09-15) is now
  closed as「答清了结构，不上数字」**: the documented cascade is Pinterest's — lightweight ranking sits before full
  ranking because that step "is usually quite costly and time-consuming", and the funnel runs billions → thousands
  → a handful, with Pixie alone generating "over 75 million Pins per second" (S73) — on top of P2I's "0.01% more
  resources per Pin … multiplied by 200 billion" (S47). The levers are now sourced first-party and they compose:
  model tier $1/$5 (Haiku 4.5) vs $5/$25 (Opus 5) vs $10/$50 per MTok (S70), measured at "about a tenth of Opus 5's
  cost per question, with 63% accuracy compared with 92%" (S72); batch "charged at 50% of the standard API prices"
  (S69); cache reads 0.1× input, measured 2.7–5.3× on agent loops and 83% on a triage agent (S71, S72). **No ¥/post
  figure went on any page** — that needs tokens per post, escalation rate and refresh frequency, all the product's
  own unknowns. The sharpest finding for the chapter's wording: the cheap tier is not just cheaper but **materially
  worse** (63% vs 92%), so the escalation path in `capabilities[0]` is load-bearing, not an optimisation — if 01 is
  ever rewritten, keep the second half of that sentence. Capability evidence: 01 Pinterest taxonomy (S46/S47, in
  hand), 03 Meituan 智能掌柜 splitting reviews by 菜品/服务/环境 at ~708k merchants (S76) and Dianping's 点仔
  internal test (S77), 04 one-graph-many-consumers (S46), **05 confirmation-gated execution turns out to be a
  platform primitive** — "The model never executes anything on its own" and a per-tool `permission_policy` that
  requires confirmation (S74). **02 Social Intelligence is the one unevidenced capability**: nobody publishes a
  funnel (S52, from 05) or a production description — consistent with its P1 priority, and the honest answer if an
  interviewer asks which capability is least de-risked. New risks section in the chapter note: the breed error floor
  from 04 (86.4% / ~59%, with Weibo's top pet types in no class list), indirect prompt injection — OWASP LLM01's
  named control is exactly the human approval the chapter already requires (S75), and the product's agent reads
  user-generated content then books and pays, so the exposure is real — and **PIPL Art. 28/29: 行踪轨迹 is sensitive
  personal information requiring 单独同意 (S78), a constraint the case mentions nowhere** (see flag 6). 10 new
  sources (S69–S78). **Committed (e1ff221, on `main`).** No `revisions.md` row: no counter-evidence was found, and the note says so explicitly.
  `npm run check` passes; both locales curl-checked (no render change expected — nothing on the page moved).
- **06 Local done (2026-09-16)**: **no value changed**, and no page copy changed either — every edit is provenance
  metadata. The five-tier model again decided most of the chapter: `serviceJourney`, the whole concierge
  (`conciergeQuery` / `conciergeSteps` / the three fictional merchants / `booking`) and the design principles are
  `design`, leaving `serviceCategories` and `serviceMetrics`. **Two values were changed after the author reviewed
  the findings** — see flag 4 below; the rest of the chapter's numbers are untouched. **Frequency is not published anywhere for Chinese
  owners** — the white papers publish *penetration* (Petdata S01; KPMG S60 publishes where owners go: 宠物店 for
  both 洗美 and 寄养 above 50%, 医院洗美 down to 29.2%), the same gap that forced `marketKpis[3]` to become a
  penetration metric in 02. Four of the eight rows are now bracketed from professional guidance and household
  surveys instead: grooming against PetSmart's own "about every four-to-six weeks" (S58) and the AKC's
  breed-dependent "weekly to every four to six weeks" (S59) — **so the row's 8-week upper bound is supported by
  nothing found**; vet against AAHA's "semiannual-to-annual exams" (S56, 1–2 check-ups a year) and the Chinese
  self-reported distribution (S05: 每半年 26.5%, 每年 24.9%, 每 2–3 月 24.2%, 每月 8.4%), so "2–4× / year" holds
  only if incident visits are counted; walking against 77.9% of 276 Cheshire dogs walked at least daily, 22.1%
  less than daily (S57); boarding against 58到家's +46% month-on-month January demand, dog boarding 6× cat
  (S61). Training, photography, pet-friendly places and community events stay pure judgement, as does the whole
  `trustNeed` ordering — no survey ranks the categories. Of the four targets: **repeat** is bracketed by Rover's
  FY2021 10-K ("approximately 81% of our bookings were repeat bookings"; 86% / 84% in 2020 / 2019; 3.7 → 7.3
  bookings per repeat customer in year one, S64) with both denominators stated and deliberately **not** divided
  — Rover counts bookings from any returning customer, the target counts customers rebooking the same merchant
  inside 60 days; **reviews → content** by Airbnb's control group ("68% of trips result in a guest review", S65)
  against a looser object, so 31% reads conservative; **intent → booking** is a recorded **negative finding** —
  Angi discloses "approximately 23 million projects" and Rover discloses bookings, neither a request → booking
  rate (S66), and every "booking rate" league table in search traces to marketing blogs (not used); **time to
  book** has no comparable at all. Best supporting finding: 32.8% of new vet clients first heard of their
  practice from a fellow pet owner, ahead of every other channel, and chose on personnel over location (S63,
  N=129, NL) — paired with 97% five-star on Rover (S64) and 74% on Airbnb (S65), that is why a stranger's rating
  cannot carry the ranking and a followed owner's can. One `revisions.md` row: the "intent shows up in content
  **before** search" ordering is **kept with a qualification** — nothing measures the ordering, Meituan/Dianping
  notes grew 224% vs searches 80% (S68) but Xiaohongshu discloses 70% of MAU actively searching (S67); the
  channel claim survives, the sequence word does not. 13 new sources (S56–S68). **All of the above is committed (f84841b, on `main`).** Section-level marking kept on
  the category table (per-row badges would need a `provenance` field and a `DataTable` change — author approved
  keeping the section badge, 2026-09-16). `npm run check` passes; both locales curl-checked, all eight new
  provenance notes present in the SSR payload. **Not eyeballed in a browser** (hover-card content only).
- **05 Social done (2026-09-16)**: **no value changed.** The five-tier model paid off immediately — `identityDimensions`,
  `relationshipLadder`, the AI Pet Match prototype and `matchPrinciples` are all `design`, so only two blocks
  needed evidence. `ladderFunnel` stays `hypothesis`: the two nearest comparables **disagree on the shape** and
  neither shares its denominator — Nielsen's 90-9-1 says participation decays steeply but measures contribution,
  while self-reported frequency among Chinese pet-content users is nearly flat across three rungs (点赞/转发 67.7%,
  评论 65.7%, 加入粉丝群 57.6%; N=500, S43 p.17) against the chart's 100 → 38 → 24. Both now sit in the hover card.
  `matchMetrics[4]` (offline conversion 12%) gets one bracket from peer-reviewed Hinge data — 23.6% of
  conversations exchanged contact details, "for every 4.23 people that a user chats with… one" (S51) — with the
  caveat that the denominator is conversations, not matches, and contact exchange is not a meeting. The other four
  targets stay bare `hypothesis`: **Match Group and Bumble disclose no funnel at all** (payers / ARPPU only, S52),
  and every "Hinge match rate" figure in search traces to SEO content farms with no attribution — none used.
  Q3 is the strong part: three peer-reviewed studies say dogs reliably create **contact** (2.4× more likely to meet
  neighbours, S55; higher activities-with-neighbours for walkers, S53) but **not cohesion** (no difference, S53)
  and **not friendship** (b=0.22, p=.36, S54) — what carries through to a sense of community is the *anchored*
  tie, the only mediating relationship type (b=0.69, p<.001, S54), at more than twice the direct effect. That
  supports `matchPrinciples` specifically and denies the ladder's implicit smooth climb to trust; one `revisions.md`
  row records it (kept — the ladder is `design`). 6 new sources (S50–S55). `npm run check` passes; both locales
  SSR-checked. **Not eyeballed in a browser.**
- **Provenance legibility (2026-09-15, author-approved UI change)**: the author's rule — *every data element must
  show its source explicitly, and a reader must tell at a glance what is real and what is invented; the specific
  source may hide in the hover card*. Audit found three failures: `Metric.tsx` **explicitly hid the badge for
  `hypothesis`** (the one state that most needed showing), chapters **01 / 07 / 09 had zero provenance fields**,
  and absence of a mark was ambiguous between "unresearched" and "not a factual claim at all".
  - **Fifth tier `design`** added to `Confidence` (author chose this over folding it into `hypothesis`): the
    product's own design — a step in its own flow, a capability definition, the deliberately fictional worked
    example, the roadmap. Nothing to cite, so it is off the sourced/invented axis rather than "编的".
  - **Shape carries the distinction, colour only reinforces it** (survives greyscale and colour-blindness):
    solid border + filled round dot = sourced · **dashed border + hollow dot = invented** · solid + **square**
    dot = design. The badge now shows only the state word (实证 / 估算 / 反证 / 示意 / 设计); source name, link,
    date and note moved into the hover card — which also fixes the long-source-name truncation noted earlier.
  - **Coverage**: `SectionHeader` gained a `provenance` prop; 28 section headers wired across all nine pages,
    plus two mixed-section sub-blocks marked directly (the relationship ladder beside the sourced funnel chart,
    and the competitor map whose x/y positions stay judgement). Rule applied: a section whose items are already
    marked individually gets **no** section badge — one badge cannot honestly summarise a mixed section.
  - New block-level provenance exports across `overview / ai / insights / market / competitors / content /
    social / services / benchmark`. `CLAUDE.md` provenance rules rewritten for five tiers + a "nothing renders
    unmarked" lead-in (rule numbering preserved so existing "rule 4" references still resolve).
  - `npm run check` passes; all nine ZH pages verified by curl to carry badges. **Reviewed in a browser by the
    author 2026-09-16 — approved, no changes asked for.** Both known gaps closed the same day: the competitor
    card's badge moved out of the expanded body so all 14 products show it collapsed (13 verified / 1 estimate),
    and each product line in benchmark's 「三个领域，六个参考」 now carries its row's own mark.
    **All of the above is committed** (ff02839 / 1ad031c / b9eaf8f / b10de22, on `main`).
- **AI cost / tiering wording (2026-09-15, author-raised and author-decided)**: the author asked whether having AI
  understand every post — and rank with AI too — is overuse, and what the compute would cost. A search of `data/`
  and `app/` confirmed the gap: **every "cost / 成本" string in the case was user-side** (posting effort, acquisition,
  switching); the understanding layer's own running cost appeared in no chapter. The architecture survives the
  challenge — Pinterest runs the same shape over a 200B+ Pin corpus as a *daily batch* job with cheap high-recall
  candidate generation, and names per-item cost as the binding constraint (S47, already in hand from 04) — but the
  case was written so it read as one large multimodal call per post. Wording changed in four places (`en`+`zh`),
  architecture untouched: `capabilities[0].oneLiner` and `.mechanism` in `data/ai.ts` (understanding runs once at
  publish time, not per impression; mostly a profile join or a small classifier, not a large model; only ambiguous
  posts escalate), `pipeline[1].detail` in `data/content.ts`, and the pipeline section copy in
  `app/[locale]/content/page.tsx` (publish-time understanding now carries its cost half, not just the correctness
  one). The five capabilities are author-decided, so the `revisions.md` row is logged **author**, not agent.
  **No cost figure was put on any page** — that needs sourced unit economics and is now an open question on the 07
  table in `research/plan.md`. `npm run check` passes; `/en|zh/content` and `/en|zh/ai-strategy` all 200 with the new
  copy in the SSR payload, except `pipeline[1].detail`, which only renders for the *active* stage of the client-side
  pipeline widget — confirmed shipped in the client chunk instead. Committed (1ad031c). The author reviewed
  these pages in a browser on 2026-09-16 for the provenance badges; the stage-02 detail text itself was not
  separately confirmed (it only shows when that stage is selected).
- **04 Content done (2026-09-14)**: **no value changed** — the chapter's numbers survive research, but three of
  them now say what they are measured against. The one public content-type mix that exists (微博大数据 via the
  iResearch × Weibo content white paper, 2021 H1: 宠物日记及创意内容 43% / 动物段子集锦 22% / 宠物热点及资讯 18% /
  动物公益/救助 12% / 养宠知识/科普 3% / 宠物服务 2%) measures broadcast creator content on a general platform;
  three of its six genres have no counterpart among the case's seven types, so it cannot be mapped without
  inventing a split and `contentTypes[*].share` stays `hypothesis`. What it does give is the demand side
  (N=500 iClick survey: 养宠知识/科普 58.2%, owners TGI 136; 宠物食品/用品/服务 48.6%, TGI 123), which justifies the chart's
  weighting through distribution shape and TGI — **not** by subtracting the two, which have different
  denominators (posts vs people; retracted 2026-09-15, author). `contentTypesNote` reworded (`en`+`zh`) to "a design target … from demand, not
  from any observed supply"; two `revisions.md` rows record it (the second, author-decided, retracts the subtraction). Three `understandingMetrics` now carry a published
  comparable in a still-`hypothesis` provenance, so the hover card shows the benchmark: breed 0.87 vs Tsinghua Dogs
  86.4% (130 breeds, >65% real-life images) and Oxford-IIIT Pet ~59% (2012), with the caveat that Weibo's top breeds
  (橘猫, 狸花猫, 中华田园犬) are in none of those class lists; pet-entity 91% vs Pinterest's ">99% of Pins map to at
  least one taxonomy node"; location 64% vs a 2.31% geotag rate over 41.3bn tweets. `understandingMetrics[3]`
  (service intent 12%) stays a bare hypothesis — nothing comparable is public. Q3 evidence: Pinterest publishes the
  exact architecture this chapter draws (one Interest Taxonomy feeding home feed ranking, search ranking &
  retrieval and ads targeting); Instagram names semantic content signals for Reels only, popularity elsewhere —
  recorded as partial counter-evidence. 7 new sources (S43–S49). `npm run check` passes; both locales SSR-checked
  by curl and the provenance notes confirmed in the payload; committed (ff02839). The author reviewed this page
  in a browser on 2026-09-16 for the badges; the hover-card contents were not separately confirmed.
- **08 Benchmark done (2026-09-10)**: all six rows carry `provenance` reused from 03's sources (5 `verified`,
  小红书 `estimate`). Two mechanism wordings corrected because nothing public documents them: Soul's "guided first
  conversation" (also fixed in `data/competitors.ts`) and Meituan's "merchant SLAs" → platform-level refund
  guarantees. "SLA" stays in the adaptation column / `transferMap` as the case's own design term (noted). No example
  replaced; reasoning in `research/08-benchmark.md`. No `revisions.md` row — no insight or adaptation changed.
  `npm run check` passes; SSR-checked by curl; committed earlier in be3f01d (the "Uncommitted" marker here was
  stale). Benchmark badges reviewed in a browser 2026-09-16.
- **03 Competitors done (2026-09-10)**: BarkHappy kept on the map (author OK, 2026-09-10); closure reason researched — none published, timeline and company facts in `research/03-competitors.md` (S40–S42). the 11 cards are now 14 named products, every one with a `provenance`
  (13 `verified`, 1 `estimate` — Xiaohongshu's search-first mechanism rests on secondary press). Direct tier:
  Petzbe, Yummypets, BarkHappy (US, app discontinued Jan 2025 — kept on the map as evidence), 宠胖胖 (CN). Industry:
  PetMD (Chewy), Rover, Chewy, 波奇. Benchmark six unchanged in identity, mechanisms verified from listings / help
  pages / 美团规则中心; Meituan's "merchant SLAs" replaced by documented refund guarantees. The generic "breed &
  interest communities" card was removed (no named standalone product; recorded under Still hypothesis). Three
  `revisions.md` rows, all at insight level: "nobody built the bridge to local" → BarkHappy did and closed without a
  transaction layer; "zero trust" → trust rebuilt per booking from badges/reviews; "empty quadrant" → "no surviving
  product". Map positions stay judgement; reasoning in `research/03-competitors.md`. 21 new sources (S19–S39).
  App-store listings were read via the iTunes lookup API (first-hand); rover.com / help.instagram.com / Google Play
  via a text proxy. `npm run check` passes; both locales SSR-checked by curl; **not eyeballed in a browser**.
- **02 Market done (2026-09-06)**: all five KPIs now `verified` (white-paper excerpt PDF, CBNData, iResearch
  — the iResearch 62-page image PDF was read page-by-page); `spendTrend` rebuilt as an `estimate` (share ×
  market size, 2022=100, derivation in provenance note); `valueMatrix`/`needLayers`/`journey` stay judgement
  by design. 18 sources in `research/sources.md`; findings in `research/02-market.md`. First real
  `revisions.md` row: "services grow fastest" was contradicted by white-paper shares → revised to
  "goods → care (medical); services grow in penetration, not spend share"; market page copy updated to match.
- **Provenance has five tiers** (`hypothesis` / `design` / `estimate` / `verified` / `contradicted`) and is
  **legible at a glance** since 2026-09-15 (author-approved UI change, see below).
- **Provenance hover cards (2026-09-06, author-approved UI change)**: hovering any data element for ~0.45s
  (or focus / tap) opens a card with tier, source, link, retrieval date and the researcher's note (note stays
  in its original language — author decision). New `components/ui/ProvenanceHover.tsx` (portal + fixed
  positioning so overflow containers can't clip). Wired: `ProvenanceMark` badges site-wide (badge is no longer
  a direct link — the link moved into the card), `Metric` values (dotted-underline cue), and inline prose
  numbers via new `<Sourced>` (first use: the 19%→28% medical-share claim on `/market`, provenance exported
  from `data/market.ts`). Convention: any sourced number in page copy gets wrapped in `<Sourced>` from now on.
  Benchmark/competitor rows show nothing yet only because their optional `provenance` fields are still unset —
  cards appear automatically once those chapters are researched. Verified via SSR markup + `npm run check`;
  **not yet eyeballed in a real browser** (no Chrome extension in this session).
- Moved into `casebook/examples/` on 2026-09-05 (public reference case) from the original `~/dossier` repo (this copy carries the uncommitted 2026-09-05 doc changes). The prototype was retired for real on 2026-09-06: its stale dev server had been squatting on port 3000 serving old data; contents verified redundant, `node_modules`/`.next` deleted, repo renamed to `~/dossier.DISCARDED-20260906` (1.5MB, git history intact).

## Blocked on the author
- Nothing blocking. Flags open for review:
  0. (from 01, 2026-09-17 — **reviewed in a browser by the author 2026-09-17, no changes asked for**) The
     positioning line under the hero summary (`t-annotation` + `border-t border-line-2 pt-3` separator, so it
     does not blur into the EN-only `summaryZh` line above it) and the scope `ProvenanceMark` beside the
     "Research scope" label (`flex items-center gap-3`).
  0b. (from 01, 2026-09-17) **Objection left standing at the author's choice**: insight 01 says the trust pet
     identity brings is 「有限」, but S53 and S54 are null results, so that wording asserts a small positive
     effect nobody measured. Recorded in `research/01-overview.md` → Data changes and in the revision row.
  1. (from 02) Copy edits were made in `app/[locale]/market/page.tsx` (section title, description, implication, aside
     label, removed the blanket section-01 Illustrative badge) — content corrections, not UI; listed in
     `research/02-market.md` → Data changes.
  2. (from 03, 2026-09-10) Author-approved UI edits, not eyeballed in a browser: the competition map now takes the
     full row (height 520) and the product cards sit below it, two per row from `md` up, no internal scrolling
     (`CompetitorExplorer.tsx`); dead `SHORT` / `LABEL_DY` entries for retired ids removed from `CompetitorMap.tsx`
     (labels use `c.name`; only the Meituan nudge remains). Check label collisions on the wider map.
  3. (from 04, 2026-09-14) `contentTypesNote` copy changed in both languages — a content correction, not UI; the
     chart caption now says the mix is a design target rather than a hypothesis about an early feed. Reasoning in
     `research/04-content.md` → Data changes and the 2026-09-14 `revisions.md` row.
  4. (from 06, 2026-09-16 — **decided, done**) The two unsupported upper bounds were narrowed at the author's
     instruction: grooming 「每 4–8 周」→「每 4–6 周」 (PetSmart FAQ / AKC, S58–S59) and 宠物医疗
     「每年 2–4 次」→「每年 1–2 次 + 按需」 (AAHA check-up cadence, S56; incident visits now sit outside the
     range). `en`+`zh` together, one `revisions.md` row, hover card carries both cited ranges. The author asked
     for the section badge to read 估算; keeping one badge for a mixed section would have over-claimed for the
     six unsourced rows, so on the author's instruction the marks went **row-level** instead (see flag 5).
     **Not eyeballed in a browser after this edit.**
  5. (from 06, 2026-09-16 — **author-approved UI change, reviewed in a browser 2026-09-16**) `serviceCategories` rows
     gained an optional `provenance`; the 美容 and 宠物医疗 rows carry their own **估算 / Estimate** badge,
     rendered inline after the frequency value (`whitespace-nowrap`, so the marked rows keep the same height as the
     rest — the author asked for this after seeing the badge stacked under the value), and the frequency column
     went 20% → 22% to fit it. `DataTable` was
     **not** touched — its `cell` render prop was already enough, so the blast radius is `data/services.ts` and
     `app/[locale]/local/page.tsx` only. The section badge stays 示意 and its hover card now says it covers only
     the unmarked cells (four frequencies + all eight trust needs). Recorded as a sanctioned exception in the
     case `CLAUDE.md` → "What not to change", together with the pattern to reuse: mark a row only where it
     departs from the section floor. Reviewed in a browser by the author 2026-09-16: hover card renders correctly
     and is not clipped by the table's `overflow-x-auto` wrapper; the only change asked for was moving the badge
     onto the value's line, now done.
  6. (from 07, 2026-09-16 — **decided, written and reviewed 2026-09-17**) The PIPL 单独同意 constraint is on
     the page as `aiPrinciples[4]`, with S78 cited in the section copy via `<Sourced>`. See the entry above and
     `research/07-ai-strategy.md`. **Reviewed in a browser by the author 2026-09-17**: the five-card grid with
     one empty slot on the last row is fine, no changes asked for.
  7. (from 09, 2026-09-16) **The Quick wins quadrant is now empty.** `content-intel` moved 42 → 52 at the
     author's instruction, which crosses `OpportunityMatrix`'s x=50 reference line, so 速赢 / Quick wins holds
     no opportunity while the chart's caption still calls top-left "the build-first quadrant" and the quadrant
     label still renders. Two ways out, both the author's call: set 48 (one number, keeps the quadrant
     populated) or keep 52 and reword the caption plus decide whether an empty labelled quadrant should still
     be drawn — the latter is UI copy, so nothing was touched. Reasoning in `research/09-insights.md` → Data
     changes.
  8. (from 02, 2026-09-10) KPI grid switched to 2 columns (rows 2 / 2 / 1) at the author's request after badges
     overlapped at zoom; `npm run check` passes, not eyeballed in a browser (no Chrome extension in this session).
  (The `SpendTrend.tsx` hard-coded Y domain was fixed 2026-09-06 with author approval: domain/ticks are now
  computed from the data. Provenance-badge overflow with long real source names was also fixed the same day —
  badges now truncate to their column width and bottom-align across a metric row.)

## Next steps (in order)
0. **Build 09 风险与未解.** Approved and specced 2026-09-17, nothing built. Follow
   `research/09-risks.md` → "Resume here" in order: 06's metric label first (independent), then the chapter,
   then the renumbering. No decisions are outstanding.
1. **The research pass itself is complete — all nine existing chapters are ☑ in `research/plan.md`.** What is
   left on the site is the two older UI flags (2 and 8, both from before this research pass) and **one open
   author question**: the empty Quick wins quadrant (flag 7). Everything from the 09-16 / 09-17 work has been
   reviewed in a browser by the author.
2. **01 Overview — the original brief for this chapter, kept for reference.** Per `research/plan.md` it is updated
   only after 02–09 and only to reflect verified evidence; the thesis and the three insights are the author's,
   so propose edits in `research/01-overview.md` rather than changing them. Three things from 05/07/09 belong in
   that proposal, all already recorded:
   - The pet anchors the relationship, but the climb from contact to trust is the product's job, not a property
     of dog ownership (05's revisions row, S53–S55).
   - Understanding is cheap **on the easy majority** — the escalation path is load-bearing, not an optimisation
     (07, S72's 63% vs 92%).
   - Local is strongest on value and weakest on measurability: no marketplace publishes a request → booking
     conversion (S66), so the argument rests on repeat and peer trust, which are published (S63, S64).
   Also still open from the research pass: the **positioning line** decided on 2026-09-06 lands in 01's opening
   copy and `PRODUCT.md` when 01 is updated, and the **PIPL 单独同意 constraint** (flag 6) is waiting on the
   author.
2. After 02 (or 02+03) is walked through end to end, casebook v1 extraction (`packages/`, template, skills)
   can start in parallel with the remaining chapters — workspace-level decision, 2026-09-06.
3. Review mode (in-page editing + annotations → AI applies) is planned at the casebook level, not here; wait for `packages/` to exist.

## Decisions made
- 2026-09-06 — **Open decision closed: research case, all nine chapters in scope.** Targets and
  judgement-type fields stay Illustrative by design. Positioning line recorded in `research/plan.md`;
  it lands in 01 Overview / `PRODUCT.md` when chapter 01 is updated (last).
- 2026-09-05 — Conclusions are revisable with a paper trail (`research/revisions.md`), not frozen.
- 2026-09-05 — Review mode will be built into the site (route A), not via published artifact pages. Not started.
