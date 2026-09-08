import { Caveat, IBM_Plex_Mono, Newsreader } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-newsreader",
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
})

const fontHandwritten = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontHandwritten.variable,
  "[--font-sans:var(--font-newsreader)]",
  "[--font-mono:var(--font-ibm-plex-mono)]",
  "[--font-serif:var(--font-newsreader)]"
)
