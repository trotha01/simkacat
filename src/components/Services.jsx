import Section from './Section'
import { services, siteMeta } from '../data/content'

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What we do for clients"
      intro="From a one-line idea to a finished, localised, promoted release. Hire the whole studio or one piece of it."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={s.name}
            className={`rounded-2xl border-2 border-ink p-6 shadow-[6px_6px_0_#1c1c1c] ${
              i === 1 ? 'bg-slime' : i === 2 ? 'bg-pink/70' : 'bg-white'
            }`}
          >
            <h3 className="font-luckiest text-xl uppercase leading-tight">{s.name}</h3>
            <p className="mt-3 leading-relaxed text-ink/80">{s.blurb}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <a
          href={`mailto:${siteMeta.email}?subject=Project%20enquiry`}
          className="inline-block rounded-full bg-ink px-6 py-3 font-fredoka font-semibold text-cream no-underline hover:bg-[#b53406] hover:text-white"
        >
          Tell us about your project
        </a>
      </div>
    </Section>
  )
}
