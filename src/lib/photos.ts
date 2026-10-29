import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.webp', { eager: true });

const photos: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  photos[path.split('/').pop()!.replace(/\.webp$/, '')] = mod.default;
}

/** Look up a photo in src/assets/photos by file name (without extension). */
export function photo(name: string): ImageMetadata {
  const p = photos[name];
  if (!p) throw new Error(`Missing photo: ${name}`);
  return p;
}

/** True when a photo with this name exists (stories from Supabase may name one that doesn't). */
export function hasPhoto(name: string | null | undefined): name is string {
  return !!name && name in photos;
}
