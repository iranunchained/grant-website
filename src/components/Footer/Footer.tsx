import { ChatAlt2Icon, DocumentTextIcon, GlobeAltIcon, MailIcon } from "@heroicons/react/outline";

import { Logo } from "components";
import React from "react";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <div className="relative py-8 mt-auto text-center border-t lg:py-12 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col sm:flex-row justify-between items-center max-w-4xl">
        <a
          className="mx-2 p-2 text-sm flex items-center"
          href="https://iranunchained.com/charter.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <DocumentTextIcon className="h-5 w-5 mr-1" /> NGO Charter
        </a>

        <a
          className="mx-2 p-2 text-sm flex items-center"
          href="https://twitter.com/UnchainIran"
          rel="noreferrer"
          target="_blank"
        >
          <GlobeAltIcon className="h-5 w-5 mr-1" /> Twitter
        </a>
        <a
          className="mx-2 p-2 text-sm flex items-center"
          href="https://instagram.com/iranunchained"
          rel="noreferrer"
          target="_blank"
        >
          <GlobeAltIcon className="h-5 w-5 mr-1" /> Instagram
        </a>
        <a className="mx-2 p-2 text-sm flex items-center" href="mailto:iranunchained@proton.me">
          <MailIcon className="h-5 w-5 mr-1" /> Email
        </a>
        <a
          className="mx-2 p-2 text-sm flex items-center"
          href="https://telegram.me/iranunchained"
          rel="noreferrer"
          target="_blank"
        >
          <ChatAlt2Icon className="h-5 w-5 mr-1" /> Telegram
        </a>
      </div>

      <div className="mt-6 mb-3">
        <Logo logoType />
      </div>

      <p className="text-sm leading-6 md:mt-5 text-neutral-500">
        © {currentYear} IranUnchained. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
