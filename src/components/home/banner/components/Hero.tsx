/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const Hero = ({ hero }: { hero: string }) => {
    return (
        <div className="relative w-full md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center items-center order-1 md:order-2">
            <img
                className="absolute z-0 top-[15%] right-0 max-w-full dark:invert"
                src="https://demothemesflat.com/axies/assets/images/backgroup-secsion/img-bg-sliderhome2.png"
                draggable={false}
                alt="NFT Store Demo"
            />
            <div className="max-w-[30vw] md:w-auto">
                <Image
                    src={hero}
                    width={354}
                    height={588}
                    draggable={false}
                    alt="Home banner hero - NFT Store Demo"
                />
            </div>
        </div>
    );
};
