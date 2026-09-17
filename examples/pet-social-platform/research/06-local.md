# 06 · Local — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-17 (one label changed — see “Relabelled 2026-09-17” below)

## Questions
See `research/plan.md` → Local.

## Findings

Method note: as in 05, the five-tier model (2026-09-15) decided most of this chapter before any searching.
`serviceJourney`, the whole AI Service Concierge (`conciergeQuery` / `conciergeSteps` / `recommendedServices` /
`booking`) and the three design principles are `design` — the case's own proposal, with deliberately fictional
merchants, so there is nothing to cite. Two blocks assert something about the world: `serviceCategories`
(frequency, trust need) and `serviceMetrics` (four targets). Both stay `hypothesis`; what changed is that six of
the twelve claims inside them now carry a published comparable in their provenance note, and three of the four
targets say what they are measured against.

**Q1 — typical frequency per service category (feeds `serviceCategories.frequency`)**

No public source measures service frequency for Chinese pet owners. The white papers that cover the same
categories publish **penetration** — what share of owners bought the service at all in the year — not how often:
the Petdata 2025 excerpt (S01) reports 洗澡美容 penetration *down* 2.4pp and 诊疗 / 训练 / 寄养 up, and KPMG's
2025 report (S60) publishes where owners go rather than how often (宠物店 for both 洗美 and 寄养, both above 50%
and up 19pp on 2021; 医院洗美 down to 29.2% in 2024). This is the same gap found in 02, where no
visits-per-quarter figure existed anywhere and `marketKpis[3]` had to become a penetration metric instead.

Three of the eight rows do have a comparable, from professional guidance or a household survey rather than a
platform:

- **Grooming — was "Every 4–8 weeks", now "Every 4–6 weeks"** (author-decided 2026-09-16). PetSmart's own
  grooming FAQ says "Grooming or bathing your pet once about every four-to-six weeks, either at home or with a
  professional groomer, will keep your pet happy and healthy" (S58, merchant guidance). The AKC's guidance is
  explicitly breed-dependent: "For dogs with medium-to-large coats, a bath could be needed from weekly to every
  four to six weeks", hairless breeds "require weekly baths", and "all pets benefit from monthly ear cleaning
  and nail trimming" (S59). Both land on 4–6 weeks as the outside interval for a professional groom and nothing
  found supported an 8-week bound, so the cell now carries the guidance range.
- **Vet — was "2–4× / year", now "1–2× / year + as needed"** (author-decided 2026-09-16). AAHA's 2019 Canine
  Life Stage Guidelines (peer-reviewed practice guidelines, JAAHA 55:267–290) recommend "a consultation and
  physical exam for young adults semiannually to annually and working dogs semiannually", "Mature adults should
  have semiannual-to-annual exams", and "The senior dog should have at least semiannual exams" (S56) — i.e.
  **1–2 check-ups a year**, 2 for seniors. Chinese owners' self-reported check-up cadence (S05 p.34, N=957;
  86.5% do regular check-ups) is every 6 months 26.5%, yearly 24.9%, every 2–3 months 24.2%, monthly 8.4% — the
  two largest buckets are exactly 2×/year and 1×/year, and only the 24.2% who go every 2–3 months reached the
  top of the old range. The cell now shows the guideline cadence and puts incident visits **outside** the range
  ("+ as needed" / 「+ 按需」) instead of hiding them inside a wider number.
- **Walking — "Daily / on demand".** In a Cheshire (UK) household survey — doorstep interviews with 1,278
  households, July–October 2005, 279 dogs in 214 households — 77.9% of the 276 dogs with clear data were walked
  at least once a day (29.5% once, 32.4% twice, 13.3% three times) and 22.1% less than daily (S57). Daily is
  therefore the majority pattern but not a universal one, and the fifth of dogs not walked daily is itself the
  demand this category serves. Value kept.
- **Boarding — "Holidays, travel".** Supported, and the shape is sharper than "holidays": 58到家 reported pet
  boarding demand up **46% month-on-month** entering January, with dog boarding **6× cat**, and the phrase used
  by every outlet is 一窝难求 — supply, not demand, is the binding constraint at peak (S61, CCTV reprint of
  58到家 data, 2026-01-16). Spring-Festival reporting a year earlier describes a Beijing store's 12 dog rooms
  and 4 cat rooms going from "three or four pets" on a normal day to fully booked, orders up 3–4× and fees up
  50% (S62, secondary press — note only, no figure used).
- **Training / Photography / Pet-friendly places / Community events.** Nothing public sizes these. The nearest
  datum for pet-friendly places is Meituan/Dianping's 2025 pet report: "宠物友好" searches +80% year on year and
  notes +224% (S68, via reprints — secondary), which measures interest growth, not a weekly visit rate. The
  "Weekly" and "Monthly" cells stay the author's.

**Q2 — where trust matters most (feeds `serviceCategories.trustNeed`)**

`trustNeed` is an ordering, and no survey ranks the eight categories, so it stays judgement. One quantified
finding supports the top of the ordering and, more usefully, the chapter's ranking argument:

- New veterinary clients arrive by word of mouth ahead of every other channel: **32.8% of respondents first
  heard of their practice of choice through a fellow pet owner**, against passing the practice 17.2%, Yellow
  Pages 14.1%, the practice website 13.3% and the phone book 10.9%, with **no** respondent arriving via a
  newspaper or magazine advertisement (S63; N=129 new clients of eight practices near Utrecht, Netherlands,
  from 2005 on; peer-reviewed). The same paper reports the choice rested on "personnel and product (the total
  package of services and its quality) and less on location".
- Rating inflation is what makes the *identity* of the rater the signal. Rover disclosed 4.9M cumulative reviews
  with **97% of reviewed bookings at five stars** (S64), and Airbnb's control group gives 74% five-star guest
  reviews (S65). A distribution that compressed carries almost no information between merchants, which is
  exactly the gap the chapter says a followed owner's rating fills.
- KPMG (S60 p.43) shows 亲友推荐 and 宠物店/宠物医院推荐 rising as information channels — but the object there is
  **brand choice for goods and food**, not service selection. Different denominator, so it is context, not
  support; recorded here and not cited in the data file.

**Q3 — local-service conversion and repeat benchmarks (feeds `serviceMetrics` notes)**

- **Intent → booking 23% (vs a 6% search baseline): no public bracket exists.** The marketplaces that disclose
  operating metrics disclose *volume*, not conversion. Angi's FY2023 10-K says "consumers turned to at least one
  of our businesses to find a service professional for approximately 23 million projects" (S66); Rover discloses
  bookings and repeat bookings (S64). Neither publishes a request → booking rate. Every "booking rate" league
  table that surfaces in search (31% vs 18% vs 12% across lead platforms) traces to marketing blogs with no
  stated method or sample — the same pattern as the "Hinge match rate" content farms rejected in 05, and none
  is used. The 6% baseline is the author's too. Stays bare `hypothesis` apart from the negative finding.
- **Repeat within 60 days 44%: a much higher public figure exists and is not comparable.** Rover's FY2021 10-K
  states "approximately 81% of our bookings were repeat bookings" for 2021, and "In 2020 and 2019, approximately
  86% and 84%, respectively, of our bookings were from repeat customers"; bookings per repeat customer in year
  one rose from 3.7 for the January 2013 cohort to 7.3 for the January 2021 cohort, across 1.3M unique pet
  parents booking in 2021 (S64). Its denominator is **bookings** placed by customers with more than one booking,
  over any interval and any provider. This target is the share of **customers** who rebook **the same merchant
  for the same pet inside 60 days**. Per the standing rule, they are not divided or compared; both now sit in
  the provenance note, which says what each measures. What they do agree on is direction: repeat volume, not
  acquisition, is what carries a pet-services marketplace.
- **Reviews → content 31%: bracketed from above.** On Airbnb, with email prompts, "In the control group, 68% of
  trips result in a guest review, and 72% result in a host review" (S65; 119,789 transactions with checkouts
  2014-05-10 to 2014-06-12, Marketing Science 2021), and Rover's 4.9M reviews imply the same order of magnitude
  (S64). Both count a review submitted inside the platform's own flow; this target counts a booking producing a
  public post *or* review — a looser and more demanding object — which is why 31% sitting well below 68% reads
  as conservative rather than aggressive.
- **Time to book 48 s: nothing public, in either direction.** No platform discloses time-to-book for a
  conversational flow. Stays a bare `hypothesis`.

## Data changes

**Two values changed**, both author-decided on 2026-09-16 after the research showed their upper bounds were
unsupported; both `en` and `zh` changed in the same edit. Everything else is provenance metadata, and no page
copy (section titles, descriptions, prose) was edited.

| Field | Before | After |
|---|---|---|
| `serviceCategories[0].frequency` (grooming) | "Every 4–8 weeks" / 「每 4–8 周」 | "Every 4–6 weeks" / 「每 4–6 周」 — the interval PetSmart (S58) and the AKC (S59) both name |
| `serviceCategories[1].frequency` (vet) | "2–4× / year" / 「每年 2–4 次」 | "1–2× / year + as needed" / 「每年 1–2 次 + 按需」 — AAHA's check-up cadence (S56), incident visits moved outside the range |
| `serviceCategories[0].provenance`, `[1].provenance` | did not exist (row type had no field) | `estimate` each, with source, url, `retrievedAt` and a note quoting PetSmart / AKC (S58–S59) and AAHA / iResearch (S56, S05); rendered as an inline row badge on `/local` |
| `serviceCategoriesProvenance` | `HYPOTHESIS` (bare) | `hypothesis` + source (AAHA 2019 / Westgarth 2015 / PetSmart FAQ), url, `retrievedAt`, note carrying the per-row comparables and the two gaps (grooming's 8-week bound, vet's 2–4× range) |
| `serviceMetrics[0]` (Intent → booking) | `HYPOTHESIS` (bare) | `hypothesis` + Angi FY2023 10-K / Rover FY2021 10-K, note recording that no request → booking rate is published and that the blog league tables were rejected |
| `serviceMetrics[2]` (Repeat within 60 days) | `HYPOTHESIS` (bare) | `hypothesis` + Rover FY2021 10-K (81% / 86% / 84%; 3.7 → 7.3 bookings per repeat customer), note stating both denominators and refusing the comparison |
| `serviceMetrics[3]` (Reviews → content) | `HYPOTHESIS` (bare) | `hypothesis` + Fradkin, Grewal & Holtz 2021 (68% / 72%) and Rover's 4.9M reviews at 97% five-star, note stating the object mismatch |
| `serviceMetrics[1]` (Time to book) | `HYPOTHESIS` (bare) | unchanged — nothing public to cite |

**Row-level marks (author-approved UI change, 2026-09-16).** The section badge alone could not say that two of
its cells are now sourced while six are not, so `serviceCategories` rows gained an optional `provenance` and the
grooming and vet rows carry `estimate` marks of their own, rendered inline after the frequency value on `/local`.
`DataTable` was **not** modified — its `cell` render prop already accepts any node, so the change is confined to
`data/services.ts` and `app/[locale]/local/page.tsx` and nothing outside this chapter moved. The frequency column went 20% → 22% to give the badge room; the
badge sits on the same line as the value (`whitespace-nowrap`) so the two marked rows keep the height of every
other row — the author asked for this on 2026-09-16 after seeing the stacked version.

Both new marks are `estimate`, not `verified`: professional guidance says how often a service *should* happen,
which is not an observation of how often owners book it, and the vet cell additionally leans on the iResearch
distribution for scale. The section badge stays `hypothesis` and now covers only what is unmarked — the four
unsourced frequencies and the whole trust-need ordering — which its note states explicitly. Rows are marked only
where they depart from that floor; repeating `hypothesis` on six rows would add noise rather than information.

### Relabelled 2026-09-17 — `serviceMetrics[0]`, author-decided

「意图 → 预订」 → 「**表达出的意图** → 预订」 / "Intent → booking" → "**Expressed intent** → booking". Value unchanged
at 23%, tier unchanged at `hypothesis`; the provenance note is extended and the metrics section's description
copy on `/local` was aligned in both languages so the page does not keep the old phrase above the new label.

The author's objection (2026-09-17): 「用户的需求没办法得到一个确切的统计值吧？」 It holds, and it is sharper than
what this chapter recorded on 2026-09-16. This note framed the gap as a disclosure problem — nobody publishes a
request → booking rate (S66). That is true of a **request**, which is a platform event Angi and Rover can both
count. It is not true of an **intent**, which is a state of the owner: 「狗该洗澡了，下楼那家就做了」 never touches
the product, so the denominator cannot be enumerated from inside the platform at all. Browsing behaviour
recovers precision — of the intents the model flags, how many convert — but never recall, which needs ground
truth on needs that never appeared. Only a survey, an external split (S60) or a geo / hold-out experiment
estimates that.

One channel this product has that a pure marketplace does not: owners narrate offline consumption in content, so
a post saying 「今天带狗去洗澡了」 is an observation of a transaction the platform did not broker. That is an
**argument, not a measurement**, and it is labelled as one — the same treatment the 2026-09-15 row gave
"scrolled past ≠ findable when needed".

One `revisions.md` row, logged **author**. The three-way typing this produced (A not published · B not
observable from inside · C no comparable exists) became section 5 of `research/09-risks.md`, now built.

## Still hypothesis

- `serviceCategories.frequency` for **training, photography, pet-friendly places, community events** — nothing
  public measures them. Grooming and vet now follow cited guidance; walking and boarding are bracketed but keep
  the author's wording.
- `serviceCategories.trustNeed` — an ordering across eight categories that no survey ranks. Judgement by design.
- `serviceMetrics[0]` (23% / 6%), `[1]` (48 s), `[2]` (44%), `[3]` (31%) — product targets; per rule 4 they stay
  `hypothesis` with comparables in the note where one exists. `[1]` has no comparable at all.
- Everything `design`: the six-stage journey, the six concierge steps, the three fictional merchants, the
  booking card, the three design principles.

## Evidence for / against the chapter's argument

**For — trust need is why local belongs inside the social product.** The one quantified acquisition channel for
a high-trust category is another owner's recommendation (32.8%, S63), and the ratings that platforms actually
carry are too compressed to separate merchants (97% five-star on Rover, S64; 74% five-star on Airbnb, S65).
The chapter's claim — "a stranger's rating is not enough; a rating from someone the user follows is" — is the
right response to that distribution, and it is the one ranking feature a marketplace without a social graph
cannot build.

**For — repeat is where the loop pays.** Rover's disclosures (81% of bookings repeat; 7.3 bookings per repeat
customer in the first year for its 2021 cohort, S64) support the journey's claim that "the second booking costs
nothing to acquire" as a structural property of pet services, not an aspiration.

**Qualification — the walk, not ownership, is the social act.** Carried over from 05 and it lands on this
chapter: the neighbourhood effect of dogs belongs to walking (S53: only young-to-middle-aged owners *who walk*
score higher on activities with neighbours; S55: owners 2.4× more likely to meet neighbours, but sampled 55+
and 90% female), and Westgarth (S57) shows 22.1% of dogs are not walked daily. Two implications, recorded for
07 and 09 rather than acted on here: the Walking row is the chapter's strongest social hook, and the
pet-friendly-places and community-event rows — the two whose frequency is pure judgement — are the ones whose
social value the evidence does *not* reach.

**Against, partially — "intent shows up in content before it shows up in search".** This is the chapter's
support for putting services inside a content product, and nothing public measures the ordering. The nearest
evidence runs both ways. For: on Meituan/Dianping, notes about 宠物友好 grew 224% year on year against 80% for
searches (S68) — content growing faster than search. Against: on the platform closest to this product's
content-first thesis, search is the dominant entry point — Xiaohongshu disclosed that **70% of monthly active
users have an active search habit** and 170M users a month seek purchase advice (S67), and 03 already records
Xiaohongshu's mechanism as search-first. A reader could fairly say intent shows up in *both*, and that the
product cannot assume it gets the content-side signal first. One `revisions.md` row records the claim as kept
with this qualification (the sentence is page copy on `/local`, and no data value depends on it).

**Not contradicted.** Nothing found points the opposite way from a value on this page; the only conclusion-level
tension is the ordering claim above, which is recorded and kept.
