# randomorium app template

Starter template for new [randomorium.ai](https://randomorium.ai) apps.

## What's included

- **Next.js 15** (App Router, TypeScript, Tailwind CSS)
- **HatBanner** component — links to the hat shop (required by the hat rule)
- **Vercel Analytics** — pre-wired
- **GitHub Actions CI** — lint + build on PRs
- **`.env.example`** — Sentry placeholders

## Getting started

1. Click **Use this template** on GitHub (or clone it)
2. `npm install`
3. `cp .env.example .env.local`
4. `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## The hat rule

Every app on randomorium.ai must include at least one path to [shop.randomorium.ai](https://shop.randomorium.ai). The `HatBanner` component handles this — keep it in your layout or on your main page.

## Adding your app to the homepage

Once deployed, add an entry to `src/data/apps.ts` in the [site repo](https://github.com/randomorium-ai/site) and open a PR.
