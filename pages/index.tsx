import type { NextPage } from "next";
import Head from "next/head";
import { HomeScreen } from "../src/screens/home/HomeScreen";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>NFT Store Demo - Home</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeScreen />
        </>
    );
};

export default Home;
