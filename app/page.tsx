export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground pt-28">

      {/* about us */}
      <div>
        <h1 className="text-3xl color-gwc-darkblue font-semibold">
          we're on a mission to close the gender gap in tech
        </h1>
      </div>

      {/* about us */}
      <div>

      </div>

      {/* industry */}
      <section className="w-full px-6 py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="w-full text-3xl font-semibold leading-tight text-gwc-darkblue sm:text-4xl md:text-5xl">
            connect with real, industry professionals
          </h2>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-8">
            <div className="w-full md:w-[58%]">
              <p className="w-full max-w-none text-xl font-[550] leading-relaxed text-gray-800 sm:text-2xl">
                we bring the industry to you. through girls who code, members get the
                chance to meet professionals, learn about different career paths, and
                make connections that can open doors beyond the classroom.
              </p>
            </div>

            <div className="w-full md:w-[42%] overflow-hidden rounded-2xl">
              <img
                src="/images/microsoft_gbm.webp"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <div>
        
      </div>

      {/* merch */}
      <div>
        
      </div>
      
    </main>
    
  );
}

