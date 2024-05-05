"use client";

import { createContext, useState } from "react";

export const NavbarContext = createContext<{
  isActiveNavbar: boolean;
  handleToggleActiveNavbar: () => void;
  isOpenNavbarMenu: boolean;
  handleToggleNavbarMenu: () => void;
  setOpenNavbarMenu: (value: boolean) => void;
  setIsActiveNavbar: (value: boolean) => void;
} | null>(null);

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActiveNavbar, setIsActiveNavbar] = useState<boolean>(false);
  const [isOpenNavbarMenu, setOpenNavbarMenu] = useState<boolean>(false);

  const handleToggleActiveNavbar = () => {
    setIsActiveNavbar((current) => !current);
  };

  const handleToggleNavbarMenu = () => {
    setOpenNavbarMenu((currentState) => !currentState);
  };

  return (
    <NavbarContext.Provider
      value={{
        isActiveNavbar,
        handleToggleActiveNavbar,
        isOpenNavbarMenu,
        handleToggleNavbarMenu,
        setOpenNavbarMenu,
        setIsActiveNavbar,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
