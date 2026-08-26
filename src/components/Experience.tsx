import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const BULLETS = [
  "Sole release gatekeeper for XOGO's full stack: database, backend, web manager, and player clients across Android, iOS, and Amazon Fire. Nothing ships without QA sign-off.",
  "Own the automation suite end-to-end: build and maintain test coverage, and wire test plans directly into the Azure DevOps pipeline. Cut regression + smoke testing from 2-3 days (manual) to about 1 day, and increased release cadence from once every 2 months to once every 2 weeks.",
  "Manual and automated testing across every surface: web-based Manager, native player apps (Android, Fire OS, iOS), and hardware devices (Firestick, Chromecast). Systematic, user-POV testing of major feature launches to catch edge-case failures before they ever reach an end user.",
  "Daily use of shell, ADB, and PowerShell for cross-platform debugging and diagnostics. Shipped Player v4 across Android, Fire OS, and iOS app stores.",
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
