import ButtonClose from "components/ButtonClose/ButtonClose";
import { Disclosure } from "@headlessui/react";
import Logo from "components/Logo/Logo";
import { NAVIGATION_DATA } from "./Navigation";
import { NavItemType } from "./NavigationItem";
import { NavLink } from "components";
import React from "react";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ data = NAVIGATION_DATA, onClickClose }) => {
  const _renderItem = (item: NavItemType) => {
    return (
      <Disclosure key={item.id} as="li" className="text-neutral-900 dark:text-white">
        <NavLink
          activeClassName="font-medium text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300"
          href={item.href}
          onClick={onClickClose}
        >
          <span>{item.name}</span>
        </NavLink>
      </Disclosure>
    );
  };

  return (
    <div className="w-full h-screen max-w-sm py-2 overflow-y-auto transition transform bg-white divide-y-2 shadow-lg ring-1 dark:ring-neutral-700 dark:bg-neutral-900 divide-neutral-100 dark:divide-neutral-800">
      <div className="px-5 py-6">
        <Logo />
        <div className="flex flex-col mt-5 text-sm text-neutral-700 dark:text-neutral-300">
          <span>
            Send ETH to the grant areas you want to support and IranUnchained will verify the
            recipients and distribute funds.
          </span>

          <div className="flex items-center justify-between mt-4">
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute p-1 right-2 top-2">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col px-5 py-6 space-y-3">{data.map(_renderItem)}</ul>
      <div className="flex items-center px-5 py-6" />
    </div>
  );
};

export default NavMobile;
