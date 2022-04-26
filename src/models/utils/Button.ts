import { IconType } from "react-icons";

export interface ActionProps {
    id: string;
    label: string;
    route: string;
    type: ButtonType;
    onClick?: () => void;
    className?: string;
    icon?: IconType;
}

export enum ButtonType {
    Outline = "outline",
    Solid = "solid",
}
