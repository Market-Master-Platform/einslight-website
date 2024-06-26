"use client";

import { useDictionary } from "@/context/dictionary-provider";

interface ArticleCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  date,
  title,
  description,
}) => {
  const dictionary = useDictionary();

  return (
    <div className="flex flex-col grow pb-12 w-full text-lg font-semibold rounded-2xl border-2 border-solid bg-neutral-800 border-zinc-800 max-md:mt-8">
      <img src={imageUrl} alt={title} className="w-full aspect-[1.32]" />
      <div className="flex flex-col px-7 mt-12 max-md:px-5 max-md:mt-10">
        <div className="text-gray-400 leading-[122%]">{date}</div>
        <h3 className="mt-11 text-3xl font-bold leading-10 text-white max-md:mt-10">
          {title}
        </h3>
        <p className="mt-10 font-medium leading-8 text-gray-400 max-md:mt-10">
          {description}
        </p>
        <div className="flex gap-4 mt-10 text-xl leading-6 text-blue-500 max-md:pr-5">
          <div className="flex-auto">{dictionary.blogs.read_story}</div>
          <img
            src="/static/images/message/arrow-right-icon.svg"
            alt=""
            className="shrink-0 w-5 aspect-[1.05] fill-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = useDictionary();

  const articles: ArticleCardProps[] = [
    {
      imageUrl: "/static/images/suggests/planning-for-change-1.png",
      date: "15th May",
      title: dictionary.blogs.planning_for_change,
      description: dictionary.case_study.planning_for_change_description,
    },
    {
      imageUrl: "/static/images/suggests/planning-for-change-2.png",
      date: "15th May",
      title: dictionary.blogs.planning_for_change,
      description: dictionary.case_study.planning_for_change_description,
    },
    {
      imageUrl: "/static/images/suggests/color-palette.png",
      date: "12th May",
      title: dictionary.blogs.color_palette,
      description: dictionary.blogs.each_of_us_has_different_favorite,
    },
  ];

  return (
    <>
      <section>{children}</section>

      <section className="flex flex-col items-center p-20 bg-neutral-800 max-md:px-5">
        <h2 className="mt-9 text-6xl font-bold text-center text-white leading-[73px] w-[817px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {dictionary.case_study.you_may_be_interested}
        </h2>
        <div className="mt-20 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
