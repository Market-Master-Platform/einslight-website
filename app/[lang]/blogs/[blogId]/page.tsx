"use client";

import { useDictionary } from "@/context/dictionary-provider";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface ArticleCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
}

const BlogArticle = () => {
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

  const ArticleCard: React.FC<ArticleCardProps> = ({
    imageUrl,
    date,
    title,
    description,
  }) => {
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

  return (
    <main className="bg-[#12141D]">
      <section className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url('/static/images/blog-articles/blog-articles-header.png')] text-white h-[40vh] bg-center bg-no-repeat flex flex-col justify-end items-center">
        <div className="max-w-screen-lg flex max-sm:flex-wrap justify-between w-full mb-10 px-10">
          <div className="flex py-4 px-8 bg-[#808080] bg-opacity-50 rounded-full max-sm:mb-3">
            <span className="text-[#808080] font-medium">
              {dictionary.blogs.blog_post.news}
            </span>
            <ChevronRightIcon
              className="text-[#808080] mx-1 font-bold"
              width={16}
            />
            <span className="text-[#808080] opacity-50">
              {dictionary.blogs.design}
            </span>
          </div>
          <div className="flex">
            <img
              loading="lazy"
              className="rounded-full w-14"
              src={"/static/images/blog-articles/author-image.png"}
            />
            <div className="flex flex-col justify-center pl-3">
              <p className="font-medium">Sergei Filatov</p>
              <p className="text-[#B0B7C3] font-medium">14th May</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-lg m-auto px-10 py-20 max-md:py-10 text-[#8A94A6]">
          <h1 className="text-4xl text-white font-semibold leading-loose max-md:leading-relaxed">
            {dictionary.blogs.blog_post.who_are_you_again}
          </h1>
          <p className="leading-relaxed my-2">
            {dictionary.blogs.blog_post.i_ve_been_working_remotely}
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            {dictionary.blogs.blog_post.remote_is_not_for_everyone}
          </h2>
          <p className="leading-relaxed py-1 my-2">
            {dictionary.blogs.blog_post.working_remotely_has_a_lot_perks}
          </p>
          <p className="leading-relaxed my-2">
            {dictionary.blogs.blog_post.working_remotely_can_get_lonely}
          </p>
          <img
            loading="lazy"
            alt="Working"
            src={"/static/images/blog-articles/blog-article-content.png"}
            className="w-full my-[1rem] rounded-md"
          />
          <p className="leading-relaxed my-2">
            {dictionary.blogs.blog_post.remote_workers_also_need_to_be}
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            {dictionary.blogs.blog_post.create_your_work_env}
          </h2>
          <p className="my-2">
            {dictionary.blogs.blog_post.any_remote_worker_needs}
          </p>
          <div className="bg-[#1E2029] rounded-md py-10 px-16 max-md:px-10 my-10">
            <h1 className="text-4xl text-white font-semibold leading-normal mb-5">
              {dictionary.blogs.blog_post.einslight_is_a_powerful_tool}
            </h1>
            <p className="text-xl font-medium">– Bogdan Krivenchenko</p>
          </div>
          <p className="leading-relaxed my-2">
            {dictionary.blogs.blog_post.i_recommend_having_separate_room}
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            {dictionary.blogs.blog_post.setup_business_and_separate}
          </h2>
          <p className="leading-relaxed my-2">
            {dictionary.blogs.blog_post.this_is_self_explanatory}
          </p>
          <p className="leading-relaxed my-2">
            • {dictionary.blogs.blog_post.this_is_the_one_i_used}
          </p>
          <p className="leading-relaxed my-2">
            • {dictionary.blogs.blog_post.they_re_similar_to_toptal}
          </p>
          <p className="leading-relaxed my-2">
            • {dictionary.blogs.blog_post.those_are_options_you}
          </p>
        </div>
      </section>
      <section className="px-10">
        <div className="m-auto max-w-screen-lg px-10 max-md:px-0 pb-20">
          <div className="rounded-lg border-solid border-2 border-[#1E2029] text-white flex justify-between p-10 max-md:p-5">
            <div className="font-semibold">
              {dictionary.blogs.blog_post.share_this_article}
            </div>
            <div className="flex w-1/2 max-md:w-2/3 justify-between">
              <img
                src="/static/images/blog-articles/dribbble-icon.svg"
                className="mx-1"
                alt="Share to Dribbble"
              />
              <img
                src="/static/images/blog-articles/facebook-icon.svg"
                className="mx-1"
                alt="Share to Facebook"
              />
              <img
                src="/static/images/blog-articles/twitter-icon.svg"
                className="mx-1"
                alt="Share to Twitter"
              />
              <img
                src="/static/images/blog-articles/youtube-icon.svg"
                className="mx-1"
                alt="Share to Youtube"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center p-20 bg-neutral-800 max-md:px-5">
        <h2 className="mt-9 text-6xl font-bold text-center text-white leading-[73px] w-[817px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {dictionary.blogs.blog_post.you_may_interested_these_articles}
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
    </main>
  );
};

export default BlogArticle;
