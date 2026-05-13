import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell page-section">
      <Link
        href="/projects"
        className="font-mono text-xs uppercase tracking-widest text-black/45 hover:text-black"
      >
        ← Back to work
      </Link>

      <section className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-black/45">
            {project.type} / {project.year}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/65">
            {project.summary}
          </p>
        </div>

        <aside className="border-t border-black/10 pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-black/40">
            Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-black/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-black/55"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-24 grid grid-cols-1 gap-10 border-t border-black/10 pt-12 md:grid-cols-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-black/45 md:col-span-3">
          Notes
        </p>

        <div className="space-y-8 leading-relaxed text-black/70 md:col-span-7">
          <p>
            This page is intentionally structured as a technical case study.
            You can expand it later with architecture diagrams, screenshots,
            code snippets, design decisions, and lessons learned.
          </p>

          <p>
            For now, use this page to explain the problem, the architecture,
            the hardest technical challenge, and what you learned from building
            the project.
          </p>
        </div>
      </section>
    </main>
  );
}