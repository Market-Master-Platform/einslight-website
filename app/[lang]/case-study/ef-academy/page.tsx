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

function CaseStudyEfAcademy() {
  const dictionary = useDictionary();

  const techStackData = [
    {
      label: dictionary.case_study.tech_stack,
      value: dictionary.case_study.app_sport.mobile_app,
    },
    { label: dictionary.case_study.service, value: "E-learning" },
    { label: dictionary.case_study.location, value: "Switzerland" },
    { label: dictionary.case_study.size, value: "10000+" },
    { label: dictionary.case_study.website, value: "efacademy.org" },
  ];

  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/ef-academy.png"
        title={dictionary.case_study.ef_academy.connecting_students}
        description="EF Academy"
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
              <header className="flex flex-col grow text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl leading-10 max-md:max-w-full">
                  {dictionary.case_study.ef_academy.mobile_apps_for_boarding}
                </h1>
                <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {
                    dictionary.case_study.ef_academy
                      .we_had_some_great_developers
                  }
                  <br />
                </p>
                <h2 className="mt-11 max-md:mt-10 max-md:max-w-full">
                  {dictionary.case_study.ef_academy.what_were_your_goals}
                </h2>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {
                    dictionary.case_study.ef_academy
                      .to_provide_customers_with_one
                  }
                </p>
                <h2 className="mt-9 max-md:max-w-full">
                  {dictionary.case_study.ef_academy.solution}
                </h2>
                <h3 className="mt-7 max-md:max-w-full">
                  {dictionary.case_study.ef_academy.how_did_you_select}
                </h3>
              </header>

              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.ef_academy.i_was_recommend}{" "}
                <span className="font-bold">Einslight</span>{" "}
                {dictionary.case_study.ef_academy.as_a_good_option}{" "}
                <span className="font-bold">Einslight</span>{" "}
                {dictionary.case_study.ef_academy.for_a_longer_period_of_time}
                <br />
              </p>
              <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                {
                  dictionary.case_study.ef_academy
                    .describe_the_project_in_detail
                }
              </h2>
              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.ef_academy.we_had_a_clear_project}
                <br />
                <br />
                {dictionary.case_study.ef_academy.the_feasibility_for_this}
                <br />
                <br />
                {dictionary.case_study.ef_academy.during_the_first_term_of_year}
                <br />
                <br />
                {
                  dictionary.case_study.ef_academy
                    .the_einslight_developer_worked_very_well
                }
              </p>
              <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:max-w-full">
                {dictionary.case_study.ef_academy.what_was_the_team_composition}
              </h2>
              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.ef_academy.the_team_consisted}{" "}
                <span className="font-bold">Einslight</span>.{" "}
                {dictionary.case_study.ef_academy.we_also_got_help}
              </p>
              <h2 className="mt-10 text-3xl font-semibold leading-8 text-white">
                {dictionary.case_study.ef_academy.result_and_feedback}
              </h2>
              <p className="self-end mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                {dictionary.case_study.ef_academy.can_you_share_any_outcomes}
                <br />
                <br />
                {dictionary.case_study.ef_academy.when_we_first_launched}
                <br />
                <br />
                {
                  dictionary.case_study.ef_academy
                    .we_also_had_very_little_issues
                }
                <br />
                <br />
                {
                  dictionary.case_study.ef_academy
                    .how_effective_was_the_workflow
                }
                <br />
                <br />
                {dictionary.case_study.ef_academy.this_worked_very_well}
                <br />
              </p>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudyEfAcademy;
