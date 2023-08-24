"use client";
import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Frontpage2 from "../app/components/Frontpage2";
import { frontpageQuery } from "@/app/modules/frontpageQuery";

// Define your animations
const pageVariants = {
  initial: { opacity: 0, x: 0 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

export default function Home({ frontpages }) {
  
  const [isMobile, setIsMobile] = useState(false);
  const [parent] = useAutoAnimate();
  const [hoverTitle, setHoverTitle] = useState("PROduktioner");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="">
        <div ref={parent} className="relativ">
        {/*   <h1 className="pointer-events-none text-7xl absolute z-10 top-[5%]	text-right pr-[5%]	w-full font-sans font-extrabold text-neutral-50/80 uppercase max-md:hidden">
            {hoverTitle}
          </h1> */}
          <Frontpage2 frontpages={frontpages} setHoverTitle={setHoverTitle} />
        </div>
      </main>
    </>
  );
}


export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { frontpages } = await hygraph.request(frontpageQuery);

  return {
    props: {
      frontpages,
    },
  };
}