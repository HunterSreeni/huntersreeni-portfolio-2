import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

export default function Hackathons() {
  return (
    <Section id="hackathons" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">02 · Built under a clock</p>
          <h2 className="text-3xl font-bold text-primary-dark">AI Hackathons</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.TetrahedronGeometry(0.85, 0)}
          color={0x333366}
          speed={0.011}
        />
      </div>
      <div className="reveal-card mt-8 flex max-w-[560px] flex-col gap-2.5 rounded-2xl border border-neutral bg-white p-6">
        <span className="font-mono text-[11px] text-text-soft">
          Hackathon · Google × Hack2skill - PromptWars: Kerala
        </span>
        <h3 className="m-0 text-lg font-bold text-primary-dark">Steady</h3>
        <p className="m-0 text-[0.92rem] leading-relaxed text-text-soft">
          A GenAI-powered recovery companion and caregiver support app, built solo in one
          hackathon sprint - with a real e2e test suite, not just a demo.
        </p>
        <div className="mt-2 border-t border-dashed border-neutral pt-2.5">
          <span className="verdict-pill verdict-pass">
            #6 on the leaderboard · 4 bonus-round rewards
          </span>
          <div className="mt-3 flex items-center justify-between">
            <a
              href="https://github.com/HunterSreeni/hack2skill"
              target="_blank"
              rel="noopener"
              className="pill-btn"
            >
              GitHub →
            </a>
            <a
              href="/certs/promptwars-kerala-2026.pdf"
              target="_blank"
              rel="noopener"
              className="pill-btn"
            >
              Certificate →
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
