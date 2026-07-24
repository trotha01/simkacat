import mascot from '../assets/mascot-rocking-horse.png'

export default function Backstory() {
  return (
    <section className="relative bg-orange px-[6vw] py-[90px] pb-[110px] text-white">
      <div className="absolute right-[4%] bottom-[60px] h-20 w-20 animate-drip rounded-[56%_44%_43%_57%/51%_56%_44%_49%] bg-white opacity-85" />

      <div className="relative z-[2] mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-[5px] border-ink pb-3.5">
          <h2 className="font-luckiest text-[clamp(32px,5.5vw,74px)] uppercase leading-[0.85] text-ink">
            How Simka Cat Happened
          </h2>
          <div className="text-right font-caveat text-[clamp(20px,2.4vw,30px)] font-bold text-ink">
            two founders, zero permission
          </div>
        </div>

        <p className="mt-6 max-w-[840px] font-fredoka text-[clamp(18px,2vw,25px)] font-medium leading-[1.4] text-white">
          It all started when two totally fearless founders decided to make it happen — one who knows how a show
          gets made, and one who built the machine that makes them.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-11 sm:grid-cols-2">
          <div>
            <div className="relative flex aspect-[4/5] items-center justify-center border-[5px] border-ink bg-[repeating-linear-gradient(45deg,#fff_0_16px,#ffe8d3_16px_32px)] shadow-[10px_10px_0_#1c1c1c]">
              <span className="font-mono text-[13px] text-[#8a4a12]">[ photo: Mychal Simka ]</span>
              <span className="absolute -top-5 -left-3.5 rounded-3xl border-4 border-ink bg-pink px-3.5 py-1.5 font-luckiest text-[13px] uppercase text-ink">
                The Storyteller
              </span>
            </div>
            <h3 className="mt-5 font-fredoka text-[clamp(24px,2.6vw,32px)] font-bold text-ink">Mychal Simka</h3>
            <div className="mt-0.5 mb-2.5 font-caveat text-[22px] text-white">co-founder</div>
            <p className="font-nunito text-[clamp(15px,1.5vw,18px)] leading-[1.55] text-ink">
              Made twelve animated features for Lionsgate — cast them, directed them, produced them. The voices in
              front of his mic? Ariana Grande, Hilary Duff, Smash Mouth, and a whole lot more. No big deal.
              (It&apos;s a big deal.)
            </p>
          </div>
          <div>
            <div className="relative flex aspect-[4/5] items-center justify-center border-[5px] border-ink bg-[repeating-linear-gradient(45deg,#fff_0_16px,#ffe8d3_16px_32px)] shadow-[10px_10px_0_#1c1c1c]">
              <span className="font-mono text-[13px] text-[#8a4a12]">[ photo: Trevor Rothaus ]</span>
              <span className="absolute -top-5 -left-3.5 rounded-3xl border-4 border-ink bg-pink px-3.5 py-1.5 font-luckiest text-[13px] uppercase text-ink">
                The Builder
              </span>
            </div>
            <h3 className="mt-5 font-fredoka text-[clamp(24px,2.6vw,32px)] font-bold text-ink">Trevor Rothaus</h3>
            <div className="mt-0.5 mb-2.5 font-caveat text-[22px] text-white">co-founder</div>
            <p className="font-nunito text-[clamp(15px,1.5vw,18px)] leading-[1.55] text-ink">
              Built the factory. Runs a nonprofit animation studio and engineered its whole pipeline — story,
              animation, voice, edit, delivered. Before that, a core developer at SendGrid, helping take it from a
              Series C startup to a multi-billion-dollar public company through its Twilio acquisition. The skill
              transfers.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t-4 border-dashed border-ink pt-[30px] text-center">
          <p className="mx-auto max-w-[760px] font-fredoka text-[clamp(18px,2vw,26px)] font-semibold leading-[1.25] text-ink">
            One director who knows how a show gets MADE. One engineer who built the machine that MAKES them. One
            network for everyone stuck in between.
          </p>
          <div className="mt-[18px] font-luckiest text-[clamp(26px,3.4vw,44px)] uppercase text-white">
            Simka Cat. Turn it up.
          </div>
        </div>

        <img
          src={mascot}
          alt="Simka Cat mascot rocking horse"
          className="pointer-events-none absolute bottom-[30px] left-[-56px] z-[1] w-[170px] h-auto -rotate-[7deg]"
        />
      </div>
    </section>
  )
}
