import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";
import { Banner } from "../../components/home/banner/Banner";
import { HomeBanner } from "../../data/home";

export const HomeScreen = () => {
    return (
        <PageWrapper>
            <div className="h-screen w-full">
                <Banner {...HomeBanner} />
            </div>
        </PageWrapper>
    );
};
