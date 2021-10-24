import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "./components/Footer";
import { MainPage } from "./components/MainPage";
import { Recent } from "./components/Recent";

function Home() {
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
        <Footer />
      </main>
    </div>
  );
}

export default Home;
