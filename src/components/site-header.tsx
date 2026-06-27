import Link from "next/link"

import { navItems, site } from "@/lib/content"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/94 text-ink backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-7 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-ink/76 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className="nav-link nav-link-dark" href={item.href} key={item.href}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <Link className="flex items-center justify-center" href="/" aria-label="Moho Mexican Grill home">
          <img alt={site.name} className="h-10 w-auto sm:h-12" src={site.logoUrl} />
        </Link>

        <nav className="flex items-center justify-start text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-ink/76 lg:hidden" aria-label="Mobile navigation">
          <Link className="transition hover:text-tomato" href="/menu">Menu</Link>
        </nav>

        <div className="flex justify-end">
          <a className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink transition hover:bg-ink hover:text-cream sm:px-5" href={site.orderUrl}>
            Order Now
          </a>
        </div>
      </div>
    </header>
  )
}
