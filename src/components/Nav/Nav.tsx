import React from "react";
import clsx from "clsx";

export interface NavProps extends React.PropsWithChildren {
  containerClassName?: string;
  className?: string;
}

const Nav: React.FC<NavProps> = ({ containerClassName = "", className = "", children }) => (
  <nav className={clsx("nc-Nav", containerClassName)} data-nc-id="Nav">
    <ul className={clsx("flex", className)}>{children}</ul>
  </nav>
);

export default Nav;
