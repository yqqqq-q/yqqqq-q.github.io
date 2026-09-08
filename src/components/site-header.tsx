import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { USER } from "@/features/portfolio/data/user"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/80 px-5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex h-(--header-height) items-center justify-between gap-4 border-b border-foreground/10 group-has-data-[slot=layout-wide]/layout:container md:max-w-2xl">
        <Link
          href="/"
          className="font-heading text-[0.9375rem] font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {USER.displayName}
        </Link>

        <ThemeToggle />
      </div>
    </header>
  )
}
