import logo from '../assets/simkacat-sparkle-logo.png'
import { siteMeta } from '../data/content'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-slime/50 blur-3xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="font-caveat text-[clamp(22px,2.6vw,32px)] font-bold text-[#b53406]">
            {siteMeta.legalName}{' '}
            <a href={siteMeta.imdb} target="_blank" rel="noreferrer" className="align-middle font-nunito text-sm font-semibold text-ink/70 underline hover:text-[#b53406]">
              IMDb ↗
            </a>
          </div>
          <h1 className="mt-2 font-luckiest text-[clamp(38px,6vw,78px)] uppercase leading-[0.9] text-ink">
            Stories, made and <span className="text-[#e8460b]">re-made</span> for any audience.
          </h1>
          <p className="mt-6 max-w-xl font-fredoka text-lg font-medium leading-relaxed text-ink/80 md:text-xl">{siteMeta.tagline}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70">
            Production, publicity and celebrity access, AI video that swaps backgrounds, performers and languages,
            and 24/7 AI channels, now in progress.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#showcase"
              className="rounded-full bg-orange px-6 py-3 font-luckiest uppercase tracking-wide text-white no-underline shadow-[0_6px_0_#1c1c1c] hover:translate-y-0.5 hover:shadow-[0_4px_0_#1c1c1c]"
            >
              See the showcase
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-ink px-6 py-3 font-fredoka font-semibold text-ink no-underline hover:bg-ink hover:text-cream"
            >
              What we do
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={logo}
            alt="Simka Entertainment"
            width={1424}
            height={801}
            loading="eager"
            fetchpriority="high"
            className="w-full max-w-[320px] -rotate-6 drop-shadow-xl md:max-w-[460px]"
          />
        </div>
      </div>
    </section>
  )
}
