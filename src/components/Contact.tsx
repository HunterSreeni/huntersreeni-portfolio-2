const LINKS = [
  ["Email", "mailto:huntersreenihs@gmail.com"],
  ["GitHub", "https://github.com/HunterSreeni"],
  ["LinkedIn", "https://www.linkedin.com/in/sreenivasan-s/"],
  ["Medium", "https://medium.com/@sreenivasan96"],
  ["Instagram", "https://www.instagram.com/huntersreeni"],
] as const

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-[1100px] px-6 py-12 pb-12 text-center">
      <p className="mb-1.5 text-xs font-bold tracking-wider text-stroke uppercase">08 · Contact</p>
      <h2 className="mb-6 text-2xl font-bold text-primary-dark">Let's connect</h2>
      <div className="mb-6 flex flex-wrap justify-center gap-5">
        {LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-stroke px-4 py-2 text-sm font-semibold hover:bg-neutral"
          >
            {label}
          </a>
        ))}
      </div>
      <p className="text-[13px] text-text-soft">Built with curiosity by Sreenivasan · 2026</p>
    </footer>
  )
}
