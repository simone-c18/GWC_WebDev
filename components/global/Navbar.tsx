import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
     <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-7xl rounded-lg border border-black/10 dark:border-white/10 bg-gwc-lightblue/80 backdrop-blur-md text-foreground shadow-lg">
      <div className="flex items-center justify-between px-8 py-3">
        
        {/* Left: Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Girls Who Code UCF"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
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
        </div>

        {/* Call to Action */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gwc-darkblue px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
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
