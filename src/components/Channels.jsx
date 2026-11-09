import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import LivePlayer from './LivePlayer'
import { channels, siteMeta } from '../data/content'

// The player and the health checks only start once the section scrolls into
// view, so the rest of the homepage is not slowed down by three live streams.
export default function Channels() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(channels.list[0].id)
  const userPicked = useRef(false)
  const [health, setHealth] = useState(() => Object.fromEntries(channels.list.map((c) => [c.id, 'checking'])))

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const ctrl = new AbortController()
    channels.list.forEach((c) => {
      fetch(c.health, { cache: 'no-store', signal: ctrl.signal })
        .then((r) => r.json())
        .then((d) => setHealth((h) => ({ ...h, [c.id]: d && d.ok ? 'ok' : 'off' })))
        .catch(() => setHealth((h) => ({ ...h, [c.id]: 'off' })))
    })
    return () => ctrl.abort()
  }, [visible])

  // If the default channel turns out to be off air, jump to the first live one,
  // unless the visitor has already chosen a tab themselves.
  useEffect(() => {
    if (!userPicked.current && health[active] === 'off') {
      const live = channels.list.find((c) => health[c.id] === 'ok')
      if (live) setActive(live.id)
    }
  }, [health, active])

  const current = channels.list.find((c) => c.id === active)

  return (
    <div ref={sectionRef}>
      <Section
        id="channels"
        tone="orange"
        eyebrow="Our 24/7 AI channels"
        title="Always on, always labelled"
        intro="Three channels we run ourselves: every clip is written, voiced and rendered by software as it airs, marked as AI-generated, and cites its sources. Watch them here, then ask us for one of your own."
      >
        <div className="overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-[8px_8px_0_#1c1c1c]">
          <div role="tablist" aria-label="Channel" className="flex flex-wrap gap-1 border-b border-cream/15 bg-ink p-2">
            {channels.list.map((c) => {
              const state = health[c.id]
              const selected = c.id === active
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => {
                    userPicked.current = true
                    setActive(c.id)
                  }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 font-luckiest text-sm uppercase tracking-wide ${
                    selected ? 'bg-slime text-ink' : 'text-cream/80 hover:bg-cream/10'
                  }`}
                >
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      state === 'ok' ? 'bg-[#e8460b]' : state === 'off' ? 'bg-cream/30' : 'bg-cream/50 animate-pulse'
                    }`}
                  />
                  {c.name}
                  {state === 'off' && <span className="font-mono text-[10px] normal-case tracking-normal opacity-70">off air</span>}
                </button>
              )
            })}
            <span className="ml-auto self-center rounded border border-cream/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream/70">
              AI-generated
            </span>
          </div>
          {visible ? (
            <LivePlayer channel={current} health={health[active]} />
          ) : (
            <div className="aspect-video w-full bg-ink" />
          )}
          <div className="flex flex-col gap-2 bg-cream p-5 text-ink sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-2xl leading-relaxed">
              <strong className="font-fredoka">{current.name}.</strong> {current.desc}
            </p>
            <a
              href={`${channels.url}#${current.id}`}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 font-semibold underline"
            >
              Open on ai-247 →
            </a>
          </div>
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
    </div>
  )
}
