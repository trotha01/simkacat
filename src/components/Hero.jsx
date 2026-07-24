import heroCoverGirl from '../assets/hero-cover-girl.png'

export default function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden border-b-0 bg-white">
      <div className="absolute -top-[107px] -left-[261px] h-[min(60vh,520px)] w-[min(72%,760px)] origin-top-left -rotate-[13deg] border-[5px] border-ink bg-orange" />
      <div className="absolute -top-[70px] -left-[90px] h-[min(44vh,360px)] w-[min(58%,600px)] origin-top-left -rotate-[4deg] border-[5px] border-ink bg-slime" />

      <div className="absolute top-8 left-[6%] origin-top-left -rotate-6">
        <div className="relative font-gochi text-[clamp(72px,13vw,180px)] leading-[0.8] tracking-[2px] text-[#2b2b2b]">
          SIMKA
          <div className="mt-[0.05em] pl-[1.4em] text-[0.44em]">Cat</div>
        </div>
      </div>

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
        className="pointer-events-none absolute right-[2%] -bottom-[6%] w-[min(42%,360px)] h-auto rotate-3 mix-blend-multiply"
      />
    </section>
  )
}
