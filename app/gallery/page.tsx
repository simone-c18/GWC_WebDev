"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<Photo | null>(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then((data: Photo[]) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading photos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">loading gallery...</div>;
  }

  return (
    <main className="min-h-screen text-foreground px-6 py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight text-center mt-10 mb-8 text-gwc-darkblue pt-10">
        photos from our meetings, socials, and workshops!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setExpanded(photo)}
            className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-64 w-full group rounded-xl overflow-hidden shadow">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:blur-sm"
                loading="lazy"
              />

              {/* Color overlay */}
              <div className="absolute inset-0 bg-[#7b9fd1] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Caption */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 bg-[#7b9fd1]/65 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setExpanded(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X button */}
            <button
              className="absolute top-3 right-3 text-gray-800 hover:opacity-70 transition-opacity text-xl font-bold z-10"
              onClick={() => setExpanded(null)}
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden mt-4">
              <Image
                src={expanded.src}
                alt={expanded.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 60vw"
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <p className="text-center font-semibold text-gray-800">{expanded.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}