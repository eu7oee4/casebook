# casebook

A workspace for building evidence-backed, editorial-style HTML dossiers: a research case, a project write-up,
a piece of personal history, each as its own bilingual Next.js site. One workspace, many cases.

## Layout

| Path | What it is | Public? |
|---|---|---|
| `examples/<slug>/` | Example cases, shipped with the repo. `examples/pet-social-platform` is the reference case: the shared rules and code are extracted from it, and it is still being worked on as the test bed for the tooling. | yes |
| `projects/<slug>/` | The author's real cases. Git-ignored here; the folder is its own private repository. | **no** |
| `docs/` | Rules shared by every case. `writing-rules.md` — the two voices (page copy vs. research notes), what a note must record, bilingual. `references.md` — external projects borrowed from, with licenses. _(UI system and provenance still to be extracted from the reference case.)_ | yes |
| `packages/` | Shared code: design tokens, components, provenance, i18n, review mode. _(Planned.)_ | yes |
| `.claude/skills/` | Workflow skills: `dossier-new`, `dossier-continue`, `dossier-review`. _(Planned.)_ | yes |

Every case folder has the same shape: `CLAUDE.md` (case-specific rules), `STATE.md` (where it stands, next step,
open decisions), `data/`, `research/`, and its own Next.js app with `npm run dev` / `npm run check`.

## Finding the case

When the author says "continue <slug>" or names a case, resolve it in this order:

1. `examples/<slug>/`
2. `projects/<slug>/`
3. Not found → it is a new case. Confirm the slug with the author, then create it under `projects/<slug>/`
   (private) unless they say it is an example.

Never move a case between `examples/` and `projects/` on your own; that changes what is public.

## How to start a session

1. Resolve the case as above. Read its `STATE.md` first, then its `CLAUDE.md`. Work inside that folder; run its
   `npm` scripts from there.
2. If `STATE.md` lists an open decision that blocks the next step, ask the author before doing anything else.
3. Propose a plan and wait for approval before changing content or code.
4. Update `STATE.md` at the end of the session: what changed, what is next, what still needs the author.

## Rules that apply everywhere

- Never invent a number or a fact. Every figure carries a provenance; unsourced values stay marked Illustrative.
- Bilingual content changes both `en` and `zh` in the same edit.
- Conclusions may be revised, but only with a row in the case's `research/revisions.md`.
- Do not redesign the visual system. UI work is a separate, explicitly approved task.
- When extracting rules or code from a case into `docs/` or `packages/`, strip case-specific numbers, claims and
  names from examples. Private case content must never end up in the public parts of this repo.
- Do not commit unless asked. Commits in `projects/` go to its own repository, not this one.

## Cases

- `examples/pet-social-platform/` — Product Research & AI Strategy case for a 0→1 pet social platform. Ten
  chapters, EN / 中文 (nine researched, plus 09 风险与未解 which renders what the research argues against).
  The reference case.
