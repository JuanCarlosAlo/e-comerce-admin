import {
  faBox,
  faCubesStacked,
  faGear,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

export const navbarLinks = [
  {
    _id: v4(),
    name: "Dashboard",
    href: "/",
    icon: faHouse,
    activeSegment: null
    },
  {
    _id: v4(),
    name: "Products",
    href: "/products",
    icon: faBox,
    activeSegment: 'products'
  },
  {
    _id: v4(),
    name: "Categories",
    href: "/categories",
    icon: faList,
    activeSegment: 'categories'
  },
  {
    _id: v4(),
    name: "Orders",
    href: "/orders",
    icon: faCubesStacked,
    activeSegment: 'orders'
  },
  {
    _id: v4(),
    name: "Settings",
    href: "/settings",
    icon: faGear,
    activeSegment: 'settings'
  },
];
