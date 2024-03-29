import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
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
      <div className="sticky top-0 flex w-full items-center justify-between p-4">
        <Link href={"/"}>
          <p className="cursor-pointer text-xl">U.S.H. MEDIA</p>
        </Link>
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
            <nav className="text-white p-4 flex flex-col items-center gap-4 w-full">
              <div className="flex justify-end w-full">
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
              <div className='grid gap-4'>
              <Link href={"/"}>
                <h1 className="grid text-6xl cursor-pointer w-52">
                  <span className="flex flex-col justify-between ">
                    <span className="flex gap-2 justify-between ">
                      <span>U.</span>
                      <span>S.</span>
                      <span>H.</span>
                    </span>
                    <hr />
                  </span>
                  <span className="text-xl flex justify-between">
                    <span>M</span>
                    <span>E</span>
                    <span>D</span>
                    <span>I</span>
                    <span>A</span>
                  </span>
                  <hr />
                </h1>
              </Link>
              <ul className="text-lg grid gap-2">
                {menu.map((menu, index) => (
                  <Link
                    key={index + 3}
                    href={`https://www.ush-media.com/${menu.url.toLowerCase()}`}
                  >
                    <li
                      className="hover:text-gray-400 cursor-pointer"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      {menu.menu}
                    </li>
                  </Link>
                ))}
              </ul>
                </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu