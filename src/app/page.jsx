"use client";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useAutoAnimate } from "@formkit/auto-animate/react";


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
          <Gallery isMobile={isMobile} />
        </div>
      </main>
    </>
  );
}

/*  <AnimatePresence mode="wait">
   {curMenu === 0 && (
     <motion.div
       key="gallery"
       initial="initial"
       animate="in"
       exit="out"
       variants={pageVariants}
       transition={pageTransition}
     >
       <Gallery isMobile={isMobile} />
     </motion.div>
   )}
   {curMenu === 1 && (
     <motion.div
       key="contact"
       initial="initial"
       animate="in"
       exit="out"
       variants={pageVariants}
       transition={pageTransition}
     >
       <Projects isMobile={isMobile} />
     </motion.div>
   )}
   {curMenu === 2 && (
     <motion.div
       key="about"
       initial="initial"
       animate="in"
       exit="out"
       variants={pageVariants}
       transition={pageTransition}
     >
       <Contact />
     </motion.div>
   )}
   {curMenu === 3 && (
     <motion.div
       key="about"
       initial="initial"
       animate="in"
       exit="out"
       variants={pageVariants}
       transition={pageTransition}
     >
       <About />
     </motion.div>
   )}
 </AnimatePresence>; */
