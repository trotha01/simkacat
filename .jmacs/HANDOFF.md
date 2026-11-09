# HANDOFF — Redesign simka.cat as Trevor and Mychal's studio site

## Objective
Replace the "network" site (Triple Threat shows, snack line) with a studio site: Who we are, Credits, Services
(incl. publicity & celebrity access), Higgsfield-style Showcase, 24/7 AI channels, DeepInfer investor note.
PR only; no production deploy until Trevor approves.

## Done
- Source located: trotha01/simkacat (React + Vite + Tailwind, Netlify). Live simka.cat serves this repo's main.
- Redesign built on branch cloud/simka-site; lint, build and Playwright load (desktop + mobile) all clean.
- Credits sourced from TMDB, IMDb search listings, claritasstudios.com; unverified roles marked TODO(Trevor).
- Screenshots in docs/screenshots/. PR opened: https://github.com/trotha01/simkacat/pull/9

## Pending (needs Trevor)
- Review bios and credits; confirm or delete every TODO(Trevor) in src/data/content.js (headshots, Lionsgate claim,
  four IMDb roles, contact email, further Trevor titles).
- Supply real showcase clips (public/showcase/, set `media`), esp. the Chinese→English lip-sync demo.
- Swap in the DeepInfer 5-line pitch once reports/deepinfer-business-model.org is merged in knowledge-base-lab.
- Approve merge + live deploy. Preview URL: Netlify deploy preview should appear on the PR if enabled (site name
  unknown from this session).

## Next step
- Trevor reviews PR #9; on OK, merge (Netlify deploys main to simka.cat).
