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

const techStackData = [
  { label: "Tech stack", value: "ReactJS, NodeJS, MongoDB" },
  { label: "Service", value: "SAAS" },
  { label: "Location", value: "Sweden" },
  { label: "Size", value: "11-50" },
  { label: "Website", value: "timeedit.com" },
];

function CaseStudyTimeEdit() {
  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/timeedit.png"
        title="Great academia requires great software"
        description="TimeEdit - the leading provider of administrative academic software solutions"
      />

      <div className="flex justify-even p-14 bg-zinc-900 max-md:px-5 max-md:pt-0">
        <div className="md:mt-11 w-full max-w-[1254px] max-md:max-w-full">
          <div className="flex gap-16 max-md:flex-col max-md:gap-0">
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
            <article className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl font-semibold leading-10 text-white max-md:max-w-full">
                  Scaling effortlessly with a trusted tech-parnter{" "}
                </h1>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  In early 2018, TimeEdit faced further expansion and growth.
                  With an existing tech team with six developers, they needed to
                  find additional talents. They were was faced with two choices:
                  to hire new developers in Sweden or look at remote options.
                  <br />
                  <br />
                  TimeEdit had two main required skills of those they were
                  looking for: seniority and motivation. Their experience was
                  that the combination of seniority and motivation is difficult
                  to find in Sweden why they contacted{" "}
                  <span className="font-bold">Einslight</span>.
                </p>
              </div>

              <section>
                <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                  Solutions
                </h2>
                <p className="self-end mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                  <span className="font-bold">Einslight</span> offered the
                  combination that TimeEdit was looking for.
                  <br />
                  <br />
                  TimeEdit started with 2 FLEX developers over nine months
                  (25h/w) and now TimeEdit is working effectivity and
                  successfully with a team of 5 full-time developers, all of
                  whom are located at{" "}
                  <span className="font-bold">Einslight</span>'s office in
                  central Saigon, as part of the{" "}
                  <span className="font-bold">Einslight</span> Community.
                  <br />
                  <br />
                  <span className="font-bold">Einslight</span> headhunted every
                  individual team member including a team leader to build a team
                  that could work closely together. It took 4 weeks to find the
                  Talents and the developers were able to start in 2-8 weeks.
                </p>
              </section>
              <section>
                <h2 className="mt-12 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                  Results
                </h2>
                <p className="self-end mt-8 mr-20 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                  The excellence in <span className="font-bold">Einslight</span>
                  's team together with their internal tech team enabled rapid
                  development and continued growth. As TimeEdit expands quickly,
                  they are in the greatest need of a well-functioning tech team.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudyTimeEdit;
