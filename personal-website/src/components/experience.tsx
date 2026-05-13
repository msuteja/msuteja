import SectionHeading from "@/components/section-heading";

const experiences = [
  {
    role: "Software Engineer Intern",
    organization: "OCBC",
    period: "May 2026 - Present",
    description:
      "FRANKpreneurship 2026 - Group Engineering (Digital Channels)",
  },
  {
    role: "Software Engineer Intern",
    organization: "Radach & Family Organics",
    period: "May 2025 — Aug 2025",
    description:
      "SMU ASEAN Internship Program",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHeading
        label="Log"
        title="Technical work, leadership, and creative direction."
      />

      <div className="border-t border-black/10">
        {experiences.map((item) => (
          <div
            key={`${item.role}-${item.organization}`}
            className="grid grid-cols-1 gap-4 border-b border-black/10 py-8 md:grid-cols-12"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-black/40 md:col-span-2">
              {item.period}
            </p>

            <div className="md:col-span-4">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.role}
              </h3>
              <p className="text-black/50">{item.organization}</p>
            </div>

            <p className="max-w-2xl leading-relaxed text-black/65 md:col-span-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}