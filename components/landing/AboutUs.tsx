import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative w-[95%] bg-[#7b9fd1] min-h-[700px] max-w-7xl mx-auto rounded-2xl flex flex-col md:flex-row items-stretch overflow-hidden">

      {/* Image */}
        <div className="relative w-full md:w-[45%] h-[300px] md:h-auto shrink-0 p-5 md:p-6 lg:p-7 xl:p-8">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                src='/images/landing1_section2.png'
                alt="About us"
                fill
                className="object-cover"
                />
            </div>
        </div>

      {/* Text */}
        <div className="flex flex-col min-h-[700] items-start justify-around text-left px-10 py-12">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-white leading-snug mb-6">
            about us
            </h1>
            <p className="text-base sm:text-2xl text-white mb-3">
            our loop's mission is to create an inclusive space for women and non-binary individuals studying tech at UCF.
            </p>
            <p className="text-base sm:text-2xl text-white mb-3">
            from landing that first internship to mastering new frameworks, we are committed to cultivating a culture of technical excellence and radical inclusivity.
            </p>
            <p className="text-base sm:text-2xl text-white mb-6">
            together, we are redefining who belongs in tech and ensuring that every student has a seat at the table—and the tools to lead it.
            </p>
            <Link
            href="/join"
            className="self-center bg-gwc-darkblue text-white px-7 py-3 rounded-lg text-sm tracking-wide hover:scale-105 transition-transform duration-200"
            >
                join the family!
            </Link>
        </div>

    </section>
  );
}