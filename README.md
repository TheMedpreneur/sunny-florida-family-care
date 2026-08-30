# Sunny Florida Family Care

> **Stack:** Vite + React + TypeScript · Tailwind CSS · react-router · **Deploy:** Cloudflare Pages (`sunny-florida-family-care`, Direct Upload) · **Status:** live at [sunny-florida-family-care.pages.dev](https://sunny-florida-family-care.pages.dev)

Marketing site for Sunny Florida Family Care, a direct primary care practice.
Multi-page (react-router), i18n (English/Spanish, checked at build time),
brand palette with contrast rules documented in `tailwind.config.js`.

## Local development

```bash
npm run dev       # start the dev server
npm run lint      # eslint
npm run build     # i18n check + lint + production build to dist/
npm run preview   # serve the production build locally
npm run qa        # qa:mobile + qa:a11y — see scripts/
```

## Deploying

```bash
npm run deploy
```

See [`DEPLOY.md`](./DEPLOY.md) for the full story — this project was deployed
by Direct Upload rather than Git integration, so pushing to `main` does not
by itself publish anything; `npm run deploy` is the actual publish step.

## Structure

```
src/
  common/          shared UI primitives
  components/       page-level building blocks
  context/          React context providers
  data/             site content (copy, pricing, structured data)
  hooks/            custom hooks
  pages/            route components
  translations/     en/es strings
scripts/
  check-translations.mjs   build-time i18n completeness check
  a11y-qa.mjs / mobile-qa.mjs   scripted QA passes — see DEPLOY.md / AUDIT.md
```

## Reference docs

- [`AUDIT.md`](./AUDIT.md) — build/audit history and client review rounds
- [`DEPLOY.md`](./DEPLOY.md) — deploy mechanics, domain status, outstanding items
