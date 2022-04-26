import { motion } from "framer-motion";
import { PageWrapperProps } from "../../../models/PageWrapper";

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-bg-purple dark:bg-light-purple"
            {...config}
        >
            <div className="max-w-full px-6 md:px-0 md:max-w-[75%]">{children}</div>
        </motion.div>
    );
};

const config: any = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            scale: 3,
        },
    },
};
