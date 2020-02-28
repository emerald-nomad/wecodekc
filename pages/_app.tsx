import { Fragment } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>We Code KC | Home</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
