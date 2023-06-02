"use client";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import { motion, AnimatePresence } from "framer-motion";

// Define your animations
const pageVariants = {
  initial: { opacity: 0, x: 0 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};


const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

export default function Home() {
  const [curMenu, setCurMenu] = useState(0);

  return (
    <main className="grid mainGrid mt-12 gap-4 p-4">
      <div>
        <Menu setCurMenu={setCurMenu} />
      </div>
      <AnimatePresence mode="wait">
        {curMenu === 0 && (
          <motion.div
            key="gallery"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Gallery />
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
            <Contact />
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
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

