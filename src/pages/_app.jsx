import "../styles/globals.css";
import Layout from "../app/layouts/Layout.jsx";
import Head from "next/head";
// Frontend
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/tec1vhe.css"
        ></link>
        <title>U.S.H. MEDIA - Film Production Company</title>
        <meta
          name="description"
          content="U.S.H Media, a leading film production company, expertly transforms unique narratives into captivating cinematic experiences. Discover why filmmakers worldwide trust us for exceptional production quality and creative storytelling. Be part of the journey where imagination meets the silver screen!"
        ></meta>

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
