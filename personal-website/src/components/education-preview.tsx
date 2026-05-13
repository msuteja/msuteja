const education = [
  {
    school: "Singapore Management University",
    degree: "BSc Computer Science",
    track: "Artificial Intelligence and Cybersecurity",
    period: "2023 — Present",
    details:
      "Student Life: Business Intelligence and Analytics, Ivory Keys (Piano Ensemble), I-Sports (Chess & Poker), & Komunitas Indonesia",
  },
];

export default function EducationPreview() {
  return (
    <section className="border-t border-black/10">
      <div className="page-shell page-section">
        <div className="mb-6">
          <h2 className="section-label">Education</h2>
        </div>

        <div className="border-t border-black/10">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-12"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-black/40 md:col-span-2">
                {item.period}
              </p>

              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {item.school}
                </h3>
                <p className="mt-1 text-black/50">{item.degree}</p>
                <p className="mt-1 text-black/40">{item.track}</p>
              </div>

              <p className="max-w-2xl leading-relaxed text-black/65 md:col-span-6">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}