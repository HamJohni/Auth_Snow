import { NextPage } from "next";
import Head from "next/head";
import Qr from "@/components/Qr/Qr";


const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>snow-app</title>
            <meta name="description" content="Created by snowflake" />
        </Head>

        <Qr/>
    </>
  );
};

export default Home;
