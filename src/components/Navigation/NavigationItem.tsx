import { NavLink } from "components";
import React from "react";

export interface NavItemType {
  id: string;
  name: string;
  href: string;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

type NavigationItemWithRouterProps = NavigationItemProps;

const NavigationItem: React.FC<NavigationItemWithRouterProps> = ({ menuItem }) => {
  return (
    <li className="menu-item">
      <NavLink
        activeClassName="font-medium text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
        className="inline-flex items-center px-4 py-2 text-sm font-normal rounded-full xl:text-base xl:px-5 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 text-neutral-700 dark:text-neutral-300"
        href={menuItem.href}
      >
        {menuItem.name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
