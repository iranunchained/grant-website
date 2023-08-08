import NavigationItem, { NavItemType } from "./NavigationItem";

import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DATA: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "https://forum.iranunchained.com",
    name: "Forum",
  },
  {
    id: ncNanoId(),
    href: "/#featured-grants",
    name: "Grants",
  },
  {
    id: ncNanoId(),
    href: "/grants/create",
    name: "Create",
  },
];

const Navigation: React.FC = () => (
  <ul className="relative hidden nc-Navigation lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
    {NAVIGATION_DATA.map((item) => (
      <NavigationItem key={item.id} menuItem={item} />
    ))}
  </ul>
);

export default Navigation;
