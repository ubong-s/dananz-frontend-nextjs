import Image from 'next/image';

interface CloudinaryLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  className?: string;
  blurDataURL?: string;
  quality?: number;
}

export function cloudinaryLoader({
  src,
  width,
  quality,
}: CloudinaryLoaderProps) {
  const params = [
    'f_auto',
    'c_limit',
    'w_' + width,
    'q_' + (quality || 'auto'),
  ];
  return `https://res.cloudinary.com/ubongy/image/upload/${src}`;
}

export function CloudinaryImage({
  src,
  alt,
  width,
  height,
  title,
  className,
  blurDataURL,
  quality,
}: CloudinaryImageProps) {
  return (
    <Image
      quality={quality}
      src={src.substring(47)}
      loader={cloudinaryLoader}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={className}
      {...(blurDataURL
        ? { placeholder: 'blur', blurDataURL: blurDataURL }
        : {})}
    />
  );
}
