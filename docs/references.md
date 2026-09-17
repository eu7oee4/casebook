# References — open-source work casebook borrows from

Purpose: one place to record every external project we looked at, what we take from it, and its license, so
that (a) the build does not re-discover them and (b) credits are correct when this repo is published.

Rules:
- Add a row **before** borrowing, not after. Update `Status` as it changes.
- Anything with status `borrowed` or `dependency` must also be listed in the README acknowledgements.
- `borrowed` = we read it and modelled our own code / skill on it. `dependency` = it is installed via
  `package.json`. `considered` = looked at, not used yet. `rejected` = looked at, decided against, reason noted.
- Licenses were read from the GitHub API on 2026-09-06; re-check before publishing.

| Project | License | What it is | What we take / why | Status | Seen |
|---|---|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | MIT | Skills framework for coding agents: `brainstorm` (one question at a time, 2–3 approaches, approved design doc) → `write-plan` → `execute-plan`. Installable from the official Claude plugin marketplace. | The ask → propose → approve → execute skeleton for `dossier-new` and `dossier-continue`. **Borrow the skill structure, do not install the whole framework**: its TDD / worktree / subagent parts are noise for a content workflow. | considered | 2026-09-05 |
| [github/spec-kit](https://github.com/github/spec-kit) | MIT | Spec-driven development toolkit: Specify → Plan → Tasks → Implement, human approval between phases. | Reference for phase gates and for how a plan is written so a fresh agent can execute it. | considered | 2026-09-05 |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | custom (not SPDX; read before borrowing) | Multi-agent methodology with role agents (analyst, PM, architect…) and brief → architecture → implementation gates. | Only as a comparison point for intake questionnaires; heavier than we need. | considered | 2026-09-05 |
| [sungkhum/tiptap-track-changes](https://github.com/sungkhum/tiptap-track-changes) | MIT | Tiptap extension: edit / suggest / view modes, per-change accept / reject, multi-author colours. | Candidate engine for review mode's track-changes UI if we go editor-based instead of contenteditable overlay. Small project (≈16 stars) with a large test suite; pin a version if used. | considered | 2026-09-05 |
| [tinacms/tinacms](https://github.com/tinacms/tinacms) | Apache-2.0 | Git-backed CMS with contextual (click-on-page) editing; `tinaField` attaches a field path to rendered elements. | **Pattern only**: attaching a stable field path (e.g. `market.kpis[0].label`) to every rendered string so in-page edits map back to `data/*.ts`. Do not install; too heavy. | considered | 2026-09-05 |
| [SonwaneyY/portfolio-case-study-generator](https://github.com/SonwaneyY/portfolio-case-study-generator) | MIT | Claude Code skill that turns project notes into portfolio case studies in nine narrative formats. | Reference for `docs/writing-rules.md` and the `dossier-new` intake questions (what a case-study interview asks). Output is a document, not a site. | considered | 2026-09-05 |
| [ithiria894/awesome-claude-code-workflows](https://github.com/ithiria894/awesome-claude-code-workflows) | CC0-1.0 | Curated recipes combining hooks, MCP, skills, agents, CLAUDE.md. | Index to check when a workflow problem feels solved elsewhere. | considered | 2026-09-05 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache-2.0 | "The design language that makes your AI harness better at design": a Claude Code design skill with product / design-brief docs, a doctor script and live manual-edit tooling. | The design workflow used to build the reference case: `PRODUCT.md` carries its `impeccable:product-schema` marker (written by its `doctor.mjs`), and `DESIGN_BRIEF.md` came out of it. Its brief format shaped the case docs. Apache-2.0 requires attribution in the README; verified locally against `~/.claude/skills/impeccable` on 2026-09-06. | borrowed | 2026-09-04 |

Runtime dependencies of the reference case (Next.js, React, Tailwind, Recharts, motion, lucide-react) are
credited through `package.json` and need no row here unless we vendor or modify them.
