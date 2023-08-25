import React from 'react'
import ReactPlayer from "react-player/lazy";
import { useRef, useEffect } from "react";
import Link from 'next/link';

function Frontpage2({ frontpages, setHoverTitle }) {
  console.log(frontpages);

  return (
    <div className="md:flex w-full overflow-hidden h-screen">
      <video
        playsInline
        webkit-playsinline="true"
        muted={true}
        loop={true}
        autoPlay={true}
        poster={frontpages[0].frontpageBlocks.screenShotPoster.url}
        className={`md:block w-full h-full object-cover max-md:hidden `}
      >
        <source
          /* src={frontpages[0].frontpageBlocks.vIdeoUrlCloudinary} */
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Frontpage2


{/* {frontpages.map((film, index) => (
        <article

          key={index + 2}
          className={`md:h-screen md:w-[25%] md:hover:w-[200%] duration-300 grow`}
        >
          <Link href={`/films/${film.frontpageBlocks.pageUrl}`}>
            <div
              onMouseEnter={() => setHoverTitle(`${film.frontpageBlocks.title}`)}
              onMouseLeave={() => setHoverTitle(`PROduktioner`)}
              className="relative group w-full md:h-screen md:hover: duration-300 overflow-hidden cursor-pointer"
            >
              <div
                className={`${film.overlayColor} bg-black/20  absolute inset-0 opacity-100 md:group-hover:opacity-0 duration-500 flex text-center flex-col items-center justify-center z-[1]`}
              >
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
                className={`md:block w-full h-full object-cover max-md:hidden ${
                  index === 1 && "scale-[1.33]"
                } ${index === 2 && "scale-[1.15]"} ${
                  index === 3 && "scale-[1.15]"
                }`}
              >
                <source
                 src={film.frontpageBlocks.vIdeoUrlCloudinary}
                  type="video/mp4"
                />
              </video>
            </div>
          </Link>
        </article>
      ))} */}