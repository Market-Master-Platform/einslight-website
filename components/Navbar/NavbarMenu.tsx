import { FC } from "react";

interface NavbarMenuProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const NavbarMenu: FC<NavbarMenuProps> = ({ children, isActive, className }) => {
  return (
    <div
      className={`${className ? className : ""} duration-300 ease-in-out ${
        isActive ? "opacity-100 block" : "opacity-0 hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default NavbarMenu;
