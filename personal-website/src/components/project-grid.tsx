import { projects } from "@/content/projects";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHeading
        label="Selected Work"
        title="Tools, systems, and experiments."
        description="A focused archive of projects across AI, secure systems, cloud engineering, and developer tooling."
      />

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}