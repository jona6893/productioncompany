import Link from 'next/link';
import React from 'react'
import { GraphQLClient } from "graphql-request";
import { productionQuery } from '@/app/modules/productionsQuery';

function Productions({ productions }) {
  const projects = [
    {
      title: "Graffiti",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Annonced",
      img: "images/graffiti.webp",
      type: "Feature",
      year: "2023",
    },
    {
      title: "Hortulan",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Annonced",
      img: "images/hortulan.webp",
      type: "Feature",
      year: "2023",
    },
    {
      title: "Last Jam",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "In Development",
      img: "images/lj.webp",
      type: "Short Film",
      year: "2023",
    },
    {
      title: "Hold Kæft",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Post-Preduction",
      img: "images/hk.webp",
      type: "Short Film",
      year: "2023",
      pageUrl: "hold-kaeft",
    },
    {
      title: "Bjarke Tømmer Skrald",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Finished",
      img: "images/bts.webp",
      type: "Short Film",
      year: "2022",
      pageUrl: "bts",
    },
    {
      title: "Jeg Har Aldrig",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Finished",
      img: "images/bts.webp",
      type: "Short Film",
      year: "2022",
      pageUrl: "jeg-har-aldrig",
    },
    {
      title: "Hybenhjert",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus molestias iste quos earum impedit saepe. Voluptates, maiores blanditiis? Exercitationem, eos eveniet fuga libero magnam unde incidunt. Beatae, quia natus!",
      status: "Finished",
      img: "images/hyben.webp",
      type: "Short Film",
      year: "2021",
      pageUrl: "hybenhjerte",
    },
  ];

  console.log(productions);

  const years = ["2019", "2020", "2021", "2022", "2023"];

  return (
    <div className="grid productionsGrid gap-4 mx-auto w-full">
      {productions.map((production, index) => {
        return (
          <article
            key={index +4}
            id={production.tItle?.toLowerCase().replaceAll(" ", "")}
            className="text-white md:p-6 flex max-md:flex-col"
          >
            <Link href={`films/${production.pageUrl}`}>
            <img
              className={`md:max-h-[500px] aspect-[2/3]`}
              src={production.poster?.url}
              alt=""
            /></Link>
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