import { projects } from "@/content/projects";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        label="Selected Works"
        title="Systems, tools, and experiments."
        description="A collection of projects across AI, secure systems, cloud engineering, and developer tooling."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}