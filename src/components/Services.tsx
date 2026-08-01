import * as THREE from "three"
import WireGadget from "./WireGadget"

const CAL_LINK = "https://cal.com/huntersreeni-hs-vzp44e/30min"

export default function Services() {
  return (
    <section id="services" className="bg-bg-alt px-6 py-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 · Services</p>
            <h2 className="text-3xl font-bold text-primary-dark">AI Efficiency Audit</h2>
          </div>
          <WireGadget
            className="section-gadget"
            geometry={() => new THREE.OctahedronGeometry(1, 0)}
            color={0x6666cc}
            speed={0.009}
          />
        </div>
        <div className="reveal-card mt-8 rounded-2xl bg-primary-dark p-9 text-white">
          <p className="mb-4 text-[#dcdcff]">
            Most AI usage is wasteful - too many tokens spent for too little output, prompts that fight the
            model instead of working with it, workflows that would take half the time with the right setup.
          </p>
          <p className="mb-6 text-[#dcdcff]">
            Solo builder, a team, or a whole business - doesn't matter. I audit how you're actually using AI -
            Claude or otherwise - and show you where the waste is: token spend, prompt structure, tool/agent
            design, and where AI shouldn't be used at all. The goal is less spend, more signal, and no gimmicks.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="text-[1.1rem] font-semibold text-white/45 line-through">₹1599</span>
                <span className="text-2xl font-extrabold text-accent">₹999</span>
                <span className="verdict-pill verdict-pass">Early bird - 38% off</span>
              </div>
              <span className="font-mono text-[13px] text-[#dcdcff]">30-minute audit call</span>
            </div>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark shadow-[0_4px_14px_rgba(65,254,143,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Book a call →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
