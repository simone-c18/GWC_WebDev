import AboutUs from "@/components/landing/AboutUs";
import Hero from "@/components/landing/Hero";
import Merch from "@/components/landing/Merch";
import Industry from "@/components/landing/Industry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 overflow-hidden bg-transparent px-0 pb-20 pt-32 text-foreground sm:gap-24 lg:gap-28 lg:pt-40">
      <Hero />
      <AboutUs />
      <Industry />
      <Merch />
      <div className="px-4 text-center sm:px-6">
        <h3 className="font-alexandria text-lg font-semibold text-gwc-darkblue sm:text-xl md:text-2xl">
          love, girls who code @ ucf
        </h3>
      </div>
    </main>
  );
}
