import { link } from "fs";

export const projects = [
  {
    title: "codellamas - Java Spring Boot Refactoring Exercise Generator",
    slug: "codellamas",
    year: "2026",
    type: "Final Year Project",
    thumbnail: "/images/projects/codellamas.png",
    description:
      "An AI-powered VSCode extension that generates and evaluates Spring Boot refactoring exercises",
    stack: ["FastAPI", "CrewAI", "Spring Boot", "TypeScript"],
    summary: "codellamas - An AI-powered VSCode extension to help students learn software refactoring through generated exercises.",
    details: "",
    links: [
      {
        label: "Visual Studio Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=MichaelSuteja.codellamas",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/melly19/codellamas",
      },
    ]
  },
  {
    title: "American Sign Language Recognition Software",
    slug: "sign-language-recognition",
    year: "2025",
    type: "AI",
    thumbnail: "/images/projects/sign-language-recognition.png",
    description:
      "A computer vision system for American Sign Language recognition using ResNet50 and MediaPipe",
    stack: ["TensorFlow", "Keras", "MediaPipe"],
    summary: "An AI-powered computer vision system for recognizing American Sign Language using ResNet50 and MediaPipe.",
    details: "",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/msuteja/signLanguage",
      },
    ]
  },
];

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}