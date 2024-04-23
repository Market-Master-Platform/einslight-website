import "../globals.css";

interface CategoryItemProps {
  text: string;
  isActive?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ text, isActive }) => {
  return (
    <>
      {isActive ? (
        <div className="self-stretch py-2 px-3 rounded-full bg-[#377DFF] text-white cursor-pointer">
          {text}
        </div>
      ) : (
        <div className="self-stretch py-2 px-3 rounded-full cursor-pointer">
          {text}
        </div>
      )}
    </>
  );
};

const blogPosts = [
  {
    date: "11th May",
    title: "How to start earning",
    description:
      "The right priorities help us in the direction of our potential which is why it is important for earnings.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be8437d6c1b85cff701b8cde99bb4c54cdbca1f9ed325d43739ffa8ba06f12b1?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "How to start earning",
  },
  {
    date: "14th May",
    title: "Color palette",
    description:
      "Each of us has a different favorite and not so much color so it is worth starting with it.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/63e225ab5d6b48270d09d3703fd86ab73775162839b81f1ed42939007cc61cfe?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "Color palette",
  },
  {
    date: "11th May",
    title: "How to start earning",
    description:
      "The right priorities help us in the direction of our potential which is why it is important for earnings.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4fcd3b0f251ee9841aa8b81a17c87a97a0c44913563a732058f145466a47b2d2?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "How to start earning",
  },
  {
    date: "11th May",
    title: "How to start earning",
    description:
      "The right priorities help us in the direction of our potential which is why it is important for earnings.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e0d7c6c2f32205f1dd00d03603ad8ab7f5450fa36869346f769cf7fc89bf9352?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "How to start earning",
  },
  {
    date: "10th May",
    title: "Designing startup",
    description:
      "The main task of a startup is not to be like others. This requires good money and an idea.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81defd0cf7582dbdf2119a428f653ebebf36c111023fd0634317b61ab0dee098?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "Designing startup",
  },
  {
    date: "10th May",
    title: "Designing startup",
    description:
      "The main task of a startup is not to be like others. This requires good money and an idea.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/73101070848350ae22dcd0f9e296381b597d38126d2191e444b224e24a76ca86?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&",
    altText: "Designing startup",
  },
];

interface BlogPostProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  date,
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <article className="mt-12 rounded-sm border-2 border-solid shadow-2xl bg-neutral-800 border-zinc-800 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={altText}
            className="grow w-full aspect-[0.78] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-lg font-semibold max-md:mt-10 max-md:max-w-full">
            <time className="text-gray-400 leading-[122%] max-md:max-w-full">
              {date}
            </time>
            <h2 className="mt-11 text-3xl font-bold leading-10 text-white max-md:mt-10 max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-10 font-medium leading-8 text-gray-400 max-md:mt-10 max-md:max-w-full">
              {description}
            </p>
            <div className="flex gap-4 mt-10 text-xl leading-6 text-blue-500 max-md:flex-wrap max-md:pr-5">
              <span className="flex-auto">Read story</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c1d53ed11699885e9e364553cd97c0b05370c1cb889940e02675065ac6dcb4?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&"
                alt=""
                className="shrink-0 w-5 aspect-[1.05] fill-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex gap-2.5 self-center mt-16 text-2xl font-semibold leading-7 text-gray-400 whitespace-nowrap max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8df532a8de2f1d562a86b2480ea727bb93422cc8828c45cfef72c24c95ae7f6?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&"
        alt=""
        className="shrink-0 aspect-square w-[50px]"
      />
      {pages.map((page) => (
        <div
          key={page}
          className={`justify-center items-center px-5 rounded-2xl h-[50px] w-[50px] ${
            page === currentPage
              ? "text-white bg-blue-500"
              : "border-2 border-solid bg-neutral-800 border-zinc-800"
          }`}
        >
          {page}
        </div>
      ))}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5f07230d8f0271ab3008d449c5f32e827c0515082e7e8c9d8c1df8fa218f45?apiKey=a3bb7501d3434046a1fb8bf6567e2d30&"
        alt=""
        className="shrink-0 aspect-square w-[50px]"
      />
    </nav>
  );
};

export default function Blogs() {
  const categories = [
    "All Categories",
    "Mobile App",
    "Website",
    "Desktop App",
    "UI/UX",
    "Website",
    "Desktop App",
    "UI/UX",
    "UI/UX",
  ];
  return (
    <main className="bg-[#12141D]">
      <section className="flex justify-center items-center px-16 py-20 w-full text-center bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-11 mb-7 max-w-full w-[778px] max-md:mt-10">
          <h1 className="text-6xl font-extrabold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            The news that surrounds us is collected here
          </h1>
          <p className="mt-16 text-xl font-medium leading-9 text-gray-400 max-md:mt-10 max-md:max-w-full">
            Read watch and absorb the content that we publish in our news blog.
            Also leave comments and communicate with other users.
          </p>
        </div>
      </section>
      <div className="flex gap-x-4 gap-y-1 py-2 px-2 justify-center items-center text-md font-semibold text-gray-400 max-lg:flex-wrap">
        {categories.map((category, index) => (
          <CategoryItem
            text={category}
            isActive={category === "All Categories"}
            key={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-10">
        <div className="col-span-full lg:col-span-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
          <Pagination currentPage={1} totalPages={3} />
        </div>
        <div className="col-span-full lg:col-span-4">the placeholder</div>
      </div>
    </main>
  );
}
