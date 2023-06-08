import React from 'react'
import ReactPlayer from "react-player/lazy";
import { useRef, useEffect } from "react";
import Link from 'next/link';

function Frontpage2({ frontpages }) {
  const {frontpageBlocks} = frontpages;
  const content = [
    {
      title: "Bjarke Tømmer Skrald",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "images/bts_screenshot.webp",
      video: "https://meritfilm.dk/Playground/videos/BTW_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "bts",
    },
    {
      title: "Hybenhjerte",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "images/hyben_screenshot.webp",
      video: "https://meritfilm.dk/Playground/videos/HH_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hybenhjerte",
    },
    {
      title: "Hold Hæft",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "images/hk_screenshot.webp",
      video: "https://meritfilm.dk/Playground/videos/HK_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hold-kaeft",
    },

    {
      title: "Jeg Har Aldrig",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "jha_screenshot.webp",
      video: "https://meritfilm.dk/Playground/videos/JHA_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "jeg-har-aldrig",
    },
  ];

  console.log(frontpages);

  return (
    <>
      {frontpages.map((film, index) => (
        <article
          /* ref={refs[index]} */
          key={index + 2}
          className={`${
            content.length !== index + 1 && "border-b-2 border-white"
          } `}
        >
          <Link href={`/films/${film.frontpageBlocks.pageUrl}`}>
            <div className="h-[250px] relative group hover:h-[70vh] w-full duration-300 overflow-hidden cursor-pointer ">
              <div
                className={`${film.overlayColor} absolute inset-0 group-hover:opacity-0 duration-200 flex flex-col items-center justify-center`}
              >
                <h2 className="text-4xl">{film.frontpageBlocks.title}</h2>
                <h3>{film.frontpageBlocks.subtitle}</h3>
              </div>
              <video
                playsInline
                webkit-playsinline="true"
                muted={true}
                loop={true}
                autoPlay={true}
                poster={film.frontpageBlocks.screenShotPoster.url}
                className={`block w-full h-full object-cover`}
              >
                <source src={film.frontpageBlocks.video.url} type="video/mp4" />
              </video>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}

export default Frontpage2