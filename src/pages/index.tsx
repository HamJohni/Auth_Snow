﻿import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Register from "./auth/register";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create Next App" />
      </Head>
      <section>
        <Register />
      </section>
    </>
  );
};

export default Home;
