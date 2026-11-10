import posterMouseTale from '../assets/posters/a-mouse-tale-2012.webp'
import posterBirds from '../assets/posters/birds-of-paradise-2010.webp'
import posterDelhi from '../assets/posters/delhi-safari-2012.webp'
import posterElephant from '../assets/posters/elephant-kingdom-2009.webp'
import posterFrog from '../assets/posters/frog-kingdom-2013.webp'
import posterHuevos from '../assets/posters/huevos-little-rooster-s-egg-cellent-adventure-2015.webp'
import posterRabbit from '../assets/posters/legend-of-kung-fu-rabbit-2011.webp'
import posterSnowflake from '../assets/posters/snowflake-the-white-gorilla-2011.webp'
import posterGiantKing from '../assets/posters/the-giant-king-2012.webp'
import posterPororo from '../assets/posters/the-little-penguin-pororo-s-racing-adventure-2013.webp'
import posterWings from '../assets/posters/wings-2012.webp'
import posterWings2 from '../assets/posters/wings-sky-force-heroes-2014.webp'

// Single source of truth for site copy.

export const siteMeta = {
  name: 'Simka Entertainment',
  legalName: 'Simka Entertainment',
  imdb: 'https://www.imdb.com/company/co0426986/',
  url: 'https://simka.cat',
  tagline: 'A production studio by Mychal Simka and Trevor Rothaus.',
  description:
    'Simka Entertainment is the studio of Mychal Simka and Trevor Rothaus: production, publicity and celebrity access, AI video (background and person replacement, translation and lip sync), and always-on AI channels.',
  email: 'mychal@simka.cat',
}

export const nav = [
  { href: '#credits', label: 'Credits' },
  { href: '#services', label: 'Services' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#channels', label: 'Channels' },
  { href: '#deepinfer', label: 'DeepInfer' },
  { href: '#who', label: 'About us' },
]

export const founders = [
  {
    name: 'Mychal Simka',
    role: 'Co-founder · Producer, writer, casting director',
    photo: null, // add a headshot (src/assets/mychal.webp) and import it here
    bio: [
      'Mychal has spent more than a decade making animated features: writing, casting, producing and directing English-language versions for international release. The studio carries his name.',
      'Twelve animated features as producer, director, writer, casting director and editor, with voice casts from Ariana Grande and Hilary Duff to Ben Kingsley and Kim Basinger. He brings those talent relationships and publicity instincts to every project.',
    ],
    links: [],
  },
  {
    name: 'Trevor Rothaus',
    role: 'Co-founder · Engineering and scale',
    photo: null, // add a headshot (src/assets/trevor.webp) and import it here
    bio: [
      'Trevor builds systems that scale. At SendGrid he was a core developer through the years that took the company from a Series C startup to a multi-billion-dollar public company and its acquisition by Twilio, working on infrastructure that delivered email for tens of thousands of customers.',
    ],
    links: [],
  },
]

// Mychal's twelve films (Trevor's list, verbatim), with their posters.
export const credits = {
  rolesLine: 'Producer, Director, Writer, Casting Director, and Editor for all 12 films.',
  films: [
    { title: "Huevos: Little Rooster's Egg-cellent Adventure", year: 2015, poster: posterHuevos },
    { title: 'Wings: Sky Force Heroes', year: 2014, poster: posterWings2 },
    { title: 'Frog Kingdom', year: 2013, poster: posterFrog },
    { title: "The Little Penguin: Pororo's Racing Adventure", year: 2013, poster: posterPororo },
    { title: 'A Mouse Tale', year: 2012, poster: posterMouseTale },
    { title: 'Wings', year: 2012, poster: posterWings },
    { title: 'Dehli Safari', year: 2012, poster: posterDelhi },
    { title: 'The Giant King', year: 2012, poster: posterGiantKing },
    { title: 'Legend of Kung Fu Rabbit', year: 2011, poster: posterRabbit },
    { title: 'Snowflake, the White Gorilla', year: 2011, poster: posterSnowflake },
    { title: 'Birds of Paradise', year: 2010, poster: posterBirds },
    { title: 'Elephant Kingdom', year: 2009, poster: posterElephant },
  ],
  actorsHeading: 'Top actors Mychal has worked with',
  actors: [
    'Ariana Grande', 'Hilary Duff', 'Ashley Tisdale', 'Ken Jeong', 'Bella Thorne', 'Taylor Kitsch',
    'Kim Basinger', 'Ben Kingsley', 'Smash Mouth', 'Kings of Leon', 'Miranda Cosgrove', 'Josh Duhamel',
    'Rob Schneider', 'Drake Bell', 'Jon Heder', 'Carlos PenaVega', 'Alyson Stoner', 'Cary Elwes',
    'Keith David', 'Michael Clarke Duncan', 'Jason Mewes', 'Tom Arnold', 'Jon Lovitz', 'Russell Peters',
    'Cameron Dallas', 'Rebecca Black', 'Gregg Sulkin', 'Romeo Miller', 'Zachary Gordon', 'Leon Thomas III',
  ],
}

export const services = [
  {
    name: 'Production',
    blurb: 'Development through delivery: writing, casting, voice direction, animation and edit. Features, series, shorts and branded content.',
  },
  {
    name: 'Publicity & celebrity access',
    blurb: 'Campaign publicity, press and premiere strategy, and talent relationships built over a decade of casting: we get your project in front of the right names and the right rooms.',
  },
  {
    name: 'AI video services',
    blurb: 'Background replacement, person replacement, translation with lip sync. Localise an existing cut or produce new material at a fraction of the usual cost.',
  },
  {
    name: 'Localisation & dubbing',
    blurb: 'English versions of international features and the other way round: script adaptation, casting, recording, and AI-assisted lip sync where it helps.',
  },
  {
    name: 'Your own 24/7 channel',
    blurb: 'An always-on, AI-generated channel on your subject, in your voice, labelled as AI and citing its sources. We run three of our own.',
  },
  {
    name: 'Inference & tooling',
    blurb: 'The engineering behind all of it, also available on its own: pipelines, model hosting and custom tools for studios and publishers.',
  },
]

// Showcase tiles. Stills are AI-generated concept frames in public/showcase/.
// When a moving demo exists, add `video: '/showcase/<name>.mp4'` (and an
// optional `poster`) to the tile and it replaces the still.
export const showcase = [
  {
    id: 'background',
    title: 'Background replacement',
    caption:
      'Shot on a Burbank parking deck, delivered on a Mediterranean quay. Same actress, same take, same light: the location is the only thing that changed. Pickups and inserts without travel, permits or a second unit.',
    kind: 'before-after',
    before: { src: '/showcase/bg-before.webp', label: 'As shot', alt: 'Woman in a trench coat on the phone on an empty parking deck' },
    after: { src: '/showcase/bg-after.webp', label: 'Delivered', alt: 'The same woman, same pose, now on a harbour quay at golden hour' },
  },
  {
    id: 'person',
    title: 'Person replacement',
    caption:
      'Recast a finished scene for a territory, or replace a performer who is no longer available. Blocking, wardrobe, lighting and the other actor stay locked; only the face and body change.',
    kind: 'before-after',
    before: { src: '/showcase/person-before.webp', label: 'Original cast', alt: 'Two actors talking in a diner booth at night' },
    after: { src: '/showcase/person-after.webp', label: 'Recast', alt: 'The same diner scene with a different actor on the left' },
  },
  {
    id: 'lipsync',
    title: 'Translation & lip sync',
    caption:
      'Dub a finished film into a new language and match the mouth to the new line, so the dubbed version plays like an original. Subtitled territories become dubbed territories at a fraction of ADR cost.',
    kind: 'single',
    src: '/showcase/lipsync.webp',
    label: 'Original: Mandarin',
    alt: 'Close-up of an actress in period costume mid-line with a Chinese subtitle',
  },
  {
    id: 'zh-en',
    title: 'Chinese → English lip sync',
    caption:
      'The same performance, re-voiced in English with the lips re-timed to the new dialogue. A 30-second moving demo on a licensed clip is in production for AFM.',
    kind: 'single',
    src: '/showcase/zh-en.webp',
    label: 'Dubbed: English',
    alt: 'The same close-up with the English line "I won\'t wait for you anymore" as the subtitle',
    featured: true,
  },
]

export const channels = {
  url: 'https://ai-247.pages.dev/',
  // Shown as a label on the section, the player and each channel while the channels are still being built.
  // Set to '' to remove the label everywhere.
  status: 'In progress',
  intro:
    'Three channels we are building and running ourselves: every clip is written, voiced and rendered by software as it airs, marked as AI-generated, and cites its sources. They are a work in progress, so expect rough edges and the odd gap. Watch them here, then ask us for one of your own.',
  // stream = the channel Worker's HLS playlist; health = its /healthz ({ ok: boolean }).
  list: [
    {
      id: 'ai247',
      name: 'AI News',
      desc: 'Short news bulletins written and voiced by AI from public primary-source feeds, each one citing its sources.',
      stream: 'https://ai247-live.trotha01.workers.dev/live.m3u8',
      health: 'https://ai247-live.trotha01.workers.dev/healthz',
      still: '/channels/ai247.webp',
    },
    {
      id: 'lang',
      name: 'Lingua',
      desc: 'Latin, Greek and Hebrew one verse at a time: a word-by-word gloss, read slowly, then at normal speed, then in English.',
      stream: 'https://lang-live.trotha01.workers.dev/live.m3u8',
      health: 'https://lang-live.trotha01.workers.dev/healthz',
      still: '/channels/lang.webp',
    },
    {
      id: 'puddle',
      name: 'Puddle Park',
      desc: 'Felt puppets in a park, with scenes written, voiced and animated by AI as they air.',
      stream: 'https://aitv-live.mychalsimka.workers.dev/live.m3u8',
      health: 'https://aitv-live.mychalsimka.workers.dev/healthz',
      page: 'https://puddle-park.pages.dev/',
    },
  ],
}

export const deepinfer = {
  name: 'DeepInfer',
  // Replace with the 5-line pitch from knowledge-base-lab
  // reports/deepinfer-business-model.org once that report is merged.
  pitch: [
    'DeepInfer is the inference business behind Simka Entertainment: the model hosting and pipelines that run our AI video work and our 24/7 channels.',
    'We are writing up the business model now. Investors who want the full report early can ask for it below.',
  ],
  status: 'Business model report in progress',
}
