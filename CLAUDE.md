# CLAUDE.md — randomorium/[app-name]

> Fill in the bracketed fields when you create a new app from this template.

## What this is

**[One sentence describing what this app does and why it's funny.]**

Example: "A snake charmer salesman who aggressively plans your group holiday."

## The hat hook

**[One sentence connecting this app to buying a hat.]**

This goes in `src/data/apps.ts` in the site repo. It appears on the app card on the homepage. It should be natural, amusing, and clickable. See `PRODUCT_PLAYBOOK.md` for the full Hat Hook Doctrine.

## Author

**[harry / matt / sol]**

## Key files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main (and probably only) page — the app lives here |
| `src/components/HatBanner.tsx` | Shop link — required, always visible |
| `src/app/layout.tsx` | Root layout — metadata, analytics |
| `src/app/globals.css` | Global styles |

## Stack

- Next.js 16 (App Router, TypeScript, Tailwind CSS 4)
- Vercel hosting (own project, subdomain: `[app-name].randomorium.ai`)
- Vercel Analytics (pre-wired)
- GitHub Actions CI (lint + build on PRs)

## Rules

1. **HatBanner stays.** It must always be visible. You can customize the copy but never change the destination URL.
2. **Ship small.** This is a one-page app. If it needs a second page, question whether it should.
3. **Brand voice.** Read `PRODUCT_PLAYBOOK.md`. All copy should be dry, self-aware, and slightly absurd.
4. **One delight moment.** The app needs at least one moment that makes someone react. Know what yours is.
5. **Mobile first.** Most visitors will be on their phone via a link someone texted them.
6. **Don't over-build.** No accounts, no databases, no settings pages. One page, one idea, one session.

## Before you ship

- [ ] Describe the app in one sentence
- [ ] Identify the delight moment
- [ ] Write the hat hook
- [ ] Test on a real phone
- [ ] Read all copy aloud
- [ ] Click the HatBanner link
- [ ] Show it to someone with no context
- [ ] Add entry to `src/data/apps.ts` in the site repo
