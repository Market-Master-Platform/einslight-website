"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Fragment, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
