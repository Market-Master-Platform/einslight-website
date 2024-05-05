"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import CustomImage from "../CustomImage";
import ServiceOffering from "./ServiceOffering";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hasSubItems?: boolean;
  onClick?: () => void;
  isOpenServiceOffering?: boolean;
  forLang?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  hasSubItems,
  onClick,
  isOpenServiceOffering,
  forLang,
}) => {
  const [currentLang, setCurrentLang] = useState<string | null>("");

  useEffect(() => {
    const currentLanguage: string | null = localStorage.getItem("lang");
    setCurrentLang(currentLanguage);
  }, []);

  return (
    <div className="flex items-center max-md:justify-start max-md:px-6 max-md:text-2xl justify-center py-2.5 leading-[178%] cursor-pointer select-none">
      {/* For mobile */}
      <div className="max-md:block hidden">
        {hasSubItems ? (
          <div className="relative flex flex-col" onClick={onClick}>
            <div className="flex items-center">
              <div>{children}</div>

              <div className="ml-2">
                <CustomImage src="/chevron-down.svg" alt="chevron-down-icon" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {forLang ? (
              <Link href={href || ""}>
                <div onClick={onClick}>
                  {currentLang && currentLang === "en" ? <>ENG</> : <>VIE</>}
                </div>
              </Link>
            ) : (
              <Link href={href || ""}>{children}</Link>
            )}
          </>
        )}
      </div>

      {/* For desktop */}
      <div className="max-md:hidden block">
        {hasSubItems ? (
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
        ) : (
          <>
            {forLang ? (
              <Link href={href || ""}>
                <div onClick={onClick}>
                  {currentLang && currentLang === "en" ? <>ENG</> : <>VIE</>}
                </div>
              </Link>
            ) : (
              <Link href={href || ""}>{children}</Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NavItem;
