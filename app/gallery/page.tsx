"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/gallery/event1.webp",
    alt: "Workshop event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 2,
    src: "/gallery/event1.webp",
    alt: "Group meeting",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 3,
    src: "/gallery/event1.webp",
    alt: "Guest speaker",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 4,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 5,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 6,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 7,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 8,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
  {
    id: 9,
    src: "/gallery/event1.webp",
    alt: "Tabling event",
    caption: "Our first General Body Meeting of the semester!",
  },
];

export default function GalleryPage() {
  const [flipped, setFlipped] = useState<number | null>(null);

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
