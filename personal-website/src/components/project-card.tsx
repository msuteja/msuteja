type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({
  title,
  slug,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <a
      href={`/projects/${slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <h3 className="text-xl font-medium text-white group-hover:text-sky-300">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}