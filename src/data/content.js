// Single source of truth for site copy. Nothing here is invented: every credit
// carries the public source it was read from.

export const siteMeta = {
  name: 'Simka Cat',
  legalName: 'Simka Cat Productions',
  url: 'https://simka.cat',
  tagline: 'A production studio by Trevor Rothaus and Mychal Simka.',
  description:
    'Simka Cat Productions is the studio of Trevor Rothaus and Mychal Simka: production, publicity and celebrity access, AI video (background and person replacement, translation and lip sync), and always-on AI channels.',
  email: 'hello@simka.cat',
}

export const nav = [
  { href: '#who', label: 'Who we are' },
  { href: '#credits', label: 'Credits' },
  { href: '#services', label: 'Services' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#channels', label: 'Channels' },
  { href: '#deepinfer', label: 'DeepInfer' },
]

export const founders = [
  {
    name: 'Mychal Simka',
    role: 'Co-founder · Producer, writer, casting director',
    photo: null, // add a headshot (src/assets/mychal.webp) and import it here
    bio: [
      'Mychal has spent more than a decade making animated features: writing, casting, producing and directing English-language versions for international release. The studio carries his name.',
      'He brings the talent relationships, the casting eye and the publicity instincts that get a project noticed.',
    ],
    links: [
      { label: 'IMDb', url: 'https://www.imdb.com/name/nm2949944/' },
      { label: 'TMDB', url: 'https://www.themoviedb.org/person/1272720-mychal-simka' },
    ],
  },
  {
    name: 'Trevor Rothaus',
    role: 'Co-founder · Engineering and scale',
    photo: null, // add a headshot (src/assets/trevor.webp) and import it here
    bio: [
      'Trevor builds systems that scale. At SendGrid he was a core developer through the years that took the company from a Series C startup to a multi-billion-dollar public company and its acquisition by Twilio, working on infrastructure that delivered email for tens of thousands of customers.',
      'He applies the same engineering to media: the AI video pipeline, the inference stack and the three 24/7 channels behind Simka Cat all run unattended, so the studio can take on work at a volume and price a traditional shop cannot.',
    ],
    links: [
      { label: 'Claritas Studios', url: 'https://claritasstudios.com/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/trevorrothaus/' },
    ],
  },
]

// Credits. `source` says where each credit was read.
export const credits = {
  mychal: [
    { title: 'Elephant Kingdom', year: 2016, role: 'Writer', source: 'TMDB' },
    { title: "Huevos: Little Rooster's Egg-Cellent Adventure", year: 2015, role: 'Screenplay, producer, casting', source: 'TMDB' },
    { title: 'I Am Here', year: 2015, role: 'Casting', source: 'TMDB' },
    { title: 'Wings: Sky Force Heroes', year: 2014, role: 'Director', source: 'TMDB' },
    { title: 'Frog Kingdom', year: 2013, role: 'Writer; voice of Froggy Ababwa', source: 'TMDB' },
    { title: 'A Mouse Tale', year: 2012, role: 'Producer, writer, English-version director', source: 'IMDb' },
    { title: 'Wings', year: 2012, role: 'Voice (Radio Announcer)', source: 'TMDB' },
    { title: 'The Portal', year: 2010, role: 'Editor', source: 'TMDB' },
    { title: 'The Adventures of Bunny Bravo', year: 2022, role: 'Producer', source: 'IMDb' },
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
  list: [
    {
      id: 'ai247',
      name: 'AI News',
      desc: 'Short news bulletins written and voiced by AI from public primary-source feeds, each one citing its sources.',
    },
    {
      id: 'lang',
      name: 'Lingua',
      desc: 'Latin, Greek and Hebrew one verse at a time: a word-by-word gloss, read slowly, then at normal speed, then in English.',
    },
    {
      id: 'puddle',
      name: 'Puddle Park',
      desc: 'Felt puppets in a park, with scenes written, voiced and animated by AI as they air.',
    },
  ],
}

export const deepinfer = {
  name: 'DeepInfer',
  // Replace with the 5-line pitch from knowledge-base-lab
  // reports/deepinfer-business-model.org once that report is merged.
  pitch: [
    'DeepInfer is the inference business behind Simka Cat: the model hosting and pipelines that run our AI video work and our 24/7 channels.',
    'We are writing up the business model now. Investors who want the full report early can ask for it below.',
  ],
  status: 'Business model report in progress',
}
