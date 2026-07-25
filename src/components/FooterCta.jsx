import highkickGirl from '../assets/highkick-girl.webp'
import dripDivider1 from '../assets/drip-divider-1.webp'

export default function FooterCta() {
  return (
    <section className="relative bg-slime px-[6vw] pt-[clamp(200px,20vw,320px)] pb-[70px] text-center">
      <img
        src={dripDivider1}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-1/2 z-[1] h-auto w-full max-w-[1400px] -translate-x-1/2 -translate-y-[30%]"
      />

      <h2 className="font-luckiest text-[clamp(40px,8vw,120px)] uppercase leading-[0.85] text-ink">The Cat&apos;s Out</h2>
      <p className="mx-auto mt-5 mb-[34px] max-w-[560px] font-fredoka text-[clamp(17px,2vw,22px)] font-medium text-[#2b2b2b]">
        The show your kid quotes for a week straight. A little too much, on purpose.
      </p>

      <div className="flex flex-col items-center gap-[22px]">
        <div className="max-w-[560px]">
          <a
            href="#"
            className="inline-block rounded-[44px] border-4 border-ink bg-orange px-[42px] py-[18px] font-luckiest text-[clamp(18px,2vw,24px)] uppercase text-white no-underline shadow-[6px_6px_0_#1c1c1c]"
          >
            BE FIRST TO SEE IT →
          </a>
          <p className="mx-auto mt-3 max-w-[440px] font-nunito text-[15px] leading-[1.4] text-[#2b2b2b]">
            Early clips, casting news, and behind-the-scenes while we build.
          </p>
        </div>
        <a href="#" className="font-fredoka text-[clamp(15px,1.6vw,18px)] font-bold text-ink underline">
          Investors: see the deck
        </a>
      </div>

      <div className="mt-[46px] font-gochi text-base text-[#333]">
        © Simka Cat Productions — made loud, on purpose.
      </div>

      <img
        src={highkickGirl}
        alt="Simka Cat girl mid high-kick in cowboy boots"
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute bottom-[-30px] left-0 z-[3] w-[min(28%,280px)] h-auto -rotate-3"
      />
    </section>
  )
}
