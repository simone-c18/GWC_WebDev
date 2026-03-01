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
  const [activeId, setActiveId] = useState<number | null>(null);

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

  if(loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Gallery...</div>;
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight text-center mt-8 mb-8">
        photos from our meetings, socials, and workshops!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer perspective hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
              {/* Front (image) */}
              <div
                className="relative h-64 w-full group rounded-xl overflow-hidden shadow cursor-pointer"
                onTouchStart={() => setActiveId(activeId === photo.id ? null : photo.id)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-all duration-500 group-hover:brightness-50 ${
                    activeId === photo.id ? "brightness-50" : ""
                  }`}
                  loading="lazy"
                />
                
                {/* On Hover (caption) */}
                <div className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-opacity duration-500 ${
                  activeId === photo.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <p className="text-white font-semibold">{photo.caption}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
}
