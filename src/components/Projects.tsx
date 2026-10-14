import * as THREE from "three"
import Section from "./Section"
import WireGadget from "./WireGadget"

const PROJECTS = [
  {
    caseId: "TC-001 · nithyakarma-quality-lab",
    name: "Nithyakarma Quality Lab",
    status: "Flagship",
    body: "The same 39 end-to-end test cases written twice - Playwright (TypeScript) and Selenium (Java + TestNG) - against my live Nithyakarma app. Covers UI flows plus negative UI and API cases. GitHub Actions runs both suites on every push and publishes a side-by-side results page.",
    links: [
      { label: "GitHub →", href: "https://github.com/HunterSreeni/nithyakarma-quality-lab" },
      { label: "Live results →", href: "https://huntersreeni.github.io/nithyakarma-quality-lab/" },
      { label: "DSA case study →", href: "/case-studies/quality-lab-dsa.html" },
    ],
  },
  {
    caseId: "TC-002 · nithyakarma-delivery-pipeline",
    name: "Nithyakarma Delivery Pipeline",
    status: "Flagship",
    body: "A Java + Selenium + REST Assured suite delivered through Docker, a Kubernetes Job on kind (Chrome as a native sidecar) and a parameterised Jenkins pipeline, against the live app's production data. Secrets stay out of Git, image layers and logs; writes are opt-in and undone; every failure along the way is logged with cause and fix.",
    links: [
      { label: "GitHub →", href: "https://github.com/HunterSreeni/nithyakarma-delivery-pipeline" },
      { label: "Case study →", href: "/case-studies/delivery-pipeline.html" },
    ],
  },
  {
    caseId: "TC-003 · nithyakarma.org",
    name: "Nithyakarma",
    status: "Flagship",
    body: "A community daily-ritual tracker, not a solo personal tool - built and maintained end to end for a wider group of practitioners. React + Vite PWA on Supabase, packaged for Android via Capacitor and live on Google Play. A GitHub Actions pipeline gates every release on automated tests. I own the product decisions, the build, the release, and the debugging.",
    links: [
      { label: "Visit →", href: "https://nithyakarma.org" },
      { label: "Play Store →", href: "https://play.google.com/store/apps/details?id=org.nithyakarma.app" },
    ],
  },
  {
    caseId: "TC-004 · Google × Hack2skill",
    name: "Steady",
    status: undefined,
    body: "A GenAI-powered recovery companion and caregiver support app, built solo in one hackathon sprint - with a real end-to-end test suite, not just a demo. Placed #6 on the leaderboard with 4 bonus-round rewards.",
    links: [
      { label: "GitHub →", href: "https://github.com/HunterSreeni/hack2skill" },
      { label: "Certificate →", href: "/certs/promptwars-kerala-2026.pdf" },
    ],
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
            <div className="mt-auto flex flex-wrap gap-2.5 border-t border-dashed border-neutral pt-2.5">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener" className="pill-btn whitespace-nowrap">
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
