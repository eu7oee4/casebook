# 03 · Competitors — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-10 (BarkHappy closure follow-up added)

## Questions
See `research/plan.md` → Competitors.

## Findings

Method note: app-store listings were read through the iTunes lookup API (`itunes.apple.com/lookup?id=…`), which
returns the current description, developer, version and release date verbatim — treated as first-hand. Company
sites and help centres were read directly where they allowed it; rover.com, help.instagram.com and play.google.com
block plain fetches and were read through a text proxy of the same URL (noted per source). No user counts, revenue
or retention figures were added to any card; rating counts seen in listings are recorded here only as context.

**Direct tier — which real products are pet-social? (feeds `competitors[tier=direct]`)**
- Global, active: **Petzbe** (US, PetsGlobal) — pet-only feed, "No status posts… Just pets", explicitly non-algorithmic
  and chronological, feeling tags, stickers, Sniffers (followers), discussion boards, in-app charity (S19). v1.3.11,
  2026-04; ~1.5k US ratings — small. **Yummypets** (FR, Octopepper) — pet profiles for all species, photo feed,
  VOICE charity clicks ("over 30 tons of kibble"), themed photo contests, article library (S20). v47, 2026-07; 71 US ratings.
- Global, closed: **BarkHappy** (US) — nearby dogs, daily matches, user-hosted play dates, dog-friendly place pages with pet
  policies, lost & found. Site notice: "AS OF JANUARY 2025 OUR MOBILE APP IS NO LONGER AVAILABLE" (S21). This is the
  closest existing analogue to the case's own concept (social × local) and it did not survive — see Evidence below.
- China: the standalone pet-social category has largely emptied. 猫卡 (2M users claimed, 2018) went dark mid-2019; the
  same report lists 闻闻窝, 遛遛, 狗卡, 宠咖秀 as stopped (S22, 2019). A 2020 teardown of ~30 pet apps found half no longer
  opening (S39, blog). 铲屎官的日常 (community + reminders + shop) was last updated 2020-10-20 (S24). What remains is
  community *modules* inside commerce / service apps: **宠胖胖** ("一站式智慧养宠综合服务平台": expert guides, shop, "一键查询你
  附近的门店", S23, updated 2026-09) and 波奇 (industry tier). 有宠 (com.chong.youchong) returned 404 on 应用宝; not used.
  Pet identity in China therefore lives mostly as pet accounts / topics inside 小红书 and 抖音 (benchmark tier, and S04/S07 in 02).
- The old "type B — breed & interest communities" archetype (stage-based cohorts) has **no named standalone product**:
  it lives inside general platforms (Douban groups, Reddit, WeChat/XHS group chats), none of which publishes a
  pet-specific mechanism page. Entry removed rather than left generic; Petzbe's discussion boards are the nearest
  named feature. Recorded under Still hypothesis.

**Industry tier (feeds `competitors[tier=industry]`)**
- Content / knowledge: **PetMD (Chewy)** — Symptom Checker: "answer a series of questions related to your pet's
  symptoms" → possible causes, when to call the vet, printable report; "over 50 of the most common symptoms";
  "written and peer-reviewed by our team of veterinarians"; routes to Chewy's Connect with a Vet and CarePlus (S26,
  DVM-authored, 2023-09-22). No CN equivalent verified: 阿闻 (新瑞鹏) is a mini-program with no fetchable product page.
- Service booking: **Rover** — Star Sitter criteria: ≥5 unique and ≥2 repeat clients in 6 months, 4.9+ rating, 95% of
  requests answered within 24h, ≤2% late cancellations; badge on profile and in search after 7 consecutive days (S27).
  Landing page: "verified reviews… check each sitter's repeat client stats", blue / gold background-check badges,
  meet in person first, photo updates (S28). App Store listing: Rover Guarantee "up to $25,000 in vet care for eligible
  claims", GPS walk report cards (S28). CN: **小狗在家** (厦门尾巴信息科技, family boarding, 2014) — official site
  unreachable, App Store CN lookup for id 996843358 returned no result on 2026-09-10; a search snippet says the
  platform "migrated to 句苗岛". Not verifiable → not on the page; the CN booking mechanism is covered by Meituan's
  pet-store online booking pilot (S11, 02 Market).
- Commerce: **Chewy** — Autoship recurring deliveries "with no fees or commitments", multiple pet profiles, pharmacy
  delivery, Connect with a Vet 24/7 with consult reports, symptom tracking, medicine reminders (S29). **波奇宠物** (CN,
  category Shopping) — 波奇社区: 专业问答 (vet Q&A), 万人测评, topics, 有奖活动; 波奇社交: 0元试用 → 真实体验分享; 500+
  brands, 5 own warehouses (S25). Community is explicitly a shop adjunct in the developer's own copy.

**Benchmark tier — mechanism descriptions verified (feeds `competitors[tier=benchmark]`; reusable by 08)**
- 小红书: listing positions it as "生活兴趣社区", "遇见同好", "一键种草，轻松下单拔草", "线下活动" (S30). The search-first
  claim rests on secondary press: ~70% of monthly actives search, daily searches near 600M in 2024Q4, 1/3 open the
  app to search first (S31, 新浪科技 reprint, 2024-12) → card marked **estimate**, the only non-verified card.
- Instagram: Close Friends — one private list; applies to "a post, note, reel, or story"; members see a label and a
  green ring; no notification on add/remove; "No one can request to be added" (S32).
- Soul: "30秒的灵魂鉴定 … 基于性格、三观的测试", 捏脸 avatars, 语音匹配, 群聊派对, 3D星球 for nearby discovery (S33).
  Ranking logic is not published and is not claimed.
- 即刻: "30W+兴趣圈子" (developer claim), 限时日记 (48h), "同好面基 — 线下玩更嗨" (S34).
- 大众点评: 2025 必吃榜 rules — five criteria led by "评价真实可信"; "不采纳人为提名，坚持公平公正不收费"; merchants
  penalised for review manipulation are excluded; third-party notarised (S36). Listing: reviews + check-in photos,
  团购, booking, life services (S35).
- 美团: "过期自动退 — 美团券有效期过后7个工作日内…自动退款", "未消费随时退款", refund in 1–7 working days (S38);
  listing: 在线预订餐厅桌位, 外卖, 跑腿, "7天内未消费无条件退款" (S37). The old "merchant SLAs" wording was replaced
  by what is actually documented: platform-level guarantee terms.

**Map positions (`x`, `y`) — judgement, reasoning per product**
- Content(0) → Service(100): Petzbe 10, Yummypets 16, Instagram 18 (content only); PetMD 30, 小红书 30, 即刻 35, Soul 40
  (content / matching); 宠胖胖 60 and BarkHappy 55 (local layer, no transaction); 波奇 76, 大众点评 80, Chewy 82, Rover 88,
  美团 95 (transaction-first). Utility(0) → Social(100): Chewy 12, 美团 20, PetMD 24, Rover 26, 波奇 32, 大众点评 40
  (individual utility); 宠胖胖 44, 小红书 48, Yummypets 54, Instagram 58, Petzbe 60 (feed-level social); 即刻 70,
  BarkHappy 76, Soul 84 (relationship-forming). Rover / Chewy / 波奇 were moved a few points apart from Meituan so
  labels do not overlap; the ordering, not the exact number, is the claim.
- Does anyone occupy high-service × high-social? Only BarkHappy came close (55 / 76) and it is closed; 宠胖胖 is mid-map.
  The quadrant is empty of surviving products.

## Data changes

All in `data/competitors.ts`, `en` and `zh` together. Type unchanged; `RETRIEVED = "2026-09-10"`.

| Field | Old | New | Confidence |
|---|---|---|---|
| `competitors[pet-social-a]` | generic "Pet social community (type A)" | removed → `petzbe` (12,62 → 10,60) | verified · S19 |
| `competitors[pet-social-b]` | generic "Breed & interest communities" | removed; archetype has no named product (see Still hypothesis) | — |
| new `yummypets` | — | Yummypets, direct (16,54) | verified · S20 |
| new `barkhappy` | — | BarkHappy, direct, discontinued 2025-01 (55,76) | verified · S21 |
| new `chongpangpang` | — | 宠胖胖, direct / community + services (60,44) | verified · S23 |
| `competitors[pet-content]` | generic "Pet content & knowledge platforms" | → `petmd` (28,30 → 30,24); mechanism rewritten to the documented symptom-checker flow | verified · S26 |
| `competitors[pet-services]` | generic "Pet service booking apps" | → `rover` (90,22 → 88,26); mechanism now names repeat-client stats, badges, Star Sitter | verified · S27 (+S28 in note) |
| `competitors[pet-commerce]` | generic "Pet commerce & subscriptions" | → `chewy` (82,12); mechanism: pet profile → Autoship, vet chat on the same profile | verified · S29 |
| new `boqii` | — | 波奇宠物, industry / shop + community (76,32) | verified · S25 |
| `competitors[xiaohongshu]` | no provenance | strength adds "→ offline activity"; mechanism adds "and search" | estimate · S30 + S31 |
| `competitors[instagram]` | no provenance | mechanism: Close Friends spans posts, notes, reels, stories | verified · S32 |
| `competitors[soul]` | no provenance | strength adds avatars / voice matching / group parties; mechanism: "30-second soul test on personality and values" | verified · S33 |
| `competitors[jike]` | no provenance | strength adds offline meet-ups; mechanism adds 48h diaries; gap: "purely online at the product level" | verified · S34 |
| `competitors[dianping]` | no provenance | strength/mechanism add list rules (no paid placement, review-integrity exclusion) | verified · S36 (+S35 in note) |
| `competitors[meituan]` | no provenance; mechanism "merchant SLAs" | mechanism: platform guarantee terms (未消费随时退 / 过期自动退) instead of SLAs | verified · S38 (+S37, S11 in note) |
| `competitorInsights[0]` | "nobody has built the bridge to local action" | BarkHappy built it without a transaction layer and closed in 2025 | revisions.md row |
| `competitorInsights[1]` | "start every booking from zero trust" | trust rebuilt per booking from badges and reviews; no community carries it | revisions.md row |
| `competitorInsights[2]` | "the empty quadrant" | "no surviving product … with the transaction layer BarkHappy lacked" | revisions.md row |

No page copy was changed (`app/[locale]/competitors/page.tsx` untouched). UI edits approved by the author on 2026-09-10:
`CompetitorMap.tsx` — `SHORT` table and the retired-id `LABEL_DY` entries removed (labels use `c.name`);
`CompetitorExplorer.tsx` — the map takes the full row and the product cards sit below it, two per row from `md` up (the author first asked for an internal scroll, then replaced it with this).

## Still hypothesis

- Map coordinates for all 14 products — judgement by design (plan.md); reasoning above.
- The breed / life-stage cohort archetype ("puppy, senior" groups) — real behaviour, no named standalone product with a
  documented mechanism; deliberately not represented by a generic card. If the author wants it back on the map it
  should be as a named community inside a general platform, with that platform's provenance.
- CN service booking (小狗在家) and CN pet knowledge (阿闻) — could not be read from a live product surface; not on the page.

## Evidence for / against the chapter's argument

- **Against "nobody has built the bridge to local action"** (S21): BarkHappy combined nearby-dog matching, user-hosted
  play dates and dog-friendly place pages — the social × local bridge — and shut down in January 2025. → Revised;
  row in `revisions.md`. It also sharpens the case's thesis rather than breaking it: the missing piece in BarkHappy was
  the transaction / service layer, which is exactly what chapters 06 and 09 argue for.
  **Why it closed — what is on record (2026-09-10 follow-up, author asked):** no reason was published. Timeline:
  site still advertised the app on 2024-10-04 and 2024-12-08; by 2025-02-23 the banner read "THANK YOU FOR AN AMAZING
  8 YEARS! AS OF JANUARY 2025 OUR MOBILE APP IS NO LONGER AVAILABLE" (S40, Wayback captures). A search snippet from
  AppBrain says the Android build was unpublished from Google Play on 2024-07-08 — the page itself is behind a bot
  wall and could not be read, so this is unverified. The app is absent from the US App Store (iTunes search,
  2026-09-10). Company facts: founded 2013, founder Ninis Samuel, launched nationwide 2016-06, "60,000+ dog owner
  profiles" claimed in 2017-01 (S42, company press release — the only user figure, self-reported); never raised
  funding, 1 employee as of 2026-07 (S41, aggregator). The 2017 release names product partnerships and deals
  (Rover, Wondercide, PupJoy) and charity events; no subscription or paid listing is described anywhere (S42).
  Reading: an eight-year, unfunded, one-founder app with no documented revenue mechanism — consistent with the
  case's argument that the social × local bridge needs a transaction layer to pay for itself, but that is our
  inference, not a statement by the company. Facebook/LinkedIn pages were not readable (login walls).
- **Against "every booking starts from zero trust"** (S27, S28, S38): Rover and Meituan carry trust in artefacts
  (repeat-client stats, badges, Star Sitter, refund guarantees). → Wording revised; the direction (trust is not carried
  by a community) stands.
- **Against "the empty quadrant"** (S21, S23): it was tried (BarkHappy) and is partly occupied mid-map (宠胖胖). → Revised
  to "no surviving product".
- **For the direct-tier reading "identity but stalls at interaction"** (S19, S20): both surviving global pet-social apps
  describe feeds, tags, contests and charity — nothing that moves a relationship off the feed or into a place.
- **For the CN framing that pet identity lives inside general platforms**: standalone CN pet-social apps closed in
  waves (S22, S39); the survivors are community modules inside shops (S23, S25); 小红书 is where owners get pet
  information (S04 in 02).
- **For the cross-industry mechanisms**: every benchmark mechanism on the page is now backed by the product's own
  listing or help page except 小红书's search-first claim (secondary press only → estimate).
- Counter-evidence was actively looked for on every card; the three conflicts found are the insight-level ones above.
