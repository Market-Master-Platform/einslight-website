"use client";

import { FC, Fragment, ReactNode, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import { Locale } from "@/i18n.config";
import { NavbarContext } from "@/context/navbar-provider";

interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout: FC<NavbarLayoutProps> = ({ children }) => {
  const context = useContext(NavbarContext);

  return (
    <>
      <Navbar
        handleToggleActiveNavbar={() => context?.handleToggleActiveNavbar()}
        isActiveNavbar={context?.isActiveNavbar || false}
      />

      {!context?.isActiveNavbar && (
        <Fragment>
          {children}

          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default NavbarLayout;
