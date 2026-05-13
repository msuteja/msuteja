type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  index?: number;
};

export default function ProjectCard({
  title,
  slug,
  description,
  stack,
  index = 0,
}: ProjectCardProps) {
  return (
    <a
      href={`/projects/${slug}`}
      className="group grid grid-cols-1 border-t border-black/10 py-10 transition hover:bg-black hover:px-5 hover:text-[#f3f0e8] md:grid-cols-12"
    >
      <div className="mb-4 font-mono text-xs text-black/40 transition group-hover:text-[#f3f0e8]/50 md:col-span-2 md:mb-0">
        0{index + 1}
      </div>

      <div className="md:col-span-5">
        <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
          {title}
        </h3>
      </div>

      <div className="mt-5 md:col-span-5 md:mt-0">
        <p className="max-w-xl leading-relaxed text-black/65 transition group-hover:text-[#f3f0e8]/70">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="font-mono text-xs uppercase tracking-wider text-black/45 transition group-hover:text-[#f3f0e8]/50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}