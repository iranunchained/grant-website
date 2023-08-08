import clsx from "clsx";
import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", children, rows = 4, isInvalid, ...args }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "block w-full text-sm rounded-2xl focus:ring focus:ring-opacity-50 bg-white dark:focus:ring-opacity-25 dark:bg-neutral-900",
          isInvalid
            ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-700"
            : "focus:border-primary-300 focus:ring-primary-200 dark:focus:ring-primary-6000  border-neutral-200 dark:border-neutral-700",
          className,
        )}
        rows={rows}
        {...args}
      >
        {children}
      </textarea>
    );
  },
);

export default Textarea;

Textarea.displayName = "TextArea";
