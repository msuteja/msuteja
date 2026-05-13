export default function ContactPage() {
  return (
    <main className="page-shell page-section">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-black/45 md:col-span-3">
          Contact
        </p>

        <div className="md:col-span-9">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Let's Chat!
          </h1>

          <div className="mt-10 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
            <a href="mailto:mashtamich1602@gmail.com" className="hover:underline">
              Email
            </a>

            <a
              href="https://github.com/msuteja"
              className="hover:underline"
            >
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/michael-suteja" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}