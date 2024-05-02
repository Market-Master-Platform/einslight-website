"use client";

import CustomImage from "@/components/CustomImage";
import { useDictionary } from "@/context/dictionary-provider";
import Link from "next/link";

const specializations = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8f681287204cc4d2b9ad6e3b8c7c7d6af907482f223e9b83ec6c5396589539?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 1",
    className: "shrink-0 w-32 max-w-full aspect-[1.82]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a2c544ca8b2fd668f309c0955537cac0f0946b081f8d7c4bb2aaf421f0ae07?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 2",
    className: "shrink-0 max-w-full aspect-[1.89] w-[132px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a93a5b295298d5930b99aa42f510f60876cc47b8efef96b0e03bdd514ea3fc4?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 3",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fd91fd10b5e63d7e462b811810c7468d98bc8977d543f96ac269a6a83784ea6?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 4",
    className: "shrink-0 aspect-[1.39] w-[97px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4ffcfd1fcf5d25038d7890e4313eded99d62fcc9ac6a541c91eba2788bb80?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 5",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/45b35c8213ba4c6031460d5d0302d3e193241de5ae9e527d3951f7bcf70ca035?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 6",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae0165b8b05dec5386c76e6dadb330a765eb854f60bb05829f441db68cb561da?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
    alt: "Specialization 7",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
];

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

interface ArticleProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  image,
  href,
}) => (
  <article className="flex gap-5 max-md:flex-col max-md:gap-0 ">
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
      <Link href={href} className="relative">
        <CustomImage
          src={image}
          alt={title}
          className="grow w-full aspect-[1.32] max-md:mt-8 max-md:max-w-full hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
          <span className="text-blue-500 text-lg font-bold">
            Read case {">"}
          </span>
        </div>
      </Link>
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
  const dictionary = useDictionary();

  const articles = [
    {
      title: "Great People Application",
      description: dictionary.homepage.great_people_application_description,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bab67fba603e4232d5d943422d0d3f7fdf941b4cb11fcf3e960c0ecf1ab92f9a?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/chromaway",
    },
    {
      title: "iGoterra",
      description: dictionary.homepage.igoterra_description,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3a1145e6cc83903ae217e8ed5193cabe81824876fc237b7d9c7437904efa5562?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/igoterra",
    },
    {
      title: "TimeEdit",
      description: dictionary.homepage["timeedit_description"],
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/70736ac0be4823d6ed2d2ed92435ce73633b16ae387a7c997cf6de47d7c4aa39?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/time-edit",
    },
    {
      title: "ChromaWay",
      description: dictionary.homepage.chromaway_description,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd58e135a7af5f15267040f100e51d02bb1c3210e9c9ce16fe717cb71f848fb5?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/chromaway",
    },
    {
      title: "AppSpotr",
      description: dictionary.homepage.appsport_description,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bc6734ea199d322938ce8a3f25f15bc32078413f12a9aedfaf88ba6f8042ffac?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/app-sport",
    },
    {
      title: "EF Academy",
      description: dictionary.homepage.efacademy_description,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45adcc8f8ef7df04c2952e0610634a82ab3b3c8cf32c68e883c3061a26ad74ee?apiKey=fd011477b5724ce38ff2cc24ae257b18&",
      href: "/en/case-study/ef-academy",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full bg-gray-50 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center w-full min-h-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center w-full min-h-full max-md:max-w-full">
              <div className="flex flex-col items-center px-5 pb-9 w-full bg-zinc-900 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-center px-20 md:pt-20 pt-10 pb-4 mt-0 w-full text-lg leading-6 text-center text-white max-w-[1240px] max-md:px-5 max-md:max-w-full">
                  <h1 className="mt-2 max-md:max-w-full">
                    {dictionary.homepage.full_service_tech_partner}
                  </h1>
                  <p className="mt-4 text-6xl font-extrabold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    {dictionary.homepage.software_development_for_brands}
                  </p>
                  <p className="mt-4 max-md:max-w-full">
                    {dictionary.homepage.our_team_develops_apps}
                  </p>
                  <button className="justify-center px-14 py-7 mt-8 font-bold text-white bg-blue-500 leading-[178%] rounded-[41px] max-md:px-5">
                    {dictionary.common.contact_us}
                  </button>
                  <CustomImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6dc1d6fe48bbbf6d5b9d54f3a1d4dcbe5881de4089c94f98a0e01520c6facee?apiKey=fd011477b5724ce38ff2cc24ae257b18&"
                    alt="Arrow down"
                    className="mt-12 w-9 aspect-square"
                  />
                </div>
                <div className="mt-8 text-sm leading-4 text-center text-white">
                  {dictionary.homepage.specialized_in}
                </div>
                <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
                  {specializations.map((specialization, index) => (
                    <CustomImage
                      key={index}
                      src={specialization.src}
                      alt={specialization.alt}
                      className={specialization.className}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center px-16 pt-20 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
          <div className="z-50 justify-center mb-0 w-full max-w-[1230px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-gray-200 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-3xl font-bold max-md:max-w-full">
                    {dictionary.homepage.create_frictionless_workflows}
                  </h2>
                  <p className="mt-4 text-lg leading-6 max-md:max-w-full">
                    {dictionary.homepage.there_is_no_way_around}
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <CustomImage
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a7ffce1c698f94ba9aacf3adcc964a4a97cb76a1f5032ef1682a40963c79eb5?apiKey=fd011477b5724ce38ff2cc24ae257b18&"
                  alt="Workflow"
                  className="grow w-full aspect-[0.85] max-md:mt-5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center p-20 bg-zinc-900 max-md:px-5">
          <h1 className="mt-2 text-3xl font-bold text-center text-white max-md:max-w-full">
            {dictionary.homepage.our_portfolio_which_we_are_happy}
          </h1>

          <div className="px-px mt-20 w-full max-md:mt-10 max-md:max-w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
