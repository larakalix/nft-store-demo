import { Nfts } from "../../../data/nfts";
import { PickProps } from "../../../models/home/Picks";
import { Title } from "../../utils/heading/Title";
import { Pick } from "./components/Pick";

export const Picks = () => {
    return (
        <>
            <Title text="Picks" className="mt-10 md:mt-20" />
            <div className="w-full grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 my-8">
                {Nfts.map(({ id, ...props }: PickProps) => (
                    <Pick key={id} {...{ id, ...props }} />
                ))}
            </div>
        </>
    );
};
