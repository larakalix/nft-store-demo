interface TitleProps {
    text: string;
    className?: string;
}

export const Title = ({ text, className }: TitleProps) => {
    return (
        <div
            className={`flex text-white leading-[44px] font-urbanist font-bold text-[2.8rem] mb-6 ${className}`}
        >
            {text}
        </div>
    );
};
