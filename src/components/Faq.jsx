import dripDivider2 from '../assets/drip-divider-2.webp'
import { faqs } from '../data/content'

export default function Faq() {
  return (
    <section className="relative bg-orange px-[6vw] pt-[max(210px,21vw)] pb-[90px]">
      <img
        src={dripDivider2}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-0 z-[1] h-auto w-full -translate-y-[30%]"
      />

      <div className="relative z-[2] mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-[5px] border-ink pb-3.5">
          <h2 className="font-luckiest text-[clamp(32px,5.5vw,74px)] uppercase leading-[0.85] text-ink">
            Ask Us Anything
          </h2>
          <div className="text-right font-caveat text-[clamp(20px,2.4vw,30px)] font-bold text-ink">
            no wrong questions
          </div>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-[26px] sm:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[22px] border-4 border-ink bg-white px-[22px] pt-[18px] pb-[22px] shadow-[8px_8px_0_#c6d92b]"
            >
              <h3 className="font-fredoka text-[clamp(19px,2vw,23px)] font-bold leading-[1.15] text-ink">{item.q}</h3>
              <p className="mt-2.5 font-nunito text-[clamp(15px,1.5vw,17px)] leading-[1.55] text-[#1f1f1f]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
