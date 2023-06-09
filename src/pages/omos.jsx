import React from 'react'
import { GraphQLClient } from "graphql-request";
import { aboutQuery } from "@/app/modules/aboutQuery";
import Image from 'next/image';

function About({abouts}) {
  const { aboutPeople, aboutBlocks } = abouts[0];
  console.log(abouts)
  
  return (
    <section className="text-white grid gap-16 p-8">
      <div className="grid md:grid-cols-2 gap-4 items-center justify-items-center">
        <div>
          <h2 className="text-4xl mb-4">{aboutBlocks.title}</h2>
          <p className="max-w-[48ch]">{aboutBlocks.description}</p>
        </div>
        <Image
          className=''
          src={aboutBlocks.photo?.url}
          width={aboutBlocks.photo?.width}
          height={aboutBlocks.photo?.height}
          alt="Picture of the author"
        />
      </div>

      <h3 className="text-center text-4xl">The People Behind</h3>
      <div className="flex flex-wrap items-center justify-center gap-16 ">
        {aboutPeople.map((person, i) => (
          <div
            key={i + 7}
            className="grid gap-4 justify-items-center p-4 rounded"
          >
            <Image
              className="w-48 aspect-square object-center object-cover rounded-full"
              src={person.profileImage?.url}
              width={person.profileImage?.width}
              height={person.profileImage?.height}
              alt="Picture of the author"
            />
            <p>{person.name}</p>
            <p>{person.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About


export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { abouts } = await hygraph.request(aboutQuery);

  return {
    props: {
      abouts,
    },
  };
}