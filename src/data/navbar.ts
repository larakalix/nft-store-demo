import { BiHome, BiSearch } from "react-icons/bi";
import { NavItemProps } from "../models/NavItem";

export const NavbarItems: NavItemProps[] = [
    {
        label: "Home",
        route: "/",
        icon: BiHome,
    },
    {
        label: "Explore",
        route: "/explore",
        icon: BiSearch,
    },
];
