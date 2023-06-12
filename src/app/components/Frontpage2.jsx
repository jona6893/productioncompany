import React from 'react'
import ReactPlayer from "react-player/lazy";
import { useRef, useEffect } from "react";
import Link from 'next/link';

function Frontpage2({ frontpages }) {
  const {frontpageBlocks} = frontpages;

  console.log(frontpages);

  return (
    <div className="flex w-full overflow-hidden">
      {frontpages.map((film, index) => (
        <article
          /* ref={refs[index]} */
          key={index + 2}
          className={`h-screen w-[25%] hover:w-[100%] duration-300 grow`}
        >
          <Link href={`/films/${film.frontpageBlocks.pageUrl}`}>
            <div className="relative group w-full h-screen md:hover: duration-300 overflow-hidden cursor-pointer ">
              <div
                className={`${film.overlayColor} absolute inset-0 md:group-hover:opacity-0 duration-300 flex flex-col items-center justify-center`}
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
                {/* <source src={film.frontpageBlocks.video.url} type="video/mp4" /> */}
              </video>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Frontpage2