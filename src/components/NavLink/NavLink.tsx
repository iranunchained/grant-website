import Link, { LinkProps } from "next/link";

import React from "react";
import { clsx } from "clsx";
import { useRouter } from "next/router";

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

  return (
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
