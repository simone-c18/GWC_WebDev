import { NextResponse } from "next/server";
import { getGalleryPhotos } from "../../lib/gallery";

export async function GET() {
  try {
    const photos = await getGalleryPhotos();
    return NextResponse.json(photos);
  } catch {
    return NextResponse.json({ error: "Failed to read gallery." }, { status: 500 });
  }
}