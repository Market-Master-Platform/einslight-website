"use client";

import { FC, Fragment, ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout: FC<NavbarLayoutProps> = ({ children }) => {
  const [isActiveNavbar, setIsActiveNavbar] = useState<boolean>(false);

  const handleToggleActiveNavbar = () => {
    setIsActiveNavbar((current) => !current);
  };

  return (
    <>
      <Navbar
        handleToggleActiveNavbar={handleToggleActiveNavbar}
        isActiveNavbar={isActiveNavbar}
      />

      {!isActiveNavbar && (
        <Fragment>
          {children}

          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default NavbarLayout;
