# Deploying

The site is a static Vite build served by **Cloudflare Pages**, project
`sunny-florida-family-care`, live at
<https://sunny-florida-family-care.pages.dev>.

## Why there is a deploy script at all

The Pages project was created by **Direct Upload**, not from Git. Cloudflare
cannot retrofit Git integration onto such a project:

> Currently, you cannot add Git integration to existing Pages applications. If
> you have already deployed your application, you need to create a new Pages
> application in order to add Git integration to it.
> — [Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/git-integration/)

So pushing to `main` deploys nothing. Until the project is recreated from Git
(see below), publishing is this one command.

## Publishing

```bash
npm run deploy
```

That runs the full `build` first — i18n check, lint, Vite build — so a broken
translation or lint error stops the deploy rather than shipping. Then it
uploads `dist/` to the `sunny-florida-family-care` project on the `main` branch.

### One-time: authenticate

`wrangler` needs credentials. Either works; the token is better for CI.

**Interactive**, once per machine:

```bash
npx wrangler login
```

**Token**, for CI or a non-interactive shell — create it at
[My Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens) using
the **Edit Cloudflare Workers** template, or a custom token with
`Account → Cloudflare Pages → Edit`:

```bash
export CLOUDFLARE_API_TOKEN=...
```

Never commit the token. `.env` is gitignored; `.env.example` shows the shape.

## Still to do

1. **Point the domain at the site.** `sunnyfloridafamilycare.com` is registered
   (GoDaddy) but still serves an Airo placeholder, and `sunnyfamily.health` —
   which the code used to name — was never registered. `practice.siteUrl`, the
   sitemap and robots.txt now say `sunnyfloridafamilycare.com`, so those URLs
   describe the intended home rather than the current one until its DNS is
   moved to the Pages project (Pages → project → Custom domains).

2. **Optional: restore Git deploys.** Requires a *new* Pages project, per the
   quote above — rename or delete the current one first to free the
   `.pages.dev` subdomain, then Workers & Pages → Create application → Pages →
   Import an existing Git repository → `TheMedpreneur/sunny-florida-family-care`:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

   The GitHub App install is an interactive browser consent and cannot be
   scripted. Once connected, `npm run deploy` becomes redundant.

## Checking what is actually live

The deployed bundle name changes every build, so it is the quickest way to tell
whether a deploy landed:

```bash
curl -s "https://sunny-florida-family-care.pages.dev/?cb=$RANDOM" | grep -o 'assets/index-[A-Za-z0-9_-]*\.js'
```

Compare against `ls dist/assets/index-*.js` after a local build.
