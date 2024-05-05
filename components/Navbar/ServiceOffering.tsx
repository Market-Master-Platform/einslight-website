import { useDictionary } from "@/context/dictionary-provider";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import CustomLink from "../Common/CustomLink";

interface ServiceItemProps {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
}

interface ServiceOfferingProps {
  handleToggleServiceOffering?: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  imageSrc,
  title,
  description,
  href,
}) => (
  <div className="flex gap-6">
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="shrink-0 self-start w-8 aspect-square"
    />
    <div className="flex flex-col">
      <CustomLink
        href={href}
        className="max-md:text-lg text-2xl font-bold leading-7 text-neutral-50"
      >
        {title}
      </CustomLink>
      <div className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500">
        {description}
      </div>
    </div>
  </div>
);

const ServiceOffering: FC<ServiceOfferingProps> = ({
  handleToggleServiceOffering,
}) => {
  const dictionary = useDictionary();

  const serviceItems: ServiceItemProps[] = [
    {
      imageSrc: "/static/images/navbar/crm.svg",
      title: "CRM",
      description: "Hubsot",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/erp.svg",
      title: "ERP",
      description: "SAP - Visma",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/mobile.svg",
      title: "Mobile",
      description: "iOS - Android - Firebase",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/payments.svg",
      title: dictionary.navbar.payments,
      description: "Klarna - Stripe - Ayden",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/accounting.svg",
      title: dictionary.navbar.payments,
      description: "Fortnox",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/productivity.svg",
      title: dictionary.navbar.productivity,
      description: "Office 365 - Google Apps",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/bi.svg",
      title: dictionary.navbar.business_intellegience,
      description: "Power BI - Qlik",
      href: "/",
    },
    {
      imageSrc: "/static/images/navbar/ecommerce.svg",
      title: dictionary.navbar.ecommerce,
      description: "Power BI - Qlik",
      href: "/",
    },
  ];

  return (
    <div className="flex max-md:flex-col md:flex-wrap justify-center bg-neutral-800 h-full md:pt-20">
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
            <div>{dictionary.navbar.service_offering}</div>

            <section className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-6 justify-even px-px max-md:flex-wrap max-md:mt-8">
                <div className="flex flex-col items-start justify-center self-start gap-10">
                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="/static/images/navbar/system-implementation.svg"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <CustomLink href="/" className="max-md:max-w-full">
                        {dictionary.navbar.system_implementation}
                      </CustomLink>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        {dictionary.navbar.system_implementation_description}
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="/static/images/navbar/integration.svg"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <CustomLink href="/" className="max-md:max-w-full">
                        {dictionary.navbar.integration}
                      </CustomLink>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        {dictionary.navbar.integration_description}
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="/static/images/navbar/dedicated-teams-and-resources.svg"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <CustomLink href="/" className="max-md:max-w-full">
                        {dictionary.navbar.dedicated_teams_and_resources}
                      </CustomLink>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        {
                          dictionary.navbar
                            .dedicated_teams_and_resources_description
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex px-px max-md:text-lg text-2xl font-bold leading-7 text-neutral-50 gap-6">
                    <div className="h-full flex items-start">
                      <img
                        loading="lazy"
                        src="/static/images/navbar/support-and-maintenance.svg"
                        alt=""
                        className="w-8 aspect-square"
                      />
                    </div>
                    <div>
                      <CustomLink href="/" className="max-md:max-w-full">
                        {dictionary.navbar.support_and_maintenance}
                      </CustomLink>
                      <p className="mt-2 max-md:text-sm text-lg leading-6 text-zinc-500 max-md:max-w-full">
                        {dictionary.navbar.support_and_maintenance_description}
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
            <div>{dictionary.navbar.system}</div>

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
