import { UserProps } from "../user/User";

export interface PickProps {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    category: string[];
    createdAt: Date;
    user: UserProps;
}
