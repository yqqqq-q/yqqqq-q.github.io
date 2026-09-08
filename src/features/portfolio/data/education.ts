import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "northwestern",
    school: "Northwestern University",
    degree: "Master’s degree",
    fieldOfStudy: "Computer Engineering",
    period: {
      start: "2024",
      end: "2026",
    },
    description: `- Graduated with a 3.96/4.0 GPA.
  - Developed an end-to-end hand gesture recognition system using wearable EMG sensors, covering data collection, preprocessing, feature extraction, and model evaluation.
  - Conducted research on sports video and data analysis using YOLO, Vision Transformers, and machine learning models.
  - Studied AI and LLMs, cloud computing, networking, cybersecurity, data forensics, and distributed systems.`,
    skills: [
      "Python",
      "Java",
      "C++",
      "SQL",

      "Machine Learning",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "OpenAI",
      "LLMs",

      "Health Data Science",
      "Biomedical Signal Processing",
      "EMG Sensors",

      "Computer Vision",
      "YOLO",
      "Sports Analytics",
      "Prediction on Decision Making",

      "Azure",
      "Distributed Systems",
      "Computer Networks",
      "Network Measurement",
      "Network Theory",

      "Cyberforensics",
      "Cryptography",
    ],
  },

  {
    id: "liverpool",
    school: "University of Liverpool",
    degree: "Bachelor’s degree",
    fieldOfStudy: "Computer Science and Electronic Engineering",
    period: {
      start: "2022",
      end: "2024",
    },
    description: `- Graduated with First-Class Honours and a 4.0/4.0 GPA.
  - Earned the Academic Excellence Award (Top 2%).
  - Developed an FPS game using Unity and C#, and an IoT security system integrating Azure IoT Hub with embedded hardware.
  - Completed a graduate thesis on language-model-based writer tone imitation using PyTorch, LLMs, and n-gram models.
  - Served as Ultimate Frisbee Team Captain, leading team activities and fostering collaboration.`,
    skills: [
      "C++",
      "Python",
      "C#",
      "Collaborative Programming",
      "Unity",
      "Azure",
      "PyTorch",
      "Data Analysis",
      "LLMs",
      "N-grams",
      "Machine Learning",
      "Arduino",
      "Networking",
      "Software Engineering",
      "E-Comerce Website",
      "Team Leadership",
    ],
  },

  {
    id: "xjtlu",
    school: "Xi’an Jiaotong-Liverpool University",
    degree: "Bachelor’s degree",
    fieldOfStudy: "Computer Science and Digital Media Technology",
    period: {
      start: "2020",
      end: "2022",
    },
    description: `- Earned the Academic Achievement Award (Top 10%).
  - Built a strong foundation in software engineering, C++, Python, networking, and electronic engineering.
  - Served as Film Club member, Choir Board Member, and Women’s Basketball Manager, developing leadership and teamwork experience.`,
    skills: [
      "C++",
      "Python",
      "AI & Machine Learning",
      "Software Engineering",
      "Data Analysis",
      "Data Visualization",
      "Networking",
      "Electronic Engineering",
      "Team Leadership",
    ],
  },
]
