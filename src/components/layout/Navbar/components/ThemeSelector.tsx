import { useContext } from "react";
import clsx from "clsx";
import ThemeContext from "../../../../context/ThemeContext";

interface Props {
    id: string;
    label: string;
}

const THEME_OPTIONS: Props[] = [
    { id: "light", label: "Switch to light mode" },
    { id: "dark", label: "Switch to dark mode" },
];

export const ThemeSelector = () => {
    return (
        <ul className="flex items-center justify-center rounded-full">
            {THEME_OPTIONS.map(({ id, ...props }: any) => (
                <ThemeIcon key={id} id={id} {...props} />
            ))}
        </ul>
    );
};

const ThemeIcon = ({ id, label }: Props) => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const styles = clsx({
        ["hidden"]: id === theme,
        ["flex text-item-black dark:text-gray-50"]: id !== theme,
    });

    return (
        <li
            className={`${styles} cursor-pointer rounded-full mx-1 font-noto select-none text-[0.8rem]`}
            onClick={() => changeTheme(id)}
        >
            {label}
        </li>
    );
};
