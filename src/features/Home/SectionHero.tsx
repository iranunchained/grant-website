import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import rightImg from "assets/images/HomeImage.png";

export interface SectionHeroProps {
  className?: string;
  heading?: React.ReactNode;
  subHeading?: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
  className = "",
  heading = "Support, Help, and Fund Grants for Iranians",
  subHeading = "Send ETH to the grant areas you want to support and IranUnchained will verify the recipients and distribute funds.",
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
      <div className="relative flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 lg:items-center">
        <div className="w-screen max-w-full space-y-5 xl:max-w-xl lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block max-w-lg text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          <div className="flex space-x-4 pt-7">
            <ButtonPrimary href="#featured-grants" scroll={false}>
              <span className="">Explore</span>
              <SearchIcon className="w-5 h-5 ml-2.5" />
            </ButtonPrimary>
            <ButtonSecondary href="/grants/create">
              <span>Create</span>
              <svg className="w-5 h-5 ml-2.5" fill="none" viewBox="0 0 24 24">
                <path
                  d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 22H21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonSecondary>
          </div>
        </div>
        <div className="grow">
          <Image alt="" className="w-full" src={rightImg} />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
