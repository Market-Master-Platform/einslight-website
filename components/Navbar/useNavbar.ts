import { useDictionary } from "@/context/dictionary-provider";
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

  const dictionary = useDictionary();

  const navItems: NavItemValues[] = [
    {
      text: dictionary.common.our_offering,
      hasSubItems: true,
    },
    {
      text: dictionary.footer.blogs,
      href: `/en/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/en/message`,
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
