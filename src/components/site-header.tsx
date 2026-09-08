import dynamic from "next/dynamic"
import Link from "next/link"

import { ChanhDaiMark } from "@/components/chanhdai-mark"
import { ThemeToggle } from "@/components/theme-toggle"

const BrandContextMenu = dynamic(
  () => import("@/components/brand-context-menu")
)

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border pr-2 pl-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 md:max-w-3xl">
        {/* <BrandContextMenu>
          <Link href="/" aria-label="Home">
            <ChanhDaiMark className="h-6 shrink-0" />
          </Link>
        </BrandContextMenu> */}

        <div className="flex-1" />

        <ThemeToggle />
      </div>
    </header>
  )
}
