import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
};

export default Home;
