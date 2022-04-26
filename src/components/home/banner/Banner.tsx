import { HomeBannerProps } from "../../../models/home/HomeBannerProps";
import { Description } from "./components/Description";
import { Hero } from "./components/Hero";

export const Banner = ({
    banner: { hero, description },
    actions,
}: HomeBannerProps) => {
    return (
        <div className="flex items-center flex-col md:flex-row justify-between w-full">
            <Description description={description} actions={actions} />

            <Hero hero={hero} />
        </div>
    );
};
