import pinkHorse from '../assets/pink-horse.webp'
import dripDivider1 from '../assets/drip-divider-1.webp'

export default function PullQuote() {
  return (
    <section className="relative bg-orange px-[6vw] pt-[130px] pb-[180px] text-center">
      <div className="absolute top-[70px] left-[-30px] h-40 w-40 animate-spin-slow rounded-[46%_54%_63%_37%/41%_46%_54%_59%] bg-slime opacity-55" />

      <div className="relative mx-auto max-w-[980px] rotate-[-1.5deg] rounded-[48%_52%_45%_55%/58%_47%_53%_42%] bg-slime px-[clamp(32px,6vw,82px)] py-[clamp(38px,6vw,76px)] text-ink shadow-[10px_10px_0_#1c1c1c]">
        <blockquote className="font-fredoka text-[clamp(28px,4.4vw,58px)] font-bold leading-[1.05]">
          &ldquo;If it doesn&apos;t make a grown-up slightly nervous, it&apos;s{' '}
          <span className="-rotate-2 inline-block rounded-lg bg-white px-2 text-ink">not done yet.</span>&rdquo;
        </blockquote>
        <div className="mt-[clamp(22px,3vw,34px)] font-caveat text-[clamp(24px,3vw,34px)] text-ink">
          — the Simka Cat house motto
        </div>
      </div>

      <img
        src={pinkHorse}
        alt="Simka Cat pink horse mascot"
        width={1920}
        height={1080}
        loading="lazy"
        className="pointer-events-none absolute bottom-[clamp(-220px,-18vw,-110px)] left-[-2%] z-[3] w-[clamp(240px,42vw,560px)] h-auto -rotate-[4deg]"
      />
      <img
        src={dripDivider1}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute left-0 top-full z-[1] -mt-16 h-auto w-full"
      />
    </section>
  )
}
