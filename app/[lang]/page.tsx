"use client";

import CustomImage from "@/components/Common/CustomImage";
import CustomLink from "@/components/Common/CustomLink";
import { useDictionary } from "@/context/dictionary-provider";

const specializations = [
  {
    src: "/static/images/home/hubspot-icon.svg",
    alt: "Specialization 1",
    className: "shrink-0 w-32 max-w-full aspect-[1.82]",
  },
  {
    src: "/static/images/home/shopify-icon.svg",
    alt: "Shopify",
    className: "shrink-0 max-w-full aspect-[1.89] w-[132px]",
  },
  {
    src: "/static/images/home/stripe-icon.svg",
    alt: "Stripe",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "/static/images/home/sap-icon.svg",
    alt: "SAP ERP",
    className: "shrink-0 aspect-[1.39] w-[97px]",
  },
  {
    src: "/static/images/home/magento-icon.svg",
    alt: "Magento",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "/static/images/home/visma-icon.svg",
    alt: "Visma",
    className: "shrink-0 max-w-full aspect-[2.17] w-[152px]",
  },
  {
    src: "/static/images/home/microsoft-icon.svg",
    alt: "Microsoft",
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
      <CustomLink href={href} className="relative">
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
      </CustomLink>
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
      image: "/static/images/home/great-people-application.png",
      href: "/en/case-study/chromaway",
    },
    {
      title: "iGoterra",
      description: dictionary.homepage.igoterra_description,
      image: "/static/images/home/igoterra.png",
      href: "/en/case-study/igoterra",
    },
    {
      title: "TimeEdit",
      description: dictionary.homepage["timeedit_description"],
      image: "/static/images/home/timeedit.png",
      href: "/en/case-study/time-edit",
    },
    {
      title: "ChromaWay",
      description: dictionary.homepage.chromaway_description,
      image: "/static/images/home/chromaway.png",
      href: "/en/case-study/chromaway",
    },
    {
      title: "AppSpotr",
      description: dictionary.homepage.appsport_description,
      image: "/static/images/home/appspotr.png",
      href: "/en/case-study/app-sport",
    },
    {
      title: "EF Academy",
      description: dictionary.homepage.efacademy_description,
      image: "/static/images/home/ef-academy.png",
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
                  <a href="en/message">
                    <button className="justify-center px-14 py-7 mt-8 font-bold text-white bg-blue-500 leading-[178%] rounded-[41px] max-md:px-5">
                      {dictionary.common.contact_us}
                    </button>
                  </a>
                  <CustomImage
                    src="/static/images/home/arrow-down-icon.svg"
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
                  src="/static/images/home/workflow.svg"
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
