import Heading from "components/Heading/Heading";
import React from "react";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: React.FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading name="🚀 How IranUnchained Works">
        IranUnchained is a Wyoming-based unincorporated non-profit association, using a novel legal
        setup where membership in the NGO is directly represented by membership in a digital
        autonomous organization (DAO) on the Ethereum blockchain. All funds are raised in crypto and
        can only be distributed by a vote of the DAO members. For more info, please read our{" "}
        <b>
          <a href="https://medium.com/@iranunchained/iranunchained-operations-overview-7d21cc006cff">
            IranUnchained: Operations Overview
          </a>
        </b>
        .
      </Heading>
      {/* <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SectionStatistic;
