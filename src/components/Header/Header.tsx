import MainNav from "./MainNav";
import React from "react";
import { clsx } from "clsx";
import { useWindowScroll } from "hooks/useWindowScroll";

const clsess = {
  base: "sticky top-0 z-40 w-full bg-white nc-Header2 dark:bg-neutral-900 transition-shadow",
  scrolled: "shadow-md dark:shadow-2xl",
};

const Header: React.FC = () => {
  const { scrollY } = useWindowScroll();
  const isScrolled = scrollY > 0;

  return (
    <div className={clsx(clsess.base, isScrolled && clsess.scrolled)}>
      <MainNav />
    </div>
  );
};

export default Header;
