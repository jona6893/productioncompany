
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";


const variants = {
  open: {
    x: "0%",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

function Menu({ setCurMenu, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Projects", "Contact", "About"];


  function Hamburger() {
    return (
      <>
        <div className="fixed flex w-full h-full inset-0 justify-end p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 stroke-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="fixed right-0 bg-black flex flex-col items-center w-full h-full inset-0 justify-start gap-8 z-10"
            >
              <nav className="text-white p-4 flex flex-col gap-4 w-full">
                <div className="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 stroke-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <h1
                  className="grid text-7xl w-fit cursor-pointer"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setCurMenu(() => 0);
                  }}
                >
                  <span className="flex justify-between">
                    <div>U.</div>
                    <div>S.</div>
                    <div>H.</div>
                  </span>
                  MEDIA
                </h1>
                <ul className="text-lg grid gap-2">
                  {menu.map((menu, index) => (
                    <li
                      className="hover:text-gray-400 cursor-pointer"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setCurMenu(() => index + 1);
                      }}
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isMobile ? (
          <Hamburger setCurMenu={setCurMenu} />
        ) : (
          <nav className="text-white p-4 flex flex-col gap-4 sticky top-0">
            <h1
              className="grid text-7xl w-fit cursor-pointer"
              onClick={() => setCurMenu(() => 0)}
            >
              <span className="flex justify-between">
                <div>U.</div>
                <div>S.</div>
                <div>H.</div>
              </span>
              MEDIA
            </h1>
            <ul className="text-lg grid gap-2">
              {menu.map((menu, index) => (
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => setCurMenu(() => index + 1)}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
