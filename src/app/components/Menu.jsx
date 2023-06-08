"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function Menu({ setCurMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menu = [
    { menu: "Produktioner", url: "Produktioner" },
    { menu: "Kontakt", url: "Kontakt" },
    { menu: "Om Os", url: "omos" },
  ];

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
      {isMobile ? (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          menu={menu}
          setCurMenu={setCurMenu}
        />
      ) : (
        <nav className="text-white flex flex-col gap-8 sticky top-0">
          <Link href={"/"}>
            <h1 className="grid text-6xl w-full  cursor-pointer">
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
          <ul className="text-lg grid gap-4">
            {menu.map((menu, index) => (
              <Link
                key={index + 1}
                href={`https://www.ush-media.com/${menu.url.toLowerCase()}`}
              >
                <li className="hover:text-gray-400 cursor-pointer tracking-widest	">
                  {menu.menu.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col ">
            <address className="flex flex-col gap-2">
              Write to us at:
              <a href="mailto:ulrikschmidthansen@gmail.com">
                ulrikschmidthansen@gmail.com
              </a>
              <a href="mailto:jona.weldon@icloud.com">jona.weldon@icloud.com</a>
            </address>
            <address className="flex flex-col gap-2 justify-center ">
              Call us on: <a href="tel:76482753">+45 53 64 52 28</a>
            </address>
            <address className="flex flex-col gap-2 justify-center ">
              Bøgevej 12 <br /> Glamsbjerg 5620
              <br />
              Danmark
            </address>
            <address className="flex flex-col gap-2 justify-center ">
              CVR: 40 90 65 25
            </address>
          </div>
        </nav>
      )}
    </>
  );
}

export default Menu;
