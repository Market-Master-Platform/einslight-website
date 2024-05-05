"use client";
import Link from "next/link";
import CustomImage from "../Common/CustomImage";
import ServiceOffering from "./ServiceOffering";
import CustomLink from "../Common/CustomLink";
import { NAVITEMS_TYPES } from "./useNavbar";
import Flag from "react-flagkit";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  isOpenServiceOffering?: boolean;
  type?: string;
  lang?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  onClick,
  isOpenServiceOffering,
  type,
  lang,
}) => {
  const renderLanguageIcon = () => {
    if (lang === "en") {
      return <Flag country="US" />;
    }

    if (lang === "vi") {
      return <Flag country="VN" />;
    }
  };

  const renderByTypeForMobile = () => {
    if (type === NAVITEMS_TYPES.SERVICEOFFERING) {
      return (
        <div className="relative flex flex-col" onClick={onClick}>
          <div className="flex items-center">
            <div>{children}</div>

            <div className="ml-2">
              <CustomImage src="/chevron-down.svg" alt="chevron-down-icon" />
            </div>
          </div>
        </div>
      );
    }

    if (type === NAVITEMS_TYPES.LANGUAGE) {
      return (
        <Link href={href || ""}>
          <div onClick={onClick}>{children}</div>
        </Link>
      );
    }

    return <Link href={href || ""}>{children}</Link>;
  };

  const renderByTypeForDesktop = () => {
    if (type === NAVITEMS_TYPES.SERVICEOFFERING) {
      return (
        <div className="relative flex flex-col" onClick={onClick}>
          <div className="flex items-center">
            <div>{children}</div>

            <div className="ml-2">
              <CustomImage
                src="/chevron-down.svg"
                alt="chevron-down-icon"
                className={`duration-300 ${
                  isOpenServiceOffering ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>

          {isOpenServiceOffering && (
            <div className="md:hidden">
              <ServiceOffering />
            </div>
          )}
        </div>
      );
    }

    if (type === NAVITEMS_TYPES.LANGUAGE) {
      return (
        <Link href={href || ""}>
          <div onClick={onClick}>{renderLanguageIcon()}</div>
        </Link>
      );
    }

    return <Link href={href || ""}>{children}</Link>;
  };

  return (
    <div className="flex items-center max-md:justify-start max-md:px-6 max-md:text-2xl justify-center py-2.5 leading-[178%] cursor-pointer select-none">
      {/* For mobile */}
      <div className="max-md:block hidden">{renderByTypeForMobile()}</div>

      {/* For desktop */}
      <div className="max-md:hidden block">{renderByTypeForDesktop()}</div>
    </div>
  );
};

export default NavItem;
