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
      "PyTorch",
      "LLMs",
      "Computer Vision",
      "AWS",
      "Azure",
      "Distributed Systems",
      "Computer Networks",
      "Cybersecurity",
    ],
  },

  {
    id: "liverpool",
    school: "University of Liverpool",
    degree: "Bachelor’s degree",
    fieldOfStudy: "Computer Science and Electronic Engineering",
    period: {
      start: "2020",
      end: "2024",
    },
    description: `- Graduated with First-Class Honours and a 4.0/4.0 GPA.
  - Developed software projects spanning C++, Python, Unity, Azure, Arduino, networking, and machine learning.
  - Built an FPS game using Unity and C#, and developed an IoT security system integrating Azure IoT Hub with embedded hardware.
  - Studied software engineering, C++ development, e-commerce systems, networking, signal processing, and communication systems.`,
    skills: [
      "C++",
      "Python",
      "C#",
      "Unity",
      "Azure",
      "Arduino",
      "Machine Learning",
      "Networking",
      "Software Engineering",
      "Signal Processing",
    ],
  },
]
