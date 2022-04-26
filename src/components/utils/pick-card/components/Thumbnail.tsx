/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
    id: string;
    name: string;
    image: string;
}

export const Thumbnail = ({ id, name, image }: Props) => {
    return (
        <div className="mb-4 rounded-3xl overflow-hidden relative flex justify-center items-center group">
            <div className="absolute flex items-center justify-center bg-white dark:bg-light-purple px-8 py-4 z-20 rounded-full translate-y-[-300%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-urbanist font-bold text-gray-800 dark:text-white">
                    Place Bid
                </span>
            </div>
            <Link href={`item/${id}`}>
                <a>
                    <img
                        draggable={false}
                        src={image}
                        alt={name}
                        className="w-full scale-100 group-hover:scale-105 transition-all"
                    />
                </a>
            </Link>
        </div>
    );
};
