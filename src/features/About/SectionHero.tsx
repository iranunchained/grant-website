import Image, { StaticImageData } from "next/image";

import { ButtonPrimary } from "components";
import React from "react";

export interface SectionHeroProps {
  className?: string;
  rightImg: StaticImageData;
  heading: React.ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
      <div className="relative flex flex-col items-center text-center lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 lg:text-left">
        <div className="w-screen max-w-full space-y-5 xl:max-w-lg lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
        <div className="grow">
          <Image alt="" className="w-full" src={rightImg} />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
