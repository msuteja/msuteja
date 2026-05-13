const experiences = [
  {
    role: "Software Engineer",
    category: "Internship",
    organization: "OCBC",
    period: "May 2026 - Present",
    location: "Singapore",
    description:
      "FRANKpreneurship 2026 - Group Engineering (Digital Channels)",
  },
  {
    role: "Software Engineer",
    category: "Internship",
    organization: "Radach & Family Organics",
    period: "May 2025 — Aug 2025",
    location: "Bangkok, Thailand",
    description:
      "SMU ASEAN Internship Program",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="border-t border-black/10">
      <div className="page-shell page-section">
        <div className="mb-6">
          <h2 className="section-label">Experience</h2>
        </div>

        <div className="border-t border-black/10">
          {experiences.map((item) => (
            <div
              key={`${item.role}-${item.organization}`}
              className="grid grid-cols-1 gap-5 border-b border-black/10 py-8 md:grid-cols-12"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-black/40 md:col-span-2">
                {item.period}
                <br></br>
                {item.location}
              </p>

              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {item.role}
                </h3>
                <p className="mt-1 text-black/50">{item.organization}</p>
                <p className="mt-1 text-black/40">{item.category}</p>
              </div>

              <p className="max-w-2xl leading-relaxed text-black/65 md:col-span-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}