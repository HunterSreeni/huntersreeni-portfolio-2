import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const CARDS = [
  {
    title: "Where it started",
    body: "QA Engineer since Sep 2022, and the title undersells it - I built the test automation from zero and co-own release sign-off, not just test-case execution.",
  },
  {
    title: "Where it went",
    body: "That ownership pushed me deeper into automation, Linux, and tooling, then into building and shipping my own software: a community app live on Google Play, a quality lab and a delivery pipeline.",
  },
  {
    title: "Where it's going",
    body: "Deeper into SDET work: API automation, CI and framework design. Quality Lab is where I try those ideas in public first.",
  },
  {
    title: "How I build",
    body: "AI tools I use daily: Claude Code, MCP, Codex, Ollama and Gemini.",
  },
]

export default function About() {
  return (
    <Section id="about">
      <div className="section-head">
        <div>
          <p className="eyebrow">05 · About</p>
          <h2 className="text-3xl font-bold text-primary-dark">Who am I, actually?</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.BoxGeometry(1.3, 1.3, 1.3)}
          color={0x000033}
          speed={0.006}
        />
      </div>
      <div className="reveal-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
