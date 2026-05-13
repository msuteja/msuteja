export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#f3f0e8]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="font-mono text-xs uppercase tracking-[0.25em]">
          MS
        </a>

        <div className="flex gap-5 font-mono text-xs uppercase tracking-widest text-black/60">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Work</a>
          <a href="#experience" className="hover:text-black">Log</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </nav>
    </header>
  );
}