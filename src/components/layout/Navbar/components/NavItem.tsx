import Link from "next/link";
import { NavItemProps } from "../../../../models/NavItem";

export const NavItem = ({
    label,
    route,
    counter,
    icon: ItemIcon,
}: NavItemProps) => {
    return (
        <Link href={route}>
            <a className="flex items-center transition-colors">{label}</a>
        </Link>
    );
};
