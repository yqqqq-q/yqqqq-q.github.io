export { cn } from "cn"

export function absoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_APP_URL || "https://yqqqq-q.github.io"
  return `${base}${path}`
}
