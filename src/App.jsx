import Hero from './components/Hero'
import WhatIsSimkaCat from './components/WhatIsSimkaCat'
import Backstory from './components/Backstory'
import PullQuote from './components/PullQuote'
import TripleThreat from './components/TripleThreat'
import ShowGuide from './components/ShowGuide'
import FoodMerch from './components/FoodMerch'
import Numbers from './components/Numbers'
import Faq from './components/Faq'
import FooterCta from './components/FooterCta'

export default function App() {
  return (
    <div className="overflow-hidden bg-cream font-nunito">
      <div className="bg-orange px-4 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-ink shadow-[0_4px_0_#1c1c1c]">
        Website under construction
      </div>
      <main>
        <Hero />
        <WhatIsSimkaCat />
        <Backstory />
        <PullQuote />
        <TripleThreat />
        <ShowGuide />
        <FoodMerch />
        <Numbers />
        <Faq />
      </main>
      <FooterCta />
    </div>
  )
}
