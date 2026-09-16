# 05 · Social — research notes

Status: ☑ done (all fields sourced or explicitly left hypothesis) · Last updated: 2026-09-16

## Questions
See `research/plan.md` → Social.

## Findings

Method note: the five-tier provenance model (2026-09-15) cut this chapter's research surface sharply.
`identityDimensions`, `relationshipLadder`, the AI Pet Match prototype (`matchQuery` / `matchSignals` /
`matchCandidates`) and `matchPrinciples` are all `design` — the case's own proposal, nothing to cite. Only two
blocks assert something about the world and therefore needed evidence: `ladderFunnel` and `matchMetrics`.

**Q1 — public funnel benchmarks for like → comment → follow → DM (feeds `ladderFunnel`)**

Nothing public measures this ladder. The two nearest comparables point in **opposite directions**, and neither
shares the funnel's denominator, so no value was changed and none could be.

- *Steep.* Nielsen's participation inequality: 90% of users lurk, 9% contribute occasionally, 1% heavily (S50).
  Nielsen is explicit that the angle is a design variable, not a constant — blogs run 95-5-0.1, Wikipedia
  99.8-0.2-0.003 — and that "Your only real choice here is in how you shape the inequality curve's angle." It
  measures **contribution** (creating content), not progression from like to comment to DM.
- *Flat.* Among Chinese pet-content interest users, self-reported 总是+经常 frequency barely decays with depth
  (S43 p.17, N=500, iResearch iClick, 2021-08): 点赞/转发博主的内容 **67.7%**, 评论博主的内容 **65.7%**,
  加入博主的粉丝群 **57.6%** — 10.1pp across three rungs, against the chart's 100 → 38 → 24. The full matrix
  decodes as (总是 / 经常 / 有时 / 偶尔 / 从不): like-or-share 37.0 / 30.7 / 22.6 / 8.2 / 1.4; comment
  31.5 / 34.2 / 21.2 / 10.5 / 2.7; join fan group 29.4 / 28.2 / 22.0 / 9.9 / 10.5 — each row sums to ~100%,
  which is what confirms the reading.

The decisive point is denominators, again. `ladderFunnel` is *unique users reaching a rung, of those who started
at Like* — a cascade whose denominator narrows at every step. S43 is *stated frequency per behaviour*, each
measured against the same fixed sample, so a user who does all three appears in all three rows. Subtracting or
ranking one against the other would repeat the error the author retracted on 2026-09-14. Kept `hypothesis`; both
comparables now sit in `ladderFunnelProvenance`, so the hover card shows the reader that the shape is contested.

**Q2 — benchmarks for match acceptance, conversation and offline conversion (feeds `matchMetrics` notes)**

First, a negative finding worth stating plainly: **the listed companies in this category publish no funnel.**
Match Group's FY2023 10-K and Bumble's FY2024 10-K disclose Payers / Revenue Per Payer and Paying Users / ARPPU
and nothing about matches, conversations or meetings (S52). Everything that surfaces in search for
"Hinge match rate" / "Bumble conversation rate" traces back to SEO content sites (swipestats, vidaselect,
getcupid, doulike) with no primary attribution — **none of it was used**; secondary press is admissible for an
`estimate` under `CLAUDE.md` rule 3, and these do not reach even that bar.

One peer-reviewed figure exists, from Hinge's own data (S51, Frontiers in Psychology, >500k users,
421,690,471 potential matches, collected before 2015-11): 508,989 contact-information exchanges against
2,148,947 conversations — "for every 4.23 people that a user chats with, they will exchange contact information
with one", i.e. **23.6% of conversations**. The authors state they cannot track behaviour after users leave the
app, so there is no in-person figure anywhere in the paper.

Attached to `matchMetrics[4]` (offline conversion, 12%) as a bracket, not as support: its denominator is
conversations rather than matches, and a contact exchange is not a meeting. The other four targets — acceptance
34%, conversation 58%, mutual follow 47%, 7-day retention 41% — have no public comparable at all and stay bare
`hypothesis`. No value changed.

**Q3 — evidence that pet identity drives owner-to-owner relationships**

Three peer-reviewed studies, and they agree on something sharper than the chapter currently claims.

- **Contact: yes.** US owners of dogs were 2.4× more likely to meet neighbours than cat owners (95% CI 1.5–3.9);
  within dog owners, walking frequency trended the same way but was not significant (1.7×, 95% CI 0.9–3.1).
  Small and skewed sample: 99 adults aged 55+, 90% female (S55).
- **Activity: yes, conditionally.** In Japan (N=3606), young-to-middle-aged dog owners **who walked** scored
  significantly higher on *activities with neighbours* than non-owners (S53).
- **Cohesion and friendship: no.** The same study found **no significant difference in social cohesion** between
  non-owners, owner non-walkers and owner walkers in either age group — and among older adults, no difference on
  either score (S53). A second Japanese study (N=377, GSEM) found dog ownership did **not** raise the likelihood
  of neighbourhood *friendships* once demographics were controlled (b=0.22, p=.36) (S54).
- **What does work: the anchored tie.** In that same study, dog owners were far more likely to hold *anchored
  personal relationships* — relationships that exist through the dog (b=1.13, p<.001) — and APR was the **only**
  relationship type that mediated dog ownership → sense of community (b=0.69, p<.001), an effect "more than twice
  as large as the direct effect". Incidental interactions rose (b=0.25, p=.019) but mediated nothing.

## Data changes

`data/social.ts` only. No UI files touched. **No value changed.**

| Field | Old → New | Confidence |
|---|---|---|
| `ladderFunnelProvenance` | `HYPOTHESIS` (bare) → `hypothesis` + both opposing comparables (S50, S43 p.17) and why neither can fill the funnel | `hypothesis` (unchanged tier) |
| `matchMetrics[4]` provenance | `HYPOTHESIS` → `hypothesis` + the Hinge conversation→contact figure as a bracket, plus the Match Group / Bumble negative finding (S51, S52) | `hypothesis` |

## Still hypothesis

- **`ladderFunnel` (all seven rungs).** No public source measures this cascade; the two comparables disagree on
  the shape and share no denominator with it. Kept `hypothesis` with both attached.
- **`matchMetrics[0]`–`[3]` — acceptance 34%, conversation 58%, mutual follow 47%, 7-day retention 41%.** No
  public comparable found. The category's listed companies disclose none (S52) and the only peer-reviewed figure
  (S51) is for a later step. Left bare rather than attaching a number that measures something else.
- **`identityDimensions`, `relationshipLadder`, the match prototype, `matchPrinciples`.** Now `design`, not
  hypothesis: the product's own proposal, nothing to cite. This is the first chapter researched after the tier
  was introduced, and it is what shrank the work to two fields.

## Evidence for / against the chapter's argument

**For — the pet is the anchor, and the anchor is what counts.** The chapter's premise is that pet identity, not
generic interest, is what makes owner-to-owner relationships form. S54 is close to a direct test: dog-anchored
relationships were the *only* tie type that carried dog ownership through to a sense of community, at more than
twice the direct effect, while incidental interaction carried nothing. `matchPrinciples` already says "anchor
every match to an activity" and optimises 7-day relationship retention rather than acceptance — the evidence
supports that choice specifically, and would not support a design that optimised contact volume.

**Against — the top of the ladder is not automatic, and the chapter draws it as if it were.** `relationshipLadder`
runs Like → … → Offline activity → Real-world relationship ("Trust — the outcome we optimise for"), a smooth
climb. The evidence says contact converts far less readily than that: dogs raise meeting and neighbourhood
activity (S55, S53) but leave **social cohesion unchanged** (S53) and do **not** produce neighbourhood friendships
(S54). Nothing in the data changed — the ladder is `design`, the case's own proposal — but the chapter should not
imply that shared context ripens into trust on its own. Recorded in `revisions.md` 2026-09-16.

**Against, weakly — the funnel's steepness.** Self-reported engagement among pet-content users is nearly flat
across three rungs (S43 p.17). It measures the wrong thing to overturn the chart, but it is the only pet-specific
observation available and it does not look like 100 → 38 → 24.

**Carried forward.** S53's effect appears only for dog owners who *walk*, and only among young-to-middle-aged
adults; S55's sample is 55+ and 90% female. Both point at the same product-relevant asymmetry — the walk, not the
ownership, is the social act — which belongs to 06 Local as much as here. Hand it to 06.
