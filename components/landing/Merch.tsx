import Image from "next/image";
import Link from "next/link";

export default function Merch() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#e3ebfb] px-6 py-10 shadow-[0_18px_60px_rgba(8,31,92,0.08)] sm:px-8 md:px-10 lg:px-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="relative">
            <div className="absolute inset-x-12 bottom-6 top-12 rounded-full bg-white/60 blur-3xl" />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] lg:max-w-[580px]">
              <Image
                src="/images/gwcmerchupscaled.png"
                alt="Girls Who Code UCF merch"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gwc-lightblue/75">
              designed with pride
            </p>
            <h2 className="font-alexandria text-3xl font-semibold leading-tight text-gwc-darkblue sm:text-4xl lg:text-[2.7rem]">
              merch by us, for you
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gwc-darkblue/70 sm:text-base lg:mx-0">
              support UCF&apos;s girls who code through stickers, sweaters, and
              more!
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrsTA0wyEK27GAf3yfECBmk5DtUCPHIzREzUgEnXbORAMWdQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-md bg-gwc-darkblue px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gwc-lightblue"
            >
              purchase
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
