type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-sm text-zinc-500">{label}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-zinc-400">{description}</p>
      )}
    </div>
  );
}