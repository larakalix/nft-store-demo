import { HomeBannerProps } from "../../../models/home/HomeBannerProps";
import { Description } from "./components/Description";
import { Hero } from "./components/Hero";

export const Banner = ({
    banner: { hero, description },
    actions,
}: HomeBannerProps) => {
    return (
        <div className="w-full flex items-center justify-center bg-bg-purple dark:bg-light-purple">
            <div className="flex items-center justify-around w-full max-w-[80%]">
                <Description description={description} actions={actions} />

                <Hero hero={hero} />
            </div>
        </div>
    );
};
