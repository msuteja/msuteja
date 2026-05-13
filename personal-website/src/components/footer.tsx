export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm text-zinc-500 md:flex-row">
        <p>Michael Suteja</p>

        <div className="flex gap-5">
          <a href="mailto:mashtamich1602@gmail.com" className="hover:text-white">
            Email
          </a>
          <a href="https://github.com/msuteja" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/michael-suteja" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}