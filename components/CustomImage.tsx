interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default CustomImage;
