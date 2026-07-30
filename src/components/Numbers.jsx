import dripDivider1 from '../assets/drip-divider-1.webp'
import { stats, tilts } from '../data/content'

export default function Numbers() {
  return (
    <section className="relative bg-slime px-[6vw] pt-[max(210px,21vw)] pb-[90px]">
      <img
        src={dripDivider1}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-0 z-[1] h-auto w-full -translate-y-[30%]"
      />

      <div className="relative z-[2] mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-[5px] border-ink pb-3.5">
          <h2 className="font-luckiest text-[clamp(32px,5.5vw,74px)] uppercase leading-[0.85] text-ink">
            By the Numbers
          </h2>
          <div className="text-right font-caveat text-[clamp(20px,2.4vw,30px)] font-bold text-ink">receipts</div>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-[22px] border-4 border-ink bg-white px-5 pt-4 pb-[22px] shadow-[8px_8px_0_#f28cb1] ${tilts[i % tilts.length]}`}
            >
              <div className="font-luckiest text-[clamp(48px,7vw,76px)] leading-[0.85] text-[#e8460b]">
                {stat.value}
              </div>
              <div className="mt-2.5 font-fredoka text-[19px] font-bold leading-none text-ink">{stat.label}</div>
              <p className="mt-1.5 font-nunito text-sm leading-[1.4] text-[#555]">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
