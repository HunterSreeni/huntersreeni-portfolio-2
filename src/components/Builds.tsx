const BUILDS = [
  {
    name: "Electronium",
    flagship: true,
    body: "A local-first MCP server that bridges AI assistants to a real, logged-in Chrome session over Chrome DevTools Protocol - built because Playwright-driven browsers kept getting blocked by Cloudflare and other anti-bot layers. Any MCP-compatible AI can use it, not just mine.",
    linkLabel: "GitHub →",
    href: "https://github.com/HunterSreeni/electron-mcp-browser",
  },
  {
    name: "SreeniBench",
    body: "A practical LLM benchmark spanning security, coding, reasoning, tool use, CI/CD, and supply-chain categories - built to test what actually matters for engineers, not academic trivia. Evolving toward a general-purpose benchmark anyone can run against their own model choices.",
    linkLabel: "GitHub →",
    href: "https://github.com/HunterSreeni/Custom-LLM-Benchmark",
  },
  {
    name: "nithyakarma.org",
    body: "A community project, not a solo personal tool - daily-ritual tracking (PWA + Android) built and maintained for a wider group of practitioners.",
    linkLabel: "Live site →",
    href: "https://nithyakarma.org",
  },
]

export default function Builds() {
  return (
    <section id="builds" className="mx-auto max-w-[1100px] px-6 py-12">
      <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">03 · Builds</p>
      <h2 className="mb-8 text-3xl font-bold text-primary-dark">Active work</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {BUILDS.map((b) => (
          <article
            key={b.name}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
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
            <h3 className="mb-2 text-lg font-bold text-primary-dark">{b.name}</h3>
            <p className="mb-2 text-text-soft">{b.body}</p>
            <a
              href={b.href}
              target="_blank"
              rel="noopener"
              className="mt-auto w-fit self-start rounded-full border border-stroke px-4 py-2 text-sm font-semibold text-primary hover:bg-neutral"
            >
              {b.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
