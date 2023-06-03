
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MobileMenu from "./MobileMenu";



function Menu({ setCurMenu, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Projects", "Contact", "About"];
 



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
              <li key={index}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setCurMenu(() => index + 1)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menu;
