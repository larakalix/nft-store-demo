import { ActionProps } from "../utils/Button";

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
    className?: string;
    isParagraph?: boolean;
}
