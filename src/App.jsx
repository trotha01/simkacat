import Hero from './components/Hero'
import Backstory from './components/Backstory'
import PullQuote from './components/PullQuote'
import TripleThreat from './components/TripleThreat'
import FoodMerch from './components/FoodMerch'
import FooterCta from './components/FooterCta'

export default function App() {
  return (
    <div className="overflow-hidden bg-cream font-nunito">
      <div className="bg-orange px-4 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-ink shadow-[0_4px_0_#1c1c1c]">
        Website under construction
      </div>
      <Hero />
      <Backstory />
      <PullQuote />
      <TripleThreat />
      <FoodMerch />
      <FooterCta />
    </div>
  )
}
