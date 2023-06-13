import Link from 'next/link';
import React from 'react'
import { GraphQLClient } from "graphql-request";
import { productionQuery } from '@/app/modules/productionsQuery';
import Image from 'next/image';

function Productions({ productions }) {

  console.log(productions);

  return (
    <div className="flex flex-wrap gap-4 max-md:gap-8 mx-auto w-full p-8">
      {productions.sort((a, b) => b.release - a.release).map((production, index) => {
        return (
          <article
            key={index + 4}
            id={production.tItle?.toLowerCase().replaceAll(" ", "")}
            className="text-white flex max-md:flex-col duration-300 hover:scale-[1.02]"
          >
            <Link href={`films/${production.pageUrl}`}>
              <Image
                className={`md:max-w-[350px] aspect-[27/40]`}
                src={production.poster?.url}
                alt="poster"
                width={production.poster?.width}
                height={production.poster?.height}
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
}



export default Productions


export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { productions } = await hygraph.request(productionQuery);

  return {
    props: {
      productions,
    },
  };
}