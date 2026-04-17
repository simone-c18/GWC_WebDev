import AboutUs from "@/components/landing/AboutUs";
import Hero from "@/components/landing/Hero";
import Merch from "@/components/landing/Merch";
import Industry from "@/components/landing/Industry";

export default function Home() {
  return (

    <main className="min-h-screen bg-white text-foreground flex flex-col items-center pt-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24">

      {/* hero */}
      <Hero />

      {/* about us */}
      <AboutUs />

      {/*Industry*/}
      <Industry />

      {/* merch */}
      <Merch />

      {/* testimonials */} 
      <div>
        
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl text-gwc-darkblue font-semibold leading-snug mb-6">love, girls who code @ ucf ❤︎₊ ⊹</h3>
      </div>
      
    </main>
    
  );
}

