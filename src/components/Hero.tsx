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

        <p className="reveal-hero mb-4 text-xl font-semibold text-primary">
          SDET | Test Automation Engineer
        </p>

        <p className="reveal-hero mx-auto mb-4 max-w-[46ch] text-text-soft md:mx-0">
          I build, test, automate, and ship software. ~4 years of professional QA/product
          experience with hands-on full-stack development, browser automation, Linux, and
          production side projects.
        </p>

        <span className="reveal-hero verdict-pill verdict-pass mb-6 inline-block">
          Open to SDET and Test Automation opportunities
        </span>

        <div className="reveal-hero flex flex-wrap justify-center gap-3.5 md:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark shadow-[0_4px_14px_rgba(65,254,143,0.35)] transition-transform hover:-translate-y-0.5"
          >
            See what I've built ↓
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="rounded-full border-[1.5px] border-stroke px-6 py-3 font-semibold text-primary hover:bg-neutral"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border-[1.5px] border-stroke px-6 py-3 font-semibold text-primary hover:bg-neutral"
          >
            Get in touch
          </a>
        </div>

        <WireGadget
          className="hero-gadget mx-auto hidden md:mx-0 md:block"
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
