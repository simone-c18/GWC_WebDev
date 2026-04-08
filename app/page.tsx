import AboutUs from "@/components/landing/AboutUs";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col items-center pt-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24">

      {/* hero */}
      <Hero />

      {/* about us */}
      <AboutUs />

      {/* industry */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20">
        
      </div>

      {/* testimonials */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 font-alexandria bg-[#7b9fd1]">

        <h1 className="text-3xl color-white font-semibold">
          hear from our community
        </h1>
        
      </div>

      {/* merch */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20">
        
      </div>
      
    </main>
    
  );
}

