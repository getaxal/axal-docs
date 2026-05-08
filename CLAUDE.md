# Axal Docs — CLAUDE.md

## What this repo is

Documentation site for [Axal](https://www.getaxal.com), a non-custodial automated stablecoin savings product. The site is built with **Astro + Starlight** and deployed to `docs.getaxal.com`.

## Repo layout

```
axal-docs/
├── docs/               # The actual site — work here 99% of the time
│   ├── astro.config.mjs        # Starlight config, sidebar, social links
│   ├── src/
│   │   ├── content/docs/       # All documentation pages (.mdx / .md)
│   │   └── components/         # Custom Astro components used in pages
│   └── public/                 # Static assets (images, videos, SVGs)
└── packages/           # Local package overrides (starlight, tailwind, markdoc, docsearch)
```

## Running locally

```bash
cd docs
npm run dev          # starts Astro dev server (hot reload)
npm run build        # production build
npm run linkcheck    # build + validate all internal links
```

## Content structure

All pages live under `docs/src/content/docs/` and map directly to URL paths:

| Folder | URL prefix | Topic |
|---|---|---|
| `getting-started/` | `/getting-started/` | Onboarding, deposits, mobile app |
| `how-it-works/` | `/how-it-works/` | EIP-7702, signing, contracts, chains, withdrawal |
| `yield/` | `/yield/` | Methodology, strategy stack, fee structure, risks, FAQ |
| `security/` | `/security/` | Audits, partners, smart wallets |
| `terms/` | `/terms/` | Terms of service, privacy policy |
| `referrals/` | `/referrals/` | Referral program overview |
| `api/` | `/api/` | API docs (coming soon placeholder) |

The sidebar order is defined in `docs/astro.config.mjs` under `sidebar: [...]`.

## Adding / editing pages

- Pages are `.mdx` (preferred) or `.md` files with YAML frontmatter (`title`, `description`, optionally `lastUpdated`, `editUrl`).
- Use Starlight components (`<Card>`, `<CardGrid>`, `<Steps>`, `<Tabs>`, etc.) by importing from `@astrojs/starlight/components`.
- Custom components (e.g. `<CopyableAddress>`, `<EarnNowButton>`) are in `docs/src/components/`.
- Images go in `docs/public/` and are referenced as absolute paths (e.g. `/axal_worm.png`).

## Starlight config (astro.config.mjs)

Key settings to know:
- **`sidebar`** — controls nav order; must be updated when adding new pages to the sidebar.
- **`locales`** — English only (`root`). i18n JSON files exist in `src/content/i18n/` but are not actively used.
- **`components`** — several Starlight components are overridden: `Header`, `MobileMenuFooter`, `PageTitle`, `Sidebar`.
- **`editLink.baseUrl`** — points to `https://github.com/getaxal/`.
- **`plugins`** — `starlight-links-validator` runs only when `CHECK_LINKS=true` (i.e. `npm run linkcheck`).

## Tech stack

- **Astro 5** + **@astrojs/starlight** (local package in `packages/starlight`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **MDX** for rich content pages
- **astro-icon** + **@iconify-json/lucide** for icons
- **Fathom Analytics** (`data-site: EZBHTSIG`) injected via `head` in config
- **Playwright** for end-to-end / a11y tests (`npm test`)

## Deployment

Deployed on **Netlify**. `NETLIFY_PREVIEW_SITE` / `DEPLOY_PRIME_URL` env vars are used in config for preview builds. The `docs/public/_redirects` and `docs/public/_headers` files configure Netlify routing and headers.
