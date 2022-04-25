import type { NextPage } from "next";
import Head from "next/head";
import { ExploreScreen } from "../src/screens/explore/ExploreScreen";

const Explore: NextPage = () => {
    return (
        <>
            <Head>
                <title>NFT Store Demo - Explore</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ExploreScreen />
        </>
    );
};

export default Explore;
