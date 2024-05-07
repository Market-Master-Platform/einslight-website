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

interface TextSectionProps {
  title: string;
  content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content }) => (
  <>
    <div className="mt-12 mr-16 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      {title}
    </div>
    <div className="mt-7 mr-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
      {content}
    </div>
  </>
);

function CaseStudyIGoterra() {
  const dictionary = useDictionary();

  const techStackItems: TechStackItemProps[] = [
    {
      label: dictionary.case_study.tech_stack,
      value: "PHP, Angular, Appcelerator",
    },
    {
      label: dictionary.case_study.service,
      value: dictionary.case_study.igottera.cloud_based_service,
    },
    {
      label: dictionary.case_study.location,
      value: dictionary.case_study.igottera.sweden,
    },
    { label: dictionary.case_study.size, value: "<25" },
    { label: dictionary.case_study.website, value: "igoterra.com" },
  ];

  const textSections: TextSectionProps[] = [
    {
      title: dictionary.case_study.igottera.what_issues_did_you_have_that_made,
      content: dictionary.case_study.igottera.we_used_our_own_employees,
    },
    {
      title: dictionary.case_study.igottera.why_did_you_choose,
      content: dictionary.case_study.igottera.three_simple_reasons,
    },
    {
      title: dictionary.case_study.igottera.how_has_your_contact,
      content:
        dictionary.case_study.igottera.we_ve_spoken_to_our_account_manager,
    },
    {
      title: dictionary.case_study.igottera.how_has_your_experience,
      content: dictionary.case_study.igottera.excellent_they_not_only_possess,
    },
    {
      title: dictionary.case_study.igottera.what_do_you_think_is_the_best,
      content: dictionary.case_study.igottera.though_the_einslight_developers,
    },
  ];

  return (
    <Fragment>
      <CustomBanner
        imgSrc="/static/images/case-study/igoterra.png"
        title={dictionary.case_study.igottera.building_the_global_hub}
        description="iGoterra"
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
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl font-semibold leading-10 text-white max-md:max-w-full">
                  {dictionary.case_study.igottera.mission_igottera}
                </h1>
                <div className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  {dictionary.case_study.igottera.igoterra_is_the_wildlife}
                  <br />
                  <br />
                  {
                    dictionary.case_study.igottera
                      .igoterra_lets_you_record_your_wildlife
                  }
                  <br />
                  <br />
                  {
                    dictionary.case_study.igottera
                      .such_a_platform_requires_a_solid_user_experience
                  }
                  <br />
                </div>
              </div>

              {textSections.map((section, index) => (
                <TextSection
                  key={index}
                  title={section.title}
                  content={section.content}
                />
              ))}
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudyIGoterra;
