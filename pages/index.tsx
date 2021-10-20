import type { NextPage } from "next";
import Head from "next/head";
import { MainPage } from "./components/MainPage";
import { Recent } from "./components/Recent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memenator</title>
        <meta name="description" content="(:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="index">
        <MainPage />
        <Recent />
      </main>
    </div>
  );
};

export default Home;
