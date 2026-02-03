export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          let's get in touch!
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          reach out to us through email or social media for inquiries
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">
              name/company
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-black/10 dark:border-white/20 bg-white  px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              your email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-black/10 dark:border-white/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
            message
            </label>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-black/10 dark:border-white/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}
