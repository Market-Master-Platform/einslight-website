"use client";

import { useDictionary } from "@/context/dictionary-provider";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function CookiePopup() {
  const dictionary = useDictionary();

  const [allowCookies, setAllowCookies] = useState(true);

  return (
    <Fragment>
      {allowCookies ? null : (
        <div className="flex fixed bottom-0 bg-[#E0DBCC] w-full lg:px-40 lg:justify-between md:gap-10 py-6 md:pl-10 md:pr-4 max-md:flex-wrap max-md:px-6 max-md:gap-4 z-[50]">
          <div className="text-wrap flex justify-center items-center">
            <p className="text-[0.9rem] text-black">
              {dictionary.common.this_site_uses_cookies}{" "}
              <Link className="text-[#c36]" href="">
                {dictionary.common.learn_more}
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-2 min-w-[200px] max-h-[40px] h-full self-center">
            <button
              onClick={() => setAllowCookies(false)}
              className="border border-[#F2CB7D] bg-[#F2CB7D] text-black p-2 rounded-full h-full text-[0.8rem]"
            >
              {dictionary.common.allow_cookies}
            </button>

            <button
              onClick={() => setAllowCookies(false)}
              className="border border-[#000] text-black p-2 rounded-full h-full text-[0.8rem]"
            >
              {dictionary.common.decline}
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
