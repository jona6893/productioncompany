
import Link from "next/link";
import React from "react";

function Menu({ setCurMenu }) {
  const menu = ["Projects", "Contact", "About"];

  return (
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
  );
}

export default Menu;
