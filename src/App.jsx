import Hero from './components/Hero'
import Backstory from './components/Backstory'
import PullQuote from './components/PullQuote'
import TripleThreat from './components/TripleThreat'
import FoodMerch from './components/FoodMerch'
import FooterCta from './components/FooterCta'

export default function App() {
  return (
    <div className="overflow-hidden bg-cream font-nunito">
      <Hero />
      <Backstory />
      <PullQuote />
      <TripleThreat />
      <FoodMerch />
      <FooterCta />
    </div>
  )
}
