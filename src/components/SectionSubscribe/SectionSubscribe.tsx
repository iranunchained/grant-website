import { Badge, ButtonCircle, Input, NcImage } from "components";

import { ArrowSmRightIcon } from "@heroicons/react/outline";
import React from "react";
import rightImg from "assets/images/SVG-subcribe2.png";

export interface SectionSubscribeProps {
  className?: string;
}

const SectionSubscribe: React.FC<SectionSubscribeProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="text-4xl font-semibold">Never miss a drop!</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Subcribe to our super-exclusive drop list and be the first to know abour upcoming drops
        </span>
        <ul className="mt-10 space-y-4">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
          </li>
        </ul>
        <form className="relative max-w-sm mt-10">
          <Input
            aria-required
            required
            placeholder="Enter your email"
            rounded="rounded-full"
            type="email"
          />
          <ButtonCircle
            className="absolute transform -translate-y-1/2 top-1/2 right-1"
            type="submit"
          >
            <ArrowSmRightIcon className="w-6 h-6" />
          </ButtonCircle>
        </form>
      </div>
      <div className="grow">
        <NcImage {...rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe;
