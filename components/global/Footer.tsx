import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
    <footer className="w-full bg-gwc-darkblue text-white dark:text-zinc-300 py-10">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

        {/* Left: Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Girls Who Code UCF"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Left Middle: Navigation */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="/calendar" className="hover:underline">calendar</a></li>
            <li><a href="/join" className="hover:underline">become a member</a></li>
            <li><a href="/gallery" className="hover:underline">gallery</a></li>
            <li><a href="/links" className="hover:underline">links</a></li>
            <li><a href="/team" className="hover:underline">our team</a></li>
            <li><a href="/credits" className="hover:underline">our web devs</a></li>
          </ul>
        </div>

        {/* Right Middle: Social */}
        <div>
          <ul className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <li className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <a href="https://www.linkedin.com/company/girls-who-code-ucf" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-logo.PNG"
                  alt="LinkedIn Logo"
                  fill
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                  className="object-contain"
                  loading="lazy"
                />
              </a>
            </li>
            <li className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
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
            <li className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-lg overflow-hidden">
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
        <div>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gwc-lightblue px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
        >
          contact
        </Link>
        <p>girlswhocodeucf@gmail.com<span className="font-medium pt-12 mt-8"></span></p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-zinc-300 dark:border-zinc-700 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Girls Who Code UCF. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
