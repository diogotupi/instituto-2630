export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (/\.(png|jpe?g|webp|gif)$/i.test(path)) {
    const filename = path.split('/').pop() ?? path;
    return `https://res.cloudinary.com/dc48hzb6b/image/upload/pictures/2630/${filename}`;
  }
  return `${base}${path}`;
}
