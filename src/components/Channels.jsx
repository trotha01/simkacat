import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import LivePlayer from './LivePlayer'
import { channels, siteMeta } from '../data/content'

// Static previews (the claude.ai artifact) cannot reach the stream Workers, so
// they show a "Watch live" card per channel instead of the player.
const STATIC_PREVIEW = import.meta.env.VITE_STATIC_PREVIEW === '1'

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
        // Only an explicit { ok: false } means off air. If the health check itself
        // cannot be reached (network, sandbox), assume on air and let the player try.
        .then((d) => setHealth((h) => ({ ...h, [c.id]: d && d.ok === false ? 'off' : 'ok' })))
        .catch(() => setHealth((h) => ({ ...h, [c.id]: 'ok' })))
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
  const tabState = (c) => (STATIC_PREVIEW ? (c.still ? 'ok' : 'off') : health[c.id])

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
              const state = tabState(c)
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
          {STATIC_PREVIEW ? (
            <WatchLiveCard channel={current} />
          ) : visible ? (
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

function WatchLiveCard({ channel }) {
  const href = `${channels.url}#${channel.id}`
  if (!channel.still) {
    return (
      <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 bg-ink p-6 text-center text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(246,140,177,0.18),transparent_60%)]" />
        <div className="relative font-luckiest text-[clamp(26px,4vw,44px)] uppercase leading-none">Off air</div>
        <p className="relative max-w-sm text-cream/75">{channel.name} is between broadcasts. The schedule is on ai-247.</p>
      </div>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group relative block aspect-video w-full bg-black no-underline">
      <img src={channel.still} alt={`${channel.name}, recent frame`} className="h-full w-full object-cover opacity-90 group-hover:opacity-100" />
      <span className="absolute inset-0 flex items-end justify-start p-4">
        <span className="rounded-full border-2 border-ink bg-slime px-4 py-2 font-luckiest text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_#1c1c1c]">
          ▶ Watch live on ai-247
        </span>
      </span>
      <span className="absolute right-4 top-4 rounded border border-cream/40 bg-ink/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream">
        Live stream opens in a new tab
      </span>
    </a>
  )
}
