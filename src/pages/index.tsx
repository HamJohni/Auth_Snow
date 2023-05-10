import { NextPage } from "next";
import Head from "next/head";
import Main from "@/components/Main/Main";


const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>snow-app</title>
            <meta name="description" content="Created by snowflake" />
        </Head>

        <Main/>
    </>
  );
};

export default Home;
