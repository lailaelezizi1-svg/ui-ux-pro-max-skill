import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Aperitapas from './components/Aperitapas'
import MenuSection from './components/MenuSection'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:p-3">Vai al menu</a>
      <Header />
      <main>
        <Hero /><About /><Aperitapas /><MenuSection /><Reviews /><Visit />
      </main>
      <Footer />
    </>
  )
}
