"use client";

import * as React from "react";
import CustomImage from "../CustomImage";
import useNavbar from "./useNavbar";
import ServiceOffering from "./ServiceOffering";
import NavbarMenu from "./NavbarMenu";
import NavItem from "./NavItem";

interface HamburgerProps {
  isActive: boolean;
  toggle?: () => void;
}

const CustomHamburgerIcon: React.FC<HamburgerProps> = ({
  isActive,
  toggle,
}) => {
  return (
    <div className="space-y-2" onClick={toggle}>
      <span
        className={`block h-0.5 bg-white duration-300 ease-in-out origin-top-left ${
          isActive ? "rotate-45 w-[30px] translate-x-1" : "rotate-0 w-[30px]"
        }`}
      ></span>
      <span
        className={`block h-0.5 bg-white origin-center ${
          isActive ? "w-0" : "w-[30px]"
        }`}
      ></span>
      <span
        className={`block h-0.5  bg-white duration-300 ease-in-out origin-bottom-left ${
          isActive ? "-rotate-45 w-[30px] translate-x-1" : "rotate-0 w-[30px]"
        }`}
      ></span>
    </div>
  );
};

function Navbar() {
  const {
    navItems,
    isOpenServiceOffering,
    isOpenNavbarMenu,
    handleToggleNavbarMenu,
    handleToggleServiceOffering,
  } = useNavbar();

  return (
    <div>
      <header className="flex gap-5 justify-between px-20 py-3 text-lg font-bold leading-8 text-white bg-zinc-900 max-md:px-5">
        <CustomImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3a34b04234bd2d2c63fa344c333c34c2f7276ede0524675ad1d10cdd5a9899?apiKey=d22700435c194df19375f24bbe85f4c5&"
          alt="Company logo"
          className="shrink-0 max-w-full aspect-[4] w-[195px]"
        />

        {/* Navigation for mobile */}
        <div className="md:hidden flex justify-center items-center">
          <CustomHamburgerIcon
            isActive={isOpenNavbarMenu}
            toggle={handleToggleNavbarMenu}
          />
        </div>

        {/* Navigation for desktop */}
        <nav className="flex gap-10 justify-center my-auto max-md:hidden">
          {navItems.map((item, index) => (
            <NavItem
              href={item?.href}
              key={index}
              hasSubItems={item?.hasSubItems}
              onClick={() => item?.onClick && item?.onClick()}
              isOpenServiceOffering={isOpenServiceOffering}
            >
              {item.text}
            </NavItem>
          ))}
        </nav>
      </header>

      {/* Navigation menu for desktop */}
      <NavbarMenu
        isActive={isOpenServiceOffering}
        className="max-md:hidden absolute inset-x-0 overflow-auto max-h-[600px]"
      >
        <ServiceOffering />
      </NavbarMenu>

      {/* Navigation menu for mobile */}
      <NavbarMenu
        isActive={isOpenServiceOffering}
        className="md:hidden absolute inset-x-0 top-30 overflow-auto"
      >
        <ServiceOffering
          handleToggleServiceOffering={handleToggleServiceOffering}
        />
      </NavbarMenu>

      {/* Navigation for mobile */}
      <NavbarMenu
        isActive={isOpenNavbarMenu}
        className="md:hidden absolute inset-x-0 bg-neutral-800 overflow-auto max-h-[600px]"
      >
        <nav className="flex flex-col gap-10 pt-10 pb-6">
          {navItems.map((item, index) => (
            <NavItem
              href={item?.href}
              key={index}
              hasSubItems={item?.hasSubItems}
              onClick={() => item?.onClick && item?.onClick()}
              isOpenServiceOffering={isOpenServiceOffering}
            >
              {item.text}
            </NavItem>
          ))}
        </nav>
      </NavbarMenu>
    </div>
  );
}

export default Navbar;
