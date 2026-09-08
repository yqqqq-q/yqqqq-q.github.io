import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || USER.website,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/yqqqq-q/yqqqq-q.github.io/blob/personalized/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = []

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
]

/** Twitter/X card handle. Unset when there is no X profile in `SOCIAL`. */
export const X_HANDLE: string | undefined = undefined
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = `${SOCIAL.github.handle}/yqqqq-q.github.io`
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${SOURCE_CODE_GITHUB_REPO}`

export const SPONSORSHIP_URL = SOCIAL.github.href

export const UTM_PARAMS = {
  utm_source: "yqqqq-q.github.io",
}
