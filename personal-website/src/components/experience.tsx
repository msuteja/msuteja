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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        label="Experience"
        title="Technical work, leadership, and creative direction."
      />

      <div className="space-y-6">
        {experiences.map((item) => (
          <div
            key={`${item.role}-${item.organization}`}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-medium text-white">{item.role}</h3>
                <p className="text-zinc-400">{item.organization}</p>
              </div>

              <p className="font-mono text-sm text-zinc-500">{item.period}</p>
            </div>

            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}