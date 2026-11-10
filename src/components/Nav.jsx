import { useState } from 'react'
import logo from '../assets/simkacat-sparkle-logo.png'
import { nav, siteMeta } from '../data/content'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <img src={logo} alt="" width={1424} height={801} className="h-9 w-auto" />
          <span className="font-luckiest text-lg uppercase text-ink">{siteMeta.name}</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="font-fredoka text-sm font-semibold text-ink no-underline hover:text-[#b53406]">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${siteMeta.email}`}
              className="rounded-full bg-ink px-4 py-2 font-fredoka text-sm font-semibold text-cream no-underline hover:bg-[#b53406] hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-ink/20 px-3 py-2 font-fredoka text-sm font-semibold md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <ul className="border-t border-ink/10 bg-cream px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-fredoka text-base font-semibold text-ink no-underline"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${siteMeta.email}`} className="block py-3 font-fredoka text-base font-semibold text-[#b53406] no-underline">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
