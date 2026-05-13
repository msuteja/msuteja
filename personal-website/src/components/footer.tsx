export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 px-5 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 md:col-span-3">
          Contact
        </p>

        <div className="md:col-span-9">
          <p className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
            Have a chat!
          </p>

          <div className="mt-8 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-widest">
            <a href="mailto:mashtamich1602@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="https://github.com/msuteja" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/michael-suteja" className="hover:underline">
              LinkedIn
            </a>
          </div>

          <p className="mt-12 text-sm text-black/40">
            Michael Suteja
          </p>
        </div>
      </div>
    </footer>
  );
}