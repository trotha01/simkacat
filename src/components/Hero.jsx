import heroCoverGirl from '../assets/hero-cover-girl.webp'
import simkaCatLogo from '../assets/simkacat-sparkle-logo.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-0 bg-white md:min-h-[74vh]">
      <img
        src={simkaCatLogo}
        alt="Simka Cat"
        width={1424}
        height={801}
        loading="eager"
        fetchpriority="high"
        className="absolute -top-[4vw] -left-[6vw] w-[80vw] max-w-[420px] h-auto rotate-[350deg] md:top-[-4%] md:left-[-5%] md:w-[min(58%,700px)] md:max-w-none"
      />

      <div className="flex flex-col gap-4 px-[6%] pt-6 md:absolute md:inset-0 md:mx-auto md:max-w-[1400px]">
        <div className="pt-[44vw] md:pt-0" />
        <h1 className="sr-only">Simka Cat</h1>

        <div className="font-caveat text-[#2b2b2b] md:absolute md:top-[9%] md:right-[5%] md:w-[min(38%,430px)]">
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
          className="pointer-events-none mx-auto w-full max-w-[240px] h-auto rotate-3 mix-blend-multiply md:absolute md:right-[2%] md:-bottom-[6%] md:mx-0 md:w-[min(42%,360px)] md:max-w-none"
        />
      </div>
    </section>
  )
}
