export default function cloudinaryImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://res.cloudinary.com/ubongy/image/upload/v1671844756/loading_image_gkbjrd.jpg`;
}
