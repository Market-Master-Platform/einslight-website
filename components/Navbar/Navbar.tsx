"use-client";

import * as React from "react";
import CustomImage from "../CustomImage";
import useNavbar from "./useNavbar";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ServiceOffering from "./ServiceOffering";
import NavbarMenu from "./NavbarMenu";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hasSubItems?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, href, hasSubItems }) => (
  <div className="flex items-center justify-center py-2.5 leading-[178%] cursor-pointer">
    {hasSubItems ? (
      <div className="relative">
        <div>{children}</div>

        <div className="ml-2">
          <CustomImage src="/chevron-down.svg" alt="chevron-down-icon" />
        </div>
      </div>
    ) : (
      <Link href={href || ""}>{children}</Link>
    )}
  </div>
);

function Navbar() {
  const t = useTranslations("Navbar");
  const { navItems } = useNavbar();

  return (
    <div>
      <header className="flex gap-5 justify-between px-20 py-3 text-lg font-bold leading-8 text-white bg-zinc-900 max-md:flex-wrap max-md:px-5">
        <CustomImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3a34b04234bd2d2c63fa344c333c34c2f7276ede0524675ad1d10cdd5a9899?apiKey=d22700435c194df19375f24bbe85f4c5&"
          alt="Company logo"
          className="shrink-0 max-w-full aspect-[4] w-[195px]"
        />
        <nav className="flex gap-10 justify-center my-auto max-md:flex-wrap">
          {navItems.map((item, index) => (
            <NavItem
              href={item?.href}
              key={index}
              hasSubItems={item?.hasSubItems}
            >
              {t(item.text)}
            </NavItem>
          ))}
        </nav>
      </header>

      <NavbarMenu>
        <ServiceOffering />
      </NavbarMenu>
    </div>
  );
}

export default Navbar;
