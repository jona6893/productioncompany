import React from 'react'

function Menu() {
const menu = [
    "Projects", 
    "Contact", 
    "About"];


  return (
    <nav className="text-white p-4 flex flex-col gap-4 sticky top-0">
      <h1 className="grid text-7xl w-fit">
        <span className="flex justify-between">
          <div>U.</div>
          <div>S.</div>
          <div>H.</div>
        </span>
        MEDIA
      </h1>
      <ul className="text-lg grid gap-2">
        {menu.map((menu) => (
          <li className='hover:text-gray-400'>
            <a href="">{menu}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu