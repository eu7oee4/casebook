# Deploying a case — shared by every case

How a case becomes a public link. The constraint that shapes everything below: the audience includes people
in mainland China, on unpredictable networks, who will not install anything to read a portfolio.

## The rule: every case exports to static files

A case site is pre-rendered — no API routes, no `next/headers`, no runtime `fetch`, no `revalidate`. So it
builds with `output: "export"` and `trailingSlash: true`, and ships as a folder of plain files.

This is not about performance. It is about **not being locked to a host**. The same `out/` folder runs on
Cloudflare Pages, GitHub Pages, an Aliyun OSS bucket or a Tencent COS bucket. The mainland-hosting options are
static-only and require an ICP filing that takes weeks; a case that ships as static files can move there the
day the filing clears, without a rewrite. A case hosted as a running Next.js server cannot.

Two things a static export gives up, both handled:

| Lost | Replacement |
|---|---|
| Server-side locale redirect for `/` (`proxy.ts`) | `public/index.html` — a client-side `navigator.languages` check, with bilingual links for no-JS |
| `/` in `next dev` | Open `/en` or `/zh` directly while developing; a real host maps `/` to `index.html` |

Because URLs gain a trailing slash, any code that compares `usePathname()` against a route table must strip it
first. In the reference case this lives in `splitLocale` (`lib/i18n.ts`); get it wrong and the sidebar, the
footer's prev/next and the chapter shortcuts all silently fall back to chapter 01.

## Where to host, honestly

There is no option that is free, fast in mainland China, and available today. Pick by what you need first.

| Host | Mainland access | Cost | ICP filing |
|---|---|---|---|
| **Cloudflare Pages** | usually loads, 1–3s, occasional bad days | free | no |
| **GitHub Pages** | DNS interference in some regions; slow | free | no |
| **Vercel** | `vercel.app` is DNS-poisoned; custom domains land on frequently-reset IPs | free | no |
| **Aliyun OSS / Tencent COS + CDN** | fast and stable | ~¥30–100/yr | **yes, 1–3 weeks** |
| **Hong Kong bucket or lightweight server** | better than overseas, worse than mainland | ~¥25+/mo | no |

**Vercel is not an option for this audience**, despite being the obvious choice for Next.js. An interviewer
who cannot open the link has seen nothing.

The working pattern is two steps: put the case on Cloudflare Pages today so the link exists, start the ICP
filing in parallel, and when it clears upload the same `out/` folder to a mainland bucket and repoint DNS. The
URL never changes, so links already sent stay good.

## Domain

Buy the domain at a **mainland registrar** (Aliyun, Tencent Cloud) even while hosting overseas — an ICP filing
requires it, and moving a domain between registrars later costs a transfer wait. Use `.com` or `.cn`: `.dev`,
`.app` and `.io` **cannot be filed**, which forecloses the fast-in-China option permanently.

Give each case its own subdomain (`pet.example.com`), not a path (`example.com/cases/pet`). A subdomain is one
DNS record and needs no `basePath`; a path needs `basePath` in every case, and every absolute URL in the site
becomes a place to get it wrong.

## Anything that needs a server

A case is static, but a hub site around the cases may not be — a chat greeter, a contact form, analytics that
are not a third-party script. Those need an endpoint, and an endpoint is where the hosting story gets real:

- **Never put an API key in the browser.** A key in client JavaScript is public the moment the page is served,
  and a portfolio site is exactly the kind of place people look.
- A mainland-hosted server **cannot reach `api.anthropic.com`**. If the static pages move to a mainland bucket,
  the endpoint has to stay overseas (a Cloudflare Worker on its own subdomain) or switch to a provider with
  mainland endpoints.
- A public endpoint spending your money needs a cap before it is public: short `max_tokens`, a per-IP rate
  limit, and a hard daily ceiling. Assume it will be found and hammered.

Keep the split clean: static case sites on the CDN, one small endpoint elsewhere. Do not let one interactive
feature drag the cases back onto a server they do not need.
