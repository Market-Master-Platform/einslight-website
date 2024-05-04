import { useDictionary } from "@/context/dictionary-provider";
import { NavbarContext } from "@/context/navbar-provider";
import { useContext } from "react";

export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
  onClick?: () => void;
}

const useNavbar = () => {
  const context = useContext(NavbarContext);

  const dictionary = useDictionary();

  const navItems: NavItemValues[] = [
    {
      text: dictionary.common.our_offering,
      hasSubItems: true,
    },
    {
      text: dictionary.footer.blogs,
      href: `/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/message`,
    },
  ];

  return {
    navItems,
    context,
  };
};

export default useNavbar;
