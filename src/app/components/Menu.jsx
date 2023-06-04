"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function Menu({ setCurMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menu = ["Projects", "Contact", "About"];

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
        <nav className="text-white flex flex-col gap-4 sticky top-0">
          <Link href={"/"}>
            <h1 className="grid text-7xl w-fit cursor-pointer">
              <span className="flex justify-between">
                <div>U.</div>
                <div>S.</div>
                <div>H.</div>
              </span>
              MEDIA
            </h1>
          </Link>
          <ul className="text-lg grid gap-2">
            {menu.map((menu, index) => (
              <Link href={menu.toLowerCase()}>
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {menu}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menu;
