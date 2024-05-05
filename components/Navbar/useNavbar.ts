"use client";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/context/dictionary-provider";
import { useState, useEffect } from "react";
import { NavbarContext } from "@/context/navbar-provider";
import { useContext } from "react";

export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
  onClick?: () => void;
  forLang?: boolean;
}

const useNavbar = () => {
  const context = useContext(NavbarContext);
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<string | null>("");
  const [langPathname, setLangPathname] = useState<string>("");
  const pathname: string = usePathname();

  useEffect(() => {
    const lang: string | null = localStorage.getItem("lang");
    setCurrentLang(lang);
    let splittedPathname: string[] = pathname.split("/");
    if (splittedPathname[1] === "en") {
      splittedPathname[1] = "vi";
      setLangPathname(splittedPathname.join("/"));
    } else {
      splittedPathname[1] = "en";
      setLangPathname(splittedPathname.join("/"));
    }
  }, []);

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
      href: `/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/message`,
    },
    {
      text: "EN/VI",
      forLang: true,
      onClick: () => {
        if (currentLang === "en") {
          localStorage.setItem("lang", "vi");
        } else {
          localStorage.setItem("lang", "en");
        }
        console.log("currentLang: ", currentLang);
      },
      href: langPathname,
    },
  ];

  return {
    navItems,
    context,
  };
};

export default useNavbar;
