"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-7xl rounded-lg border border-black/10 dark:border-white/10 bg-gwc-lightblue/80 backdrop-blur-md text-foreground shadow-lg">
      <div className="flex items-center justify-between px-8 py-3">

        {/* Left: Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Girls Who Code UCF"
              width={80}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/calendar" className="hover:opacity-70 transition">calendar</Link>
          <Link href="/gallery" className="hover:opacity-70 transition">gallery</Link>
          <Link href="/links" className="hover:opacity-70 transition">links</Link>
          <Link href="/team" className="hover:opacity-70 transition">our team</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gwc-darkblue px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
        >
          contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        > 
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-end px-8 pb-4 gap-4 text-sm font-medium text-white">
          <Link href="/calendar" className="hover:opacity-70 transition" onClick={() => setMenuOpen(false)}>calendar</Link>
          <Link href="/gallery" className="hover:opacity-70 transition" onClick={() => setMenuOpen(false)}>gallery</Link>
          <Link href="/links" className="hover:opacity-70 transition" onClick={() => setMenuOpen(false)}>links</Link>
          <Link href="/ourteam" className="hover:opacity-70 transition" onClick={() => setMenuOpen(false)}>our team</Link>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center rounded-full bg-gwc-darkblue px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
            onClick={() => setMenuOpen(false)}
          >
            contact
          </Link>
        </div>
      )}
    </nav>
  );
}