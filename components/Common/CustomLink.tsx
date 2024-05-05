"use client";

import { NavbarContext } from "@/context/navbar-provider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, SyntheticEvent, useContext } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, children, className }) => {
  const context = useContext(NavbarContext);
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleNavbarWhenNavigate = (e: SyntheticEvent) => {
    e.preventDefault();
    const currentLang = pathname.split("/")[1];
    router.push(`/${currentLang}${href}`);

    if (context) {
      context.setOpenNavbarMenu(false);
      context.setIsActiveNavbar(false);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleToggleNavbarWhenNavigate}
      className={className}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
