import Link from "next/link";

export default function Hero() {
  return (
    <section className="page-shell py-20">
      <div className="md:col-span-8">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-black/45">
          AI / Secure Systems / Developer Tooling
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
          Hi, I'm Michael :D
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-black/65">
          I'm a Computer Science student working across AI, cloud systems, and developer tooling.
          I enjoy crafting creative solutions, but beyond that, 
          good food, good films, and good music are what I live for.
        </p>

        <div className="mt-7 flex gap-3 font-mono text-[14px] uppercase tracking-widest">
          <Link
            href="/projects"
            className="border border-black px-4 py-3 transition hover:bg-black hover:text-[#f4f1ea]"
          >
            Projects
          </Link>

          <a
            href="/Michael_Suteja_Resume_2026.pdf"
            className="border border-black px-4 py-3 transition hover:bg-black hover:text-[#f4f1ea]"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}