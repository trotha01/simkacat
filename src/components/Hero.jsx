import heroCoverGirl from '../assets/hero-cover-girl.webp'
import simkaCatLogo from '../assets/simkacat-sparkle-logo.png'

export default function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden border-b-0 bg-white">
      <img
        src={simkaCatLogo}
        alt="Simka Cat"
        width={1424}
        height={801}
        loading="eager"
        fetchpriority="high"
        className="absolute top-4 left-[2%] w-[min(58%,700px)] h-auto"
      />
      <h1 className="sr-only">Simka Cat</h1>

      <div className="absolute top-[9%] right-[5%] w-[min(38%,430px)] font-caveat text-[#2b2b2b]">
        <div className="text-[clamp(26px,3.4vw,44px)] font-bold leading-none">Why Simka&nbsp;Cat?</div>
        <p className="mt-3.5 text-[clamp(19px,2vw,26px)] leading-[1.25]">
          The shows we grew up on had real arcs, real stakes, real characters. We&apos;re bringing all that back:
          chaos and slime on the surface, but a real story underneath.
        </p>
      </div>

      <img
        src={heroCoverGirl}
        alt="Simka Cat cover girl in mod stripes"
        width={1024}
        height={1024}
        loading="eager"
        fetchpriority="high"
        className="pointer-events-none absolute right-[2%] -bottom-[6%] w-[min(42%,360px)] h-auto rotate-3 mix-blend-multiply"
      />
    </section>
  )
}
