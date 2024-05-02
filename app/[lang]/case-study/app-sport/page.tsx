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

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => (
  <span className="font-bold">{text}</span>
);

const techStackItems = [
  { label: "Tech stack", value: "Mobile application" },
  { label: "Service", value: "App Builder Software" },
  { label: "Location", value: "Sweden" },
  { label: "Size", value: "10 – 50" },
  { label: "Website", value: "appspotr.com" },
];

function CaseStudyAppSport() {
  return (
    <Fragment>
      <CustomBanner
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/acd6b68871a8d0271ca7f4b257a821a0d36cb059688905891fee01ca632e1d0e?apiKey=d22700435c194df19375f24bbe85f4c5&"
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
                  Appspotr the leading low-code app-builder
                </h1>
                <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:max-w-full">
                  AppSpotr is an online service that offers users the ability to
                  create and maintain beautiful native phone and tablet apps for
                  free.
                  <br />
                  <br />
                  Pontus Backlund, CTO at AppSpotr, faced a massive challenge in
                  2018, filling headcounts for tech-related roles turned out to
                  be a massive painpoint. The company had been looking to expand
                  their development team for about six months, to no avail, when
                  they encountered <HighlightedText text="Einslight" />.
                  Backlund came across <HighlightedText text="Einslight" /> by a
                  colleague's referral and just like that, the outsourcing
                  process began. Backlund provided an overview of expectations
                  and requirements of what he looked for in candidates looking
                  to join his team.
                  <br />
                  <br />
                  Next, he was presented with a selection of handpicked
                  developers that matched his needs to expand his development
                  team. Lastly, <HighlightedText text="Einslight" /> took care
                  of all the admin details and let them get to work. Here's
                  Backlund's experience in his own words.
                  <br />
                </p>
                <h2 className="mt-9 text-3xl leading-9 max-md:max-w-full">
                  How Did You Solve Your Development Needs Before Einslight
                </h2>
              </header>

              <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                Things moved at a much slower pace before we started working
                with Pangara. Most of the time, we waited patiently, and used
                contractors to a certain degree but there was always a delay.
                Unfortunately, it wasn't a sustainable solution and we really
                needed something much more long-term in order for us to move
                forward. We discussed solutions with a few offshore contracting
                companies, but nothing seemed to meet our specific needs.
                <br />
              </p>
              <h2 className="mt-11 mr-8 text-3xl font-semibold leading-9 text-white w-[739px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                What Was Your Experience Working With Einslight like?
              </h2>
              <p className="mt-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                From start to finish, the experience has been great and we'd
                happily recommend Pangara to others. Our main contact has been
                with Filip Bengtsson and he has been a strong resource for us
                along the way making sure the transition went smoothly while
                also providing us with positive feedback and guidance.
              </p>
              <h2 className="mt-10 mr-8 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                How Was Your Experience with Einslight's Developers?
              </h2>
              <p className="mt-7 mr-8 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                Our developers worked out very well for us. We've had to set
                fairly high standards when it comes to proactive work and the
                ability to solve abstract problems without much input — which
                can be tough — but it has worked out very well. In addition, as
                far as communication goes, we never had any issues. All of the
                developers speak English extremely well. Overall, the results
                have definitely exceeded our expectations.
              </p>
              <h2 className="mt-10 mr-32 text-3xl font-semibold leading-9 text-white w-[739px] max-md:mr-2.5 max-md:max-w-full">
                What Would You Say Is the Biggest Benefit with Einslight's
                Developers?
              </h2>
              <p className="mt-7 mr-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                The absolutely biggest benefit is having{" "}
                <HighlightedText text="Einslight" /> as a resource to find these
                qualified developers. It's extremely tough in Scandinavia, and
                we've spent a very long time looking for expert developers and
                have come up with no results countless times.
              </p>
              <h2 className="mt-12 mr-28 text-3xl font-semibold leading-8 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                How Has Einslight Helped You Reach Your Goals?
              </h2>
              <p className="mt-7 text-xl font-medium leading-9 text-gray-400 max-md:mr-2.5 max-md:max-w-full">
                Our current Pangara developers have been assisting with our
                maintenance and core functions. This has given our other team
                members more time to focus on implementing new features as well
                as helping the company continue to move forward towards our
                goals. With <HighlightedText text="Einslight" />, not only have
                we saved a great deal of time but also money.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudyAppSport;
