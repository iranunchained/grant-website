import React, { ButtonHTMLAttributes } from "react";

import Link from "next/link";
import { twFocusClass } from "utils";

export interface ButtonProps {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  targetBlank?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  scroll?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = "text-neutral-700 dark:text-neutral-200",
  translate = "",
  sizeClass = "px-4 py-3 sm:px-6",
  fontSize = "text-sm sm:text-base font-medium",
  disabled = false,
  href,
  children,
  targetBlank,
  type,
  loading,
  onClick = () => {},
  scroll = true,
}) => {
  const CLASSES =
    `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className} ` +
    twFocusClass(true);

  const _renderLoading = () => {
    return (
      <svg
        className="w-5 h-5 mr-3 -ml-1 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </svg>
    );
  };

  if (!!href) {
    return (
      <Link
        className={`${CLASSES} `}
        href={href}
        rel="noopener noreferrer"
        scroll={scroll}
        target={targetBlank ? "_blank" : undefined}
        onClick={onClick}
      >
        {children || `This is Link`}
      </Link>
    );
  }

  return (
    <button className={`${CLASSES}`} disabled={disabled || loading} type={type} onClick={onClick}>
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
