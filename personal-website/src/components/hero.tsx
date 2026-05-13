export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-5 pt-32 md:grid-cols-12 md:pt-40">
      <div className="md:col-span-8">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-black/50">
          AI / Secure Systems / Developer Tooling
        </p>

        <h1 className="max-w-5xl text-[4.5rem] font-semibold leading-[0.9] tracking-[-0.07em] md:text-[8.5rem]">
          Michael Suteja builds systems with a point of view.
        </h1>
      </div>

      <div className="mt-12 flex flex-col justify-end border-t border-black/15 pt-6 md:col-span-4 md:mt-0 md:border-l md:border-t-0 md:pl-8">
        <p className="max-w-sm text-lg leading-relaxed text-black/70">
          Computer Science student at SMU working across AI, cybersecurity,
          cloud systems, and tools for developers.
        </p>

        <div className="mt-8 flex gap-3 font-mono text-xs uppercase tracking-widest">
          <a
            href="#projects"
            className="border border-black px-4 py-3 transition hover:bg-black hover:text-[#f3f0e8]"
          >
            View Work
          </a>
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