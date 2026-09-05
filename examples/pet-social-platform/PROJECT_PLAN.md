# Project Plan — Pet Social Platform · Product Research & AI Strategy

A high-fidelity, interactive Product Research Case built as a Next.js (App Router) site.
Audience: interviewers / product directors evaluating PM thinking and product craft.
All data is illustrative (research hypotheses), never presented as real market fact.

## 1. Information Architecture

| # | Route | Page | Job of the page |
|---|---|---|---|
| 01 | `/` | Overview | Executive summary: thesis, scope, three insights, key opportunities |
| 02 | `/market` | Market | Why now: pet economy, user needs, functional × emotional matrix |
| 03 | `/competitors` | Competitors | Three-tier landscape, 2-D map, filterable competitor cards |
| 04 | `/content` | Content | Content types, loop, Content Intelligence pipeline |
| 05 | `/social` | Social | Pet as social identity, relationship ladder, AI Pet Match prototype |
| 06 | `/local` | Local | Service ecosystem, service journey, AI Service Concierge workflow |
| 07 | `/ai-strategy` | AI Strategy | Architecture diagram, 5 capabilities, Agent architecture, Pet Care Agent |
| 08 | `/benchmark` | Benchmark | Mechanism transfer table (Content / Social / Local) |
| 09 | `/insights` | Insights | Opportunity matrix, priorities, north star, four principles |

Reading order = navigation order. Left rail is the only chrome; each page is a chapter.

## 2. Design System

**Mood:** premium, editorial, analytical, restrained, warm.
Reference: strategy report × editorial magazine × interactive prototype. Not a SaaS dashboard.

**Color (single accent):**
- Page `#F6F4EE`, surface `#FBFAF6`, wash `#EFECE3`
- Ink `#17160F`, ink-2 `#5A5850`, ink-3 `#8C8980`
- Line `#E3E0D6`, line-2 `#CFCBBF`
- Accent moss `#3E6E2E` (text-safe `#2F5723`, wash `#E6ECDD`)
- Chart series (validated for CVD with the dataviz validator): moss `#3E6E2E`, blue `#4A7FC1`, clay `#E07A45`, neutral `#B3AFA3`

**Type:**
- Display: Instrument Serif (headlines, big statements only)
- Body/UI: IBM Plex Sans
- Labels/data: IBM Plex Mono (section labels, metric captions, annotations)

Scale: `t-h1` 56–72px display · `t-h2` 34–44px display · `t-h3` 20px sans medium ·
`t-body` 16/1.6 · `t-caption` 13px · `t-label` mono 11px uppercase tracked ·
`t-metric` sans 300 40–56px · `t-annotation` 12px ink-3.

**Layout:** left rail 232px (desktop), content max-width 1180px, 12-col grid, hairline dividers,
asymmetric 5/7 and 4/8 splits, section numbering only where sequence carries meaning.
Radius ≤ 6px. Shadows: none by default (one soft shadow for floating panels only).

**Motion:** entrance = opacity + 8px translate, staggered 40ms; page transition 220ms ease-out.
Hover = color/border only. Respect `prefers-reduced-motion`.

## 3. Component Architecture

```
components/
  layout/   AppShell, Sidebar, TopBar (mobile), PageContainer, Footer
  ui/       PageHeader, SectionHeader, Metric, MetricGrid, InsightCard, ChartCard,
            Tag, Badge, Tabs, Tooltip, DataTable, Timeline, FlowDiagram, Reveal, Note
  charts/   chartTheme (colors/axes), LineChart, BarChart, ScatterChart, RadarChart, Ring
  product/  CompetitorCard, CompetitorMap, OpportunityCard, OpportunityMatrix,
            AgentWorkflow, MatchCard, ServiceCard, Matrix (2×2), ArchitectureDiagram
```

## 4. Data Model (`data/`)

- `market.ts` — KPIs, spend trend, need layers, functional × emotional matrix points
- `competitors.ts` — tiers, competitor cards, 2-D map coordinates
- `content.ts` — content types, loop, intelligence pipeline stages
- `social.ts` — identity dimensions, relationship ladder, match candidates, match metrics
- `services.ts` — service categories, journey, concierge workflow steps, mock services
- `ai.ts` — architecture layers, capabilities, agent steps, pet care agent trace
- `benchmark.ts` — mechanism transfer rows
- `insights.ts` — opportunity matrix, priorities, north star, principles
- `research.ts` — barrel re-export + shared overview content

All numbers carry `illustrative: true` semantics; UI marks them "Illustrative data".

## 5. Interaction Model

- Sidebar with active chapter + keyboard `[` / `]` to move between chapters
- Page transition via `app/template.tsx` (motion)
- Tabs (competitor tiers), filter state, hover states, tooltips on charts
- Expand/collapse on capability cards and competitor cards
- Agent workflow: click a step → reveals mock output; auto-advance option
- Opportunity matrix: hover/click a point → detail panel
- Reveal-on-scroll with IntersectionObserver (subtle stagger)
- Responsive: rail collapses to top bar + drawer under 1024px

## 7. Internationalisation (added 2026-09-04)

- Routes: `app/[locale]/…` with `generateStaticParams` for `en` and `zh`; `proxy.ts` redirects locale-less URLs by `Accept-Language`.
- Model: `lib/i18n.ts` (`Text = { en, zh }`, `t`, `tr`, `localePath`, `splitLocale`), `lib/locale-context.tsx` (`useT`, `useLocale`).
- Data files hold both languages in one object per string; numbers, ids and product names stay plain.
- Chinese typography: `:lang(zh-CN)` overrides in `globals.css` (looser leading, no negative tracking, CJK fallbacks: PingFang / Songti / Noto CJK).
