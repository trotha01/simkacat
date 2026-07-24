import catsuitGirl from '../assets/catsuit-girl.webp'
import dripDivider2 from '../assets/drip-divider-2.webp'

export default function PullQuote() {
  return (
    <section className="relative bg-orange px-[6vw] pt-[400px] pb-[100px] text-center">
      <img
        src={dripDivider2}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute top-[-79px] left-0 z-[1] h-auto w-full"
      />
      <div className="absolute top-[70px] left-[-30px] h-40 w-40 animate-spin-slow rounded-[46%_54%_63%_37%/41%_46%_54%_59%] bg-slime opacity-55" />

      <blockquote className="relative mx-auto max-w-[900px] font-fredoka text-[clamp(28px,4.4vw,58px)] font-bold leading-[1.05] text-ink">
        &ldquo;If it doesn&apos;t make a grown-up slightly nervous, it&apos;s{' '}
        <span className="-rotate-2 inline-block rounded-lg bg-white px-2 text-ink">not done yet.</span>&rdquo;
      </blockquote>
      <div className="relative mt-[22px] font-caveat text-[26px] text-ink">— the Simka Cat house motto</div>

      <img
        src={catsuitGirl}
        alt="Simka Cat cover girl in a psychedelic catsuit"
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute bottom-[-100px] left-[1%] z-[3] w-[min(34%,320px)] h-auto -rotate-[4deg]"
      />
      <img
        src={dripDivider2}
        alt=""
        width={1920}
        height={623}
        loading="lazy"
        className="pointer-events-none absolute left-0 top-full z-[1] -mt-10 h-auto w-full"
      />
    </section>
  )
}
