# Simka Cat

Studio site for Simka Cat Productions (Trevor Rothaus and Mychal Simka), built with React, Vite, and Tailwind CSS.

All copy lives in `src/data/content.js`. Items marked `TODO(Trevor)` render as visible placeholders (the `Todo` component) until filled in; real showcase clips go in `public/showcase/` and are referenced from the `showcase` list.

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
