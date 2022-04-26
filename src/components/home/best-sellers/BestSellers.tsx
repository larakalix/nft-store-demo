import { Users } from "../../../data/users";
import { UserProps } from "../../../models/user/User";
import { Title } from "../../utils/heading/Title";
import { UserBadge } from "./components/UserBadge";

export const BestSellers = () => {
    return (
        <>
            <Title text="Top Seller" className="mt-10 md:mt-20" />
            <div className="w-full flex flex-wrap items-center justify-between">
                {Users.map(({ id, ...props }: UserProps) => (
                    <UserBadge key={id} {...{ id, ...props }} />
                ))}
            </div>
        </>
    );
};
