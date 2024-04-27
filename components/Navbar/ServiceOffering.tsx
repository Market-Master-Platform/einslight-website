import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface ServiceItemProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface ServiceOfferingProps {
  handleToggleServiceOffering?: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="flex gap-6">
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="shrink-0 self-start w-8 aspect-square"
    />
    <div className="flex flex-col">
      <div className="max-md:text-lg text-2xl font-bold leading-7 text-neutral-50">
        {title}
      </div>
      <div className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500">
        {description}
      </div>
    </div>
  </div>
);

const serviceItems: ServiceItemProps[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1c13787f75f4228376fbae209b7eab5f7da66f8f2ea6022f9fdfbc7559a140d0?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "CRM",
    description: "Hubsot",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd106a479fda0f1f2038a5d55ead9de3b0f5a87c27eb9c594484095f0b922f?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "ERP",
    description: "SAP - Visma",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0a5f8b6bee2919a611ae867f05b5b765daea89d870a3a0d5d24a6e092407b011?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Mobile",
    description: "iOS - Android - Firebase",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/695f6c88f20d2587b180e312545ec80c39b13670a575a21ec1147f1ca5b38686?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Payments",
    description: "Klarna - Stripe - Ayden",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43723cdd3d8c01c275714dc67e8422a2f6087c0b910dca4d74efe869e2ee8e8d?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Accounting",
    description: "Fortnox",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e16b5954450be95644bd08a8363454b713ccb53df149a0c074707743f28ad255?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Productivity",
    description: "Office 365 - Google Apps",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/de5bdd80bb476076ca38dac7ad60ee8e400fec82d20a26fc7b0d4de3aa4a9ef4?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Business Intellegience",
    description: "Power BI - Qlik",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2132ddcd19b800d793439b93559719845dd8560c928ac8aab7ba03494d7431f0?apiKey=75125e4600594754a9020f21650a7c7d&",
    title: "Ecommerce",
    description: "Power BI - Qlik",
  },
];

const ServiceOffering: FC<ServiceOfferingProps> = ({
  handleToggleServiceOffering,
}) => {
  return (
    <div className="flex max-md:flex-col md:flex-wrap justify-center bg-neutral-800 h-full">
      <div className="md:hidden flex justify-end items-center p-8">
        <XMarkIcon
          width={30}
          height={30}
          fill="#fff"
          onClick={handleToggleServiceOffering}
        />
      </div>

      <main className="flex max-md:flex-col relative self-center w-full md:mb-10 max-md:max-w-full text-lg font-bold leading-8 text-neutral-100 px-5 md:px-20">
        <div className="max-lg:w-full w-[51%] md:border-r-2 md:border-[#333333] flex justify-start md:px-8">
          <div className="max-md:mb-8 mb-16 flex flex-col max-md:gap-1 gap-10">
            <div>Service Offering</div>

            <section className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-6 justify-even px-px max-md:flex-wrap max-md:mt-8">
                <div className="flex flex-col items-center self-start gap-10">
                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c064cc5226d689cd4c8d0e8c9a499e05a9601dd6ff3795ebabf0c8ea5c251613?apiKey=75125e4600594754a9020f21650a7c7d&"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <h2 className="max-md:max-w-full">
                        System implementation
                      </h2>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43dfcc84b88028c00461f150150a830d8b787cf1dbc4059704c987c9cf3e8ad6?apiKey=75125e4600594754a9020f21650a7c7d&"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <h2 className="max-md:max-w-full">Integration</h2>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88e139ebc28b432a44cfe05dd28244891f53eb695930bf81b69fa27b1b26c54?apiKey=75125e4600594754a9020f21650a7c7d&"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <h2 className="max-md:max-w-full">
                        Dedicated teams & resources
                      </h2>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c39c7f6712d29bdfdc2feb771e00cbfaede2c2767bbbb6451b5dfced5c145c4?apiKey=75125e4600594754a9020f21650a7c7d&"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div className="">
                      <h2 className="max-md:max-w-full">
                        Support & Maintenance
                      </h2>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="max-lg:w-full w-[48%] flex justify-start md:px-8">
          <div className="max-md:mb-8 mb-16 flex flex-col max-md:gap-1 gap-10">
            <div>System</div>

            <section className="flex max-lg:flex-col max-md:ml-0 max-md:w-full gap-12">
              <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 gap-10">
                  {serviceItems.slice(0, 4).map((item, index) => (
                    <ServiceItem key={index} {...item} />
                  ))}
                </div>
              </div>
              <div className="flex max-lg:flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 gap-10">
                  {serviceItems.slice(4).map((item, index) => (
                    <ServiceItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceOffering;
