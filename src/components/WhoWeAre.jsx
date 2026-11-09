import Section from './Section'
import Todo from './Todo'
import { founders } from '../data/content'

const isTodo = (s) => s.startsWith('TODO')

export default function WhoWeAre() {
  return (
    <Section
      id="who"
      eyebrow="Who we are"
      title="Two founders. One director who knows how a show gets made, one engineer who builds the machines that make them."
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {founders.map((f) => (
          <article key={f.name} className="flex flex-col gap-5">
            <div className="aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-ink bg-[repeating-linear-gradient(45deg,#fff_0_16px,#f3f1e4_16px_32px)] shadow-[8px_8px_0_#1c1c1c]">
              {f.photo ? (
                <img src={f.photo} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center">
                  <Todo>photo of {f.name}</Todo>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-fredoka text-3xl font-bold">{f.name}</h3>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#b53406]">{f.role}</div>
              {f.bio.map((p) =>
                isTodo(p) ? (
                  <div key={p} className="mt-4">
                    <Todo>{p.replace(/^TODO\([^)]*\):\s*/, '')}</Todo>
                  </div>
                ) : (
                  <p key={p} className="mt-4 leading-relaxed text-ink/80">
                    {p}
                  </p>
                ),
              )}
              <ul className="mt-4 flex flex-wrap gap-3">
                {f.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer" className="font-semibold underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
