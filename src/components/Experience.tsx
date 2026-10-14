import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const BULLETS = [
  "Built the automation framework from zero in Cypress (JavaScript) on Azure DevOps (Sep 2022 - Jun 2023). Researched alternatives, presented my findings to leadership and led the migration to Playwright (TypeScript) for WebKit coverage and cleaner CI.",
  "Grew the Playwright suite to ~234 tests (~104 UI, ~130 API), running in ~35 minutes; release regression went from ~3 days to ~1 day.",
  "Cut the per-run flake rate from ~5% to ~3% by fixing root causes in unstable UI specs (~45 down to ~15) instead of adding retries.",
  "Backend API testing in Playwright with schema validation, plus a separate ~170-test Postman/Bruno suite. SQL (MS SQL Server) checks on backend data; performance testing with JMeter.",
  "Co-own the release quality gate as one of two go/no-go owners. Signed off 35+ production releases across the web manager, API and player apps (Android, iOS, Windows, Fire OS).",
  "Own manual and exploratory testing across the device matrix: Android phones and tablets (including XOGO hardware), iOS, Windows UWP, Amazon Fire TV Stick 4K and Signage Stick, Chromecast and Raspberry Pi 4B. Introduced Android automation with ADB.",
  "Accessibility (WCAG) and visual regression checks. Shift-left: review Figma designs and work with product and dev to shape acceptance criteria for authentication, billing and access control.",
  "Onboarded and mentored a second automation engineer, set the team's test standards and review automation PRs.",
]

export default function Experience() {
  return (
    <Section id="experience" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">02 · Experience</p>
          <h2 className="text-3xl font-bold text-primary-dark">QA Engineer I, XOGO</h2>
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
