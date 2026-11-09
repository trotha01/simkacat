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
    <div className="bg-cream font-nunito text-ink">
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Credits />
        <Services />
        <Showcase />
        <Channels />
        <DeepInfer />
      </main>
      <Footer />
    </div>
  )
}
