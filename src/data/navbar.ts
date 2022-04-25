import { BiHome, BiSearch } from "react-icons/bi";
import { NavItem } from "../models/NavItem";

export const NavbarItems: NavItem[] = [
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
