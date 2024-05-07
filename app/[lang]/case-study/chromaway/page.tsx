"use client";

import { Fragment } from "react";
import CustomBanner from "@/components/CaseStudy/CustomBanner";
import { useDictionary } from "@/context/dictionary-provider";

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
  const dictionary = useDictionary();

  const techStackData: TechStackItemProps[] = [
    { label: dictionary.case_study.tech_stack, value: "Blockchain" },
    {
      label: dictionary.case_study.service,
      value: dictionary.case_study.chromaway.dedicated_resource,
    },
    { label: dictionary.case_study.location, value: "California" },
    { label: dictionary.case_study.size, value: "250+" },
    { label: dictionary.case_study.website, value: "chromaway.com" },
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

const Testimonial: React.FC = () => {
  const dictionary = useDictionary();

  return (
    <div className="flex flex-col px-14 py-16 mt-10 rounded-2xl bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <blockquote className="text-4xl leading-10 text-white max-md:max-w-full">
        "{dictionary.case_study.chromaway.through}{" "}
        <span className="font-bold">Einslight</span>{" "}
        {dictionary.case_study.chromaway.we_found_world_class}{" "}
        {dictionary.case_study.chromaway.i_dont_think_we_could_have_found_quote}
        "{" "}
      </blockquote>
      <div className="mt-11 text-xl leading-6 text-gray-400 max-md:mt-10 max-md:max-w-full">
        Henrik Hjelte, CEO of ChromaWay.
      </div>
    </div>
  );
};

const CaseStudyChromaway: React.FC = () => {
  const dictionary = useDictionary();

  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/chromaway.png"
        title={dictionary.case_study.chromaway.make_sense_of_blockchain}
        description={`ChromaWay - ${dictionary.case_study.chromaway.builder_of_relational_blockchain_solutions}`}
      />

      <div className="flex justify-even p-14 bg-zinc-900 max-md:px-5 max-md:pt-0">
        <div className="md:mt-11 w-full max-w-[1254px] max-md:max-w-full">
          <div className="flex gap-16 max-md:flex-col max-md:gap-0">
            <TechStack />
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow font-semibold max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl leading-10 text-white max-md:max-w-full">
                  {
                    dictionary.case_study.chromaway
                      .accelerating_development_cutting_edge
                  }
                </h1>
                <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {dictionary.case_study.chromaway.in_2018_chromaway_started}{" "}
                  {
                    dictionary.case_study.chromaway
                      .einslight_blockchain_and_aws_developers
                  }
                  <br />
                  <br />
                  <span className="font-bold">
                    {dictionary.case_study.chromaway.turning_to}{" "}
                  </span>
                  <span className="font-bold">Einslight</span>
                  <span className="font-bold">
                    {" "}
                    {dictionary.case_study.chromaway.for_extended_software}{" "}
                  </span>
                </p>
                <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {
                    dictionary.case_study.chromaway
                      .chromaway_is_an_innovative_blockchain_technology
                  }
                </p>
                <Testimonial />
              </article>

              <h2 className="mt-16 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {
                  dictionary.case_study.chromaway
                    .combination_of_soft_hard_skills
                }
              </h2>
              <p className="mt-10 text-xl font-medium leading-9 text-gray-400 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {
                  dictionary.case_study.chromaway
                    .henrik_hjelte_founder_and_ceo_chromaway
                }{" "}
                <span className="font-bold">Einslight</span>{" "}
                {dictionary.case_study.chromaway.he_spend_a_lot_of_time_energy}{" "}
                <span className="font-bold">Einslight</span>{" "}
                {dictionary.case_study.chromaway.could_free_up_time}{" "}
                {dictionary.case_study.chromaway.through}{" "}
                <span className="font-bold">Einslight</span>{" "}
                {dictionary.case_study.chromaway.we_found_world_class}{" "}
                {
                  dictionary.case_study.chromaway
                    .i_dont_think_we_could_have_found
                }
                <br />
              </p>
              <h2 className="mt-16 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {
                  dictionary.case_study.chromaway
                    .doubling_the_development_capacity
                }
              </h2>
              <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.chromaway.after_chromaway_had_evaluated}{" "}
                <span className="font-bold">Einslight</span>.{" "}
                {dictionary.case_study.chromaway.team_matched_chromaway}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CaseStudyChromaway;
