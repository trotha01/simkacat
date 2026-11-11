import Nav from './components/Nav'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Credits from './components/Credits'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Channels from './components/Channels'
import DeepInfer from './components/DeepInfer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="bg-cream font-nunito text-ink">
      <Nav />
      <main>
        <Channels />
        <Hero />
        <Credits />
        <Services />
        <Showcase />
        <DeepInfer />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  )
}
