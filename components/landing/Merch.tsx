import Image from "next/image";
import Link from "next/link";

export default function Merch() {
  return (
    <section className="relative w-[95%] bg-[#7b9fd1] lg:min-h-[700px] max-w-7xl mx-auto rounded-2xl flex flex-col md:flex-row items-stretch overflow-hidden">

      {/* Image */}
      <div className="relative w-full md:w-[45%] h-[250px] sm:h-[350px] md:h-auto shrink-0 p-4 md:p-6 lg:p-7 xl:p-8">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src='/images/gwc merch pic.png'
            alt="Merch"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center md:items-start justify-around text-center md:text-left px-6 sm:px-8 md:px-10 pt-2 pb-8 md:py-12">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-gwc-darkblue font-semibold leading-snug mb-4">
          merch by us, <br/>
          for you <br/>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-3">
          support ucf’s girls who code through stickers, sweaters, and more!
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrsTA0wyEK27GAf3yfECBmk5DtUCPHIzREzUgEnXbORAMWdQ/viewform"
          className="self-center bg-gwc-darkblue text-white px-7 py-3 rounded-lg text-md tracking-wide hover:scale-105 transition-transform duration-200"
        >
          purchase
        </Link>
      </div>

    </section>
  );
}