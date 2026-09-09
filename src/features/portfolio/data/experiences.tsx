import { CodeXmlIcon } from "lucide-react"

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
        description: `
- Developed and maintained full-stack web applications using React, Spring Boot, AWS, PostgreSQL, and Docker.
- Eliminated real-time data desynchronization by implementing resilient offline-capable data handling and synchronization for critical tracking tools.
- Collaborated through Git-based workflows, feature branches, pull requests, peer reviews, and CI/CD pipelines.
- Served as a scorekeeper for basketball tournaments and events, supporting accurate game records and smooth event operations.`.trim(),
        icon: <CodeXmlIcon />,
        skills: [
          "React",
          "Spring Boot",
          "AWS",
          "PostgreSQL",
          "Docker",
          "Git",
          "DevOps",
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
    isCurrentEmployer: false,
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "2025",
          end: "2025",
        },
        employmentType: "Internship",
        description: `
- Built a generalized browser-injection system supporting data extraction across 83% of tested e-commerce platforms, improving data-processing efficiency by 71% and earning a performance bonus.
- Developed backend services with FastAPI and Flask to validate retail data, integrating with frontend services.
- Managed and maintained retail data in MongoDB, supporting reliable data storage and retrieval.
- Optimized a scalable Playwright and Selenium scraping and data-storage pipeline, reducing processing time by 92% and improving extraction accuracy by 78%.`.trim(),
        icon: <CodeXmlIcon />,
        skills: [
          "Python",
          "FastAPI",
          "Flask",
          "Playwright",
          "Selenium",
          "MongoDB",
          "Plasmo",
        ],
      },
    ],
  },
  {
    id: "china-telecom",
    companyName: "AI Software Development Centre, China Telecom",
    location: "Shaoxing, China",
    locationType: "On-site",
    isCurrentEmployer: false,
    positions: [
      {
        id: "1",
        title: "Full-stack Developer Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        description: `
- Developed RESTful and GraphQL API services using Spring, Redis, and PostgreSQL for document ingestion and chat interactions.
- Built responsive web pages with React using hooks and props, improving user engagement by 24%.
- Explored scalable microservice architectures using Spring Cloud and Kubernetes.`.trim(),
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
    locationType: "Hybrid",
    isCurrentEmployer: false,
    positions: [
      {
        id: "1",
        title: "AI and Software Engineering Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        description: `
- Integrated LLM APIs and retrieval-augmented generation with LangChain into domain-specific expert systems, improving advising accuracy by 16%.
- Applied PyTorch and transformer-based models to optimize data-processing workflows, improving decision-making efficiency by 69%.
- Collaborated with cross-functional teams to design and implement AI-enabled software features and UX/UI design.`.trim(),
        icon: <CodeXmlIcon />,
        skills: [
          "Python",
          "PyTorch",
          "LLM APIs",
          "RAG",
          "LangChain",
          "Transformers",
        ],
      },
    ],
  },
  {
    id: "supcon",
    companyName: "SUPCON Technology Co., Ltd.",
    location: "Hangzhou, China",
    locationType: "On-site",
    isCurrentEmployer: false,
    positions: [
      {
        id: "1",
        title: "AI and Software Engineering Intern",
        employmentPeriod: {
          start: "2022",
          end: "2022",
        },
        employmentType: "Internship",
        description: `
- Developed and executed test cases for image-recognition systems to improve software quality and testing coverage.
- Installed and configured Windows Server environments and supported deployment and testing activities.
- Authored technical documentation and validation reports while working with engineers to identify and troubleshoot software defects.`.trim(),
        icon: <CodeXmlIcon />,
        skills: [
          "Software Testing",
          "Windows Server",
          "System Administration",
          "Debugging",
          "Technical Documentation",
        ],
      },
    ],
  },
]
