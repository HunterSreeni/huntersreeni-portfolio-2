import { useRef, useState } from "react"
import heroPhoto from "../assets/hero.jpg"

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({
      rx: (0.5 - py) * 22,
      ry: (px - 0.5) * 22,
      mx: px * 100,
      my: py * 100,
    })
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 })
  }

  return (
    <section id="top" className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
      <div className="text-center md:text-left">
        <p className="mb-2.5 text-xs font-semibold tracking-wider text-stroke uppercase">
          QA Engineer · Security Practitioner · AI Engineer
        </p>
        <h1 className="mb-1 text-4xl font-bold text-primary-dark sm:text-5xl">
          Sreenivasan Sivakumar
        </h1>

        <div className="relative mb-4 h-8 text-xl font-semibold text-primary">
          <span className="tagline tagline-1">QA Engineer &amp; Automation Architect</span>
          <span className="tagline tagline-2">SecOps Enthusiast</span>
          <span className="tagline tagline-3">AI Engineer - Toolsmith, Not 10x Hype</span>
        </div>

        <p className="mx-auto mb-6 max-w-[46ch] text-text-soft md:mx-0">
          I test software for a living, break into systems for fun, and use AI like a craftsman
          uses a tool - deliberately, only when it's the right one, and honestly about when it isn't.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5 md:justify-start">
          <a
            href="#arsenal"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark shadow-[0_4px_14px_rgba(65,254,143,0.35)] transition-transform hover:-translate-y-0.5"
          >
            See the Arsenal ↓
          </a>
          <a
            href="#contact"
            className="rounded-full border-[1.5px] border-stroke px-6 py-3 font-semibold text-primary hover:bg-neutral"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="flex justify-center" style={{ perspective: "900px" }}>
        <div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[280px] w-[280px] rounded-full bg-[conic-gradient(from_210deg,var(--color-accent),var(--color-stroke),var(--color-primary-light),var(--color-accent))] p-2 transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={heroPhoto}
            alt="Sreenivasan Sivakumar"
            className="h-full w-full rounded-full border-[5px] border-bg object-cover"
            style={{ transform: "translateZ(20px)" }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full mix-blend-overlay transition-[background] duration-150 ease-out"
            style={{
              background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.55), transparent 55%)`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
