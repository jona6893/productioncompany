import "../styles/globals.css";
import Layout from "../app/layouts/Layout.jsx";
import Head from "next/head";
// Frontend
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/tec1vhe.css"></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
