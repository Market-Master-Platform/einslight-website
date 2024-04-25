import { ArrowRightIcon } from "@heroicons/react/24/solid";
import * as React from "react";

const specializations = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8f681287204cc4d2b9ad6e3b8c7c7d6af907482f223e9b83ec6c5396589539?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 1", className: "shrink-0 w-32 max-w-full aspect-[1.82]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a2c544ca8b2fd668f309c0955537cac0f0946b081f8d7c4bb2aaf421f0ae07?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 2", className: "shrink-0 max-w-full aspect-[1.89] w-[132px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a93a5b295298d5930b99aa42f510f60876cc47b8efef96b0e03bdd514ea3fc4?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 3", className: "shrink-0 max-w-full aspect-[2.17] w-[152px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fd91fd10b5e63d7e462b811810c7468d98bc8977d543f96ac269a6a83784ea6?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 4", className: "shrink-0 aspect-[1.39] w-[97px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c4ffcfd1fcf5d25038d7890e4313eded99d62fcc9ac6a541c91eba2788bb80?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 5", className: "shrink-0 max-w-full aspect-[2.17] w-[152px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/45b35c8213ba4c6031460d5d0302d3e193241de5ae9e527d3951f7bcf70ca035?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 6", className: "shrink-0 max-w-full aspect-[2.17] w-[152px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae0165b8b05dec5386c76e6dadb330a765eb854f60bb05829f441db68cb561da?apiKey=fd011477b5724ce38ff2cc24ae257b18&", alt: "Specialization 7", className: "shrink-0 max-w-full aspect-[2.17] w-[152px]" },
];

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center w-full bg-gray-50 max-md:max-w-full">
            <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[720px] max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dbbffc43c870b7d5a994e55cfd21fb1db3ca434dc988f21b808b03de298ddfd?apiKey=fd011477b5724ce38ff2cc24ae257b18&" alt="Background" className="object-cover absolute inset-0 size-full" />
            <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[720px] max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/827b0192f63fd7cc4d3b4760635de82ec4875cd52a9ad0045bc45dbfcf2d343e?apiKey=fd011477b5724ce38ff2cc24ae257b18&" alt="Background" className="object-cover absolute inset-0 size-full" />
                <header className="flex relative flex-col items-center px-5 pb-9 w-full bg-zinc-900 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-4 mt-0 w-full text-lg leading-6 text-center text-white max-w-[1240px] max-md:px-5 max-md:max-w-full">
                    <h1 className="mt-2 max-md:max-w-full">Full-service tech partner</h1>
                    <p className="mt-4 text-6xl font-extrabold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    Software development for brands that want to achieve more.
                    </p>
                    <p className="mt-4 max-md:max-w-full">
                    Our team develops apps, e-com, web and custom applications using best in class software.
                    </p>
                    <button className="justify-center px-14 py-7 mt-8 font-bold text-white bg-blue-500 leading-[178%] rounded-[41px] max-md:px-5">
                    Contact Us
                    </button>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6dc1d6fe48bbbf6d5b9d54f3a1d4dcbe5881de4089c94f98a0e01520c6facee?apiKey=fd011477b5724ce38ff2cc24ae257b18&" alt="Arrow down" className="mt-8 w-9 aspect-square" />
                </div>
                <div className="mt-8 text-sm leading-4 text-center text-white">Specialized in</div>
                <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
                    {specializations.map((specialization, index) => (
                    <Logo
                        key={index}
                        src={specialization.src}
                        alt={specialization.alt}
                        className={specialization.className}
                    />
                    ))}
                </div>
                </header>
            </div>
            </div>
        </div>
        <section className="flex flex-col items-center px-16 pt-20 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
            <div className="z-10 justify-center mb-0 w-full max-w-[1230px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-gray-200 max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-3xl font-bold max-md:max-w-full">Create frictionless workflows</h2>
                    <p className="mt-4 text-lg leading-6 max-md:max-w-full">
                    There is no way around the fact that both employees and customers expect a user centric digital experience. We help clients that have decided to make the digital opportunity their main priorty and competitive advantage.
                    </p>
                </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a7ffce1c698f94ba9aacf3adcc964a4a97cb76a1f5032ef1682a40963c79eb5?apiKey=fd011477b5724ce38ff2cc24ae257b18&" alt="Workflow" className="grow w-full aspect-[0.85] max-md:mt-5 max-md:max-w-full" />
                </div>
            </div>
            </div>
        </section>
        <footer className="flex flex-col items-center p-20 w-full bg-zinc-900 mt-[2047px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 mt-6 w-full font-semibold max-w-[1247px] max-md:flex-wrap max-md:max-w-full">
            <h2 className="flex-auto my-auto text-3xl leading-10 text-white">Hey, how can we help?</h2>
            <button className="justify-center items-center px-16 py-6 text-xl leading-6 text-center text-white bg-blue-500 max-md:px-5">
                Send message
            </button>
            </div>
            <hr className="shrink-0 mt-20 max-w-full h-0.5 bg-neutral-800 w-[1247px] max-md:mt-10" />
            <div className="flex gap-5 justify-between mt-32 mb-9 w-full font-medium text-gray-400 max-w-[1247px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            </div>
        </footer>
      </div>
    </main>
  );
}
