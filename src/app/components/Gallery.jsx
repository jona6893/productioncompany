import Image from "next/image";
import Link from "next/link";
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
      <div className="grid md:grid-cols-3 gap-3 text-white ">
        <div className="relative group col-span-2 overflow-hidden">
          {isMobile ? <Image
            className={`block w-full h-full scale-[1.12]`}
            src={"/" + urls[3]}
            width={1920}
            height={1080}
            alt=""
          /> :
          <video
          playsinline
          webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic3.webp"
            className={`block w-full h-full scale-[1.12]`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/webvideo5s.mp4"}
              type="video/mp4"
            />
          </video>}
<Link href={"/projects/#holdkæft"}>
          <div className="bg-yellow-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
            <h3 className="md:text-xl text-center">HOLD KÆFT</h3>
          </div></Link>
        </div>

        <div className="relative group">
          <Image
            className={`block w-full h-full object-cover object-right ${
              isMobile && "aspect-square"
            }`}
            src={"/" + urls[7]}
            width={1920}
            height={1080}
            alt=""
          />
          <Link href={"/projects/#bjarketømmerskrald"}>
          <div className="bg-emerald-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">BJARKE TØMMER SKRALD</h3>
          </div></Link>
        </div>
        <div className="relative group flex items-center justify-center">
          <Image
            className={`invert block w-full m-auto`}
            src={"/" + urls[1]}
            width={1600}
            height={1157}
            alt=""
          />
          <div className="bg-black/75 inset-0 absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">AWARD & NOMINEES</h3>
          </div>
        </div>

        <div className="relative group col-span-2 overflow-hidden">
         {isMobile ?  <Image
            className={`block w-full scale-[1.33]`}
            src={"/" + urls[0]}
            alt=""
            width={1920}
            height={1080}
            priority={false}
          /> :
          <video
          playsinline
          webkit-playsinline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            poster="/images/pic11.webp"
            className={`block w-full h-full scale-[1.33]`}
          >
            <source
              src={"https://meritfilm.dk/Playground/videos/hybenVideo.mp4"}
              type="video/mp4"
            />
          </video>}
          <Link href={"/projects/#hybenhjert"}>
          <div className="bg-rose-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">HYBENHJERT</h3>
          </div></Link>
        </div>

        <div className="relative group overflow-hidden">
          <Image
            className={`block w-full w-full h-full object-cover aspect-square scale-[1.2]`}
            src={"/" + urls[5]}
            alt=""
            width={1920}
            height={1080}
            priority={false}
          />
          <Link href={"/projects/#holdkæft"}>
          <div className="bg-yellow-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">HOLD KÆFT</h3>
          </div></Link>
        </div>

        <div className="relative group overflow-hidden">
          <Image
            className={`block w-full w-full h-full object-cover aspect-square object-left scale-[1.4]`}
            src={"/" + urls[4]}
            alt=""
            width={1920}
            height={1080}
            priority={false}
          />
          <Link href={"/projects/#hybenhjert"}>
          <div className="bg-rose-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">HYBENHJERT</h3>
          </div></Link>
        </div>

        <div className={`relative group ${isMobile && "col-span-2"}`}>
          <Image
            className={`block w-full w-full h-full object-cover aspect-square object-right `}
            src={"/" + urls[6]}
            alt=""
            width={1920}
            height={1080}
            priority={false}
          />
          <Link href={"/projects/#bjarketømmerskrald"}>
          <div className="bg-emerald-500/25 w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center cursor-pointer">
            <h3 className="md:text-xl text-center">BJARKE TØMMER SKRALD</h3>
          </div></Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;
