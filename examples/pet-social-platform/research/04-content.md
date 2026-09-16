# 04 · Content — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-14

## Questions
See `research/plan.md` → Content.

## Findings

Method note: the iResearch × Weibo content white paper is a 54-page PDF whose text layer uses subset fonts, so
plain fetching returns nothing; it was read by extracting the text page by page (PyMuPDF) and quoting the chart
labels and values directly. Two Pinterest engineering posts sit behind a 403 on medium.com and were read through
a text proxy of the same URL. Two academic PDFs (Oxford-IIIT Pet, the Twitter geotagging study) were read directly.

**Q1 — the observed content-type mix (feeds `contentTypes[*].share`, `contentTypesProvenance`)**

One public mix exists and it is not of the same object as this chapter's chart. 微博大数据, via S43 p.7,
2021 H1 萌宠内容 on Weibo:

| 微博萌宠内容题材 (2021 H1) | share |
|---|---|
| 宠物日记及创意内容 | 43.0% |
| 动物段子集锦 | 22.0% |
| 宠物热点及资讯 | 18.0% |
| 动物公益/救助 | 12.0% |
| 养宠知识/科普 | 3.0% |
| 宠物服务 | 2.0% |

This is broadcast creator content on a general social platform, not an owner community. Three of the six genres
(段子集锦, 热点资讯, 公益/救助 = 52% together) have no counterpart among the case's seven types, and the two that map
cleanly onto Advice / Local — 养宠知识/科普 and 宠物服务 — total **5%** against the case's 34% for
advice + Q&A + reviews. Splitting 43% "日记及创意" across diary and lifestyle, or redistributing the 52% that does not
map, would be inventing numbers, so **no `estimate` was set**; the shares stay `hypothesis`. See revisions row 2026-09-14.

What the same source gives instead is the demand side (S43 p.16; iResearch iClick online survey, N=500, fielded
2021-08, multi-select). Genres users say they watch: 宠物日常生活记录 66.2%, 创意/趣味vlog 65.0%, 剧情段子 62.4%,
**养宠知识/科普 58.2% (养宠人士 TGI 136)**, 动物集锦 54.4%, 动物公益/保护/救助 50.2%,
**宠物食品/用品/服务 48.6% (TGI 123)**, 宠物相关资讯 47.4% (TGI 114).

Two comparisons hold here, and one does not. **Not valid:** subtracting the 5% supply share from the 58.2%
demand figure. The denominators differ — 5% is a share of *posts*, 58.2% is a share of *people* on a
multi-select question where every genre scores high — so the difference between them is not a quantity, and no
"gap" of that size exists. **Valid, comparison one — the shape of each distribution, each read inside its own
denominator:** demand is near-flat, an 18.8pp range across eight genres (66.2 → 47.4), with 养宠知识/科普 ranked
**fourth** and only 8.0pp below the leader; supply is extremely skewed, 43% → 2% across six genres, a 21×
spread, with 养宠知识/科普 at one fourteenth of the leader. Users watch nearly everything; creators publish
nearly one thing. **Valid, comparison two — TGI, which is already normalised against the base population** and
is therefore immune to multi-select inflation: a large undifferentiated audience watching all pet content alike
would put every TGI at 100. Owners instead read 136 / 123 / 114 on knowledge, goods-and-services and news. The
preference split is real, and it falls on the genres the supply side is thinnest in. Audience matters as well:
this case designs an **owner** community, while 57.0% of the general pet-content pool self-describe as 云养宠
(p.13) and are not the design target.

`unknown` — **consumption by genre.** Both supply figures are publishing volume (微博大数据 post counts). The
white paper gives no per-genre read or view counts (only the ~99.8bn monthly total, p.5), so this source cannot
say whether the 3% of posts that are 养宠知识/科普 carry 3% or 30% of the reading. If knowledge posts out-read
diary posts per post, "supply is scarce" would not hold as an experience. What survives either way is an
argument rather than a measurement: scrolling past advice in a feed is not the same as finding it when needed,
and a searchable, durable knowledge layer is what this case actually claims.

This — not an observed feed — is what justifies weighting advice, Q&A and reviews as highly as the chart does,
and the chart caption now says so in both languages.

Other figures from the same white paper, recorded for context and for later chapters:
- Scale: pet content was about **3%** of all content on the leading platforms; June 2021 publishing volume
  +~39% YoY; Weibo pet content averaged ~99.8bn monthly reads (+18%) and 330m monthly interactions (+10%) in
  2021 H1 (S43 p.5).
- Why people watch (N=500, multi-select, p.13): 为生活添加乐趣 78.4%; 心理满足/治愈 59.6%; "云养宠" 57.0%;
  **宠物内容帮助宠物主了解商品、购买产品 56.8%**; 了解更多宠物相关知识 52.4%; 关注宠物领养救助 45.8%.
- Format preference (p.14): 短视频 80.4%, 图片为主 66.2%, Vlog/中长视频 57.4%, 直播 51.4%, 文字为主 46.0%.
- Following behaviour (p.17): 71.2% of pet-content users actively follow creators 经常 or 总是 — carried to 05 Social,
  not used here.

**Q2 — published benchmarks for breed / entity recognition (feeds `understandingMetrics` notes only)**

All four metrics are product targets and stay `hypothesis` per `CLAUDE.md` rule 4. Three of them now carry a
comparable in their provenance note, so the hover card shows what the target was set against:

- Breed precision 0.87 — **Tsinghua Dogs** is the right comparable: 130 breeds, 70,428 images, over 65% collected
  from real life, breed frequencies matched to how often they occur in China; best benchmark **86.4%**
  (WS-DAN, Inception-v3, 2019) (S44). Historical anchor: **Oxford-IIIT Pet** (7,349 images, 37 breeds) reported
  about **59%** average per-class accuracy at publication in 2012 (S45). Both score a closed breed list on curated,
  single-animal photos. A pet feed does not look like that, and S43 p.8 shows why: Weibo's 2021 H1 cat top-10 is led
  by 橘猫 and 狸花猫, and the dog top-10 includes 中华田园犬 — a coat pattern and two landraces, none of which is a class
  in Stanford Dogs (120), Oxford-IIIT Pet (37) or Tsinghua Dogs (130). The honest reading is that 0.87 is achievable
  on a benchmark-shaped distribution and unproven on a Chinese pet feed's actual head of the distribution.
- Resolved pet entity 91% — Pinterest reports "more than 99% of the Pins can be mapped to at least one taxonomy
  node" through Pin2Interest, over a 200B+ Pin corpus (S46). That is coverage of a broad interest taxonomy, not
  resolution to one named entity, so the target is deliberately set below it.
- Location-resolved 64% — the explicit half is rare wherever it has been measured at scale: **2.31%** of
  41,267,348,020 tweets from 19,984,064 users carried a geotag (1.76% a place, 0.55% coordinates) (S49). No public
  figure was found for *inferred* location, which is where most of this target would have to come from.

**Q3 — platforms that rank on structured understanding (evidence for "understanding is infrastructure")**

- **Pinterest** is the clearest published case of the exact architecture this chapter draws. An Interest Taxonomy
  organises topics into a parent-child hierarchy up to **11 levels**; Pin2Interest maps a **200B+ Pin** corpus onto
  it from text annotations, visual embeddings and board names; over **99%** of Pins land on at least one node
  (S46). The taxonomy is explicitly the shared layer, not a feature: "The Interest Taxonomy is the centralized way
  by which we classify content, including Pins, boards, Pinners, and search queries," and its named consumers are
  Query-to-Interest, **home feed ranking**, **search ranking & retrieval** and ads targeting; ranking features are
  built from query–interest and user–interest similarity at several levels of the hierarchy (S47). Sibling signals
  U2I / B2I / Q2I put users, boards and queries in the same space as content (S46) — the same "understood once,
  reused downstream" claim the pipeline section makes.
- **Instagram** confirms it only partly, and that is the useful part. Its own ranking explainer (S48, 2023-05-31)
  lists, for Reels, "Information about the reel. Signals about the content within the video such as the audio track
  or visuals in the video" — semantic content signals in ranking. But for Feed, Stories and Explore, the
  content-side input it names is **popularity** ("how many people have liked it and how quickly"), plus
  time and location; the rest is the viewer's own activity and interaction history.

## Data changes

`data/content.ts` only. No UI files touched.

| Field | Old → New | Confidence |
|---|---|---|
| `contentTypesProvenance` | `HYPOTHESIS` (bare) → `hypothesis` + source / url / retrievedAt / note carrying the observed Weibo mix, the N=500 demand survey and why the two cannot be mapped | `hypothesis` (unchanged tier; hover card now populated) |
| `contentTypesNote` (`en`+`zh`) | "hypothesis for an early-stage feed mix" → "a design target for the feed, not an observation … the case for weighting them this high comes from demand, not from any observed supply" | — |
| `understandingMetrics[0]` provenance | `HYPOTHESIS` → `hypothesis` + Pinterest >99% taxonomy-coverage comparable (S46) | `hypothesis` |
| `understandingMetrics[1]` provenance | `HYPOTHESIS` → `hypothesis` + Tsinghua Dogs 86.4% / Oxford-IIIT Pet ~59% and the 橘猫 / 中华田园犬 caveat (S44, S45, S43) | `hypothesis` |
| `understandingMetrics[2]` provenance | `HYPOTHESIS` → `hypothesis` + Twitter geotag rate 2.31% (S49) | `hypothesis` |

No values changed. All seven `share` numbers and all four metric values are the same as before.

**2026-09-15 — cost / tiering wording (author-raised, see `revisions.md`).** No value changed here either.

| Field | Old → New |
|---|---|
| `pipeline[1].detail` (`en`+`zh`) | "Vision + language models label the post" → "A small vision + language model labels every post; only ambiguous ones escalate" |
| pipeline section description in `app/[locale]/content/page.tsx` (`en`+`zh`) | publish-time understanding was justified on correctness alone → now also carries its cost half: a post is understood once but read many times, which is what makes understanding every post affordable |

Companion edits in `data/ai.ts` (`capabilities[0].oneLiner`, `.mechanism`) are logged in the same revisions row;
the five capabilities are author-decided, and the author decided this one on 2026-09-15.

## Still hypothesis

- **`contentTypes[*].share` (all seven).** A real mix exists (S43) but measures broadcast content on a general
  platform with three genres this model does not have; mapping it onto the seven types would require inventing a
  split. Kept `hypothesis` with the observation attached to the provenance note.
- **`understandingMetrics[3]` — posts → service intent signals, 12%.** No public benchmark found, and nothing
  comparable exists: the nearest figure is demand-side (56.8% of users say pet content helps them learn about and
  buy products, S43 p.13), which is a survey of people, not a rate of posts carrying a detectable service moment.
  Left as a bare `HYPOTHESIS` rather than attaching a number that does not measure the same thing.
- **`contentLoop`, `pipeline`, `creationVsUnderstanding`.** Product design, not claims about the world. The
  pipeline's worked example (Bao at the beach) is deliberately fictional; nothing to source.

## Evidence for / against the chapter's argument

**For — "AI content understanding is the infrastructure, not the feature."** Pinterest publishes this architecture
in full and names the downstream consumers: one centralized taxonomy classifying Pins, boards, users and search
queries, feeding home feed ranking, search ranking and retrieval, and ads targeting (S46, S47). That is a direct,
first-hand precedent for the chapter's claim that understanding happens once at publish time and every surface
reuses the same entities.

**For — the demand-side case for the knowledge-bearing types.** Stated by owners, not inferred from a
subtraction: on the demand side 养宠知识/科普 ranks fourth of eight at 58.2% in a near-flat distribution (18.8pp
range), while on the supply side it is 3% of a distribution spanning 21× (43% → 2%); and TGI, normalised
against the base population, puts owners at 136 / 123 / 114 on knowledge, goods-and-services and news rather
than the flat 100 an undifferentiated audience would give (S43 pp.7, 16). ⚠️ The two figures must **not** be
subtracted from one another — posts and people are different denominators (see both 2026-09-14/15 revisions rows
and the `unknown` on per-genre consumption above). The chapter's argument that the knowledge-bearing types are the valuable ones is supported on the demand side;
what it should not claim is that any existing feed already looks like its chart.

**Against — the mix as drawn.** See revisions row 2026-09-14. The chart's implied feed (34% knowledge-bearing) is
roughly seven times the only observed figure. Values kept, claim narrowed to a design target.

**Against, partly — "understood before ranked" as industry practice.** Instagram's own explainer puts semantic
content understanding in Reels ranking only; for Feed, Stories and Explore the content-side signal it names is
popularity plus time and location, with the heavy lifting done by the viewer's activity and interaction history
(S48). Engagement-first ranking is still the published norm on the largest surfaces, so the chapter's approach is
a defensible design choice rather than a settled industry standard — worth saying plainly if this ever reaches
01 Overview.

**Against, and the sharpest one — the chapter never said what it costs.** Raised by the author on 2026-09-15:
if every post must be understood and ranking is AI too, is this not overuse? A search of `data/` and `app/` found
every "cost / 成本" string in the case to be user-side (posting effort, acquisition, switching); the compute cost of
the understanding layer was discussed nowhere, in any chapter. The architecture survives the challenge — Pinterest
runs the same shape over a 200B+ Pin corpus as a daily batch job with cheap high-recall candidate generation, and
names per-item cost as its binding constraint (S47) — but the case was written in a way that reads as one large
multimodal call per post. Wording fixed in four places (see Data changes); the actual unit economics are now an
open question on the 07 table, and no cost figure goes on a page until it has a source.

**Not evidence, but worth carrying forward.** 71.2% of pet-content users say they actively follow creators
(经常 43.6% + 总是 27.6%, N=500, S43 p.17), and the same page breaks down 点赞/转发 → 评论 → 加入粉丝群. That is the
closest public thing yet found to the 05 Social ladder funnel — hand it to chapter 05, do not use it here.
