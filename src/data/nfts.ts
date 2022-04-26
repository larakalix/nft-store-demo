// ff2bf78b-c97d-4f3c-b791-b35c191fc505
// 63583f54-0867-44af-9dae-38d91bd9c7dd
// da31b547-50a2-4f37-b764-0f8c8b6054a5
// a03dba27-7958-4ca3-9b1e-33db219961b4
// 44bb7cb7-c79d-421b-8100-a5bf56116494
// 1fbba14b-636a-4447-a06b-0af2154bd18e

import { PickProps } from "../models/home/Picks";
import { Users } from "./users";

export const Nfts: PickProps[] = [
    {
        id: "25666c42",
        name: "Living Vase 01 by Lanza Contemplates",
        description: "NFT 1 description",
        image: "https://www.datocms-assets.com/50719/1650905035-nft-1.jpg",
        price: "4.89 ETH",
        category: ["1", "2"],
        user: Users.find((user) => user.id === "CrispinBerry")!,
        createdAt: new Date(),
    },
    {
        id: "3ab84108",
        name: "Space babe - Night 2/25",
        description: "NFT 1 description",
        image: "https://www.datocms-assets.com/50719/1650905038-nft-2.jpg",
        price: "7.35 ETH",
        category: ["1", "3"],
        user: Users.find((user) => user.id === "SamsonFrost")!,
        createdAt: new Date(),
    },
    {
        id: "db6e1e6a",
        name: "CyberPrimal 042 LAN",
        description: "NFT 1 description",
        image: "https://www.datocms-assets.com/50719/1650905041-nft-3.jpg",
        price: "5.42 ETH",
        category: ["2", "4"],
        user: Users.find((user) => user.id === "CrispinBerry")!,
        createdAt: new Date(),
    },
    {
        id: "65facde8",
        name: "Crypto Egg Stamp #5",
        description: "NFT 1 description",
        image: "https://www.datocms-assets.com/50719/1650905046-nft-4.jpg",
        price: "5.42 ETH",
        category: ["2", "4"],
        user: Users.find((user) => user.id === "AndyHurlbutt")!,
        createdAt: new Date(),
    },
];
