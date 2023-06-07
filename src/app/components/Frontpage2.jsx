import React from 'react'
import ReactPlayer from "react-player/lazy";
import { useRef, useEffect } from "react";
import Link from 'next/link';

function Frontpage2() {
const content = [{
    title: "Bjarke Tømmer Skrald",
    tagline: "Tag dine piller eller du får kræft",
    release: 2023,
    poster: "images/bts.webp",
    video: "https://meritfilm.dk/Playground/videos/BTW_WEB_070623.mp4",
    overlayColor: "bg-black/25",
    pageUrl: "bts",
  },
  {
    title: "Hybenhjerte",
    tagline: "Tag dine piller eller du får kræft",
    release: 2023,
    poster: "images/hyben.webp",
    video: "https://meritfilm.dk/Playground/videos/HH_WEB_070623.mp4",
    overlayColor: "bg-black/25",
    pageUrl: "hybenhjerte",
  },
  {
    title: "Hold Hæft",
    tagline: "Tag dine piller eller du får kræft",
    release: 2023,
    poster: "images/hk.webp",
    video: "https://meritfilm.dk/Playground/videos/HK_WEB_070623.mp4",
    overlayColor: "bg-black/25",
    pageUrl: "hold-kaeft",
  },
  
  {
    title: "Jeg Har Aldrig",
    tagline: "Tag dine piller eller du får kræft",
    release: 2023,
    poster: "url",
    video: "https://meritfilm.dk/Playground/videos/JHA_WEB_070623.mp4",
    overlayColor: "bg-black/25",
    pageUrl: "jeg-har-aldrig",
  },
];

  const refs = content.map(() => useRef(null));

  useEffect(() => {
    const handlers = content.map((_, index) => {
      const handler = () => {
        const article = refs[index].current;
        const rect = article.getBoundingClientRect();
        const initialArticleCenter = rect.top + rect.height / 2;

        if (initialArticleCenter !== window.innerHeight / 2) {
          window.scrollBy({
            top: initialArticleCenter - window.innerHeight / 2,
            behavior: "smooth",
          });
        }

        setTimeout(() => {
          const rect = article.getBoundingClientRect();
          const expandedArticleCenter = rect.top + rect.height / 2;

          if (expandedArticleCenter !== window.innerHeight / 2) {
            window.scrollBy({
              top: expandedArticleCenter - window.innerHeight / 2,
              behavior: "smooth",
            });
          }
        }, 300);
      };

      return handler;
    });

    content.forEach((_, index) => {
      const article = refs[index].current;
      article.addEventListener("mouseenter", handlers[index]);
    });

    return () => {
      content.forEach((_, index) => {
        const article = refs[index].current;
        article && article.removeEventListener("mouseenter", handlers[index]);
      });
    };
  }, [refs, content]);



console.log(content.length);


  return (
    <>
      {content.map((film, index) => (
        <article
          ref={refs[index]}
          key={index + 2}
          className={`${
            content.length !== index + 1 && "border-b-2 border-white"
          } `}
        >
          <Link href={`/films/${film.pageUrl}`}>
          <div className="h-[250px] relative group hover:h-[80vh] w-full duration-300 overflow-hidden cursor-pointer ">
            <div
              className={`${film.overlayColor} absolute inset-0 group-hover:opacity-0 duration-200 flex flex-col items-center justify-center`}
            >
              <h2 className="text-4xl">{film.title}</h2>
              <h3>{film.release}</h3>
            </div>
            <video
              playsInline
              webkit-playsinline="true"
              muted={true}
              loop={true}
              autoPlay={true}
              /* poster="/images/pic11.webp" */
              className={`block w-full h-full object-cover`}
            >
              <source src={film.video} type="video/mp4" />
            </video>
          </div>
          </Link>
        </article>
      ))}
    </>
  );
}

export default Frontpage2