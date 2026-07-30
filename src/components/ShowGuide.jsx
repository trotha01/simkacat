import { shows } from '../data/content'

export default function ShowGuide() {
  return (
    // Slime background continues TripleThreat above it, which is also what lets
    // FoodMerch's slime drip divider bleed up into this section unnoticed. The
    // outsized bottom padding reserves room for that 30% overlap so the divider
    // cannot cover the last row of the table.
    <section className="relative bg-slime px-[6vw] pt-[70px] pb-[max(170px,11vw)]">
      <div className="mb-2.5 text-center">
        <h2 className="font-luckiest text-[clamp(34px,6vw,84px)] uppercase leading-[0.9] text-ink">
          The Show Guide
        </h2>
        <p className="mt-2 font-caveat text-[clamp(22px,2.6vw,34px)] text-ink">
          the whole slate, one table.
        </p>
        <p className="mt-1.5 mb-9 font-gochi text-base text-ink sm:hidden">swipe the table →</p>
        <div className="mb-11 hidden sm:block" />
      </div>

      <div className="mx-auto max-w-[1160px] overflow-x-auto rounded-[18px] border-[5px] border-ink bg-white shadow-[10px_10px_0_#1c1c1c]">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <caption className="sr-only">
            Simka Cat Productions series, with format, development status, and logline for each.
          </caption>
          <thead>
            <tr className="bg-ink">
              <th scope="col" className="px-4 py-3.5 font-luckiest text-[13px] uppercase tracking-[1.5px] text-slime">
                Show
              </th>
              <th scope="col" className="px-4 py-3.5 font-luckiest text-[13px] uppercase tracking-[1.5px] text-slime">
                Format
              </th>
              <th scope="col" className="px-4 py-3.5 font-luckiest text-[13px] uppercase tracking-[1.5px] text-slime">
                Status
              </th>
              <th scope="col" className="px-4 py-3.5 font-luckiest text-[13px] uppercase tracking-[1.5px] text-slime">
                Logline
              </th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show, i) => (
              <tr key={show.title} className={i % 2 === 1 ? 'bg-[#fff4e8]' : 'bg-white'}>
                <th
                  scope="row"
                  className="border-t-4 border-ink px-4 py-4 align-top font-fredoka text-[17px] font-bold leading-tight text-ink"
                >
                  {show.title}
                </th>
                <td className="border-t-4 border-ink px-4 py-4 align-top font-nunito text-[15px] leading-[1.4] text-[#1f1f1f]">
                  {show.format}
                </td>
                <td className="border-t-4 border-ink px-4 py-4 align-top">
                  <span className="inline-block rounded-3xl border-[3px] border-ink bg-pink px-3 py-1 font-luckiest text-[11px] uppercase leading-none text-ink">
                    {show.status}
                  </span>
                </td>
                <td className="border-t-4 border-ink px-4 py-4 align-top font-nunito text-[15px] leading-[1.4] text-[#1f1f1f]">
                  {show.logline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
