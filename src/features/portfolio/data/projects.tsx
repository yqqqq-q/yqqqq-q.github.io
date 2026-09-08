import { ChanhDaiMark } from "@/components/chanhdai-mark"
import {
  QuaricIcon,
  ReactWheelPickerIcon,
  ZaDarkIcon,
} from "@/components/icons"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "React Wheel Picker",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by [▲ Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker)
- Natural touch scrolling with smooth inertia, mouse drag and scroll for desktop
- Infinite loop scrolling
- Unstyled core for complete style customization
- Full keyboard navigation and type-ahead search
`,
    icon: <ReactWheelPickerIcon />,
    isExpanded: true,
  },
]
