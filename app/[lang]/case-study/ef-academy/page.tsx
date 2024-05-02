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
  { label: "Tech stack", value: "Mobile Apps" },
  { label: "Service", value: "E-learning" },
  { label: "Location", value: "Switzerland" },
  { label: "Size", value: "10000+" },
  { label: "Website", value: "efacademy.org" },
];

function CaseStudyEfAcademy() {
  return (
    <Fragment>
      <CustomBanner
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bf6afbc3a885975491d80258964c9aaceaebbe9f32adcb2c9e26968c353c?apiKey=d22700435c194df19375f24bbe85f4c5&"
        title="Connecting students to great technology"
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
                  Mobile apps for boarding school students
                </h1>
                <p className="mt-9 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  We had some great developers in house, but no one that was
                  knowledgeable in working with mobile apps, which we really
                  wanted to develop, first for our student and later for their
                  parents as well.
                  <br />
                </p>
                <h2 className="mt-11 max-md:mt-10 max-md:max-w-full">
                  What were your goals for this project?
                </h2>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  To provide customers with one single source where they could
                  easily keep up to date on all needed information about the
                  schedule, progress, information from the school etc.
                </p>
                <h2 className="mt-9 max-md:max-w-full">SOLUTION</h2>
                <h3 className="mt-7 max-md:max-w-full">
                  How did you select this vendor?
                </h3>
              </header>

              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                I was recommended <span className="font-bold">Einslight</span>{" "}
                as a good option from a close friend who had been helped by
                developers from <span className="font-bold">Einslight</span> for
                a longer period of time. Especially we sought after a good value
                for money to show what could be done for the customers without
                signing up for too big a cost.
                <br />
              </p>
              <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10">
                Describe the project in detail.
              </h2>
              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                We had a clear project plan for a MVP, and were lucky to find an
                excellent developer within just two interviews. We were
                specifically looking for someone who could work in React Native
                to get the application working for both Operation Systems at
                once.
                <br />
                <br />
                The feasibility for this was also discussed with the developer
                in the early talks. He can back with a very reasonable quote,
                that he also kept to very well (apart from extra tasks that we
                added to the project of course). During 4 months we worked
                together to get the initial product ready and launched before
                the start of the new school year.
                <br />
                <br />
                During the first term of the year we also made additional
                updates based on feedback from the staff and students in the
                school. After that we started working on a similar one
                application for the parents. This development was made alongside
                the development of a new web app for the parents, so that we
                could make sure they were both aligned and behaved and looked in
                the same way.
                <br />
                <br />
                The <span className="font-bold">Einslight</span> developer
                worked very well with the developers in our team to achieve
                this. We are now getting ready to launch also the native
                application for the parents, which will simplify the day to day
                work for multiple staff, and also greatly improve how parents
                can keep up to date with their child's education.
              </p>
              <h2 className="mt-11 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:max-w-full">
                What was the team composition?
              </h2>
              <p className="self-end mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                The team consisted of a Product Owner (me), a web developer on
                our end (who would work on APIs as well) and the mobile app
                developer from <span className="font-bold">Einslight</span>. We
                also got help from another in house web developer as well as one
                of our SalesForce developers to make sure it all worked.
              </p>
              <h2 className="mt-10 text-3xl font-semibold leading-8 text-white">
                RESULTS & FEEDBACK
              </h2>
              <p className="self-end mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                Can you share any outcomes from the project that demonstrate
                progress or success?
                <br />
                <br />
                When we first launched the mobile app for the students the
                students also had a web application where they could log in to
                see their grades. The usage of this fell to almost 0 in very
                short time when they had the mobile app instead.
                <br />
                <br />
                We also had very little issues or work needed from support due
                to this change. Other processes that had been very manual and
                paper-based now could be managed directly in the app by the
                students.
                <br />
                <br />
                How effective was the workflow between your team and theirs?
                <br />
                <br />
                This worked very well. The team we worked with was super
                responsive and helpful.
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
