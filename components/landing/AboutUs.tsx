import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#eaf1ff] px-6 py-10 shadow-[0_18px_60px_rgba(8,31,92,0.08)] sm:px-8 md:px-10 lg:px-14 lg:py-14">
        <div className="mb-8 text-center">
          <h2 className="font-alexandria text-2xl font-semibold text-gwc-darkblue sm:text-3xl">
            about us
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-gwc-lightblue/75">
            inclusive, ambitious, and student-led
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="space-y-4 text-sm leading-7 text-gwc-darkblue/75 sm:text-base">
            <p>
              our loop&apos;s mission is to create an inclusive space for women
              and non-binary individuals studying tech at UCF.
            </p>
            <p>
              from landing that first internship to mastering new frameworks,
              we&apos;re committed to cultivating a culture of technical
              excellence and radical inclusivity.
            </p>
            <p className="font-medium text-gwc-darkblue">
              together, we&apos;re redefining who belongs in tech and making
              sure every student has a seat at the table and the tools to lead
              it.
            </p>

            <Link
              href="/join"
              className="inline-flex items-center rounded-md bg-gwc-darkblue px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gwc-lightblue"
            >
              join the family
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/45 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white p-2 shadow-[0_18px_50px_rgba(8,31,92,0.14)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem]">
                <Image
                  src="/images/landing1_section2.webp"
                  alt="Girls Who Code UCF members together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
