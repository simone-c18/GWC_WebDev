import Image from "next/image";

const polaroids = [
  { src: '/images/landing1_section1.webp', alt: 'Polaroid 1', className: 'top-6 right-16 -rotate-6' },
  { src: '/images/landing2_section1.webp', alt: 'Polaroid 2', className: 'top-8 left-16 rotate-6' },
  { src: '/images/landing3_section1.jpg',  alt: 'Polaroid 3', className: 'bottom-6 right-16 rotate-4' },
  { src: '/images/landing4_section1.webp', alt: 'Polaroid 4', className: 'bottom-8 left-16 -rotate-4' },
];

export default function Hero() {
  return (
    <section className="relative w-[95%] max-w-7xl mx-auto min-h-[600px] rounded-2xl flex items-center justify-center py-16">

      {/* Polaroids — hidden on mobile, visible md+ */}
      {polaroids.map(({ src, alt, className }) => (
        <div
          key={alt}
          className={`hidden md:block absolute bg-white p-3 pb-12 shadow-lg w-[220px] z-10 ${className}`}
        >
          <div className="relative w-full h-[180px]">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        </div>
      ))}

      {/* Center text — narrow padding on mobile, wide on desktop to avoid polaroid overlap */}
      <div className="relative z-20 text-center px-6 md:px-64 lg:px-72">
        <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-gwc-darkblue font-semibold leading-snug mb-6">
          we're on a<br/> mission to close<br/> the <b> gender gap</b> in<br/>tech
        </h1>
        <button className="bg-gwc-darkblue text-white px-7 py-3 rounded-lg text-sm tracking-wide">
          learn more
        </button>
      </div>
    </section>
  );
}