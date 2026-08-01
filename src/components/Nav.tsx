import { useState } from "react"

const LINKS = [
  ["#about", "About"],
  ["#hackathons", "Hackathons"],
  ["#arsenal", "Arsenal"],
  ["#builds", "Builds"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#contact", "Contact"],
] as const

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-bold text-primary-dark">
          <img src="/logo.svg" alt="" className="h-10 w-auto" />
          <span>HunterSreeni</span>
        </a>

        <nav className="hidden md:flex md:flex-wrap md:gap-6">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-primary hover:text-stroke">
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-primary-dark transition-colors hover:bg-neutral md:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-neutral px-6 py-3.5 md:hidden">
          <div className="flex flex-col gap-3.5">
            {LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primary hover:text-stroke"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
