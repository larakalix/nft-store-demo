import Image from "next/image";
import { UserProps } from "../../../../models/user/User";

export const CreatorBadge = ({ name, avatar }: UserProps) => {
    return (
        <div className="flex flex-row">
            <div className="rounded-lg mr-2">
                <Image
                    src={avatar}
                    width={44}
                    height={44}
                    alt={name}
                    className="rounded-lg"
                />
            </div>
            <div>
                <h5 className="text-white dark:text-custm-black text-[0.9rem] font-urbanist">
                    Creator
                </h5>
                <h4 className="text-white dark:text-custm-black text-[1.2rem] font-urbanist font-bold">
                    {name}
                </h4>
            </div>
        </div>
    );
};
