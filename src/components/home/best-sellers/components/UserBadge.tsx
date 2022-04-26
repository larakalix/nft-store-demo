/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { UserProps } from "../../../../models/user/User";

export const UserBadge = ({ id, name, avatar }: UserProps) => {
    return (
        <Link href={`user/${id}`}>
            <a className="m-2 relative">
                <span className="absolute bottom-[20%] right-[-5%] z-10 bg-light-purple dark:bg-[#91dc51] rounded-full flex items-center justify-center">
                    <BsCheck className="text-white font-bold text-[1.4rem]" />
                </span>
                <div className="rounded-3xl overflow-hidden h-[125px] w-[125px]">
                    <Image
                        draggable={false}
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
