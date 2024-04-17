import * as React from "react";
import CustomImage from "../CustomImage";
import ImageNavItem from "../ImageNavItem";
import useNavbar from "./useNavbar";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className }) => (
  <div className={`justify-center py-2.5 leading-[178%] ${className}`}>
    {children}
  </div>
);

function Navbar() {
  const { navItems } = useNavbar();

  return (
    <header className="flex gap-5 justify-center px-20 py-3 text-lg font-bold leading-8 text-white bg-zinc-900 max-md:flex-wrap max-md:px-5">
      <CustomImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3a34b04234bd2d2c63fa344c333c34c2f7276ede0524675ad1d10cdd5a9899?apiKey=d22700435c194df19375f24bbe85f4c5&"
        alt="Company logo"
        className="shrink-0 max-w-full aspect-[4] w-[195px]"
      />
      <nav className="flex gap-5 justify-center my-auto max-md:flex-wrap">
        {navItems.map((item, index) =>
          item.imageSrc ? (
            <ImageNavItem
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            >
              {item.text}
            </ImageNavItem>
          ) : (
            <NavItem key={index}>{item.text}</NavItem>
          )
        )}
      </nav>
    </header>
  );
}

export default Navbar;
