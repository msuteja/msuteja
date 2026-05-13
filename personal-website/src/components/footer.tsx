import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="page-shell flex flex-col justify-between gap-4 py-8 text-sm text-black/45 md:flex-row">
        <p>Michael Suteja</p>

        <div className="flex gap-5">
          <Link href="/projects" className="hover:text-black">
            Work
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}