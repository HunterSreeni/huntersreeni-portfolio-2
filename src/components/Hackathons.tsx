export default function Hackathons() {
  return (
    <section id="hackathons" className="bg-bg-alt px-6 py-12">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">04 · AI Hackathons</p>
        <h2 className="mb-8 text-3xl font-bold text-primary-dark">Built under a clock</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="relative flex flex-col rounded-2xl border-[1.5px] border-stroke bg-white p-6">
            <span className="absolute -top-2.5 right-5 rounded-full bg-stroke px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-white uppercase">
              Hackathon
            </span>
            <h3 className="mb-1 text-lg font-bold text-primary-dark">Steady</h3>
            <p className="mb-1 text-xs font-bold tracking-wide text-primary-light uppercase">
              Google × Hack2skill - PromptWars: Kerala
            </p>
            <p className="mb-3 text-text-soft">
              A GenAI-powered recovery companion and caregiver support app, built solo in one hackathon
              sprint - with a real e2e test suite, not just a demo.
            </p>
            <p className="mb-2 inline-block w-fit rounded-lg bg-neutral px-3 py-2 text-sm font-semibold text-primary-dark">
              Result: #6 on the main event leaderboard · 4 bonus-round rewards
            </p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href="https://github.com/HunterSreeni/hack2skill"
                target="_blank"
                rel="noopener"
                className="w-fit rounded-full border border-stroke px-4 py-2 text-sm font-semibold text-primary hover:bg-neutral"
              >
                GitHub →
              </a>
              <a
                href="/certs/promptwars-kerala-2026.pdf"
                target="_blank"
                rel="noopener"
                className="w-fit rounded-full border border-stroke px-4 py-2 text-sm font-semibold text-primary hover:bg-neutral"
              >
                Certificate →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
