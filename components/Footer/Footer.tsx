"use client";

import * as React from "react";
import CustomImage from "../CustomImage";
import { useDictionary } from "@/context/dictionary-provider";
import Link from "next/link";
interface LinkItemProps {
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ children }) => {
  return (
    <Link href="" className="mt-6 md:mt-7">
      {children}
    </Link>
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
  const dictionary = useDictionary();

  const companyLinks = [
    { label: dictionary.common.our_offering },
    { label: dictionary.footer.cases },
    { label: dictionary.common.contact_us },
  ];

  const resourceLinks = [
    { label: dictionary.footer.blogs },
    { label: dictionary.footer.privacy_and_policy },
    { label: dictionary.footer.terms_condition },
    { label: dictionary.footer.cookies_settings },
  ];

  return (
    <div className="flex flex-col items-center p-20 bg-zinc-900 max-md:px-5">
      <div className="flex gap-5 mt-6 w-full font-semibold max-w-[1247px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl leading-10 text-white">
          {dictionary.footer.how_can_we_help}
        </div>
        <div className="justify-center items-center px-16 py-6 text-xl leading-6 text-center text-white bg-blue-500 max-md:px-5">
          {dictionary.footer.send_message}
        </div>
      </div>
      <div className="shrink-0 mt-20 max-w-full h-0.5 bg-neutral-800 w-[1247px] max-md:mt-10" />
      <div className="flex gap-5 max-md:gap-20 justify-between mt-32 w-full font-medium text-gray-400 max-w-[1247px] max-md:flex-col max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mt-1.5 max-md:max-w-full">
          <CustomImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae82bef0966aec0efb920aec9555286b8a15cb0a70fb1bd73475499250dd4b9?apiKey=d22700435c194df19375f24bbe85f4c5&"
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
              <LinkItem key={index}>{link.label}</LinkItem>
            ))}
          </FooterLinkSection>
          <FooterLinkSection title={dictionary.footer.resources}>
            {resourceLinks.map((link, index) => (
              <LinkItem key={index}>{link.label}</LinkItem>
            ))}
          </FooterLinkSection>
        </div>
      </div>
    </div>
  );
}

export default Footer;
