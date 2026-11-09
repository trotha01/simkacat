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

## Done (round 4, Trevor's feedback)
- Removed every "AI concept still" badge; before/after frames now stack vertically at full width so no actor is cropped.

## Done (round 5, Trevor's feedback)
- Channels section embeds the live streams: one hls.js 1.6.15 player with channel tabs, lazy-loaded (IntersectionObserver +
  dynamic import, separate chunk), muted autoplay with tap-to-unmute, /healthz check per channel, off-air card.
- CORS on all three Workers is already `*` (healthz, playlist, preflight): no ai-247 change needed.
- Puddle Park /healthz returns ok:false and its playlist 503s, so it shows off air.

## Done (round 6, supervisor brief)
- Credits: Trevor's verbatim 12-film list with roles line, 12 posters (supervisor's Drive files, converted to <=600px webp),
  'Top actors Mychal has worked with' grid of 30 names verbatim. TMDB/IMDb sentence, per-title source labels and links removed.

## Verified on the Netlify deploy preview (https://deploy-preview-9--simkacat.netlify.app, commit dee43ef)
- curl of the served bundle: no 'AI concept still', no TMDB/IMDb text; roles line; all 12 titles; heading + 30 actor names;
  three stream URLs + /healthz; bios; 'Publicity & celebrity access'; showcase tiles incl. 'Chinese → English lip sync';
  'Always on, always labelled' + 'Want your own channel?' + ai-247 link; 'DeepInfer' + 'For investors'.
- 12 poster assets and 6 showcase stills return 200.
- Headless browser: 12 posters rendered (0 broken), 30 actor tiles, 0 labels, 0 source labels, 6 showcase images loaded,
  AI News video playing (readyState 4, not paused), Puddle Park tab 'off air', 0 console errors.

## Pending (needs Trevor)
- Final read of bios/credits; add headshots if wanted (founders[].photo).
- Supply moving demos when ready (add `video:` to a showcase tile), esp. the Chinese→English lip-sync clip.
- Swap in the DeepInfer 5-line pitch once reports/deepinfer-business-model.org is merged in knowledge-base-lab.
- Approve merge + live deploy. Preview URL: Netlify deploy preview should appear on the PR if enabled (site name
  unknown from this session).

## Handover
- Orchestrator reassigned PR #9 to local worker simka-finish. This cloud session stopped with a clean tree; last commit 9fec9ca.

## Next step
- Trevor reviews PR #9; on OK, merge (Netlify deploys main to simka.cat).
