import { HomeBannerProps } from "../models/home/HomeBannerProps";

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
                    "text-bg-purple dark:text-light-purple bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-stroke",
            },
            { id: "jf89ds5", text: "NFTs", className: "text-white" },
        ],
    },
    actions: [
        { label: "Explore", href: "/explore" },
        { label: "Create", href: "/create" },
    ],
};
