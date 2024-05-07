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

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => (
  <span className="font-bold">{text}</span>
);

function CaseStudyAppSport() {
  const dictionary = useDictionary();

  const techStackItems = [
    {
      label: dictionary.case_study.tech_stack,
      value: dictionary.case_study.app_sport.mobile_app,
    },
    {
      label: dictionary.case_study.service,
      value: dictionary.case_study.app_sport.app_builder_software,
    },
    {
      label: dictionary.case_study.location,
      value: dictionary.case_study.igottera.sweden,
    },
    { label: dictionary.case_study.size, value: "10 – 50" },
    { label: dictionary.case_study.website, value: "appspotr.com" },
  ];

  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/appspotr.png"
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
                    {techStackItems.map(({ label, value }) => (
                      <TechStackItem key={label} label={label} value={value} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <article className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <header className="flex flex-col grow font-semibold text-white max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl leading-10 max-md:max-w-full">
                  {
                    dictionary.case_study.app_sport
                      .appsport_the_leading_low_code
                  }
                </h1>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {dictionary.case_study.app_sport.appsport_is_an_online}
                  <br />
                  <br />
                  {dictionary.case_study.app_sport.pontus_backlund}{" "}
                  <HighlightedText text="Einslight" />.{" "}
                  {dictionary.case_study.app_sport.backlund_came_across}{" "}
                  <HighlightedText text="Einslight" />{" "}
                  {dictionary.case_study.app_sport.by_a_colleagues}
                  <br />
                  <br />
                  {dictionary.case_study.app_sport.next_he_was_presented}{" "}
                  <HighlightedText text="Einslight" />{" "}
                  {dictionary.case_study.app_sport.took_care_of_all_the_admin}
                  <br />
                </p>
                <h2 className="mt-9 text-3xl leading-9 max-md:max-w-full">
                  {dictionary.case_study.app_sport.how_did_you_solve_your_dev}
                </h2>
              </header>

              <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.things_moved_at_a_much}
                <br />
              </p>
              <h2 className="mt-11 mr-8 text-3xl font-semibold leading-9 text-white w-[739px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.what_was_your_experience}
              </h2>
              <p className="mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.from_start_to_finish}
              </p>
              <h2 className="mt-10 mr-8 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.how_was_your_experience}
              </h2>
              <p className="mt-7 mr-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.our_developers_worked_out}
              </p>
              <h2 className="mt-10 mr-32 text-3xl font-semibold leading-9 text-white w-[739px] max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.what_would_you_say}
              </h2>
              <p className="mt-7 mr-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.the_absolutely_biggest_benefit}{" "}
                <HighlightedText text="Einslight" />{" "}
                {dictionary.case_study.app_sport.as_a_resource_to_find}
              </p>
              <h2 className="mt-12 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.how_has_einslight_helped}
              </h2>
              <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.app_sport.our_current_einslight}{" "}
                <HighlightedText text="Einslight" />,{" "}
                {dictionary.case_study.app_sport.not_only_have_we_saved}
              </p>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudyAppSport;
