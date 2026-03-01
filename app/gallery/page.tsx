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
            onClick={() => setExpanded(photo)}
            className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-64 w-full group rounded-xl overflow-hidden shadow">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:brightness-50 group-hover:blur-sm"
                loading="lazy"
              />
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
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setExpanded(null)}
        >
          <div
            className="relative bg-background rounded-xl shadow-2xl p-6 max-w-4xl w-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X button */}
            <button
              className="absolute top-3 right-3 text-foreground hover:opacity-70 transition-opacity text-xl font-bold"
              onClick={() => setExpanded(null)}
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden mt-4">
              <Image
                src={expanded.src}
                alt={expanded.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <p className="text-center font-semibold">{expanded.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}