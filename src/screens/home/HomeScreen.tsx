import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";
import { HomeBanner } from "../../data/home";
import { Banner } from "../../components/home/banner/Banner";
import { Picks } from "../../components/home/picks/Picks";
import { BestSellers } from "../../components/home/best-sellers/BestSellers";
import { Actions } from "../../components/home/actions/Actions";

export const HomeScreen = () => {
    return (
        <PageWrapper>
            <Banner {...HomeBanner} />

            <Picks />

            <BestSellers />

            <Actions />

            <br />
            <br />
            <br />
        </PageWrapper>
    );
};
