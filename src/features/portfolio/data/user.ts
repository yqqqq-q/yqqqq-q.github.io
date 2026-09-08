import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Yang",
  lastName: "Qian",
  displayName: "Yang Qian",
  username: "yqq",
  gender: "female",
  pronouns: "she/her",
  bio: "",
  flipSentences: [
    "Lead software engineer at Torchlight",
    "Full-stack, ML, and cloud",
    "Computer engineering at Northwestern",
    "Ultimate Frisbee player",
  ],
  address: "Evanston, IL, USA | Zhejiang, China",
  phoneNumberB64: "KzEyMjQ0NTE1MTU5",
  emailB64: "eWFuZy5xaWFuMjEzMUBnbWFpbC5jb20=",
  website: "https://yqqqq-q.github.io",
  jobTitle: "Computer Engineer",
  jobs: [],
  about: `- Master's student in Computer Engineering at Northwestern University.
- Lead software engineer at Torchlight Basketball Society, building full-stack apps with React, Spring Boot, AWS, and PostgreSQL.
- Previously interned at fAIshion, China Telecom, CarbonTwin, and SUPCON — from e-commerce data pipelines to LLM systems and image classification.
- Working on EMG gesture recognition and sports video analysis with PyTorch, YOLO, and vision transformers.
- Studying for the AWS Solutions Architect Associate certification.
- First-Class Honours from the University of Liverpool; former Ultimate Frisbee team captain.
`,
  avatar: "/profile.png",
  avatarVariants: {
    lightOff: "/profile.png",
    lightOn: "/profile.png",
    darkOff: "/profile.png",
    darkOn: "/profile.png",
  },
  ogImage: "/profile.png",
  namePronunciationUrl: "",
  timeZone: "America/Chicago",
  keywords: ["yang qian", "yang qian portfolio"],
  dateCreated: "2026-09-07",
}
