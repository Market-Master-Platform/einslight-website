interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager" | undefined;
}

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  loading = "lazy",
}) => <img loading={loading} src={src} alt={alt} className={className} />;

export default CustomImage;
