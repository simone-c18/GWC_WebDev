import Image from "next/image";

export default function Industry2() {
  return (
    <section className="relative w-[95%] bg-white lg:min-h-[650px] max-w-7xl mx-auto rounded-2xl flex flex-col md:flex-row items-stretch overflow-hidden">

      {/* Text */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 sm:px-8 md:px-10 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gwc-darkblue font-semibold leading-snug mb-6">
          connect with real industry professionals ⊹ ࣪ ˖₊˚⊹⋆
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gwc-darkblue mb-4">
          through girls who code, members get the
          chance to meet professionals, learn about different career paths, and
          make connections that can open doors beyond the classroom.
          from landing that first internship to mastering new frameworks, we are committed 
          to cultivating a culture of technical excellence and radical inclusivity.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full md:w-[45%] h-[250px] sm:h-[350px] md:h-auto shrink-0 p-4 md:p-6 lg:p-7">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src='/images/microsoft_gbm.webp'
            alt="Industry professionals"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
}
