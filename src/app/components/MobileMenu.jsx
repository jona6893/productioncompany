import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

function MobileMenu({ isOpen, setIsOpen, menu, setCurMenu }) {
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

  return (
    <>
      <div className="sticky top-0 flex w-full items-center justify-between pb-4">
        <p
        className='cursor-pointer'
        onClick={() => {setCurMenu(() => 0)}}
        >
          U.S.H. Media
        </p>
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
            key="modal"
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
                  <li key={index}
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

export default MobileMenu