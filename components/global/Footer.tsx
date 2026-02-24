import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

        {/* Left: Logo */}
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Girls Who Code UCF
          </h3>
        </div>

        {/* Left Middle: Navigation */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="/calendar" className="hover:underline">calendar</a></li>
            <li><a href="/becomeMember" className="hover:underline">become a member</a></li>
            <li><a href="/gallery" className="hover:underline">gallery</a></li>
            <li><a href="/links" className="hover:underline">links</a></li>
            <li><a href="/ourTeam" className="hover:underline">our team</a></li>
          </ul>
        </div>

        {/* Right Middle: Social */}
        <div>
          <ul className="space-y-2 text-sm">
            {/* insert links for each image */}
            <li>Instagram Logo<span className="font-medium"></span></li>
            <li>Discord Logo <span className="font-medium"></span></li>
            <li>LinkedIn Logo <span className="font-medium"></span></li>
          </ul>
        </div>
        
        {/* Right: Contact */}
        <div>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-5 py-2 text-background text-sm font-medium hover:opacity-90 transition"
        >
          contact
        </Link>
        <p>girlswhocodeucf@gmail.com<span className="font-medium"></span></p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-zinc-300 dark:border-zinc-700 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Girls Who Code UCF. All rights reserved.
      </div>
    </footer>
  );
}
