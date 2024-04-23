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
    </main>
  );
}
