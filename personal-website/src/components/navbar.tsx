export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm text-zinc-300">
          Michael Suteja
        </a>

        <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}