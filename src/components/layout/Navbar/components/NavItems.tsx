import { NavbarItems } from "../../../../data/navbar";
import { NavItemProps } from "../../../../models/NavItem";
import { NavItem } from "./NavItem";

export const NavItems = () => {
    return (
        <nav className="flex items-center space-x-4">
            {NavbarItems.map(({ label, ...props }: NavItemProps) => (
                <NavItem key={label} label={label} {...props} />
            ))}
        </nav>
    );
};
