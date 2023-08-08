import Link from "next/link";
import { NcImage } from "components";
import React from "react";
import { TGrant } from "types";
import clsx from "clsx";

export interface GrantCardProps {
  className?: string;
  grant: TGrant;
}

const GrantCard: React.FC<GrantCardProps> = ({ className = "", grant }) => {
  const { id, title, description, image, currentRound } = grant;

  const tags = currentRound?.tags ?? [];

  return (
    <div
      className={clsx(
        `relative flex flex-col group h-full !border-0 [ nc-box-has-hover nc-dark-box-bg-has-hover ]`,
        className,
      )}
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
            src={image}
          />
        </div>
        <div className="absolute flex top-3 inset-x-3" />
      </div>

      <div className="h-full flex flex-col items-start p-4 py-5">
        <h2 className={`text-lg font-medium`}>{title}</h2>

        {tags.length !== 0 && (
          <div className="w-full flex items-center mt-1">
            {tags.map((t, i) => (
              <div
                key={i}
                className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-100 dark:bg-green-900 text-green-500 rounded-full mr-1"
              >
                {t}
              </div>
            ))}
          </div>
        )}

        <p className="my-3 w-full text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3">
          {description}
        </p>

        <div className="w-full border-b border-neutral-100 dark:border-neutral-700 mt-auto mb-3" />

        <div className="w-full flex items-end justify-between">
          {currentRound && (
            <div className="pt-3">
              <div className="flex items-baseline border-2 border-green-500 rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold">
                <span className="block absolute font-normal bottom-full translate-y-2 p-1 -mx-1 text-xs text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 dark:group-hover:bg-neutral-800 group-hover:bg-neutral-50">
                  Raised
                </span>
                <span className="text-green-500 !leading-none">
                  {currentRound?.raised?.formatted}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Link
        className="absolute inset-0"
        href={`/grants/${id}/details`}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default GrantCard;
