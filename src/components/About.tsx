const CARDS = [
  {
    title: "The day job",
    body: "I'm a QA Engineer at XOGO - manual and automated testing, cross-platform debugging, and making sure software does what it says before it reaches a customer. Four years in, and it's still the mainstay, not a phase I'm outgrowing.",
  },
  {
    title: "The security side",
    body: "Working through TryHackMe's Jr Penetration Tester path and their annual Advent of Cyber challenges because breaking things properly makes me better at making sure they don't break in production.",
  },
  {
    title: "The toolsmith angle",
    body: "AI is a tool. A good one, in the right hands. I've been building with it since 2023, before the hype cycle really took off - Claude and Claude Code now, real projects, measured results. No \"10x productivity\" claims, no fake screenshots, no selling hype to people who don't know better yet.",
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-6 py-12">
      <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">01 · About</p>
      <h2 className="mb-8 text-3xl font-bold text-primary-dark">Who am I?</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {CARDS.map((c) => (
          <div key={c.title} className="rounded-2xl border border-neutral bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-primary">{c.title}</h3>
            <p className="text-text-soft">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
