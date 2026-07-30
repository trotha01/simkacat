import { facts, siteMeta, tilts } from '../data/content'

export default function WhatIsSimkaCat() {
  return (
    <section className="relative bg-slime px-[6vw] py-[90px]">
      <div className="relative z-[2] mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-[5px] border-ink pb-3.5">
          <h2 className="font-luckiest text-[clamp(32px,5.5vw,74px)] uppercase leading-[0.85] text-ink">
            What Is Simka Cat?
          </h2>
          <div className="text-right font-caveat text-[clamp(20px,2.4vw,30px)] font-bold text-ink">
            the short answer
          </div>
        </div>

        <p className="mt-7 max-w-[900px] font-fredoka text-[clamp(19px,2.2vw,28px)] font-medium leading-[1.35] text-ink">
          {siteMeta.description}
        </p>

        <dl className="mt-11 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`rounded-[18px] border-4 border-ink bg-white px-[18px] pt-3.5 pb-4 shadow-[8px_8px_0_#1c1c1c] ${tilts[i % tilts.length]}`}
            >
              <dt className="font-luckiest text-[13px] uppercase tracking-[1.5px] text-[#e8460b]">{fact.label}</dt>
              <dd className="mt-1.5 font-nunito text-[clamp(15px,1.5vw,17px)] font-semibold leading-[1.4] text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
