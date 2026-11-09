import PropTypes from 'prop-types'
import { actors } from '../data/actors'

// "Top actors Mychal has worked with": six featured portraits, the rest as small
// avatars with a hover name tag, then the photo credits. Headshots are Wikimedia
// Commons files (CC BY / CC BY-SA / public domain), see src/data/actors.js.

function initials(name) {
  return name
    .split(/\s+/)
    .filter((w) => !/^(of|the|iii)$/i.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

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

export default function ActorsGrid({ heading }) {
  const featured = actors.slice(0, 6)
  const rest = actors.slice(6)
  const credited = actors.filter((a) => a.img)
  return (
    <div>
      <h3 className="mt-16 font-luckiest text-[clamp(24px,3.2vw,38px)] uppercase leading-none">{heading}</h3>
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
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
      <p className="mt-4 text-sm text-ink/70">Also: {rest.map((a) => a.name).join(', ')}.</p>

      <details className="mt-8 text-xs text-ink/60">
        <summary className="cursor-pointer font-semibold">Photo credits</summary>
        <p className="mt-2">Headshots from Wikimedia Commons, cropped and resized, used under the licence shown. Click a name for the source file.</p>
        <ul className="mt-2 columns-1 gap-8 leading-relaxed sm:columns-2 md:columns-3">
          {credited.map((a) => (
            <li key={a.slug}>
              <a href={a.page} target="_blank" rel="noreferrer" className="font-semibold">
                {a.name}
              </a>
              : {a.credit}, {a.license}
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
ActorsGrid.propTypes = { heading: PropTypes.string.isRequired }
