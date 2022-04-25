import Image from "next/image";

export const Hero = ({ hero }: { hero: string }) => {
    return (
        <div className="relative max-w-lg">
            <Image
                src={hero}
                alt="Home banner hero - NFT Store Demo"
                width={354}
                height={588}
            />
        </div>
    );
};
