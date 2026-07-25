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
    hook: 'Only one can be the next top Triple Threat.',
    desc: 'The nationwide search for the next singer-dancer-actor superstar. Hundreds of kids audition, but only the ones who can belt a high note, nail the choreo, AND land the scene survive each round. Live sing-offs, surprise curveball challenges, and a celebrity panel that does not hand out easy yeses — because being a Triple Threat has to be earned.',
    slot: '[ key art — portrait ]',
    img: zFactorKeyArt,
  },
  {
    title: 'Triple Threat: Bootcamp',
    tag: 'reality',
    hook: 'Talent gets you in. Grit gets you out.',
    desc: 'Our contestants move into an intensive camp run by Broadway vocal coaches and world-tour choreographers. Cameras roll through the 6am warm-ups, the meltdowns, and the breakthroughs.',
    slot: '[ key art — landscape ]',
  },
  {
    title: 'Triple Threat: Off the Wall',
    tag: 'scripted',
    hook: 'Fame is hard. Fighting demons is harder.',
    desc: 'A performing-arts high school where students chase spotlight dreams — and secretly hold the line against real demons that leak in after the final bell.',
    slot: '[ key art — landscape ]',
    img: offTheWallKeyArt,
  },
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
