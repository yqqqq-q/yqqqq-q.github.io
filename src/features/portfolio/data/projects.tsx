import {
  BrainCircuitIcon,
  ChartNoAxesCombinedIcon,
  CloudCogIcon,
  CodeXmlIcon,
  CpuIcon,
  Gamepad2Icon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "emg-gesture-recognition",
    title: "EMG-Based Biometric Gesture Recognition",
    period: {
      start: "09.2025",
      end: "06.2026",
    },
    link: "",
    skills: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "EMG Sensors",
      "Biomedical Signal Processing",
    ],
    description: `End-to-end biometric gesture recognition system using wearable EMG sensors.
  - Processed EMG signals for non-natural hand gesture recognition
  - Applied preprocessing, feature extraction, and machine learning for gesture classification`,
    icon: <BrainCircuitIcon />,
    isExpanded: true,
  },

  {
    id: "sports-analysis",
    title: "Sports Video & Data Analysis",
    period: {
      start: "09.2025",
      end: "06.2026",
    },
    link: "",
    skills: [
      "Python",
      "Computer Vision",
      "YOLO",
      "Vision Transformers",
      "Machine Learning",
      "Sports Analytics",
    ],
    description: `Machine learning research for sports video and data analysis.
  - Built and evaluated models for sports video analysis and simulation
  - Applied YOLO and Vision Transformers to sports-related computer vision tasks`,
    icon: <ChartNoAxesCombinedIcon />,
    isExpanded: true,
  },
  {
    id: "llm-writer-tone",
    title: "Language Model-Based Writer Tone Imitation",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "Python",
      "PyTorch",
      "LLMs",
      "Natural Language Processing",
      "N-gram Models",
      "OpenAI",
    ],
    description: `Undergraduate thesis exploring language models for writer tone imitation.
  - Developed language models to learn and reproduce individual writing styles
  - Compared n-gram and neural language models for tone imitation performance
  - Applied PyTorch and LLM-based approaches to text generation and style analysis`,
    icon: <BrainCircuitIcon />,
    isExpanded: true,
  },
  {
    id: "word-embedding-quantization",
    title: "Word Embedding Quantization & Energy Efficiency",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "Python",
      "PyTorch",
      "Word2Vec",
      "Word Embeddings",
      "Quantization",
      "NLP",
      "Energy Efficiency",
    ],
    description: `Research project investigating quantization of word embeddings and its impact on computational efficiency.
  - Applied quantization techniques to Word2Vec and word embedding models
  - Evaluated the trade-off between model efficiency, resource usage, and representation quality
  - Analyzed the potential for quantized embeddings to reduce energy consumption`,
    icon: <CpuIcon />,
    isExpanded: true,
  },

  {
    id: "azure-iot",
    title: "Azure IoT Security System",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "Azure",
      "Azure IoT Hub",
      "C++",
      "Arduino",
      "IoT",
      "Embedded Systems",
    ],
    description: `Secure IoT system connecting embedded hardware to Microsoft Azure.
  - Integrated Arduino-based hardware with Azure IoT Hub for secure device connectivity
  - Implemented device communication and data-processing workflows`,
    icon: <CloudCogIcon />,
    isExpanded: true,
  },

  {
    id: "fps-game",
    title: "First-Person Shooter Game",
    period: {
      start: "09.2022",
      end: "06.2023",
    },
    link: "",
    skills: ["C#", "Unity", "Game Development", "Object-Oriented Programming"],
    description: `First-person shooter game developed with Unity and C#.
  - Implemented gameplay mechanics, player controls, and interactive game systems
  - Applied object-oriented programming and software engineering principles`,
    icon: <Gamepad2Icon />,
    isExpanded: true,
  },

  {
    id: "qt-software",
    title: "C++ Software Development with Qt",
    period: {
      start: "09.2021",
      end: "06.2022",
    },
    link: "",
    skills: [
      "C++",
      "Qt",
      "GUI Development",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
    description: `Desktop software developed in C++ using the Qt framework.
  - Designed and implemented interactive GUI components
  - Applied object-oriented design and C++ software engineering practices`,
    icon: <CodeXmlIcon />,
    isExpanded: true,
  },
]
