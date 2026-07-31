import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Hackathons from "./components/Hackathons"
import Arsenal from "./components/Arsenal"
import Builds from "./components/Builds"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Contact from "./components/Contact"

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".reveal-hero", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.1,
      })

      gsap.utils.toArray<HTMLElement>(".reveal-grid").forEach((grid) => {
        gsap.from(grid.children, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: grid, start: "top 85%", toggleActions: "play reverse play reverse" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play reverse play reverse" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".cert-group").forEach((grp) => {
        gsap.from(grp.querySelectorAll(".cert-card"), {
          opacity: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: grp, start: "top 88%", toggleActions: "play reverse play reverse" },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Hackathons />
        <Arsenal />
        <Builds />
        <Skills />
        <Services />
        <Contact />
      </main>
    </>
  )
}
