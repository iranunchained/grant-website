import Link from "next/link";
import React from "react";
import { TwMainColor } from "types";
import clsx from "clsx";

export interface BadgeProps {
  className?: string;
  name: React.ReactNode;
  color?: TwMainColor;
  href?: string;
}

const Badge: React.FC<BadgeProps> = ({ className = "relative", name, color = "blue", href }) => {
  const getColorClass = (hasHover = true) => {
    switch (color) {
      case "pink":
        return clsx(`text-pink-800 bg-pink-100`, hasHover && "hover:bg-pink-800");
      case "red":
        return clsx(`text-red-800 bg-red-100`, hasHover && "hover:bg-red-800");
      case "gray":
        return clsx(`text-gray-800 bg-gray-100`, hasHover && "hover:bg-gray-800");
      case "green":
        return clsx(`text-green-800 bg-green-100`, hasHover && "hover:bg-green-800");
      case "purple":
        return clsx(`text-purple-800 bg-purple-100`, hasHover && "hover:bg-purple-800");
      case "indigo":
        return clsx(`text-indigo-800 bg-indigo-100`, hasHover && "hover:bg-indigo-800");
      case "yellow":
        return clsx(`text-yellow-800 bg-yellow-100`, hasHover && "hover:bg-yellow-800");
      case "blue":
        return clsx(`text-blue-800 bg-blue-100`, hasHover && "hover:bg-blue-800");
      default:
        return clsx(`text-pink-800 bg-pink-100`, hasHover && "hover:bg-pink-800");
    }
  };

  const classNames = clsx(
    "nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs",
    className,
  );

  return !!href ? (
    <Link
      className={clsx(
        `transition-colors hover:text-white duration-300`,
        classNames,
        getColorClass(),
      )}
      href={href || ""}
    >
      {name}
    </Link>
  ) : (
    <span className={clsx(classNames, getColorClass(false))}>{name}</span>
  );
};

export default Badge;
