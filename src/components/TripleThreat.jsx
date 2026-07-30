import { shows } from '../data/content'

function SecondaryShow({ show }) {
  return (
    <div>
      <div className="relative mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden border-4 border-ink bg-[repeating-linear-gradient(45deg,#3a2a1e_0_14px,#2c2016_14px_28px)] shadow-[7px_7px_0_#1c1c1c]">
        {show.img ? (
          <img src={show.img} alt={show.title} className="h-full w-full object-cover" />
        ) : (
          <span className="font-mono text-xs text-slime">{show.slot}</span>
        )}
      </div>
      <h3 className="font-fredoka text-[clamp(22px,2.4vw,28px)] font-bold leading-none text-ink">{show.title}</h3>
      <div className="my-1 font-caveat text-[22px] leading-none text-[#e8460b]">{show.hook}</div>
      <p className="font-nunito text-base leading-[1.5] text-[#1f1f1f]">{show.desc}</p>
    </div>
  )
}

export default function TripleThreat() {
  const [zFactor, bootcamp, offTheWall] = shows
  const lead = offTheWall
  const mid = zFactor
  const last = bootcamp

  return (
    <section className="relative bg-slime px-[6vw] pt-[max(210px,21vw)] pb-[90px]">
      <div className="relative z-[2] mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-[5px] border-ink pb-3.5">
          <h2 className="font-luckiest text-[clamp(32px,5.5vw,74px)] uppercase leading-[0.85] text-ink">
            Triple Threat
          </h2>
          <div className="text-right font-caveat text-[clamp(20px,2.4vw,30px)] font-bold text-ink">
            3 shows we can&apos;t shut up about
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative">
            <div className="relative flex aspect-[2/3] items-center justify-center overflow-hidden border-[5px] border-ink bg-[repeating-linear-gradient(45deg,#3a2a1e_0_14px,#2c2016_14px_28px)] shadow-[10px_10px_0_#1c1c1c]">
              {lead.img ? (
                <img src={lead.img} alt={lead.title} className="h-full w-full object-cover" />
              ) : (
                <span className="font-mono text-[13px] text-slime">{lead.slot}</span>
              )}
            </div>
          </div>
          <div>
            <div className="font-fredoka text-[13px] font-bold uppercase tracking-[3px] text-ink">The Flagship</div>
            <h3 className="mt-2 font-fredoka text-[clamp(30px,4.4vw,52px)] font-bold leading-[0.98] text-ink">
              {lead.title}
            </h3>
            <div className="my-2.5 mt-2.5 font-caveat text-[clamp(24px,3vw,36px)] leading-none text-[#e8460b]">
              {lead.hook}
            </div>
            <p className="font-nunito text-[clamp(16px,1.6vw,19px)] leading-[1.55] text-[#1f1f1f]">{lead.desc}</p>
            <div className="mt-5 inline-block rounded-3xl bg-ink px-[18px] py-2 font-luckiest text-[13px] uppercase text-white">
              {lead.status}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t-4 border-dashed border-ink pt-11 sm:grid-cols-2">
          <SecondaryShow show={mid} />
          <SecondaryShow show={last} />
        </div>
      </div>
    </section>
  )
}
