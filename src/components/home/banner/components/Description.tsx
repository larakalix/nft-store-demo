import { BannerDescriptionProps } from "../../../../models/home/HomeBannerProps";
import { ActionProps } from "../../../../models/utils/Button";
import { Button } from "../../../utils/button/Button";

interface Props {
    description: BannerDescriptionProps[];
    actions: ActionProps[];
}

export const Description = ({ description, actions }: Props) => {
    return (
        <div className="order-2 md:order-1 z-50">
            {description.map(({ id, ...props }) => (
                <TextElement key={`banner-text-${id}`} {...{ id, ...props }} />
            ))}
            <div className="flex items-center flex-wrap space-x-6 mt-8">
                {actions.map(({ id, ...props }: ActionProps) => (
                    <Button id={id} key={id} {...props} />
                ))}
            </div>
        </div>
    );
};

const TextElement = ({
    id,
    text,
    className,
    isParagraph,
}: BannerDescriptionProps) => {
    if (isParagraph) {
        return (
            <p
                className={`text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[1.6rem] ${className}`}
            >
                {text}
            </p>
        );
    } else {
        return (
            <h1
                className={`text-[2.4rem] md:text-[2.8rem] lg:text-[3.3rem] font-urbanist font-bold ${className}`}
            >
                {text}
            </h1>
        );
    }
};
