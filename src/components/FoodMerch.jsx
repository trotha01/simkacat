import dripDivider2 from '../assets/drip-divider-2.png'
import { food } from '../data/content'

export default function FoodMerch() {
  return (
    <section className="relative bg-orange px-[6vw] pt-[400px] pb-24">
      <img src={dripDivider2} alt="" className="pointer-events-none absolute top-[-83px] left-0 z-[1] h-auto w-full" />

      <div className="mb-2.5 text-center">
        <h2 className="font-luckiest text-[clamp(34px,6vw,84px)] uppercase leading-[0.9] text-ink">
          Stuff Your Face
        </h2>
        <p className="mt-2 mb-11 font-caveat text-[clamp(22px,2.6vw,34px)] text-white">
          Simka Cat treats — made for humans, not cats.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
        {food.map((item) => (
          <div
            key={item.name}
            className="flex flex-col overflow-hidden rounded-[22px] border-4 border-ink bg-white shadow-[8px_8px_0_#c6d92b]"
          >
            <div className="flex aspect-square items-center justify-center bg-white">
              <img src={item.img} alt={item.name} className="h-full w-full object-contain" />
            </div>
            <div className="flex-1 border-t-4 border-ink px-4 pt-3.5 pb-[18px]">
              <div className="font-fredoka text-[19px] font-bold leading-none text-ink">{item.name}</div>
              <div className="mt-1.5 font-nunito text-sm leading-[1.35] text-[#555]">{item.blurb}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
