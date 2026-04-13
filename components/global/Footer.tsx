"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("girlswhocodeucf@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button onClick={handleCopy} className="w-fit text-sm text-white hover:underline">
        girlswhocodeucf@gmail.com
      </button>
      <span
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gwc-lightblue text-white text-xs px-2 py-1 rounded transition-opacity duration-300 ${
          copied ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        copied!
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gwc-darkblue text-white dark:text-zinc-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 gap-x-4 gap-y-8 items-start sm:flex sm:flex-wrap sm:justify-center md:justify-between">

        {/* Left: Logo */}
        <a href="/" className="hover:underline">
        <div>
          <Image
            src="/logo.png"
            alt="Girls Who Code UCF"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        </a>

        {/* Left Middle: Navigation */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="/calendar" className="text-white hover:underline">calendar</a></li>
            <li><a href="/join" className="text-white hover:underline">become a member</a></li>
            <li><a href="/gallery" className="text-white hover:underline">gallery</a></li>
            <li><a href="/links" className="text-white hover:underline">links</a></li>
            <li><a href="/team" className="text-white hover:underline">our team</a></li>
          </ul>
        </div>

        {/* Right Middle: Social */}
        <div>
          <ul className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <li className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <a href="https://www.linkedin.com/company/girls-who-code-ucf" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-logo.png"
                  alt="LinkedIn Logo"
                  fill
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                  className="object-contain"
                  loading="lazy"
                />
              </a>
            </li>
            <li className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <a href="https://www.instagram.com/girlswhocodeucf" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/ig-logo.PNG"
                  alt="Instagram Logo"
                  fill
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                  className="object-contain"
                  loading="lazy"
                />
              </a>
            </li>
            <li className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-lg overflow-hidden">
              <a href="https://discord.gg/yaWQ8wzTax" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/discord-logo.jpg"
                  alt="Discord Logo"
                  fill
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                  className="object-contain"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
        
        {/* Right: Contact */}
        <div className="flex flex-col gap-3 items-start justify-self-start">
          <Link
            href="/contact"
            className="inline-flex w-fit items-center rounded-full bg-gwc-lightblue px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
          >
            contact
          </Link>
          <CopyEmailButton />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-zinc-300 dark:border-zinc-700 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Girls Who Code UCF. All rights reserved.
      </div>
    </footer>
  );
}
