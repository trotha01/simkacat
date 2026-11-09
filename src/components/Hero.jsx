import logo from '../assets/simkacat-sparkle-logo.png'
import { siteMeta } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-slime/50 blur-3xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-fredoka text-[clamp(38px,6vw,72px)] font-bold leading-[1] text-ink">
            Stories, made and <span className="text-[#e8460b]">re-made</span> for any audience.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">{siteMeta.tagline}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70">
            Production, publicity and celebrity access, AI video that swaps backgrounds, performers and languages,
            and 24/7 AI channels you can watch right now.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#showcase"
              className="rounded-full bg-orange px-6 py-3 font-fredoka font-semibold text-white no-underline shadow-[0_6px_0_#1c1c1c] hover:translate-y-0.5 hover:shadow-[0_4px_0_#1c1c1c]"
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
            alt="Simka Cat"
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
