import React, { useState } from "react";

import { Switch as HeadlessUISwitch } from "@headlessui/react";
import { Label } from "components";

export interface SwitchProps {
  enabled?: boolean;
  label?: string;
  desc?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  enabled = false,
  label = "Put on sale",
  desc = "You’ll receive bids on this item",
  className = "",
}) => {
  const [enabledState, setEnabledState] = useState(enabled);

  return (
    <div className={`Switch flex fle justify-between items-center space-x-2 ${className}`}>
      <div>
        <Label>{label}</Label>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{desc}</p>
      </div>
      <HeadlessUISwitch
        checked={enabledState}
        className={`${enabledState ? "bg-teal-700" : "bg-neutral-400 dark:bg-neutral-6000"}
          relative inline-flex flex-shrink-0 h-8 w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        onChange={setEnabledState}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={`${enabledState ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-7 w-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </HeadlessUISwitch>
    </div>
  );
};

export default Switch;
