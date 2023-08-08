import Label from "components/Label/Label";
import React from "react";

export interface FormItemProps extends React.PropsWithChildren {
  className?: string;
  label?: string;
  desc?: React.ReactNode | string;
  error?: string;
}

const FormItem: React.FC<FormItemProps> = ({ children, className = "", label, desc, error }) => (
  <div className={className}>
    {label && <Label>{label}</Label>}
    <div>{children}</div>
    {error && (
      <span className="flex items-center mt-3 ml-1 text-xs font-medium tracking-wide text-red-500">
        {error}
      </span>
    )}
    {desc && (
      <div className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">{desc}</div>
    )}
  </div>
);

export default FormItem;
