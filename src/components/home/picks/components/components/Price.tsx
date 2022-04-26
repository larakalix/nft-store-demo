export const Price = ({ price }: { price: string }) => {
    return (
        <div className="flex flex-col">
            <h5 className="text-white text-[0.9rem] font-urbanist">
                Current Bid
            </h5>
            <h4 className="text-white text-[1.2rem] font-urbanist font-bold">
                {price}
            </h4>
        </div>
    );
};
