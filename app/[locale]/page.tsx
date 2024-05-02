import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const specializations = [
  {
    src: "home/hubspot-icon.svg",
    alt: "Specialization 1",
    className: "shrink-0 w-32 max-w-full aspect-[1.82]",
  },
  {
    src: "home/shopify-icon.svg",
    alt: "Specialization 2",
    className: "shrink-0 max-w-full aspect-[1.89] w-[132px]",
  },
  {
    src: "home/stripe-icon.svg",
    alt: "Specialization 3",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "home/sap-icon.svg",
    alt: "Specialization 4",
    className: "shrink-0 aspect-[1.39] w-[97px]",
  },
  {
    src: "home/magento-icon.svg",
    alt: "Specialization 5",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "home/visma-icon.svg",
    alt: "Specialization 6",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "home/microsoft-icon.svg",
    alt: "Specialization 7",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
];

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface TextBlockProps {
  title: string;
  description: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  description,
  className,
}) => (
  <div
    className={`flex flex-col grow items-start py-7 pr-20 pl-6 w-full font-semibold bg-neutral-800 ${className}`}
  >
    <div className="text-3xl leading-8 text-white max-md:max-w-full">
      {title}
    </div>
    <div className="mt-2 text-xl leading-6 text-gray-400 max-md:max-w-full">
      {description}
    </div>
  </div>
);

const articles = [
  {
    title: "Great People Application",
    description: "Searching for talented and self-propelled developers",
    image: "home/great-people-application.png",
  },
  {
    title: "iGoterra",
    description: "Record wildlife observations with any device",
    image: "home/igoterra.png",
  },
  {
    title: "TimeEdit",
    description: "Great academia requires great software",
    image: "home/timeedit.png",
  },
  {
    title: "ChromaWay",
    description: "Making sense of the blockchain",
    image: "home/chromaway.png",
  },
  {
    title: "AppSpotr",
    description: "Appspotr the leading low-code app-builder",
    image: "home/appspotr.png",
  },
  {
    title: "EF Academy",
    description: "Mobile apps for boarding school students",
    image: "home/ef-academy.png",
  },
];

interface ArticleProps {
  title: string;
  description: string;
  image: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, image }) => (
  <article className="flex gap-5 max-md:flex-col max-md:gap-0 ">
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="grow w-full aspect-[1.32] max-md:mt-8 max-md:max-w-full hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
          <span className="text-blue-500 text-lg font-bold">
            Read case {">"}
          </span>
        </div>
      </div>
      <div className="flex gap-5 w-full font-semibold max-w-[1242px] max-md:flex-wrap max-md:max-w-full h-full">
        <TextBlock
          title={title}
          description={description}
          className="flex-1 grow shrink-0 p-4 basis-0 w-fit max-md:pr-5 max-md:max-w-full"
        />
      </div>
    </div>
  </article>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full bg-gray-50 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center w-full min-h-full max-md:max-w-full">
            <div className="flex overflow-hidden  flex-col justify-center w-full min-h-full max-md:max-w-full">
              <header className="flex flex-col items-center px-5 pb-9 w-full bg-zinc-900 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-4 mt-0 w-full text-lg leading-6 text-center text-white max-w-[1240px] max-md:px-5 max-md:max-w-full">
                  <h1 className="mt-2 max-md:max-w-full">
                    Full-service tech partner
                  </h1>
                  <p className="mt-4 text-6xl font-extrabold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    Software development for brands that want to achieve more.
                  </p>
                  <p className="mt-4 max-md:max-w-full">
                    Our team develops apps, e-com, web and custom applications
                    using best in class software.
                  </p>
                  <button className="justify-center px-14 py-7 mt-8 font-bold text-white bg-blue-500 leading-[178%] rounded-[41px] max-md:px-5">
                    Contact Us
                  </button>
                  <img
                    loading="lazy"
                    src="home/arrow-down-icon.svg"
                    alt="Arrow down"
                    className="mt-12 w-9 aspect-square"
                  />
                </div>
                <div className="mt-8 text-sm leading-4 text-center text-white">
                  Specialized in
                </div>
                <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
                  {specializations.map((specialization, index) => (
                    <Logo
                      key={index}
                      src={specialization.src}
                      alt={specialization.alt}
                      className={specialization.className}
                    />
                  ))}
                </div>
              </header>
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center px-16 pt-20 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
          <div className="z-50 justify-center mb-0 w-full max-w-[1230px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-gray-200 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-3xl font-bold max-md:max-w-full">
                    Create frictionless workflows
                  </h2>
                  <p className="mt-4 text-lg leading-6 max-md:max-w-full">
                    There is no way around the fact that both employees and
                    customers expect a user centric digital experience. We help
                    clients that have decided to make the digital opportunity
                    their main priorty and competitive advantage.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="home/workflow.svg"
                  alt="Workflow"
                  className="grow w-full aspect-[0.85] max-md:mt-5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center p-20 bg-zinc-900 max-md:px-5">
          <h1 className="mt-2 text-3xl font-bold text-center text-white max-md:max-w-full">
            Our portfolio which we are happy to show you
          </h1>
          <div className="px-px mt-20 w-full max-w-[1242px] max-md:mt-10 max-md:max-w-full grid grid-cols-2 gap-4">
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </div>
          <div className="flex gap-5 mt-52 w-full font-semibold max-w-[1247px] max-md:flex-wrap max-md:max-w-full ">
            <h2 className="flex-auto my-auto text-3xl leading-10 text-white">
              Hey, how can we help?
            </h2>
            <button className="justify-center items-center px-16 py-6 text-xl leading-6 text-center text-white bg-blue-500 max-md:px-5">
              Send message
            </button>
          </div>
          <hr className="shrink-0 mt-20 max-w-full h-0.5 bg-neutral-800 w-[1247px] max-md:mt-10" />
        </div>
        <footer className="flex flex-col items-center p-20 w-full bg-zinc-900 mt-[2047px] max-md:px-5 max-md:mt-10 max-md:max-w-full"></footer>
      </div>
    </main>
  );
}
