/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { UserProps } from "../../../../models/user/User";

export const UserBadge = ({ id, name, avatar }: UserProps) => {
    return (
        <Link href={`user/${id}`}>
            <a className="m-2">
                <div className="rounded-3xl overflow-hidden h-[125px] w-[125px]">
                    <Image
                        src={avatar}
                        alt={name}
                        className="w-full"
                        width={125}
                        height={125}
                    />
                </div>
                <h1 className="text-white font-urbanist font-bold text-center w-full text-[1.1rem] mt-3">
                    {name}
                </h1>
            </a>
        </Link>
    );
};
