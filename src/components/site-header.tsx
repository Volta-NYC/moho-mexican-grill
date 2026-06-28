"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems, site } from "@/lib/content"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const headerClass = isHome
    ? "site-header-home"
    : "site-header-contrast"
  const logoClass = isHome ? "h-10 w-auto sm:h-12" : "h-10 w-auto sm:h-12"

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${headerClass}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-7 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-ink/76 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className="nav-link nav-link-dark" href={item.href} key={item.href}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <Link className="flex items-center justify-center" href="/" aria-label="Moho Mexican Grill home">
          <img alt={site.name} className={logoClass} src={site.logoUrl} />
        </Link>

        <nav className="flex items-center justify-start text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-ink/76 lg:hidden" aria-label="Mobile navigation">
          <Link className="transition hover:text-tomato" href="/menu">Menu</Link>
        </nav>

        <div className="flex justify-end">
          <a className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink transition hover:bg-olive hover:text-cream sm:px-5" href={site.orderUrl}>
            Order Now
          </a>
        </div>
      </div>
    </header>
  )
}
