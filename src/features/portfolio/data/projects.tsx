import {
  BrainCircuitIcon,
  ChartNoAxesCombinedIcon,
  CloudCogIcon,
  CodeXmlIcon,
  CpuIcon,
  Gamepad2Icon,
  GlobeIcon,
  ScaleIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
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
      "PyTorch",
      "Computer Vision",
      "YOLO",
      "Vision Transformers",
      "Sports Analytics",
    ],
    description: `Machine learning research for sports video and data analysis.
  - Automated data collection, sampling, and annotation workflows using CVAT
  - Built mathematical simulation models to support sports strategy and decision-making
  - Developed and optimized computer vision models for sports video analysis
  - Fine-tuned YOLO and Vision Transformer models and evaluated their performance`,

    icon: <ChartNoAxesCombinedIcon />,
  },

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
      "Signal Processing",
    ],
    description: `Biometric gesture recognition system using wearable EMG sensors.
  - Built pipelines for data acquisition, preprocessing, feature extraction, and evaluation
  - Classified EMG patterns from non-natural hand gestures using machine learning`,
    icon: <BrainCircuitIcon />,
    isExpanded: true,
  },

  {
    id: "azure-iot",
    title: "Secure Azure IoT System",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "C++",
      "Arduino",
      "Azure",
      "Azure IoT Hub",
      "IoT",
      "Embedded Systems",
    ],
    description: `Secure IoT system connecting Arduino hardware with Microsoft Azure.
  - Built device connectivity and communication using Azure IoT Hub
  - Integrated embedded hardware, cloud services, and data-processing workflows`,
    icon: <CloudCogIcon />,
  },

  {
    id: "llm-writer-tone",
    title: "Language Model-Based Writer Tone Imitation",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: ["Python", "PyTorch", "CUDA", "NLP", "LSTM", "LLMs"],
    description: `Research on language models for reproducing individual writing styles.
  - Implemented n-gram, LSTM, and LLM-based text generation approaches
  - Compared model architectures and their ability to reproduce target writing styles`,
    icon: <BrainCircuitIcon />,
  },

  {
    id: "equity-decision-making",
    title: "Equality, Equity & Decision-Making",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "Decision-Making",
      "Social Science",
      "Equality",
      "Equity",
      "Social Systems",
    ],
    description: `Interdisciplinary research on equality and equity in decision-making.
  - Developed a framework for analyzing equality, equity, and preferential treatment
  - Examined how social norms influence resistance to more equitable outcomes`,
    icon: <ScaleIcon />,
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
    ],
    description: `Research on improving the efficiency of word embedding models.
  - Applied quantization to Word2Vec and embedding representations
  - Evaluated tradeoffs between resource usage, efficiency, and representation quality`,
    icon: <CpuIcon />,
  },

  {
    id: "cookie-measurement",
    title: "Internet Measurement: Third-Party Cookies",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "",
    skills: [
      "Python",
      "Selenium",
      "Web Crawling",
      "Internet Measurement",
      "Data Analysis",
      "Cookies",
    ],
    description: `Internet measurement study on the effects of disabling third-party cookies.
  - Built a Selenium crawler to collect data from the top 10,000 Tranco-ranked websites under varied clickstream conditions
  - Analyzed browsing data to evaluate how disabling third-party cookies affects user behavior`,

    icon: <GlobeIcon />,
  },

  {
    id: "fps-game",
    title: "First-Person Shooter Game",
    period: {
      start: "09.2022",
      end: "06.2023",
    },
    link: "",
    skills: ["C#", "Unity", "Object-Oriented Programming", "Game Development"],
    description: `First-person shooter game built with Unity and C#.
  - Implemented player controls, gameplay mechanics, and interactive systems
  - Applied object-oriented design throughout development`,
    icon: <Gamepad2Icon />,
  },

  {
    id: "qt-software",
    title: "C++ Desktop Software with Qt",
    period: {
      start: "09.2021",
      end: "06.2022",
    },
    link: "",
    skills: ["C++", "Qt", "GUI Development", "Object-Oriented Programming"],
    description: `Desktop application built with C++ and Qt.
  - Designed and implemented interactive GUI components
  - Applied object-oriented design and C++ software engineering practices`,
    icon: <CodeXmlIcon />,
  },
]
