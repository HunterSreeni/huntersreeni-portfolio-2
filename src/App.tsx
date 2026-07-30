import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Arsenal from "./components/Arsenal"
import Builds from "./components/Builds"
import Hackathons from "./components/Hackathons"
import Archive from "./components/Archive"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Arsenal />
        <Builds />
        <Hackathons />
        <Archive />
        <Skills />
        <Services />
        <Contact />
      </main>
    </>
  )
}
