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

interface NavbarProps {
  handleToggleActiveNavbar: () => void;
  isActiveNavbar: boolean;
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

const Navbar: React.FC<NavbarProps> = ({
  handleToggleActiveNavbar,
  isActiveNavbar,
}) => {
  const {
    navItems,
    isOpenNavbarMenu,
    handleToggleNavbarMenu,
    setOpenNavbarMenu,
  } = useNavbar();

  const handleToggleServiceOffering = () => {
    handleToggleActiveNavbar();
    setOpenNavbarMenu(false);
  };

  return (
    <React.Fragment>
      <div className="fixed w-full top-0 z-[51]">
        <header className="flex gap-5 justify-between px-10 max-md:px-5 py-3 text-lg font-semibold leading-8 text-white bg-zinc-900">
          <CustomImage
            src="/static/images/company-logo.svg"
            alt="Company logo"
            className="shrink max-w-full aspect-[4] w-[195px] max-sm:w-[45%]"
          />

          {/* Navigation for mobile */}
          <div className="md:hidden flex justify-center items-center">
            <CustomHamburgerIcon
              isActive={isOpenNavbarMenu}
              toggle={handleToggleNavbarMenu}
            />
          </div>

          {/* Navigation for desktop */}
          <nav className="flex gap-10 justify-center my-auto max-md:hidden text-white">
            {navItems.map((item, index) => (
              <NavItem
                href={item?.href}
                key={index}
                hasSubItems={item?.hasSubItems}
                onClick={() =>
                  item?.hasSubItems && handleToggleServiceOffering()
                }
                isOpenServiceOffering={isActiveNavbar}
              >
                {item.text}
              </NavItem>
            ))}
          </nav>
        </header>

        {/* Navigation for mobile */}
        <NavbarMenu
          isActive={isOpenNavbarMenu}
          className="md:hidden bg-[#000] overflow-auto max-h-[600px] text-white"
        >
          <nav className="flex flex-col gap-10 pt-10 pb-6">
            {navItems.map((item, index) => (
              <NavItem
                href={item?.href}
                key={index}
                hasSubItems={item?.hasSubItems}
                onClick={() =>
                  item?.hasSubItems && handleToggleServiceOffering()
                }
                isOpenServiceOffering={isActiveNavbar}
              >
                {item.text}
              </NavItem>
            ))}
          </nav>
        </NavbarMenu>
      </div>
      <div className="pt-[68px] max-sm:pt-[50px]">
        {/* Navigation menu for mobile */}
        {isActiveNavbar ? (
          <NavbarMenu
            isActive={true}
            className="md:hidden overflow-auto text-white"
          >
            <ServiceOffering
              handleToggleServiceOffering={handleToggleServiceOffering}
            />
          </NavbarMenu>
        ) : null}

        {/* Navigation menu for desktop */}
        <NavbarMenu
          isActive={isActiveNavbar}
          className="max-md:hidden overflow-auto text-white"
        >
          <ServiceOffering />
        </NavbarMenu>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
