# Writing rules — shared by every case

How a casebook case is written. Applies to the rendered site and to everything under a case's `research/`.
Case-specific rules (chapter map, data files, what may not be redesigned) live in that case's own `CLAUDE.md`.

## Two voices, and they are not the same

A case has two surfaces, and a rule that fits one is usually wrong for the other.

### Page copy — state the finding, do not appraise it

Analytical, plain, no marketing language.

**Objectively marking something as important is fine.** "This is the constraint the rest of the chapter
depends on" is a statement about the subject. So is "nothing public brackets this number" — it says what the
world looks like.

**What is not fine is the work praising itself.** No "the strongest section here", no "unusually honest", no
"most cases skip this part". Do not tell the reader how to feel about a finding, and do not point at something
the reader can already see — if two things on the page line up, the reader sees them line up; saying so is the
author taking a bow.

A usable test: **strike the subject and see if the sentence still stands.** "This dependency is contractual,
not technical" survives without a subject — it is about the world, so it belongs on the page. "This case is
unusually rigorous about its sources" collapses without "this case" — it is about the work, so it belongs in
the notes, or nowhere.

Two consequences that come up often:

- **A negative finding is stated flatly, not sold.** "No comparable is published" is the finding. "Remarkably,
  no comparable is published" is a sales line wrapped around the same fact.
- **Do not argue with the reader.** An opening like "none of this is a reason not to build" answers an
  objection nobody made yet, and puts the page on the defensive. State what changes, and let the argument be
  the argument.

### Research notes — carry the judgement forward, at length

The opposite rule. A note in `research/` exists so the next person — very often a later session of the same
agent, with no memory of this one — does not have to rebuild the reasoning from scratch.

So the notes **should** say which rows carry a chapter and why, which are restatements that can be written
quickly, what breaks if a particular row is wrong, which claim an informed reader will push on first and what
the answer is. Say it plainly and at whatever length it takes.

Stripping judgement out of a note to sound modest is not modesty. It destroys the only copy of the reasoning
and guarantees the work is redone.

**A tone instruction from the author about the page is not an instruction about the notes.** If one arrives,
apply it to the copy and leave the notes alone; if it is ambiguous, ask which surface it covers.

## What the notes must record regardless of tone

- What was found, with the source ID, and **what the source actually measures** — region, year, sample,
  denominator. A figure without its denominator is not yet evidence.
- What could **not** be found, and which kind of gap it is. These are different problems with different
  answers, and collapsing them loses information:
  - **not published** — someone measures it, nobody discloses it;
  - **not observable** — the denominator includes events that never reach the system being studied, so no
    amount of internal data produces it; only surveys, external splits or experiments estimate it;
  - **no comparable exists** — nothing in an adjacent category has been published to bracket it against.
- Which of the case's own conclusions the evidence supports, and which it contradicts. Both go in the note
  before anything is changed, per the case's revision-log rule.
- When a claim is an **argument rather than a measurement**, label it. An argument may still be right and may
  still go on the page — but it never gets a provenance tier that implies it was measured.

## Bilingual

Every user-visible string changes in both languages in the same edit; a case never ships one language stale.
Translate in the same analytical voice rather than paraphrasing, and never let a number read differently
between languages. Researcher notes inside a provenance stay in the language they were written in.
