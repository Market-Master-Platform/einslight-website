import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface ArticleCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
}

const BlogArticle = () => {
  const articles: ArticleCardProps[] = [
    {
      imageUrl: "/static/images/suggests/planning-for-change-1.png",
      date: "15th May",
      title: "Planning for change",
      description:
        "When planning changes the main thing is to consider your investment as well as what you will get in the end.",
    },
    {
      imageUrl: "/static/images/suggests/planning-for-change-2.png",
      date: "15th May",
      title: "Planning for change",
      description:
        "When planning changes the main thing is to consider your investment as well as what you will get in the end.",
    },
    {
      imageUrl: "/static/images/suggests/color-palette.png",
      date: "12th May",
      title: "Color palette",
      description:
        "Each of us has a different favorite and not so much color so it is worth starting with it.",
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
            <div className="flex-auto">Read story</div>
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
            <span className="text-[#808080] font-medium">News</span>
            <ChevronRightIcon
              className="text-[#808080] mx-1 font-bold"
              width={16}
            />
            <span className="text-[#808080] opacity-50">Design</span>
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
            Who are you again?
          </h1>
          <p className="leading-relaxed my-2">
            I’ve been working remotely for ~3 years for clients from the US and
            Europe. This helped me to significantly increase my income compared
            to what I was making while working as an in-house designer at a
            well-known company in Bucharest, Romania. During those 3 years, I’ve
            gone through highs and lows, I’ve made mistakes, and tried to learn
            from them. I’m, by no means, at the peak of my design career, but I
            think I’ve learned some things that will help folks in similar
            positions be more successful in going remote.
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            Remote is not for everyone
          </h2>
          <p className="leading-relaxed py-1 my-2">
            Working remotely has a lot of perks, but it also comes with some
            things that some people consider to be drawbacks. These are not
            unsolvable problems, but they can weigh on you if not addressed.
          </p>
          <p className="leading-relaxed my-2">
            Working remotely can get lonely. You’re no longer in a busy office
            with tens or hundreds of people. Remote workers also don’t have to
            commute to the office, which can end up keeping them in the house
            all day. That can quickly become depressing for people that don’t
            enjoy this kind of solitude. You can easily fix this by joining a
            coworking space or going out to work in coffee shops and other
            social places.
          </p>
          <img
            loading="lazy"
            alt="Working"
            src={"/static/images/blog-articles/blog-article-content.png"}
            className="w-full my-[1rem] rounded-md"
          />
          <p className="leading-relaxed my-2">
            Remote workers also need to be self-starters, motivated, and
            responsible. In effect, a remote worker is a one-man business. That
            comes with a lot of responsibility. You’ll own all the wins and all
            the losses. If you’re not a person will a fair amount of
            self-discipline, drive, and commitment, remote work might not be the
            right fit for you.
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            Create your work environment
          </h2>
          <p className="my-2">
            Any remote worker needs a proper work environment to be productive.
            The mind associates spaces with different activities and sets your
            mental state accordingly. For example, the bedroom is associated
            with sleeping and relaxation. That’s why you won’t get much done if
            you plan on lounging on your bed with your laptop all day.
          </p>
          <div className="bg-[#1E2029] rounded-md py-10 px-16 max-md:px-10 my-10">
            <h1 className="text-4xl text-white font-semibold leading-normal mb-5">
              “Pangara is a powerful tool for designing beautiful websites”
            </h1>
            <p className="text-xl font-medium">– Bogdan Krivenchenko</p>
          </div>
          <p className="leading-relaxed my-2">
            I recommend having a separate room for your office. If that’s not an
            option, think about setting up a work area in your living room. If
            that’s also not possible, set up your work desk in your bedroom, but
            consider separating it with some sort of paravane. For those who
            don’t have space, work hubs such as Mindspace or WeWork are a good
            alternative but will cost time and money.
          </p>
          <h2 className="text-2xl text-white font-semibold leading-loose">
            Setup a business and a separate bank account
          </h2>
          <p className="leading-relaxed my-2">
            This is self-explanatory. You need to set up a legal framework that
            you can use to invoice clients and receive payments. Don’t use your
            personal bank account. It will make it a lot easier to track your
            income and expenses and assess your performance over time
          </p>
          <p className="leading-relaxed my-2">
            • This is the one I used the most and I had a good experience with
            it. It’s a US company, with clients of all sizes and from all over
            the world. In my experience, I’ve worked mostly with start-ups and
            small companies.
          </p>
          <p className="leading-relaxed my-2">
            • They’re similar to Toptal but on a smaller scale. Their projects
            are mostly from Germany and sometimes require you to travel to the
            customers’ offices for workshops.
          </p>
          <p className="leading-relaxed my-2">
            • Those are options you can consider but I don’t recommend them. The
            quality of the projects and their budgets are average at best.
          </p>
        </div>
      </section>
      <section className="px-10">
        <div className="m-auto max-w-screen-lg px-10 max-md:px-0 pb-20">
          <div className="rounded-lg border-solid border-2 border-[#1E2029] text-white flex justify-between p-10 max-md:p-5">
            <div className="font-semibold">Share this article:</div>
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
          You may be interested in these articles
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
