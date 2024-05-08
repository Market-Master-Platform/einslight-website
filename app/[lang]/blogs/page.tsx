"use client";

import CustomLink from "@/components/Common/CustomLink";
import { useDictionary } from "@/context/dictionary-provider";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface BlogPostProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  href: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  date,
  title,
  description,
  imageUrl,
  altText,
  href,
}) => {
  const dictionary = useDictionary();

  return (
    <article className="rounded-sm border-2 border-solid shadow-2xl bg-neutral-800 border-zinc-800 mb-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={altText}
            className="grow w-full aspect-auto"
          />
        </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full my-auto">
          <div className="flex flex-col self-stretch text-lg font-semibold max-md:max-w-full m-5">
            <time className="text-gray-400 leading-[122%] max-md:max-w-full">
              {date}
            </time>
            <h2 className="mt-11 text-3xl font-bold leading-10 text-white max-md:mt-10 max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-10 font-medium leading-8 text-gray-400 max-md:mt-10 max-md:max-w-full">
              {description}
            </p>
            <CustomLink href={href} className="relative">
              <div className="flex gap-4 mt-10 text-xl leading-6 text-blue-500 max-md:flex-wrap max-md:pr-5">
                <span>{dictionary.blogs.read_story}</span>
                <ArrowRightIcon className="h-6 w-6 text-blue-500 shrink-0" />
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
    </article>
  );
};

interface ArticleProps {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  category,
  date,
  image,
  href,
}) => (
  <CustomLink href={href} className="relative">
    <article className="flex mb-7">
      <div className="flex-0" style={{width: '112px'}}>
        <Image src={image} alt={title} className="aspect-square w-28" />
      </div>
      <div className="my-auto ml-5 flex-1 overflow-hidden">
        <h3 className="text-2xl font-semibold leading-7 text-white mb-3 text-wrap">
          {title}
        </h3>
        <div className="flex gap-5 text-lg leading-5">
          <div className="text-blue-500">{category}</div>
          <div className="text-gray-400">{date}</div>
        </div>
      </div>
    </article>
  </CustomLink>
);

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const Blogs = () => {
  const dictionary = useDictionary();

  const articles = [
    {
      title: dictionary.blogs.forging_your_path,
      category: dictionary.blogs.business,
      date: "29th May",
      image: "/static/images/blogs/forging-your-path.png",
      href: "/blogs/1",
    },
    {
      title: dictionary.blogs.basic_of_proper_ui,
      category: dictionary.blogs.design,
      date: "25th May",
      image: "/static/images/blogs/basics-of-a-proper-ui.png",
      href: "/blogs/1",
    },
    {
      title: dictionary.blogs.planning_for_change,
      category: dictionary.blogs.finance,
      date: "15th May",
      image: "/static/images/blogs/planning-for-change.png",
      href: "/blogs/1",
    },
  ];

  const blogPosts = [
    {
      date: "11th May",
      title: dictionary.blogs.how_to_start_earning,
      description: dictionary.blogs.right_priortities_help_us,
      imageUrl: "/static/images/blogs/how-to-start-earning.png",
      altText: "How to start earning",
      href: "/blogs/1",
    },
    {
      date: "14th May",
      title: dictionary.blogs.color_palette,
      description:
        "Each of us has a different favorite and not so much color so it is worth starting with it.",
      imageUrl: "/static/images/blogs/color-palette.png",
      altText: "Color palette",
      href: "/blogs/1",
    },
    {
      date: "11th May",
      title: dictionary.blogs.how_to_start_earning,
      description: dictionary.blogs.right_priortities_help_us,
      imageUrl: "/static/images/blogs/how-to-start-earning-2.png",
      altText: "How to start earning",
      href: "/blogs/1",
    },
  ];

  return (
    <main className="bg-[#12141D]">
      <section className="flex justify-center items-center px-16 py-20 w-full text-center bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-11 mb-7 max-w-full w-[778px] max-md:mt-10">
          <h1 className="text-6xl font-extrabold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            {dictionary.blogs.the_news_that_surrounds_us}
          </h1>
          <p className="mt-16 text-xl font-medium leading-9 text-gray-400 max-md:mt-10 max-md:max-w-full">
            {dictionary.blogs.read_watch_and_absorb_the_content}
          </p>
        </div>
      </section>
      <nav className="flex gap-x-6 gap-y-1 py-2 px-2 justify-center items-center text-md font-semibold text-gray-400 max-lg:flex-wrap">
        {/* {categories.map((category, index) => (
          <CategoryItem
            text={category}
            isActive={category === "All Categories"}
            key={index}
          />
        ))} */}
      </nav>
      <section className="grid grid-cols-10 max-w-screen-xl mx-auto">
        <div className="col-span-6 max-lg:col-span-full p-5">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
          {/* <Pagination currentPage={1} totalPages={3} /> */}
        </div>
        <div className="col-span-full lg:col-span-4 p-5">
          <div>
            <h2 className="text-2xl font-semibold leading-7 text-white">
              {dictionary.blogs.newsletter}
            </h2>
            <form>
              <label htmlFor="email" className="sr-only">
                {dictionary.blogs.email_address}
              </label>
              <input
                type="email"
                id="email"
                placeholder={dictionary.blogs.email_address}
                className="justify-center items-start px-6 py-7 mt-8 w-full text-xl font-medium leading-6 text-gray-400 rounded-sm border-2 border-solid bg-neutral-800 border-zinc-800 max-md:px-5"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="justify-center items-center px-16 py-7 mt-5 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-blue-500 rounded-sm max-md:px-5 w-full"
              >
                {dictionary.blogs.subscribe}
              </button>
            </form>
            <p className="mt-7 text-lg font-medium leading-5 text-gray-400">
              {dictionary.blogs.we_will_never_share_your_details}{" "}
            </p>
          </div>
          <div className="text-2xl font-semibold leading-7 text-white whitespace-nowrap mt-20">
            <h3 className="self-stretch">{dictionary.blogs.popular}</h3>
            <div className="flex flex-col text-2xl font-semibold leading-7 mt-10">
              {articles.map((article, index) => (
                <Article key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
