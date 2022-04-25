import { IconType } from "react-icons";

export interface HomeBannerProps {
    title: string;
    banner: {
        hero: string;
        description: BannerDescriptionProps[];
    };
    actions: ActionProps[];
}

export interface BannerDescriptionProps {
    id: string;
    text: string;
    className: string;
}

export interface ActionProps {
    label: string;
    href: string;
    icon?: IconType;
}
