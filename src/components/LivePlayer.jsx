import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// One HLS player for the active channel. hls.js is loaded on demand (dynamic
// import) the first time a channel that is on air is shown, so the homepage
// bundle stays small.
// Red dot + LIVE, top left of the player, like other streaming players.
export function LiveBadge() {
  return (
    <span className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded bg-ink/70 px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-cream">
      <span className="h-2 w-2 rounded-full bg-[#e8460b] animate-pulse" />
      Live
    </span>
  )
}

export default function LivePlayer({ channel, health }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [error, setError] = useState(null)
  const onAir = health === 'ok'

  useEffect(() => {
    const video = videoRef.current
    if (!video || !onAir) return undefined
    let hls
    let cancelled = false
    setError(null)
    video.muted = true
    setMuted(true)

    // hls.js first, native HLS only as the fallback (iPhone Safari has no Media
    // Source Extensions). Chrome now answers canPlayType for HLS too, but its
    // native player stalls on streams made of short blocks joined by
    // discontinuities, which is how Puddle Park airs.
    import('hls.js').then(({ default: Hls }) => {
      if (cancelled) return
      if (Hls.isSupported()) {
        hls = new Hls({ lowLatencyMode: false, enableWorker: true })
        let recovered = 0
        hls.on(Hls.Events.ERROR, (_e, data) => {
          if (!data.fatal) return
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR && recovered++ < 3) hls.startLoad()
          else if (data.type === Hls.ErrorTypes.MEDIA_ERROR && recovered++ < 3) hls.recoverMediaError()
          else setError('The stream dropped. Reload to try again.')
        })
        hls.loadSource(channel.stream)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = channel.stream
        video.play().catch(() => {})
      } else {
        setError('This browser cannot play live streams.')
      }
    })
    return () => {
      cancelled = true
      if (hls) hls.destroy()
      video.removeAttribute('src')
      video.load()
    }
  }, [channel, onAir])

  function unmute() {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    setMuted(false)
    video.play().catch(() => {})
  }

  if (health === 'checking') {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-ink text-cream/70">
        <span className="font-mono text-xs uppercase tracking-wider">Checking {channel.name}…</span>
      </div>
    )
  }

  if (!onAir) {
    return (
      <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 bg-ink p-6 text-center text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(246,140,177,0.18),transparent_60%)]" />
        <div className="relative font-luckiest text-[clamp(26px,4vw,44px)] uppercase leading-none">Off air</div>
        <p className="relative max-w-sm text-cream/75">
          {channel.name} is between broadcasts. The other channels are live, and the schedule is on ai-247.
        </p>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full"
        playsInline
        autoPlay
        muted
        controls={!muted}
        aria-label={`${channel.name} live stream, AI-generated`}
      />
      {!error && <LiveBadge />}
      {muted && !error && (
        <button
          type="button"
          onClick={unmute}
          className="absolute inset-0 flex items-end justify-start p-4 text-left"
          aria-label={`Unmute ${channel.name}`}
        >
          <span className="rounded-full border-2 border-ink bg-slime px-4 py-2 font-luckiest text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_#1c1c1c]">
            Tap for sound
          </span>
        </button>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/80 p-6 text-center text-cream">{error}</div>
      )}
    </div>
  )
}

LivePlayer.propTypes = {
  channel: PropTypes.shape({ name: PropTypes.string.isRequired, stream: PropTypes.string.isRequired }).isRequired,
  health: PropTypes.oneOf(['checking', 'ok', 'off']).isRequired,
}
