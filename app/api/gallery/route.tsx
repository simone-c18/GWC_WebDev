import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const galleryDir = path.join(process.cwd(), 'public/gallery');
    const captionsPath = path.join(process.cwd(), 'public/gallery/captions.json');

    try {
        let captions: Record<string, string> = {};
        if (fs.existsSync(captionsPath)) {
            const captionsData = fs.readFileSync(captionsPath, 'utf-8');
            captions = JSON.parse(captionsData);
        }

        const files = fs.readdirSync(galleryDir);
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );

        const photos = imageFiles.map((file, index) => ({
            id: index + 1,
            src: `/gallery/${file}`,
            alt: `Gallery Image ${index + 1}`,
            caption: captions[file] || "To be determined...",
        }));

        return NextResponse.json(photos);
    } catch(error) {
        return NextResponse.json({ error: 'Failed to read gallery.' }, { status: 500 });
    }
}