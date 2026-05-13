import Link from "next/link";

type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  year: string;
  type: string;
  index?: number;
};

export default function ProjectCard({
  title,
  slug,
  description,
  stack,
  year,
  type,
  index = 0,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="grid grid-cols-1 gap-5 border-b border-black/10 py-9 transition hover:bg-black/[0.035] md:grid-cols-12"
    >
      <p className="font-mono text-xs text-black/35 md:col-span-1">
        0{index + 1}
      </p>

      <div className="md:col-span-4">
        <h2 className="text-2xl font-semibold tracking-[-0.035em]">
          {title}
        </h2>

        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-black/40">
          {type} / {year}
        </p>
      </div>

      <div className="md:col-span-5">
        <p className="leading-relaxed text-black/65">{description}</p>
      </div>

      <div className="flex flex-wrap content-start gap-2 md:col-span-2">
        {stack.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] uppercase tracking-wider text-black/45"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}