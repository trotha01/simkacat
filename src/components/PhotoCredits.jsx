import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { actors } from '../data/actors'

// Licence names as Commons reports them -> deed URLs.
const LICENSE_URLS = {
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Public domain': 'https://commons.wikimedia.org/wiki/Commons:Licensing#Material_in_the_public_domain',
}

function licenseUrl(name) {
  return LICENSE_URLS[name] || 'https://commons.wikimedia.org/wiki/Commons:Licensing'
}

// Shared modal shell: Escape closes, click on the backdrop closes.
function Modal({ onClose, label, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full border-2 border-cream/60 px-3 py-1 font-luckiest text-cream hover:bg-cream hover:text-ink"
      >
        ×
      </button>
      <div onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-3xl overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
Modal.propTypes = { onClose: PropTypes.func.isRequired, label: PropTypes.string.isRequired, children: PropTypes.node }

// Full-screen headshot with a one-line credit.
export function Lightbox({ actor, onClose }) {
  return (
    <Modal onClose={onClose} label={actor.name}>
      <figure className="mx-auto flex max-w-md flex-col items-center text-center text-cream">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-cream/30 bg-ink">
          <img src={actor.img} alt={actor.name} className="h-full w-full object-cover" />
        </div>
        <figcaption className="mt-3">
          <div className="font-fredoka text-xl font-bold">{actor.name}</div>
          <div className="mt-1 font-mono text-[11px] text-cream/60">
            Photo: {actor.credit},{' '}
            <a href={licenseUrl(actor.license)} target="_blank" rel="noreferrer" className="text-cream/60 underline">
              {actor.license}
            </a>
          </div>
        </figcaption>
      </figure>
    </Modal>
  )
}
Lightbox.propTypes = { actor: PropTypes.object.isRequired, onClose: PropTypes.func.isRequired }

// Full list of headshot credits, opened from the footer.
export function PhotoCreditsModal({ onClose }) {
  const credited = actors.filter((a) => a.img)
  const licenses = [...new Set(credited.map((a) => a.license))].sort()
  return (
    <Modal onClose={onClose} label="Photo credits">
      <div className="rounded-2xl border-2 border-ink bg-cream p-6 text-ink sm:p-8">
        <h2 className="font-luckiest text-2xl uppercase">Photo credits</h2>
        <p className="mt-2 text-sm text-ink/70">
          Headshots are from Wikimedia Commons, used under the licence named beside each. Images may be cropped. Licences:{' '}
          {licenses.map((l, i) => (
            <span key={l}>
              {i > 0 && ', '}
              <a href={licenseUrl(l)} target="_blank" rel="noreferrer">
                {l}
              </a>
            </span>
          ))}
          .
        </p>
        <ul className="mt-4 columns-1 gap-8 text-sm leading-relaxed sm:columns-2">
          {credited.map((a) => (
            <li key={a.slug}>
              <a href={a.page} target="_blank" rel="noreferrer" className="font-semibold">
                {a.name}
              </a>
              : {a.credit}, {a.license}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  )
}
PhotoCreditsModal.propTypes = { onClose: PropTypes.func.isRequired }
