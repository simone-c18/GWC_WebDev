/* industry */
export default function Industry() {
  return (
    <section className="w-full px-6 py-12 md:px-24 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Slightly smaller header scale */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1a2e6e] max-w-3xl pb-4">
          connect with real, industry professionals
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="w-full">
            {/* Moderate paragraph scale: maxes at 1.5rem (text-2xl) */}
            <p className="text-lg md:text-xl lg:text-2xl text-gwc-darkblue leading-relaxed mb-4">
              we bring the industry to you.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gwc-darkblue leading-relaxed">
              through girls who code, members get the
              chance to meet professionals, learn about different career paths, and
              make connections that can open doors beyond the classroom.
            </p>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="/images/microsoft_gbm.webp" 
                alt="Girls Who Code meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}