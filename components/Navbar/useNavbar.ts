"use client";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/context/dictionary-provider";
import { useState, useEffect } from "react";
import { NavbarContext } from "@/context/navbar-provider";
import { useContext } from "react";

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
  const context = useContext(NavbarContext);
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<string>("vi");

  const handleSetLang = () => {
    const lang = currentLang === "en" ? "vi" : "en";
    setCurrentLang(lang);
    let splittedPathname: string[] = pathname!.split("/");
    splittedPathname[1] = lang;
    window.history.replaceState(null, '', splittedPathname.join("/"));
  };

  const dictionary = useDictionary();

  const navItems: NavItemValues[] = [
    {
      text: dictionary.common.our_offering,
      type: NAVITEMS_TYPES.SERVICEOFFERING,
    },
    {
      text: dictionary.footer.blogs,
      href: `/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/message`,
    },
    {
      lang: currentLang,
      type: NAVITEMS_TYPES.LANGUAGE,
      onClick: handleSetLang,
      href: '',
    },
  ];

  useEffect(() => {
    if (!pathname) return;

    let splittedPathname: string[] = pathname.split("/");

    let lang = 'vi';

    switch (splittedPathname[1]) {
      case 'en':
        lang = 'en';
        break;
      case 'vi':
        lang = 'vi';
        break;
    }

    setCurrentLang(lang);
    splittedPathname[1] = lang;
    window.history.replaceState(null, '', splittedPathname.join("/"));
  }, [pathname]);

  return {
    navItems,
    context,
    currentLang,
  };
};

export default useNavbar;
