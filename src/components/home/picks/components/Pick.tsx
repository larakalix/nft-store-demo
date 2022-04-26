import { PickProps } from "../../../../models/home/Picks";
import { CreatorBadge } from "./components/CreatorBadge";
import { Price } from "./components/Price";
import { Thumbnail } from "./components/Thumbnail";

export const Pick = ({ id, name, image, price, user }: PickProps) => {
    return (
        <div className="relative flex items-center justify-center flex-col w-full bg-card rounded-3xl p-6 top-0 group hover:top-[-1rem] transition-all">
            <Thumbnail {...{ id, name, image }} />

            <h1 className="w-full truncate font-urbanist text-white text-[1rem] md:text-[1.2rem] font-bold">
                {name}
            </h1>

            <div className="w-full flex items-center justify-between mt-4">
                <CreatorBadge {...user} />

                <Price price={price} />
            </div>
        </div>
    );
};
