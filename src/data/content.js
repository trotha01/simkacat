// Single source of truth for site copy. Anything marked TODO(Trevor) is a
// placeholder for Trevor to confirm or fill in before the live deploy. Nothing
// here is invented: every credit carries the public source it was read from.

export const siteMeta = {
  name: 'Simka Cat',
  legalName: 'Simka Cat Productions',
  url: 'https://simka.cat',
  tagline: 'A production studio by Trevor Rothaus and Mychal Simka.',
  description:
    'Simka Cat Productions is the studio of Trevor Rothaus and Mychal Simka: production, publicity and celebrity access, AI video (background and person replacement, translation and lip sync), and always-on AI channels.',
  // TODO(Trevor): confirm the contact address before launch.
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
    photo: null, // TODO(Trevor): add a headshot (src/assets/mychal.webp) and import it here.
    bio: [
      'Mychal has spent more than a decade making animated features: writing, casting, producing and directing English-language versions for international release. The studio carries his name.',
      // The claim below is copied from the previous simka.cat site; keep it only if Trevor confirms it.
      'TODO(Trevor): confirm — "twelve animated features for Lionsgate; voice casts including Ariana Grande, Hilary Duff and Smash Mouth" (copied from the previous site).',
    ],
    links: [
      { label: 'IMDb', url: 'https://www.imdb.com/name/nm2949944/' },
      { label: 'TMDB', url: 'https://www.themoviedb.org/person/1272720-mychal-simka' },
    ],
  },
  {
    name: 'Trevor Rothaus',
    role: 'Co-founder · Engineer, producer',
    photo: null, // TODO(Trevor): add a headshot (src/assets/trevor.webp) and import it here.
    bio: [
      'Trevor is a software engineer turned producer. He founded and runs Claritas Studios, a nonprofit animation studio, and built its pipeline end to end: story, animation, voice, edit, delivery.',
      'Before that he was a developer at SendGrid, from Series C through its acquisition by Twilio. He builds the AI tooling and the 24/7 channels behind Simka Cat.',
    ],
    links: [
      { label: 'Claritas Studios', url: 'https://claritasstudios.com/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/trevorrothaus/' },
    ],
  },
]

// Credits. `source` says where the credit was read. Roles starting with TODO
// were not verified on the source page and need Trevor to confirm or delete.
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
    { title: "The Little Penguin Pororo's Racing Adventure", year: 2013, role: 'TODO(Trevor): role', source: 'IMDb cast & crew listing' },
    { title: 'Legend of Kung Fu Rabbit', year: 2011, role: 'TODO(Trevor): role', source: 'IMDb cast & crew listing' },
    { title: 'X-Men Origins: Wolverine', year: 2009, role: 'TODO(Trevor): role', source: 'IMDb "known for"' },
    { title: 'The Final Destination', year: 2009, role: 'TODO(Trevor): role', source: 'IMDb "known for"' },
  ],
  trevor: [
    { title: 'Claritas Studios animated shorts (prayers, saints, Daisy & Sheep)', year: '2021–', role: 'Founder & CEO, producer', source: 'claritasstudios.com' },
    { title: 'Saint Joseph animation (Kickstarter)', year: 2025, role: 'Producer', source: 'blog.claritasstudios.com' },
    { title: 'TODO(Trevor): add further titles', year: '', role: '', source: '' },
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

// Showcase tiles. `media` is null until a real demo exists: the tile then renders
// a clearly labelled sample placeholder (see Showcase.jsx). Put real clips in
// public/showcase/ and set media to the path, e.g. '/showcase/zh-en.mp4'.
export const showcase = [
  {
    id: 'background',
    title: 'Background replacement',
    caption: 'Shoot anywhere, set it anywhere. The subject stays; the world behind them changes.',
    kind: 'before-after',
    media: null,
    before: { label: 'Before', hue: 'from-stone-700 to-stone-900' },
    after: { label: 'After', hue: 'from-sky-500 to-indigo-700' },
  },
  {
    id: 'person',
    title: 'Person replacement',
    caption: 'Recast a finished scene. Same blocking, same light, a different performer.',
    kind: 'before-after',
    media: null,
    before: { label: 'Original', hue: 'from-amber-700 to-stone-900' },
    after: { label: 'Recast', hue: 'from-rose-500 to-fuchsia-800' },
  },
  {
    id: 'lipsync',
    title: 'Translation & lip sync',
    caption: 'Translate the dialogue, re-voice it, and match the mouth to the new language.',
    kind: 'video',
    media: null,
    hue: 'from-emerald-600 to-teal-900',
  },
  {
    id: 'zh-en',
    title: 'Demo: Chinese → English lip sync',
    caption: 'A Mandarin scene re-voiced in English with matched lip movement. Sample slot: the real clip is in production.',
    kind: 'video',
    media: null, // TODO(Trevor): set to '/showcase/zh-en.mp4' once the demo clip is in public/showcase/.
    hue: 'from-red-600 to-orange-900',
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
  // TODO(Trevor): replace with the 5-line pitch from knowledge-base-lab
  // reports/deepinfer-business-model.org once that report is merged.
  pitch: [
    'DeepInfer is the inference business behind Simka Cat: the model hosting and pipelines that run our AI video work and our 24/7 channels.',
    'We are writing up the business model now. Investors who want the full report early can ask for it below.',
  ],
  status: 'Business model report in progress',
}
