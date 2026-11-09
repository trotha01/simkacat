import PropTypes from 'prop-types'

// Shared section shell: consistent gutters, max width, heading rhythm.
export default function Section({ id, eyebrow, title, intro, tone = 'light', children }) {
  const tones = {
    light: 'bg-cream text-ink',
    white: 'bg-white text-ink',
    dark: 'bg-ink text-cream',
    orange: 'bg-orange text-ink',
  }
  const eyebrowTone = tone === 'dark' ? 'text-slime' : 'text-[#b53406]'
  const introTone = tone === 'dark' ? 'text-cream/80' : 'text-ink/75'
  return (
    <section id={id} className={`${tones[tone]} scroll-mt-20 px-5 py-16 sm:px-8 md:py-24`}>
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          {eyebrow && (
            <div className={`font-fredoka text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}>{eyebrow}</div>
          )}
          <h2 className="mt-2 font-fredoka text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.05]">{title}</h2>
          {intro && <p className={`mt-4 text-lg leading-relaxed ${introTone}`}>{intro}</p>}
        </header>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  tone: PropTypes.oneOf(['light', 'white', 'dark', 'orange']),
  children: PropTypes.node,
}
