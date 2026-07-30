function CertCard({
  name,
  issuer,
  link,
  badge,
  compact,
}: {
  name: string
  issuer: string
  link?: string
  badge?: string
  compact?: boolean
}) {
  return (
    <div
      className={`mb-2.5 flex items-center justify-between gap-4 rounded-xl border border-neutral last:mb-0 ${
        compact ? "bg-bg-alt px-5 py-3" : "bg-white px-5 py-4"
      }`}
    >
      <div className="flex flex-col gap-0.5">
        <span className={`font-semibold text-text ${compact ? "text-sm" : ""}`}>{name}</span>
        <span className="text-[13px] text-text-soft">{issuer}</span>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener"
          className="shrink-0 rounded-full border border-stroke px-3.5 py-1.5 text-sm font-semibold text-primary"
        >
          View
        </a>
      )}
      {badge && <span className="shrink-0 text-base font-extrabold text-accent">{badge}</span>}
    </div>
  )
}

export default function Arsenal() {
  return (
    <section id="arsenal" className="bg-bg-alt px-6 py-12">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">02 · The Arsenal</p>
        <h2 className="mb-8 text-3xl font-bold text-primary-dark">Certifications &amp; credentials</h2>

        <div className="mb-9">
          <h3 className="mb-3.5 flex items-center gap-2.5 text-[1.05rem] font-bold text-primary-dark">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-light" />
            QA
          </h3>
          <CertCard
            name="Test Automation Professional Certificate"
            issuer="LambdaTest · 2023"
            link="https://www.linkedin.com/learning/certificates/bc8567aef4f76af9d0a3d3ff47b8466c3eccc7e5b5ceb157fb6adfa8537d235c/"
          />
          <CertCard
            name="Software Testing with Jira & Agile"
            issuer="Udemy · 2022"
            link="https://www.udemy.com/certificate/UC-a75613d7-6c0f-4ef2-b1a4-859db9eacb3a/"
          />
          <CertCard
            name="Selenium WebDriver with Java - Basics to Advanced + Frameworks"
            issuer="Udemy · 2022"
            link="https://www.udemy.com/certificate/UC-b92acd90-4895-433f-a025-fbd4d16b7e4e/"
          />
        </div>

        <div className="mb-9">
          <h3 className="mb-3.5 flex items-center gap-2.5 text-[1.05rem] font-bold text-primary-dark">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            AI
          </h3>
          <CertCard name="Claude 101" issuer="Anthropic · Skilljar · Completed" link="/certs/claude-101.pdf" />
          <CertCard
            name="Claude Code 101"
            issuer="Anthropic · Skilljar · Completed"
            link="/certs/claude-code-101.pdf"
          />
        </div>

        <div>
          <h3 className="mb-3.5 flex items-center gap-2.5 text-[1.05rem] font-bold text-primary-dark">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-stroke" />
            Security
          </h3>
          <CertCard
            name="Jr Penetration Tester"
            issuer="TryHackMe · Learning Path · Sep 2025 · 30h 40m"
            link="/certs/thm-jr-pentester.pdf"
          />
          <CertCard
            name="Advent of Cyber 2025"
            issuer="TryHackMe · 24 challenges completed · Dec 2025"
            link="/certs/thm-advent-of-cyber-2025.pdf"
          />
        </div>
      </div>
    </section>
  )
}
