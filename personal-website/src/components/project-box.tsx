"use client";

import type { Project } from "@/content/projects";

type ProjectBoxProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectBox({ project, onClick }: ProjectBoxProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left"
      aria-label={`Open details for ${project.title}`}
    >
      <article className="h-full overflow-hidden border border-black/10 bg-[#eee9de] transition duration-200 hover:-translate-y-0.5 hover:border-black/25 hover:shadow-[5px_5px_0_#171717]">
        <div className="aspect-[5/3] border-b border-black/10 bg-black/[0.04]">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.22em] text-black/30">
              Project Image
            </div>
          )}
        </div>

        <div className="p-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">
            {project.type} / {project.year}
          </p>

          <h2 className="text-xl font-semibold leading-tight tracking-[-0.03em]">
            {project.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/60">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] uppercase tracking-wider text-black/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </button>
  );
}