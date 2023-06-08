"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function Menu({ setCurMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menu = ["Produktioner", "Kontakt", "Omos",];

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
            <h1 className="grid text-7xl w-fit cursor-pointer">
              <span className="flex flex-col justify-between ">
                <span className="flex justify-between ">
                  <span>U.</span>
                  <span>S.</span>
                  <span>H.</span>
                </span>
                <hr />
              </span>
              MEDIA
              <hr />
            </h1>
          </Link>
          <ul className="text-lg grid gap-4">
            {menu.map((menu, index) => (
              <Link
                key={index + 1}
                href={`http://localhost:3000/${menu.toLowerCase()}`}
              >
                <li className="hover:text-gray-400 cursor-pointer tracking-widest	">
                  {menu.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col ">
            <address className="flex flex-col gap-2">
              Write to us at:
              <a href="mailto:webmaster@example.com">webmaster@example.com</a>
            </address>
            <address className="flex flex-col gap-2 justify-center ">
              Call us on: <a href="tel:76482753">76 48 27 53</a>
            </address>
            <address className="flex flex-col gap-2 justify-center ">
              Københavngade 32A, <br /> københavn 2200
              <br />
              Danmark
            </address>
          </div>
        </nav>
      )}
    </>
  );
}

export default Menu;
