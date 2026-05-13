import { projects } from "@/content/projects";
import ProjectCard from "@/components/project-card";

export default function ProjectGrid() {
  return (
    <div className="border-t border-black/10">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} index={index} {...project} />
      ))}
    </div>
  );
}