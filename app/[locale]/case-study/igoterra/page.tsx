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

const techStackItems: TechStackItemProps[] = [
  { label: "Tech stack", value: "PHP, Angular, Appcelerator" },
  { label: "Service", value: "Cloud-based service" },
  { label: "Location", value: "Sweden" },
  { label: "Size", value: "<25" },
  { label: "Website", value: "igoterra.com" },
];

const textSections: TextSectionProps[] = [
  {
    title: "What issues did you have that made you find Einslight?",
    content:
      "At first, we used our own employees and Swedish contractors. But in the long run, we needed to complement our workforce with more developers. We required competent and flexible developers. Of course, we were also looking for developers at a reasonable rate, which Einslight could offer. Even though we compared several different options, we found developers quickly with Pangara.",
  },
  {
    title: "Why did you choose Einslight?",
    content:
      "Three simple reasons: Good customer support, and the fact that it's a quick and efficient service. Another plus was the platform's interface, which was very simple and easy to use.",
  },
  {
    title: "How has your contact with Einslight been?",
    content:
      "We've spoken to our account manager, aside from the actual Einslight talents. Overall, it has worked superbly. Pangara — and its developers — have been very accessible.",
  },
  {
    title: "How has your experience with the developers been?",
    content:
      "Excellent. They not only possess very strong competence within their specific skill set, but have great general knowledge of IT. Furthermore, they've been very dedicated and are very quick to help out when needed. As for results, they've generally been of very high quality. Any minor errors we've found have been quickly rectified when noticed.",
  },
  {
    title:
      "What do you think is the biggest benefit with Einslight developers?",
    content:
      "Through the Einslight developers we've saved both time and money. This makes us look at Pangara as a sustainable long-term solution as well.",
  },
];

function CaseStudyIGoterra() {
  return (
    <Fragment>
      <CustomBanner
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a6de88aa1a62831c63806383e0df53a787429a1e2af2c15681b6fb208a17c131?apiKey=d22700435c194df19375f24bbe85f4c5&"
        title="Building the global hub for wildlife observations"
        description="iGoterra"
      />

      <div className="flex flex-col items-end p-20 bg-zinc-900 max-md:px-5">
        <div className="self-center mt-11 w-full max-w-[1250px] max-md:mt-10 max-md:max-w-full">
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
                  Mission: solid user-experience
                </h1>
                <div className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  iGoTerra is the wildlife network to record, manage and share
                  all your wildlife observations, lists, photos and trips.
                  Founded in Sweden in 2012, the company is a global force of
                  nature — figuratively — with customers from all over the
                  world.
                  <br />
                  <br />
                  iGoTerra lets you record your wildlife observations with any
                  device, prepare for your next trip with personalised country
                  checklists, and share your wildlife memories with your friends
                  (and watch yourself rise in the ranks). The platform is also
                  used extensively by commercial wildlife tour operators and
                  NGOs.
                  <br />
                  <br />
                  Such a platform requires a solid user-experience and talented
                  developers to implement it. After searching for local
                  developers, iGoTerra then turned to Pangara for help to
                  connect them with remote top developers. We spoke to Vice
                  President & Partner Björn Andersson about their experience
                  with finding developers.
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
