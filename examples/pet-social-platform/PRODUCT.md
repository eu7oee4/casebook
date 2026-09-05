# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (app router, `next build`) + React 19 + TypeScript 6. Styling is Tailwind CSS 4 via `@tailwindcss/postcss`
with custom design tokens in `app/globals.css` (no UI kit, no default Tailwind theme). Charts: Recharts 3. Motion:
`motion` 13. Icons: `lucide-react`. Lint: ESLint 9 with `eslint-config-next`. See `package.json` for exact versions.
The token-first approach is kept so the restrained editorial typography/spacing system stays under full control
and component-library defaults do not pull the look back toward generic SaaS admin conventions.

Routes are locale-prefixed (`/en/...`, `/zh/...`); the root redirects by `Accept-Language`. All research content
lives in `data/*.ts` as `{ en, zh }` strings with a `Provenance` on every factual number (`data/provenance.ts`).

## Users

Product directors, hiring managers and interviewers reviewing this as a portfolio piece during a job application.
They evaluate product thinking and research rigour first, and design / frontend craft second. They are not using
the site to do research work themselves.

## Product Purpose

A nine-chapter Product Research & AI Strategy case for a 0→1 pet social platform, presented as an editorial-style
research site. Success means a reviewer reads it as the work of a PM who did real research and holds a defensible
product argument — with distinct visual craft as a secondary signal, not the main one.

## Positioning

Deliberately not a generic SaaS admin dashboard. Differentiates itself from typical AI-generated dashboard output
(rounded cards, purple/blue gradients, glassmorphism, oversized icons, generic Inter/Arial type, dense grids) by
reading as premium product-strategy research / editorial publication / Linear-level design-system polish.

Whether the piece is ultimately positioned as a *research case* or as a *design piece* is an open decision
recorded at the top of `research/plan.md`; it depends on how many chapters are taken to sourced figures.

## Operating Context

Viewed locally / via screenshots; not deployed. No backend, no live users. Desktop viewport primarily, with
mobile layouts QA'd at 390px. Both languages are complete.

## Capabilities and Constraints

Subject: a 0→1 **pet social platform** (content + owner-to-owner social + local pet services, with an AI
strategy layer). Nine chapters — Overview, Market, Competitors, Content, Social, Local, AI Strategy, Benchmark,
Insights — each backed by a data file in `data/` (map in `CLAUDE.md`).

Constraints on anyone editing content:

- Every factual number carries a provenance tier: `hypothesis` (rendered **Illustrative**), `estimate`,
  `verified`, or `contradicted`. Confidence is never raised without a source, URL and retrieval date.
- Conclusions are revisable, but only with a row in `research/revisions.md` (see `CLAUDE.md`).
- UI, tokens, layout and `components/` are finished and not to be redesigned.
- No deploy target yet; local dev only.

## Evidence on Hand

None yet — **this is a to-do state, not a design intention.** As of 2026-09-05 every figure on the site is still
`hypothesis` and renders as Illustrative; `research/sources.md` is empty. The research plan in `research/plan.md`
defines what has to be sourced per chapter, and which chapters are in scope is the open decision at the top of
that file. Until that work is done, nothing on the site may be presented as a real research finding.

## Product Principles

- Every visual element must communicate research evidence, product insight, competitive comparison, or a strategic recommendation — no decorative UI that doesn't carry information.
- Typography and spacing create hierarchy; do not lean on cards as the default structuring device.
- Restrained palette: warm off-white/neutral background, dark typography, subtle borders, one accent color used sparingly.
- Charts are minimal and analytical, not decorative.
- Strategic statements get strong visual presence — editorial-style large type moments, not buried in small dashboard tiles.
- A number's provenance is always visible next to it; the site never hides that a figure is illustrative.
