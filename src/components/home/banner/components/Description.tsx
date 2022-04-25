import {
    ActionProps,
    BannerDescriptionProps,
} from "../../../../models/home/HomeBannerProps";

interface Props {
    description: BannerDescriptionProps[];
    actions: ActionProps[];
}

export const Description = ({ description }: Props) => {
    return (
        <div className="">
            {description.map(({ id, text, className }) => (
                <h1
                    key={`banner-text-${id}`}
                    className={`text-[54px] font-urbanist font-bold ${className}`}
                >
                    {text}
                </h1>
            ))}
        </div>
    );
};
