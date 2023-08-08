import { InputHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      sizeClass = "h-11 px-4 py-3",
      fontClass = "text-sm font-normal",
      rounded = "rounded-2xl",
      type = "text",
      isInvalid,
      ...args
    },
    ref,
  ) => (
    <input
      ref={ref}
      className={clsx(
        "block w-full  focus:ring focus:ring-opacity-50 bg-white dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-100 dark:disabled:bg-neutral-800",
        isInvalid
          ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-700"
          : "focus:border-primary-300 focus:ring-primary-200 dark:focus:ring-primary-6000 dark:border-neutral-700 border-neutral-200",
        rounded,
        fontClass,
        sizeClass,
        className,
      )}
      type={type}
      {...args}
    />
  ),
);

export default Input;

Input.displayName = "Input";
