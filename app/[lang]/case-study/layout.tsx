import CustomBanner from "@/components/CaseStudy/CustomBanner";

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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/380ce8cc605368c00c9d3f980394f3afd7e28915e67039adabe3fb8ad1536a85?apiKey=d22700435c194df19375f24bbe85f4c5&"
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
  const articles: ArticleCardProps[] = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/422b477926cf2139a4c1bad74ac4b6dd219c347301a0c946f0276566106cd170?apiKey=d22700435c194df19375f24bbe85f4c5&",
      date: "15th May",
      title: "Planning for change",
      description:
        "When planning changes the main thing is to consider your investment as well as what you will get in the end.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/989f99e9dd2f2c1355f316b741e9cc819c1899c6649cc8d4bd73dc2739f959de?apiKey=d22700435c194df19375f24bbe85f4c5&",
      date: "15th May",
      title: "Planning for change",
      description:
        "When planning changes the main thing is to consider your investment as well as what you will get in the end.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/025640f4acbf4c0c1202fc74bb2ceb073fbf70f216315ece1276214692ee4c37?apiKey=d22700435c194df19375f24bbe85f4c5&",
      date: "12th May",
      title: "Color palette",
      description:
        "Each of us has a different favorite and not so much color so it is worth starting with it.",
    },
  ];

  return (
    <>
      <section>{children}</section>

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
    </>
  );
}
