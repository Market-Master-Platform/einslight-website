"use client";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/context/dictionary-provider";
import { useEffect, useState } from "react";

export const NAVITEMS_TYPES = {
  SERVICEOFFERING: "SERVICEOFFERING",
  LANGUAGE: "LANGUAGE",
  DEFAULT: "DEFAULT",
};

export interface NavItemValues {
  text?: string;
  type?: string;
  href?: string;
  lang?: string;
  onClick?: () => void;
}

const useNavbar = () => {
  const pathname = usePathname();
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);
  const [langPathname, setLangPathname] = useState<string>("");
  const [currentLang, setCurrentLang] = useState<string>("en");

  const handleSetLang = () => {
    if (currentLang === "en") {
      localStorage.setItem("lang", "vi");
      return;
    }

    localStorage.setItem("lang", "en");
  };

  const handleToggleNavbarMenu = () => {
    setOpenNavbarMenu((currentState) => !currentState);
  };

  const dictionary = useDictionary();

  const navItems: NavItemValues[] = [
    {
      text: dictionary.common.our_offering,
      type: NAVITEMS_TYPES.SERVICEOFFERING,
    },
    {
      text: dictionary.footer.blogs,
      href: `/en/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/en/message`,
    },
    {
      lang: currentLang,
      type: NAVITEMS_TYPES.LANGUAGE,
      onClick: handleSetLang,
      href: langPathname,
    },
  ];

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (!lang) return;

    setCurrentLang(lang);
    let splittedPathname: string[] = pathname.split("/");
    splittedPathname[1] = lang === "en" ? "vi" : "en";

    setLangPathname(splittedPathname.join("/"));
  }, [pathname]);

  return {
    navItems,
    isOpenNavbarMenu,
    handleToggleNavbarMenu,
    setOpenNavbarMenu,
  };
};

export default useNavbar;
