import PlaceIcon from "components/NcImage/PlaceIcon";
import React from "react";

const GrantCardLoader: React.FC = () => (
  <div
    className="relative flex flex-col overflow-hidden transition-shadow bg-white animate-pulse rounded-3xl dark:bg-neutral-900"
    role="status"
  >
    <div className="flex items-center justify-center mb-4  aspect-w-11 aspect-h-12 rounded-3xl [&>svg]:p-14 bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500">
      <PlaceIcon />
    </div>
    <div className="p-4 py-5">
      <div className="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-700 w-48 mb-4" />
      <div className="h-2 bg-neutral-300 rounded-full dark:bg-neutral-700 mb-2.5" />
      <div className="h-2 bg-neutral-300 rounded-full dark:bg-neutral-700 mb-2.5" />
      <div className="h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
      <div className="w-full mt-10 border-b border-neutral-100 dark:border-neutral-700" />
      <div className="flex justify-between mt-4">
        <div className="h-10 bg-white border-2 rounded-lg w-28 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" />
        <div className="h-2.5 w-24 mt-auto bg-neutral-300 rounded-full dark:bg-neutral-700" />
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

export default GrantCardLoader;
