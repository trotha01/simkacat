import PropTypes from 'prop-types'
import Section from './Section'
import { showcase } from '../data/content'

// Sample placeholder shown until a real clip exists. It is deliberately
// labelled so nobody mistakes it for finished work.
function Sample({ label, hue }) {
  return (
    <div className={`relative flex h-full w-full items-end bg-gradient-to-br ${hue} p-3`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40" />
      <span className="relative rounded bg-black/60 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
        {label}
      </span>
    </div>
  )
}
Sample.propTypes = { label: PropTypes.string.isRequired, hue: PropTypes.string.isRequired }

function Media({ item }) {
  if (item.media) {
    return <video src={item.media} className="h-full w-full object-cover" autoPlay muted loop playsInline controls />
  }
  if (item.kind === 'before-after') {
    return (
      <div className="grid h-full grid-cols-2">
        <Sample label={`${item.before.label} · sample`} hue={item.before.hue} />
        <Sample label={`${item.after.label} · sample`} hue={item.after.hue} />
      </div>
    )
  }
  return <Sample label="Sample placeholder · real demo coming" hue={item.hue} />
}
Media.propTypes = { item: PropTypes.object.isRequired }

export default function Showcase() {
  return (
    <Section
      id="showcase"
      tone="dark"
      eyebrow="Showcase"
      title="AI video, shown not told"
      intro="Background replacement, person replacement, translation and lip sync. The tiles below are sample placeholders until our first client-cleared demos land; the Chinese-to-English lip-sync demo is in production."
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
                {!item.media && (
                  <span className="rounded-full border border-slime/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slime">
                    sample
                  </span>
                )}
              </div>
              <p className="text-cream/75">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
