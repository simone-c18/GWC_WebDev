import AboutUs from "@/components/landing/AboutUs";
import Hero from "@/components/landing/Hero";
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

      {/* testimonials */} 
      <div>
        
      </div>

      {/* merch */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20">
        
      </div>
      
    </main>
    
  );
}

