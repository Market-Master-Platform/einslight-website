import { ChevronRightIcon } from "@heroicons/react/24/solid";

const BlogArticle = () => {
  return (
    <main className="bg-[#12141D]">
      <section className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url('/blogs/blog-article-header.png')] text-white h-[40vh] bg-center bg-no-repeat flex flex-col justify-end items-center">
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
              src={"/blogs/author-image.png"}
            />
            <div className="flex flex-col justify-center pl-3">
              <p className="font-medium">Sergei Filatov</p>
              <p className="text-[#B0B7C3] font-medium">14th May</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogArticle;
