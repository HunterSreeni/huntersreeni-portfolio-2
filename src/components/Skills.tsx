import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const GROUPS = [
  {
    title: "Test Automation · Production",
    items: ["Playwright (TypeScript)", "Cypress (JavaScript)", "API testing (Playwright, Postman, Bruno)", "JMeter", "Page Object Model", "Visual regression", "Accessibility (WCAG)", "Manual & exploratory testing", "Device-matrix testing"],
  },
  {
    title: "Tooling, Languages & Platforms · Production",
    items: ["Azure DevOps", "Git / GitHub", "Jira", "Agile / Scrum", "Figma (design review)", "TypeScript", "JavaScript", "SQL (MS SQL Server)", "Android / ADB", "iOS", "Windows", "Fire OS", "Shell / Linux", "PowerShell"],
  },
  {
    title: "Project experience",
    items: ["Selenium WebDriver + TestNG (Java)", "REST Assured", "Python", "Docker", "Jenkins", "GitHub Actions", "Kubernetes", "React", "Vue", "Supabase"],
  },
  {
    title: "AI tools",
    items: ["Claude Code", "MCP", "Codex", "Ollama", "Gemini"],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <div className="section-head">
        <div>
          <p className="eyebrow">03 · Skills</p>
          <h2 className="text-3xl font-bold text-primary-dark">What I work with</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.ConeGeometry(0.9, 1.5, 6)}
          color={0xccccff}
          speed={0.008}
        />
      </div>
      <div className="reveal-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-2xl border border-neutral bg-white p-6">
            <h3 className="mb-3 text-lg font-bold text-primary-dark">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-neutral px-3 py-1.5 text-[13px] font-semibold text-primary-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
