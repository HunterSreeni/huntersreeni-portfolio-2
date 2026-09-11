import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const BULLETS = [
  "Built the test automation suite from zero on joining. Introduced Cypress and integrated it into the Azure DevOps pipeline, then evaluated and migrated the suite to Playwright as cross-browser requirements grew, for WebKit-engine coverage and cleaner CI integration. Sole owner and maintainer of the automation repo since.",
  "Replaced a fully manual, multi-day release regression process with an automated suite, enabling a materially faster and more predictable release cadence.",
  "Own testing across a multi-platform product: database, backend, web application, and native player clients on Android, iOS and Fire OS. Work with development and product from the requirements stage to shape testable acceptance criteria before build, not just test after.",
  "Manual and automated testing across every surface: web application, native player apps, and streaming hardware, within an Agile development flow.",
  "API and database-backed functionality testing, defect investigation, and root-cause debugging using shell, ADB and PowerShell. Systematic, user-POV testing of major feature launches to catch edge-case failures before they reach an end user.",
  "Co-own the release gate end to end: defect triage, release checklist, and one of two final go/no-go decisions on every production release. Onboarded a second automation engineer and set the standards the team writes and reviews tests against.",
]

export default function Experience() {
  return (
    <Section id="experience" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">02 · Experience</p>
          <h2 className="text-3xl font-bold text-primary-dark">SDET / QA Engineer, XOGO</h2>
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
