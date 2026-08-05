import scrapple from '../assets/simkacat_scrapple.jpg'
import orangeSludge from '../assets/orange_sludge.jpg'
import greenSludge from '../assets/green_sludge.jpg'
import purpleSludge from '../assets/purple_sludge.jpg'
import bloobs from '../assets/bloobs.jpg'
import catsup from '../assets/catsup.jpg'
import kittyChow from '../assets/kitty_chow.jpg'
import catnip from '../assets/catnip.jpg'
import offTheWallKeyArt from '../assets/off-the-wall-key-art.webp'
import zFactorKeyArt from '../assets/z-factor-key-art.webp'
import bootcampKeyArt from '../assets/bootcamp-key-art.webp'

export const food = [
  { img: scrapple, name: 'Scrapple', blurb: '#1 meat in the USA. Made for humans.' },
  { img: orangeSludge, name: 'Sludge — Orange', blurb: 'Our signature Orange Sludge in a jar. Keep refrigerated.' },
  { img: greenSludge, name: 'Sludge — Green', blurb: 'Our signature Green Sludge in a jar. Keep refrigerated.' },
  { img: purpleSludge, name: 'Sludge — Purple', blurb: 'Our signature Purple Sludge in a jar. Keep refrigerated.' },
  { img: bloobs, name: 'Bloobs', blurb: 'Berry-flavored gummy blobs.' },
  { img: catsup, name: 'Bloodbath Catsup', blurb: 'Terrifyingly delicious. Not for cats!' },
  { img: kittyChow, name: 'Old Fashioned Kitty Chow', blurb: 'Chocolate, peanut butter & puffed grain.' },
  { img: catnip, name: 'Catnip Seasoning', blurb: 'Great on everything.' },
]

export const shows = [
  {
    title: 'Triple Threat: Z Factor',
    tag: 'competition',
    format: 'Unscripted competition series',
    status: 'In development',
    logline: 'A nationwide talent hunt where kids have to sing, dance, and act to survive each round.',
    hook: 'Only one can be the next top Triple Threat.',
    desc: 'The nationwide search for the next singer-dancer-actor superstar. Hundreds of kids audition, but only the ones who can belt a high note, nail the choreo, AND land the scene survive each round. Live sing-offs, surprise curveball challenges, and a celebrity panel that does not hand out easy yeses — because being a Triple Threat has to be earned.',
    slot: '[ key art — portrait ]',
    img: zFactorKeyArt,
  },
  {
    title: 'Triple Threat: Bootcamp',
    tag: 'reality',
    format: 'Docu-reality series',
    status: 'In development',
    logline: 'Contestants move into a live-in training camp run by Broadway coaches and world-tour choreographers.',
    hook: 'Talent gets you in. Grit gets you out.',
    desc: 'Our contestants move into an intensive camp run by Broadway vocal coaches and world-tour choreographers. Cameras roll through the 6am warm-ups, the meltdowns, and the breakthroughs.',
    slot: '[ key art — landscape ]',
    img: bootcampKeyArt,
  },
  {
    title: 'Triple Threat: Off the Wall',
    tag: 'scripted',
    format: 'Scripted live-action series',
    status: 'In development',
    logline: 'At a performing-arts high school, students chase stardom by day and fight real demons after the bell.',
    hook: 'Fame is hard. Fighting demons is harder.',
    desc: 'A performing-arts high school where students chase spotlight dreams — and secretly hold the line against real demons that leak in after the final bell.',
    slot: '[ key art — landscape ]',
    img: offTheWallKeyArt,
  },
]

// Deterministic tilt cycle for card grids, applied as tilts[i % tilts.length].
// One shared angle on every card reads as a bug; alternating leans read as
// hand-placed. Length is deliberately odd and coprime with the 2- and 4-column
// grids it feeds, so the cycle drifts against the columns instead of locking
// into a mirrored zigzag where every left card leans left. Capped at 1.5deg so
// body copy stays comfortable to read.
export const tilts = [
  '-rotate-[1.2deg]',
  'rotate-[0.8deg]',
  '-rotate-[0.6deg]',
  'rotate-[1.5deg]',
  '-rotate-[1deg]',
  'rotate-[0.6deg]',
  '-rotate-[1.5deg]',
]

export const crew = [
  { name: 'Mychal Simka', role: 'co-founder', slot: '[ crew photo ]', tiltClass: '-rotate-2' },
  { name: 'Trevor Rothaus', role: 'co-founder', slot: '[ crew photo ]', tiltClass: 'rotate-1' },
]

export const brand = {
  orange: '#ff6a13',
  slime: '#c6d92b',
  pink: '#f28cb1',
}

// Single source of truth for the facts that appear both as visible copy and as
// structured data in index.html. Update here first.
export const siteMeta = {
  name: 'Simka Cat',
  legalName: 'Simka Cat Productions',
  url: 'https://simkacat.com',
  tagline: 'Turn it up.',
  description:
    "Simka Cat Productions is an independent television studio in Burbank, California, founded in 2026 by Mychal Simka and Trevor Rothaus. It develops kids' series — starting with the three-show Triple Threat slate — built on chaos and slime up front, with real character arcs underneath.",
  founded: '2026',
  city: 'Burbank',
  region: 'California',
  country: 'USA',
  social: [
    { label: 'Instagram', handle: '@simkacat', url: 'https://instagram.com/simkacat' },
    { label: 'YouTube', handle: '@simkacat', url: 'https://youtube.com/@simkacat' },
    { label: 'TikTok', handle: '@simkacat', url: 'https://tiktok.com/@simkacat' },
  ],
}

export const facts = [
  { label: 'Studio', value: 'Simka Cat Productions' },
  { label: 'Founded', value: '2026' },
  { label: 'Headquarters', value: 'Burbank, California, USA' },
  { label: 'Founders', value: 'Mychal Simka & Trevor Rothaus' },
  { label: 'What we make', value: "Kids' television series" },
  { label: 'Franchise', value: 'Triple Threat' },
  { label: 'Slate', value: '3 series in development' },
  { label: 'House motto', value: "If it doesn't make a grown-up slightly nervous, it's not done yet." },
]

export const stats = [
  { value: '12', label: 'Animated features', note: 'Made for Lionsgate — cast, directed, and produced by our co-founder.' },
  { value: '3', label: 'Series in development', note: 'One scripted, one competition, one docu-reality. All Triple Threat.' },
  { value: '8', label: 'Simka Cat snacks', note: 'Sludge, Bloobs, Catsup and friends. Made for humans, not cats.' },
  { value: '2', label: 'Founders', note: 'One who knows how a show gets made. One who built the machine that makes them.' },
]

// GEO rule for every answer below: lead with the answer, stay self-contained,
// and name the studio, so a snippet lifted out of context still makes sense.
// These strings are mirrored in the FAQPage JSON-LD in index.html — change both.
export const faqs = [
  {
    q: 'What is Simka Cat Productions?',
    a: "Simka Cat Productions is an independent television studio based in Burbank, California. It develops kids' series that look like chaos and slime on the surface but run on real character arcs and real stakes underneath.",
  },
  {
    q: 'Who founded Simka Cat Productions?',
    a: 'Simka Cat Productions was founded in 2026 by Mychal Simka and Trevor Rothaus. Mychal cast, directed, and produced twelve animated features for Lionsgate. Trevor runs a nonprofit animation studio and engineered its production pipeline, after years as a core developer at SendGrid through its acquisition by Twilio.',
  },
  {
    q: 'What shows is Simka Cat Productions making?',
    a: 'Simka Cat Productions has three series in development, all part of the Triple Threat franchise: Off the Wall, a scripted live-action series; Z Factor, an unscripted talent competition; and Bootcamp, a docu-reality series.',
  },
  {
    q: 'What is Triple Threat?',
    a: "Triple Threat is Simka Cat Productions' flagship franchise, named for a performer who can sing, dance, and act. It spans three connected series — a scripted drama, a competition show, and a docu-reality show — set in the same performing-arts world.",
  },
  {
    q: 'Where is Simka Cat Productions located?',
    a: 'Simka Cat Productions is headquartered in Burbank, California, USA.',
  },
  {
    q: 'Why is it called Simka Cat?',
    a: 'The studio takes its name from co-founder Mychal Simka. The cat is the mascot — and the reason nearly every Simka Cat snack is explicitly labeled as being for humans, not cats.',
  },
  {
    q: 'Are the Simka Cat snacks real products?',
    a: 'The Simka Cat snack line — Scrapple, three colors of Sludge, Bloobs, Bloodbath Catsup, Old Fashioned Kitty Chow, and Catnip Seasoning — is part of the Simka Cat Productions brand world. Nothing is on sale yet; the studio is in development.',
  },
  {
    q: 'When can I watch a Simka Cat show?',
    a: 'No Simka Cat Productions series has an air date yet — all three are in development as of 2026. Casting news, early clips, and behind-the-scenes updates are posted on this site and on the studio’s social channels as they happen.',
  },
]
