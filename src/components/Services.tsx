const CAL_LINK = "https://cal.com/huntersreeni-hs-vzp44e/30min"

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1100px] px-6 py-12">
      <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">07 · Services</p>
      <h2 className="mb-8 text-3xl font-bold text-primary-dark">AI Efficiency Audit</h2>
      <div className="rounded-2xl bg-primary-dark p-9 text-white">
        <p className="mb-4">
          Most AI usage is wasteful - too many tokens spent for too little output, prompts that fight the
          model instead of working with it, workflows that would take half the time with the right setup.
        </p>
        <p className="mb-6">
          Solo builder, a team, or a whole business - doesn't matter. I audit how you're actually using AI -
          Claude or otherwise - and show you where the waste is: token spend, prompt structure, tool/agent
          design, and where AI shouldn't be used at all. The goal is less spend, more signal, and no gimmicks.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-accent">₹999</span>
            <span className="text-[13px] text-white">30-minute audit call</span>
          </div>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark shadow-[0_4px_14px_rgba(65,254,143,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
