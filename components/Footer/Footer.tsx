"use client";

import * as React from "react";
import CustomImage from "../Common/CustomImage";
import { useDictionary } from "@/context/dictionary-provider";
import CustomLink from "../Common/CustomLink";
interface LinkItemProps {
  children: React.ReactNode;
  href: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ children, href }) => {
  return (
    <CustomLink href={href} className="mt-6 md:mt-7">
      {children}
    </CustomLink>
  );
};

interface FooterLinkSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold leading-7 text-white">{title}</div>
      {children}
    </div>
  );
};

function Footer() {
  const pathname = usePathname();
  const dictionary = useDictionary();

  const companyLinks = [
    { label: dictionary.common.our_offering, href: "/" },
    { label: dictionary.footer.cases, href: "/" },
    { label: dictionary.common.contact_us, href: "/message" },
  ];

  const resourceLinks = [
    { label: dictionary.footer.blogs, href: "/blogs" },
    { label: dictionary.footer.privacy_and_policy, href: "/" },
    { label: dictionary.footer.terms_condition, href: "/" },
    { label: dictionary.footer.cookies_settings, href: "/" },
  ];

  return (
    <div className="flex flex-col items-center p-20 bg-zinc-900 max-md:px-5">
      <div className="flex gap-5 mt-6 w-full font-semibold max-w-[1247px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl leading-10 text-white">
          {dictionary.footer.how_can_we_help}
        </div>
        <CustomLink
          href="/message"
          className="justify-center items-center px-16 py-6 text-xl leading-6 text-center text-white bg-blue-500 max-md:px-5"
        >
          {dictionary.footer.send_message}
        </CustomLink>
      </div>
      <div className="shrink-0 mt-20 max-w-full h-0.5 bg-neutral-800 w-[1247px] max-md:mt-10" />
      <div className="flex gap-5 max-md:gap-20 justify-between mt-32 w-full font-medium text-gray-400 max-w-[1247px] max-md:flex-col max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mt-1.5 max-md:max-w-full">
          <CustomImage
            src="/static/images/company-logo.svg"
            alt="Company logo"
            className="max-w-full aspect-[4] w-[130px]"
          />
          <div className="mt-6 text-xl leading-9 max-md:max-w-full">
            (+84)-918408539
            <br />
            einslight.co@gmail.com
            <br />
            Số 1 lô 8A Lê Hồng Phong, Ngô Quyền, Hải Phòng
          </div>
          <div className="mt-48 text-lg leading-5 max-md:mt-10 max-md:max-w-full">
            © 2023 Copyright Einslight.
          </div>
        </div>
        <div className="flex max-md max-md:flex-col gap-5 max-md:gap-10 justify-between self-start text-xl leading-6">
          <FooterLinkSection title={dictionary.footer.company}>
            {companyLinks.map((link, index) => (
              <LinkItem href={link?.href} key={index}>
                {link.label}
              </LinkItem>
            ))}
          </FooterLinkSection>
          <FooterLinkSection title={dictionary.footer.resources}>
            {resourceLinks.map((link, index) => (
              <LinkItem href={link?.href} key={index}>
                {link.label}
              </LinkItem>
            ))}
          </FooterLinkSection>
        </div>
      </div>
    </div>
  );
}

export default Footer;
