import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const BULLETS = [
  "Own testing across XOGO's full stack: database, backend, web manager, and player clients across Android, iOS, and Amazon Fire. Collaborate cross-functionally with dev and product from the requirements stage on major features (shift-left) to shape behavior around real user pain points before build, not just test after.",
  "Own the automation suite end to end: build and maintain test coverage, and wire test plans directly into the Azure DevOps pipeline (CI/CD).",
  "Cut pre/post-release regression and smoke testing from 2-3 days (fully manual) to about 1 day (45-min automated regression suite, 45-min automated smoke suite, plus manual testing), and increased release cadence from once every 2 months to once every 2 weeks.",
  "Manual and automated testing across every surface: web-based Manager, native player apps (Android, Fire OS, iOS), and hardware devices (Firestick, Chromecast), within an Agile development flow.",
  "API and database-backed functionality testing, defect investigation, and root-cause debugging using shell, ADB, and PowerShell. Systematic, user-POV testing of major feature launches to catch edge-case failures before they ever reach an end user.",
  "Co-own release sign-off with one other QA engineer - final go/no-go decision-maker on every production release; provide testing strategy and automation direction to the wider QA team.",
]

export default function Experience() {
  return (
    <Section id="experience" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">02 · Experience</p>
          <h2 className="text-3xl font-bold text-primary-dark">QA Engineer, XOGO</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.OctahedronGeometry(0.9, 0)}
          color={0x333366}
          speed={0.007}
        />
      </div>
      <div className="reveal-card mt-8 max-w-[720px] rounded-2xl border border-neutral bg-white p-6">
        <span className="font-mono text-[11px] text-text-soft">Sep 2022 - Present · Kochi, Kerala</span>
        <ul className="mt-3 flex flex-col gap-3">
          {BULLETS.map((b) => (
            <li key={b} className="flex gap-3 text-[0.92rem] leading-relaxed text-text-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
