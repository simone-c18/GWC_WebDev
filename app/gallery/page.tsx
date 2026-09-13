import { getGalleryPhotos } from "../lib/gallery";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();
  return <GalleryClient initialPhotos={photos} />;
}