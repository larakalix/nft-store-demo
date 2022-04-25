import { IconType } from "react-icons";

export interface NavItemProps {
    label: string;
    route: string;
    icon?: IconType;
    counter?: number;
}
