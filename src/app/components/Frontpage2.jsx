import React from 'react'
import ReactPlayer from "react-player/lazy";
import { useRef, useEffect } from "react";
import Link from 'next/link';

function Frontpage2({ frontpages }) {
  const {frontpageBlocks} = frontpages;

  console.log(frontpages);

  return (
    <>
      {frontpages.map((film, index) => (
        <article
          /* ref={refs[index]} */
          key={index + 2}
          className={`${
            film.frontpageBlocks.length !== index + 1 &&
            "border-b-2 border-white"
          } `}
        >
          <Link href={`/films/${film.frontpageBlocks.pageUrl}`}>
            <div className="h-[250px] relative group hover:h-[70vh] w-full duration-300 overflow-hidden cursor-pointer ">
              <div
                className={`${film.overlayColor} absolute inset-0 group-hover:opacity-0 duration-300 flex flex-col items-center justify-center`}
              >
                <h2 className="text-4xl">{film.frontpageBlocks.title}</h2>
                <h3>{film.frontpageBlocks.subtitle}</h3>
              </div>
              <img
                className="max-md:block md:hidden w-full h-full object-cover "
                src={film.frontpageBlocks.screenShotPoster.url}
                alt=""
              />
              <video
                playsInline
                webkit-playsinline="true"
                muted={true}
                loop={true}
                autoPlay={true}
                poster={film.frontpageBlocks.screenShotPoster.url}
                className={`md:block w-full h-full object-cover max-md:hidden `}
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