import type { ReactNode } from "react"

type SectionProps = {
  id: string
  alt?: boolean
  className?: string
  children: ReactNode
}

export default function Section({ id, alt, className, children }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-12 ${alt ? "bg-bg-alt" : ""} ${className ?? ""}`}>
      <div className="mx-auto max-w-[1100px]">{children}</div>
    </section>
  )
}
