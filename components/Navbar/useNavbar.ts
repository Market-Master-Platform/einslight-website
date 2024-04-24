import { useState } from "react";

export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
  onClick?: () => void;
}

const useNavbar = () => {
  const [isOpenServiceOffering, setOpenServiceOffering] =
    useState<boolean>(false);
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);

  const handleToggleServiceOffering = () => {
    setOpenServiceOffering((currentState) => !currentState);
  };

  const handleToggleNavbarMenu = () => {
    setOpenNavbarMenu((currentState) => !currentState);
    setOpenServiceOffering(false);
  };

  const navItems: NavItemValues[] = [
    {
      text: "Our offering",
      hasSubItems: true,
      onClick: handleToggleServiceOffering,
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
    isOpenServiceOffering,
    isOpenNavbarMenu,
    handleToggleNavbarMenu,
    handleToggleServiceOffering,
  };
};

export default useNavbar;
