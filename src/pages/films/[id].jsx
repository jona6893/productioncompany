import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { productionQuery } from "@/app/modules/productionsQuery";

function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(film);

 /*  const films = [
    {
      title: "Hybenhjerte",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/hyben.webp",
      video: "https://meritfilm.dk/Playground/videos/HH_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hybenhjerte",
    },
    {
      title: "Hold Hæft",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/hk.webp",
      video: "https://meritfilm.dk/Playground/videos/HK_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "hold-kaeft",
    },
    {
      title: "Bjarke Tømmer Skrald",
      tagline: "Tag dine piller eller du får kræft",
      release: 2023,
      poster: "../images/bts.webp",
      video: "https://meritfilm.dk/Playground/videos/BTW_WEB_070623.mp4",
      overlayColor: "bg-black/25",
      pageUrl: "bts",
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
  ]; */

  return (
    <section className="text-white">
      <h1 className="text-2xl">{film.tItle}</h1>
      <h4>{film.tagline}</h4>
      <p>Release: {film.release}</p>
      <p>Status: {film.stage}</p>
      <p>Type: {film.type}</p>
      <img className="w-60 " src={film.poster.url} alt="" />
    </section>
  );
}

export default Film;


export async function getStaticProps({ params }) {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { productions } = await hygraph.request(productionQuery);

  // find the correct film based on the pageUrl
  const film = productions.find((film) => film.pageUrl === params.id);

  return {
    props: {
      film,
    },
  };
}

export async function getStaticPaths() {
  const hygraph = new GraphQLClient(`${process.env.HYGRAPH_ENDPOINT}`);

  const { productions } = await hygraph.request(productionQuery);

  const paths = productions.map((film) => ({
    params: { id: film.pageUrl },
  }));

  return { paths, fallback: false };
}