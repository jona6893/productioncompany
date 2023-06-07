"use client";
import Gallery from "../app/components/Gallery";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Frontpage2 from "../app/components/Frontpage2";

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

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [parent] = useAutoAnimate();

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
        {/* <div>
          <Menu setCurMenu={setCurMenu} isMobile={isMobile} />
        </div> */}
        <div ref={parent}>
          {/* <Gallery isMobile={isMobile} /> */}
          <Frontpage2 />
        </div>
      </main>
    </>
  );
}
