"use client";

import CustomBanner from "@/components/CaseStudy/CustomBanner";
import { useDictionary } from "@/context/dictionary-provider";
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

function CaseStudyTimeEdit() {
  const dictionary = useDictionary();

  const techStackData = [
    {
      label: dictionary.case_study.tech_stack,
      value: "ReactJS, NodeJS, MongoDB",
    },
    { label: dictionary.case_study.service, value: "SAAS" },
    {
      label: dictionary.case_study.location,
      value: dictionary.case_study.igottera.sweden,
    },
    { label: dictionary.case_study.size, value: "11-50" },
    { label: dictionary.case_study.website, value: "timeedit.com" },
  ];

  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/timeedit.png"
        title={dictionary.case_study.time_edit.great_academia}
        description={dictionary.case_study.time_edit.timeedit_the_leading}
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
                  {dictionary.case_study.time_edit.scaling_effortless}{" "}
                </h1>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {dictionary.case_study.time_edit.in_early_2018_time_edit}
                  <br />
                  <br />
                  {dictionary.case_study.time_edit.time_edit_had_two_main}{" "}
                  <span className="font-bold">Einslight</span>.
                </p>
              </div>

              <section>
                <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                  {dictionary.case_study.time_edit.solutions}
                </h2>
                <p className="self-end mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                  <span className="font-bold">Einslight</span>{" "}
                  {dictionary.case_study.time_edit.offered_the_combination}
                  <br />
                  <br />
                  {
                    dictionary.case_study.time_edit.timeedit_started_with_2_flex
                  }{" "}
                  <span className="font-bold">Einslight </span>
                  {
                    dictionary.case_study.time_edit.office_in_central_saigon
                  }{" "}
                  <span className="font-bold">Einslight</span>{" "}
                  {dictionary.case_study.time_edit.community}.
                  <br />
                  <br />
                  <span className="font-bold">Einslight</span>{" "}
                  {dictionary.case_study.time_edit.headhunted_every_individual}
                </p>
              </section>
              <section>
                <h2 className="mt-12 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                  {dictionary.case_study.time_edit.results}
                </h2>
                <p className="self-end mt-8 mr-20 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                  {dictionary.case_study.time_edit.the_excellence_in_einslight}
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
