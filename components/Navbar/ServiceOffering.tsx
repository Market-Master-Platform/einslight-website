import * as React from "react";

interface SystemItemProps {
  icon: string;
  title: string;
  description: string;
}

const SystemItem: React.FC<SystemItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-5 justify-between whitespace-nowrap">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 self-start w-8 aspect-square"
      />
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold leading-7 text-neutral-50">
          {title}
        </h3>
        <p className="mt-2 text-lg leading-6 text-zinc-500">{description}</p>
      </div>
    </div>
  );
};

function ServiceOffering() {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c064cc5226d689cd4c8d0e8c9a499e05a9601dd6ff3795ebabf0c8ea5c251613?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "System implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43dfcc84b88028c00461f150150a830d8b787cf1dbc4059704c987c9cf3e8ad6?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b88e139ebc28b432a44cfe05dd28244891f53eb695930bf81b69fa27b1b26c54?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Dedicated teams & resources",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c39c7f6712d29bdfdc2feb771e00cbfaede2c2767bbbb6451b5dfced5c145c4?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Support & Maintenance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const systems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c13787f75f4228376fbae209b7eab5f7da66f8f2ea6022f9fdfbc7559a140d0?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "CRM",
      description: "Hubsot",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdcd106a479fda0f1f2038a5d55ead9de3b0f5a87c27eb9c594484095f0b922f?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "ERP",
      description: "SAP - Visma",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a5f8b6bee2919a611ae867f05b5b765daea89d870a3a0d5d24a6e092407b011?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Mobile",
      description: "iOS - Android - Firebase",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/695f6c88f20d2587b180e312545ec80c39b13670a575a21ec1147f1ca5b38686?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Payments",
      description: "Klarna - Stripe - Ayden",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43723cdd3d8c01c275714dc67e8422a2f6087c0b910dca4d74efe869e2ee8e8d?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Accounting",
      description: "Fortnox",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e16b5954450be95644bd08a8363454b713ccb53df149a0c074707743f28ad255?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Productivity",
      description: "Office 365 - Google Apps",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de5bdd80bb476076ca38dac7ad60ee8e400fec82d20a26fc7b0d4de3aa4a9ef4?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Business Intellegience",
      description: "Power BI - Qlik",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2132ddcd19b800d793439b93559719845dd8560c928ac8aab7ba03494d7431f0?apiKey=d22700435c194df19375f24bbe85f4c5&",
      title: "Ecommerce",
      description: "Power BI - Qlik",
    },
  ];

  const halfIndex = Math.ceil(systems.length / 2);
  const firstHalf = systems.slice(0, halfIndex);
  const secondHalf = systems.slice(halfIndex);

  return (
    <div className="overflow-hidden justify-center px-20 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-0 max-md:flex-wrap max-md:mt-8">
            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
              <h2 className="text-lg font-bold leading-8 text-neutral-100 max-md:max-w-full">
                Service Offering
              </h2>
              <div className="flex gap-5 justify-between px-px mt-10 max-md:flex-wrap">
                <div className="flex flex-col items-center self-start max-md:hidden">
                  {services.map((service, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      src={service.icon}
                      alt=""
                      className={`w-8 aspect-square ${
                        index > 0 ? "mt-20 max-md:mt-10" : ""
                      }`}
                    />
                  ))}
                </div>
                <div className="flex flex-col text-2xl font-bold leading-7 text-neutral-50 max-md:max-w-full">
                  {services.map((service, index) => (
                    <React.Fragment key={index}>
                      <h3 className="max-md:max-w-full">{service.title}</h3>
                      <p className="mt-2 text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        {service.description}
                      </p>
                      {index < services.length - 1 && (
                        <div className="mt-6 max-md:max-w-full" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-0.5 bg-zinc-800 h-[800px]" />
        </div>

        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-lg font-bold leading-8 text-neutral-100 max-md:max-w-full">
              System{" "}
            </h2>
            <div className="mt-10 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-7">
                    {firstHalf.map((system, index) => (
                      <React.Fragment key={index}>
                        <SystemItem {...system} />
                        {index < firstHalf.length - 1 && (
                          <div className="mt-6" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-7">
                    {secondHalf.map((system, index) => (
                      <React.Fragment key={index}>
                        <SystemItem {...system} />
                        {index < secondHalf.length - 1 && (
                          <div className="mt-6" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffering;
