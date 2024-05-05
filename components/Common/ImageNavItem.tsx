import CustomImage from "./CustomImage";

interface ImageNavItemProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

const ImageNavItem: React.FC<ImageNavItemProps> = ({
  imageSrc,
  imageAlt,
  children,
}) => (
  <div className="overflow-hidden relative flex-col justify-center aspect-[3.97]">
    <CustomImage
      src={imageSrc}
      alt={imageAlt}
      className="object-cover absolute inset-0 size-full"
    />
    {children}
  </div>
);

export default ImageNavItem;
