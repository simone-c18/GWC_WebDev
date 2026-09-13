import fs from "fs/promises";
import path from "path";

export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export async function getGalleryPhotos(): Promise<Photo[]> {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  const captionsPath = path.join(galleryDir, "captions.json");

  let captions: Record<string, string> = {};
  try {
    const captionsData = await fs.readFile(captionsPath, "utf-8");
    captions = JSON.parse(captionsData);
  } catch {
    // no captions file yet — fine, just use defaults
  }

  const files = await fs.readdir(galleryDir);
  const imageFiles = files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort();

  return imageFiles.map((file, index) => ({
    id: index + 1,
    src: `/gallery/${file}`,
    alt: `Gallery Image ${index + 1}`,
    caption: captions[file] || "To be determined...",
  }));
}