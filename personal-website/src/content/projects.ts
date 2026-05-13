export const projects = [
  {
    title: "codellamas - Java Spring Boot Refactoring Exercise Generator",
    slug: "codellamas",
    year: "2026",
    type: "Final Year Project",
    description:
      "An AI-powered VSCode extension that generates and evaluates Spring Boot refactoring exercises.",
    stack: ["FastAPI", "CrewAI", "Spring Boot", "TypeScript"],
    summary: "codellamas - An AI-powered VSCode extension to help students learn software refactoring through generated exercises.",
  },
  {
    title: "American Sign Language Recognition Software",
    slug: "sign-language-recognition",
    year: "2025",
    type: "AI",
    description:
      "A computer vision system for sign language recognition using ResNet50 and MediaPipe.",
    stack: ["TensorFlow", "Keras", "MediaPipe"],
    summary: "An AI-powered computer vision system for recognizing American Sign Language using ResNet50 and MediaPipe.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}