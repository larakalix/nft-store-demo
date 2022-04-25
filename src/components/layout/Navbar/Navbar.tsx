import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavItems } from "./components/NavItems";
import { ThemeSelector } from "./components/ThemeSelector";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="sticky top-0 bg-green-400">
            {/* <div className="fixed top-[1rem] right-[1rem] z-50 md:hidden">
                {open ? (
                    <CgClose
                        className="text-[1.3rem] cursor-pointer text-item-black dark:text-white"
                        onClick={handleClick}
                    />
                ) : (
                    <CgMenu
                        className="text-[1.3rem] cursor-pointer text-item-black dark:text-white"
                        onClick={handleClick}
                    />
                )}
            </div> */}

            <NavItems />
            
            <ThemeSelector />
        </div>
    );
};
