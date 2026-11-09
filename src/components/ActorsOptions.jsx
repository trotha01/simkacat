import PropTypes from 'prop-types'
import { actors } from '../data/actors'

// Review page: four layouts for the "Top actors Mychal has worked with" grid.
// Not linked from the site. Trevor picks one; it then replaces the name boxes in Credits.

const HEADING = 'Top actors Mychal has worked with'

function initials(name) {
  return name
    .split(/\s+/)
    .filter((w) => !/^(of|the|iii)$/i.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

// Headshot or, when no free image exists, a stylised monogram in the house colours.
function Face({ a, className = '', grayscale = false }) {
  if (a.img) {
    return (
      <img
        src={a.img}
        alt={a.name}
        loading="lazy"
        className={`h-full w-full object-cover ${grayscale ? 'grayscale transition duration-300 group-hover:grayscale-0' : ''} ${className}`}
      />
    )
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#f28cb1,#ff6a13_70%)] font-luckiest text-[2.2em] text-ink">
      {initials(a.name)}
    </div>
  )
}
Face.propTypes = { a: PropTypes.object.isRequired, className: PropTypes.string, grayscale: PropTypes.bool }

function Option({ id, letter, title, blurb, tone = 'light', children }) {
  const tones = { light: 'bg-cream text-ink', white: 'bg-white text-ink', dark: 'bg-ink text-cream', orange: 'bg-orange text-ink' }
  return (
    <section id={id} className={`${tones[tone]} scroll-mt-16 px-5 py-14 sm:px-8 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end gap-x-6 gap-y-2">
          <span className="rounded-full border-2 border-current px-4 py-1 font-luckiest text-xl">Option {letter}</span>
          <h2 className="font-luckiest text-[clamp(22px,3vw,34px)] uppercase leading-none">{title}</h2>
          <p className="basis-full font-fredoka text-base opacity-80 md:basis-auto md:text-lg">{blurb}</p>
        </div>
        <h3 className="mb-6 font-luckiest text-[clamp(24px,3.2vw,38px)] uppercase leading-none">{HEADING}</h3>
        {children}
      </div>
    </section>
  )
}
Option.propTypes = {
  id: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  tone: PropTypes.string,
  children: PropTypes.node,
}

// A: tight wall of circular avatars, grayscale until hovered, name underneath.
function OptionA() {
  return (
    <ul className="grid grid-cols-4 gap-x-3 gap-y-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {actors.map((a) => (
        <li key={a.slug} className="group flex flex-col items-center gap-2 text-center">
          <div className="aspect-square w-full overflow-hidden rounded-full border-2 border-ink bg-ink shadow-[3px_3px_0_#1c1c1c] transition group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_#1c1c1c]">
            <Face a={a} grayscale />
          </div>
          <span className="font-fredoka text-[11px] font-bold leading-tight sm:text-xs">{a.name}</span>
        </li>
      ))}
    </ul>
  )
}

// B: contact sheet / film strip: portrait frames between sprocket holes.
function OptionB() {
  const rows = [actors.slice(0, 10), actors.slice(10, 20), actors.slice(20)]
  const Sprockets = () => (
    <div className="flex justify-between px-2 py-1.5">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="h-2 w-3 rounded-[2px] bg-cream/80" />
      ))}
    </div>
  )
  return (
    <div className="flex flex-col gap-6">
      {rows.map((row, r) => (
        <div key={r} className={`overflow-hidden rounded-md bg-ink ${r % 2 ? 'md:-rotate-[0.6deg]' : 'md:rotate-[0.5deg]'}`}>
          <Sprockets />
          <ul className="flex gap-2 overflow-x-auto px-2 [scrollbar-width:none] md:grid md:grid-cols-10 md:overflow-visible">
            {row.map((a, i) => (
              <li key={a.slug} className="group relative aspect-[3/4] w-24 shrink-0 overflow-hidden bg-[#2a2a2a] md:w-auto">
                <Face a={a} className="sepia-[.25] contrast-110 group-hover:sepia-0" />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent px-1.5 pb-1.5 pt-6 font-mono text-[10px] uppercase leading-tight tracking-wide text-cream">
                  {a.name}
                </span>
                <span className="absolute left-1 top-1 font-mono text-[9px] text-slime">{String(r * 10 + i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
          <Sprockets />
        </div>
      ))}
    </div>
  )
}

// C: two auto-scrolling marquee rows, opposite directions, pausing on hover.
function OptionC() {
  const half = Math.ceil(actors.length / 2)
  const rows = [actors.slice(0, half), actors.slice(half)]
  return (
    <div className="-mx-5 flex flex-col gap-4 overflow-hidden sm:-mx-8">
      <style>{`
        @keyframes marquee-l { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-r { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        .marquee:hover .marquee-track { animation-play-state: paused }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important } }
      `}</style>
      {rows.map((row, r) => (
        <div key={r} className="marquee">
          <ul
            className="marquee-track flex w-max gap-4 px-2"
            style={{ animation: `${r ? 'marquee-r' : 'marquee-l'} ${r ? 58 : 50}s linear infinite` }}
          >
            {[...row, ...row].map((a, i) => (
              <li
                key={`${a.slug}-${i}`}
                className="flex w-48 shrink-0 items-center gap-3 rounded-2xl border-2 border-ink bg-white p-2 pr-4 shadow-[4px_4px_0_#1c1c1c]"
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-ink">
                  <Face a={a} />
                </div>
                <span className="font-fredoka text-sm font-bold leading-tight">{a.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// D: six featured large portraits, the rest as a row of small avatars.
function OptionD() {
  const featured = actors.slice(0, 6)
  const rest = actors.slice(6)
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {featured.map((a) => (
          <li key={a.slug} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-[6px_6px_0_#1c1c1c]">
              <Face a={a} className="transition duration-300 group-hover:scale-[1.04]" />
            </div>
            <div className="mt-2 font-fredoka text-base font-bold leading-tight">{a.name}</div>
          </li>
        ))}
      </ul>
      <ul className="mt-8 flex flex-wrap gap-3">
        {rest.map((a) => (
          <li key={a.slug} className="group relative">
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-ink bg-ink shadow-[3px_3px_0_#1c1c1c] sm:h-16 sm:w-16">
              <Face a={a} grayscale />
            </div>
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md border-2 border-ink bg-slime px-2 py-0.5 font-fredoka text-xs font-bold opacity-0 shadow-[2px_2px_0_#1c1c1c] transition group-hover:opacity-100">
              {a.name}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm opacity-70">Also: {rest.map((a) => a.name).join(', ')}.</p>
    </div>
  )
}

export default function ActorsOptions() {
  const credited = actors.filter((a) => a.img)
  const missing = actors.filter((a) => !a.img)
  return (
    <main className="font-nunito">
      <header className="bg-ink px-5 py-10 text-cream sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="font-caveat text-2xl font-bold text-slime">Review page, not linked from the site</div>
          <h1 className="mt-1 font-luckiest text-[clamp(28px,4vw,48px)] uppercase leading-none">Actors grid: four options</h1>
          <p className="mt-4 max-w-2xl font-fredoka text-lg text-cream/80">
            Same 30 names, same headshots (Wikimedia Commons, freely licensed), four treatments. Pick one and it replaces
            the coloured name boxes under Credits.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2">
            {['A', 'B', 'C', 'D'].map((l) => (
              <a key={l} href={`#option-${l.toLowerCase()}`} className="rounded-full border-2 border-cream px-4 py-1.5 font-luckiest text-cream no-underline hover:bg-cream hover:text-ink">
                Option {l}
              </a>
            ))}
            <a href="#credits-note" className="rounded-full border-2 border-cream/40 px-4 py-1.5 font-fredoka text-cream/70 no-underline hover:text-cream">
              Photo credits
            </a>
          </nav>
        </div>
      </header>

      <Option id="option-a" letter="A" title="Avatar wall" blurb="Tight wall of round headshots, grayscale until you hover, names underneath." tone="white">
        <OptionA />
      </Option>
      <Option id="option-b" letter="B" title="Contact sheet" blurb="Three film strips of portrait frames with sprocket holes and frame numbers." tone="light">
        <OptionB />
      </Option>
      <Option id="option-c" letter="C" title="Marquee" blurb="Two rows of headshot cards scrolling in opposite directions; hover pauses." tone="orange">
        <OptionC />
      </Option>
      <Option id="option-d" letter="D" title="Featured six" blurb="Six large portraits, then everyone else as small avatars with a hover name tag." tone="white">
        <OptionD />
      </Option>

      <section id="credits-note" className="bg-cream px-5 py-12 text-ink sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-luckiest text-xl uppercase">Photo credits</h2>
          <p className="mt-2 text-sm text-ink/70">
            Headshots from Wikimedia Commons, cropped and resized. Each is used under the licence shown; click a name for the
            source file.{missing.length > 0 && <> No free image found for {missing.map((a) => a.name).join(', ')}, shown as monograms.</>}
          </p>
          <ul className="mt-4 columns-1 gap-8 text-xs leading-relaxed text-ink/70 sm:columns-2 md:columns-3">
            {credited.map((a) => (
              <li key={a.slug}>
                <a href={a.page} target="_blank" rel="noreferrer" className="font-semibold">
                  {a.name}
                </a>
                : {a.credit}, {a.license}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
