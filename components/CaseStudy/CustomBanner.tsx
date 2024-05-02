interface CustomBannerProps {
  imgSrc: string;
  title: string;
  description: string;
}

const CustomBanner: React.FC<CustomBannerProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center text-white min-h-[449px]">
      <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[449px] max-md:max-w-full">
        <img
          loading="lazy"
          src={imgSrc}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center px-5 pb-20 w-full max-md:max-w-full">
          <h1 className="mt-28 text-6xl font-extrabold text-center text-white leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            {title}
          </h1>
          <p className="mt-9 mb-5 text-xl font-medium leading-9 text-center max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomBanner;
