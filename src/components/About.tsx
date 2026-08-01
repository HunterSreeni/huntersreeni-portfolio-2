import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const CARDS = [
  {
    title: "The day job",
    body: "I'm a QA Engineer at XOGO since Sep 2022 - manual and automated testing, cross-platform debugging, and making sure software does what it says before it reaches a customer.",
  },
  {
    title: "The security side",
    body: "TryHackMe Jr Penetration Tester path, Advent of Cyber 2025 (24 challenges). Breaking things properly makes me better at making sure they don't break in production.",
  },
  {
    title: "The toolsmith angle",
    body: "Started with Perplexity in March 2023, before the hype cycle. Claude and Claude Code now, real shipped projects, no fake screenshots.",
  },
]

export default function About() {
  return (
    <Section id="about">
      <div className="section-head">
        <div>
          <p className="eyebrow">01 · About</p>
          <h2 className="text-3xl font-bold text-primary-dark">Who am I, actually?</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.BoxGeometry(1.3, 1.3, 1.3)}
          color={0x000033}
          speed={0.006}
        />
      </div>
      <div className="reveal-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <div key={c.title} className="rounded-2xl border border-neutral bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-primary">{c.title}</h3>
            <p className="text-[0.92rem] leading-relaxed text-text-soft">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
