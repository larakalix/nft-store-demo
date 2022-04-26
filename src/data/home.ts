import { HomeBannerProps } from "../models/home/HomeBannerProps";
import { ButtonType } from "../models/utils/Button";

export const HomeBanner: HomeBannerProps = {
    title: "Home",
    banner: {
        hero: "https://www.datocms-assets.com/50719/1650904713-nft-store-hero.png",
        description: [
            { id: "jf89ds3", text: "Discover, find,", className: "text-white" },
            {
                id: "jf89ds4",
                text: "Sell extraordinary",
                className:
                    "text-bg-purple dark:text-light-purple bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#ffa57a] dark:to-[#91dc51] bg-clip-text text-stroke",
            },
            { id: "jf89ds5", text: "Monster NFTs", className: "text-white" },
            {
                id: "jf89ds6",
                text: "Marketplace for monster character cllections non fungible token NFTs",
                className: "text-gray-100",
                isParagraph: true,
            },
        ],
    },
    actions: [
        {
            id: "uuy79ds1",
            label: "Explore",
            route: "/explore",
            type: ButtonType.Outline,
        },
        {
            id: "uuy79ds2",
            label: "Create",
            route: "/create",
            type: ButtonType.Outline,
        },
    ],
};
