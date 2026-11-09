import Section from './Section'
import { channels, siteMeta } from '../data/content'

export default function Channels() {
  return (
    <Section
      id="channels"
      tone="orange"
      eyebrow="Our 24/7 AI channels"
      title="Always on, always labelled"
      intro="Three channels we run ourselves: every clip is written, voiced and rendered by software as it airs, marked as AI-generated, and cites its sources. Watch them live, then ask us for one of your own."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {channels.list.map((c) => (
          <a
            key={c.id}
            href={`${channels.url}#${c.id}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border-2 border-ink bg-cream p-6 text-ink no-underline shadow-[6px_6px_0_#1c1c1c] hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8460b] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e8460b]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60">live · AI-generated</span>
            </div>
            <h3 className="mt-3 font-luckiest text-2xl uppercase">{c.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-ink/80">{c.desc}</p>
            <span className="mt-4 font-semibold underline group-hover:text-[#b53406]">Watch →</span>
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border-2 border-ink bg-white p-6">
        <p className="flex-1 text-lg">
          <strong>Want your own channel?</strong> A 24/7 stream on your subject, in your brand and voice, with the same
          AI labelling and source citations. We build and run it.
        </p>
        <a
          href={`mailto:${siteMeta.email}?subject=Our%20own%2024%2F7%20channel`}
          className="rounded-full bg-ink px-6 py-3 font-fredoka font-semibold text-cream no-underline hover:bg-[#b53406] hover:text-white"
        >
          Get your channel
        </a>
      </div>
    </Section>
  )
}
