import * as THREE from "three"
import heroPhoto from "../assets/hero.jpg"
import WireGadget from "./WireGadget"

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 py-14 pb-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="text-center md:text-left">
        <div className="reveal-hero run-id">
          TEST SUITE: <b>huntersreeni.dev</b> - BUILD 2022.09.28
        </div>
        <h1 className="reveal-hero mb-1 text-4xl font-bold text-primary-dark sm:text-5xl">
          Sreenivasan Sivakumar
        </h1>

        <div className="reveal-hero relative mb-4 h-8 text-xl font-semibold text-primary">
          <span className="tagline tagline-1">QA Engineer &amp; Automation Architect</span>
          <span className="tagline tagline-2">SecOps Enthusiast</span>
          <span className="tagline tagline-3">AI Engineer - Toolsmith, Not 10x Hype</span>
        </div>

        <p className="reveal-hero mx-auto mb-6 max-w-[46ch] text-text-soft md:mx-0">
          I don't take claims at face value - mine or anyone else's. I test software for a
          living, break into systems for fun, and put AI tools through the same scrutiny before
          I trust them with anything real.
        </p>

        <div className="reveal-hero flex flex-wrap justify-center gap-3.5 md:justify-start">
          <a
            href="#hackathons"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark shadow-[0_4px_14px_rgba(65,254,143,0.35)] transition-transform hover:-translate-y-0.5"
          >
            See what I've built ↓
          </a>
          <a
            href="#contact"
            className="rounded-full border-[1.5px] border-stroke px-6 py-3 font-semibold text-primary hover:bg-neutral"
          >
            Get in touch
          </a>
        </div>

        <WireGadget
          className="hero-gadget mx-auto md:mx-0"
          geometry={() => new THREE.DodecahedronGeometry(0.95, 0)}
          color={0x8176ff}
          speed={0.009}
        />
      </div>

      <div className="reveal-hero evidence-frame">
        <img src={heroPhoto} alt="Sreenivasan Sivakumar" />
        <div className="evidence-tag">
          <span>REF: HS·23.03</span>
        </div>
      </div>
    </section>
  )
}
