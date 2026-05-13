import Link from "next/link";

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1ea]/85 backdrop-blur">
      <nav className="page-shell flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.22em]"
        >
          Michael Suteja
        </Link>

        <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest text-black/55">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}