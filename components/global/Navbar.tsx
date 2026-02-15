import Link from "next/link";

export default function Navbar() {
  return (
     <nav className="w-full border-b border-black/10 dark:border-white/10 bg-background text-foreground">
      <div  className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          GWC @ UCF
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/calendar" className="hover:opacity-70 transition">
            calendar
          </Link>
          <Link href="/gallery" className="hover:opacity-70 transition">
            gallery
          </Link>
          <Link href="/links" className="hover:opacity-70 transition">
            links
          </Link>
          <Link href="/ourteam" className="hover:opacity-70 transition">
            our team
          </Link>
          <Link href="/join" className="hover:opacity-70 transition">
            join
          </Link>
        </div>

        {/* Call to Action */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
        >
          contact
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/20">
          ☰
        </button>
      </div>
    </nav>
  );
}
