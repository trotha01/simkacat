import Section from './Section'
import { deepinfer, siteMeta } from '../data/content'

export default function DeepInfer() {
  return (
    <Section id="deepinfer" tone="white" eyebrow="For investors" title={deepinfer.name}>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-2xl">
          {deepinfer.pitch.map((p) => (
            <p key={p} className="mt-3 text-lg leading-relaxed text-ink/85 first:mt-0">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-2xl border-2 border-ink bg-cream p-6 shadow-[6px_6px_0_#1c1c1c]">
          <div className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Status</div>
          <div className="mt-1 font-fredoka text-lg font-bold">{deepinfer.status}</div>
          <a
            href={`mailto:${siteMeta.email}?subject=DeepInfer%20investor%20enquiry`}
            className="mt-4 inline-block rounded-full bg-orange px-5 py-2.5 font-fredoka font-semibold text-white no-underline shadow-[0_4px_0_#1c1c1c]"
          >
            Request the report
          </a>
        </div>
      </div>
    </Section>
  )
}
