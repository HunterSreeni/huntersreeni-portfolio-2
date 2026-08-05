import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const BUILDS = [
  {
    caseId: "TC-001 · electron-mcp-browser",
    name: "Electronium",
    flagship: true,
    body: "A local-first MCP server that bridges AI assistants to a real, logged-in Chrome session over Chrome DevTools Protocol - built because Playwright-driven browsers kept getting blocked by Cloudflare and other anti-bot layers. Any MCP-compatible AI can use it, not just mine.",
    linkLabel: "GitHub →",
    href: "https://github.com/HunterSreeni/electron-mcp-browser",
  },
  {
    caseId: "TC-002 · huntersreeni.web.app",
    name: "Portfolio v1",
    body: "Built with Perplexity in 2023, before I called myself an AI toolsmith - my first real project built alongside AI. Kept live as a marker of where this started.",
    linkLabel: "Visit →",
    href: "https://huntersreeni.web.app",
  },
  {
    caseId: "TC-003 · nithyakarma.org",
    name: "Nithyakarma",
    body: "A community project, not a solo personal tool - daily-ritual tracking (PWA + Android) built and maintained for a wider group of practitioners.",
    linkLabel: "Visit →",
    href: "https://nithyakarma.org",
  },
]

export default function Builds() {
  return (
    <Section id="builds" alt>
      <div className="section-head">
        <div>
          <p className="eyebrow">04 · Shipped work</p>
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
        {BUILDS.map((b) => (
          <article
            key={b.name}
            className={`relative flex flex-col gap-2.5 rounded-2xl border bg-white p-6 ${
              b.flagship
                ? "border-[1.5px] border-accent shadow-[0_6px_20px_rgba(65,254,143,0.18)]"
                : "border-neutral"
            }`}
          >
            {b.flagship && (
              <span className="absolute -top-2.5 right-5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-primary-dark uppercase">
                Flagship
              </span>
            )}
            <span className="font-mono text-[11px] text-text-soft">{b.caseId}</span>
            <h3 className="m-0 text-lg font-bold text-primary-dark">{b.name}</h3>
            <p className="m-0 text-[0.92rem] leading-relaxed text-text-soft">{b.body}</p>
            <div className="mt-auto border-t border-dashed border-neutral pt-2.5">
              <a href={b.href} target="_blank" rel="noopener" className="pill-btn">
                {b.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
