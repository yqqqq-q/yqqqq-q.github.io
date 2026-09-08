import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "torchlight",
    companyName: "Torchlight Basketball Society",
    location: "Albany, NY",
    locationType: "Hybrid",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1",
        title: "Lead Software Engineer",
        employmentPeriod: {
          start: "2026",
        },
        employmentType: "Full-time",
        description: `- Developed and maintained full-stack web applications using React, Spring Boot, AWS, PostgreSQL, and Docker.
  - Eliminated real-time data desynchronization by implementing resilient offline data handling and synchronization for critical tracking tools.
  - Collaborated through Git-based workflows, CI/CD pipelines, feature branches, pull requests, and peer reviews.`,
        icon: <CodeXmlIcon />,
        skills: [
          "React",
          "Spring Boot",
          "AWS",
          "PostgreSQL",
          "Docker",
          "Git",
          "CI/CD",
        ],
      },
    ],
  },

  {
    id: "faishion",
    companyName: "fAIshion Inc",
    location: "San Francisco, CA",
    locationType: "Hybrid",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "2025",
          end: "2025",
        },
        employmentType: "Internship",
        description: `- Built a generalized browser-extension injection system supporting data extraction across 83% of e-commerce platforms and improving processing efficiency by 71%.
  - Developed backend services with Flask and FastAPI to manage and serve validated retail data.
  - Optimized a scalable Python scraping and data-storage pipeline using Playwright, Selenium, and MongoDB, reducing processing time by 92% and improving scraping accuracy by 78%.`,
        icon: <CodeXmlIcon />,
        skills: [
          "Python",
          "FastAPI",
          "Flask",
          "MongoDB",
          "Playwright",
          "Selenium",
          "Git",
        ],
      },
    ],
  },

  {
    id: "china-telecom",
    companyName: "AI Software Development Centre, China Telecom",
    location: "Shaoxing, China",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Full-stack Developer Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        description: `- Developed RESTful and GraphQL APIs for document ingestion and chat interactions using Spring.
  - Built responsive web pages with React, hooks, and props, increasing user engagement by 24%.
  - Explored scalable microservice architectures using Spring Cloud and Kubernetes.`,
        icon: <CodeXmlIcon />,
        skills: [
          "Java",
          "Spring",
          "React",
          "REST APIs",
          "GraphQL",
          "Redis",
          "PostgreSQL",
          "Kubernetes",
        ],
      },
    ],
  },

  {
    id: "carbontwin",
    companyName: "CarbonTwin Technologies Ltd",
    location: "London, UK",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "AI and Software Engineering Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        description: `- Integrated LLM APIs with domain-specific expert systems, improving recommendation accuracy by 16%.
  - Applied PyTorch and transformer-based deep learning models to optimize data processing and improve decision-making efficiency by 69%.
  - Collaborated with cross-functional teams on UX/UI design and AI-enabled software feature implementation.`,
        icon: <CodeXmlIcon />,
        skills: [
          "Python",
          "PyTorch",
          "Transformers",
          "LLM APIs",
          "LangChain",
          "RAG",
          "AI",
        ],
      },
    ],
  },

  {
    id: "supcon",
    companyName: "SUPCON Technology Co., Ltd.",
    location: "Hangzhou, China",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "AI and Software Engineering Intern",
        employmentPeriod: {
          start: "2022",
          end: "2022",
        },
        employmentType: "Internship",
        description: `- Developed and executed software test cases for image classification systems to improve software quality and testing coverage.
  - Installed, configured, documented, and maintained Windows Server 2016 environments.
  - Collaborated with engineers to identify and troubleshoot software defects and deployment issues.`,
        icon: <CodeXmlIcon />,
        skills: [
          "Software Testing",
          "Debugging",
          "Windows Server",
          "Image Classification",
          "Technical Documentation",
        ],
      },
    ],
  },
]
