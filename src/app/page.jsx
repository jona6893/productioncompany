"use client";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Projects from "./components/Projects";
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
const [curMenu, setCurMenu] = useState(0);
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



  let Page;
  if(curMenu === 0) {
    Page = Gallery
  } else if(curMenu === 1) {
    Page = Projects
  } else if(curMenu === 2) {
    Page = Contact
  } else if(curMenu === 3) {
    Page = About
  }




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
      <main className="md:grid mainGrid gap-4 p-4 ">
        <div>
          <Menu setCurMenu={setCurMenu} isMobile={isMobile} />
        </div>
        <div ref={parent}>
          <Page isMobile={isMobile} />
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