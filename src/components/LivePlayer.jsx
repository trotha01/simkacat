import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// One HLS player for the active channel. It never autoplays: the visitor clicks
// the overlay and the stream starts at the live edge with sound. hls.js is
// loaded on demand (dynamic import), so the homepage bundle stays small.
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
  const hlsRef = useRef(null)
  const hlsLib = useRef(null) // the hls.js module, fetched ahead of the click
  const gen = useRef(0) // start() calls so far; a late hls.js import must not attach a stale stream
  const watchingRef = useRef(false)
  // Nothing plays until the visitor clicks the overlay (no muted autoplay). `watching` is true from that click on.
  const [watching, setWatchingState] = useState(false)
  const [error, setError] = useState(null)
  const onAir = health === 'ok'

  const setWatching = useCallback((on) => {
    watchingRef.current = on
    setWatchingState(on)
  }, [])

  const stop = useCallback(() => {
    gen.current += 1
    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }
    const video = videoRef.current
    if (video) {
      video.removeAttribute('src')
      video.load()
    }
  }, [])

  // Start the stream at the live edge, with sound. Called from the overlay's click handler, so play() runs inside
  // the visitor's gesture: that is what desktop and phone browsers require before they allow audio.
  const start = useCallback(
    (stream) => {
      const video = videoRef.current
      if (!video) return
      stop()
      const mine = gen.current
      setError(null)
      video.muted = false
      const play = () => {
        const p = video.play()
        if (p && p.catch) {
          p.catch((e) => {
            // The browser still refused sound (no gesture on this element): back to the overlay.
            if (e && e.name === 'NotAllowedError' && mine === gen.current) {
              stop()
              setWatching(false)
            }
          })
        }
      }
      // hls.js first, native HLS only as the fallback (iPhone Safari before 17.1 has no Media Source Extensions).
      // Chrome now answers canPlayType for HLS too, but its native player stalls on streams made of short blocks
      // joined by discontinuities, which is how Puddle Park airs.
      const attach = (Hls) => {
        if (Hls.isSupported()) {
          const hls = new Hls({ lowLatencyMode: false, enableWorker: true })
          hlsRef.current = hls
          let recovered = 0
          hls.on(Hls.Events.ERROR, (_e, data) => {
            if (!data.fatal) return
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR && recovered++ < 3) hls.startLoad()
            else if (data.type === Hls.ErrorTypes.MEDIA_ERROR && recovered++ < 3) hls.recoverMediaError()
            else setError('The stream dropped. Reload to try again.')
          })
          hls.loadSource(stream)
          hls.attachMedia(video)
          play()
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = stream
          play()
        } else {
          setError('This browser cannot play live streams.')
        }
      }
      if (hlsLib.current) {
        attach(hlsLib.current)
        return
      }
      // hls.js has not arrived yet. Calling play() now, still inside the click, marks the element as started by
      // the visitor (Safari remembers that), so the play() after the import is allowed to make sound.
      const blessed = video.play()
      if (blessed && blessed.catch) blessed.catch(() => {})
      import('hls.js').then(({ default: Hls }) => {
        hlsLib.current = Hls
        if (mine === gen.current) attach(Hls)
      })
    },
    [stop, setWatching],
  )

  // Fetch hls.js as soon as the player is shown (dynamic import keeps it out of the homepage bundle), so the
  // click can attach and play in the same tick.
  useEffect(() => {
    if (!onAir || hlsLib.current) return
    import('hls.js').then(({ default: Hls }) => {
      hlsLib.current = Hls
    })
  }, [onAir])

  // Changing channel after the click keeps playing, with sound; before the click nothing loads.
  useEffect(() => {
    if (onAir && watchingRef.current) start(channel.stream)
    return stop
  }, [channel.stream, onAir, start, stop])

  function watch() {
    setWatching(true)
    start(channel.stream)
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
        preload="none"
        controls={watching}
        aria-label={`${channel.name} live stream, AI-generated`}
      />
      {!watching && !error && (
        <button
          type="button"
          onClick={watch}
          data-watch
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink text-cream"
          aria-label={`Watch ${channel.name} live, with sound`}
        >
          {channel.still && (
            <img src={channel.still} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-75" />
          )}
          <span className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-ink bg-slime text-ink shadow-[6px_6px_0_#1c1c1c] transition-transform group-hover:scale-110 max-sm:h-20 max-sm:w-20">
            <svg viewBox="0 0 24 24" className="ml-1.5 h-12 w-12" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="relative rounded-full border-2 border-ink bg-slime px-4 py-2 font-luckiest text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_#1c1c1c]">
            Watch live with sound
          </span>
        </button>
      )}
      {!error && <LiveBadge />}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/80 p-6 text-center text-cream">{error}</div>
      )}
    </div>
  )
}

LivePlayer.propTypes = {
  channel: PropTypes.shape({ name: PropTypes.string.isRequired, stream: PropTypes.string.isRequired, still: PropTypes.string }).isRequired,
  health: PropTypes.oneOf(['checking', 'ok', 'off']).isRequired,
}
