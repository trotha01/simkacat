import dripDivider1 from '../assets/drip-divider-1.webp'
import { crew } from '../data/content'

export default function Crew() {
  return (
    <section className="relative bg-slime px-[6vw] pt-[400px] pb-[90px]">
      <img
        src={dripDivider1}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-0 z-[1] h-auto w-full -translate-y-[24.88%]"
      />

      <div className="mb-11 flex flex-wrap items-baseline justify-center gap-4">
        <h2 className="-rotate-2 font-luckiest text-[clamp(34px,6vw,80px)] uppercase text-ink">Meet the Crew</h2>
        <span className="font-gochi text-[22px] text-ink">← the goo goblins</span>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-[30px] sm:grid-cols-3">
        {crew.map((p) => (
          <div key={p.name} className="text-center">
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[18px] border-[5px] border-ink bg-[repeating-linear-gradient(45deg,#ffe1c4_0_14px,#ffd0a3_14px_28px)] shadow-[8px_8px_0_#f28cb1] ${p.tiltClass}`}
            >
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[#8a4a12]">
                {p.slot}
              </span>
            </div>
            <div className="mt-3.5 font-fredoka text-2xl font-bold text-ink">{p.name}</div>
            <div className="font-caveat text-[22px] text-ink">{p.role}</div>
          </div>
        ))}
      </div>

    </section>
  )
}
