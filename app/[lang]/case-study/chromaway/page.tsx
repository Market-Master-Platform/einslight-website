import CustomBanner from "@/components/CaseStudy/CustomBanner";
import { Fragment } from "react";

interface TechStackItemProps {
  label: string;
  value: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ label, value }) => (
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-xl font-semibold leading-6 text-white max-md:mt-10">
        {label}
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-xl font-medium leading-6 text-gray-400 max-md:mt-10">
        {value}
      </div>
    </div>
  </div>
);

const TechStack: React.FC = () => {
  const techStackData: TechStackItemProps[] = [
    { label: "Tech stack", value: "Blockchain" },
    { label: "Service", value: "Dedicated resources" },
    { label: "Location", value: "California" },
    { label: "Size", value: "250+" },
    { label: "Website", value: "chromaway.com" },
  ];

  return (
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="pl-8 pr-4 py-12 w-full rounded-2xl border-2 border-solid bg-zinc-900 border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col gap-8 w-full">
            {techStackData.map(({ label, value }) => (
              <TechStackItem key={label} label={label} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => (
  <div className="flex flex-col px-14 py-16 mt-10 rounded-2xl bg-neutral-800 max-md:px-5 max-md:max-w-full">
    <blockquote className="text-4xl leading-10 text-white max-md:max-w-full">
      "Through <span className="font-bold">Einslight</span> we found world-class
      talents, I have met developers that are unique through{" "}
      <span className="font-bold">Einslight</span>'s developer team. I don't
      think we could have found this combination of hard and soft skills
      elsewhere on our own"{" "}
    </blockquote>
    <div className="mt-11 text-xl leading-6 text-gray-400 max-md:mt-10 max-md:max-w-full">
      Henrik Hjelte, CEO of ChromaWay.
    </div>
  </div>
);

const CaseStudyChromaway: React.FC = () => (
  <Fragment>
    <CustomBanner
      imgSrc="/static/images/case-study/chromaway.png"
      title="Making sense of the blockchain"
      description="ChromaWay - builder of relational blockchain solutions"
    />

    <div className="flex justify-even p-14 bg-zinc-900 max-md:px-5 max-md:pt-0">
      <div className="md:mt-11 w-full max-w-[1254px] max-md:max-w-full">
        <div className="flex gap-16 max-md:flex-col max-md:gap-0">
          <TechStack />
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col grow font-semibold max-md:mt-10 max-md:max-w-full">
              <h1 className="text-4xl leading-10 text-white max-md:max-w-full">
                Accelerating development of cutting edge services
              </h1>
              <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                In 2018 ChromaWay started working with{" "}
                <span className="font-bold">Einslight</span>'s Blockchain and
                AWS developers to accelerate their innovation of cutting edge
                services.
                <br />
                <br />
                <span className="font-bold">Turning to </span>
                <span className="font-bold">Einslight</span>
                <span className="font-bold">
                  {" "}
                  for extended software development capacity{" "}
                </span>
              </p>
              <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                ChromaWay is an innovative blockchain technology company that
                grows at high speed and is nominated as one of the 33 hottest
                start-ups in Sweden. During 2018 ChromaWay faced a challenge as
                they needed to speed up their development but had limited time
                to search for and source experienced developers with very
                specific skills. After having evaluated different options, the
                ChromaWay-team have put their trust in Pangara for first a small
                pilot that quickly has grown into a team of dedicated developers
                with experience of primarily blockchain technology and AWS.
              </p>
              <Testimonial />
            </article>

            <h2 className="mt-16 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Combination of soft and hard skills
            </h2>
            <p className="mt-10 text-xl font-medium leading-9 text-gray-400 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Henrik Hjelte, Founder and CEO of ChromaWay, tells us that before
              they worked with <span className="font-bold">Einslight</span> he
              spend a lot of time and energy trying to find suitable developers.
              ChromaWay is a relatively small company with great growth
              ambitions, and the partnership with{" "}
              <span className="font-bold">Einslight</span> could free up time
              that they had previously spent on recruitment. "We have had a
              really hard time finding a good combination of competence and
              personality. Through <span className="font-bold">Einslight</span>{" "}
              we found world-class talents, I have met developers that are
              unique through <span className="font-bold">Einslight</span>'s
              developer team. I don't think we could have found this combination
              of hard and soft skills elsewhere on our own" – Henrik Hjelte, CEO
              of ChromaWay, comments.
              <br />
            </p>
            <h2 className="mt-16 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Doubling the development capacity in short time
            </h2>
            <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
              After ChromaWay had evaluated a pilot they decided to extend their
              dependency on <span className="font-bold">Einslight</span>.{" "}
              <span className="font-bold">Einslight</span>'s team matched
              ChromaWay specifications towards the network, and consequently,
              their team was doubled in a matter of weeks. The future for
              ChromaWay looks bright and through Pangara they have found a
              reliable tech-partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default CaseStudyChromaway;
