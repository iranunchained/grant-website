import ButtonPrimary from "components/Button/ButtonPrimary";
import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import rightImg from "assets/images/HomeImage.png";

export interface SectionHeroProps {
  className?: string;
  heading?: React.ReactNode;
  subHeading?: JSX.Element | string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
  className = "",
  heading = "Support (v2), Help, and Fund Grants for Iranians",
  subHeading = "Explore our newly launched IranUnchained v2 grant platform to support Iranians ",
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
      <div className="relative flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 lg:items-center">
        <div className="w-screen max-w-full space-y-5 xl:max-w-xl lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          {typeof subHeading === "string" ? (
            <span className="block max-w-lg text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
              {subHeading}
            </span>
          ) : (
            subHeading
          )}
          <div className="flex space-x-4 pt-7">
            <ButtonPrimary targetBlank href={process.env.NEXT_PUBLIC_V2_URL}>
              <span className="">Explore v2</span>
              <SearchIcon className="w-5 h-5 ml-2.5" />
            </ButtonPrimary>
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
