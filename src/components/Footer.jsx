import { nav, siteMeta } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-cream sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-luckiest text-2xl uppercase">Simka Cat Productions</div>
          <p className="mt-2 max-w-sm text-cream/70">{siteMeta.tagline}</p>
          <a href={`mailto:${siteMeta.email}`} className="mt-3 inline-block font-semibold text-slime no-underline">
            {siteMeta.email}
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-cream/80 no-underline hover:text-cream">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/15 pt-6 font-gochi text-base text-cream/60">
        © {new Date().getFullYear()} {siteMeta.legalName}. AI-generated media on this site and our channels is labelled as such.
      </div>
    </footer>
  )
}
