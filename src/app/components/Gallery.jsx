import React from "react";

function Gallery({ isMobile }) {
  const urls = [
    "images/pic11.webp",
    "images/pic2.webp",
    "images/pic9.webp",
    "images/pic3.webp",
    "images/pic12.webp",
    "images/pic5.webp",
    "images/pic8.webp",
    "images/pic6.webp",
    "images/pic1.webp",
    "images/pic7.webp",
    "images/pic10.webp",
    "images/pic4.webp",
    "images/pic13.webp",
  ];


  return (
    <>
      
      <div className="grid md:grid-cols-3 gap-3 text-white">
        <div className="relative group col-span-2 overflow-hidden">
          <img
            className={`block w-full h-full scale-[1.12]`}
            src={urls[3]}
            alt=""
          />
          <div className="bg-yellow-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">HOLD KÆFT</h3>
          </div>
        </div>

        <div className="relative group">
          <img
            className={`block w-full h-full object-cover object-right ${isMobile && "aspect-square"}`}
            src={urls[7]}
            alt=""
          />
          <div className="bg-emerald-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">BJARKE TØMMER SKRALD</h3>
          </div>
        </div>
        <div className="relative group flex items-center justify-center">
          <img className={`invert block w-full m-auto`} src={urls[1]} alt="" />
          <div className="bg-black/75 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">AWARD & NOMINEES</h3>
          </div>
        </div>

        <div className="relative group col-span-2 overflow-hidden">
          <img className={`block w-full scale-[1.33]`} src={urls[0]} alt="" />
          <div className="bg-rose-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">HYBENHJERT</h3>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            className={`block w-full w-full h-full object-cover aspect-square scale-[1.2]`}
            src={urls[5]}
            alt=""
          />
          <div className="bg-yellow-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">HOLD KÆFT</h3>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            className={`block w-full w-full h-full object-cover aspect-square object-left scale-[1.4]`}
            src={urls[4]}
            alt=""
          />
          <div className="bg-rose-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">HYBENHJERT</h3>
          </div>
        </div>

        <div className={`relative group ${isMobile && "col-span-2"}`}>
          <img
            className={`block w-full w-full h-full object-cover aspect-square object-right `}
            src={urls[6]}
            alt=""
          />
          <div className="bg-emerald-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="text-xl">BJARKE TØMMER SKRALD</h3>
          </div>
        </div>
      </div>

    </>
  );
}

export default Gallery;
