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
            <div className={`font-caveat text-[clamp(22px,2.4vw,30px)] font-bold ${eyebrowTone}`}>{eyebrow}</div>
          )}
          <h2 className="mt-1 font-luckiest text-[clamp(30px,4.5vw,56px)] uppercase leading-[0.95]">{title}</h2>
          {intro && <p className={`mt-5 font-fredoka text-[clamp(17px,1.6vw,21px)] font-medium leading-[1.4] ${introTone}`}>{intro}</p>}
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
