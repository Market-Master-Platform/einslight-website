"use client";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [langPathname, setLangPathname] = useState<string>("");
  const [currentLang, setCurrentLang] = useState<string>("en");

  const handleSetLang = () => {
    if (currentLang === "en") {
      localStorage.setItem("lang", "vi");
      return;
    }

    localStorage.setItem("lang", "en");
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
      href: langPathname,
    },
  ];

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (!pathname) return;

    let splittedPathname: string[] = pathname.split("/");
    splittedPathname[1] = lang === "en" ? "vi" : "en";

    if (!lang) {
      setCurrentLang("en");
      router.push(splittedPathname.join("/"));
      localStorage.setItem("lang", "en");
      return;
    }

    setCurrentLang(lang);
    setLangPathname(splittedPathname.join("/"));
  }, [pathname]);

  return {
    navItems,
    context,
    currentLang,
    langPathname,
  };
};

export default useNavbar;
