import PropTypes from 'prop-types'
import Section from './Section'
import { showcase } from '../data/content'

function Still({ src, alt, label }) {
  return (
    <div className="relative h-full w-full">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded bg-black/65 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
          {label}
        </span>
      )}
    </div>
  )
}
Still.propTypes = { src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired, label: PropTypes.string }

function Media({ item }) {
  if (item.video) {
    return <video src={item.video} poster={item.poster} className="h-full w-full object-cover" autoPlay muted loop playsInline controls />
  }
  if (item.kind === 'before-after') {
    return (
      <div className="grid h-full grid-cols-2">
        <Still src={item.before.src} alt={item.before.alt} label={item.before.label} />
        <Still src={item.after.src} alt={item.after.alt} label={item.after.label} />
      </div>
    )
  }
  return <Still src={item.src} alt={item.alt} label={item.label} />
}
Media.propTypes = { item: PropTypes.object.isRequired }

export default function Showcase() {
  return (
    <Section
      id="showcase"
      tone="dark"
      eyebrow="Showcase"
      title="AI video, shown not told"
      intro="Background replacement, person replacement, translation and lip sync: the three jobs that make a finished film sell into more territories without a reshoot. The stills below are AI-generated concept frames; moving demos are in production."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {showcase.map((item) => (
          <figure
            key={item.id}
            className={`group overflow-hidden rounded-2xl border border-cream/15 bg-white/5 ${item.featured ? 'md:col-span-2' : ''}`}
          >
            <div className={`${item.featured ? 'aspect-[21/9]' : 'aspect-video'} w-full overflow-hidden`}>
              <Media item={item} />
            </div>
            <figcaption className="flex flex-col gap-1 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-fredoka text-xl font-bold text-cream">{item.title}</h3>
                <span className="rounded-full border border-slime/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slime">
                  {item.video ? 'demo' : 'AI concept still'}
                </span>
              </div>
              <p className="text-cream/75">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
