import Link from "next/link";

export default function Hero() {
  return (
    <section className="page-shell grid min-h-[78vh] grid-cols-1 gap-12 py-24 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-black/45">
          AI / Secure Systems / Developer Tooling
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
          Building systems with intelligence, security, and intent.
        </h1>
      </div>

      <div className="border-t border-black/10 pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-8">
        <p className="text-base leading-relaxed text-black/65">
          I’m Michael, a Computer Science student at SMU working across AI,
          cybersecurity, cloud systems, and developer tooling.
        </p>

        <div className="mt-7 flex gap-3 font-mono text-[11px] uppercase tracking-widest">
          <Link
            href="/projects"
            className="border border-black px-4 py-3 transition hover:bg-black hover:text-[#f4f1ea]"
          >
            View Work
          </Link>

          <a
            href="/resume.pdf"
            className="border border-black/20 px-4 py-3 text-black/60 transition hover:border-black hover:text-black"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}