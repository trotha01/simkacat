import PropTypes from 'prop-types'
import Section from './Section'
import Todo from './Todo'
import { credits } from '../data/content'

function CreditList({ heading, items }) {
  return (
    <div>
      <h3 className="font-fredoka text-2xl font-bold">{heading}</h3>
      <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
        {items.map((c, i) => {
          const todo = c.role.startsWith('TODO') || c.title.startsWith('TODO')
          return (
            <li key={`${c.title}-${i}`} className="grid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4">
              <div>
                {c.title.startsWith('TODO') ? (
                  <Todo>{c.title.replace(/^TODO\([^)]*\):\s*/, '')}</Todo>
                ) : (
                  <span className="font-semibold">{c.title}</span>
                )}
                {c.year !== '' && <span className="ml-2 text-ink/60">{c.year}</span>}
                <div className="text-sm text-ink/80">
                  {todo && c.role.startsWith('TODO') ? (
                    <Todo>{c.role.replace(/^TODO\([^)]*\):\s*/, '')}</Todo>
                  ) : (
                    c.role
                  )}
                </div>
              </div>
              {c.source && <div className="text-xs uppercase tracking-wider text-ink/50">via {c.source}</div>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
CreditList.propTypes = { heading: PropTypes.string.isRequired, items: PropTypes.array.isRequired }

export default function Credits() {
  return (
    <Section
      id="credits"
      tone="white"
      eyebrow="Credits"
      title="Selected credits"
      intro="Every title below was read from a public listing (TMDB, IMDb, Claritas Studios); the source is shown beside each credit. Entries marked TODO are listed on those pages but their role still needs confirming."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <CreditList heading="Mychal Simka" items={credits.mychal} />
        <div className="flex flex-col gap-12">
          <CreditList heading="Trevor Rothaus" items={credits.trevor} />
          <div>
            <h3 className="font-fredoka text-2xl font-bold">Simka Cat</h3>
            <div className="mt-4">
              <Todo>joint studio credits (client work, channels) once any are public</Todo>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
