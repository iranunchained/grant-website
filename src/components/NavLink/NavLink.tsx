import Link, { LinkProps } from "next/link";

import React from "react";
import { clsx } from "clsx";
import { useRouter } from "next/router";

/** Checks whether URL is internal or external */
export const isInternalURL = (to: string): boolean => {
  try {
    const url = new URL(to, window.location.origin);

    return url.hostname === window.location.hostname;
  } catch {
    return false;
  }
};

interface INavLinkProps extends LinkProps, React.PropsWithChildren {
  href: string;
  activeClassName?: string;
  className?: string;
}

const NavLink: React.FC<INavLinkProps> = ({
  children,
  href,
  className: passedClasses = "",
  activeClassName = "",
  ...restProps
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  const isExternalUrl = !isInternalURL(href);

  return isExternalUrl ? (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...restProps}
      className={clsx(passedClasses)}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      {...restProps}
      className={clsx({ [passedClasses]: true, [activeClassName]: isActive })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
