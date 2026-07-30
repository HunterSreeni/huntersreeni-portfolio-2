const ARCHIVED = [
  {
    flag: "Closed",
    name: "Cadence",
    sub: "Telegram habit-tracker bot",
    body: "The entry point into building agent tools. It worked, but it was tied to Telegram as the interface and hit a ceiling on what I could actually control.",
    outcome: "→ Closed in favor of building MyPensieve",
  },
  {
    flag: "Deferred",
    name: "MyPensieve",
    sub: "Autonomous agent OS with persistent memory",
    body: "Partway through building this, I realized I was rebuilding the same product as OpenClaw (formerly Clawdbot/Moltbot) and Hermes Agent. Took what actually worked, closed the rest.",
    outcome: "→ Became TIM",
  },
  {
    flag: "Local-only",
    name: "ISTQB Mock Exam Platform",
    sub: "Mock-exam app for the ISTQB foundation syllabus",
    body: "Built and used locally as a personal study tool. Never deployed to a public URL - useful, just not shipped.",
    outcome: null,
  },
]

export default function Archive() {
  return (
    <section id="archive" className="mx-auto max-w-[1100px] px-6 py-12">
      <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">05 · Archive</p>
      <h2 className="mb-4 text-3xl font-bold text-primary-dark">Paused, closed, and why</h2>
      <p className="mb-8 max-w-[60ch] text-text-soft">
        Not everything ships forever. Here's what I closed, and what it taught me.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ARCHIVED.map((p) => (
          <article
            key={p.name}
            className="relative flex flex-col rounded-2xl border border-dashed border-stroke bg-bg-alt p-6 opacity-90"
          >
            <span className="absolute -top-2.5 right-5 rounded-full bg-primary-light px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-white uppercase">
              {p.flag}
            </span>
            <h3 className="mb-1 text-lg font-bold text-text-soft">{p.name}</h3>
            <p className="mb-2.5 text-[13px] font-semibold text-primary-light">{p.sub}</p>
            <p className="mb-2 text-text-soft">{p.body}</p>
            {p.outcome && <p className="mt-auto pt-2 text-sm font-semibold text-primary-dark">{p.outcome}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
