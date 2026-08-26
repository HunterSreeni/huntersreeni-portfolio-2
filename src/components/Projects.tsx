import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const PROJECTS = [
  {
    caseId: "TC-001 · nithyakarma.org",
    name: "Nithyakarma",
    status: "Flagship",
    body: "A community daily-ritual tracker, not a solo personal tool - built and maintained end to end for a wider group of practitioners. React + Vite frontend, packaged for Android/PWA via Capacitor, iOS in progress. I own the product decisions, the build, the release, and the debugging.",
    links: [{ label: "Visit →", href: "https://nithyakarma.org" }],
  },
  {
    caseId: "TC-002 · electron-mcp-browser",
    name: "Electronium",
    status: "Flagship",
    body: "A local-first MCP server that bridges AI assistants to a real, logged-in Chrome session over Chrome DevTools Protocol - built because Playwright-driven browsers kept getting blocked by Cloudflare and other anti-bot layers. Any MCP-compatible AI can use it, not just mine.",
    links: [{ label: "GitHub →", href: "https://github.com/HunterSreeni/electron-mcp-browser" }],
  },
  {
    caseId: "TC-003 · Google × Hack2skill",
    name: "Steady",
    status: undefined,
    body: "A GenAI-powered recovery companion and caregiver support app, built solo in one hackathon sprint - with a real end-to-end test suite, not just a demo. Placed #6 on the leaderboard with 4 bonus-round rewards.",
    links: [
      { label: "GitHub →", href: "https://github.com/HunterSreeni/hack2skill" },
      { label: "Certificate →", href: "/certs/promptwars-kerala-2026.pdf" },
    ],
  },
  {
    caseId: "TC-004 · npm",
    name: "mypensieve",
    status: "Sunset",
    body: "A general-purpose autonomous CLI agent with persistent memory across sessions, built during the early wave of AI coding agents. Published to npm with 22 versions shipped through an automated GitHub Actions release pipeline. Retired now that the space has more mature tooling, kept here as proof of a real, versioned release process.",
    links: [{ label: "npm →", href: "https://www.npmjs.com/package/mypensieve" }],
  },
]

export default function Projects() {
  return (
    <Section id="projects" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">01 · Shipped work</p>
          <h2 className="text-3xl font-bold text-primary-dark">Built, not just proposed</h2>
        </div>
        <WireGadget
          className="section-gadget hidden md:block"
          geometry={() => new THREE.DodecahedronGeometry(0.85, 0)}
          color={0x6666cc}
          speed={0.01}
        />
      </div>
      <div className="reveal-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col gap-2.5 rounded-2xl border bg-white p-6 ${
              p.status === "Flagship"
                ? "border-[1.5px] border-accent shadow-[0_6px_20px_rgba(65,254,143,0.18)]"
                : "border-neutral"
            }`}
          >
            {p.status && (
              <span
                className={`absolute -top-2.5 right-5 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase ${
                  p.status === "Flagship" ? "bg-accent text-primary-dark" : "bg-neutral text-text-soft"
                }`}
              >
                {p.status}
              </span>
            )}
            <span className="font-mono text-[11px] text-text-soft">{p.caseId}</span>
            <h3 className="m-0 text-lg font-bold text-primary-dark">{p.name}</h3>
            <p className="m-0 text-[0.92rem] leading-relaxed text-text-soft">{p.body}</p>
            <div className="mt-auto flex gap-2.5 border-t border-dashed border-neutral pt-2.5">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener" className="pill-btn">
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
