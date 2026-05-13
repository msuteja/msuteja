"use client";

import { X } from "lucide-react";
import type { Project } from "@/content/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-black/10 bg-[#f4f1ea] p-6 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-black/15 p-2 text-black/50 transition hover:border-black hover:text-black"
          aria-label="Close project details"
        >
          <X size={16} />
        </button>

        <p className="mb-4 pr-12 font-mono text-xs uppercase tracking-[0.25em] text-black/45">
          {project.type} / {project.year}
        </p>

        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
          {project.title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
          {project.summary}
        </p>

        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="leading-relaxed text-black/70">{project.details}</p>
        </div>

        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-black/40">
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
        </div>

        {project.links.length > 0 && (
          <div className="mt-8 border-t border-black/10 pt-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-black/40">
              Links
            </p>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="border border-black px-4 py-3 font-mono text-xs uppercase tracking-widest transition hover:bg-black hover:text-[#f4f1ea]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}