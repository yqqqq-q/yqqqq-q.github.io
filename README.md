# Yang Qian

Personal portfolio, built with Next.js 16 and Tailwind CSS v4.

## Credits

This site is based on [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) by Nguyen Chanh Dai, licensed under the [MIT License](./LICENSE). Original project: [chanhdai.com](https://chanhdai.com).

Personal branding, copy, and content from that template have been replaced.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

This produces a static site in `out/`. Local preview: `pnpm start` is for a Node server and is not used on GitHub Pages.

## Deploy

The site is meant for [https://yqqqq-q.github.io](https://yqqqq-q.github.io).

1. Push this repo to GitHub (user site repo `yqqqq-q.github.io`).
2. In the repo: Settings → Pages → Source → GitHub Actions.
3. Push to `personalized`. The Deploy GitHub Pages workflow builds with `NEXT_PUBLIC_APP_URL=https://yqqqq-q.github.io` and publishes `out/`.

`.env.local` is gitignored; the workflow sets the public URL at build time.
