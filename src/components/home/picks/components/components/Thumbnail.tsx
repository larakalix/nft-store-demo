/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
    id: string;
    name: string;
    image: string;
}

export const Thumbnail = ({ id, name, image }: Props) => {
    return (
        <div className="relative mb-4 rounded-3xl overflow-hidden">
            <Link href={`item/${id}`}>
                <a>
                    <img
                        src={image}
                        alt={name}
                        className="w-full scale-100 group-hover:scale-105 transition-all"
                    />
                </a>
            </Link>
        </div>
    );
};
