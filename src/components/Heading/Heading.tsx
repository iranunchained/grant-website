import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  name: ReactNode;
  isCenter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  name,
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div className={isCenter ? "text-center w-full max-w-2xl mx-auto mb-4" : "max-w-2xl"}>
        <h2 className={`text-3xl md:text-4xl font-semibold`} {...args}>
          {name}
        </h2>
        <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
          {children}
        </span>
      </div>
    </div>
  );
};

export default Heading;
