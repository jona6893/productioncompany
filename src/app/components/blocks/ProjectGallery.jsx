import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function ProjectGallery({ productions }) {


  return (
    <section className=" bg-white  gap-4 px-8 py-8 overflow-x-scroll">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="3rem" className='w-fit'>
          {productions.map((production, index) => {
            return (
              <article
                key={index + 4}
                id={production.tItle?.toLowerCase().replaceAll(" ", "")}
                className="text-white flex max-md:flex-col duration-300 hover:scale-[1.02] bg-gray-50 p-2 rounded "
              >
                <Link href={`films/${production.pageUrl}`}>
                  <Image
                    className={` aspect-[27/40]`}
                    src={production.poster?.url}
                    alt="poster"
                    width={production.poster?.width}
                    height={production.poster?.height}
                  />
                </Link>
              </article>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}

export default ProjectGallery

