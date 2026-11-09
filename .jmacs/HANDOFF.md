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

## Done (round 2, per Trevor)
- All TODO placeholders removed; Trevor has no film credits (Credits is Mychal only, verified roles only);
  Trevor's bio centres on scale and SendGrid; original site fonts restored (Luckiest Guy, Caveat, Fredoka, Nunito, Gochi).

## Done (round 3)
- Showcase now uses six AI-generated concept stills (Higgsfield gpt_image_2_6, ~1.5 credits total) in public/showcase/:
  parking deck → Mediterranean quay, diner recast, Mandarin original → English dub. Labelled "AI concept still".

## Pending (needs Trevor)
- Final read of bios/credits; add headshots if wanted (founders[].photo).
- Supply moving demos when ready (add `video:` to a showcase tile), esp. the Chinese→English lip-sync clip.
- Swap in the DeepInfer 5-line pitch once reports/deepinfer-business-model.org is merged in knowledge-base-lab.
- Approve merge + live deploy. Preview URL: Netlify deploy preview should appear on the PR if enabled (site name
  unknown from this session).

## Next step
- Trevor reviews PR #9; on OK, merge (Netlify deploys main to simka.cat).
