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
    <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 md:col-span-3">
        {label}
      </p>

      <div className="md:col-span-9">
        <h2 className="max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}