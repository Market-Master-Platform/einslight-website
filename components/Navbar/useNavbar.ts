import { useState } from "react";

export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
  onClick?: () => void;
}

const useNavbar = () => {
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);

  const handleToggleNavbarMenu = () => {
    setOpenNavbarMenu((currentState) => !currentState);
  };

  const navItems: NavItemValues[] = [
    {
      text: "Our offering",
      hasSubItems: true,
    },
    {
      text: "Customer cases",
      href: `en/case-study`,
    },
    {
      text: "Contact",
      href: `en/contact-us`,
    },
  ];

  return {
    navItems,
    isOpenNavbarMenu,
    handleToggleNavbarMenu,
    setOpenNavbarMenu,
  };
};

export default useNavbar;
