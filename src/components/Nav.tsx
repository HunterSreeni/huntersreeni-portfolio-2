const LINKS = [
  ["#about", "About"],
  ["#arsenal", "Arsenal"],
  ["#builds", "Builds"],
  ["#hackathons", "Hackathons"],
  ["#archive", "Archive"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#contact", "Contact"],
] as const

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-bold text-primary-dark">
          <img src="/logo.svg" alt="" className="h-10 w-auto" />
          <span>HunterSreeni</span>
        </a>
        <nav className="flex flex-wrap gap-6">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-primary hover:text-stroke"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
