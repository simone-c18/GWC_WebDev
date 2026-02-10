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
  const [flipped, setFlipped] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

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
      <h1 className="text-4xl font-semibold tracking-tight text-center mb-12">
        photos from our meetings, socials, and workshops!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() =>
              setFlipped(flipped === photo.id ? null : photo.id)
              
            }
              className="cursor-pointer perspective hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div
              className={`relative h-64 w-full transition-transform duration-500 transform-style preserve-3d ${
                flipped === photo.id ? "rotate-y-180" : ""
              }`}
            >
              {/* Front (image) */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Back (caption) */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-foreground text-background flex items-center justify-center p-6 text-center shadow">
                <p>{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
