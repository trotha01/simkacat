# Simka Entertainment

Studio site for Simka Entertainment (Mychal Simka and Trevor Rothaus), built with React, Vite, and Tailwind CSS.

All copy lives in `src/data/content.js`. Real showcase clips go in `public/showcase/` and are referenced from the `showcase` list.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Project structure

- `src/components` — one component per page section (Nav, Hero, WhoWeAre, Credits, Services, Showcase, Channels, DeepInfer, Footer)
- `src/data/content.js` — all copy, credits (with sources), services, showcase tiles, channel list
- `src/assets` — images
- `src/fonts` — self-hosted webfonts (Caveat, Fredoka, Gochi Hand, Luckiest Guy, Nunito)

## Hosting

The site is served by the Cloudflare Worker `simkacat` (static assets only, see `wrangler.jsonc`).
Cloudflare Workers Builds is connected to this repository: a push to `main` runs `npm run build`
and `npx wrangler deploy`; a push to any other branch builds a preview and Cloudflare comments
the preview URL on the pull request. Response headers live in `public/_headers`.
No secrets or API tokens are needed in this repository.
