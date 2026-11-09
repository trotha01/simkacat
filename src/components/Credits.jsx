import Section from './Section'
import { credits } from '../data/content'

export default function Credits() {
  return (
    <Section
      id="credits"
      tone="white"
      eyebrow="Credits"
      title="Selected credits"
      intro="Mychal Simka's film credits, each read from a public listing (TMDB or IMDb); the source is shown beside every title."
    >
      <ul className="divide-y divide-ink/10 border-y border-ink/10 md:columns-2 md:gap-12">
        {credits.mychal.map((c) => (
          <li
            key={c.title}
            className="grid break-inside-avoid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4"
          >
            <div>
              <span className="font-semibold">{c.title}</span>
              <span className="ml-2 text-ink/60">{c.year}</span>
              <div className="text-sm text-ink/80">{c.role}</div>
            </div>
            <div className="text-xs uppercase tracking-wider text-ink/50">via {c.source}</div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
