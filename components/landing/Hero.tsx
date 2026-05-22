import Image from "next/image";
import Link from "next/link";

const collageImages = [
  {
    src: "/gallery/gallery13.webp",
    alt: "Girls Who Code members smiling together",
    className:
      "right-0 top-0 h-[200px] w-[210px] sm:h-[230px] sm:w-[250px] lg:h-[260px] lg:w-[290px]",
  },
  {
    src: "/gallery/gallery14.webp",
    alt: "Girls Who Code members at an event",
    className:
      "bottom-0 left-0 h-[170px] w-[170px] sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]",
  },
];

export default function Hero() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex rounded-full border border-gwc-lightblue/15 bg-[#e9f0ff] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-gwc-lightblue sm:text-xs">
            girls who code at ucf
          </div>

          <h1 className="font-alexandria text-4xl font-semibold leading-tight text-gwc-darkblue sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
            we&apos;re on a mission to{" "}
            <span className="text-gwc-lightblue">close the gender gap</span> in
            tech
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gwc-darkblue/70 sm:text-base">
            empowering women and non-binary students at UCF through a community
            of technical excellence, professional growth, and radical
            inclusivity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://girlswhocode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-gwc-darkblue px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(8,31,92,0.18)] transition hover:-translate-y-0.5 hover:bg-gwc-lightblue"
            >
              learn more
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center rounded-md border border-gwc-lightblue/20 bg-white px-6 py-3 text-sm font-semibold text-gwc-lightblue transition hover:-translate-y-0.5 hover:border-gwc-lightblue/40"
            >
              view events
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[300px] w-full max-w-[360px] sm:h-[360px] sm:max-w-[420px] lg:h-[420px] lg:max-w-[470px]">
          <div className="absolute inset-x-10 bottom-8 top-14 rounded-[36px] bg-[#dce7fb]/70 blur-3xl" />

          {collageImages.map(({ src, alt, className }) => (
            <div
              key={alt}
              className={`absolute overflow-hidden rounded-2xl border border-white/80 bg-white p-2 shadow-[0_16px_40px_rgba(8,31,92,0.16)] ${className}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[14px]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 290px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
