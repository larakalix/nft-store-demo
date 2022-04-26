import clsx from "clsx";
import Link from "next/link";
import { ActionProps, ButtonType } from "../../../models/utils/Button";

export const Button = ({
    label,
    route,
    className,
    type,
    onClick,
}: ActionProps) => {
    const styles = clsx({
        ["1"]: type === ButtonType.Outline,
        ["2"]: type === ButtonType.Solid,
    });

    return (
        <Link href={route}>
            <a
                className={`select-none border-2 border-light-purple dark:border-white bg-transparent rounded-full text-white px-12 py-4 hover:bg-light-purple font-bold transition-colors ${className}`}
            >
                {label}
            </a>
        </Link>
    );
};
