export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-44">
      <p className="mb-6 font-mono text-sm text-sky-300">
        AI + Secure Systems + Developer Tooling
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
        Building thoughtful systems at the intersection of intelligence and security.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Hi! I’m Michael, a Computer Science student at SMU interested in AI,
        cybersecurity, cloud systems, and developer tools that make learning
        and building software better.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
        >
          Resume
        </a>
      </div>
    </section>
  );
}