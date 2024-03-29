import React from 'react'
import parse from "html-react-parser";
import Image from 'next/image';

function FilmInformation({film}) {
  return (
    <div className="flex max-md:flex-col max-md:items-center md:justify-center gap-8">
      <Image
        className="w-96 aspect-[27/40]"
        src={film.poster?.url}
        width={film.poster?.width}
        height={film.poster?.height}
        alt="post of film"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl flex items-center gap-4 titles">
          {film.tItle}
          {film.imdbPage &&
          <span className="bg-yellow-500 hover:bg-yellow-400 px-1 rounded text-base cursor-pointer">
            <a
              className="text-black text-sm font-sans font-extrabold"
              target="_blank"
              href={`${film.imdbPage}`}
            >
              IMDB
            </a>
          </span>}
        </h1>
        <h4>{film.tagline}</h4>
        {/* his parse might be a problem */}
        <div className="max-w-[48ch]">{parse(film.description?.html)}</div>
        {film.release &&
        <p className="font-bold">
          <span className="font-normal text-sm text-neutral-300 ">
            Release:
          </span>
          {film.release}
        </p>}
        {film.stage && 
        <p className="font-bold">
          <span className="font-normal text-sm text-neutral-300 ">Status:</span>{" "}
          {film.stage}
        </p>}
        {film.type && 
        <p className="font-bold">
          <span className="font-normal text-sm text-neutral-300 ">Type:</span>{" "}
          {film.type}
        </p>}
      </div>
    </div>
  );
}

export default FilmInformation