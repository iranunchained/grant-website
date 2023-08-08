import React from "react";

export interface LabelProps extends React.PropsWithChildren {
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className = "", children }) => {
  return (
    <label
      className={`nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ${className}`}
      data-nc-id="Label"
    >
      {children}
    </label>
  );
};

export default Label;
