import Link from "next/link";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2);

  return (
    <section className="page-shell page-section">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="section-label">Projects</h2>

        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-widest text-black/45 hover:text-black"
        >
          All Projects
        </Link>
      </div>

      <div className="border-t border-black/10">
        {featured.map((project, index) => (
          <Link
            key={project.slug}
            href="/projects"
            className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 transition hover:bg-black/[0.03] md:grid-cols-12"
          >
            <p className="font-mono text-xs text-black/35 md:col-span-1">
              0{index + 1}
            </p>

            <div className="md:col-span-5">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-black/40">
                {project.type} / {project.year}
              </p>
            </div>

            <p className="max-w-xl leading-relaxed text-black/65 md:col-span-6">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}