import Section from './Section'
import { founders } from '../data/content'

export default function WhoWeAre() {
  return (
    <Section
      id="who"
      eyebrow="About us"
      title="Two founders. One director who knows how a show gets made, one engineer who builds the machines that make them."
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {founders.map((f) => (
          <article key={f.name} className="flex flex-col gap-5">
            {f.photo && (
              <div className="aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-ink shadow-[8px_8px_0_#1c1c1c]">
                <img src={f.photo} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            )}
            <div>
              <h3 className="font-fredoka text-3xl font-bold">{f.name}</h3>
              <div className="mt-1 font-caveat text-[22px] text-[#b53406]">{f.role}</div>
              {f.bio.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              <ul className="mt-4 flex flex-wrap gap-3">
                {(f.links || []).map((l) => (
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
