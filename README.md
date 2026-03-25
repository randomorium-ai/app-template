# randomorium app template

Starter template for new [randomorium.ai](https://randomorium.ai) apps.

## What's included

- **Next.js 16** (App Router, TypeScript, Tailwind CSS 4)
- **HatBanner** component — links to the hat shop (required by the hat rule)
- **Vercel Analytics** — pre-wired
- **GitHub Actions CI** — lint + build on PRs
- **`.env.example`** — Sentry placeholders
- **`CLAUDE.md`** — fill-in-the-blank agent context for your app
- **`PRODUCT_PLAYBOOK.md`** — brand, voice, and design guide

## Getting started

1. Click **Use this template** on GitHub (or clone it)
2. `npm install`
3. `cp .env.example .env.local`
4. `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## New app checklist

Before your app is live on the homepage, complete these steps:

- [ ] **Description** — Write a one-sentence description that makes someone curious
- [ ] **Delight moment** — Identify the one moment that makes someone react (see `PRODUCT_PLAYBOOK.md`)
- [ ] **Hat hook** — Write the sentence connecting your app to buying a hat
- [ ] **Mobile** — Test on a real phone (most visitors arrive via texted link)
- [ ] **Copy** — Read all text aloud. Does it sound like randomorium? (dry, self-aware, slightly absurd)
- [ ] **Hat link** — Verify HatBanner renders and the shop link works
- [ ] **apps.ts entry** — Add your app to `src/data/apps.ts` in the [site repo](https://github.com/randomorium-ai/site) and open a PR
- [ ] **Fill in CLAUDE.md** — Complete the bracketed fields so agents understand your app

## The hat rule

Every app on randomorium.ai must include at least one path to [shop.randomorium.ai](https://shop.randomorium.ai). The `HatBanner` component handles this — keep it in your layout or on your main page. Customize the copy to fit your app's personality but never change the destination URL.

## Adding your app to the homepage

Once deployed, add an entry to `src/data/apps.ts` in the [site repo](https://github.com/randomorium-ai/site) and open a PR. Fields:

```ts
{
  name: "Your App Name",
  slug: "your-app-name",
  description: "One sentence that makes someone curious.",
  url: "https://your-app-name.randomorium.ai",
  author: "harry",  // or "matt" or "sol"
  builtWith: "Next.js",
  hatHook: "One sentence connecting your app to hats.",
}
```

## Key docs

- **`CLAUDE.md`** — Agent context for this specific app (fill in the blanks)
- **`PRODUCT_PLAYBOOK.md`** — Brand voice, design principles, and creative guide
