const LINKS = [
  ["Email", "mailto:huntersreenihs@gmail.com"],
  ["GitHub", "https://github.com/HunterSreeni"],
  ["LinkedIn", "https://www.linkedin.com/in/sreenivasan-s/"],
  ["Instagram", "https://www.instagram.com/huntersreeni"],
] as const

export default function Contact() {
  return (
    <footer id="contact" className="bg-primary-dark py-12 text-[#dcdcff]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-3.5 px-6 text-center">
        <h2 className="m-0 text-2xl font-bold text-white">Let's connect</h2>
        <div className="flex flex-wrap justify-center gap-3.5">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-[#e4e4ff]/35 px-[18px] py-2 text-sm font-semibold text-[#e4e4ff] transition-colors hover:border-accent hover:bg-accent hover:text-primary-dark"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="m-0 font-mono text-[12px] text-[#b7b7e0]">Built with curiosity by Sreenivasan · 2026</p>
      </div>
    </footer>
  )
}
