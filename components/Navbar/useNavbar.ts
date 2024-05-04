"use client";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/context/dictionary-provider";
import { useState, useEffect, use } from "react";

export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
  onClick?: () => void;
  forLang?: boolean;
}

const useNavbar = () => {
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);
  // const [currentLang, setCurrentLang] = useState<string | null>("");
  const [langPathname, setLangPathname] = useState<string>("");
  const pathname: string = usePathname();

  useEffect(() => {
    // const lang: string | null = localStorage.getItem("lang");
    // setCurrentLang(lang);
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
      href: `/en/blogs`,
    },
    {
      text: dictionary.navbar.contact,
      href: `/en/message`,
    },
    {
      text: "EN/VI",
      href: langPathname,
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
