import Section from './Section'
import { credits } from '../data/content'

export default function Credits() {
  return (
    <Section id="credits" tone="white" eyebrow="Credits" title="Mychal Simka: twelve animated features" intro={credits.rolesLine}>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {credits.films.map((f) => (
          <li key={f.title} className="flex flex-col gap-2">
            <div className="aspect-[2/3] overflow-hidden rounded-xl border-2 border-ink bg-ink shadow-[5px_5px_0_#1c1c1c]">
              <img src={f.poster} alt={`${f.title} poster`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="font-fredoka text-sm font-bold leading-tight">{f.title}</div>
              <div className="text-xs text-ink/60">{f.year}</div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-luckiest text-[clamp(24px,3.2vw,38px)] uppercase leading-none">{credits.actorsHeading}</h3>
      {import.meta.env.VITE_STATIC_PREVIEW === '1' && (
        <p className="mt-4 rounded-xl border-2 border-dashed border-ink/40 bg-slime/30 px-4 py-3 text-sm">
          <strong>Review:</strong> this grid is being redesigned with headshots.{' '}
          <a href="./actors-options.html" target="_blank" rel="noreferrer" className="font-semibold">
            See the four layout options →
          </a>
        </p>
      )}
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {credits.actors.map((name, i) => (
          <li
            key={name}
            className={`flex min-h-[64px] items-center rounded-xl border-2 border-ink px-4 py-3 shadow-[4px_4px_0_#1c1c1c] ${
              i % 3 === 0 ? 'bg-slime' : i % 3 === 1 ? 'bg-pink/70' : 'bg-cream'
            }`}
          >
            <span className="font-fredoka text-lg font-bold leading-tight">{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
