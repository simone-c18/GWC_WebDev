import Image from "next/image";
import { HiMiniBuildingOffice2, HiMiniSparkles } from "react-icons/hi2";

const stats = [
  { value: "15+", label: "Guest Speakers Total" },
  { value: "200+", label: "Active Members" },
];

export default function Industry() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative">
          <div className="absolute -bottom-5 -left-3 h-24 w-24 -rotate-12 rounded-[1.6rem] bg-[#f1f3f8] shadow-[0_10px_30px_rgba(8,31,92,0.08)]" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-white p-2 shadow-[0_20px_50px_rgba(8,31,92,0.14)]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/microsoft_gbm.webp"
                alt="Girls Who Code members connecting with industry professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-gwc-lightblue">
            <HiMiniBuildingOffice2 className="h-5 w-5" />
            <HiMiniSparkles className="h-5 w-5" />
          </div>

          <h2 className="max-w-md font-alexandria text-3xl font-semibold leading-tight text-gwc-darkblue sm:text-4xl">
            connect with real industry professionals
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gwc-darkblue/70 sm:text-base">
            through girls who code, members get the chance to meet
            professionals, learn about different career paths, and build
            connections that can open doors beyond the classroom. it&apos;s a
            space for mentorship, inspiration, and confidence-building.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gwc-darkblue/8 bg-[#f7f8fb] px-5 py-4"
              >
                <div className="font-alexandria text-2xl font-semibold text-gwc-darkblue">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-gwc-darkblue/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
