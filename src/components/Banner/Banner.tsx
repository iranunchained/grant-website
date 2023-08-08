import React, { useState } from "react";

import ButtonClose from "components/ButtonClose/ButtonClose";
import { InformationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";

interface IBannerProps {
  children: React.ReactNode;
  isClosable?: boolean;
  wrapperClasses?: string;
}

const Banner: React.FC<IBannerProps> = ({
  isClosable,
  wrapperClasses = "px-6 pt-3 pb-4",
  children,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-neutral-100/80 dark:bg-black/20">
      <div className={clsx("relative flex items-center text-paragraph-base", wrapperClasses)}>
        <InformationCircleIcon className="absolute w-5 h-5 top-3.5" />
        <p className="px-8">{children}</p>
        {isClosable && (
          <ButtonClose className="absolute right-0 top-2" onClick={() => setVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default Banner;
