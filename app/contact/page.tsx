import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactPage() {
  return (
    <main className={`${alexandria.className} min-h-screen bg-[#F2F0F0] flex items-center justify-center px-6 py-20`}>
      <div className="w-full max-w-2xl">

        {/* header */}
        <h1 className= "text-4xl font-semibold text-[#081F5C] text-center tracking-tight mb-4">
          Let's Get in Touch!
        </h1>

      {/* reach out to us text */}
        <p className="text-[#000000] font-Alexandria text-center mb-10">
          reach out to us through email or social media for inquiries
        </p>

      {/* text for inside box + box */}
        <form className="bg-[#7B9FD1] rounded-2xl px-10 py-12 text-left space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">
              name/company
            </label>
            <input
              type="text"
              className="w-full rounded-lg text-black border border-black/10 .bg-#F2F0F0 dark:border-white/20 bg-white  px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              your email
            </label>
            <input
              type="email"
              className="w-full rounded-lg text-black border border-black/10 dark:border-white/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
            message
            </label>
            <textarea
              rows={5}
              className="w-full rounded-lg text-black border border-black/10 dark:border-white/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div className = "flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-[#081F5C] px-6 py-3 text-[#FFFFFF] font-medium hover:opacity-90 transition"
            >
              submit
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
