import fs from "fs/promises";
import path from "path";

export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

type CaptionEntry = string | { caption?: string; alt?: string; date?: string };

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp)$/i;

function filenameToAlt(file: string): string {
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

export async function getGalleryPhotos(): Promise<Photo[]> {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  const captionsPath = path.join(galleryDir, "captions.json");

  let captions: Record<string, CaptionEntry> = {};
  try {
    const captionsData = await fs.readFile(captionsPath, "utf-8");
    const parsed: unknown = JSON.parse(captionsData);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      captions = parsed as Record<string, CaptionEntry>;
    }
  } catch {
    // no captions file yet (or invalid JSON), so use defaults
  }

  let files: string[] = [];
  try {
    files = await fs.readdir(galleryDir);
  } catch {
    return [];
  }

  const dateOf = (file: string): number => {
    const entry = captions[file];
    const parsed =
      typeof entry === "object" && entry?.date ? Date.parse(entry.date) : NaN;
    return Number.isNaN(parsed) ? -Infinity : parsed;
  };
 
  const imageFiles = files
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => {
      const da = dateOf(a);
      const db = dateOf(b);
      if (da !== db) return db > da ? 1 : -1;
      return b.localeCompare(a, undefined, { numeric: true });
    });
 
  return imageFiles.map((file, index) => {
    const entry = captions[file];
    const caption =
      typeof entry === "string" ? entry : (entry?.caption ?? "");
    const alt =
      (typeof entry === "object" && entry?.alt) ||
      caption ||
      filenameToAlt(file) ||
      `Gallery image ${index + 1}`;
 
    return {
      id: index + 1,
      src: `/gallery/${encodeURIComponent(file)}`,
      alt,
      caption,
    };
  });
}
