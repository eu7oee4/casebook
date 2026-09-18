# casebook

Build evidence-backed, editorial-style dossiers as bilingual Next.js sites, one case per folder, with an
AI-assisted workflow: intake questions → framework proposal → author approval → build → research with
provenance → in-page review.

Status: early. The reference case (`examples/pet-social-platform`) is complete as a site; the shared design
system, rules and workflow skills are being extracted from it. See `CLAUDE.md` for the layout and conventions.

## Run the example

```bash
cd examples/pet-social-platform
npm install
npm run dev     # http://localhost:3000/en or /zh
npm run check   # tsc + eslint + next build → out/
npx serve out   # preview the static export as a host serves it
```

Cases build to static files (`output: "export"`), so a case runs on any static host and can move between
them later. See `docs/deploy.md`.

Your own cases go in `projects/<slug>/`, which is git-ignored so they stay private.
